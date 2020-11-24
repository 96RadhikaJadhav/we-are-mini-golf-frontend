<template>
  <div class="flex flex-col items-center p-4 bg-scores bg-no-repeat bg-cover">
    <!-- Top of page quote -->
    <div class="p-6 font-capriola text-lg mt-4 mb-16">
      <p class="text-center text-white">
        Player 6, Lorem ipsum dolor sit amet consectetur, adipisicing...
      </p>
    </div>

    <!-- 1st Place -->
    <div class="flex flex-col items-center mb-10">
      <img src="@/assets/first-reef.png" class="h-auto w-32" />

      <div
        class="flex items-center justify-around font-kalam h-12 w-full text-white text-2xl"
      >
        <p class="font-lg mr-4">{{ players[4].playerName }}</p>
        <div class="h-8 w-8 rounded-full text-center bg-ff8e67 text-white">
          <p class="mt-1 text-2xl">{{ players[4].totalScore }}</p>
        </div>
      </div>
    </div>
    <!-- End of 1st Place -->

    <!-- Ranking Table -->
    <div class="flex flex-col h-full justify-between mt-4">
      <div>
        <current-ranking
          v-for="player in players"
          :key="player.id"
          :player="player"
        >
        </current-ranking>
      </div>
      <!-- Button -->
      <base-button to="/new-hole" mode="confirm"
        >on to the next hole!</base-button
      >
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/utilities/BaseButton';
import CurrentRanking from '@/components/CurrentRanking';

export default {
  components: { BaseButton, CurrentRanking },

  data() {
    return {
      players: [
        { id: 1, playerName: 'Churchill', totalScore: 10, rank: '2nd' },
        { id: 2, playerName: 'De Gaulle', totalScore: 11, rank: '3rd' },
        { id: 3, playerName: 'Roosevelt', totalScore: 12, rank: '4th' },
        { id: 5, playerName: 'Staline', totalScore: 14, rank: '5th' },
        { id: 4, playerName: 'Batman', totalScore: 9, rank: '1st' }
      ]
    };
  }
};
</script>

<style></style>
