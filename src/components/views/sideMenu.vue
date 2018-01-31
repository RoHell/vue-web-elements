<template lang="pug">
    .side-menu
        .header Components list:
        .menu-item(
            v-for="item in menuItems",
            :key="item.name", 
            @click="goToView(item.name)", 
            :class="{active: isActive(item.path)}"
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
        .header
            margin: 20px
            border-bottom: 1px solid #eee
        .menu-item
            padding: 10px 20px
            cursor: pointer
            border-bottom: 1px solid transparent
            transition: .2s
            &:hover
                background: #fff
                color: #212121
        
        .active
            background: #fff
            color: #212121
</style>