<script>
import HomeHeader from "@/components/HomePageComponents/Header/HomeHeader.vue";
import HomeMainMenu from "@/components/HomePageComponents/Main/HomeMainMenu.vue";
import AsideMenu from "@/components/HomePageComponents/Aside/AsideMenu.vue";
import HomeMain from "@/components/HomePageComponents/Main/HomeMain.vue";

export default {
  name: "homePage",
  components: {AsideMenu, HomeMainMenu, HomeHeader, HomeMain},
  data() {
    return {
      drawer: false,
      direction: 'ltr',
      currentView: 'home', // 控制当前显示的视图
      asideActiveIndex: '1', // 默认激活的菜单项索引
    }
  },
  methods:{
    selectMenu(view,index) {
      this.currentView = view;
      // 更新 asideActiveIndex 和 currentView
      if (index!==''){
        this.asideActiveIndex = index
        console.log(this.asideActiveIndex)
      }
      // 如果抽屉是打开的，并且点击了菜单项来切换视图，需要关闭抽屉
      if (this.drawer) {
        this.drawer = false;
      }
    },
    isDrawer(){
      this.drawer=!this.drawer
    }
  }
}
</script>

<template>
  <el-container style="height: 100%">
    <el-header style="background-color: rgba(69,91,117);height: 6%;">
      <HomeHeader @clickBrother="isDrawer"></HomeHeader>
    </el-header>
    <div style="display: flex;height: 100%">
      <el-aside v-if="currentView === 'property'" style="width: 10%;">
        <AsideMenu  :active-index="asideActiveIndex"></AsideMenu>
      </el-aside>
      <el-main style="background-color: rgba(243,243,243)">
        <HomeMain v-if="currentView === 'home'"></HomeMain>
        <router-view v-if="currentView!=='home'"></router-view>
        <el-drawer
            size='50%'
            :visible.sync="drawer"
            :direction="direction"
            :with-header="false"
            :modal="false"
            :append-to-body="true">
          <HomeMainMenu @selectMenu="selectMenu"></HomeMainMenu>
        </el-drawer>
      </el-main>
    </div>
  </el-container>
</template>

<style scoped>
::v-deep .el-drawer {
  background-color: rgba(243,243,243);
  margin-top: 3%;
  border-radius: 10px;
  background-clip: padding-box;
  height: 100%;
}
</style>