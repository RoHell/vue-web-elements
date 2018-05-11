<template lang="pug">
  .rh-button
    rh-loader(
      v-if='loading',
      :size='size',
      :color='colorType')
    button(
      :class='colorType',
      :disabled='disabled || loading',
      :size='size',
      :loading='loading',
      :plain='plain',
      :round='round'
      @click="$emit('click')")
      slot

</template>

<script>
  import RhLoader from './RhLoader'
  export default {
    props: {
      colorType: String,
      disabled: Boolean,
      size: String,
      loading: Boolean,
      round: Boolean,
      plain: Boolean
    },
    computed: {},
    components: {RhLoader}
  }
</script>

<style lang="sass" scoped>
  @import '../../sass/base/dimensions.sass'
  @import '../../sass/components/button.sass'


  =button-font-padding($size)
    font-size: $size/2
    padding: $size/4 $size/2
    svg, .fa
      padding-right: $size/2

  .rh-button
    margin: auto
    position: relative

    button
      @extend %button
      border-radius: 4px

      +button-font-padding($size-normal)

      &[round]
        border-radius: 40px

      @each $size, $button-size in $sizes-map
        &[size='#{$size}']
          +button-font-padding($button-size)
</style>
