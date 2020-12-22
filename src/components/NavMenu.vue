<template>
  <div class="flex justify-around items-center h-16 w-full p-2 bg-f5e3c8">
    <router-link to="game-course">
      <img src="../assets/map-inactive.png" class="h-6 w-6" />
    </router-link>

    <router-link :to="{ name: 'CurrentTotal', params: { showTotal: true } }">
      <img src="../assets/scores-inactive.png" class="h-6 w-6" />
    </router-link>

    <router-link to="">
      <img src="../assets/rules-inactive.png" class="h-6 w-6" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NavMenu'
};
</script>
