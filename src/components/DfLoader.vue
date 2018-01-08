<template>
  <div class="_df-loader"></div>
</template>

<script>
  export default {
    props: {
      size: {
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
    border: 3px solid #3498db
    border-right: 3px solid transparent
    border-radius: 50%
    z-index: 10
    opacity: 0.6
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

</style>
