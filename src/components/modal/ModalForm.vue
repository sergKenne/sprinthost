<template>
  <form @submit.prevent='handleSubmit' class="modal__form">
    <slot></slot>
  </form>
</template>

<script setup>
import { useStore } from 'vuex'
const store = useStore()
const handleSubmit = () => {

  if (store.state.isValidPassword) {
    store.commit('setErrorTextPassword', '')
  } else {
    store.commit('setErrorTextPassword', 'Пароль должен быть не меньше 8 символов, содержать одну цифруи одну заглавную букву')
  }

  if (store.state.isValidConfirmPassword) {
    store.commit('setErrorTextConfirmPassword', '')
  } else {
    store.commit('setErrorTextConfirmPassword', 'Пароль должен быть не меньше 8 символов, содержать одну цифруи одну заглавную букву')
  }

  if (store.state.isValidPassword && store.state.isValidConfirmPassword) {
    if (store.state.inputValuePassword === store.state.inputValueConfirmPassword) {
      store.commit('matchPassword', true)
      store.commit('setShowModalAlert', true)
      store.dispatch('actionPost')

    } else {
      store.commit('matchPassword', false)
    }
  }
}

</script>

<style lang="scss" scoped></style>