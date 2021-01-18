<template>
  <div
    class="w-full h-screen bg-fff6eb grid grid-flow-row grid-rows-2 place-items-center bg-splash bg-cover bg-center bg-no-repeat"
  >
    <div class="h-full flex items-end row-span-1">
      <img src="../assets/logo.png" class="-mt-32" />
    </div>
    <transition name="fade" mode="out-in">
      <div v-if="isResumeGame" class="h-full row-span-1 w-60">
        <p class="uppercase text-aeb49a text-3xl text-center font-kalam py-20">
          Welcome Back!
        </p>
        <div v-if="checkExistingGame">
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
    </transition>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import BaseButton from '@/components/utilities/BaseButton';

export default {
  name: 'Splash',
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
