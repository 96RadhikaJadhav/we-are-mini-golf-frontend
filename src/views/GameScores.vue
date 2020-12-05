<template>
  <div
    class="flex flex-col justify-center p-4 items-center bg-scores bg-no-repeat bg-cover"
  >
    <!-- HOLE AND PAR -->
    <div
      class="text-center font-kalam text-005d63 uppercase text-2xl flex justify-center flex-col mb-12"
    >
      <p>Hole N°{{ holeNo }}</p>
      <p>PAR {{ par }}</p>
    </div>

    <div class="w-full px-6">
      <div class="w-full flex flex-col justify-between">
        <!-- DIV FOR BASE CARD -->
        <div
          class="bg-white rounded-3xl items-center justify-center px-4 my-4 text-2xl"
        >
          <div
            v-for="player in playersInfo"
            :key="player.name"
            class="flex justify-between items-center my-4 px-4"
          >
            <!-- PLAYER NAMES -->
            <p class="text-005D63 font-kalam text-005d63">
              {{ player.name }}
            </p>
            <!-- SCORE INPUT -->
            <input
              type="number"
              inputmode="numeric"
              class="h-10 w-10 rounded-full border-aeb49a border text-3ac792 focus:outline-none text-center flex items-center justify-center"
              v-model="player.score"
            />
          </div>
        </div>
      </div>

      <!-- CONFIRM BUTTON flex-item 3 -->
      <base-button mode="confirm" @clicked="updatePlayerScore">
        Confirm
      </base-button>
    </div>
  </div>
</template>

<script>
import BaseButton from '../components/utilities/BaseButton';
import { db } from '@/db.js';
const gameInfoRefs = db.ref('game_info');

export default {
  name: 'GameScores',
  components: { BaseButton },
  props: {
    holeNo: {
      type: Number
    }
  },
  data() {
    return {
      name: 'GameScore',
      playersInfo: [],
      par: 4
    };
  },
  created() {
    gameInfoRefs.on('value', snapshot => {
      this.playersInfo = snapshot.val().players_info;
    });
  },
  methods: {
    updatePlayerScore() {
      this.calculateTotal();
      db.ref('game_info/players_info')
        .set(this.playersInfo)
        .then(() => {
          this.$router.push({
            name: 'CurrentTotal',
            params: { holeNo: this.holeNo }
          });
        });
    },
    calculateTotal() {
      this.playersInfo.forEach(val => {
        if (!val.holeScore) {
          val.holeScore = [];
        }
        let score = parseInt(val.score);
        val.holeScore.push(score);
        val.totalScore = parseInt(score) + val.totalScore;
        delete val.score;
      });
    }
  }
};
</script>

<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}
</style>
