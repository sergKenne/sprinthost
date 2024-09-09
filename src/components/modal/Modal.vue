<template>
  <div class="modal">
    <ModalDialog>
      <ModalCloseBtn />
      <ModalHeader />
      <ModalTitle title="Смените пароль, если вы заметили подозрительную активность в своем профиле" />
      <ModalForm>
        <p v-if="!store.state.isMatchPassword" class="login__matchErrorPasswordMsg">Пароли должны совпадать</p>
        <InputBlock inputClassName='modal__form-input' inputLabel="Новый пароль" inputPlaceholder='Введите новый пароль'
          inputType='password' inputKey='modalPass' inputName='password' :errorText="store.state.errorTextPassword"
          :inputValue="store.state.inputValuePassword" />

        <InputBlock inputClassName='modal__form-input' inputLabel="Повторите новый пароль"
          inputPlaceholder='Повторите новый пароль' inputType='password' inputKey='modalconfirmPass'
          inputName='confirmPassword' :errorText="store.state.errorTextConfirmPassword"
          :inputValue="store.state.inputValueConfirmPassword" />

        <InputCheckbox inputClassName='modal__form-checkbox' inputLabel='Завершить сеансы на других устройствах'
          inputType='checkbox' />

        <Button buttonText='Сменить пароль' buttonClassName='modal__form-btn'
          :disabled="store.state.loading ? true : false" />
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
