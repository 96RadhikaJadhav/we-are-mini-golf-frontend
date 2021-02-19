<template>
  <div
    id="app"
    class="antialiased h-screen"
    :class="{ 'max-h-screen overflow-hidden': isTimeout }"
    v-touch:tap="restartTimer"
  >
    <transition name="fade" mode="out-in">
      <component :is="this.$route.meta.layout || 'div'">
        <router-view />
      </component>
    </transition>
    <transition name="fade">
      <Timeout v-if="isTimeout" @clear="restartTimer" />
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isTimeout: false,
      timer: null
    };
  },
  components: { Timeout: () => import('@/components/Timeout.vue') },
  created() {
    this.restartTimer();
  },

  methods: {
    restartTimer() {
      console.log('timer reset');
      this.isTimeout = false;
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.isTimeout = true;
      }, 600000); // 10 minutes
    }
  }
};
</script>

<style>
html,
body {
  height: 100vh;
  width: 100%;
  /* background-image: url('./assets/background-home.png') no-repeat ; */
  font-family: capriola;
}
</style>
