<template>
  <div class="h-full w-full flex flex-col max-h-screen">
    <transition name="slide-in">
      <router-view class="flex-1 md:mx-auto box-border" />
    </transition>
    <div class="fixed bottom-0 left-0 right-0 z-50">
      <NavMenu
        @display-rules="isDrawerOpen = !isDrawerOpen"
        @open-score="isBottomSheetOpen = !isBottomSheetOpen"
      />
    </div>
    <transition name="slide-in">
      <div
        v-click-outside="onClickOutside"
        v-if="isDrawerOpen"
        class="fixed bottom-0 w-full shadow-2dp rounded-t-2xl"
      >
        <RulesScreen
          v-touch:swipe.bottom="onSlideDown"
          @close="isDrawerOpen = false"
        />
      </div>
      <div
        v-click-outside="onClickOutside"
        v-if="isBottomSheetOpen"
        class="sticky bottom-0 w-full shadow-2dp rounded-t-2xl"
        style="height: 60%;"
      >
        <BaseBottomSheet>
          <template #heading>
            Current Ranking
          </template>
          <template #content>
            <DetailedScores :playersInfo="playersInfo" :par="par" />
          </template>
        </BaseBottomSheet>
      </div>
    </transition>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'BottomNavLayout',
  components: {
    NavMenu: () => import('@/components/NavMenu'),
    RulesScreen: () => import('@/components/rules/RulesScreen.vue'),
    BaseBottomSheet: () => import('@/components/BaseBottomSheet.vue'),
    DetailedScores: () => import('@/components/DetailedScores.vue')
  },
  directives: {
    clickOutside: vClickOutside.directive
  },
  data() {
    return {
      isDrawerOpen: false,
      isBottomSheetOpen: false,
      playersInfo: [],
      par: []
    };
  },
  created() {
    this.getGameDetails().then(response => {
      this.playersInfo = response.playersInfo;
      this.par = this.getPar;
    });
  },
  computed: {
    ...mapGetters('gameInfo', ['getPar'])
  },
  methods: {
    ...mapActions('gameInfo', ['getGameDetails']),
    onSlideDown() {
      this.isDrawerOpen = false;
      this.isBottomSheetOpen = false;
    },
    onClickOutside() {
      this.isDrawerOpen = false;
      this.isBottomSheetOpen = false;
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
    transform: translateY(70%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
