<template>
  <div
    class="h-full md:w-1/2 grid grid-rows-3 place-items-center bg-selection bg-no-repeat bg-cover bg-center"
  >
    <img src="../assets/logo-principle.png" />
    <div class="text-fff6eb text-3xl self-stretch pt-8">
      <p class="font-kalam">Welcome to</p>
      <p class="font-capriola">Siem Reap Mini <br />Golf!</p>
    </div>
    <div class="space-y-10 h-full mx-auto">
      <p class="text-005d63 text-2xl font-semibold">How many players?</p>
      <p class="text-center text-lg font-capriola">{{ noOfPlayers }}</p>
      <div>
        <InputRange
          :min="1"
          :max="6"
          :value="noOfPlayers"
          @changed="selectedPlayers"
        />
      </div>
      <base-button mode="btn confirm" @clicked="selectNumOfPlayers">
        Confirm
      </base-button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import InputRange from '@/components/InputRange.vue';
import BaseButton from '../components/utilities/BaseButton';

export default {
  name: 'SelectPlayers',
  components: { InputRange, BaseButton },
  data() {
    return {
      noOfPlayers: 0
    };
  },
  methods: {
    ...mapActions('gameInfo', ['updateGameDetails']),
    selectedPlayers(value) {
      this.noOfPlayers = value;
    },
    selectNumOfPlayers() {
      let payload = {
        noOfPlayers: this.noOfPlayers
      };
      this.updateGameDetails(payload)
        .then(this.$router.push({ name: 'NamePlayers' }))
        .catch(e => console.log(e));
    }
  }
};
</script>
