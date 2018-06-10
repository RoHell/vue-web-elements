<template lang="pug">
  svg(
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      :width="width"
      height="100%"
      :viewBox="viewBox")
      path.arrow(
        v-for="arrowIndex in arrowsNumber"
        :key="arrowIndex"
        d="M 0 0, L 2 1, L 0 2, L 0 0"
        :fill="color")
        animateMotion(
          :path="animationPath"
          :dur="speed"
          repeatCount="indefinite"
          :begin="arrowDelay(arrowIndex)")
        animate(
          attributeName="opacity"
          values="0;1;1;0"
          keyTimes="0;0.3;0.7;1"
          :dur="speed"
          :begin="arrowDelay(arrowIndex)"
          repeatCount="indefinite")
    
</template>

<script>
  export default {
    components: {},
    props: {
      arrowsNumber: {
        type: Number,
        default: 3
      },
      color: {
        type: String,
        default: "#666"
      },
      speed: {
        type: Number,
        default: 2
      },
      width: {
        type: [String, Number],
        default: "100%"
      }
    },
    computed: {
      arrowDelayFraction () {
        return this.speed / this.arrowsNumber
      },
      viewBoxWidth () {
        return (this.arrowsNumber + 0.75) * 3 
      },
      pathLength () {
        return this.arrowsNumber * 3
      },
      viewBox () {
        return `0 0 ${this.viewBoxWidth} 2`
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
