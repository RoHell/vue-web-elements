<template lang="pug">
  ._df-loader
    div(v-for="div in 4", :size="size", :class="color")
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
    position: absolute
    width: 100%
    height: 100%
    z-index: 10

    div
      @mixin loader-position-size($size)
        top: calc(50% - #{$size/2})
        left: calc(50% - #{$size/2})
        width: $size
        height: $size

      @include loader-position-size($button-size-normal)
      position: absolute
      box-sizing: border-box
      border-radius: 50%
      animation: spin 1.2s cubic-bezier(0.55, 0.2, 0.55, 0.8) infinite

      @keyframes spin
        to
          transform: rotate(360deg)

      @each $size, $button-size in $button-sizes-map
        &[size=#{$size}]
          @include loader-position-size($button-size)

      @each $color-type, $color, $index in $color-types-map
        &.#{$color-type}
          border: 2px solid transparent
          border-right-color: lighten($color, 15%)

      @for $i from 2 through 4
        &:nth-child(#{$i})
          animation-delay: #{($i*2-3)/10}s
</style>
