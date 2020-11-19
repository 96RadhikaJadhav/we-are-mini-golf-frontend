<template>
  <div class="flex justify-around items-center h-20 bg-f5e3c8">
    <router-link to="game-course">
      <img src="../assets/map-active.png">
    </router-link>
    <router-link to="">
    <img src="../assets/scores-inactive.png" alt="">
    </router-link>
    <router-link to="">
    <img src="../assets/rules-inactive.png" class="text-white" alt="">
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  img {
    height: 3rem;
    width: 3rem;
  }
</style>