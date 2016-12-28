<template>
    <button type="button" class=" btn btn-default" v-on:click="handleClick">
        <slot>
        </slot>
    </button>
</template>

<script>

    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        methods: {
            handleClick(){
                this.$emit('goPage')
            }
        }

    }
</script>
<style scoped>
    .btn-default {
        border: 2px solid #41b883;
    }
</style>
