<script>
export default {
  name: "propertyManagement",
  props: {
    menuIndex: {
      type: String,
      required: true,
      default: '1'
    }
  }
}
</script>

<template>
  <div>
    <div v-if="menuIndex==='1'">1</div>
    <div v-if="menuIndex==='2'">2</div>
  </div>
</template>

<style scoped>

</style>