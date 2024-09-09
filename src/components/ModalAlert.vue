<template>
  <div class="alert">
    <div class="alert__dialog">
      <p v-if="store.state.success" class="alert__msg" style="color:green">Success!!!</p>
      <p v-if="store.state.error" class="alert__msg" style="color:red;">Error</p>
      <img v-if="store.state.loading" src="../assets/img/spinner.gif" width="65" height="65" alt="">
    </div>
  </div>
</template>

<script setup>
  import {useStore} from 'vuex'
  const store = useStore()
</script>

<style lang="scss" scoped>
  
</style>