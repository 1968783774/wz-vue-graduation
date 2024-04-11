<script>

export default {
  name: "homeMain",
  data() {
    return {
      value: new Date(),
      drawer: false,
      direction: 'ltr',
      activeIndex: '1',
      pieChart1: null,
      pieChart2: null,
      livedIn:20,
      livedOut:10,
      carIn:10,
      carOut:5,

    }
  },
  methods:{
    isDrawer(){
      this.drawer=!this.drawer
    },
    initPieChart() {
      this.pieChart1 = this.$echarts.init(this.$refs.pieChart1);
      this.pieChart2 = this.$echarts.init(this.$refs.pieChart2);
      this.renderPieChart();
    },
    renderPieChart() {
      const option1 = {
        legend: {
          orient: 'vertical',
          x: 'right',
          data: ['已入住', '未入住',]
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
                fontSize: '14',
                fontWeight: 'bold'
              }
            },
            data: [
              { value: this.livedIn, name: '已入住' },
              { value: this.livedOut, name: '未入住' }
            ]
          }
        ]
      };
      const option2 = {
        legend: {
          orient: 'vertical',
          x: 'right',
          data: ['已停车辆', '剩余车辆',]
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
                fontSize: '14',
                fontWeight: 'bold'
              }
            },
            data: [
              { value: this.livedIn, name: '已停车辆',itemStyle:{color:'skyblue'} },
              { value: this.livedOut, name: '剩余车辆',itemStyle:{color:'yellow'} }
            ]
          }
        ]
      };
      this.pieChart1.setOption(option1);
      this.pieChart2.setOption(option2);
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
        <div ref="pieChart1" style="height: 250px; width: 500px; "></div>
        <div style="display: flex; align-items: center;justify-content: space-between;margin-top: 30px;margin-left:10px">
          <span style="font-size: 20px;font-weight: bold;">已入住：{{this.livedIn}}</span>
          <span style="font-size: 20px;font-weight: bold;">未入住：{{this.livedOut}}</span>
          <span style="font-size: 20px;font-weight: bold;">房屋总数：{{this.livedIn+this.livedOut}}</span>
        </div>
      </el-card>
      <el-card class="card-style-children4">
        <span style="font-size: 25px;font-weight: bold;">车辆统计</span>
        <div ref="pieChart2" style="height: 250px; width: 500px; "></div>
        <div style="display: flex; align-items: center;justify-content: space-between;margin-top: 30px;margin-left:10px">
          <span style="font-size: 20px;font-weight: bold;">已停车辆：{{this.carIn}}</span>
          <span style="font-size: 20px;font-weight: bold;">剩余车位：{{this.carOut}}</span>
          <span style="font-size: 20px;font-weight: bold;">车位总数：{{this.carIn+this.carOut}}</span>
        </div>
      </el-card>
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
