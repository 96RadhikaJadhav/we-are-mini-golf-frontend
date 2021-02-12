<template>
  <div id="app" class="antialiased h-screen">
    <div></div>
    <transition name="fade" mode="out-in">
      <component :is="this.$route.meta.layout || 'div'">
        <router-view />
      </component>
    </transition>
    <transition name="fade">
      <Timeout v-if="isTimeout" @clear="clearTimeout"></Timeout>
    </transition>
  </div>
</template>

<script>
import Timeout from '@/components/Timeout.vue';
export default {
  data() {
    return {
      isTimeout: false
    };
  },
  components: { Timeout },
  created() {
    this.clearTimeout();
  },
  methods: {
    clearTimeout() {
      this.isTimeout = false;
      setTimeout(() => {
        this.isTimeout = false;
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
