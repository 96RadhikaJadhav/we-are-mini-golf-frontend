<template>
  <div class="h-full w-full flex flex-col">
    <transition name="fade" mode="out-in">
      <router-view class="flex-1 md:mx-auto box-border" />
    </transition>
    <div class="fixed bottom-0 left-0 right-0">
      <NavMenu @display-rules="isDrawerOpen = !isDrawerOpen" />
    </div>
    <transition name="slide-in">
      <div
        class="fixed bottom-0 w-full shadow-2dp rounded-t-2xl"
        v-if="isDrawerOpen"
        v-click-outside="onClickOutside"
      >
        <RulesScreen @close-drawer="isDrawerOpen = false" />
      </div>
    </transition>
  </div>
</template>

<script>
import NavMenu from '@/components/NavMenu';
import RulesScreen from '@/components/rules/RulesScreen.vue';
import vClickOutside from 'v-click-outside';

export default {
  name: 'BottomNavLayout',
  components: { NavMenu, RulesScreen },
  directives: {
    clickOutside: vClickOutside.directive
  },
  data() {
    return {
      isDrawerOpen: false
    };
  },
  methods: {
    onClickOutside() {
      this.isDrawerOpen = false;
    }
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
