<template>
  <div
    class="w-full h-full bg-fff6eb grid place-items-center bg-splash bg-cover bg-center bg-no-repeat"
  >
    <img src="../assets/logo.png" class="-mt-32" />
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

export default {
  name: 'Splash',
  created() {
    let gameId = '';
    if (localStorage.getItem('game-details')) {
      gameId = localStorage.getItem('game-details').gameID;
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
        })
        .catch(e => console.log(e));
    }
    setTimeout(() => {
      return this.$router.push({ name: 'SelectPlayers' });
    }, 2000);
  }
};
</script>
