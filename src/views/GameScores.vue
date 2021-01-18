<template>
  <div
    class="grid grid-flow-row grid-rows-3 items-center bg-scores bg-no-repeat bg-cover bg-center md:w-1/2 "
  >
    <!-- HOLE AND PAR -->
    <div
      class="text-center font-kalam text-005d63 uppercase h-full text-xl md:text-2xl flex flex-col items-center justify-end bg-scoreHandBox bg-contain bg-no-repeat bg-center"
    >
      <div class="mb-2 md:mb-8">
        <p>Hole {{ holeNo }}/{{ getPar.length }}</p>
        <p>PAR {{ getPar[holeNo - 1] }}</p>
      </div>
    </div>

    <div
      class="w-full px-6 h-full flex flex-col items-center justify-center row-span-3"
    >
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
              placeholder="0"
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
              maxlength="2"
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
    </div>

    <!-- CONFIRM BUTTON flex-item 3 -->
    <div>
      <base-button
        class="mb-20"
        mode="btn confirm"
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
      playersInfo: []
    };
  },
  computed: {
    ...mapGetters('gameInfo', ['getGameInfo', 'getPar'])
  },

  created() {
    this.getGameDetails()
      .then(() => {
        this.playersInfo = this.getGameInfo.playersInfo;
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
      this.playersInfo.forEach(el => {
        let score = el.score;
        el.holeScore.splice(this.holeNo - 1, 1, score);
        el.totalScore = score + el.totalScore;
        delete el.score;
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
