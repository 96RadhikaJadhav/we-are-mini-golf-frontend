<template>
  <div
    class="flex flex-col items-center justify-around bg-players bg-cover bg-center"
  >
    <!-- Input Field -->
    <div>
      <p class="uppercase text-aeb49a text-xl text-center">
        Today's <br />dream team
      </p>
    </div>

    <div>
      <div v-for="input in inputs" :key="input" class="px-8 py-2">
        <BaseCard :placeholder="`Player ${input}`" />
      </div>
    </div>

    <!-- Start and Back Buttons -->
    <div class="h-32 flex flex-col justify-between">
      <base-button mode="confirm" to="/game-scores">
        Start the game!
      </base-button>

      <base-button mode="back" to="/select-players">
        Change number of players
      </base-button>
    </div>
  </div>
</template>

<script>
import BaseCard from '../components/utilities/BaseCard';
import BaseButton from '../components/utilities/BaseButton';
import { db } from '@/db.js';
const commonRefs = db.ref('common');

export default {
  name: 'NamePlayers',
  components: { BaseCard, BaseButton },
  data() {
    return {
      name: 'NamePlayers',
      inputs: 0
    };
  },
  created() {
    this.$store.dispatch('common/setCommonRef', commonRefs);
    commonRefs.on('value', snapshot => {
      this.inputs = snapshot.val().numOfPlayers;
    });
  }
};
</script>

<style></style>
