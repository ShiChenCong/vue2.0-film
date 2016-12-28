/**
 * Created by cql-cql-cql on 2016/12/20
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        count:4,
        in_theaters: 'in_theaters',
        coming_soon: 'coming_soon',
        top250: 'top250',
        params: 'in_theaters',
        searchTxt:'',
        Item:[]
    },
    mutations: {
        handleClick (state,params) {
            state.params = state[params]

        },
        pushTxt:function(state,txt){
            state.searchTxt = txt;
        },
        pushItem:function(state,thisItem){
             state.Item = state.Item.concat(thisItem)
             // console.log(state.Item)
        }
    }
})

export default store
