<script>
export default {
  name: "homeMainMenu",
  methods: {
    selectHome() {
      this.$emit('selectMenu', 'home');
      this.$router.push("/home",() => {})
    },
    selectMenuItem(itemIndex) {
      this.$emit('selectMenu', 'property',itemIndex);
      this.$router.push(itemIndex,() => {})
    }
  }
}
</script>

<template>
  <div style="display: flex;flex-direction: row;flex-wrap: wrap">
    <el-button style="margin-top: 20px;margin-left: 20px;width: 100px;border-radius: 10px" @click="selectHome">首页</el-button>
    <el-divider direcyion="horizontal"></el-divider>
    <el-card  class="drawer-card-style">
      <div style="display: flex;flex-direction: row;">
        <div>
          <el-button class="property-button" @click="selectMenuItem('1')">
            <i class="el-icon-s-platform" style="margin-right: 5px;"></i>物业管理</el-button>
        </div>
        <el-divider direction="vertical"></el-divider>
        <div style="display: flex;flex-direction: row;flex-wrap: wrap;align-items: flex-start">
          <el-button class="menu-button" @click="selectMenuItem('1')">物业信息</el-button>
          <el-button class="menu-button" @click="selectMenuItem('2')">小区信息</el-button>
          <el-button class="menu-button" @click="selectMenuItem('3')">岗位管理</el-button>
          <el-button class="menu-button" @click="selectMenuItem('4')">员工管理</el-button>
        </div>
      </div>
    </el-card>
    <el-card  class="drawer-card-style">
      <div style="display: flex;flex-direction: row;">
        <div>
          <el-button class="property-button" @click="selectProperty">
            <i class="el-icon-office-building" style="margin-right: 5px;"></i>小区管理</el-button>
        </div>
        <el-divider direction="vertical"></el-divider>
        <div style="display: flex;flex-direction: row;flex-wrap: wrap;align-items: flex-start">
          <el-button class="menu-button">业务受理</el-button>
          <el-button class="menu-button">房屋装修</el-button>
          <el-button class="menu-button">产权登记</el-button>
          <el-button class="menu-button">抄表设置</el-button>
          <el-button class="menu-button">物品放行</el-button>
          <el-button class="menu-button">小区公示</el-button>
          <el-button class="menu-button">业务会</el-button>
        </div>
      </div>
    </el-card>
    <el-card  class="drawer-card-style">
      <div style="display: flex;flex-direction: row;">
        <div>
          <el-button class="property-button" @click="selectProperty">
            <i class="el-icon-s-home" style="margin-right: 5px;"></i>房产管理</el-button>
        </div>
        <el-divider direction="vertical"></el-divider>
        <div style="display: flex;flex-direction: row;flex-wrap: wrap;align-items: flex-start">
          <el-button class="menu-button">房屋管理</el-button>
          <el-button class="menu-button">商铺管理</el-button>
          <el-button class="menu-button">场地管理</el-button>
          <el-button class="menu-button">场地预约</el-button>
        </div>
      </div>
    </el-card>
    <el-card  class="drawer-card-style">
      <div style="display: flex;flex-direction: row;">
        <div>
          <el-button class="property-button" @click="selectProperty">
            <i class="el-icon-truck" style="margin-right: 5px;"></i>停车场管理</el-button>
        </div>
        <el-divider direction="vertical"></el-divider>
        <div style="display: flex;flex-direction: row;flex-wrap: wrap;align-items: flex-start">
          <el-button class="menu-button">停车场管理</el-button>
          <el-button class="menu-button">岗亭管理</el-button>
          <el-button class="menu-button">车位管理</el-button>
          <el-button class="menu-button">车辆管理</el-button>
          <el-button class="menu-button">在场车辆</el-button>
          <el-button class="menu-button">停车记录</el-button>
        </div>
      </div>
    </el-card>
    <el-card  class="drawer-card-style">
      <div style="display: flex;flex-direction: row;">
        <div>
          <el-button class="property-button" @click="selectProperty">
            <i class="el-icon-s-custom" style="margin-right: 5px;"></i>业主管理</el-button>
        </div>
        <el-divider direction="vertical"></el-divider>
        <div style="display: flex;flex-direction: row;flex-wrap: wrap;align-items: flex-start">
          <el-button class="menu-button">业主信息</el-button>
          <el-button class="menu-button">业主成员</el-button>
          <el-button class="menu-button">业主绑定</el-button>
          <el-button class="menu-button">业主账户</el-button>
          <el-button class="menu-button">故障报修</el-button>
          <el-button class="menu-button">业主投诉</el-button>
          <el-button class="menu-button">满意度调查</el-button>
        </div>
      </div>
    </el-card>
    <el-card  class="drawer-card-style">
      <div style="display: flex;flex-direction: row;">
        <div>
          <el-button class="property-button" @click="selectProperty">
            <i class="el-icon-suitcase" style="margin-right: 5px;"></i>设备管理</el-button>
        </div>
        <el-divider direction="vertical"></el-divider>
        <div style="display: flex;flex-direction: row;flex-wrap: wrap;align-items: flex-start">
          <el-button class="menu-button">设备台账</el-button>
          <el-button class="menu-button">监控设备</el-button>
          <el-button class="menu-button">门禁设备</el-button>
          <el-button class="menu-button">车辆道闸</el-button>
          <el-button class="menu-button">充电桩</el-button>
        </div>
      </div>
    </el-card>
    <el-card  class="drawer-card-style">
      <div style="display: flex;flex-direction: row;">
        <div>
          <el-button class="property-button" @click="selectProperty">
            <i class="el-icon-s-check" style="margin-right: 5px;"></i>巡检管理</el-button>
        </div>
        <el-divider direction="vertical"></el-divider>
        <div style="display: flex;flex-direction: row;flex-wrap: wrap;align-items: flex-start">
          <el-button class="menu-button">巡检项目</el-button>
          <el-button class="menu-button">巡检点</el-button>
          <el-button class="menu-button">巡检路线</el-button>
          <el-button class="menu-button">巡检计划</el-button>
          <el-button class="menu-button">巡检任务</el-button>
        </div>
      </div>
    </el-card>
    <el-card  class="drawer-card-style">
      <div style="display: flex;flex-direction: row;">
        <div>
          <el-button class="property-button" @click="selectProperty">
            <i class="el-icon-s-platform" style="margin-right: 5px;"></i>费用管理</el-button>
        </div>
        <el-divider direction="vertical"></el-divider>
        <div style="display: flex;flex-direction: row;flex-wrap: wrap;align-items: flex-start">
          <el-button class="menu-button">物业费</el-button>
          <el-button class="menu-button">车位费</el-button>
          <el-button class="menu-button">水电燃气费</el-button>
          <el-button class="menu-button">租房费用</el-button>
          <el-button class="menu-button">装修费用</el-button>
        </div>
      </div>
    </el-card>
    <el-card  class="drawer-card-style">
      <div style="display: flex;flex-direction: row;">
        <div>
          <el-button class="property-button" @click="selectProperty">
            <i class="el-icon-setting" style="margin-right: 5px;"></i>账号设置</el-button>
        </div>
        <el-divider direction="vertical"></el-divider>
        <div style="display: flex;flex-direction: row;flex-wrap: wrap;align-items: flex-start">
          <el-button class="menu-button">个人中心</el-button>
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
::v-deep .el-divider--horizontal {
  width: 920px;
  margin-left: 20px;
  margin-bottom: 1px;
  background-color: rgba(230,230,230);
}
.menu-button{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90px;
  height: 20px;
  border: none;
  margin-left: 5px;
  color: rgba(150,150,150)
}
.menu-button:hover,
.menu-button:active {
  color: #007aff; /* 更改悬停和点击时的颜色 */
}
.property-button {
  display: flex;
  justify-content: center;
  border: none;
  margin-right: 5px;
  width: 100px;
  font-size: 15px;
  color: rgba(89, 89, 89);
  transition: color 0.3s ease; /* 添加过渡效果 */
}

.property-button:hover,
.property-button:active {
  color: #007aff; /* 更改悬停和点击时的颜色 */
}

.property-button i {
  margin-right: 5px;
}

/* 如果需要，你还可以为图标单独设置颜色变化 */
.property-button:hover i,
.property-button:active i {
  color: #007aff; /* 图标在悬停和点击时的颜色 */
}
</style>