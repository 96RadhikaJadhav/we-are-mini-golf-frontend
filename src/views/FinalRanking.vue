<template>
  <!-- Section A: Final Ranking -->
  <div class="h-full bg-005d63">
    <div class="h-screen">
      <!-- Top 1/4 Header -->
      <div class="h-1/4 flex flex-col items-center justify-center">
        <header class="text-2xl text-f5e3c8 text-center">
          FINAL<br />RANKING
        </header>
      </div>

      <!-- Reef 1/4 -->
      <div class="h-1/4 flex flex-col items-center">
        <img src="@/assets/first-reef.png" class="" />
        <div class="flex items-center mt-6">
          <p class="text-xl text-white font-kalam mr-4">Churchill</p>
          <div class="circle orange">
            <p class="font-kalam text-xl">10</p>
          </div>
        </div>
      </div>

      <!-- Player Ranking Table | Lower 1/2 -->
      <div class="h-1/2 w-full px-16 max-w-sm mx-auto">
        <div class="h-full flex flex-col justify-between">
          <div class="mb-6">
            <div
              v-for="n in 6"
              :key="n"
              class="flex justify-between mb-1 font-kalam text-2xl"
            >
              <div class="flex">
                <p class="mr-4 text-ff8e67">2nd</p>
                <p class="text-white">De Gaulle</p>
              </div>
              <div class="circle beige">
                <p>12</p>
              </div>
            </div>
          </div>

          <div class="flex flex-col justify-around h-full">
            <base-button to="" class="confirm">REVIEW US</base-button>
            <base-button to="" class="back text-xl"
              >Detailed Scores</base-button
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Section B: Detailed Scores -->
    <div
      class="bg-green-400 h-full w-full px-6 flex flex-col justify-between max-w-sm mx-auto"
    >
      <!-- Top 1/4 of Section B -->
      <div class="h-1/4 flex flex-col justify-around w-3/4 mx-auto">
        <div class="flex justify-around">
          <!-- Circle 1 -->
          <div class="flex flex-col items-center">
            <p class="title">Team Average</p>
            <div class="circle-score-primary">
              <p>59</p>
            </div>
          </div>
          <!-- Circle 2 -->
          <div class="flex flex-col items-center">
            <p class="title">Holes in 1</p>
            <div class="circle-score-primary">
              <p>3</p>
            </div>
          </div>
        </div>

        <!-- Circle 3 -->
        <div class="flex items-center justify-around">
          <div class="text-3B9D11">
            <p class="title text-sm">UNDER PAR</p>
            <div class="circle-score-secondary">
              <p>26%</p>
            </div>
          </div>

          <!-- Circle 4 -->
          <div class="text-3B9D11">
            <p class="title text-sm">UNDER PAR</p>
            <div class="circle-score-secondary">
              <p>26%</p>
            </div>
          </div>

          <!-- Circle 5 -->
          <div class="text-3B9D11">
            <p class="title text-sm">UNDER PAR</p>
            <div class="circle-score-secondary">
              <p>26%</p>
            </div>
          </div>
        </div>
      </div>

      <!-- RESULTS CARD -->
      <div class="card my-4">
        <div class="grid grid-cols-8 text-005d63 font-kalam">
          <!-- Holes -->
          <div class="mt-8">
            <br /><br />
            <p
              v-for="cHole in courseHoles"
              :key="cHole"
              class="border h-5 w-5 flex items-center justify-center rounded-full border-f5e3c8 text-005d63 mb-1"
            >
              {{ cHole }}
            </p>
          </div>

          <div
            v-for="res in results"
            :key="res"
            class="flex flex-col text-center"
          >
            <!-- Player Name -->
            <p class="transform -rotate-45 my-4">{{ res.player }}</p>
            <!-- Overall Score -->
            <p
              class="bg-f5e3c8 h-6 w-6 rounded-full flex items-center justify-center"
            >
              {{ res.score }}
            </p>
            <!-- Individual Scores -->
            <p v-for="hole in res.holes" :key="hole">{{ hole }}</p>
          </div>

          <!-- Par -->
          <div>
            <p class="transform -rotate-45 my-4 text-ff8e67">PAR</p>
            <p
              class="bg-ff8e67 text-f5e3c8 h-6 w-6 rounded-full flex items-center justify-center text-center"
            >
              43
            </p>
            <div
              v-for="p in par"
              :key="p"
              class="flex justify-center items-center bg-005d63 text-f5e3c8 h-5 w-5 rounded-full mb-1"
            >
              <p>{{ p }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Buttons -->
      <div class="flex items-center justify-around mt-10 w-3/5 mx-auto mb-20">
        <router-link class="text-white text-lg font-capriola" to=""
          >SHARE</router-link
        >
        <router-link class="link" to="">f</router-link>
        <router-link class="link" to="">@</router-link>
      </div>

      <!-- REVIEW US Button Abs -->
      <base-button to="" mode="confirm" class="sticky bottom-10"
        >Review Us</base-button
      >
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/utilities/BaseButton';
export default {
  data() {
    return {
      courseHoles: 14,
      results: [
        {
          player: 'Churchill',
          score: 59,
          holes: [1, 3, 5, 4, 1, 3, 5]
        },
        {
          player: 'f',
          score: 48,
          holes: [1, 3, 5, 4, 1, 3, 5]
        },
        {
          player: 'Winthrop',
          score: 48,
          holes: [1, 3, 5, 4, 1, 3, 5]
        },
        {
          player: 'Steve',
          score: 48,
          holes: [1, 3, 5, 4, 1, 3, 5]
        },
        {
          player: 'Peterson',
          score: 48,
          holes: [1, 3, 5, 4, 1, 3, 5]
        },
        {
          player: 'Player6',
          score: '-',
          holes: ['-', '-', '-', '-', '-', '-', '-']
        }
      ],
      par: [4, 3, 6, 2, 3, 2, 4, 4, 5, 3, 2]
    };
  },
  components: { BaseButton }
};
</script>

<style scoped>
.circle {
  @apply h-8 w-8 rounded-full text-center pt-1 font-kalam text-xl text-white;
}
.circle-score-primary {
  @apply h-20 w-20 rounded-full text-center pt-1 font-kalam text-xl text-white bg-3B9D11 flex items-center justify-center;
}
.circle-score-secondary {
  @apply h-14 w-14 rounded-full text-center pt-1 font-kalam text-xl text-3B9D11 bg-f5e3c8 flex items-center justify-center;
}
.title {
  @apply uppercase font-capriola text-3B9D11 text-xs;
}
.card {
  @apply bg-white rounded-3xl flex flex-col items-center justify-center p-4 w-full;
}
.link {
  @apply h-12 w-12 bg-gray-500 rounded-full flex items-center justify-center text-3xl text-white;
}
.orange {
  @apply bg-ff8e67 text-white;
}
.beige {
  @apply bg-fff6eb text-005d63;
}
</style>
