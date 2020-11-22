<template>
  <div
    class="h-full grid grid-rows-3 place-items-center  bg-selection bg-no-repeat bg-cover bg-center"
  >
    <img src="../assets/logo-principle.png" />
    <div class="text-fff6eb text-3xl self-stretch pt-8">
      <p class="font-kalam">Welcome to</p>
      <p class="font-capriola">Siem Reap Mini <br />Golf!</p>
    </div>
    <div class="space-y-10 h-full mx-auto">
      <p class="text-005d63 text-2xl font-semibold">How many players?</p>
      <div>
        <InputRange
          :min="1"
          :max="6"
          :value="noOfPlayers"
          @changed="selectedPlayers"
        />
      </div>
      <base-button mode="confirm" @clicked="selectNumOfPlayers">
        Confirm
      </base-button>
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
      commonRefs
        .set({ numOfPlayers: this.noOfPlayers })
        .then(this.$router.push({ name: 'NamePlayers' }))
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
