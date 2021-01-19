<template>
  <div
    class="bg-wait bg-center bg-cover bg-no-repeat bg-red-500 grid grid-rows-2 px-16 h-screen"
  >
    <div class="h-full"></div>
    <div class="h-full text-center text-005d63">
      <p class="uppercase  font-kalam text-3xl">
        Hold On!
      </p>
      <div v-if="playersInfo" class="font-capriola mt-4">
        <p>
          It seems you haven't played holes No
          <span class="text-ff6350"> {{ unfinishedHoles }}</span>
        </p>
        <p class="mt-2">What do you want to do about it?</p>
      </div>
      <div class="w-56 mx-auto mt-10">
        <BaseButton
          :to="{ name: 'GameCourse' }"
          mode="btn primary-blue"
          class="mb-4"
          >Tackle it now</BaseButton
        >
        <BaseButton :to="{ name: 'Awards' }" mode="btn secondary-blue"
          >Finish anyway</BaseButton
        >
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/utilities/BaseButton';
import { mapActions, mapGetters } from 'vuex';
export default {
  data() {
    return {
      name: 'LastHoleWarning',
      playersInfo: []
    };
  },
  components: { BaseButton },
  created() {
    this.getGameDetails()
      .then(() => {
        this.playersInfo = this.getGameInfo.playersInfo;
      })
      .catch(e => console.log(e));
  },
  methods: {
    ...mapActions('gameInfo', ['getGameDetails'])
  },
  computed: {
    ...mapGetters('gameInfo', ['getGameInfo']),
    unfinishedHoles() {
      let unfinishedHole = [];
      this.playersInfo[0].holeScore.forEach((el, index) => {
        if (el === 0) {
          unfinishedHole.push(index + 1);
        }
      });
      return unfinishedHole.join(', ');
    }
  }
};
</script>

<style scoped></style>
