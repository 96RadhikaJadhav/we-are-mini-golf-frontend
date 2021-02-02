<template>
  <div
    class="h-full md:w-1/2 bg-selection bg-no-repeat bg-cover bg-center grid grid-rows-3"
  >
    <div class=""></div>
    <div class=""></div>
    <div class="space-y-10 h-full mx-auto -mt-10">
      <p class="text-005d63 text-2xl font-semibold">How many players?</p>
      <div>
        <vue-slider
          v-model="noOfPlayers"
          dotSize="25"
          :min="1"
          :max="6"
          tooltip="always"
        ></vue-slider>
      </div>
      <base-button mode="btn primary-orange" @clicked="selectNumOfPlayers">
        Confirm
      </base-button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import BaseButton from '../components/utilities/BaseButton';
import VueSlider from 'vue-slider-component';
import '@/styles/slider-theme.scss';

export default {
  name: 'SelectPlayers',
  components: { BaseButton, VueSlider },
  data() {
    return {
      noOfPlayers: 1
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
        .then(() => {
          this.$router.push({
            name: 'NamePlayers',
            params: { noOfPlayers: this.noOfPlayers }
          });
        })
        .catch(e => console.log(e));
    }
  }
};
</script>
