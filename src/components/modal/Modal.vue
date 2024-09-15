<template>
  <div class="modal">
    <ModalDialog>
      <ModalCloseBtn />
      <ModalHeader />
      <ModalTitle title="Смените пароль, если вы заметили подозрительную активность в своем профиле" />
      <ModalForm>
        <p v-if="!store.state.isMatchPassword" class="login__matchErrorPasswordMsg">Пароли должны совпадать</p>
        <InputBlock class='modal__form-input' label="Новый пароль" placeholder='Введите новый пароль'
          type='password' key='modalPass' name='password' :errorText="store.state.errorTextPassword"
          :value="store.state.inputValuePassword" />

        <InputBlock class='modal__form-input' label="Повторите новый пароль"
          placeholder='Повторите новый пароль' type='password' key='modalconfirmPass'
          name='confirmPassword' :errorText="store.state.errorTextConfirmPassword"
          :value="store.state.inputValueConfirmPassword" />

        <InputCheckbox class='modal__form-checkbox' label='Завершить сеансы на других устройствах'
          type='checkbox' />

        <Button text='Сменить пароль' class='modal__form-btn'
          :disabled="store.state.loading" />
      </ModalForm>
    </ModalDialog>
  </div>
</template>

<script setup>
import {onMounted} from 'vue'
import { useStore } from 'vuex'
import ModalDialog from './ModalDialog.vue'
import ModalCloseBtn from './ModalCloseBtn.vue'
import ModalHeader from './ModalHeader.vue'
import ModalTitle from './ModalTitle.vue'
import ModalForm from './ModalForm.vue'
import InputBlock from '../InputBlock.vue'
import InputCheckbox from '../InputCheckbox.vue'
import Button from '../Button.vue'

const store = useStore()

onMounted(() => {
  const modal = document.querySelector('.modal');
  modal.addEventListener('click', function (e) {
    if (e.target.className == 'modal') {
      store.commit('closeModal')
    }
  })
})

</script>
