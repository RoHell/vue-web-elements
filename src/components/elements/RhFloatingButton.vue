<template lang="pug">
  .rh-floating-button(
    :top='top',
    :bottom='bottom',
    :left='left',
    :right='right',
    :size='size',
    :absolute='absolute',
    :fixed='fixed'
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
      right: Boolean,
      absolute: Boolean,
      fixed: Boolean
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

  =button-absolute-position($size)
    $offset: $size*1.5/2
    $offset-map: (top: -$offset, bottom: -$offset, left: $offset, right: $offset)

    @each $position, $offset in $offset-map
      &[#{$position}]
        #{$position}: $offset

  =button-fixed-position($size)
    $offset-map: (top, bottom, left, right)

    @each $position in $offset-map
      &[#{$position}]
        #{$position}: $size*1.5/2

  .rh-floating-button
    z-index: 10

    @each $size, $button-size in $sizes-map
      &[size=#{$size}]
        position: absolute
        +button-absolute-position($button-size)

    &[fixed]
      @each $size, $button-size in $sizes-map
        &[size=#{$size}]
          position: fixed
          +button-fixed-position($button-size)

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