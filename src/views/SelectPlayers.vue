<template>
  <div class="w-full h-full bg-fff6eb grid grid-rows-3 place-items-center">
    <img src="../assets/logo-principle.png" />
    <div>
      <p>Welcome to</p>
      <p>Siem Reap Mini Golf!</p>
    </div>
    <div class="space-y-4">
      <p>How many players?</p>
      <InputRange
        :min="1"
        :max="6"
        :value="noOfPlayers"
        @changed="selectedPlayers"
      />
      {{ noOfPlayers }}
    </div>
    <div class="w-full text-center">
      <button
        class="cursor-pointer focus:outline-none"
        @click="selectNumOfPlayers"
      >
        Confirm
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import InputRange from '@/components/InputRange.vue';

export default {
  name: 'SelectPlayers',
  components: { InputRange },
  data() {
    return {
      noOfPlayers: 3
    };
  },
  methods: {
    ...mapActions('common', ['setNumOfPlayers']),
    selectedPlayers(value) {
      this.noOfPlayers = value;
    },
    selectNumOfPlayers() {
      this.setNumOfPlayers({ numOfPlayers: this.selectedPlayers });
    }
  }
};
</script>
