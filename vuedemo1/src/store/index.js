import Vue from 'vue'
import Vuex from 'vuex'
// 应用vuex插件
Vue.use(Vuex)

// 创建并暴露store
export default new Vuex.Store({
    // 数据,相当于data
    state: {
        options: [{
            value: '选项1',
            label: '黄金糕小区'
        }, {
            value: '选项2',
            label: '双皮奶小区'
        }, {
            value: '选项3',
            label: '蚵仔煎小区'
        }, {
            value: '选项4',
            label: '龙须面小区'
        }, {
            value: '选项5',
            label: '北京烤鸭小区'
        }],
        menuType:''
    },
    //准备getters——用于将state中的数据进行加工
    getters: {

        //拿值
        getTypeMenu:(state) => {
            return state.menuType;
        }

    },
    //准备mutations——用于操作数据（state）
    mutations: {
        setTypeMenu:(state,payload) => {
            // state对象就对应了state.js中的对象
            // payload载荷 对应的 传递的 json对象参数{name:zs,age:14}
            state.menuType = payload.menuType;
        }
    },
    //准备actions——用于响应组件中的动作
    actions: {

    },
    modules: {}
})