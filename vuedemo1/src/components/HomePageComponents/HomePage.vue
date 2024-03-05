<script>
import HomeMain from "@/components/HomePageComponents/Main/HomeMain.vue";
import HomeHeader from "@/components/HomePageComponents/Header/HomeHeader.vue";
import HomeMainMenu from "@/components/HomePageComponents/Main/HomeMainMenu.vue";
import PropertyManagement from "@/components/HomePageComponents/Main/PropertyManagenent.vue";
import AsideMenu from "@/components/HomePageComponents/Aside/AsideMenu.vue";

export default {
  name: "homePage",
  components: {AsideMenu, PropertyManagement, HomeMainMenu, HomeHeader, HomeMain},
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
    <el-header style="background-color: rgba(84,92,100)">
      <HomeHeader @clickBrother="isDrawer"></HomeHeader>
    </el-header>
    <div style="display: flex;height: 100%">
      <el-aside v-if="currentView === 'property'">
        <AsideMenu  :active-index="asideActiveIndex"></AsideMenu>
      </el-aside>
      <el-main style="background-color: rgba(243,243,243)">
        <HomeMain v-if="currentView === 'home'"></HomeMain>
        <PropertyManagement v-if="currentView === 'property'">
        </PropertyManagement>
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
  margin-top: 60px;
  border-radius: 10px;
  background-clip: padding-box;
  height: 100%;
}
</style>