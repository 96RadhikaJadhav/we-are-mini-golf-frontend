<template>
  <div
    to="/game-scores"
    class="flex flex-col justify-around items-center bg-no-repeat bg-cover"
    :class="holeBg"
  >
    <p class="text-white font-kalam text-3xl mt-10 ml-8 ">{{ holeNo !==14 ? holeNo : '' }}</p>
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
      name: 'NewHoleIntro',
      hole: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.$router.push({
        name: 'GameScores',
        params: { holeNo: this.holeNo }
      });
    }, 2000);
  },
  computed: {
    holeBg: function() {
      if (this.holeNo !== 14) {
        return 'bg-newHole';
      } else {
        return 'bg-lastHole';
      }
    }
  }
};
</script>

<style></style>
