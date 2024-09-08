<template>
  <div class="modal__header">
    <button class="modal__back-btn">
      <svg class="modal__back-icon">
        <use :xlink:href="`#${backIcon}`" />
      </svg>
      <span>Назад</span>
    </button>
    <button class="modal__close-btn">Закрыть</button>
  </div>
</template>

<script setup>
  import backIcon from '../../assets/icons/back.svg'

</script>

<style lang="scss" scoped>

</style>