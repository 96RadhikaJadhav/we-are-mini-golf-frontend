<template>
  <div
    class="md:w-1/2 bg-no-repeat bg-cover bg-center grid grid-rows-3 relative"
    :class="[holeBg]"
  >
    <div v-if="holeNo === getPar.length">
      <p
        class="px-12 pt-8 font-capriola mt-4 mb-16 text-center text-white text-xl"
      >
        {{ lastPlace }}, this is your last chance to catch up!
      </p>
    </div>
    <div v-if="getPar.length != holeNo">
      <p class="font-kalam holeno text-white">
        {{ holeNo }}
      </p>
    </div>
    <p class="font-kalam text-005d63 par">Par {{ getPar[holeNo - 1] }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { orderBy } from 'lodash';
export default {
  name: 'NewHole',
  props: {
    holeNo: {
      type: Number,
      required: true
    },
    editscore: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      name: 'NewHoleIntro',
      hole: false,
      courseGrid: {},
      coursePar: null
    };
  },
  computed: {
    ...mapGetters('gameInfo', ['getGameInfo', 'getPar']),
    holeBg() {
      if (this.holeNo !== this.getPar.length) {
        return 'bg-newHole';
      } else {
        return 'bg-lastHole';
      }
    },
    lastPlace() {
      return orderBy(this.getGameInfo.playersInfo, ['totalScore'], ['desc'])[0]
        .name;
    }
  },
  created() {
    this.courseGrid = JSON.parse(localStorage.getItem('course-grid'));
    this.updateHoleStatus();
  },
  methods: {
    updateHoleStatus() {
      this.courseGrid.squareInfo.forEach(el => {
        if (el.holeNo === this.holeNo) {
          el.isHoleActive = true;
        }
      });
      localStorage.setItem('course-grid', JSON.stringify(this.courseGrid));
      setTimeout(() => {
        this.$router.push({
          name: 'GameScores',
          params: {
            holeNo: this.holeNo,
            editscore: this.editscore,
            par: this.par
          }
        });
      }, 3000);
    }
  }
};
</script>

<style scoped>
.holeno {
  position: absolute;
  top: 28%;
  left: 52.5%;
  font-size: 2em;
}

.par {
  position: absolute;
  bottom: 22%;
  left: 40%;
  font-size: 2em;
}
</style>
