<template>
  <div class="w-full h-full bg-fff6eb grid grid-rows-3 place-items-center bg-selection-bg bg-center bg-cover">
    <img src="../assets/logo-principle.png" />
    <div class="text-white -mt-20 -ml-20">
      <p class="text-2xl font-lg font-kalam">Welcome to</p>
      <p class="text-2xl">Siem Reap Mini
        <br />Golf!</p>
    </div>
    <div class="space-y-4 flex flex-col justify-between">
      <p class="text-xl uppercase text-005D63"> How many players ?</p>
      <InputRange
        :min="1"
        :max="6"
        :value="noOfPlayers"
        @changed="selectedPlayers"
      />
      {{ noOfPlayers }}

    <base-button
    mode="confirm"
    to="NamePlayers"
    >Confirm</base-button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import InputRange from '@/components/InputRange.vue';
import { db } from '@/db.js';
const commonRefs = db.ref('common');

export default {
  name: 'SelectPlayers',
  components: { InputRange },
  data() {
    return {
      noOfPlayers: 3
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
  },
};
</script>
