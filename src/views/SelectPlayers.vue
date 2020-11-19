<template>
  <div
    class="container flex flex-col items-center justify-around bg-selection-bg bg-cover"
  >
    <p class="uppercase text-005d63 text-xl">How many players?</p>
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

      <base-button
        to="player-names"
        mode="confirm"
        @clicked="selectNumOfPlayers"
        >Confirm</base-button
      >
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import InputRange from '@/components/InputRange.vue';
import BaseButton from '../components/utilities/BaseButton';
import { db } from '@/db.js';
const commonRefs = db.ref('common');

export default {
  name: 'SelectPlayers',
  components: { InputRange, BaseButton },
  data() {
    return {
      noOfPlayers: 1
    };
  },
  computed: {
    ...mapState('common', ['info'])
  },
  created: function() {
    this.$store.dispatch('common/setCommonRef', commonRefs);
  },
  methods: {
    selectedPlayers(value) {
      this.noOfPlayers = value;
    },
    selectNumOfPlayers() {
      commonRefs.set({ numOfPlayers: this.noOfPlayers });
    }
  }
};
</script>
