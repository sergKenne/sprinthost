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
      const fetch = new Promise((resolve, reject) => {
        store.dispatch('actionLoading', true)
        setTimeout(() => {
          let status = Math.round(Math.random())
          if (status == 1) {
            status = true
            resolve(status)
          } else {
            status = false
            reject(status)
          }
        }, 3000)
      });

      fetch.then((result) => {
        store.dispatch('actionSuccess', result)
        store.dispatch('actionLoading', false)
      }).catch((err) => {
        store.dispatch('actionError', !err)
        store.dispatch('actionLoading', false)
      })

      setTimeout(() => {
        store.commit('setShowModalAlert', false)
        store.commit('resetInputValues')
        store.dispatch('actionError', false)
        store.dispatch('actionSuccess', false)
      }, 4000)
    } else {
      store.commit('matchPassword', false)
    }
  }
}

</script>

<style lang="scss" scoped></style>