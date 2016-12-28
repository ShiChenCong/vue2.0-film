
<template>
    <section id="main">
        <div class="banner">
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="img in banner">
                    <img :style="styleObj" :src="img.images.large"/>
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <section id="content">
            <ul>
                <li v-for="data in subjects">
                    <router-link :to="{ path: '/index/detail', query: {name:'电影详情',id:data.id,flag:'true'}}" tag="div">
                        <div class="imgDiv">
                            <img v-lazy="data.images.large">
                        </div>
                        <p>{{data.title}}</p>
                    </router-link>
                </li>
            </ul>
        </section>
        <div class="mask" v-show="loading">
            <div class="sk-fading-circle">
                <div class="sk-circle1 sk-circle"></div>
                <div class="sk-circle2 sk-circle"></div>
                <div class="sk-circle3 sk-circle"></div>
                <div class="sk-circle4 sk-circle"></div>
                <div class="sk-circle5 sk-circle"></div>
                <div class="sk-circle6 sk-circle"></div>
                <div class="sk-circle7 sk-circle"></div>
                <div class="sk-circle8 sk-circle"></div>
                <div class="sk-circle9 sk-circle"></div>
                <div class="sk-circle10 sk-circle"></div>
                <div class="sk-circle11 sk-circle"></div>
                <div class="sk-circle12 sk-circle"></div>
            </div>
        </div>
    </section>
</template>

<script>
    import Vue from 'vue';
    import $jsonp from '../http/http.js'
    export default{
        data: function () {
            return {
                subjects: [],
                loading: true,
                styleObj: {
                    width: '100%',
                    loading: true,
                }
            }
        },
        computed: {
            banner: function () {
                return this.subjects.slice(5, 10)
            }
        },

        mounted(){
            var that = this;
            $jsonp('https://api.douban.com/v2/movie/coming_soon', {
                        count: 18,
                    },
                    function (data) {
                        // console.log(data)
                        that.subjects = data.subjects;
                        that.loading = false;
                    });
        }
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0
    }

    #main {
        position: absolute;
        padding: 46px 0;
        width: 100%
    }

    section .banner {
        height: 170px;
        border: 1px solid #ccc
    }

    #content {
        position: relative;
        min-height: 200px
    }

    #content ul {
        list-style: none
    }

    #content ul li {
        float: left;
        width: 30%;
        border: 1px solid #ccc;
        box-sizing: border-box;
        text-align: center;
        font-family: 微软雅黑;
        margin-left: 10px;
        margin-bottom: 10px;
    }

    #content ul li .imgDiv {
        width: 100%;
        height: 150px;
        overflow: hidden
    }

    #content ul li img {
        width: 100%;
    }

    #content ul li p {
        padding: 5px 0;
        font-size: 12px;
        color: #727272;
        height:27px;
    }
</style>