<template>
    <section id="main">


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
                        <p><button type="button" class="btn btn-success " @click="del(val.id,index)">删除</button></p>


                    </div>
                </div>

            </li>
        </ul>
    </section>
</template>
<script>
    export default {
        data() {
            return {
                subjects:[]
            }
        },
        methods:{
            del(id,index){
                var thisItem = this.subjects.splice(index,1)
            }
        },
        mounted(){
            this.subjects = this.$store.state.Item;
        },
        computed: {
            subjects(){
                //  console.log(this.$store.state.params)
                return this.$store.state.Item;
            }
        }
    }
</script>
<style>

</style>

