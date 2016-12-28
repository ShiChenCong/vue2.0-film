<template>
    <div id="app">
        <headerDiv></headerDiv>

        <router-view></router-view>
        <footerDiv></footerDiv>
    </div>
</template>
<script>
    import headerDiv from './public/header.vue';
    import footerDiv from './public/footer.vue';
    export default {
       components:{
        'headerDiv':headerDiv,
        'footerDiv':footerDiv
       }
    }

</script>
<style>

</style>