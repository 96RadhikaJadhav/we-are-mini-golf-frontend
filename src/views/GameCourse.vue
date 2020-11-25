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
          :class="{ 'cursor-pointer': col.playedHoleImg }"
          v-if="!col.isHoleVisited"
          @click="gotoNewHole(col, row['.key'])"
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
import { db } from '@/db.js';
const courseGridRef = db.ref('course_grid');
export default {
  name: 'GameCourse',
  data() {
    return {
      courseGrid: []
    };
  },
  firebase: {
    courseGrid: courseGridRef
  },
  methods: {
    gotoNewHole(value, key) {
      console.log(key);
      this.$router.push({ name: 'NewHole', params: { holeNo: value.holeNo } });
    }
  }
};
</script>
