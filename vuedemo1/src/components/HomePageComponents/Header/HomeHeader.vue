<script>
export default {
  name: "homeHeader",
  data() {
    return {
      hover: false, // 用于判断鼠标是否悬停在按钮上
    };
  },
  methods:{
    getDrawer(){
      this.$emit('clickBrother')
    }
  }
}
</script>

<template>
  <div class="header-style">
      <button class="custom-button"  @click="getDrawer">
        <i class="el-icon-menu hover-icon" @mouseover="hover = true" @mouseout="hover = false"></i>
        <span class="hover-text" @mouseover="hover = true" @mouseout="hover = false">菜单</span>
      </button>
  </div>
</template>

<style scoped>
.custom-button{
  border-radius: 20px;
  border-color: transparent;
  margin-top: 10px;
  height: 40px;
  width: 100px;
}
.header-style{
  display: flex;
  flex-direction: row;
  align-items: center; /* 垂直居中 */
}


.hover-icon,
.hover-text {
  transition: color 0.3s; /* 添加颜色变化的过渡效果 */
  color: rgba(89,89,89);
}

.hover-icon {
  font-size: 15px; /* 根据需要调整图标大小 */
}

.hover-text {
  margin-left: 5px; /* 图标和文本之间的间距 */
}

.custom-button:hover .hover-icon,
.custom-button:hover .hover-text {
  color: rgba(90,206,183);
  background-color: white/* 悬停时的颜色 */
}
</style>