<template>
  <div class="md:w-1/3 md:mx-auto">
    <div
      v-for="(row, i) in courseGrid"
      :key="i"
      class="grid auto-row-fr grid-cols-3 gap-0"
    >
      <div v-for="(col, index) in row[i]" :key="index">
        <img
          :src="col.notPlayedHoleImg"
          class="w-full h-full object-fill"
          v-if="!col.isHoleVisited"
        />
        <img
          :src="col.playedHoleImg"
          class="w-full h-full object-fill"
          v-else
        />
      </div>
    </div>
  </div>
</template>

<script>
import { courseGrid } from '../assets/courses/14-hole-course.json';
export default {
  name: 'GameCourse',
  data() {
    return {
      courseGrid: []
    };
  },
  mounted() {
    this.courseGrid = courseGrid;
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
