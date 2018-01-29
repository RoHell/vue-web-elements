<template lang="pug">
  .rh-floating-button(
    :top='top',
    :bottom='bottom',
    :left='left',
    :right='right',
    :size='size'
  )
    ._rh-button
      rh-loader(
        v-if='loading', 
        :size='size', 
        :color='colorType')
      button(
        :class='colorType', 
        :disabled='isDisabled', 
        :size='size', 
        :loading='loading', 
        :plain='plain'
        @click="$emit('click')")
        slot
</template>

<script>
  import RhLoader from './RhLoader'
  export default {
    props: {
      colorType: String,
      disabled: Boolean,
      size: {
        type: String,
        default: 'normal'
      },
      loading: Boolean,
      plain: Boolean,
      top: Boolean,
      bottom: Boolean,
      left: Boolean,
      right: Boolean
    },
    computed: {
      isDisabled () {
        return this.disabled || this.loading
      }
    },
    components: {RhLoader}
  }  
</script>

<style lang="sass" scoped>
  @import '../../sass/base/dimensions.sass'
  @import '../../sass/components/button.sass'

  =button-size($size)
    $button-box-size: $size*1.5
    $button-font-size: $size/2

    font-size: $button-font-size
    line-height: $button-font-size
    width: $button-box-size
    height: $button-box-size

  =button-position($size)
    $offset: $size*1.5/2
    $button-offset-map: (top: -$offset, bottom: -$offset, left: $offset, right: $offset)

    @each $position, $offset in $button-offset-map
      &[#{$position}]
        #{$position}: $offset

  .rh-floating-button
    position: absolute
    z-index: 10

    @each $size, $button-size in $sizes-map
      &[size=#{$size}]
        +button-position($button-size) 

    ._rh-button
      display: table
      position: relative

      button
        @extend %button
        border-radius: 50%
        box-shadow: 0 4px 8px $color-light-grey

        @each $size, $button-size in $sizes-map
          &[size=#{$size}]
            +button-size($button-size)        
</style>