<template>
  <div
    class="flex flex-col items-center justify-between w-full h-1/2 bg-fff6eb background-gif"
  >
    <!-- Top 1/2 Screen -->
    <div class="h-1/2">
      <div
        class="text-center mt-32 font-capriola flex flex-col justify-between items-center relative"
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
        deg: '-rotate-6',
        img: '',
        desc: '',
        total: null,
        type: ''
      },

      playersInfo: [],
      coursePar: []
    };
  },
  created() {
    this.getGameDetails()
      .then(() => {
        this.coursePar = this.getPar;
        this.playersInfo = this.getGameInfo.playersInfo;
        this.theSniper(), this.awardRotation();
      })
      .catch(e => console.log(e));
  },
  methods: {
    ...mapActions('gameInfo', ['getGameDetails']),

    awardRotation() {
      setInterval(() => {
        switch (this.award.type) {
          case 'The Sniper':
            this.theDreamer();
            break;
          case 'The Dreamer':
            this.theClockwork();
            break;
          case 'The Clockwork':
            this.theUnlucky();
            break;
          case 'The Unlucky':
            this.playerOfTheDay();
            break;
          case 'Player Of The Day':
            this.theSniper();
            break;

          default:
            this.award.type = 'The Sniper';
            break;
        }
      }, 5000);
    },

    updateAward(winner, type, desc, total) {
      let a = this.award;
      if (total === null) {
        total = '0';
      }
      if (winner === '') {
        winner = 'Nobody!';
      }
      a.type = type;
      a.name = winner;
      a.desc = desc;
      a.total = total;
      switch (a.deg) {
        case 'rotate-6':
          a.deg = '-rotate-6';
          break;
        default:
          a.deg = 'rotate-6';
          break;
      }
      switch (a.img) {
        case require('../assets/ribbons/green-ribbon.png'):
          a.img = require('../assets/ribbons/orange-ribbon.png');
          break;
        case require('../assets/ribbons/orange-ribbon.png'):
          a.img = require('../assets/ribbons/yellow-ribbon.png');
          break;
        case require('../assets/ribbons/yellow-ribbon.png'):
          a.img = require('../assets/ribbons/green-ribbon.png');
          break;

        default:
          a.img = require('../assets/ribbons/green-ribbon.png');
          break;
      }
    },

    theSniper() {
      // Most holes in one
      let type = 'The Sniper';
      let desc = 'Most Holes In One';
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
      this.updateAward(winner, type, desc, highest);
    },
    theDreamer() {
      // Player with the highest score
      let type = 'The Dreamer';
      let desc = 'The Highest Score';
      let highest = 0;
      let winner = '';

      this.playersInfo.forEach(el => {
        if (el.totalScore > highest) {
          highest = el.totalScore;
          winner = el.name;
        }
      });
      this.updateAward(winner, type, desc, highest);
    },
    theClockwork() {
      // Most holes ON Par
      let type = 'The Clockwork';
      let desc = 'Most Shots On Par';

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
      this.updateAward(winner, type, desc, score.length);
    },
    theUnlucky() {
      // Highest over Par (min 7)
      let type = 'The Unlucky';
      let desc = 'Highest Over Par';

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
      let total = winningScores.length;
      this.updateAward(winner, type, desc, total);
    },
    playerOfTheDay() {
      // Player with the lowest score
      let type = 'Player Of The Day';
      let desc = 'Lowest Score';

      let lowestScore = 500000000000;
      let winner = '';

      this.playersInfo.forEach(el => {
        if (el.totalScore < lowestScore) {
          lowestScore = el.totalScore;
          winner = el.name;
        }
      });
      this.updateAward(winner, type, desc, lowestScore);
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
</style>
