<script>
export default {
  name: "homeMainMenu"
}
</script>

<template>
  <div style="display: flex;flex-direction: row;flex-wrap: wrap">
    <el-card  class="drawer-card-style">
      <div style="display: flex;flex-direction: row;font-size: 22px">
        <div>
          <el-link :underline="false" style="margin-right: 10px;width: 90px;font-size: 16px">
            <i class="el-icon-s-platform" style="margin-right: 5px;"></i>物业管理</el-link>
        </div>
        <el-divider direction="vertical" style="margin-right: 10px;margin-left: 50px"></el-divider>
        <div>
          <el-link :underline="false" style="margin-left: 30px">物业信息</el-link>
          <el-link :underline="false" style="margin-left: 30px">小区管理</el-link>
          <el-link :underline="false" style="margin-left: 30px">岗位管理</el-link>
          <el-link :underline="false" style="margin-left: 30px">员工管理</el-link>
        </div>
      </div>
    </el-card>
    <el-card  class="drawer-card-style">
      <div style="display: flex;flex-direction: row;font-size: 22px">
        <div>
          <el-link :underline="false" style="margin-right: 10px;width: 90px;font-size: 16px">
            <i class="el-icon-s-platform" style="margin-right: 5px;"></i>物业管理</el-link>
        </div>
        <el-divider direction="vertical" style="margin-right: 10px;margin-left: 50px"></el-divider>
        <div>
          <el-link :underline="false" style="margin-left: 30px">物业信息</el-link>
          <el-link :underline="false" style="margin-left: 30px">小区管理</el-link>
          <el-link :underline="false" style="margin-left: 30px">岗位管理</el-link>
          <el-link :underline="false" style="margin-left: 30px">员工管理</el-link>
        </div>
      </div>
    </el-card>
    <el-card  class="drawer-card-style">
      <div style="display: flex;flex-direction: row;font-size: 22px">
        <div>
          <el-link :underline="false" style="margin-right: 10px;width: 90px;font-size: 16px">
            <i class="el-icon-s-platform" style="margin-right: 5px;"></i>物业管理</el-link>
        </div>
        <el-divider direction="vertical" style="margin-right: 10px;margin-left: 50px"></el-divider>
        <div>
          <el-link :underline="false" style="margin-left: 30px">物业信息</el-link>
          <el-link :underline="false" style="margin-left: 30px">小区管理</el-link>
          <el-link :underline="false" style="margin-left: 30px">岗位管理</el-link>
          <el-link :underline="false" style="margin-left: 30px">员工管理</el-link>
        </div>
      </div>
    </el-card>
    <el-card  class="drawer-card-style">
      <div style="display: flex;flex-direction: row;font-size: 22px">
        <div>
          <el-link :underline="false" style="margin-right: 10px;width: 90px;font-size: 16px">
            <i class="el-icon-s-platform" style="margin-right: 5px;"></i>物业管理</el-link>
        </div>
        <el-divider direction="vertical" style="margin-right: 10px;margin-left: 50px"></el-divider>
        <div>
          <el-link :underline="false" style="margin-left: 30px">物业信息</el-link>
          <el-link :underline="false" style="margin-left: 30px">小区管理</el-link>
          <el-link :underline="false" style="margin-left: 30px">岗位管理</el-link>
          <el-link :underline="false" style="margin-left: 30px">员工管理</el-link>
        </div>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
.drawer-card-style{
  width: 448px;
  height: 130px;
  margin-left: 20px;
  margin-top: 30px;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
}
::v-deep .el-divider--vertical{
  height: 90px;
}
</style>