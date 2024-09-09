<template>
  <button :class="`btn ${buttonClassType} ${buttonClassName}`">
    <span class="btn__text">{{ buttonText }}</span>
    <svg v-if="withIcon" class="btn__icon">
      <use :xlink:href="`#${buttonIcon}`" />
    </svg>
  </button>
</template>

<script>
  export default {
    name: "Button",
    props: {
      buttonText: {
        type: String,
      },
      buttonIcon: {
        type: String,
      },
      withIcon: {
        type: Boolean,
        default: () => false
      },
      buttonClassName: {
        type: String,
        default: ()=>''
      },
      buttonClassType: {
        type: String,
        default: () => ''
      }
    },
  }
</script>

<style lang="scss" scoped>
    @import '../assets/scss/vars.scss';
    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 14px;
      padding-left: 16px;
      padding-right: 16px;
      border-radius: 4px;
      color: $white;
      background-color: $grecian_isle;
      cursor: pointer;
      transition: all .3s ease-out;
  
      &--outline {
        height: 40px;
        background-color: $white;
        color: $coarse_wool;
        fill: $coarse_wool;
        border: 1.6px solid $grecian_isle;
  
        &:hover {
          color: $white;
          background-color: $grecian_isle;
          border-color: $grecian_isle;
          fill: $white;
        }
      }
  
      &--dotted {
        padding: 0;
        background-color: $white;
        font-size: 16px;
        font-weight: 700;
        line-height: 20px;
        color: $turquoise;
        border: none;
        border-radius: 0;
        border-bottom: 2px dashed $turquoise;
  
        &:hover {
          background-color: $white !important;
          color: $grecian_isle;
        }
  
      }
  
      &:hover {
        background-color: #2bbbad;
      }
  
      &:disabled {
        color: #9F9F9F;
        fill: #9F9F9F;
        background-color: #DFDFDF;
        cursor: not-allowed;
        border-color: #9F9F9F;
      }
  
      &:active {
        background-color: #26a69a;
      }
  
      &__text {
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
      }
  
      &__icon {
        width: 24px;
        height: 24px;
      }
    }
</style>