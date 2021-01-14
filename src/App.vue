<template>
  <div id="app" class="antialiased h-screen">
    <div></div>
    <transition name="fade" mode="out-in">
      <Timeout v-if="isTimeout"
        >Looks like you've been away for a while...</Timeout
      >
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
      isTimeout: false
    };
  },
  provide() {
    return {
      Timeout: this.clearTimeout
    };
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
html,
body {
  height: 100vh;
  width: 100%;
  /* background-image: url('./assets/background-home.png') no-repeat ; */
  font-family: capriola;
}
</style>
