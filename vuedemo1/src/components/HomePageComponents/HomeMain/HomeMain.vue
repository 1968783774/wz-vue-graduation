<script>
import HomeMainMenu from "@/components/HomePageComponents/HomeMain/HomeMainMenu.vue";

export default {
  name: "homeMain",
  components: {HomeMainMenu},
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
    </div>
    <div>
      <el-drawer
          title="我是标题"
          size='50%'
          :visible.sync="drawer"
          :direction="direction"
          :with-header="false"
          :modal="false"
          :append-to-body="true">
        <HomeMainMenu></HomeMainMenu>
      </el-drawer>
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
::v-deep .el-drawer {
  background-color: rgba(243,243,243);
  margin-top: 60px;
  border-radius: 10px;
  background-clip: padding-box;
  height: 100%;
}
</style>
