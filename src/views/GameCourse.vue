<template>
  <div class="container relative">
    <img
      src="../assets/background-course@2x.png"
      class="w-full absolute top-0 left-0"
    />
    <nav-menu position="sticky"></nav-menu>
    <img
      src="../assets/path.png"
      class="absolute top-0 left-0 mt-32 w-full h-full"
    />
    <img
      src="../assets/finish-line.png"
      class="mx-auto absolute top-0 centered"
    />

    <div class="flex flex-wrap p-2">
      <router-link
        v-for="hole in holes"
        :key="hole"
        :to="String(hole)"
        class="flex w-1/3 items-center justify-center h-routerCourse hover:bg-ff6350"
      >
        <div
          :class="
            hole != null
              ? 'h-6 w-6 rounded-full flex items-center justify-center bg-005D63 text'
              : ''
          "
        >
          <p class="text-white text-sm text-kalam">{{ hole }}</p>
        </div>
      </router-link>
    </div>

    <!-- NAVBAR -->
    <nav-menu class="sticky bottom-0 w-full overflow-visible"></nav-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'GameCourse',
      holes: [
        null,
        30,
        null,
        null,
        29,
        null,
        28,
        27,
        26,
        22,
        23,
        25,
        21,
        20,
        24,
        16,
        17,
        19,
        15,
        14,
        18,
        13,
        11,
        10,
        12,
        8,
        9,
        7,
        4,
        3,
        6,
        5,
        2,
        null,
        1
      ]
    };
  }
};
</script>

<style scoped>
.centered {
  left: 50%;
  left: -50%;
  right: 50%;
  right: -50%;
}
</style>
