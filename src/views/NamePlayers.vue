<template>
  <div
    class="grid grid-flow-row items-center bg-players bg-center bg-no-repeat"
  >
    <!-- Input Field -->
    <div class="self-end space-y-4">
      <p class="uppercase text-aeb49a font-semibold text-xl text-center">
        Today's <br />dream team
      </p>
      <div class="bg-white shadow-md mx-6 rounded-3xl">
        <div v-for="input in inputs" :key="input" class="px-8">
          <AgeCard :placeholder="`Player ${input}`" />
        </div>
      </div>
    </div>
    <!-- Start and Back Buttons -->

    <div class="flex flex-col space-y-4">
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
import AgeCard from '../components/utilities/AgeCard';
import BaseButton from '../components/utilities/BaseButton';
import { db } from '@/db.js';
const commonRefs = db.ref('common');

export default {
  name: 'NamePlayers',
  components: { AgeCard, BaseButton },
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

<style>
.title {
  height: 40%;
}

.main-area {
  height: 70%;
}

.footer {
  max-height: 30%;
}
</style>
