<script>
export default {
  name: "HouseManagement",
  beforeMount() {
    this.$store.commit("setTypeMenu",{menuType:"neighbourhood"})
  },
}
</script>

<template>
  <div>
    <h1>House Management</h1>
  </div>
</template>

<style scoped>

</style>