<template>

    <section id="main">
        <nav-bar>
            <button-c v-on:goPage="goPage('in_theaters')">正在热映</button-c>
            <button-c v-on:goPage="goPage('coming_soon')">即将上映</button-c>
            <button-c v-on:goPage="goPage('top250')">Top250</button-c>
        </nav-bar>



        <ul class="list-group">
            <li class="list-group-item " v-for="(val,index) in subjects" :key="index ">


                    <div class="media">
                        <div class="media-left media-middle" href="#">
                            <img v-bind:src="val.images.medium" alt="val.title">
                        </div>
                        <div class="media-body">
                            <router-link :to="{ path: '/index/detail', query: {name:'电影详情',id:val.id,flag:'true'}}" tag="div">
                            <h4 class="media-heading">{{val.title}} <span class="badge">{{val.rating.average}}</span>
                            </h4>

                            <p>导演: <span v-for="(item,index) in val.directors">{{item.name}}</span></p>
                            <p>演员: <span v-for="(item,index) in val.casts">{{item.name.toString()}}</span></p>
                            <p>类型: <span>{{val.genres.toString()}}</span></p>
                            </router-link>
                            <p><button type="button" class="btn btn-success " @click="save(val.id,index)">购买</button></p>


                        </div>
                    </div>

            </li>
        </ul>
        <p v-show="!loading"></p>
        <div class="mask" v-show="loading">
            <div class="spinner">
                <div class="double-bounce1"></div>
                <div class="double-bounce2"></div>
            </div>
        </div>
        <nav>
            <ul v-show="!loading" class="pager">
                <li v-bind:class="{disabled:page<=1}" class="previous">
                    <a @click="goPageOlder('')">&larr; Older</a></li>
                <li>总共有{{totalCount}}条数据 {{page}}/{{totalPage}}页</li>
                <li v-bind:class="{disabled:page>=totalPage}" class="next"><a @click="goPageNewer('')">Newer &rarr;</a>
                </li>
            </ul>
        </nav>
    </section>
</template>
<script>
    import $jsonp from '../http/http.js'
    import buttonC from './public/buttonC.vue'
    import navbar from './public/navBar.vue'

    export default {
        data() {
            return {
                "title": "Loading",
                "subjects": [],
                "loading": true,
                "page": 0, //第几页初始值
                "count": 10, //每页显示几个
                "totalCount": 0, //总共多少个数据
                "totalPage": 0, //一共有几页
                "path": '',//路径

            }
        },
        methods: {
            goPage(params) {
                //传一个页码的参数

                this.$router.push({
                    path: '/index/home/' + this.$route.params.list + "/" + this.page + "?flag=" + this.$route.query.flag
                });
                this.pageList(params);
            },
            //退后
            goPageOlder(params){
                if (this.page <= 1) {
                    this.page = 1
                    return
                }
                this.page--
                this.goPage(this.$route.params.list);
            },
            //前进
            goPageNewer(params){

                if (this.page >= this.totalPage) {
                    this.page = this.totalPage
                    return
                }
                this.page++
                this.goPage(this.$route.params.list)
            },
            pageList(params) {
                // 获取当前页码
                this.page = parseInt(this.$route.params.page);
                // 开始页码
                this.start = (this.page - 1) * this.count;
                console.log(params)

                var that = this;
                //$jsonp('https://api.douban.com/v2/movie/'+this.$route.params.list, {
                //$jsonp('https://api.douban.com/v2/movie/'+this.$route.params.list, {
                $jsonp('https://api.douban.com/v2/movie/' + params, {
                            count: that.count,
                            start: that.start
                        },
                        function (data) {
                            // console.log(data)
                            that.subjects = data.subjects;
                            that.title = data.title;
                            that.loading = false;
                            that.totalCount = data.total;
                            that.totalPage = Math.ceil(that.totalCount / that.count); //总数除以每页多少，获取到的总共多少页
                        });
            },
            save(id,index){

                var thisItem = this.subjects.splice(index,1,this.subjects[index])
//                console.log(thisItem)
                this.$store.commit('pushItem',thisItem);
                console.log(this.$store.state.Item)
//
            }
        },
        mounted: function () {
            this.pageList("in_theaters");

        },
        components: {
            'navBar': navbar,
            'buttonC': buttonC,

        },
        computed: {
            params(){
                //  console.log(this.$store.state.params)
                return this.$store.state.params
            }
        }
    }
</script>
<style>
    #main ul .media button{
        width: 60px;
        height: 32px;
        /*position: absolute;*/
    }
    .list-group .media {
        margin-top: 0;
    }

    .list-group .badge {
        position: absolute;
        right: 10px;
    }

    .mask {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.4);
        z-index: 1999;
    }

    .spinner {
        width: 40px;
        height: 40px;
        position: relative;
        margin: 300px auto;
    }

    .double-bounce1,
    .double-bounce2 {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #333;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
        animation: sk-bounce 2.0s infinite ease-in-out;
    }

    .double-bounce2 {
        -webkit-animation-delay: -1.0s;
        animation-delay: -1.0s;
    }

    @-webkit-keyframes sk-bounce {
        0%,
        100% {
            -webkit-transform: scale(0.0)
        }
        50% {
            -webkit-transform: scale(1.0)
        }
    }

    @keyframes sk-bounce {
        0%,
        100% {
            transform: scale(0.0);
            -webkit-transform: scale(0.0);
        }
        50% {
            transform: scale(1.0);
            -webkit-transform: scale(1.0);
        }
    }
</style>
