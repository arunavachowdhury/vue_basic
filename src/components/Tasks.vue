<template>
    <div v-bind:key="task.id" v-for="task in tasks">
        <Task @change-reminder="$emit('change-reminder', $event)" @delete-task="$emit('del-task', $event)" :task="task"/>
    </div>
    
</template>

<script>
    import Task from './Task'

    export default {
        name: 'Tasks',
        components: {
            Task
        },
        emits: ['del-task', 'change-reminder'],
        props: {
            tasks: Array
        }
    }
</script>