<template>
  <div class="h-full w-full">
    <transition name="fade" mode="out-in">
      <router-view class="w-full mx-auto box-border min-h-screen" />
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
        this.isTimeout = true;
      }, 600000); // 10 minutes
    }
  }
};
</script>
