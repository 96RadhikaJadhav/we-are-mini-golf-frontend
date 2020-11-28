<template>
  <div
    to="/game-scores"
    class="w-full h-full flex flex-col justify-around items-center bg-newHole bg-no-repeat bg-center"
  >
    <p class="text-white font-kalam text-3xl mt-10 ml-8 ">{{ holeNo }}</p>
    <p class="-mt-20 text-005d63 font-kalam text-3xl">Par 4</p>
  </div>
</template>

<script>
export default {
  name: 'NewHole',
  props: {
    holeNo: {
      type: Number
    }
  },
  data() {
    return {
      name: 'NewHoleIntro'
    };
  },
  mounted() {
    setTimeout(() => {
      this.$router.push({
        name: 'GameScores',
        params: { holeNo: this.holeNo }
      });
    }, 1000);
  }
};
</script>

<style></style>
