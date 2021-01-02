<template>
  <div id="app" class="antialiased h-screen">
    <transition name="fade" mode="out-in">
      <component :is="isTimeout" @clear="clearTimeout"></component>
    </transition>
    <transition name="fade" mode="out-in">
      <component :is="this.$route.meta.layout || 'div'">
        <router-view />
      </component>
    </transition>
  </div>
</template>

<script>
import Timeout from '@/components/Timeout.vue';
export default {
  components: { Timeout },
  data() {
    return {
      isTimeout: ''
    };
  },
  provide() {
    return {
      timeout: this.clearTimeout
    };
  },
  methods: {
    clearTimeout() {
      this.isTimeout = '';
      setTimeout(() => {
        this.isTimeout = Timeout;
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
