<template>
  <div
    class="container flex flex-col items-center justify-around bg-selection-bg bg-cover"
  >
    <div>
      <img src="../assets/logo-principle.png" />
    </div>

    <div class="text-xl mr-16 text-white mt-10">
      <p class="font-kalam text-3xl">Welcome to</p>
      <p class="text-2xl leading-tight">
        Siem Reap Mini <br />
        Golf!
      </p>
    </div>

    <div>
      <p class="uppercase text-005d63 text-xl">How many players?</p>
      <InputRange
        :min="1"
        :max="6"
        :value="noOfPlayers"
        @changed="selectedPlayers"
      />
      {{ noOfPlayers }}
    </div>

    <base-button to="player-names" mode="confirm">Confirm</base-button>
  </div>
</template>

<script>
import InputRange from '@/components/InputRange.vue';
import BaseButton from '../components/utilities/BaseButton';

export default {
  name: 'SelectPlayers',
  components: { InputRange, BaseButton },
  data() {
    return {
      noOfPlayers: 1
    };
  },
  methods: {
    selectedPlayers(value) {
      this.noOfPlayers = value;
    }
  }
};
</script>
