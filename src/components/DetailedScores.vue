<template>
  <div class="card w-full mx-auto">
    <div
      class="w-full grid grid-flow-col auto-cols-fr text-005d63 font-kalam pt-6 text-center"
    >
      <!-- Holes -->
      <div class="mt-16">
        <!--=========================================== placeholder below - can see the 0 index in holes display - needs fixing ===================================-->
        <p v-for="(p, i) in par" :key="i" class="circle-hole mb-1">
          {{ i + 1 }}
        </p>
      </div>

      <div v-for="(res, index) in playersInfo" :key="index">
        <!-- Player Names -->
        <p class="transform -rotate-45 mb-2 ml-3">{{ res.name }}</p>
        <!-- Overall Scores -->
        <p class="circle-score-total">{{ res.totalScore }}</p>
        <!-- Individual Scores in columns -->
        <p
          v-for="(score, index) in res.holeScore"
          :key="index"
          class="border-r border-f5e3c8 pb-1"
          :class="resultColor(score, index)"
        >
          {{ scoreUpdate(score) }}
        </p>
      </div>

      <!-- PAR -->
      <div v-if="par.length > 0">
        <p class="transform -rotate-45 mb-2 text-ff8e67 font-capriola">
          PAR
        </p>
        <p class="circle-par mx-auto">
          {{ totalPar }}
        </p>
        <p v-for="(p, index) in par" :key="index" class="circle-par-blue mt-1">
          {{ p }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailedScores',
  props: {
    playersInfo: {
      type: Array,
      required: true
    },
    par: {
      type: Array,
      required: true
    }
  },
  computed: {
    totalPar() {
      return this.par.reduce((a, b) => {
        return a + b;
      });
    }
  },
  methods: {
    resultColor(score, i) {
      if (score <= this.par[i] && score > 1) {
        return 'green';
      } else if (score === 1) {
        return 'text-FF6350';
      } else if (score == 0) {
        return;
      }
    },
    scoreUpdate(score) {
      if (score !== 0) {
        return score;
      } else {
        return '-';
      }
    }
  }
};
</script>

<style scoped>
.red {
  color: red;
}
.green {
  color: rgb(70, 206, 70);
}
.white {
  color: white;
}
.circle {
  @apply h-8 w-8 rounded-full text-center pt-1 font-kalam text-xl text-white;
}
.circle-score-total {
  @apply bg-f5e3c8 h-6 w-6 rounded-full flex items-center justify-center mb-2 mx-auto;
}
.circle-hole {
  @apply border h-6 w-6 flex items-center justify-center rounded-full border-f5e3c8 text-005d63 mb-1 mx-auto;
}
.circle-par {
  @apply bg-ff8e67 text-f5e3c8 h-6 w-6 rounded-full flex items-center justify-center text-center mb-2;
}
.circle-par-blue {
  @apply flex justify-center items-center bg-005d63 text-f5e3c8 h-6 w-6 rounded-full mb-1 mx-auto;
}
.card {
  @apply bg-white rounded-3xl flex flex-col items-center justify-center p-4 my-4;
}
.link {
  @apply h-10 w-10 flex items-center justify-center opacity-80;
}
.orange {
  @apply bg-ff8e67 text-white;
}
.beige {
  @apply bg-f5e3c8 text-005d63;
}
</style>
