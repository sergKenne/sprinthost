<template>
  <div class="input">
    <label v-if="isLabel" class="input__label" :for="inputKey">{{ inputLabel }}</label>
    <input :type="inputType" :id="inputKey" class="input__field" :name="inputName" :placeholder="inputPlaceholder"
      @input="onInputChange" :value="inputValue">

    <p v-if="errorText" class="input__msg-error">Пароль должен быть не меньше 8 символов, содержать одну цифру
      и одну заглавную букву</p>
  </div>
</template>

<script>
export default {
  name: "InputBlock",
  props: {
    inputType: {
      type: String,
      default: () => 'text'
    },
    inputName: {
      type: String
    },
    inputPlaceholder: {
      type: String,
      default: () => ''
    },
    inputKey: {
      type: String
    },
    isLabel: {
      type: Boolean,
      default: () => true
    },
    inputLabel: {
      type: String
    },
    errorText: {
      type: String,
    },
    inputValue: {
      type: String
    }
  },
  methods: {
    onInputChange: function (event) {
      const { value, name } = event.target;
      const isValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(value)

      if (name === 'password') {
        this.$store.commit('handleChangePassword', { value, isValid })
      } else if (name === 'confirmPassword') {
        this.$store.commit('handleChangeConfirmPassword', { value, isValid })
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/vars.scss';

.input {
  padding-bottom: 22px;
  position: relative;

  &__label {
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0.03em;
    margin-bottom: 2px;
  }

  &__field {
    height: 32px;
    line-height: 32px;
    padding-left: 8px;
    display: block;
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    text-align: left;
    border: none;
    border-bottom: 1px solid $delicate_violet;
    transition: box-shadow .3s, border .3s, -webkit-box-shadow .3s;

    &::placeholder {
      color: $delicate_violet;
    }

    &:focus {
      border-bottom: 1px solid #26a69a;
      box-shadow: 0 1px 0 0 #26a69a;
    }

    &:disabled {
      background-color: transparent;
      opacity: .6;
    }
  }

  &__msg-error {
    position: absolute;
    font-size: 12px;
    color: #e65100;
    font-weight: 500;
    padding-left: 8px;
    padding-top: 2px;
  }
}

input:focus::-webkit-input-placeholder {
  color: transparent;
}

input:focus:-moz-placeholder {
  color: transparent;
}

input:focus::-moz-placeholder {
  color: transparent;
}

input:focus:-ms-input-placeholder {
  color: transparent;
}
</style>