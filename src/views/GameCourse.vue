<template>
  <div class="md:w-1/3 md:mx-auto">
    <div class="grid grid-cols-3 gap-0" v-if="courseGrid">
      <div v-for="(square, index) in courseGrid.squareInfo" :key="square.id">
        <img
          :src="square.inactive.url"
          class="w-full h-full object-fill"
          v-if="!square.isHoleActive"
          :alt="square.id"
          @click="gotoNewHole(square.holeNo, index)"
        />
        <img
          :src="square.active.url"
          class="w-full h-full object-fill"
          v-else
          @click="editHoleDetails(square.holeNo)"
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
      })
      .catch(e => console.log(e));
  },
  methods: {
    gotoNewHole(holeNo, index) {
      this.courseGrid.squareInfo[
        index
      ].isHoleActive = this.courseGrid.squareInfo[index].isHoleActive = true;
      axios
        .put(`${process.env.VUE_APP_API_URL}/courses/1`, this.courseGrid)
        .then(response => {
          this.courseGrid = response.data;
          this.$router.push({
            name: 'NewHole',
            params: { holeNo: holeNo }
          });
        })
        .catch(e => console.log(e));
    },
    editHoleDetails(holeNo) {
      this.$router.push({
        name: 'NewHole',
        params: { holeNo: holeNo, editscore: true }
      });
    }
  }
};
</script>
