import Vue from "vue";
import VueRouter from "vue-router";
import LoginInterface from "@/components/LoginComponents/LoginInterface.vue";
import CellInformation from "@/components/HomePageComponents/Main/PropertyManagementMain/ChildrenMain/CellInformation.vue";
import HomePage from "@/components/HomePageComponents/Main/HomePageMain/HomePage.vue";
import PropertyInforMation from "@/components/HomePageComponents/Main/PropertyManagementMain/ChildrenMain/PropertyInforMation.vue";
import PropertyManagement from "@/components/HomePageComponents/Main/PropertyManagementMain/PropertyManagement.vue";

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
        path: '/property',
        component:PropertyManagement,
        children:[
            {
                path:'1',
                component:PropertyInforMation
            },
            {
                path: '2',
                component: CellInformation
            },
            {
                path: '3',
                component: CellInformation
            },
            {
                path: '4',
                component: CellInformation
            }
        ]
    },
    {
        path: '/park',
        component:PropertyManagement,
        children:[
            {
                path:'management',
                component:PropertyInforMation
            },
            {
                path: 'stall',
                component: CellInformation
            },
            {
                path: 'car',
                component: CellInformation
            },
            {
                path: 'present',
                component: CellInformation
            },
            {
                path: 'record',
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


