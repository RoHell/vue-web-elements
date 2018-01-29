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
  @import '../../sass/base/colors.sass' 

  =button-size($size)
    $button-box-size: $size*1.5
    $button-font-size: $size/2

    font-size: $button-font-size
    line-height: $button-font-size
    width: $button-box-size
    height: $button-box-size 

  =button-template($color)
    $button-normal-color: lighten($color, 5%)
    $button-disabled-color: lighten($color-gray, 30%)
    $button-loading-color: lighten($color, 35%)

    color: $color-white
    background-color: $button-normal-color
    border: 1px solid $button-normal-color

    &[plain]
      border: 1px solid $button-normal-color
      background-color: $color-white
      color: $color

    &:hover:not([disabled])
      border: 1px solid $button-normal-color
      background-color: $color
      color: $color-white
          
    &[disabled]
      cursor: default
      background-color: $button-disabled-color
      border: 1px solid $button-disabled-color
      color: $color-white

    &[loading]
      background-color: $button-loading-color
      border: 1px solid $button-loading-color

  =button-position($size)
    $offset: $size*1.5/2
    $button-offset-map: (top: -$offset, bottom: -$offset, left: $offset, right: $offset)
    
    @each $position, $offset in $button-offset-map
      &[#{$position}]
        #{$position}: $offset

  .rh-floating-button
    position: absolute
    z-index: 10

    @each $size, $button-size in $button-sizes-map
      &[size=#{$size}]
        @include button-position($button-size) 

    ._rh-button
      display: table
      position: relative

      button
        box-shadow: 0 4px 8px $color-light-grey
        border: 1px solid $color-gray
        letter-spacing: 1px
        border-radius: 50%
        padding: 0
        cursor: pointer
        outline: none
        background-color: $color-white
        color: $color-font-main
        transition: 0.3s
        &:hover:not([disabled])
          box-shadow: 2px 2px 6px $color-light-grey
          border: 1px solid lighten($color-type-primary, 50%)
          color: $color-type-primary
        &:active:not([disabled])
          box-shadow: 0 0 0 transparent

        @each $color-type, $color in $color-types-map
          &.#{$color-type}
            @include button-template($color)

        @each $size, $button-size in $button-sizes-map
          &[size=#{$size}]
            @include button-size($button-size)        
</style>