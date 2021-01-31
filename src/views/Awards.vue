<template>
  <div
    class="flex flex-col items-center justify-between w-full bg-fff6eb h-screen background-gif"
  >
    <div
      class="text-center mt-20 font-capriola flex flex-col justify-between items-center relative"
    >
      <transition name="fade">
        <img
          v-if="animation.enterOne"
          src="@/assets/award-banner.png"
          alt="award-banner"
          class="mx-auto w-52 -mb-8"
        />
      </transition>
      <transition name="bounce">
        <div
          v-if="animation.enterTwo"
          class="flex flex-col items-center relative mb-10"
        >
          <Certificate :award="award"></Certificate>
        </div>
      </transition>

      <transition name="fade">
        <p
          v-if="animation.enterThree"
          class="text-005d63 text-2xl font-capriola my-4 text-center"
        >
          GOES TO...
        </p>
      </transition>
      <transition name="bounce">
        <Ribbon v-if="animation.enterFour" :award="award"></Ribbon>
      </transition>
    </div>
    <base-button
      :to="{ name: 'FinalRanking' }"
      mode="back"
      class="text-aeb49a font-capriola mb-4"
    >
      Skip animation
    </base-button>
  </div>
</template>

<script>
import BaseButton from '@/components/utilities/BaseButton';
import Certificate from '@/components/awards/Certificate.vue';
import Ribbon from '@/components/awards/Ribbon.vue';
import { orderBy } from 'lodash';
import { mapActions, mapGetters } from 'vuex';

export default {
  components: { BaseButton, Ribbon, Certificate },
  data() {
    return {
      playersInfo: [],
      coursePar: [],
      successfulAwards: [],
      award: {
        name: '',
        type: '',
        deg: '-rotate-6',
        img: ''
      },
      animation: {
        enterOne: false,
        enterTwo: false,
        enterThree: false,
        enterFour: false
      }
    };
  },
  created() {
    this.getGameDetails()
      .then(() => {
        this.coursePar = this.getPar;
        this.playersInfo = this.getGameInfo.playersInfo;
        this.theSniper();
        this.theDreamer();
        this.theClockwork();
        this.theUnlucky();
        this.playerOfTheDay();
        this.awardRotation();
      })
      .catch(e => console.log(e));
  },
  methods: {
    ...mapActions('gameInfo', ['getGameDetails']),

    awardRotation() {
      let counter = 0;
      this.updateAward(this.successfulAwards[counter]);
      setInterval(() => {
        if (counter < this.successfulAwards.length - 1) {
          counter++;
          this.updateAward(this.successfulAwards[counter]);
        } else {
          this.$router.push({ name: 'FinalRanking' });
          return;
        }
      }, 7000);
    },
    updateAward(award) {
      this.animation.enterOne = false;
      this.animation.enterTwo = false;
      this.animation.enterThree = false;
      this.animation.enterFour = false;

      this.award.type = award.type;
      this.award.name = award.winner;
      switch (this.award.deg) {
        case 'rotate-6':
          this.award.deg = '-rotate-6';
          break;
        default:
          this.award.deg = 'rotate-6';
          break;
      }
      switch (this.award.img) {
        case require('../assets/ribbons/green-ribbon.png'):
          this.award.img = require('../assets/ribbons/orange-ribbon.png');
          break;
        case require('../assets/ribbons/orange-ribbon.png'):
          this.award.img = require('../assets/ribbons/yellow-ribbon.png');
          break;
        case require('../assets/ribbons/yellow-ribbon.png'):
          this.award.img = require('../assets/ribbons/green-ribbon.png');
          break;

        default:
          this.award.img = require('../assets/ribbons/green-ribbon.png');
          break;
      }
      this.showAwards();
    },

    showAwards() {
      setTimeout(() => {
        this.animation.enterOne = true;
      }, 700);
      setTimeout(() => {
        this.animation.enterTwo = true;
      }, 1400);
      setTimeout(() => {
        this.animation.enterThree = true;
      }, 2100);
      setTimeout(() => {
        this.animation.enterFour = true;
      }, 3500);
    },

    theSniper() {
      // Most holes in one
      let type = 'The Sniper';
      let winner = '';
      let highest = null;
      let scores = this.playersInfo;
      scores.forEach(player => {
        let total = player.holeScore.filter(num => num === 1).length;
        if (total > highest) {
          highest = total;
          winner = player.name;
        }
      });
      if (winner) {
        let sniper = { winner: winner, type: type };
        this.successfulAwards.push(sniper);
      } else {
        return;
      }
    },
    theDreamer() {
      // Player with the highest score
      let type = 'The Dreamer';
      let highest = 0;
      let winner = '';

      this.playersInfo.forEach(el => {
        if (el.totalScore > highest) {
          highest = el.totalScore;
          winner = el.name;
        }
      });
      if (winner) {
        let dreamer = { winner: winner, type: type };
        this.successfulAwards.push(dreamer);
      }
    },
    theClockwork() {
      // Most holes ON Par
      let type = 'The Clockwork';

      let score = [];
      let winner = '';

      this.playersInfo.forEach(el => {
        let holes = el.holeScore;
        let playerPar = [];

        for (let i = 0; i < holes.length; i++) {
          if (holes[i] === this.getPar[i]) {
            playerPar.push(holes[i]);
          }
        }
        if (playerPar.length > score.length) {
          score = playerPar;
          winner = el.name;
        }
      });
      if (winner) {
        let clockwork = { winner: winner, type: type };
        this.successfulAwards.push(clockwork);
      }
    },
    theUnlucky() {
      // Highest over Par (min 7)
      let type = 'The Unlucky';

      let min = 7;
      let winningScores = [];
      let winner = '';
      let par = this.getPar;

      this.playersInfo.forEach(el => {
        let score = el.holeScore;
        let playerPar = [];
        for (let i = 0; i < score.length; i++) {
          if (score[i] - par[i] >= min) {
            playerPar.push(score[i]);
          }
        }
        if (playerPar.length > winningScores.length) {
          winningScores = playerPar;
          winner = el.name;
        }
      });
      if (winner) {
        let unlucky = { winner: winner, type: type };
        this.successfulAwards.push(unlucky);
      }
    },
    playerOfTheDay() {
      // Player with the lowest score
      let type = 'Player Of The Day';

      let lowestScore = 500000000000;
      let winner = '';

      this.playersInfo.forEach(el => {
        if (el.totalScore < lowestScore) {
          lowestScore = el.totalScore;
          winner = el.name;
        }
      });
      if (winner) {
        let pOTD = { winner: winner, type: type };
        this.successfulAwards.push(pOTD);
      }
    }
  },
  computed: {
    ...mapGetters('gameInfo', ['getGameInfo', 'getPar']),
    getHighestTotalPlayer() {
      return orderBy(this.playersInfo, ['totalScore'], ['asec'])[0];
    }
  }
};
</script>

<style scoped>
.background-gif {
  background-image: url('../assets/Confettis-gif.gif');
}
.bounce-transition {
  display: inline-block; /* otherwise scale animation won't work */
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-out 0.5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(2);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes bounce-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.fade-enter-active {
  animation: fade-in 0.5s;
}
.fade-leave-active {
  animation: fade-out 0.5s;
}
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
