<template>
  <div
    class="grid grid-rows-2 w-full h-screen bg-fff6eb bg-splash bg-cover bg-center bg-no-repeat"
  >
    <!-- Spacer for logo and welcome back screen -->

    <div class="h-full" />

    <!-- BUTTONS FOR RESUME GAME -->
    <div
      v-show="isResumeGame"
      class="h-full w-full text-005d63 font-kalam text-center"
    >
      <div class="py-16">
        <p class="text-3xl mb-1">
          WELCOME BACK!
        </p>
        <p class="text-2xl">
          You have an unfinished game
        </p>
      </div>
      <div v-show="checkExistingGame" class="w-60 mx-auto">
        <BaseButton
          class="btn primary-orange w-full"
          tag="button"
          @clicked="resumeGame"
        >
          Resume Game
        </BaseButton>
        <BaseButton
          class="btn primary-orange mt-4 w-full"
          tag="button"
          @clicked="newGame"
        >
          Start A New Game
        </BaseButton>
      </div>
    </div>

    <!-- SPINNER ON LOADING -->
    <div v-if="isDisplaySpinner && !isResumeGame">
      <Spinner />
      <p class="font-kalam text-005d63 text-center mt-10 w-3/4 mx-auto">
        We’re preparing your game. <br />
        This may take a moment. <br />
        Please keep this page open and take a few seconds to work your putting.
        <br />We’ll be ready soon!
      </p>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import BaseButton from '@/components/utilities/BaseButton';
import Spinner from '@/components/Spinner.vue';

export default {
  name: 'Splash',
  props: {
    slug: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      isResumeGame: false,
      isDisplaySpinner: true
    };
  },
  components: { BaseButton, Spinner },
  computed: {
    checkExistingGame() {
      return localStorage.getItem('course-grid') ? true : false;
    }
  },
  created() {
    // Create New Game
    let gameId = '';
    if (localStorage.getItem('course-grid')) {
      this.isResumeGame = true;
    } else {
      gameId = uuidv4();
      axios
        .post(`${process.env.VUE_APP_API_URL}/game-informations`, {
          gameID: gameId
        })
        .then(response => {
          localStorage.setItem(
            'game-details',
            JSON.stringify({
              id: response.data.id,
              gameID: response.data.gameID,
              slug: this.slug
            })
          );
          this.newGameDelay();
        })
        .catch(e => console.log(e));
    }
  },
  methods: {
    resumeGame() {
      return this.$router.push({ name: 'GameCourse' });
    },
    newGame() {
      if (localStorage.getItem('game-details')) {
        localStorage.removeItem('game-details');
      }
      if (localStorage.getItem('course-grid')) {
        localStorage.removeItem('course-grid');
      }
      window.location.reload();
      this.newGameDelay();
    },
    newGameDelay() {
      setTimeout(() => {
        if (!localStorage.getItem('course-grid')) {
          return this.$router.push({
            name: this.slug ? 'SelectPlayers' : 'SelectCourse'
          });
        }
      }, 1000);
    }
  }
};
</script>
