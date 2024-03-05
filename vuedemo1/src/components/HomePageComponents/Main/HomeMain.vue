<script>

export default {
  name: "homeMain",
  data() {
    return {
      value: new Date(),
      drawer: false,
      direction: 'ltr',
    }
  },
  methods:{
    isDrawer(){
      this.drawer=!this.drawer
    }
  }
}
</script>

<template>
  <div>
    <div style="display: flex; flex-direction: row;">
      <el-card class="card-style-children">
        <el-calendar></el-calendar></el-card>
      <el-card class="card-style-children"></el-card>
      <el-card class="card-style-children"></el-card>
    </div>
  </div>
</template>

<style scoped>
::v-deep .el-calendar-table .el-calendar-day {
  height: 50px;
  text-align: left;
}
.card-style-children{
  width: 500px;
  height: 500px;
  border-radius: 20px;
  margin-top: 20px;
  margin-right: 30px;
}
</style>
