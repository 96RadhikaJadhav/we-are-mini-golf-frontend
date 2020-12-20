<template>
  <div class="md:w-1/3 md:mx-auto">
    <div class="grid grid-cols-3 gap-0" v-if="courseGrid">
      <div v-for="square in courseGrid.squareInfo" :key="square.id">
        <img
          :src="square.inactive.url"
          class="w-full h-full object-fill"
          v-if="!square.isHoleActive"
          :alt="square.id"
        />
        <img
          :src="square.active.url"
          class="w-full h-full object-fill"
          v-else
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'GameCourse',
  data() {
    return {
      courseGrid: {}
    };
  },
  created() {
    axios
      .get(`${process.env.VUE_APP_API_URL}/courses/1`)
      .then(response => {
        this.courseGrid = response.data;
        this.courseGrid.squareInfo = this.courseGrid.squareInfo.reverse();
      })
      .catch(e => console.log(e));
  },
  methods: {
    // gotoNewHole(value, key, index) {
    //   let updates = value;
    //   updates[`${key}/${key}/${index}/isHoleVisited`] = true;
    //   courseGridRef
    //     .update(updates)
    //     .then(
    //       this.$router.push({
    //         name: 'NewHole',
    //         params: { holeNo: value.holeNo }
    //       })
    //     )
    //     .catch(e => {
    //       console.log(e);
    //     });
    // },
    editHoleDetails(value) {
      this.$router.push({
        name: 'NewHole',
        params: { holeNo: value.holeNo, editscore: true }
      });
    }
  }
};
</script>
