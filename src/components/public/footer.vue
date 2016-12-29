<template>
    <footer>
        <ul>

            <router-link :to="{ path: '/index/first', query: {name:'首页',flag:'false'}}" tag="li">

                <span class="glyphicon glyphicon-search"></span>
                <p>搜索</p></router-link>
            <router-link :to="{ path: '/index/home/in_theaters/1',query: {name:'列表',flag:'true'}}" tag="li"><span
                    class="glyphicon glyphicon-home"></span>
                <p>主页</p></router-link>
            <router-link :to="{ path: '/index/my', query: {name:'我的',flag:'true'}}" tag="li"><span
                    class="glyphicon glyphicon-user"></span>
                <p>我的</p></router-link>



        </ul>
    </footer>
</template>

<style>
    * {
        margin: 0;
        padding: 0
    }
    footer {
        bottom: -1px;
    }
    footer ul {
        list-style: none;
        overflow: hidden;
        border: 1px solid #ccc;
        font-family: 微软雅黑;
        margin-top: 0;
        margin-bottom: 0;
        background-color: white;
        color: #41b883;
    }

    footer li:nth-child(1) {
        border-left: 0;
    }

    footer li {
        float: left;
        font-size: 24px;
        width: 33.33%;
        padding: 5px 0;
        text-align: center;
        box-sizing: border-box;
        border-left: 1px solid #ccc;
        line-height: 18px
    }

    .router-link-active {
        background: #ccccb1;
        color: #41af83
    }

    footer li p {
        font-size: 12px;
        margin: 0;
        color: #41b883;
    }


</style>
