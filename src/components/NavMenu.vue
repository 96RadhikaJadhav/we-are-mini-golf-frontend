<template>
  <div
    class="flex justify-around items-center h-16 w-full p-2 bg-fff6eb shadow-6dp"
  >
    <router-link :to="{ name: 'GameCourse' }">
      <img
        @click="isActive = 'map'"
        class="h-8 w-8"
        :src="isActive === 'map' ? images.mapActive : images.mapInactive"
      />
    </router-link>

    <router-link :to="{ name: 'CurrentTotal', params: { showTotal: true } }">
      <img
        @click="isActive = 'scores'"
        :src="
          isActive === 'scores' ? images.scoresActive : images.scoresInactive
        "
        class="h-8 w-8"
      />
    </router-link>

    <button @click="$emit('display-rules')" class="focus:outline-none">
      <img :src="images.rulesInactive" class="h-8 w-8" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'NavMenu',
  data() {
    return {
      isActive: '',
      images: {
        mapInactive:
          'https://res.cloudinary.com/doblhgoan/image/upload/v1609562720/we-are-mini-golf/Nav%20Icons/Illustration_12_bzrw7f.svg',
        mapActive:
          'https://res.cloudinary.com/doblhgoan/image/upload/v1609562720/we-are-mini-golf/Nav%20Icons/Map_active_xu2xfg.svg',
        scoresInactive:
          'https://res.cloudinary.com/doblhgoan/image/upload/v1609563007/we-are-mini-golf/Nav%20Icons/Scores_inactive_sdc815.svg',
        scoresActive:
          'https://res.cloudinary.com/doblhgoan/image/upload/v1609562720/we-are-mini-golf/Nav%20Icons/Illustration_15_cegm2g.svg',
        rulesInactive:
          'https://res.cloudinary.com/doblhgoan/image/upload/v1609562368/we-are-mini-golf/Nav%20Icons/rules-inactive_m4fjsp.svg'
      }
    };
  }
};
</script>
