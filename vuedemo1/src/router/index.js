import Vue from "vue";
import VueRouter from "vue-router";
import LoginInterface from "@/components/LoginComponents/LoginInterface.vue";
import CellInformation from "@/components/HomePageComponents/Main/CellInformation.vue";
import HomePage from "@/components/HomePageComponents/HomePage.vue";
import PropertyInforMation from "@/components/HomePageComponents/Main/PropertyInforMation.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component:LoginInterface
    },
    {
        path: '/home',
        component: HomePage
    },
    {
        path: '/wz',
        component:HomePage,
        children:[
            {
                path:'/1',
                component:PropertyInforMation
            },
            {
                path: '/2',
                component: CellInformation
            },
            {
                path: '/3',
                component: CellInformation
            },
            {
                path: '/4',
                component: CellInformation
            }
        ]
    },

]
const router = new VueRouter({
    // 这里配置的是路由和组件的映射关系, 是一个数组.
    routes,
    mode: "history"
})


export default router


