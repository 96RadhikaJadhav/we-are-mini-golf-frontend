<template>
  <div
    class="flex justify-around items-center h-11 w-full p-2 bg-fff6eb shadow-6dp"
  >
    <router-link :to="{ name: '' }">
      <component
        @click="isActive = 'map'"
        class="w-nav-icon"
        :is="isActive === 'map' ? 'MapActive' : 'MapInActive'"
      />
    </router-link>

    <router-link :to="{ name: '', params: { showTotal: true } }">
      <component
        @click="isActive = 'scores'"
        :is="isActive === 'scores' ? 'ScoresActive' : 'ScoreInActive'"
        class="w-nav-icon"
      />
    </router-link>

    <button @click="$emit('display-rules')" class="focus:outline-none">
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
      isActive: ''
    };
  }
};
</script>
