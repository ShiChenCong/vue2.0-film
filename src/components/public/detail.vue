
<template>
    <section id="main">
        <div class="banner">
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="cas in movieDetail.casts">
                    <img :src="cas.avatars.large"/>
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <section class="contenr">

            <ul>
                <li><span>名称：<a>{{movieDetail.title}}</a></span><span>类别：<a v-for="type in movieDetail.genres">{{ type }}</a></span>
                </li>
                <li><span>地区：<a
                        v-for="t in movieDetail.countries">{{t}}</a></span><span>时间：<a>{{movieDetail.year}} 年</a></span>
                </li>
                <li>
                    <span>想看：<a>{{movieDetail.wish_count}} 人</a></span><span>看过：<a>{{movieDetail.collect_count}} 人</a></span>
                </li>
                <li>主演：<a v-for="cas in movieDetail.casts">{{ cas.name }}</a></li>
                <li>简介：</li>
                <li><p v-html="movieDetail.summary"></p></li>
            </ul>
        </section>
    </section>
</template>

<script>
    import $jsonp from '../../http/http.js'
    export default{
        data: function () {
            return {
                list: [],
                movieDetail: {}
            }
        },

        mounted(){
            var that = this;
            var id = that.$route.query.id;
            $jsonp('https://api.douban.com/v2/movie/subject/' + id ,{},function (data) {
                console.log(data);
                that.movieDetail = data;

            })
        }
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0
    }

    section .banner {
        height: 400px;
        border: 1px solid #ccc;
        overflow: hidden
    }

    section .banner img {
        width: 100%
    }

    section .contenr li {
        list-style: none;
        font-size: 13px;
        font-family: 微软雅黑;
        padding: 5px 0;
        border-bottom: 1px solid #ccc;
        color: #727272
    }

    section .contenr li span {
        display: inline-block;
        width: 50%
    }

    section .contenr li a {
        display: inline-block;
        padding: 0 5px
    }
</style>
