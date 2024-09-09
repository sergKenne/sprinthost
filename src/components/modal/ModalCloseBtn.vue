<template>
  <button @click="store.commit('closeModal', false)" class="modal__btn">
    <svg class="modal__btn-icon">
      <use :xlink:href="`#${closeIcon}`" />
    </svg>
  </button>
</template>

<script setup>
  import {useStore} from 'vuex'
import closeIcon from '../../assets/icons/close.svg'
  const store = useStore()

</script>

<style lang="scss" scoped>

</style>