<template>
  <div
    class="md:w-1/2 bg-no-repeat bg-cover bg-center grid grid-rows-2 justify-items-center 
    place-items-center relative"
    :class="[holeBg]"
  >
    <p class="font-kalam holeno text-white">
      {{ holeNo }}
    </p>
    <p class="font-kalam text-005d63 par">Par 4</p>
  </div>
</template>

<script>
import axios from 'axios';

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
      courseGrid: {}
    };
  },
  computed: {
    holeBg() {
      if (this.holeNo !== 14) {
        return 'bg-newHole';
      } else {
        return 'bg-lastHole';
      }
    }
  },
  created() {
    axios
      .get(`${process.env.VUE_APP_API_URL}/courses/1`)
      .then(response => {
        this.courseGrid = response.data;
        this.updateHoleStatus();
      })
      .catch(e => console.log(e));
  },
  methods: {
    updateHoleStatus() {
      this.courseGrid.squareInfo.forEach(el => {
        if (el.holeNo === this.holeNo) {
          el.isHoleActive = true;
          axios
            .put(`${process.env.VUE_APP_API_URL}/courses/1`, this.courseGrid)
            .then(response => {
              this.courseGrid = response.data;
              this.$router.push({
                name: 'GameScores',
                params: { holeNo: this.holeNo, editscore: this.editscore }
              });
            })
            .catch(e => console.log(e));
        }
      });
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
