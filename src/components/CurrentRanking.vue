<template>
  <div class="flex my-2 font-kalam justify-between">
    <div class="flex">
      <!-- <p class="font-kalam text-ea9864 mr-4 text-2xl">{{ player.rank }}</p> -->
      <p class="text-2xl mr-4">{{ player.name }}</p>
    </div>
    <div
      class="flex items-center justify-center h-8 w-8 bg-005d63 rounded-full text-white"
    >
      <p class="mt-1">{{ player.totalScore }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['player']
};
</script>
