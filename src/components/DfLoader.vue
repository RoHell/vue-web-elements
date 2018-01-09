<template>
  <div class="_df-loader" :size="size" :class="color"></div>
</template>

<script>
  export default {
    props: {
      size: {
        type: String
      },
      color: {
        type: String
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import '../sass/main.sass'

  ._df-loader

    @mixin loader-position-size($size)
      top: calc(50% - #{$size/2})
      left: calc(50% - #{$size/2})
      width: $size
      height: $size

    @include loader-position-size($button-size-normal)
    position: absolute
    box-sizing: border-box
    border: 3px solid #fff
    border-right: 3px solid transparent
    border-radius: 50%
    z-index: 10
    opacity: 0.8
    animation: spin 1.5s linear infinite

    &[size='big']
      @include loader-position-size($button-size-big)

    &[size='small']
      @include loader-position-size($button-size-small)


    @keyframes spin
      0%
        transform: rotate(0deg)
      100%
        transform: rotate(360deg)

    $color-types-map: (danger: $color-type-danger, success: $color-type-success, info: $color-type-info, primary: $color-type-primary, warning: $color-type-warning)

    @each $color-type, $color in $color-types-map
      &.#{$color-type}
        border: 3px solid $color
        border-right: 3px solid transparent
        opacity: 0.7

</style>
