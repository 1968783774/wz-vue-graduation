<template>
  <div id="app">
    <router-view>
      <LoginInterface></LoginInterface>
    </router-view>
  </div>
</template>

<script>
import LoginInterface from "@/components/LoginComponents/LoginInterface.vue";

export default {
  name: 'App',
  components: {
    LoginInterface,
  }
}
</script>

<style>
#app {
  height: 100%;
}
</style>
