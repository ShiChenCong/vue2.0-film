

<template>
    <header id="header">
        <div v-if="flag=='true'">
            <i @click="handleClick"><span class="glyphicon glyphicon-chevron-left"></span></i>
            <span>{{$route.query.name == null ? '首页': $route.query.name}}</span>
        </div>

        <div id="search" v-if="flag=='false'">
                <input type="text" placeholder="电影名、演员、类型" v-model="searchText"/>
                <button @click="search">搜索</button>

        </div>
    </header>
</template>

<script>
    export default{
        data: function () {
            return {
                searchText: ''
            }
        },
        methods: {
            handleClick: function () {
                this.$router.go(-1);
            },
            search: function () {
                this.$store.commit('pushTxt',this.searchText);
                this.$router.push({path : '/index/search',query: {name:'搜索结果',flag:'true'}});
                this.searchText = '';
            }
        },
        computed: {
            flag: function () {
                return this.$route.query.flag;
            }
        }
    }
</script>


<style>
    * {
        margin: 0;
        padding: 0
    }

    header {
        border: 1px solid #41b883;
        font-family: 微软雅黑;
        font-size: 13px;
        text-align: center;
        height: 46px;
        line-height: 46px;
        border-radius: 5px;
    }


    header i {
        position: absolute;
        left: 5px
    }

    #search {
        position: absolute;
        top: 0;
        font-family: 微软雅黑;
        font-size: 13px;
        height: 40px;
        box-sizing: border-box;
        width: 100%;
        background: #fff;
    }

    #search input {
        position: absolute;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        outline: none;
        border: 0;
        color: #727272;
        padding-left: 5px;
        margin-bottom: 5px;
    }

    #search button {
        position: absolute;
        right: 0;
        z-index: 3;
        width: 60px;
        top: 0;
        bottom: 0;
        border: none;
        outline: none;
        height: 45px;
        border-radius: 5px;
        border: 1px solid #41b883;
        background-color: #01b883
    }
</style>