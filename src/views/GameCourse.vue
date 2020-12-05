<template>
  <div class="md:w-1/3 md:mx-auto">
    <div v-for="(row, i) in courseGrid" :key="i" class="grid grid-cols-3 gap-0">
      <div v-for="(col, index) in row[i]" :key="index">
        <img
          :src="col.inActiveImg"
          class="w-full h-full object-fill"
          :class="{ 'cursor-pointer': col.activeImg }"
          v-if="!col.isHoleVisited"
          @click="gotoNewHole(col, row['.key'], index)"
        />
        <img :src="col.activeImg" class="w-full h-full object-fill" v-else />
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
  computed: {},
  methods: {
    gotoNewHole(value, key, index) {
      let updates = value;
      updates[`${key}/${key}/${index}/isHoleVisited`] = true;
      courseGridRef
        .update(updates)
        .then(
          this.$router.push({
            name: 'NewHole',
            params: { holeNo: value.holeNo }
          })
        )
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>
