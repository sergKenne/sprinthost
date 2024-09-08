<template>
  <div class="modal">
    <ModalDialog>
      <ModalBtn />
      <ModalHeader />
      <ModalTitle title="Смените пароль, если вы заметили подозрительную активность в своем профиле" />
      <ModalForm>
        <InputBlock inputClassName='modal__form-input' inputLabel="Новый пароль" inputPlaceholder='Введите новый пароль'
          inputType='password' inputKey='modalPass' inputName='password' />

        <InputBlock inputClassName='modal__form-input' inputLabel="Повторите новый пароль"
          inputPlaceholder='Повторите новый пароль' inputType='password' inputKey='modalconfirmPass'
          inputName='password' />

        <InputCheckbox inputClassName='modal__form-checkbox' inputLabel='Завершить сеансы на других устройствах' 
        inputType='checkbox' />

        <button class="btn modal__form-btn">
          <span class="btn__text">Сменить пароль</span>
        </button>
      </ModalForm>
    </ModalDialog>
  </div>
</template>

<script setup>
  import ModalDialog from './ModalDialog.vue'
  import ModalBtn from './ModalBtn.vue'
  import ModalHeader from './ModalHeader.vue'
  import ModalTitle from './ModalTitle.vue'
  import ModalForm from './ModalForm.vue'
  import InputBlock from '../InputBlock.vue'
  import InputCheckbox from '../InputCheckbox.vue'

</script>

<style lang="scss" scoped>
  //@import '../../assets/scss/vars.scss';
  
  /* .modal {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    min-height: 100vh;
    background: #1C1C2873;
    display: flex;
    align-items: center;
    justify-content: center;

    &__btn {
      width: 32px;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      position: absolute;
      top: 36px;
      right: 36px;

      @media (max-width: 736px) {
        display: none;
      }
    }

    &__btn-icon {
      width: 24px;
      height: 24px;
    }

    &__dialog {
      background-color: $white;
      width: 392px;
      height: 516px;
      border-radius: 8px;
      padding: 32px;

      @media (max-width: 736px) {
        width: 100%;
        height: 100vh;
        border-radius: 0;
      }
    }

    &__header {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-bottom: 24px;

      @media (max-width: 736px) {
        justify-content: flex-start;
      }
    }

    &__close-btn {
      font-size: 10px;
      font-weight: 700;
      line-height: 10px;
      text-align: left;
      color: $delicate_violet;
      border-bottom: 1px solid $turquoise;
      cursor: pointer;

      @media (max-width: 736px) {
        display: none;
      }
    }

    &__back-btn {
      font-size: 14px;
      font-weight: 700;
      line-height: 24px;
      color: $turquoise;
      display: none;
      align-items: center;
      cursor: pointer;

      @media (max-width: 736px) {
        display: flex;
      }
    }

    &__back-icon {
      width: 24px;
      height: 24px;
    }

    &__title {
      font-size: 22px;
      font-weight: 700;
      line-height: 24px;
      text-align: left;
      color: $stone_black;
      margin-bottom: 24px;
    }

    &__form-input {
      margin-bottom: 8px;
    }

    &__form-checkbox {
      margin-top: 24px;
      margin-bottom: 34px;
    }

    &__form-btn {
      height: 48px;
      width: 100%;
    }

  } */
</style>