<template>
  <div
    class="flex flex-col items-center p-4 bg-total bg-no-repeat bg-cover bg-center md:w-1/2"
  >
    <!-- Top of page quote -->
    <div class="p-6 font-capriola text-lg mt-4 mb-16">
      <p class="text-center text-white">
        Player 6, Lorem ipsum dolor sit amet consectetur, adipisicing...
      </p>
    </div>

    <!-- 1st Place -->
    <div class="flex flex-col items-center mb-10">
      <img src="@/assets/first-reef.png" class="h-auto w-32" />

      <div
        class="flex items-center justify-evenly font-kalam h-12 w-full text-white text-2xl"
      >
        <p class="font-lg mr-4" v-if="playersInfo.length > 0">
          {{ getHighestTotalPlayer.name }}
        </p>
        <div class="h-8 w-8 rounded-full text-center bg-ff8e67 text-white">
          <p class="mt-1 text-2xl" v-if="playersInfo.length > 0">
            {{ getHighestTotalPlayer.totalScore }}
          </p>
        </div>
      </div>
    </div>
    <!-- End of 1st Place -->

    <!-- Ranking Table -->
    <div class="flex flex-col h-full justify-between mt-4">
      <div>
        <current-ranking
          v-for="player in otherPlayerRankings"
          :key="player.id"
          :player="player"
        >
        </current-ranking>
      </div>
      <!-- Button -->
    </div>
    <div class="flex-1 flex items-center">
      <base-button
        :to="{ name: 'NewHole', params: { holeNo: holeNo + 1 } }"
        mode="confirm"
      >
        on to the next hole!
      </base-button>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/utilities/BaseButton';
import CurrentRanking from '@/components/CurrentRanking';
import { db } from '@/db.js';
import { orderBy } from 'lodash';
const gameInfoRefs = db.ref('game_info');

export default {
  name: 'CurrentTotal',
  components: { BaseButton, CurrentRanking },
  props: {
    holeNo: {
      type: Number
    }
  },
  data() {
    return {
      playersInfo: []
    };
  },
  created() {
    gameInfoRefs.on('value', snapshot => {
      this.playersInfo = snapshot.val().players_info;
    });
  },
  computed: {
    getHighestTotalPlayer() {
      return orderBy(this.playersInfo, ['totalScore'], ['asec'])[0];
    },
    otherPlayerRankings() {
      return orderBy(this.playersInfo, ['totalScore'], ['asec']).slice(1);
    }
  },
  beforeRouteLeave(to, from, next) {
    if (to.params.holeNo === 14) {
      next({ name: 'Awards' });
    }
    next();
  }
};
</script>

<style></style>
