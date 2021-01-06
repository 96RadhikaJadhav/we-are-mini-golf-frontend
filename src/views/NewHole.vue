<template>
  <div
    class="md:w-1/2 bg-no-repeat bg-cover bg-center grid grid-rows-2 justify-items-center 
    place-items-center relative"
    :class="[holeBg]"
  >
    <p class="font-kalam holeno text-white">
      {{ holeNo }}
    </p>
    <p class="font-kalam text-005d63 par">Par {{ par }}</p>
  </div>
</template>

<script>
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
    par() {
      return this.coursePar[this.holeNo - 1];
    },
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
    this.coursePar = this.courseGrid.squareInfo
      .filter(el => el.par != null)
      .sort((a, b) => {
        return a.holeNo - b.holeNo;
      })
      .map(el => el.par);
    this.updateHoleStatus();
  },
  methods: {
    updateHoleStatus() {
      this.courseGrid.squareInfo.forEach(el => {
        if (el.holeNo === this.holeNo) {
          el.isHoleActive = true;
        }
      });
      console.log(this.courseGrid.squareInfo);
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
