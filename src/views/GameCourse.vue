<template>
  <div class="md:w-1/3 md:mx-auto">
    <div class="grid grid-cols-3 gap-0" v-if="courseGrid">
      <div v-for="square in courseGrid.squareInfo" :key="square.id">
        <img
          v-if="(square.active && !square.isHoleActive) || square.isLastHole"
          :src="square.inactive.url"
          class="w-full h-full object-fill"
          :alt="square.id"
          @click="gotoHole(square.holeNo, 'new')"
        />
        <img
          v-else-if="square.isHoleActive"
          :src="square.active.url"
          class="w-full h-full object-fill"
          @click="gotoHole(square.holeNo, 'edit')"
        />
        <img
          v-else
          :src="square.inactive.url"
          class="w-full h-full object-fill"
          :alt="square.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'GameCourse',
  data() {
    return {
      courseGrid: {},
      playersInfo: []
    };
  },
  created() {
    if (!localStorage.getItem('course-grid')) {
      let slug = JSON.parse(localStorage.getItem('game-details')).slug;
      axios
        .get(`${process.env.VUE_APP_API_URL}/courses?slug=${slug}`)
        .then(response => {
          this.courseGrid = response.data[0];
          localStorage.setItem('course-grid', JSON.stringify(this.courseGrid));
          this.updatePar();
          setTimeout(() => {
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: 'smooth'
            });
          }, 1000);
          // this.createPlayerScores();
        })
        .catch(e => console.log(e));
    } else {
      this.courseGrid = JSON.parse(localStorage.getItem('course-grid'));
      this.updatePar();
    }
  },
  mounted() {
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }, 500);
  },
  methods: {
    ...mapActions('gameInfo', ['updatePar', 'getGameDetails']),

    gotoHole(holeNo, mode) {
      if (holeNo !== this.getPar.length) {
        this.$router.push({
          name: 'NewHole',
          params: { holeNo: holeNo, mode: mode }
        });
      } else {
        this.getGameDetails()
          .then(response => {
            this.playersInfo = response.playersInfo;
            if (this.playersInfo) {
              let unfinishedHoles = [];
              this.playersInfo[0].holeScore.forEach((el, index) => {
                if (el === 0) {
                  unfinishedHoles.push(index + 1);
                }
              });
              if (unfinishedHoles.length > 1) {
                this.$router.push({
                  name: 'LastHoleWarning',
                  params: {
                    holeNo: holeNo,
                    mode: mode,
                    unfinishedHoles: unfinishedHoles
                  }
                });
              } else {
                this.$router.push({
                  name: 'NewHole',
                  params: { holeNo: holeNo, mode: mode }
                });
              }
            }
          })
          .catch(e => console.log(e));
      }
    },

    createPlayerScores() {
      let courseHoles = [];
      let holes = this.courseGrid.numberOfHoles;
      let players = this.getGameInfo.playersInfo;
      for (let i = 0; i < holes; i++) {
        courseHoles.push(0);
      }
      players.forEach(el => {
        el.holeScore = courseHoles;
      });
    }
  },
  computed: {
    ...mapGetters('gameInfo', ['getGameInfo', 'getPar'])
  },
  beforeRouteLeave(to, from, next) {
    localStorage.setItem('current-hole', to.params.holeNo);
    next();
  }
};
</script>
