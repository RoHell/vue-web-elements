<template lang="pug">
  .arrows
    svg(
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="100%"
      height="100%"
      :viewBox="viewBox")
      path.arrow(
        v-for="arrowIndex in arrowsNumber"
        :key="arrowIndex"
        d="M 0 0, L 21 12, L 0 24, L 0 0"
        :fill="color")
        animateMotion(
          :path="animationPath"
          :dur="speed"
          repeatCount="indefinite"
          :begin="arrowDelay(arrowIndex)")
        animate(
          attributeName="opacity"
          values="0;1;1;1;1;0"
          :dur="speed"
          :begin="arrowDelay(arrowIndex)"
          repeatCount="indefinite"
        )
</template>

<script>
  export default {
    props: {
      arrowsNumber: {
        type: [Number, String],
        default: 3
      },
      color: {
        type: String,
        default: "#666"
      },
      speed: {
        type: [Number, String],
        default: 1.8
      }
    },
    computed: {
      arrowDelayFraction () {
        return this.speed / this.arrowsNumber
      },
      arrowSpeed () {
        return `${this.speed}s`
      },
      viewBoxWidth () {
        return (this.arrowsNumber + 1) * 26.5
      },
      viewBoxHeight () {
        return (this.arrowsNumber + 1) * 6
      },
      pathLength () {
        return (this.arrowsNumber + 1) * 21
      },
      viewBox () {
        return `0 0 ${this.viewBoxWidth} ${this.viewBoxHeight}`
      },
      animationPath () {
        return `M 0 0, L ${this.pathLength} 0`
      }
    },
    methods: {
      arrowDelay (index) {
        return this.arrowDelayFraction * (index - 1)
      }
    }
  }
</script>

<style lang="sass" scoped>
</style>
