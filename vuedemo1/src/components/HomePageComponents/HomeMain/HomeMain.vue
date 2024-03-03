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
  <div class="card-style-parent">
    <div>
      <el-card class="card-style-children">
        <el-calendar></el-calendar>
      </el-card>
    </div>
    <div>
      <el-card class="card-style-children"></el-card>
    </div>
    <div>
      <el-card class="card-style-children"></el-card>
    </div>
    <el-drawer
        title="我是标题"
        :visible.sync="drawer"
        :direction="direction"
        :with-header="false"
        :modal="false"
        :append-to-body="true">
      <span>我来啦!</span>
    </el-drawer>
  </div>
</template>

<style scoped>
::v-deep .el-calendar-table .el-calendar-day {
  height: 50px;
  text-align: left;
}
.card-style-parent{
  display: flex;
  flex-direction: row;
}
.card-style-children{
  width: 500px;
  height: 500px;
  border-radius: 20px;
  margin-top: 20px;
  margin-right: 30px;
}
::v-deep .el-drawer {
  background-color: rgba(243,243,243);
  margin-top: 60px;
  border-radius: 10px;
  background-clip: padding-box;
}
</style>
