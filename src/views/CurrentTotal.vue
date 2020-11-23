<template>
  <div
    class="flex flex-col items-center justify-between p-4 bg-reward bg-no-repeat bg-cover"
  >
    <div></div>

    <div>
      <div class="flex flex-col items-center mb-10">
        <img src="@/assets/first-reef.png" class="h-auto w-20" />

        <div
          class="flex items-center justify-around font-kalam h-12 w-full text-005d63 text-3xl"
        >
          <p class="font-lg mr-4">{{ players[5].playerName }}</p>
          <div class="h-10 w-10 rounded-full text-center bg-ff8e67 text-white">
            <p class="mt-1">{{ players[5].totalScore }}</p>
          </div>
        </div>
      </div>
      <base-card>
        <current-ranking
          v-for="player in players"
          :key="player.id"
          :player="player"
        >
        </current-ranking>
      </base-card>
    </div>

    <base-button to="/new-hole" mode="confirm"
      >on to the next hole!</base-button
    >
  </div>
</template>

<script>
import BaseCard from '@/components/utilities/BaseCard';
import BaseButton from '@/components/utilities/BaseButton';
import CurrentRanking from '@/components/CurrentRanking';

export default {
  components: { BaseCard, BaseButton, CurrentRanking },

  data() {
    return {
      players: [
        { id: 1, playerName: 'Churchill', totalScore: 10, rank: '2nd' },
        { id: 2, playerName: 'De Gaulle', totalScore: 11, rank: '3rd' },
        { id: 3, playerName: 'Roosevelt', totalScore: 12, rank: '4th' },
        { id: 4, playerName: 'Staline', totalScore: 14, rank: '5th' },
        { id: 5, playerName: 'Robin', totalScore: 18, rank: '6th' },
        { id: 6, playerName: 'Batman', totalScore: 9, rank: '1st' }
      ]
    };
  }
};
</script>

<style></style>
