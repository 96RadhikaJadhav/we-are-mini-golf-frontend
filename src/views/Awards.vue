<template>
  <div
    class=" bg-awards bg-no-repeat bg-center flex flex-col items-center justify-between w-full h-1/2 bg-3ac792"
  >
    <!-- Top 1/2 Screen -->
    <div class="h-1/2">
      <div
        class="text-center mt-32 font-capriola flex flex-col justify-between"
      >
        <p class="text-005d63 text-2xl">THE AWARD OF</p>
        <p class="text-white uppercase w-20 mx-auto mt-10">
          Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>

    <!-- Bottom 1/2 Screen -->
    <div class="h-1/2 flex flex-col justify-between">
      <div>
        <p class="text-005d63 text-2xl font-capriola my-20">GOES TO...</p>
        <p class="text-white text-3xl font-kalam">{{ playerName }}</p>
      </div>
      <base-button
        to="/new-hole"
        mode="back"
        class="text-aeb49a font-capriola mb-4"
      >
        Skip animation
      </base-button>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/utilities/BaseButton';
export default {
  data() {
    return {
      name: 'Awards',
      playerName: 'Churchill'
    };
  },
  components: { BaseButton }
};
</script>

<style></style>
