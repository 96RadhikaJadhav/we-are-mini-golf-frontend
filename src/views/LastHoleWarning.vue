<template>
  <div
    class="bg-unfinishedHoles bg-center bg-cover bg-no-repeat bg-fff6eb grid grid-rows-3 px-4 h-screen"
  >
    <div />
    <div class="text-center mt-10 text-005d63 place-self-center max-w-sm">
      <p class="uppercase font-kalam text-2xl">
        Hold On!
      </p>
      <div v-if="playersInfo.length" class="font-capriola mt-4 text-base">
        <p>
          It seems you haven't played
          {{ unfinishedHoles.length > 2 ? 'holes' : 'hole' }} <br />
          <span class="text-ff6350"> {{ unfinishedHoles }}</span>
        </p>
        <p class="mt-2">What do you want to do about it?</p>
      </div>
    </div>
    <div class="w-56 mx-auto place-self-center">
      <BaseButton
        :to="{ name: 'GameCourse' }"
        mode="btn primary-blue"
        class="mb-3"
      >
        Tackle it now
      </BaseButton>
      <BaseButton
        :to="{
          name: 'NewHole',
          params: { holeNo: this.getPar.length, mode: 'new' }
        }"
        mode="btn secondary-blue"
      >
        Finish anyway
      </BaseButton>
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
      .then(response => {
        this.playersInfo = response.playersInfo;
      })
      .catch(e => console.log(e));
  },
  methods: {
    ...mapActions('gameInfo', ['getGameDetails'])
  },
  computed: {
    ...mapGetters('gameInfo', ['getPar']),
    unfinishedHoles() {
      let unfinishedHoles = [];
      this.playersInfo[0].holeScore.forEach((el, index) => {
        if (el === 0) {
          unfinishedHoles.push(index + 1);
        }
      });
      if (unfinishedHoles.length > 2) {
        unfinishedHoles.splice(-1, 1);
        unfinishedHoles.splice(-1, 0, 'and');
        return unfinishedHoles.join(' ');
      } else {
        unfinishedHoles.splice(-1, 1);
        unfinishedHoles.splice(-1, 0);
        return unfinishedHoles.join(' ');
      }
    }
  }
};
</script>

<style scoped></style>
