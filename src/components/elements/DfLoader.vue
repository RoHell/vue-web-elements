<template lang="pug">
  ._df-loader(:size="size", :class="color")
</template>

<script>
  export default {
    props: {
      size: {
        type: String
      },
      color: {
        type: String,
        default: 'info'
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import '../../sass/base/dimensions.sass'
  @import '../../sass/base/colors.sass'

  ._df-loader
    @mixin loader-position-size($size)
      top: calc(50% - #{$size/2})
      left: calc(50% - #{$size/2})
      width: $size
      height: $size

    @include loader-position-size($button-size-normal)
    position: absolute
    box-sizing: border-box
    border-radius: 50%
    z-index: 10
    opacity: 0.6
    animation: spin 1.5s linear infinite

    @keyframes spin
      to
        transform: rotate(360deg)

    @each $size, $button-size in $button-sizes-map
      &[size=#{$size}]
        @include loader-position-size($button-size)

    @each $color-type, $color in $color-types-map
      &.#{$color-type}
        border: 3px solid $color
        border-right: 3px solid transparent

</style>
