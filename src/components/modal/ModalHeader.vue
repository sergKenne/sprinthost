<template>
  <div class="modal__header">
    <button class="modal__back-btn" @click="store.commit('closeModal', false)">
      <svg class="modal__back-icon">
        <use :xlink:href="`#${backIcon}`" />
      </svg>
      <span>Назад</span>
    </button>
    <button class="modal__close-btn" @click="store.commit('closeModal', false)">Закрыть</button>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import backIcon from '../../assets/icons/back.svg'

const store = useStore()

</script>

<style lang="scss" scoped>

</style>