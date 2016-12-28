<template>
    <section id="main">
        <section id="content">
            <h3>搜索结果:</h3>
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
    </section>
</template>

<script>


    import $jsonp from '../http/http.js';


    export default{
        data:function(){
            return {
                subjects:[],
            }
        },
        mounted(){
            var that = this;
            var url = '';
            url = 'https://api.douban.com/v2/movie/search'
            console.log(this.$store.state.searchTxt);
            $jsonp(url,{
                q:this.$store.state.searchTxt
            },function(data){
                that.subjects = data.subjects;
            })
        }
    }
</script>
