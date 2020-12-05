<template>
  <div
    class="flex flex-col justify-around items-center bg-newHole bg-no-repeat bg-cover"
  >
    <p class="text-white font-kalam text-3xl"></p>
    <p class="text-005d63 font-kalam text-3xl">Par 4</p>
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
