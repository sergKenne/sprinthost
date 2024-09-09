<template>
  <div class="login">
    <div class="container">
      <h3 class="login__title">Смена пароля</h3>
      <form @submit.prevent="handleSumit" class="login__form">
        <div class="login__card">
          <img :src="infoUrl" alt="info" class="login__card-icon">
          <h5 class="login__card-title">Используйте сложные пароли и не сохраняйте их в браузере.</h5>
          <p class="login__card-desc">Данные меры цифровой безопасности помогают предотвратить взлом профиля.</p>
        </div>
        <div class="login__form-action">
          <p v-if="!store.state.isMatchPassword" class="login__matchErrorPasswordMsg">Пароли должны совпадать</p>

          <InputBlock inputClassName='login__form-input' inputLabel="Новый пароль"
            inputPlaceholder='Введите новый пароль' inputType='password' inputKey='loginPass' inputName='password'
            :errorText="store.state.errorTextPassword" />

          <InputBlock inputClassName='login__form-input' inputLabel="Повторите новый пароль"
            inputPlaceholder='Повторите новый пароль' inputType='password' inputKey='loginconfirmPass'
            inputName='confirmPassword' :errorText="store.state.errorTextConfirmPassword" />

          <InputCheckbox inputClassName='login__form-checkbox' inputLabel='Завершить сеансы на других устройствах'
            inputType='checkbox' />

          <Button buttonText='Сменить пароль' buttonClassName='login__form-btn'
            :disabled="store.state.loading ? true : false" />

        </div>
      </form>
      <div class="info login__info">
        <h6 class="info__title">Пароли для FTP и SSH </h6>
        <p class="info__desc">По умолчанию для авторизации используется пароль от профиля.
          Сменить пароль, узнать сервер и IP адрес можно в разделе «Управление сайтами».
        </p>
        <div class="info__buttons">
          <Button buttonText='Управление сайтами' buttonClassName='info__btn' buttonClassType='btn--outline'
            :withIcon='true' :buttonIcon='openIcon' />

          <Button buttonText='Как настроить?' buttonClassType='btn--dotted' />
        </div>
      </div>
      <div class="login__grid-info">
        <div class="info login__info-left">
          <h6 class="info__title">Пароли для FTP и SSH </h6>
          <p class="info__desc">По умолчанию для авторизации используется пароль от профиля.
            Сменить пароль, узнать сервер и IP адрес можно в разделе «Управление сайтами».
          </p>
          <div class="info__buttons">
            <Button buttonText='Связанные аккаунты' buttonClassName='info__btn-grid' buttonClassType='btn--outline' />
          </div>
        </div>
        <img :src="catUrl" alt="cat" class="login__info-img">
      </div>
    </div>
    <Teleport to="#modal">
      <Modal v-if="store.state.isShowModal" />
    </Teleport>
    <Teleport to="#modalAlert">
      <ModalAlert v-if="store.state.isShowModalAlert" />
    </Teleport>
  </div>
</template>

<script setup>
  import {useStore} from 'vuex'
  import InputBlock from './components/InputBlock.vue'
  import InputCheckbox from './components/InputCheckbox.vue'
  import Button from './components/Button.vue'
  import Modal from './components/modal/Modal.vue'
  import ModalAlert from './components/ModalAlert.vue'
  import openIcon from './assets/icons/open.svg' 
  
  const catUrl = new URL('/src/assets/images/cat.svg', import.meta.url)
  const infoUrl = new URL('/src/assets/images/info.svg', import.meta.url)
  const store = useStore()
  
   const handleSumit = () => {

    if (store.state.isValidPassword) {
      store.commit('setErrorTextPassword','')
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
          store.dispatch('actionError', false)
          store.dispatch('actionSuccess', false)
        }, 4000)
      } else {
        store.commit('matchPassword', false)
      }
    }
  }
    
</script>

<style lang="scss" scoped>
</style>
