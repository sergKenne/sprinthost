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

          <InputBlock class='login__form-input' label="Новый пароль" placeholder='Введите новый пароль'
            type='password' key='loginPass' name='password' :errorText="store.state.errorTextPassword"
            :value="store.state.inputValuePassword" />

          <InputBlock class='login__form-input' label="Повторите новый пароль"
            placeholder='Повторите новый пароль' type='password' key='loginconfirmPass'
            name='confirmPassword' :errorText="store.state.errorTextConfirmPassword"
            :value="store.state.inputValueConfirmPassword" />

          <InputCheckbox class='login__form-checkbox' label='Завершить сеансы на других устройствах'
            type='checkbox' />

          <Button text='Сменить пароль' class='login__form-btn' :disabled="store.state.loading" />

        </div>
      </form>
      <div class="info login__info">
        <h6 class="info__title">Пароли для FTP и SSH </h6>
        <p class="info__desc">По умолчанию для авторизации используется пароль от профиля.
          Сменить пароль, узнать сервер и IP адрес можно в разделе «Управление сайтами».
        </p>
        <div class="info__buttons">
          <Button text='Управление сайтами' class='btn--outline info__btn'
            :withIcon='true' :icon='openIcon' />

          <Button text='Как настроить?' class='btn--dotted' />
        </div>
      </div>
      <div class="login__grid-info">
        <div class="info login__info-left">
          <h6 class="info__title">Пароли для FTP и SSH </h6>
          <p class="info__desc">По умолчанию для авторизации используется пароль от профиля.
            Сменить пароль, узнать сервер и IP адрес можно в разделе «Управление сайтами».
          </p>
          <div class="info__buttons">
            <Button text='Связанные аккаунты' class='info__btn-grid btn--outline' />
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
    if (store.state.isValidPassword && inputValuePassword.length != 0) {
      store.commit('setErrorTextPassword','')
    } else {
      store.commit('setErrorTextPassword', 'Пароль должен быть не меньше 8 символов, содержать одну цифруи одну заглавную букву')
    }

    if (store.state.isValidConfirmPassword) {
      store.commit('setErrorTextConfirmPassword', '')
    } else {
      store.commit('setErrorTextConfirmPassword', 'Пароль должен быть не меньше 8 символов, содержать одну цифруи одну заглавную букву')
    }
    
    if (store.state.isValidPassword) {
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

<style lang="scss" scoped>
</style>
