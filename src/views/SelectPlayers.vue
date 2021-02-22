<template>
  <div
    class="h-full md:w-1/2 bg-no-repeat bg-cover bg-center grid grid-rows-3"
    :style="`background-image: url(${bg});`"
  >
    <div class=""></div>
    <div class=""></div>
    <div class="space-y-10 h-full mx-auto -mt-10">
      <p class="text-005d63 text-xl font-semibold uppercase font-capriola">
        How many players?
      </p>
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
      noOfPlayers: 1,
      bg: ''
    };
  },
  mounted() {
    this.getCourseDetails()
      .then(response => {
        this.bg = response.playerSelectBackground.url;
      })
      .catch(e => console.log(e));
  },
  methods: {
    ...mapActions('gameInfo', ['updateGameDetails']),
    ...mapActions('course', ['getCourseDetails']),
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
