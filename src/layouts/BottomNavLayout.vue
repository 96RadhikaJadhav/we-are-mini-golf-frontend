<template>
  <div class="h-full w-full">
    <transition name="fade" mode="out-in">
      <router-view class="mx-auto box-border min-h-screen" />
    </transition>
    <div class="sticky bottom-0">
      <NavMenu @display-rules="isDrawerOpen = true" />
    </div>
    <transition name="slide-in">
      <div
        class="sticky bottom-0 w-full shadow-2dp rounded-t-2xl"
        v-if="isDrawerOpen"
      >
        <RulesScreen @close-drawer="isDrawerOpen = false" />
      </div>
    </transition>
  </div>
</template>

<script>
import NavMenu from '@/components/NavMenu';
import RulesScreen from '@/components/rules/RulesScreen.vue';

export default {
  name: 'BottomNavLayout',
  components: { NavMenu, RulesScreen },
  data() {
    return {
      isDrawerOpen: false
    };
  }
};
</script>

<style scoped>
.slide-in-enter-active {
  animation: slide-in-bottom 0.8s cubic-bezier(0.785, 0.135, 0.15, 0.86) both;
}
.slide-in-leave-active {
  animation: slide-in-bottom 0.8s cubic-bezier(0.785, 0.135, 0.15, 0.86) reverse;
}

@keyframes slide-in-bottom {
  0% {
    transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
