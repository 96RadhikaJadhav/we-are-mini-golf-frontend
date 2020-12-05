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
      name: 'NewHoleIntro',
      hole: false
    };
  },
  computed: {
    getHoleNo() {
      return parseInt(this.$route.params.holeNo);
    },
    holeBg: function() {
      if (this.holeNo !== 14) {
        return 'bg-newHole';
      } else {
        return 'bg-lastHole';
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.$router.push({
        name: 'GameScores',
        params: { holeNo: this.getHoleNo }
      });
    }, 2000);
  }
};
</script>

<style></style>
