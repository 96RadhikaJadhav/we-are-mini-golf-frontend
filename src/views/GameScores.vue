<template>
  <div
    class="container flex flex-col p-4 items-center bg-scores bg-no-repeat bg-cover"
  >
    <div class="mt-32"></div>
    <div class="mt-10"></div>

    <!-- HOLE AND PAR -->
    <div
      class="text-center font-kalam text-005d63 uppercase text-2xl flex justify-center flex-col mb-12"
    >
      <p>Hole N°{{ holeNo }}</p>
      <p>PAR {{ par }}</p>
    </div>

    <div class="flex flex-col justify-between h-full">
      <!-- DIV FOR BASE CARD -->
      <div class="card px-4 text-2xl">
        <div
          v-for="player in playersInfo"
          :key="player.name"
          class="flex justify-between items-center my-4 flex-wrap "
        >
          <!-- PLAYER NAMES -->
          <p class="text-005D63 mr-16 font-kalam">{{ player.name }}</p>
          <!-- SCORE INPUT -->
          <input
            type="number"
            class="h-10 w-10 rounded-full border-aeb49a border text-3ac792 focus:outline-none text-center flex items-center justify-center"
            v-model="player.score"
          />
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

<style></style>
