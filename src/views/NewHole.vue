<template>
  <div
    class="md:w-1/2 bg-no-repeat bg-cover bg-center"
    :class="selectBackground"
  >
    <!-- LAST HOLE SCREEN QUOTE -->
    <div v-if="holeNo === courseGrid.numberOfHoles">
      <p class="px-12 pt-12 font-capriola mb-16 text-center text-white text-xl">
        {{ lastPlace }},
        {{
          getGameInfo.playersInfo.length !== 1
            ? 'this is your last chance to catch up!'
            : "you're almost there!"
        }}
      </p>
    </div>

    <!-- HOLE NUMBER IMG -->
    <div v-if="holeNo !== courseGrid.numberOfHoles">
      <img :src="holeNumberImage" />
    </div>
    <!-- Last Hole -->
    <div v-else class="h-64" />

    <!-- PAR INFO IMG -->
    <div>
      <img :class="{ translate: lastHole }" :src="holeParImage" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { orderBy } from 'lodash';
export default {
  name: 'NewHole',
  props: {
    mode: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      name: 'NewHoleIntro',
      hole: false,
      courseGrid: {},
      coursePar: null,
      lastHole: false,
      holeNo: 0,
      holeInfo: {}
    };
  },
  created() {
    this.holeNo = parseInt(localStorage.getItem('current-hole'));
    this.courseGrid = JSON.parse(localStorage.getItem('course-grid'));
    this.findHoleInfo();
    this.holeNo === this.courseGrid.numberOfHoles
      ? (this.lastHole = true)
      : (this.lastHole = false);
    this.nextPage();
  },
  methods: {
    findHoleInfo() {
      this.holeInfo = this.courseGrid.squareInfo.find(
        el => el.holeNo === this.holeNo
      );
    },
    nextPage() {
      setTimeout(() => {
        this.$router.push({
          name: 'GameScores',
          params: {
            mode: this.mode,
            holeNo: this.holeNo,
            par: this.par
          }
        });
      }, 3000);
    }
  },
  computed: {
    ...mapGetters('gameInfo', ['getGameInfo']),
    selectBackground() {
      if (this.holeNo !== this.courseGrid.numberOfHoles) {
        return 'bg-newHole';
      } else {
        return 'bg-lastHole';
      }
    },
    lastPlace() {
      return orderBy(this.getGameInfo.playersInfo, ['totalScore'], ['desc'])[0]
        .name;
    },
    holeNumberImage() {
      return this.holeInfo.transitionScreenHole.url;
    },
    holeParImage() {
      return this.holeInfo.transitionScreenPar.url;
    }
  }
};
</script>

<style scoped>
.holeno {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 2em;
}

.par {
  position: absolute;
  left: 50%;
  top: 70%;
  transform: translate(-50%, -50%);
  font-size: 2em;
}
.translate {
  transform: translateY(2.25rem);
}
</style>
