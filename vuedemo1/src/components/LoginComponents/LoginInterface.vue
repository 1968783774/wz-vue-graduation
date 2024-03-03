<script>
  import LoginMain from "@/components/LoginComponents/LoginMain.vue";
  import LoginFoot from "@/components/LoginComponents/LoginFoot.vue"

  export default {
    name: "LoginInterface",
    components: {LoginMain,LoginFoot}
  }

</script>

<template>
  <el-container style="background-color: whitesmoke; height: 100%">
    <el-header style="height: 90px">

    </el-header>
    <el-main style="background-color: rgba(238,238,238)" >
      <LoginMain></LoginMain>
    </el-main>
    <el-footer style="background-color: rgba(46,46,55); height: 110px">
      <LoginFoot></LoginFoot>
    </el-footer>
  </el-container>
</template>

<style scoped>


</style>