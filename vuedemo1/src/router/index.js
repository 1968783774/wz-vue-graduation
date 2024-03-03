import Vue from "vue";
import VueRouter from "vue-router";
import LoginInterface from "@/components/LoginComponents/LoginInterface.vue";
import HomePage from "@/components/HomePageComponents/HomePage.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component:LoginInterface
    },
    {
        path: '/home',
        component: HomePage
    }

]
const router = new VueRouter({
    // 这里配置的是路由和组件的映射关系, 是一个数组.
    routes,
    mode: "history"
})


export default router


