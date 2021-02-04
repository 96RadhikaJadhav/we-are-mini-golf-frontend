<template>
  <div class="md:w-1/2 bg-no-repeat bg-cover bg-center" :class="holeBg">
    <!-- LAST HOLE SCREEN QUOTE -->
    <div v-if="holeNo === getPar.length">
      <p class="px-12 pt-8 font-capriola mb-16 text-center text-white text-xl">
        {{ lastPlace }},
        {{
          getGameInfo.playersInfo.length !== 1
            ? 'this is your last chance to catch up!'
            : "you're almost there!"
        }}
      </p>
    </div>

    <!-- HOLE NUMBER IMG -->
    <div v-if="holeNo !== getPar.length">
      <img :src="require(`@/assets/newHole/holeNo/hole-${holeNo}.png`)" />
    </div>
    <div v-else>
      <img :src="require(`@/assets/newHole/holeNo/last-hole.png`)" />
    </div>

    <!-- PAR INFO IMG -->
    <div>
      <img
        :class="{ translate: lastHole }"
        :src="require(`@/assets/newHole/par/par-${getPar[holeNo - 1]}.png`)"
      />
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
      holeNo: 0
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
    this.holeNo = parseInt(localStorage.getItem('current-hole'));
    this.courseGrid = JSON.parse(localStorage.getItem('course-grid'));
    this.holeNo === this.getPar.length
      ? (this.lastHole = true)
      : (this.lastHole = false);
    this.nextPage();
  },
  methods: {
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
  transform: translateY(-1.75rem);
}
</style>
