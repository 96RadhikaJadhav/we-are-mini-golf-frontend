<template>
  <div
    class="flex flex-col items-center justify-between w-full h-1/2 bg-fff6eb "
  >
    <!-- Top 1/2 Screen -->
    <div class="h-1/2">
      <div
        class="text-center mt-32 font-capriola flex flex-col justify-between items-center"
      >
        <p class="text-005d63 text-2xl mb-4">THE AWARD OF</p>
        <div class="flex flex-col items-center relative">
          <Certificate :award="award"></Certificate>
        </div>
      </div>
    </div>

    <!-- Bottom 1/2 Screen -->
    <div class="h-1/2 flex flex-col justify-between">
      <div>
        <p class="text-005d63 text-2xl font-capriola mt-32 mb-8 text-center">
          GOES TO...
        </p>

        <Ribbon :award="award"></Ribbon>
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
import Certificate from '@/components/awards/Certificate.vue';
import Ribbon from '@/components/awards/Ribbon.vue';
import { orderBy } from 'lodash';
import { mapActions, mapGetters } from 'vuex';

export default {
  components: { BaseButton, Ribbon, Certificate },
  data() {
    return {
      award: {
        name: '',
        deg: '',
        img: require('../assets/ribbons/green-ribbon.png'),
        type: ''
      },

      playersInfo: [],
      coursePar: []
    };
  },
  created() {
    this.getGameDetails()
      .then(() => {
        this.playersInfo = this.getGameInfo.playersInfo;
        let courseGrid = (this.courseGrid = JSON.parse(
          localStorage.getItem('course-grid'),
          this.theSniper()
        ));
        this.coursePar = courseGrid.squareInfo
          .filter(el => el.par != null)
          .sort((a, b) => {
            return a.holeNo - b.holeNo;
          })
          .map(el => el.par);
      })
      .catch(e => console.log(e));
  },
  methods: {
    ...mapActions('gameInfo', ['getGameDetails']),

    updateAward(winner, type) {
      let a = this.award;
      a.name = winner;
      a.type = type;
      if (a.deg === 'rotate-6') {
        a.deg = '-rotate-6';
      } else {
        a.deg = 'rotate-6';
      }
      if (a.img === require('../assets/ribbons/green-ribbon.png')) {
        a.img = require('../assets/ribbons/orange-ribbon.png');
      } else if (a.img === require('../assets/ribbons/orange-ribbon.png')) {
        a.img = require('../assets/ribbons/yellow-ribbon.png');
      } else if (a.img === require('../assets/ribbons/yellow-ribbon.png')) {
        a.img = require('../assets/ribbons/green-ribbon.png');
      }
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
          winner = player.name;
        }
      });
      this.updateAward(winner, type);
    }
  },
  computed: {
    ...mapGetters('gameInfo', ['getGameInfo']),
    getHighestTotalPlayer() {
      return orderBy(this.playersInfo, ['totalScore'], ['asec'])[0];
    },

    theDreamer() {
      // Player with the highest score
      let highest = 0;
      let winner = '';

      this.playersInfo.forEach(el => {
        if (el.totalScore > highest) {
          highest = el.totalScore;
          winner = el.name;
        }
      });
      return winner;
    },
    theClockwork() {
      // Most holes ON Par
      let score = [];
      let winner = '';

      this.playersInfo.forEach(el => {
        let holes = el.holeScore;
        let playerPar = [];

        for (let i = 0; i < holes.length; i++) {
          if (holes.reverse()[i] === this.coursePar.reverse()[i]) {
            playerPar.push(holes[i]);
          }
        }
        if (playerPar.length > score.length) {
          score = playerPar;
          winner = el.name;
        }
      });
      return `${winner} (${score.length})`;
    },
    theUnlucky() {
      // Highest over Par (min 7)
      let min = 7;
      let winningScores = [];
      let winner = '';

      this.playersInfo.forEach(el => {
        let score = el.holeScore;
        let playerPar = [];
        console.log(el.name);
        for (let i = 0; i < score.length; i++) {
          if (score.reverse()[i] - this.coursePar.reverse()[i] >= min) {
            console.log(score[i]);
            playerPar.push(score[i]);
          }
        }
        if (playerPar.length > winningScores.length) {
          winningScores = playerPar;
          winner = el.name;
        }
      });
      return `${winner} (${winningScores.length})`;
    },
    playerOfTheDay() {
      // Player with the lowest score
      let lowestScore = 500000000000;
      let winner = '';

      this.playersInfo.forEach(el => {
        if (el.totalScore < lowestScore) {
          lowestScore = el.totalScore;
          winner = el.name;
        }
      });
      return winner;
    }
  }
};
</script>

<style scoped>
.background-gif {
  background-image: url('../assets/Confettis-gif.gif');
}
</style>
