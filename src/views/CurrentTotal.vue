<template>
  <div
    class="grid grid-flow-row grid-rows-4 items-center bg-total bg-no-repeat bg-cover bg-center h-screen md:w-1/2 px-4"
  >
    <!-- Top of page quote -->
    <div class="p-6 font-capriola mt-4 mb-16 text-center text-white">
      <p v-for="(player, index) in playersInfo" :key="player.id">
        {{ quoteGen(player, index) }}
      </p>
    </div>

    <!-- 1st Place -->
    <div class="flex flex-col items-center h-full">
      <img src="@/assets/first-reef.png" class="h-auto w-24 mb-4" />

      <div
        class="flex flex-col items-center justify-evenly font-kalam h-12 w-full text-white text-xl"
      >
        <p class="font-lg mb-2 text-2xl" v-if="playersInfo.length > 0">
          {{ getHighestTotalPlayer.name }}
        </p>
        <div class="flex">
          <div
            class="flex items-center justify-center h-8 w-8 border border-white rounded-full text-white mr-2"
          >
            <p class="mt-1">
              {{ getHighestTotalPlayer.totalScore }}
            </p>
          </div>
          <div class="h-8 w-8 rounded-full text-center bg-ff8e67 text-white">
            <p class="mt-1 text-xl" v-if="playersInfo.length > 0">
              {{ getHighestTotalPlayer.totalScore }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- End of 1st Place -->

    <!-- Ranking Table -->
    <div class="px-8">
      <div class="grid grid-flow-col grid-cols-6 font-kalam leading-4 ml-4">
        <div class="col-span-4"></div>
        <div class="col-span-1">
          <p class="text-005d63">
            Last<br />
            hole
          </p>
        </div>
        <div class="col-span-1">
          <p class="text-ff8e67">
            Total<br />
            score
          </p>
        </div>
      </div>

      <div class="flex flex-col justify-between h-full">
        <div>
          <current-ranking
            v-for="(player, index) in otherPlayerRankings"
            :key="player.id"
            :player="player"
            :index="index"
          >
          </current-ranking>
        </div>
      </div>
    </div>
    <!-- Button -->
    <div class="flex-1 flex items-center h-1/4">
      <base-button
        :to="{ name: 'NewHole', params: { holeNo: holeNo } }"
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
import quote from '@/quotes.js';

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
      playersInfo: [],
      par: 4,
      quote
    };
  },
  created() {
    this.getGameDetails()
      .then(() => {
        this.playersInfo = this.getGameInfo.playersInfo;
        this.increaseCounter();
      })
      .catch(e => console.log(e));
  },
  computed: {
    ...mapGetters('gameInfo', ['getGameInfo', 'counter']),
    getHighestTotalPlayer() {
      return orderBy(this.playersInfo, ['totalScore'], ['asec'])[0];
    },
    otherPlayerRankings() {
      return orderBy(this.playersInfo, ['totalScore'], ['asec']).slice(1);
    }
  },
  methods: {
    quoteGen(player, i) {
      // const par = localStorage.getItem('course-details');
      const score = player.holeScore;
      const lastScore = player.holeScore.length - 1;
      const quote = this.quote;
      const random = Math.floor(Math.random() * quote.holeInOne.length);

      // Hole in One
      if (score[lastScore] === 1) {
        const newQuote = quote.holeInOne[random];
        return `${player.name}${newQuote}`;
      } else if (
        score[lastScore] > 1 &&
        score[lastScore] < this.par &&
        i === this.counter
      ) {
        const newQuote = quote.parBestUnder[random];
        return `${player.name}${newQuote}`;
      } else if (score[lastScore] === this.par && i === this.counter) {
        const newQuote = quote.parExact[random];
        return `${player.name}${newQuote}`;
      } else if (
        score[lastScore] >= this.par + 1 &&
        score[lastScore] <= this.par + 2 &&
        i === this.counter
      ) {
        const newQuote = quote.parOverByOne[random];
        return `${player.name}${newQuote}`;
      } else if (score[lastScore] >= this.par + 3 && i === this.counter) {
        const newQuote = quote.parOverByThree[random];
        return `${player.name}${newQuote}`;
      } else return;
    },

    ...mapActions('gameInfo', ['getGameDetails', 'increaseCounter'])
  },
  beforeRouteLeave(to, from, next) {
    if (to.params.holeNo === 14) {
      return next({ name: 'Awards' });
    }
    to.params.holeNo = to.params.holeNo + 1;
    next();
  }
};
</script>

<style></style>
