<template>
  <div
    class="flex justify-around items-center h-11 w-full p-2 bg-fff6eb shadow-6dp"
  >
    <!-- MAP VIEW -->
    <router-link :to="{ name: 'GameCourse' }">
      <component
        @click="
          isActive = 'map';
          $emit('close-drawers');
        "
        class="w-nav-icon"
        :is="isActive === 'map' ? 'MapActive' : 'MapInActive'"
      />
    </router-link>

    <!-- SCORE COMPONENT -->
    <button
      @click="
        isActive != 'scores' ? (isActive = 'scores') : (isActive = '');
        $emit('open-score');
      "
      :is="isActive === 'scores' ? 'ScoresActive' : 'ScoreInActive'"
      class="w-nav-icon"
    ></button>

    <!-- RULES COMPONENT -->
    <button
      @click="
        isActive = '';
        $emit('display-rules');
      "
      class="focus:outline-none"
    >
      <Rules class="w-nav-icon" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'NavMenu',
  components: {
    MapActive: () => import('@/assets/nav-icons/Map_active.svg'),
    MapInActive: () => import('@/assets/nav-icons/Map_inactive.svg'),
    ScoresActive: () => import('@/assets/nav-icons/Scores_active.svg'),
    ScoreInActive: () => import('@/assets/nav-icons/Scores_inactive.svg'),
    Rules: () => import('@/assets/nav-icons/Rules_inactive.svg')
  },
  data() {
    return {
      isActive: 'map'
    };
  }
};
</script>
