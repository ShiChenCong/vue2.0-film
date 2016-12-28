<template>
        <div class="page-swipe">
            <mt-swipe id="ee" :auto="0" :show-indicators="true" :continuous="false" :defaultIndex="1">
                <mt-swipe-item class="slide1">
                    <img src="../assets/1.jpg" alt="">
                </mt-swipe-item>
                <mt-swipe-item class="slide2">
                    <img src="../assets/2.jpg" alt="">
                </mt-swipe-item>
                <mt-swipe-item class="slide3">
                         <img src="../assets/3.jpg" alt="">
                    <router-link :to="{ path: '/index/home/in_theaters/1',query: {name:'列表',flag:'true'}}">
                        <button type="button" class="btn btn-success ">开始使用</button>
                    </router-link>


                </mt-swipe-item>
            </mt-swipe>
        </div>
</template>

<script>

    export default{
        data(){
            return{
                msg:'hello vue',
                continuous:"1"
            }
        },
        mounted(){
           // var index = document.getElementById("e");
            console.log(this.continuous);
        },
        components:{


        }
    }
</script>
<style>
    .page-swipe .mint-swipe {
        left:0;
        right:0;
        top:0;
        button:0;
        position: absolute;
        color: #fff;
        font-size: 30px;
        text-align: center;
    }
    .page-swipe .mint-swipe-item {
        line-height: 500px;
    }
    .page-swipe img{
        width: 100%;
        height: 100%;
        vertical-align: middle;
    }
    .page-swipe .slide1 {
        background-color: #0089dc;
        color: #fff;
    }
    .page-swipe .slide2 {
        background-color: #ffd705;
        color: #000;
    }
    .page-swipe .slide3 {
        background-color: #ff2d4b;
        color: #fff;
    }
    .page-swipe .slide3 button {
        position: absolute;
        left: 50%; top:90%;
        transform: translate(-50%, -50%);    /* 50%为自身尺寸的一半 */
        background-color: rgba(92, 184, 92, 0.88);
        border-color:rgba(76, 184, 92, 0.24);

    }

</style>
