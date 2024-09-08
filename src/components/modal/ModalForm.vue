<template>
  <form @submit.prevent='onSubmit' class="modal__form">
    <slot></slot>
  </form>
</template>

<script setup>
const onSubmit = () => {
  alert("yes")
}

</script>

<style lang="scss" scoped>

</style>