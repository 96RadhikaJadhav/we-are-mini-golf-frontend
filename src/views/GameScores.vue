<template>
  <div
    class="flex flex-col justify-evenly p-4 items-center bg-scores bg-no-repeat bg-cover bg-center md:w-1/2"
  >
    <!-- HOLE AND PAR -->
    <div
      class="text-center font-kalam text-005d63 uppercase text-2xl flex justify-center flex-col"
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
              v-model.number="player.score"
              v-if="!editscore && !showTotal"
            />
            <input
              type="number"
              inputmode="numeric"
              class="h-10 w-10 rounded-full border-aeb49a border text-3ac792 focus:outline-none text-center flex items-center justify-center"
              v-model.number="player.holeScore[holeNo - 1]"
              v-else-if="editscore && !showTotal"
            />
            <input
              type="number"
              inputmode="numeric"
              class="h-10 w-10 rounded-full border-aeb49a border text-3ac792 focus:outline-none text-center flex items-center justify-center"
              :value="player.totalScore"
              disabled
              v-else
            />
          </div>
        </div>
      </div>

      <!-- CONFIRM BUTTON flex-item 3 -->
      <base-button
        mode="confirm"
        @clicked="updatePlayerScore"
        v-if="!showTotal"
      >
        Confirm
      </base-button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import BaseButton from '../components/utilities/BaseButton';

export default {
  name: 'GameScores',
  components: { BaseButton },
  props: {
    holeNo: {
      type: Number
    },
    editscore: {
      type: Boolean,
      default: false
    },
    showTotal: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      name: 'GameScore',
      playersInfo: [],
      par: 4
    };
  },
  computed: {
    ...mapGetters('gameInfo', ['getGameInfo'])
  },
  created() {
    this.getGameDetails()
      .then(() => {
        this.playersInfo = this.getGameInfo.playersInfo;
        this.playersInfo.forEach(el => {
          el.score = 0;
        });
      })
      .catch(e => console.log(e));
  },
  methods: {
    ...mapActions('gameInfo', ['getGameDetails', 'updateGameDetails']),
    updatePlayerScore() {
      if (!this.editscore) {
        this.calculateTotal();
        this.updateGameDetails({ playersInfo: this.playersInfo })
          .then(this.navigateTo())
          .catch(e => console.log(e));
      }
    },
    navigateTo() {
      this.$router.push({
        name: this.editscore ? 'GameCourse' : 'CurrentTotal',
        params: { holeNo: this.holeNo }
      });
    },
    calculateTotal() {
      this.playersInfo.forEach(val => {
        if (val.holeScore === null) {
          val.holeScore = [];
        }
        let score = val.score;
        val.holeScore.push(score);
        val.totalScore = score + val.totalScore;
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
