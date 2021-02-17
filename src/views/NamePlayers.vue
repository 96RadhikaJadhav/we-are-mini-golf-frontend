<template>
  <form
    @submit.prevent="startGame"
    class="grid grid-flow-row items-center bg-players bg-cover bg-center bg-no-repeat md:w-1/2"
  >
    <div class="self-end space-y-4 px-8">
      <p class="uppercase text-aeb49a text-xl text-center font-capriola">
        Today's <br />dream team
      </p>

      <!-- Card -->
      <div
        class="bg-white shadow-md mx-6 rounded-3xl md:w-full md:mx-auto xl:w-1/2 p-4"
        v-if="inputs"
      >
        <div v-for="(player, index) in playersInfo" :key="index">
          <div class="flex justify-between mb-3">
            <InputText
              :placeholder="`Player ${index + 1}`"
              v-model="player.name"
            />
            <InputSelect v-model="player.age" />
          </div>
        </div>
      </div>
    </div>
    <!-- Start and Back Buttons -->

    <div class="flex flex-col space-y-4 mx-auto">
      <base-button mode="btn primary-orange" type="submit" class="w-full">
        Start the game!
      </base-button>

      <base-button mode="btn primary-beige" to="/select-players">
        Change Nº of players
      </base-button>
    </div>
  </form>
</template>

<script>
import InputText from '../components/InputText';
import InputSelect from '../components/InputSelect';
import BaseButton from '../components/utilities/BaseButton';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'NamePlayers',
  components: { InputText, BaseButton, InputSelect },
  data() {
    return {
      inputs: 0,
      playersInfo: []
    };
  },
  computed: {
    ...mapGetters('gameInfo', ['getGameInfo'])
  },
  created() {
    this.getGameDetails()
      .then(response => {
        this.inputs = response.noOfPlayers;
        this.$gtm.trackEvent({
          event: 'gaEvent',
          eventName: 'players_selected',
          players: response.noOfPlayers
        });
      })
      .catch(e => console.log(e));
  },
  methods: {
    ...mapActions('gameInfo', ['getGameDetails', 'updateGameDetails']),
    startGame() {
      this.updateGameDetails({ playersInfo: this.playersInfo })
        .then(() => {
          this.$router.push({ name: 'GameCourse' });
        })
        .catch(e => console.log(e));
    }
  },
  watch: {
    inputs: {
      deep: true,
      handler() {
        for (var i = 1; i <= this.inputs; i++) {
          this.playersInfo.push({
            name: '',
            age: '',
            holeScore: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // will be changed to dynamic initliaztion soon
            score: 0
          });
        }
      }
    }
  },
  beforeDestroy() {
    this.inputs = 0;
    this.playersInfo = [];
  }
};
</script>
