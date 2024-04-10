<script>
import HomeHeader from "@/components/HomePageComponents/Header/HomeHeader.vue";
import HomeMainMenu from "@/components/HomePageComponents/MainMenu/HomeMainMenu.vue";
import HomeMain from "@/components/HomePageComponents/Main/HomePageMain/ChildrenMain/HomeMain.vue";

export default {
  name: "homePage",
  components: { HomeMainMenu, HomeHeader, HomeMain},
  data() {
    return {
      drawer: false,
      direction: 'ltr',
      asideActiveIndex: '/property/1', // 默认激活的菜单项索引
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
    },
    isDrawer(){
      this.drawer=!this.drawer
    }
  },
}
</script>

<template>
  <el-container style="height: 100%">

    <el-header style="background-color: rgba(69,91,117);height: 70px;display: flex; align-items: center;">
      <HomeHeader style="display: flex; align-items: center;" @clickBrother="isDrawer"></HomeHeader>
    </el-header>

    <div style="display: flex;height: 100%">
      <el-main style="background-color: rgba(243,243,243)">
        <HomeMain></HomeMain>
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
  margin-top: 3.6%;
  border-radius: 10px;
  background-clip: padding-box;
  height: 100%;
}
</style>