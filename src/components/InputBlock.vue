<template>
  <div :class="`input ${inputClassName}`">
    <label v-if="isLabel" class="input__label" :for="inputKey">{{ inputLabel }}</label>
    <input :type="inputType" :id="inputKey" class="input__field" :name="inputName" :placeholder="inputPlaceholder">
    <p class="input__msg-error">tesy</p>
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
      inputClassName: {
        type: String,
        default: () => ''
      },
      isLabel: {
        type: Boolean,
        default: () => true
      },
      inputLabel: {
        type: String
      }

      // trigger: {
      //   type: Boolean,
      //   default: () => false
      // },
      // propsErrorText: {
      //   type: String,
      //   default: () => ''
      // }
    },
  }
</script>

<style lang="scss" scoped>

</style>