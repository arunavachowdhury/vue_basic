<template>
    <header>
        <h3 v-show="homePage">{{title}}</h3>
        <div class="">
            <Button v-show="homePage" @btn-click="$emit('start-game')" color="blue" text="Play Game"/>
            <Button v-show="homePage" @btn-click="$emit('toggle-task-form')" 
                :color="showTask ? 'red' : 'green'" 
                :text="showTask ? 'Close' : 'Add Task'" />
        </div>
        
    </header>
</template>

<script>
    import Button from './Button';

    export default {
        name: 'Header',
        props: {
            title: {
                type: String
            },
            showTask: Boolean
        },
        components: {
            Button
        },
        computed: {
            homePage(){
                if(this.$route.path == '/'){
                    return true;
                }else{
                    return false;
                }
            }
        }
    }
</script>

<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
</style>