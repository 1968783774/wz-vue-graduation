<script>
export default {
  name: "ParkManagement",
  beforeMount() {
    this.$store.commit("setTypeMenu",{menuType:"park"})
  },
}
</script>

<template>
  <div>
    <h1>Park Management</h1>
  </div>
</template>

<style scoped>

</style>