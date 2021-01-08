<template>
  <div
    class="md:w-1/2 bg-no-repeat bg-cover bg-center grid grid-rows-2 justify-items-center 
    place-items-center relative"
    :class="[holeBg]"
  >
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
    ...mapGetters('gameInfo', ['getPar']),
    holeBg() {
      if (this.holeNo !== 14) {
        return 'bg-newHole';
      } else {
        return 'bg-lastHole';
      }
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
