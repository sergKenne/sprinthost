<template>
  <button class="modal__btn">
    <svg class="modal__btn-icon">
      <use :xlink:href="`#${closeIcon}`" />
    </svg>
  </button>
</template>

<script setup>
  import closeIcon from '../../assets/icons/close.svg'

</script>

<style lang="scss" scoped>

</style>