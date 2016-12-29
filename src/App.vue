<template>
    <div>
        <transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
            <router-view></router-view>
        </transition>
    </div>
</template>z
<script>
    import headerDiv from './components/public/header.vue';
    import footerDiv from './components/public/footer.vue';
    export default {
       components:{
         headerDiv,
         footerDiv
       }
    }
</script>

<style>
    *{margin: 0;padding: 0}
    header,footer{position: fixed;width: 100%;background: #fff;z-index: 2}
    header{top: 0}
    footer{bottom: 0}
</style>