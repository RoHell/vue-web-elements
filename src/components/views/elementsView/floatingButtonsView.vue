<template lang="pug">
  .floatin-buttons-view
    .cta-wrapper
      rh-floating-button(color-type='success', top, right, plain, size="tiny")
        i.fas.fa-plus
    .cta-wrapper
      rh-floating-button(loading)
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
    .cta-wrapper
      position: relative
      width: 300px
      height: 100px
      border: 1px solid #ccc

</style>