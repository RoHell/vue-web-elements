<template lang="pug">
  .side-menu
    .side-menu__item(
        v-for="item in menuItems",
        :key="item.name", 
        @click="goToView(item.name)", 
        :class="{'side-menu__item--active': isActive(item.path)}"
    ) {{item.name}}
</template>

<script>
import menuItems from "../../utils/sideMenuItems";
export default {
  data() {
    return {
      menuItems
    };
  },
  methods: {
    goToView(viewName) {
      this.$router.push({ name: viewName });
    },
    isActive(viewPath) {
      return this.$route.path === viewPath;
    }
  },
  computed: {}
};
</script>

<style scoped lang="sass">
  .side-menu
    background-color: #212121
    color: #ccc
    padding: 10px
    height: calc(100vh - 20px)
    width: 200px
    position: fixed
    z-index: 10
    .side-menu__item
      padding: 10px
      margin: 5px 0
      cursor: pointer
      border-left: 2px solid #ccc
      transition: .2s
      &:hover, 
        color: #fff
        border-left: 4px solid #fff
    .side-menu__item--active
      color: #fff
      border-left: 4px solid #fff
</style>