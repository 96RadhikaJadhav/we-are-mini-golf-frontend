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
        :to="{ name: getRouteName, params: { holeNo: holeNo + 1 } }"
        mode="btn confirm"
      >
        on to the next hole!
      </base-button>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/utilities/BaseButton';
import CurrentRanking from '@/components/CurrentRanking';
import { orderBy } from 'lodash';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'CurrentTotal',
  components: { BaseButton, CurrentRanking },
  props: {
    holeNo: {
      type: Number,
      default: 14
    }
  },
  data() {
    return {
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
    },
    otherPlayerRankings() {
      return orderBy(this.playersInfo, ['totalScore'], ['asec']).slice(1);
    },
    getRouteName() {
      return this.holeNo === 14 ? 'Awards' : 'NewHole';
    }
  },
  methods: {
    ...mapActions('gameInfo', ['getGameDetails'])
  }
};
</script>

<style></style>
