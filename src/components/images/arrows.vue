<template lang="pug">
  svg(
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    :height="`${24 * size}`"
    viewBox="0 0 106 24"
    id="arrows")
    path(
      v-for="arrowIndex in arrowsNumber"
      :key="arrowIndex"
      d="M 0 0, L 21 12, L 0 24, L 0 0"
      :fill="color"
      fill-opacity="0.5")
      animateMotion(path="M 0 0, L 84 0" :dur="speed" repeatCount="indefinite" :begin="arrowDelay(arrowIndex)")
</template>

<script>
  export default {
    props: {
      arrowsNumber: {
        type: Number,
        default: 3
      },
      color: {
        type: String,
        default: "#666"
      },
      size: {
        type: Number,
        default: 0.5
      },
      speed: {
        type: Number,
        default: 1.8
      }
    },
    computed: {
      arrowDelayFraction () {
        return this.speed / this.arrowsNumber
      },
      arrowSpeed () {
        return `${this.speed}s`
      }
    },
    methods: {
      arrowDelay (index) {
        // :animation=`arrows ${arrowSpeed} ${arrowDelay(arrowIndex)} linear infinite`
        return this.arrowDelayFraction * (index - 1)
      }
    }
  }
</script>

<style lang="sass" scoped>
    @-webkit-keyframes arrows
      0%
        transform: translateX(0px)
        fill-opacity: 0
      50%
        transform: translateX(42px)
        fill-opacity: 1
      100%
        transform: translateX(84px)
        fill-opacity: 0
</style>
