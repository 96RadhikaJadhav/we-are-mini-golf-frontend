<template>
  <div class="bg-total bg-no-repeat bg-cover bg-center md:w-1/2 mb-4">
    <!-- QUOTE OVERLAY -->
    <transition name="fade-in" v-if="!showTotal && getPar.length !== holeNo">
      <div
        class="absolute top-0 left-0 right-0 bottom-0 overlay"
        v-if="isDisplayed"
      />
    </transition>

    <!-- QUOTE BOX -->
    <div
      v-if="!showTotal && getPar.length !== holeNo"
      :class="[
        'absolute w-full md:w-1/2',
        isDisplayed ? 'slide-bottom' : 'slide-top'
      ]"
    >
      <QuotesDisplay
        :playersInfo="playersInfo"
        :holeNo="holeNo"
        :getPar="getPar"
        @clicked="isDisplayed = !isDisplayed"
      />
    </div>
    <div class="grid-container items-center h-full">
      <!-- 1st Place -->
      <div class="flex flex-col justify-end items-center h-full">
        <img src="@/assets/first-reef.png" class="h-auto w-24 mb-4" />

        <!-- 1st Player Name -->
        <div
          v-if="getHighestTotalPlayer"
          class="flex flex-col items-center justify-evenly font-kalam h-12 w-full text-white text-xl"
        >
          <p class="font-lg mb-2 text-2xl" v-if="playersInfo.length > 0">
            {{ getHighestTotalPlayer.name }}
          </p>
          <!-- 1st Player Last Score -->
          <div class="flex">
            <div
              v-if="getHighestTotalPlayer.holeScore[holeNo - 1]"
              class="flex items-center justify-center h-8 w-8 border border-white rounded-full text-white mr-2"
            >
              <p class="mt-1">
                {{ getHighestTotalPlayer.holeScore[holeNo - 1] }}
              </p>
            </div>
            <!-- 1st Player Total Score -->
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
            <p class="text-005d63" v-show="!showTotal">
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
              :show="showTotal"
            >
            </current-ranking>
            <div class="grid grid-cols-6">
              <div class="col-span-4"></div>
              <div class="col-span-2">
                <p class="font-kalam text-005d63 text-sm" v-show="!showTotal">
                  PAR {{ par }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Button -->
      <div class="flex-1 flex items-center h-1/4">
        <base-button
          :to="{ name: 'GameCourse', params: { holeNo: holeNo } }"
          mode="btn primary-orange"
        >
          {{
            holeNo != this.getPar.length
              ? 'on to the next hole!'
              : 'Award ceremony'
          }}
        </base-button>
      </div>
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
    },
    showTotal: {
      type: Boolean
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
  mounted() {
    setTimeout(() => {
      this.isDisplayed = true;
    }, 1500);
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
.grid-container {
  display: grid;
  grid-template-rows: 1fr 1fr 0.5fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.overlay {
  background-color: rgba(174, 180, 154, 0.6);
}

.quote-container-hidden {
  position: absolute;
  top: -25%;
  @apply mx-auto;
}

.top-center {
  top: 50%;
  transform: translate(0%, -50%);
}

.fade-in-enter-active {
  animation: fade-in-fwd 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}

.fade-in-leave-active {
  animation: fade-in-fwd 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) reverse;
}

.slide-bottom {
  animation: slide-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.slide-top {
  animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

/* GOING DOWN FROM TOP!!!! */
@keyframes slide-bottom {
  0% {
    bottom: 100%;
    transform: translateY(50px);
  }
  100% {
    bottom: 30%;
    /* transform: translateY(-50%); */
  }

  /* GOING UP!!! */
}
@keyframes slide-top {
  0% {
    bottom: 30%;
    /* transform: translateY(-50%); */
  }
  100% {
    bottom: 100%;
    transform: translateY(50px);
  }
}

@keyframes fade-in-fwd {
  0% {
    transform: translateZ(-80px);
    opacity: 0;
  }
  100% {
    transform: translateZ(0);
    opacity: 1;
  }
}
</style>
