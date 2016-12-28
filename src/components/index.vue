<template>
    <div id="app">
        <headerDiv></headerDiv>
        <transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
        <router-view></router-view>
        </transition>
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
    .bounce-enter-active {
        animation: bounce-in .5s;
    }
    .bounce-leave-active {
        animation: bounce-out .5s;
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }
    @keyframes bounce-out {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(0);
        }
    }
</style>