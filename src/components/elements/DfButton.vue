<template>
  <div class="_df-button">
    <df-loader v-if="loading" :size="size"></df-loader>
    <button
      :class="colorType"
      :disabled="isDisabled"
      :size="size"
      :loading="loading"
      :plain="plain"
      :round="round"
      :cta="cta"
      @click="$emit('click')">
    <slot></slot>
    </button>
  </div>
</template>

<script>
  import DfLoader from './DfLoader'
  export default {
    props: {
      colorType: String,
      disabled: Boolean,
      size: String,
      loading: Boolean,
      round: Boolean,
      plain: Boolean,
      cta: Boolean
    },
    computed: {
      isDisabled () {
        return this.disabled || this.loading
      }
    },
    components: {DfLoader}
  }  
</script>

<style lang="sass" scoped>
  @import '../../sass/main.sass'
  ._df-button
    display: table
    position: relative
    margin: 5px

    @mixin button-font-padding($size)
      font-size: $size/2
      padding: $size/4 $size/2
      //svg
        //padding-right: $size/4

    @mixin button-template($color)
      color: $color-white
      background-color: $color
      border: 1px solid $color
      &[plain]
        border: 1px solid rgba($color, 0.5)
        background-color: $color-white
        color: $color

      &:hover:not([disabled])
        border: 1px solid rgba($color, 0.5)
        background-color: $color
        color: $color-white

    button
      @include button-font-padding($button-size-normal)
      border: 1px solid $color-gray
      border-radius: 4px
      letter-spacing: 1px
      cursor: pointer
      outline: none
      background-color: $color-white
      color: $color-font-main
      transition: 0.3s
      opacity: 0.9
      &:hover:not([disabled])
        box-shadow: 2px 2px 6px $color-light-grey
        opacity: 1
        border: 1px solid rgba($color-type-primary, 0.5)
        color: $color-type-primary

      &[disabled]
        cursor: default
        opacity: 0.4
        background-color: $color-gray
        color: $color-white

      &[round]
        border-radius: 40px

      &[size='small']
        @include button-font-padding($button-size-small)

      &[size='big']
        @include button-font-padding($button-size-big)

      &[loading]
        opacity: 0.1

      &[cta]
        font-size: 25px
        width: 60px
        height: 60px
        padding: 15px
        box-shadow: 2px 4px 6px $color-light-grey

      $color-types: (danger: $color-type-danger, success: $color-type-success, info: $color-type-info, primary: $color-type-primary, warning: $color-type-warning)

      @each $color-type, $color in $color-types
        &.#{$color-type}
          @include button-template($color)

</style>
