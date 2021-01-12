<template>
  <div class="md:w-1/3 md:mx-auto">
    <div class="grid grid-cols-3 gap-0" v-if="courseGrid">
      <div v-for="(square, index) in courseGrid.squareInfo" :key="square.id">
        <img
          v-if="!square.active"
          :src="square.inactive.url"
          class="w-full h-full object-fill"
          :alt="square.id"
        />
        <img
          v-else-if="!square.isHoleActive || square.holeNo === 14"
          :src="square.inactive.url"
          class="w-full h-full object-fill"
          :alt="square.id"
          @click="gotoNewHole(square.holeNo, index)"
        />
        <img
          v-else
          :src="square.active.url"
          class="w-full h-full object-fill"
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
    if (!localStorage.getItem('course-grid')) {
      axios
        .get(`${process.env.VUE_APP_API_URL}/courses/1`)
        .then(response => {
          this.courseGrid = response.data;
          localStorage.setItem('course-grid', JSON.stringify(this.courseGrid));
        })
        .catch(e => console.log(e));
    } else {
      this.courseGrid = JSON.parse(localStorage.getItem('course-grid'));
    }
  },
  mounted() {
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }, 500);
  },
  methods: {
    gotoNewHole(holeNo) {
      this.$router.push({
        name: 'NewHole',
        params: { holeNo: holeNo }
      });
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
