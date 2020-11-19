<template>
  <div class="container flex flex-col p-4 justify-around items-center">
    <!-- HOLE AND PAR flex-item 1 -->
    <div
      class="text-center text-kalam text-005D63 text-lg flex justify-center flex-col"
    >
      <p>Hole N°{{ holeNum }}</p>
      <p>PAR {{ par }}</p>
    </div>

    <!-- DIV FOR BASE CARD flex-item 2 -->
    <div class="px-4">
      <base-card>
        <div
          v-for="player in players"
          :key="player.name"
          class="flex justify-between items-center my-4 flex-wrap"
        >
          <!-- PLAYER NAMES -->
          <p class="text-005D63 font-kalam text-xl mr-16">{{ player.name }}</p>
          <!-- SCORE INPUT -->
          <input
            type="number"
            class="h-8 w-8 rounded-full border-aeb49a border text-3b9d11 focus:outline-none text-center"
          />
        </div>
      </base-card>
    </div>

    <!-- CONFIRM BUTTON flex-item 3 -->
    <base-button mode="confirm" to="">Confirm</base-button>
  </div>
</template>

<script>
import BaseCard from '../components/utilities/BaseCard';
import BaseButton from '../components/utilities/BaseButton';

export default {
  components: { BaseCard, BaseButton },
  data() {
    return {
      holeNum: 3,
      par: 4,
      players: [
        { name: 'Churchill' },
        { name: 'De Gaulle' },
        { name: 'Roosevelt' },
        { name: 'Staline' },
        { name: 'Player 5' },
        { name: 'Player 6' }
      ]
    };
  }
};
</script>

<style></style>
