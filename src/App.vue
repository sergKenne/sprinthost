<template>
  <div class="login">
    <div class="container">
      <h3 class="login__title">Смена пароля</h3>
      <form action="" class="login__form">
        <div class="login__card">
          <img src="./assets/icons/info.svg" alt="" class="login__card-icon">
          <h5 class="login__card-title">Используйте сложные пароли и не сохраняйте их в браузере.</h5>
          <p class="login__card-desc">Данные меры цифровой безопасности помогают предотвратить взлом профиля.</p>
        </div>
        <div class="login__form-action">
          <div class="input login__form-input">
            <label class="input__label" for="1">Новый пароль</label>
            <input type="password" id="1" class="input__field" placeholder="Введите новый пароль">
            <p class="input__msg-error">tesy</p>
          </div>
          <div class="input login__form-input">
            <label class="input__label" for="2">Повторите новый пароль</label>
            <input type="password" id="2" class="input__field" placeholder="Повторите новый пароль">
            <p class="input__msg-error"></p>
          </div>
          <label class="checkbox login__form-checkbox">
            <input type="checkbox" class="checkbox__input">
            <span class="checkbox__box">
              <svg class="checkbox__icon">
                <use :xlink:href="`#${checkIcon}`" />
              </svg>
            </span>
            <span class="checkbox__text-label">Завершить сеансы на других устройствах</span>
          </label>
          <button class="btn login__form-btn">
            <span class="btn__text">Сменить пароль</span>
          </button>
        </div>
      </form>
      <div class="info login__info">
        <h6 class="info__title">Пароли для FTP и SSH </h6>
        <p class="info__desc">По умолчанию для авторизации используется пароль от профиля.
          Сменить пароль, узнать сервер и IP адрес можно в разделе «Управление сайтами».
        </p>
        <div class="info__buttons">
          <button class="btn btn--outline info__btn">
            <span class="btn__text">Управление сайтами</span>
            <svg class="btn__icon">
              <use :xlink:href="`#${openIcon}`" />
            </svg>
          </button>
          <button class="btn btn--dotted">
            <span class="btn__text">Как настроить?</span>
          </button>
        </div>
      </div>
      <div class="login__grid-info">
        <div class="info login__info-left">
          <h6 class="info__title">Пароли для FTP и SSH </h6>
          <p class="info__desc">По умолчанию для авторизации используется пароль от профиля.
            Сменить пароль, узнать сервер и IP адрес можно в разделе «Управление сайтами».
          </p>
          <div class="info__buttons">
            <button class="btn btn--outline info__btn-grid">
              <span class="btn__text">Связанные аккаунты</span>
              <!-- <svg class="btn__icon">
                <use :xlink:href="`#${openIcon}`" />
              </svg> -->
            </button>
            <!-- <button class="btn btn--dotted">
              <span class="btn__text">Как настроить?</span>
            </button> -->
          </div>
        </div>
        <img src="./assets/img/chat.svg" alt="" class="login__info-img">
      </div>
    </div>
    <Teleport to="#modal">
      <Modal/>
    </Teleport>
    
    
  </div>
</template>

<script setup>
  import Modal from'./components/modal/Modal.vue'
  import openIcon from './assets/icons/open.svg';
  import checkIcon from './assets/icons/check.svg';
  
</script>

<style lang="scss" scoped>
 
 
</style>
