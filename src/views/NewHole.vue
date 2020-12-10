<template>
  <div
    class="md:w-1/2 bg-no-repeat bg-cover bg-center grid grid-rows-2 justify-items-center 
    place-items-center relative"
    :class="[holeBg]"
  >
    <p class="font-kalam holeno text-white">
      {{ holeNo }}
    </p>
    <p class="font-kalam text-005d63 par">Par 4</p>
  </div>
</template>

<script>
export default {
  name: 'NewHole',
  props: {
    holeNo: {
      type: Number,
      required: true
    },
    editscore: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      name: 'NewHoleIntro',
      hole: false
    };
  },
  computed: {
    holeBg() {
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
        params: { holeNo: this.holeNo, editscore: this.editscore }
      });
    }, 2000);
  }
};
</script>

<style scoped>
.holeno {
  position: absolute;
  top: 28%;
  left: 52.5%;
  font-size: 2em;
}

.par {
  position: absolute;
  bottom: 22%;
  left: 40%;
  font-size: 2em;
}
</style>
