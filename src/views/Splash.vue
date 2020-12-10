<template>
  <div
    class="w-full h-full bg-fff6eb grid place-items-center bg-splash bg-cover bg-center bg-no-repeat"
  >
    <img src="../assets/logo.png" class="-mt-32" />
  </div>
</template>

<script>
import firebase from 'firebase/app';

export default {
  name: 'Splash',
  created() {
    firebase
      .auth()
      .signInAnonymously()
      .then(() => {
        setTimeout(() => {
          return this.$router.push({ name: 'SelectPlayers' });
        }, 2000);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
