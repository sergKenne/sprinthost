<template>
  <label :class="`checkbox ${inputClassName}`">
    <input type="checkbox" class="checkbox__input">
    <span class="checkbox__box">
      <svg class="checkbox__icon">
        <use :xlink:href="`#${checkIcon}`" />
      </svg>
    </span>
    <span class="checkbox__text-label">{{ inputLabel }}</span>
  </label>
</template>

<script>
  import checkIcon from '../assets/icons/check.svg'
  export default {
    name: "InputCheckbox",
    props: {
      inputType: {
        type: String,
        default: () => 'text'
      },
      inputClassName: {
        type: String,
        default: () => ''
      },
      inputLabel: {
        type: String
      }
    },
    computed: {
      checkIcon: () => checkIcon
    }
    
  }
</script>

<style lang="scss" scoped>

</style>