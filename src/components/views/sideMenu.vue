<template lang="pug">
    .side-menu
        .side-menu__header Components list:
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
        .side-menu__header
            margin: 20px
            border-bottom: 1px solid #eee
        .side-menu__item
            padding: 10px 20px
            cursor: pointer
            border-bottom: 1px solid transparent
            transition: .2s
            &:hover:not(.side-menu__item--active)
                color: #fff
                text-decoration: underline
        
        .side-menu__item--active
            background: #fff
            color: #212121
</style>