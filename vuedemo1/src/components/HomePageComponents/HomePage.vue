<script>
import HomeMain from "@/components/HomePageComponents/HomeMain/HomeMain.vue";
import HomeHeader from "@/components/HomePageComponents/HomeHeader/HomeHeader.vue";

export default {
  name: "homePage",
  components: {HomeHeader, HomeMain},
  methods:{
      getDrawer(){
      this.$refs.brother.isDrawer()
    }
  }
}
</script>

<template>
  <el-container style="height: 100%">
    <el-header style="background-color: rgba(90,206,183)">
      <HomeHeader @clickBrother="getDrawer"></HomeHeader>
    </el-header>
    <el-main style="background-color: rgba(243,243,243)">
      <HomeMain ref="brother"></HomeMain>
    </el-main>
  </el-container>
</template>

<style scoped>

</style>