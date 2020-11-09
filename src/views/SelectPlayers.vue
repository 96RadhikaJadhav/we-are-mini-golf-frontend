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
        :max="10"
        :value="noOfPlayers"
        @changed="selectedPlayers"
      />
      {{ noOfPlayers }}
    </div>
  </div>
</template>

<script>
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
    selectedPlayers(value) {
      this.noOfPlayers = value;
    }
  }
};
</script>
