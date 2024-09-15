<template>
  <label class="checkbox">
    <input type="checkbox" class="checkbox__input"/>
    <span class="checkbox__box">
      <svg class="checkbox__icon">
        <use :xlink:href="`#${checkIcon}`" />
      </svg>
    </span>
    <span class="checkbox__text-label">{{ label }}</span>
  </label>
</template>

<script>
  import checkIcon from '../assets/icons/check.svg'
  export default {
    name: "InputCheckbox",
    props: {
      type: {
        type: String,
        default: () => 'text'
      },
      label: {
        type: String
      }
  },
  
  computed: {
      checkIcon: () => checkIcon
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/scss/vars.scss';
    .checkbox {
      display: flex;
      align-items: center;
      cursor: pointer;
  
      &__input {
        display: none;
  
        &:checked~.checkbox__box>svg {
          opacity: 1;
        }
      }
  
      &__box {
        width: 20px;
        height: 20px;
        flex: 0 0 20px;
        border: 1.6px solid #555770;
        margin-right: 14px;
        border-radius: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
  
      &__icon {
        width: 11px;
        height: 8.41px;
        opacity: 0;
      }
  
      &__text-label {
        color: $majestic_magic;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
      }
    }
</style>