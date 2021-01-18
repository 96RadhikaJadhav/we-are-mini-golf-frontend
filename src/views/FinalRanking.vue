<template>
  <!-- ======== Section A: Final Ranking ======== -->

  <div class="h-full w-full bg-rankings bg-no-repeat bg-cover">
    <component
      :is="componentId"
      @close="componentId = ''"
      @submit="submitReview"
    ></component>

    <div class="h-screen flex flex-col justify-between">
      <!-- Top 1/4 Header -->
      <div class="h-1/4 flex flex-col items-center justify-center">
        <header class="text-3xl text-f5e3c8 text-center tracking-wide">
          FINAL<br />RANKING
        </header>
      </div>

      <!-- Reef 1/4 -->
      <div class="h-1/4 flex flex-col items-center">
        <div class="h-32 w-32">
          <img src="@/assets/first-reef.png" class="h-auto w-full" />
          <!-- logo looks rough -->
        </div>
        <div class="flex items-center" v-if="playersInfo.length > 0">
          <p class="text-2xl text-white font-kalam mr-4">
            {{ getWinner.name }}
          </p>
          <div class="circle orange">
            <p class="font-kalam text-xl">
              {{ getWinner.totalScore }}
            </p>
          </div>
        </div>
      </div>

      <!-- Player Ranking Table | Lower 1/2 -->
      <div class="h-1/2 w-3/5 max-w-sm mx-auto mt-14">
        <div class="h-full flex flex-col justify-between">
          <div class="mb-6">
            <div
              v-for="(player, index) in otherPlayerRankings"
              :key="index"
              class="flex justify-between mb-1 font-kalam text-2xl"
            >
              <div class="flex">
                <p class="mr-4 text-ea9864">{{ index + 1 }}</p>
                <p class="text-white">{{ player.name }}</p>
              </div>
              <div class="circle beige">
                <p>12</p>
              </div>
            </div>
          </div>

          <!-- REVIEW US BUTTON -->
          <div class="mb-2">
            <base-button
              type="button"
              class="btn confirm mb-4"
              @clicked="componentId = 'ReviewModal'"
            >
              REVIEW US
            </base-button>
            <base-button class="back text-xl">
              Detailed Scores
            </base-button>
          </div>
        </div>
      </div>
    </div>

    <!-- ======== SECTION B: Detailed Scores ======== -->
    <div
      v-if="!componentId"
      class="h-full w-11/12 flex flex-col justify-between mx-auto mt-10"
    >
      <!-- Top 1/4 of Section B -->
      <div class="h-1/4 flex flex-col justify-around w-full mx-auto max-w-sm">
        <!-- PRIMARY STATS -->
        <div class="flex justify-around px-10">
          <!-- Team Av -->
          <result-circle type="primary">
            <template v-slot:title>Team Average</template>
            <template v-slot:result>{{ teamAverage }}</template>
          </result-circle>

          <!-- Hole in 1 -->
          <result-circle type="primary">
            <template v-slot:title>Holes In 1</template>
            <template v-slot:result>{{ holesInOne }}</template>
          </result-circle>
        </div>

        <!-- SECONDARY STATS -->
        <div class="flex items-center justify-around px-4 mb-4">
          <!-- Under Par -->
          <result-circle type="secondary">
            <template v-slot:title>Under Par</template>
            <template v-slot:result>{{ underParPercentage }}</template>
          </result-circle>

          <!-- Par -->
          <result-circle type="secondary">
            <template v-slot:title>Par</template>
            <template v-slot:result>{{ onParPercentage }}</template>
          </result-circle>

          <!-- Over Par -->
          <result-circle type="secondary">
            <template v-slot:title>Over Par</template>
            <template v-slot:result>{{ overParPercentage }}</template>
          </result-circle>
        </div>
      </div>

      <!-- RESULTS CARD -->
      <div class="card w-full md:max-w-1/2 mx-auto">
        <div
          class="w-full grid grid-flow-col auto-cols-fr text-005d63 font-kalam pt-6 text-center"
        >
          <!-- Holes -->
          <div class="mt-16">
            <div class="mt-2"></div>
            <!--=========================================== placeholder below - can see the 0 index in holes display - needs fixing ===================================-->
            <p v-for="(p, i) in par" :key="i" class="circle-hole mb-1">
              {{ i + 1 }}
            </p>
          </div>

          <div v-for="(res, index) in playersInfo" :key="index">
            <!-- Player Names -->
            <p class="transform -rotate-45 mb-4">{{ res.name }}</p>
            <!-- Overall Scores -->
            <p class="circle-score-total">{{ res.totalScore }}</p>
            <!-- Individual Scores in columns -->
            <p
              v-for="(score, index) in res.holeScore"
              :key="index"
              class="border-r border-f5e3c8 pb-1"
              :class="resultColor(score, index)"
            >
              {{ scoreUpdate(score) }}
            </p>
          </div>

          <!-- PAR -->
          <div>
            <p class="transform -rotate-45 mb-4 text-ff8e67 font-capriola">
              PAR
            </p>
            <p class="circle-par mx-auto">
              {{
                par.reduce((a, b) => {
                  return a + b;
                })
              }}
            </p>
            <p
              v-for="(p, index) in par"
              :key="index"
              class="circle-par-blue mt-1"
            >
              {{ p }}
            </p>
          </div>
        </div>
      </div>

      <!-- Buttons -->
      <div
        class="flex items-center justify-around mt-6 w-4/6 mx-auto mb-20 max-w-sm"
      >
        <router-link class="text-white text-xl font-capriola" to="">
          SHARE
        </router-link>
        <router-link class="link" to="">f</router-link>
        <router-link class="link pb-1" to="">@</router-link>
      </div>

      <!-- REVIEW US Button Abs -->
      <base-button
        mode="btn confirm"
        class="sticky bottom-10"
        @clicked="componentId = 'ReviewModal'"
      >
        Review Us
      </base-button>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/utilities/BaseButton';
import ResultCircle from '@/components/utilities/scorecard/ResultCircle';
import ReviewModal from '@/components/reviews/ReviewModal';
import HelpUs from '@/components/reviews/HelpUsModal';
import ThankYou from '@/components/reviews/ThankYouModal';

import { orderBy } from 'lodash';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'FinalRanking',
  components: {
    BaseButton,
    ResultCircle,
    ReviewModal,
    HelpUs,
    ThankYou
  },
  data() {
    return {
      componentId: '',
      playersInfo: [],
      par: [],
      underPar: 0,
      onPar: 0,
      overPar: 0,
      totalShots: 0
    };
  },
  created() {
    if (this.$route.params.componentId) {
      this.componentId = this.$route.params.componentId;
    }
    this.getGameDetails()
      .then(() => {
        this.playersInfo = this.getGameInfo.playersInfo;
        this.par = this.getPar;
        this.parCalc();
      })
      .catch(e => console.log(e));
  },
  methods: {
    ...mapActions('gameInfo', ['getGameDetails', 'updateGameDetails']),
    submitReview(msg, name, rating) {
      let payload = {};
      payload.gameReview = { reviewerName: name, review: msg, rating: rating };
      this.updateGameDetails(payload)
        .then(() => {
          if (rating <= 4) {
            this.componentId = 'ThankYou';
            return;
          } else {
            this.componentId = 'HelpUs';
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    parCalc() {
      this.totalShots = this.playersInfo.length * this.par.length; // 42 shots total
      let underPar = [];
      let onPar = [];
      let overPar = [];
      this.playersInfo.forEach(el => {
        let i = 0;
        el.holeScore.forEach(el => {
          if (el < this.par[i]) {
            underPar.push(el);
            i++;
            return;
          } else if (el === this.par[i]) {
            onPar.push(el);
            i++;
            return;
          } else if (el > this.par[i]) {
            overPar.push(el);
            i++;
            return;
          }
        });
        this.underPar = underPar;
        this.onPar = onPar;
        this.overPar = overPar;
      });
    },

    resultColor(score, i) {
      if (score <= this.par[i] && score > 1) {
        return 'green';
      } else if (score === 1) {
        return 'red';
      } else if (score == 0) {
        return;
      }
    },
    scoreUpdate(score) {
      if (score !== 0) {
        return score;
      } else {
        return '-';
      }
    }
  },
  computed: {
    ...mapGetters('gameInfo', ['getGameInfo', 'getPar']),
    getWinner() {
      return orderBy(this.playersInfo, ['totalScore'], ['asec'])[0];
    },
    otherPlayerRankings() {
      return orderBy(this.playersInfo, ['totalScore'], ['asec']).slice(1);
    },
    teamAverage() {
      let playerTotal = [];
      this.playersInfo.forEach(el => {
        if (el.totalScore) {
          playerTotal.push(el.totalScore);
        }
      });
      playerTotal = playerTotal.reduce((a, b) => {
        return a + b;
      });
      return (playerTotal / this.playersInfo.length).toFixed(1);
    },
    holesInOne() {
      let playerTotal = [];
      this.playersInfo.forEach(el => {
        el.holeScore.forEach(el => {
          if (el === 1) {
            playerTotal.push(el);
          }
        });
      });
      return playerTotal.length;
    },
    underParPercentage() {
      return ((this.underPar.length / this.totalShots) * 100).toFixed() + '%';
    },
    onParPercentage() {
      return ((this.onPar.length / this.totalShots) * 100).toFixed() + '%';
    },
    overParPercentage() {
      return ((this.overPar.length / this.totalShots) * 100).toFixed() + '%';
    }
  }
};
</script>

<style scoped>
.red {
  color: red;
}
.green {
  color: rgb(70, 206, 70);
}
.white {
  color: white;
}
.circle {
  @apply h-8 w-8 rounded-full text-center pt-1 font-kalam text-xl text-white;
}
.circle-score-total {
  @apply bg-f5e3c8 h-6 w-6 rounded-full flex items-center justify-center mb-2 mx-auto;
}
.circle-hole {
  @apply border h-6 w-6 flex items-center justify-center rounded-full border-f5e3c8 text-005d63 mb-1 mx-auto;
}
.circle-par {
  @apply bg-ff8e67 text-f5e3c8 h-6 w-6 rounded-full flex items-center justify-center text-center mb-2;
}
.circle-par-blue {
  @apply flex justify-center items-center bg-005d63 text-f5e3c8 h-6 w-6 rounded-full mb-1 mx-auto;
}
.card {
  @apply bg-white rounded-3xl flex flex-col items-center justify-center p-4 my-4;
}
.link {
  @apply h-10 w-10 bg-blue-900 rounded-full flex items-center justify-center text-3xl text-white opacity-40;
}
.orange {
  @apply bg-ff8e67 text-white;
}
.beige {
  @apply bg-fff6eb text-005d63;
}
</style>
