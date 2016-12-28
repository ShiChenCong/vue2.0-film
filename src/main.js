import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.vue'
import store from './vuex/store'
import VueRouter from "vue-router";
import routers  from "./router"
Vue.use(VueRouter);
Vue.use(MintUI)
Vue.config.debug = true;
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes:routers
})
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
