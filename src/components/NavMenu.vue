<template>
  <div
    class="flex justify-around items-center h-16 w-full p-2 bg-f5e3c8 bottom-0 left-0"
    :class="position"
  >
    <router-link to="game-course">
      <img src="../assets/map-active.png" class="p-2" />
    </router-link>

    <router-link to="game-scores">
      <img src="../assets/scores-inactive.png" class="p-2" />
    </router-link>

    <router-link to="">
      <img src="../assets/rules-inactive.png" class="p-2" />
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['position']
};
</script>

<style scoped>
img {
  height: 3rem;
  width: 3rem;
}
</style>
