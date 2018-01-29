<template lang="pug">
  ._rh-loader(:size="size", :class="color")
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
  @import '../../sass/base/dimensions.sass'
  @import '../../sass/base/colors.sass'

  =loader-position-size($size)
    $center-position: calc(50% - #{$size/2})
    top: $center-position
    left: $center-position
    width: $size
    height: $size

  ._rh-loader
    position: absolute
    width: 100%
    height: 100%
    z-index: 10
    border: 3px solid $color-light-grey
    border-right-color: transparent    
    box-sizing: border-box
    border-radius: 50%
    animation: spin 1.3s cubic-bezier(0.55, 0.2, 0.55, 0.8) infinite
    +loader-position-size($size-normal)

    @keyframes spin
      to
        transform: rotate(360deg)

    @each $size, $button-size in $sizes-map
      &[size=#{$size}]
        +loader-position-size($button-size)

    @each $color-type, $color, $index in $color-types-map
      &.#{$color-type}
        border: 3px solid lighten($color, 15%)
        border-right-color: transparent
</style>
