<template>
  <div
    class="grid grid-flow-row items-center bg-players bg-cover bg-center bg-no-repeat md:w-1/2"
  >
    <div class="self-end space-y-4 px-8">
      <p class="uppercase text-aeb49a font-semibold text-xl text-center">
        Today's <br />dream team
      </p>

      <!-- Card -->
      <div
        class="bg-white shadow-md mx-6 rounded-3xl md:w-full md:mx-auto xl:w-1/2"
        v-if="inputs"
      >
        <div v-for="(player, index) in playersInfo" :key="index">
          <div class="flex justify-between py-4 px-4">
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

    <div class="flex flex-col space-y-4">
      <base-button mode="btn confirm" @clicked="startGame">
        Start the game!
      </base-button>

      <base-button mode="back" to="/select-players">
        Change number of players
      </base-button>
    </div>
  </div>
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
      .then(() => {
        this.inputs = this.getGameInfo.noOfPlayers;
      })
      .catch(e => console.log(e));
  },
  methods: {
    ...mapActions('gameInfo', ['getGameDetails', 'updateGameDetails']),
    startGame() {
      this.updateGameDetails({ playersInfo: this.playersInfo })
        .then(this.$router.push({ name: 'GameCourse' }))
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
