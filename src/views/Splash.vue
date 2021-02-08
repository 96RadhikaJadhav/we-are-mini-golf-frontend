<template>
  <div
    class="flex flex-col items-center w-full h-screen bg-fff6eb bg-splash bg-cover bg-center bg-no-repeat"
  >
    <!-- Spacer for logo and welcome back screen -->

    <div v-show="isResumeGame" class="h-full" />

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
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import BaseButton from '@/components/utilities/BaseButton';

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
      isResumeGame: false
    };
  },
  components: { BaseButton },
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
          gameID: gameId,
          course: this.slug
        })
        .then(response => {
          localStorage.setItem(
            'game-details',
            JSON.stringify({
              id: response.data.id,
              gameID: response.data.gameID
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
          return this.$router.push({ name: 'SelectPlayers' });
        }
      }, 2000);
    }
  }
};
</script>
