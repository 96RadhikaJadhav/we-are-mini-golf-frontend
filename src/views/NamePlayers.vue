<template>
  <div
    class="h-screen w-full flex flex-col items-center justify-between p-6 bg-players-bg bg-cover bg-center"
  >
    <div class="h-16"></div>

    <!-- Input Field -->
    <div class="">
      <p class="uppercase text-aeb49a text-xl text-center">
        Today's <br />dream team
      </p>
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
    <div class="flex flex-col justify-between h-32">
      <base-button mode="confirm" to="">
        Start the game!
      </base-button>

      <base-button mode="back" to="SelectPlayers">
        Change number of players
      </base-button>
    </div>
  </div>
</template>

<script>
import InputName from '../components/InputName';
import { db } from '@/db.js';
const commonRefs = db.ref('common');

export default {
  name: 'NamePlayers',
  components: {
    InputName
  },
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
