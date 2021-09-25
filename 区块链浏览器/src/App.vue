<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="isRouterAlive"></router-view>
    </keep-alive>
  </div>
</template>

<script>
// import Footer from "@/components/footer.vue";
//  v-if="isRouterAlive"
export default {
  components: {
    // Footer,
    // Header,
  },
  data() {
    return {
      isRouterAlive: true,
    };
  },
  name: "App",
  provide() {
    return {
      reload: this.reload,
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(() => (this.isRouterAlive = true));
    },
  },
};
</script>

<style>
#app {
  background-color: #f4f5f9;
}
</style>
