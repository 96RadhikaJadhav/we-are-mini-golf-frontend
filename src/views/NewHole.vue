<template>
  <div
    to="/game-scores"
    class="flex flex-col justify-around items-center bg-newHole bg-no-repeat bg-cover"
  >
    <p class="text-white font-kalam text-3xl mt-10 ml-8 ">{{ getHoleNo }}</p>
    <p class="-mt-20 text-005d63 font-kalam text-3xl">Par 4</p>
  </div>
</template>

<script>
export default {
  name: 'NewHole',
  data() {
    return {
      name: 'NewHoleIntro'
    };
  },
  computed: {
    getHoleNo() {
      return parseInt(this.$route.params.holeNo);
    }
  },
  mounted() {
    setTimeout(() => {
      this.$router.push({
        name: 'GameScores',
        params: { holeNo: this.getHoleNo }
      });
    }, 1000);
  }
};
</script>

<style></style>
