<template>
  <div
    class="container flex flex-col items-center justify-around bg-players-bg bg-cover bg-center py-4"
  >
    <!-- Input Field -->
    <div>
      <p class="uppercase text-aeb49a text-xl text-center">
        Today's <br />dream team
      </p>
    </div>

    <div>
      <base-card class="my-10">
        <input-name
          v-for="input in inputs"
          :key="input"
          :placeholder="`Player ${input}`"
        >
        </input-name>
      </base-card>
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
import InputName from '../components/InputName';
import { db } from '@/db.js';
const commonRefs = db.ref('common');

export default {
  name: 'NamePlayers',
  components: { InputName, BaseCard, BaseButton },
  data() {
    return {
      name: 'NamePlayers',
      inputs: 1
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
