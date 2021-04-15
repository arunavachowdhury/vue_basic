<template>
    <button @click="buttonClick" :style="{background: color}" class="btn">{{text}}</button>
</template>

<script>
    export default {
        name: 'Button',
        props: {
            text: {
                type: String,
                default: 'Add Task'
            },
            color: {
                type: String,
                default: 'black'
            }
        },
        methods: {
            buttonClick(){
                this.$emit('btn-click');
            }
        }
    }
</script>