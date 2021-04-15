<template>
    <AddTask v-show="showTaskForm" @add-task="addNewTask" />
    <Tasks @change-reminder="updateReminder" @del-task="deleteTask" :tasks="tasks"/>
</template>

<script>
    import Tasks from '../components/Tasks'
    import AddTask from '../components/AddTask'

    export default {
        name: 'Home',
        components: {
            Tasks,
            AddTask
        },
        props: {
            showTaskForm: Boolean
        },
        data() {
            return {
                tasks: []
            }
        },
        methods: {
            async deleteTask(id){
                if(confirm('Are you sure?')){
                    const res = await fetch(`api/tasks/${id}`, {
                        method: 'DELETE'
                    });

                    if(res.status === 200){
                        this.tasks = this.tasks.filter((task) => task.id !== id);
                    }else{
                        alert('Error Occured');
                    }
                }

            },
            async updateReminder(id){
                const toggleTask = await this.fetchTask(id);

                const updateTask = { ...toggleTask, reminder: !toggleTask.reminder };

                const res = await fetch(`api/tasks/${id}`, {
                    method: 'PUT',
                    headers: {
                    'Content-type': 'application/json'
                    },
                    body: JSON.stringify(updateTask)
                });

                const data = await res.json();

                this.tasks = this.tasks.map((task) => task.id === data.id ? { ...task, reminder: data.reminder } : task);
            },
            async addNewTask(newTask){
                const res = await fetch('api/tasks', {
                    method: 'POST',
                    headers: {
                    'Content-type': 'application/json'
                    },
                    body: JSON.stringify(newTask),
                });

                const data = await res.json();

                this.tasks = [...this.tasks, data];
            },
            async fetchTasks(){
                const res = await fetch('api/tasks');

                const data = await res.json();

                return data;
                },
            async fetchTask(id){
                const res = await fetch(`api/tasks/${id}`);

                const data = await res.json();

                return data;
            }
        },
        async created() {
            this.tasks = await this.fetchTasks();
        }
    }
</script>