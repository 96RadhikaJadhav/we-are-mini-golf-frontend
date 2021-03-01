<template>
  <div class="h-full w-full flex flex-col max-h-screen">
    <transition name="fade" mode="out-in">
      <router-view class="flex-1 md:mx-auto box-border" />
    </transition>
    <div class="fixed bottom-0 left-0 right-0 z-50">
      <NavMenu
        @display-rules="checkDrawer('rules')"
        @open-score="checkDrawer('score')"
        @close-drawers="checkDrawer('close')"
      />
    </div>

    <!-- RULES COMPONENT -->
    <transition name="slide-in" mode="out-in">
      <div
        v-click-outside="onClickOutside"
        v-if="isRulesOpen"
        class="fixed bottom-0 w-full shadow-2dp rounded-t-2xl"
      >
        <RulesScreen v-touch:swipe.bottom="onSlideDown" />
      </div>
    </transition>
    <transition name="slide-in" mode="out-in">
      <div
        v-click-outside="onClickOutside"
        v-if="isScoreOpen"
        class="sticky bottom-0 w-full shadow-2dp rounded-t-2xl"
        style="height: 60%;"
      >
        <!-- SCORES COMPONENT -->
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
      isRulesOpen: false,
      isScoreOpen: false,
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
      this.isRulesOpen = false;
      this.isScoreOpen = false;
    },
    onClickOutside() {
      // this.isRulesOpen = false;
      // this.isScoreOpen = false;
    },
    checkDrawer(type) {
      if (type === 'rules' && !this.isRulesOpen) {
        this.isScoreOpen = false;
        this.isRulesOpen = true;
      } else if (type === 'rules' && this.isRulesOpen) {
        this.isRulesOpen = false;
      }
      if (type === 'score' && !this.isScoreOpen) {
        this.isRulesOpen = false;
        this.isScoreOpen = true;
      } else if (type === 'score' && this.isScoreOpen) {
        this.isScoreOpen = false;
      }
      if (type === 'close') {
        this.isRulesOpen = false;
        this.isScoreOpen = false;
      }
    }
  }
};
</script>

<style scoped>
.slide-in-enter-active {
  animation: slide-in-bottom 0.8s cubic-bezier(0.41, 0, 0.45, 0.97) both;
}
.slide-in-leave-active {
  animation: slide-in-bottom 0.8s cubic-bezier(0.41, 0, 0.45, 0.97) reverse;
}
@keyframes slide-in-bottom {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
