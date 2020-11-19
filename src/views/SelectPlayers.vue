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
  }
};
</script>
