<template>
  <div
    id="app"
    class="antialiased h-screen"
    :class="{ 'max-h-screen overflow-hidden': isTimeout }"
    v-touch:tap="clearTimeout"
  >
    <transition name="fade" mode="out-in">
      <component :is="this.$route.meta.layout || 'div'">
        <router-view />
      </component>
    </transition>
    <transition name="fade">
      <Timeout v-if="isTimeout" @clear="clearTimeout" />
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isTimeout: false
    };
  },
  components: { Timeout: () => import('@/components/Timeout.vue') },
  created() {
    this.clearTimeout();
  },
  methods: {
    clearTimeout() {
      this.isTimeout = false;
      setTimeout(() => {
        this.isTimeout = true;
      }, 600000); // 10 minutes
    }
  }
};
</script>

<style>
* {
  -webkit-overflow-scrolling: touch;
}
html,
body {
  height: 100vh;
  width: 100%;
  /* background-image: url('./assets/background-home.png') no-repeat ; */
  font-family: capriola;
}
</style>
