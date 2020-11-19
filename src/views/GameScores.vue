<template>
  <div class="container flex flex-col p-4 justify-around items-center">
    <div
      class="text-center text-kalam text-005D63 text-lg h-64 flex justify-center flex-col"
    >
      <p>Hole N°{{ holeNum }}</p>
      <p>PAR {{ par }}</p>
    </div>

    <div class="px-8">
      <base-card>
        <div
          v-for="player in players"
          :key="player.name"
          class="flex justify-between items-center my-4 flex-wrap"
        >
          <p class="text-005D63 font-kalam text-xl mr-16">{{ player.name }}</p>
          <input
            type="number"
            class="h-8 w-8 rounded-full border-aeb49a border text-3b9d11 focus:outline-none text-center"
          />
        </div>
      </base-card>
    </div>

<div>
    <div class="flex items-center justify-center h-64">
      <base-button mode="confirm" to="">Confirm</base-button>
    </div>

    <nav-menu position="absolute"></nav-menu>
  </div>
  </div>
</template>

<script>
import BaseCard from '../components/utilities/BaseCard';
import BaseButton from '../components/utilities/BaseButton';
import NavMenu from '../components/NavMenu';

export default {
  components: { BaseCard, BaseButton, NavMenu },
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
