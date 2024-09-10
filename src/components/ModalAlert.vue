<template>
  <div class="alert">
    <div class="alert__dialog">
      <p v-if="store.state.success" class="alert__msg">Success!!!</p>
      <p v-if="store.state.error" class="alert__msg alert__msg--error">Error</p>
      <img v-if="store.state.loading" src="../assets/images/spinner.gif" width="65" height="65" alt="">
    </div>
  </div>
</template>

<script setup>
  import {useStore} from 'vuex'
  const store = useStore()
</script>

<style lang="scss" scoped>
  
</style>