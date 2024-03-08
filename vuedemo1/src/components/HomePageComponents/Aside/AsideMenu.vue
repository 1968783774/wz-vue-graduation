<script>
export default {
  name: "asideMenu",
  props: {
    activeIndex: {
      type: String,
      default: '1'
    }
  },
  data() {
    return {
    };
  },
  methods: {

  }
}
</script>

<template>
  <div>
    <el-menu
        router="router"
        :default-active="activeIndex"
        >
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">物业信息</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">小区信息</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">岗位管理</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">员工管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style scoped>
</style>