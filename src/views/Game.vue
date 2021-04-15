<template>
    <div style="text-align: center;">
        <Button @click="startGame" :disabled="isPlaying" color="green" text="Play"/>
        <Block v-if="isPlaying" :delay="delay" @end="endGame"/>
        <p v-if="showResults">Reaction Time - {{reactionTime}} ms</p>
    </div>
</template>

<script>
    import Button from '../components/Button'
    import Block from '../components/Block'

    export default {
        name: 'Game',
        components: {
            Button,
            Block
        },
        data(){
            return {
                delay: null,
                isPlaying: false,
                reactionTime: null,
                showResults: false
            }
        },
        methods: {
            startGame(){
                this.delay = 2000 + Math.random() * 5000
                this.isPlaying = true;
                this.showResults = false
            },
            endGame(reactionTime){
                this.reactionTime = reactionTime
                this.isPlaying = false
                this.showResults = true
            }
        }
    }
</script>

<style scoped>
     button {
        background: #0faf87;
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 4px;
        font-size: 16px;
        letter-spacing: 1px;
        cursor: pointer;
        margin: 10px;
    }
    button[disabled] {
        opacity: 0.2;
        cursor: not-allowed;
    }
</style>