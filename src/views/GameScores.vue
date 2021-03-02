<template>
  <div class="grid bg-scores bg-no-repeat bg-cover bg-center md:w-1/2 pb-20">
    <!-- HOLE AND PAR -->
    <!-- Hand Sign Image -->
    <div
      class="bg-scoreHandBox bg-contain bg-no-repeat bg-center flex flex-col items-center justify-end h-64 pb-4"
    >
      <div class="text-center font-kalam text-005d63 uppercase text-2xl -mt-32">
        <p>
          {{
            courseGrid.numberOfHoles !== holeNo
              ? `Hole ${holeNo}/${getPar.length}
          `
              : 'LAST HOLE!'
          }}
        </p>
        <p>PAR {{ getPar[holeNo - 1] }}</p>
      </div>
    </div>
    <div class="w-full mx-auto px-6">
      <!-- DIV FOR BASE CARD -->
      <div class="bg-white rounded-3xl p-4 text-2xl">
        <div
          v-for="player in playersInfo"
          :key="player.name"
          class="flex justify-between items-center my-4 px-4"
        >
          <!-- PLAYER NAMES -->
          <p class="font-kalam text-005d63 font-light">
            {{ player.name }}
          </p>
          <!-- SCORE INPUT -->
          <input
            type="number"
            placeholder="0"
            inputmode="numeric"
            class="h-10 w-10 rounded-full border-f2e3cb border text-3ac792 focus:outline-none text-center text-xl font-capriola"
            v-model.number="player.score"
            v-if="mode === 'new'"
          />
          <input
            type="number"
            inputmode="numeric"
            class="h-10 w-10 rounded-full border-aeb49a border text-3ac792 focus:outline-none text-center flex items-center justify-center"
            v-model.number="player.holeScore[holeNo - 1]"
            v-else-if="mode === 'edit'"
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

    <!-- CONFIRM BUTTON flex-item 3 -->
    <div class="">
      <base-button
        class="mt-8"
        mode="btn primary-orange"
        @clicked="updatePlayerScore"
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
      type: Number,
      required: true
    },
    mode: {
      type: String,
      required: true
    },
    showTotal: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      playersInfo: [],
      courseGrid: {}
    };
  },
  computed: {
    ...mapGetters('gameInfo', ['getGameInfo', 'getPar'])
  },
  mounted() {
    let self = this;
    window.onpopstate = function() {
      self.$router.push({ name: 'GameCourse' });
    };
  },
  created() {
    this.courseGrid = JSON.parse(localStorage.getItem('course-grid'));
    this.getGameDetails()
      .then(() => {
        this.playersInfo = this.getGameInfo.playersInfo;
      })
      .catch(e => console.log(e));
  },
  methods: {
    ...mapActions('gameInfo', ['getGameDetails', 'updateGameDetails']),
    updatePlayerScore() {
      this.mode === 'edit' ? this.updateTotalScore() : this.calculateTotal();
    },
    navigateTo() {
      this.$router.push({
        name: this.mode === 'edit' ? 'GameCourse' : 'CurrentTotal',
        params: { holeNo: this.holeNo, par: this.getPar[this.holeNo - 1] }
      });
    },
    calculateTotal() {
      let confirm = true;
      this.playersInfo.forEach(el => {
        if (!el.score) {
          confirm = false;
        }
      });
      if (confirm) {
        this.playersInfo.forEach(el => {
          let score = el.score;
          el.holeScore.splice(this.holeNo - 1, 1, score);
          el.totalScore = score + el.totalScore;
          delete el.score;
        });
        this.updateHoleStatus();
        this.updateGameDetails({ playersInfo: this.playersInfo })
          .then(() => {
            this.navigateTo();
          })
          .catch(e => console.log(e));
      }
    },
    updateTotalScore() {
      this.playersInfo.forEach(el => {
        el.totalScore = el.holeScore.reduce(
          (total, current) => total + current
        );
      });
      this.updateGameDetails({ playersInfo: this.playersInfo })
        .then(() => {
          this.navigateTo();
        })
        .catch(e => console.log(e));
    },
    updateHoleStatus() {
      this.courseGrid.squareInfo.forEach(el => {
        if (el.holeNo === this.holeNo) {
          el.isHoleActive = true;
        }
      });
      localStorage.setItem('course-grid', JSON.stringify(this.courseGrid));
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

input[type='number'] {
  -moz-appearance: textfield;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
input::placeholder {
  color: #78d03a;
}
</style>
