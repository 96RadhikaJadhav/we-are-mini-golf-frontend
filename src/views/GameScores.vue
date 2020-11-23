<template>
  <div
    class="container flex flex-col p-4 items-center bg-scores bg-no-repeat bg-center"
  >
    <div class="mt-32"></div>
    <div class="mt-10"></div>

    <!-- HOLE AND PAR -->
    <div
      class="text-center font-kalam text-005d63 uppercase text-2xl flex justify-center flex-col mb-12"
    >
      <p>Hole N°{{ holeNum }}</p>
      <p>PAR {{ par }}</p>
    </div>

    <div class="flex flex-col justify-between h-full">
      <!-- DIV FOR BASE CARD -->
      <div class="px-4 text-2xl">
        <base-card>
          <div
            v-for="player in players"
            :key="player.name"
            class="flex justify-between items-center my-4 flex-wrap "
          >
            <!-- PLAYER NAMES -->
            <p class="text-005D63 mr-16 font-kalam">{{ player.name }}</p>
            <!-- SCORE INPUT -->
            <input
              type="number"
              class="h-10 w-10 rounded-full border-aeb49a border text-3ac792 focus:outline-none text-center flex items-center justify-center"
            />
          </div>
        </base-card>
      </div>

      <!-- CONFIRM BUTTON flex-item 3 -->
      <base-button mode="confirm" to="/current-total">Confirm</base-button>
    </div>
  </div>
</template>

<script>
import BaseCard from '../components/utilities/BaseCard';
import BaseButton from '../components/utilities/BaseButton';

export default {
  components: { BaseCard, BaseButton },
  data() {
    return {
      name: 'GameScore',
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
