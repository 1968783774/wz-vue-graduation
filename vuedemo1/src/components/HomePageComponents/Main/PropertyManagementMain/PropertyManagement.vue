<script>

import HomeMainMenu from "@/components/HomePageComponents/MainMenu/HomeMainMenu.vue";
import HomeHeader from "@/components/HomePageComponents/Header/HomeHeader.vue";
import AsideMenu from "@/components/HomePageComponents/Aside/AsideMenu.vue";

export default {
  name: "propertyManagement",
  components: {AsideMenu, HomeMainMenu, HomeHeader},
  data() {
    return {
      drawer: false,
      direction: 'ltr',
      asideActiveIndex: '1', // 默认激活的菜单项索引
    }
  },
  methods:{
    selectMenu(view,index) {
      // 更新 asideActiveIndex 和 currentView
      if (index!==''){
        this.asideActiveIndex = index
      }
      // 如果抽屉是打开的，并且点击了菜单项来切换视图，需要关闭抽屉
      if (this.drawer) {
        this.drawer = false;
      }
      this.$router.push(index,() => {})
    },
    isDrawer(){
      this.drawer=!this.drawer
    }
  },
}
</script>

<template>
  <el-container style="height: 100%">
    <el-header style="background-color: rgba(69,91,117);height: 7%;">
      <HomeHeader @clickBrother="isDrawer"></HomeHeader>
    </el-header>
    <div style="display: flex;height: 100%">
      <el-aside style="width: 10%;height: 100%">
        <AsideMenu  :active-index="asideActiveIndex"></AsideMenu>
      </el-aside>
      <el-main style="background-color: rgba(243,243,243)">
        <router-view></router-view>
        <el-drawer
            size='56.5%'
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
  margin-top: 3.4%;
  border-radius: 10px;
  background-clip: padding-box;
  height: 100%;
}
</style>