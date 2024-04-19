import Vue from "vue";
import VueRouter from "vue-router";
import LoginInterface from "@/components/LoginComponents/LoginInterface.vue";
import CellInformation from "@/components/HomePageComponents/Main/PropertyManagementMain/CellInformation.vue";
import HomePage from "@/components/HomePageComponents/Main/HomePageMain/HomePage.vue";
import PropertyInforMation from "@/components/HomePageComponents/Main/PropertyManagementMain/PropertyInforMation.vue";
import PropertyManagement from "@/components/HomePageComponents/Main/ParentMain.vue";
import PositionManagement from "@/components/HomePageComponents/Main/PropertyManagementMain/PositionManagement.vue";
import StaffManagement from "@/components/HomePageComponents/Main/PropertyManagementMain/StaffManagement.vue";
import ParkingRecord from "@/components/HomePageComponents/Main/ParkManagementMain/ParkingRecord.vue";
import ParkManagement from "@/components/HomePageComponents/Main/ParkManagementMain/ParkManagement.vue";
import StallManagement from "@/components/HomePageComponents/Main/ParkManagementMain/StallManagement.vue";
import CarManagement from "@/components/HomePageComponents/Main/ParkManagementMain/CarManagement.vue";
import VehiclesPresent from "@/components/HomePageComponents/Main/ParkManagementMain/VehiclesPresent.vue";

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
                component: PositionManagement
            },
            {
                path: '4',
                component: StaffManagement
            }
        ]
    },
    {
        path: '/park',
        component:PropertyManagement,
        children:[
            {
                path:'management',
                component:ParkManagement
            },
            {
                path: 'stall',
                component: StallManagement
            },
            {
                path: 'car',
                component: CarManagement
            },
            {
                path: 'present',
                component: VehiclesPresent
            },
            {
                path: 'record',
                component: ParkingRecord
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


