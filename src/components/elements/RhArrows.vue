<template lang="pug">
  svg(
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      :width="computedWidth"
      height="100%"
      :viewBox="viewBox")
      path.arrow(
        v-for="arrowIndex in arrowsNumber"
        :key="arrowIndex"
        d="M 0 0, L 2 1, L 0 2, L 0 0"
        :fill="color")
        animateMotion(
          :path="animationPath"
          :dur="computedSpeed"
          repeatCount="indefinite"
          :begin="arrowDelay(arrowIndex)")
        animate(
          attributeName="opacity"
          values="0;1;1;0"
          keyTimes="0;0.3;0.7;1"
          :dur="computedSpeed"
          :begin="arrowDelay(arrowIndex)"
          repeatCount="indefinite")
    
</template>

<script>
  export default {
    components: {},
    props: {
      arrowsNumber: {
        type: [String, Number],
        default: 3
      },
      color: {
        type: [String, Number],
        default: "#666"
      },
      speed: {
        type: [String, Number],
        default: 2
      },
      width: {
        type: [String, Number],
        default: "100%"
      }
    },
    computed: {
      arrowDelayFraction () {
        return this.computedSpeed / this.computedArrowsNumber
      },
      viewBoxWidth () {
        return (this.computedArrowsNumber + 0.75) * 3 
      },
      pathLength () {
        return this.computedArrowsNumber * 3
      },
      viewBox () {
        return `0 0 ${this.viewBoxWidth} 2`
      },
      animationPath () {
        return `M 0 0, L ${this.pathLength} 0`
      },
      computedWidth () {
        return this.width === '' ? '100%' : this.width
      },
      computedArrowsNumber () {
        return this.arrowsNumber === '' ? 0 : this.arrowsNumber
      },
      computedSpeed () {
        return this.speed === '' ? 0 : this.speed
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
