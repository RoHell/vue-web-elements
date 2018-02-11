<template lang="pug">
  .floatin-buttons-view
    .cta-wrapper
      rh-floating-button(color-type='success', top, right, plain, size="tiny")
        i.fas.fa-plus
    .cta-wrapper
      rh-floating-button
        i.fas.fa-plus
    .cta-wrapper
      rh-floating-button(color-type='primary', left, top, disabled, size="small")
        i.fas.fa-plus
    .cta-wrapper
      rh-floating-button(color-type='warning', fixed, bottom, right)
        i.fas.fa-plus
      rh-floating-button(color-type='warning', bottom, right size="large" plain)
        i.fas.fa-plus
</template>

<script>
import RhFloatingButton from "../../../components/elements/RhFloatingButton";
export default {
  data() {
    return {};
  },
  methods: {
    callback() {
      alert("kliknięty");
    }
  },
  components: { RhFloatingButton }
};
</script>

<style lang="sass" scoped>
  .floatin-buttons-view
    display: grid
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))
    grid-auto-rows: 100px
    grid-gap: 40px
    .cta-wrapper
      position: relative
      border: 1px solid #ccc

</style>