<template>
  <div
    class="flex flex-col items-center justify-between w-full h-1/2 bg-fff6eb background-gif"
  >
    <!-- Top 1/2 Screen -->
    <div class="h-1/2">
      <div
        class="text-center mt-32 font-capriola flex flex-col justify-between items-center"
      >
        <p class="text-005d63 text-2xl">THE AWARD OF</p>
        <div class="flex flex-col items-center relative">
          <img src="../assets/ribbon.png" class="w-48" />
          <div
            class="h-32 w-32 absolute top-8 flex flex-col items-center justify-center p-2"
          >
            <p class="text-white uppercase text-xl mx-auto">
              {{ awardType }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom 1/2 Screen -->
    <div class="h-1/2 flex flex-col justify-between">
      <div>
        <p class="text-005d63 text-2xl font-capriola mt-32 mb-8 text-center">
          GOES TO...
        </p>

        <div
          class="mx-6 flex flex-col justify-center items-center relative max-w-sm"
        >
          <img :src="img" />
          <p
            :class="
              `text-white text-3xl font-kalam absolute transform ${deg} mb-2`
            "
            v-if="playersInfo.length > 0"
          >
            {{ getHighestTotalPlayer.name }}
          </p>
        </div>
      </div>
      <base-button
        :to="{ name: 'FinalRanking' }"
        mode="back"
        class="text-aeb49a font-capriola mb-4"
      >
        Skip animation
      </base-button>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/utilities/BaseButton';
import { orderBy } from 'lodash';
import { mapActions, mapGetters } from 'vuex';

export default {
  components: { BaseButton },
  data() {
    return {
      name: 'Awards',
      awardType: 'lorom ipsum dolor sit amet',
      deg: '-rotate-6',
      img: require('../assets/green-banner.png'),
      playersInfo: []
    };
  },
  created() {
    this.getGameDetails()
      .then(() => {
        this.playersInfo = this.getGameInfo.playersInfo;
      })
      .catch(e => console.log(e));
  },
  computed: {
    ...mapGetters('gameInfo', ['getGameInfo']),
    getHighestTotalPlayer() {
      return orderBy(this.playersInfo, ['totalScore'], ['asec'])[0];
    }
  },
  methods: {
    ...mapActions('gameInfo', ['getGameDetails'])
  }
};
</script>

<style scoped>
.background-gif {
  background-image: url('../assets/Confettis-gif.gif');
}
</style>
