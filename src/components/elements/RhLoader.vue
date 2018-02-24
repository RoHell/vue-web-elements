<template lang="pug">
  svg(:size="size", viewBox="25 25 50 50")
    circle(:class="color" cx="50" cy="50" r="20" fill="none" stroke-width="3" stroke-miterlimit="10")
</template>

<script>
  export default {
    props: {
      size: {
        type: String,
        default: ''
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

  =loader-position-size($size)
    $center-position: calc(50% - #{$size/2})
    top: $center-position
    left: $center-position
    width: $size
    height: $size

  svg
    box-sizing: border-box
    position: absolute
    +loader-position-size($size-normal)
    animation: rotate 2s linear infinite

    circle
      stroke-dasharray: 1, 200
      stroke-dashoffset: 0
      animation: dash 1.5s ease-in-out infinite

  @each $color-type, $color, $index in $color-types-map
    &.#{$color-type}
      stroke: lighten($color, 15%)

  @each $size, $button-size in $sizes-map
    &[size=#{$size}]
      +loader-position-size($button-size)

  @keyframes rotate
    100%
      transform: rotate(360deg)

  @keyframes dash
    0%
      stroke-dasharray: 1, 200
      stroke-dashoffset: 0
    50%
      stroke-dasharray: 89, 200
      stroke-dashoffset: -35px
    100%
      stroke-dasharray: 89, 200
      stroke-dashoffset: -124px
</style>
