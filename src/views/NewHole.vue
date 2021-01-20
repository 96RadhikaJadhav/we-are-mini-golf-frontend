<template>
  <div
    class="md:w-1/2 bg-no-repeat bg-cover bg-center flex flex-col"
    :class="[holeBg]"
  >
    <div v-if="holeNo === getPar.length">
      <p
        class="px-12 pt-8 font-capriola mt-4 mb-16 text-center text-white text-xl"
      >
        {{ lastPlace }},
        {{
          getGameInfo.playersInfo.length !== 1
            ? 'this is your last chance to catch up!'
            : "you're almost there!"
        }}
      </p>
    </div>
    <div v-if="getPar.length != holeNo" class="flex-1">
      <p class="font-kalam text-white holeno">
        {{ holeNo }}
      </p>
    </div>
    <div class="relative" v-if="getPar.length !== holeNo">
      <img
        src="https://res.cloudinary.com/doblhgoan/image/upload/v1610893812/we-are-mini-golf/05_-_Par_transition_screen_-_transparent_bg_-_cropped_tolhso.png"
        style="width:90%;"
      />
      <p class="par font-kalam text-005d63">Par {{ getPar[holeNo - 1] }}</p>
    </div>
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
</style>
