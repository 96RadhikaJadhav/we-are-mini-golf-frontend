<template>
  <!-- ======== Section A: Final Ranking ======== -->

  <div class="h-full bg-005d63">
    <!-- REVIEW MODAL -->
    <review-modal
      v-if="reviewUs"
      @clicked="reviewUs = false"
      @submit="submitReview"
    ></review-modal>

    <help-us></help-us>

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
              v-for="(n, index) in 6"
              :key="index"
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

          <!-- REVIEW US BUTTON -->
          <div class="flex flex-col justify-around h-full">
            <base-button
              type="button"
              class="confirm"
              @clicked="reviewUs = !reviewUs"
              >REVIEW US</base-button
            >
            <base-button to="" class="back text-xl"
              >Detailed Scores</base-button
            >
          </div>
        </div>
      </div>
    </div>

    <!-- ======== SECTION B: Detailed Scores ======== -->
    <div
      class="bg-red-400 h-full w-full px-6 flex flex-col justify-between mx-auto"
    >
      <!-- Top 1/4 of Section B -->
      <div class="h-1/4 flex flex-col justify-around w-3/4 mx-auto max-w-sm">
        <!-- PRIMARY STATS -->
        <div class="flex justify-around">
          <!-- Team Av -->
          <result-circle type="primary">
            <template v-slot:title>Team Average</template>
            <template v-slot:result>24%</template>
          </result-circle>

          <!-- Hole in 1 -->
          <result-circle type="primary">
            <template v-slot:title>Holes In 1</template>
            <template v-slot:result>3</template>
          </result-circle>
        </div>

        <!-- SECONDARY STATS -->
        <div class="flex items-center justify-around">
          <!-- Under Par -->
          <result-circle type="secondary">
            <template v-slot:title>Under Par</template>
            <template v-slot:result>26%</template>
          </result-circle>

          <!-- Par -->
          <result-circle type="secondary">
            <template v-slot:title>Par</template>
            <template v-slot:result>27%</template>
          </result-circle>

          <!-- Over Par -->
          <result-circle type="secondary">
            <template v-slot:title>Over Par</template>
            <template v-slot:result>47%</template>
          </result-circle>
        </div>
      </div>

      <!-- RESULTS CARD -->
      <div class="card max-w-sm mx-auto">
        <div class="grid grid-cols-8 text-005d63 font-kalam">
          <!-- Holes -->
          <div class="mt-10">
            <br /><br />
            <!-- this needs some work -->
            <p
              v-for="(cHole, index) in courseHoles"
              :key="index"
              class="border h-5 w-5 flex items-center justify-center rounded-full border-f5e3c8 text-005d63 mb-1"
            >
              {{ cHole }}
            </p>
          </div>

          <div
            v-for="(res, index) in results"
            :key="index"
            class="flex flex-col text-center"
          >
            <!-- Player Name -->
            <p class="transform -rotate-45 my-4">{{ res.player }}</p>
            <!-- Overall Score -->
            <p
              class="bg-f5e3c8 h-6 w-6 rounded-full flex items-center justify-center mb-2"
            >
              {{ res.overall }}
            </p>
            <!-- Individual Scores -->
            <p v-for="(score, index) in res.scores" :key="index">
              {{ score }}
            </p>
          </div>

          <!-- Par -->
          <div>
            <p class="transform -rotate-45 my-4 text-ff8e67">PAR</p>
            <p
              class="bg-ff8e67 text-f5e3c8 h-6 w-6 rounded-full flex items-center justify-center text-center mb-2"
            >
              43
            </p>
            <div
              v-for="(p, index) in par"
              :key="index"
              class="flex justify-center items-center bg-005d63 text-f5e3c8 h-5 w-5 rounded-full mb-1"
            >
              <p>{{ p }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Buttons -->
      <div
        class="flex items-center justify-around mt-10 w-3/5 mx-auto mb-20 max-w-sm"
      >
        <router-link class="text-white text-lg font-capriola" to=""
          >SHARE</router-link
        >
        <router-link class="link" to="">f</router-link>
        <router-link class="link" to="">@</router-link>
      </div>

      <!-- REVIEW US Button Abs -->
      <base-button
        mode="confirm"
        class="sticky bottom-10"
        @clicked="reviewUs = !reviewUs"
        >Review Us</base-button
      >
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/utilities/BaseButton';
import ResultCircle from '@/components/utilities/scorecard/ResultCircle';
import ReviewModal from '@/components/reviews/ReviewModal';
import HelpUs from '@/components/reviews/HelpUsModal'
export default {
  components: { BaseButton, ResultCircle, ReviewModal, HelpUs },

  data() {
    return {
      name: 'FinalRanking',
      reviewUs: 'review-modal',
      courseHoles: 14,
      results: [
        {
          player: 'DeGaulle',
          overall: 48,
          scores: [1, 3, 5, 4, 1, 3, 5]
        },
        {
          player: 'Churchill',
          overall: 59,
          scores: [2, 3, 5, 4, 1, 3, 5]
        },
        {
          player: 'Roosevelt',
          overall: 48,
          scores: [3, 3, 2, 4, 3, 3, 5]
        },
        {
          player: 'Staline',
          overall: 48,
          scores: [1, 3, 5, 6, 1, 7, 4]
        },
        {
          player: 'Player5',
          overall: 48,
          scores: [3, 5, 5, 4, 1, 3, 2]
        },
        {
          player: 'Player6',
          overall: '-',
          scores: ['-', '-', '-', '-', '-', '-', '-']
        }
      ],
      par: [4, 3, 6, 2, 3, 2, 4, 4, 5, 3, 2]
    };
  },
  methods: {
    submitReview(msg, name) {
      console.log(msg);
      console.log(name);
      this.reviewUs = false;
    }
  }
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
  @apply bg-white rounded-3xl flex flex-col items-center justify-center p-4 w-full my-4;
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
