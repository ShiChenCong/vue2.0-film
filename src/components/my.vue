<template>
    <section id="main">
        <div id="user" @click="tiaozhuan">
            <div id="userHeader"></div>
            <p>{{ userName }}</p>
            <!--<router-link :to="{ path: '/login'}" tag="div"> <p>{{ userName }}</p> </router-link>-->
        </div>
        <div class="list1">
            <mt-cell title="我的消息" value=">"></mt-cell>
            <router-link :to="{ path: '/index/myCollection',query: {name:'我的收藏',flag:'true'}}">  <mt-cell title="我的订单" value=">"></mt-cell></router-link>
            <mt-cell title="我的足迹" value=">"></mt-cell>
            <mt-cell title="我的分享" value=">"></mt-cell>
        </div>
        <div class="list2">
            <mt-cell title="猜你喜欢" value=">"></mt-cell>
            <mt-cell title="会员中心" value=">"></mt-cell>
        </div>
        <div class="list3">
            <mt-cell title="设置" value=">"></mt-cell>
        </div>
    </section>
</template>
<script>
    export default {
        data() {
            return {
                userName:'立即登录'
            }
        },
        methods:{
            tiaozhuan(){
                this.$router.push({ path: '/login' })

            }
        }
    }
</script>
<style>

#user{
    height:120px;
    background:rgba(41,148,83,0.7);
}
#userHeader{
    background:black;
    border-radius:40px;
    width:80px;
    height:80px;
    position:absolute;
    top:65px;
    left:20px;
}
#user p{
    font-size:20px;
    position:absolute;
    top:90px;
    left:120px;
}
.list1{
    height:80px;
    border-top:15px rgb(224,224,224) solid;
}
.list2{
    height:80px;
    margin-top:125px;
    border-top:15px rgb(224,224,224) solid;
}
.list3{
    height:80px;
    margin-top:30px;
    border-top:15px rgb(224,224,224) solid;
}
</style>

