<script>

export default {
  name: "homeMain",
  data() {
    return {
      value: new Date(),
      drawer: false,
      direction: 'ltr',
      activeIndex: '1',
      pieChart: null
    }
  },
  methods:{
    isDrawer(){
      this.drawer=!this.drawer
    },
    initPieChart() {
      this.pieChart = this.$echarts.init(this.$refs.pieChart);
      this.renderPieChart();
    },
    renderPieChart() {
      const option = {
        legend: {
          orient: 'vertical',
          x: 'right',
          data: ['A', 'B',]
        },
        series: [
          {
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            labelLine: {
              show: false
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '30',
                fontWeight: 'bold'
              }
            },
            data: [
              { value: 335, name: 'A' },
              { value: 310, name: 'B' }
            ]
          }
        ]
      };
      this.pieChart.setOption(option);
    }
  },
  mounted() {
    this.initPieChart();
  },
}
</script>

<template>
  <div>
    <div style="display: flex; flex-direction: row; flex-wrap: wrap;">

      <el-card class="card-style-children1">
        <span style="font-size: 25px;font-weight: bold;">小区信息</span>
        <div style="display: flex; align-items: center;margin-top: 40px;margin-left: 120px">
          <div style="position: relative;display: flex; align-items: center;width: 160px">
            <div style="background-color: rgb(246, 246, 246); height: 80px; width: 80px; display: flex; align-items: center; justify-content: center; border-radius: 20px;">
              <i class="iconfont icon-organization-" style="margin-right: 5px; font-size: 50px; color: rgb(90, 206, 183);"></i>
            </div>
            <span style="position: absolute; top: 5px; right: 5px;font-size:25px;font-weight: bold;">130</span>
            <span style="position: absolute; bottom: 5px; right: 5px;font-size:15px;font-weight: bold;">楼宇</span>
          </div>

          <div style="position: relative;display: flex; align-items: center;width: 160px;margin-left: 200px">
            <div style="background-color: rgb(246, 246, 246); height: 80px; width: 80px; display: flex; align-items: center; justify-content: center; border-radius: 20px;">
              <i class="iconfont icon-zu3663" style="margin-right: 5px; font-size: 50px; color: rgb(90, 206, 183);"></i>
            </div>
            <span style="position: absolute; top: 5px; right: 5px;font-size:25px;font-weight: bold;">130</span>
            <span style="position: absolute; bottom: 5px; right: 5px;font-size:15px;font-weight: bold;">房屋</span>
          </div>

          <div style="position: relative;display: flex; align-items: center;width: 200px;margin-left: 200px">
            <div style="background-color: rgb(246, 246, 246); height: 80px; width: 80px; display: flex; align-items: center; justify-content: center; border-radius: 20px;">
              <i class="iconfont icon-qianlv-jiaotong" style="margin-right: 5px; font-size: 50px; color: rgb(90, 206, 183);"></i>
            </div>
            <span style="position: absolute; top: 5px; right: 5px;font-size:25px;font-weight: bold;">130/20</span>
            <span style="position: absolute; bottom: 5px; right: 5px;font-size:15px;font-weight: bold;">车位</span>
          </div>
        </div>
        <div class="separator"></div>
        <div style="display: flex; align-items: center;margin-top: 40px;margin-left: 300px">
          <div style="position: relative;display: flex; align-items: center;width: 160px">
            <div style="background-color: rgb(246, 246, 246); height: 80px; width: 80px; display: flex; align-items: center; justify-content: center; border-radius: 20px;">
              <i class="iconfont icon-bianzu" style="margin-right: 5px; font-size: 50px; color: rgb(90, 206, 183);"></i>
            </div>
            <span style="position: absolute; top: 5px; right: 5px;font-size:25px;font-weight: bold;">130</span>
            <span style="position: absolute; bottom: 5px; right: 5px;font-size:15px;font-weight: bold;">住户总数</span>
          </div>

          <div style="position: relative;display: flex; align-items: center;width: 160px;margin-left: 200px">
            <div style="background-color: rgb(246, 246, 246); height: 80px; width: 80px; display: flex; align-items: center; justify-content: center; border-radius: 20px;">
              <i class="iconfont icon-wuliujiaoche" style="margin-right: 5px; font-size: 50px; color: rgb(90, 206, 183);"></i>
            </div>
            <span style="position: absolute; top: 5px; right: 5px;font-size:25px;font-weight: bold;">130</span>
            <span style="position: absolute; bottom: 5px; right: 5px;font-size:15px;font-weight: bold;">车辆总数</span>
          </div>
        </div>
      </el-card>
      <el-card class="card-style-children2">
        <el-menu :default-active="activeIndex" mode="horizontal" @select="handleMenuSelect"  class="menu-with-gap">
          <el-menu-item index="1">通知</el-menu-item>
          <el-menu-item index="2">待办</el-menu-item>
          <el-menu-item index="3">公告</el-menu-item>
          <el-menu-item index="4">制度</el-menu-item>
        </el-menu>
      </el-card>
      <el-card class="card-style-children3">
        <span style="font-size: 25px;font-weight: bold;">住户统计</span>
        <div ref="pieChart" style="height: 250px; width: 500px; "></div>
      </el-card>
      <el-card class="card-style-children4"></el-card>
      <el-card class="card-style-children">
        <el-calendar></el-calendar></el-card>
    </div>
  </div>
</template>

<style scoped>
.menu-with-gap .el-menu-item {
  margin-right: 20px;
  font-size: 15px;
}
.card-style-children1{
  width: 1170px;
  height: 400px;
  border-radius: 20px;
  margin-top: 15px;
  margin-right: 30px;
  margin-left: 30px;
}
.card-style-children2{
  width: 560px;
  height: 400px;
  border-radius: 20px;
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 30px;
}
.card-style-children3{
  width: 560px;
  height: 400px;
  border-radius: 20px;
  margin-top: 30px;
  margin-left: 30px;
  margin-right: 30px;
}
.card-style-children4{
  width: 560px;
  height: 400px;
  border-radius: 20px;
  margin-top: 30px;
  margin-right: 30px;
  margin-left: 20px;
}
.card-style-children{
  width: 560px;
  height: 400px;
  border-radius: 20px;
  margin-top: 30px;
  margin-left: 20px;
  margin-right: 30px;
}
::v-deep .el-calendar-table .el-calendar-day {
  height: 40px;
  text-align: left;
}
.separator {
  height: 2px;
  background-color: #f0f0f0;
  margin-bottom: 20px;
  margin-top: 50px;
}
</style>
