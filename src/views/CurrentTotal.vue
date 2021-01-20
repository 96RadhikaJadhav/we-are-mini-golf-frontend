<template>
  <div
    class="grid grid-flow-row grid-rows-4 items-center bg-total bg-no-repeat bg-cover bg-center h-screen md:w-1/2 px-4"
    @click="isDisplayed = !isDisplayed"
  >
    <transition name="drop">
      <QuotesDisplay
        :playersInfo="playersInfo"
        :holeNo="holeNo"
        :getPar="getPar"
        :class="{ show: isDisplayed }"
      ></QuotesDisplay>
    </transition>

    <div>{{ isDisplayed }}</div>
    <!-- 1st Place -->
    <div class="flex flex-col items-center h-full">
      <img src="@/assets/first-reef.png" class="h-auto w-24 mb-4" />

      <div
        v-if="getHighestTotalPlayer"
        class="flex flex-col items-center justify-evenly font-kalam h-12 w-full text-white text-xl"
      >
        <p class="font-lg mb-2 text-2xl" v-if="playersInfo.length > 0">
          {{ getHighestTotalPlayer.name }}
        </p>
        <div class="flex">
          <div
            v-if="getHighestTotalPlayer.holeScore[holeNo - 1]"
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
    <div class="px-8" v-if="playersInfo.length > 1">
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
            :holeNo="holeNo"
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
        {{ holeNo != 14 ? 'on to the next hole!' : 'Award ceremony' }}
      </base-button>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/utilities/BaseButton';
import CurrentRanking from '@/components/CurrentRanking';
import QuotesDisplay from '@/components/QuotesDisplay';
import { orderBy } from 'lodash';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'CurrentTotal',
  components: { BaseButton, CurrentRanking, QuotesDisplay },
  props: {
    holeNo: {
      type: Number
    },
    par: {
      type: Number
    }
  },
  data() {
    return {
      playersInfo: [],
      isDisplayed: false
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
    ...mapGetters('gameInfo', ['getGameInfo', 'getPar']),
    getHighestTotalPlayer() {
      return orderBy(this.playersInfo, ['totalScore'], ['asec'])[0];
    },
    otherPlayerRankings() {
      return orderBy(this.playersInfo, ['totalScore'], ['asec']).slice(1);
    }
  },
  methods: {
    ...mapActions('gameInfo', ['getGameDetails', 'increaseCounter'])
  },
  beforeRouteLeave(to, from, next) {
    if (to.params.holeNo === this.getPar.length) {
      return next({ name: 'Awards' });
    }
    to.params.holeNo = to.params.holeNo + 1;
    next();
  }
};
</script>

<style scoped>
.show {
}
.drop-enter-active {
  animation: drop-down 2s ease-out both;
}
.drop-leave-active {
  animation: drop-down 2s ease-out reverse;
}

@keyframes drop-down {
  0% {
    transform: translateY(-1000px);
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
