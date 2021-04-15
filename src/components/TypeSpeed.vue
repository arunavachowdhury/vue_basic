<template>
    <h3>Type the following text</h3>

    <p><span 
        :class="{correct: keyword.correct, incorrect: keyword.incorrect, pending: keyword.pending}"
        :key="keyword" 
        v-for="keyword in keywords">
        {{keyword.text}}{{' '}}
        </span>
    </p>

    <input :value="inputValue" type="text" @keyup.space="processInput">
</template>

<script>
    const defaultKeywords = [
        'javascript',
        'jquery',
        'html',
        'css',
        'vue',
        'react',
        'angular',
        'redux',
        'vuex',
        'next',
        'typescript',
        'flutter',
        'eslint',
        'es6',
        'bootstrap',
        'tailandcss'
    ].map((keyword) => {
        return {
            text: keyword,
            correct: false,
            incorrect: false,
            pending: true
        }
    });
    export default {
        name: 'TypeSpeed',
        data(){
            return {
                inputValue: "",
                index: 0,
                keywords: defaultKeywords
            }
        },
        methods: {
            processInput(event){
                const value = event.target.value.trim();
                if(value === ""){
                    return;
                }

                if(this.keywords[this.index].text === value){
                    this.keywords[this.index].correct = true;
                    this.keywords[this.index].incorrect = false;
                    this.keywords[this.index].pending = false;
                }else{
                    this.keywords[this.index].correct = false;
                    this.keywords[this.index].incorrect = true;
                    this.keywords[this.index].pending = false;
                }
                
                this.inputValue = "";
                this.index++;

            }
        }
    }
</script>

<style scoped>
    .correct{
        font-weight: bold;
        color: green
    }
    
    .incorrect{
        font-weight: bold;
        color: red
    }
    
    .pending{
        font-weight: bold;
    }
</style>