

<template>
    <div id="navBar">
        <div>
            <span>广州</span><span id="ss" class="glyphicon glyphicon-chevron-down"></span>
            <slot>

            </slot>
        </div>
    </div>
</template>

<script>
import $jsonp from '../../http/http.js'
    export default{
        data:function(){
            return {
                searchText:''
            }
        },
        methods:{


        }
    }
</script>


<style>

    #navBar{border:1px solid #ccc;font-family: 微软雅黑;font-size: 13px;text-align: center;height: 40px;line-height: 32px; border-radius:5px;}

    #navBar span{
        color:black;
        margin-right:0;
        font-size:16px;
        border-radius:5px;
        position:relative;
        left:-30px;
        top:4px;
    }
    #navBar #ss {
        position:relative;
        left:-30px;
        top:8px;
    }
</style>