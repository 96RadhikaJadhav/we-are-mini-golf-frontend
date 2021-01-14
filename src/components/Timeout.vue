<template>
  <div class="z-50">
    <ModalLayout @close="next('close')">
      <h1 class="uppercase text-aeb49a text-xl text-center font-kalam px-5">
        <slot></slot>
      </h1>

      <div class="w-4/5 mx-auto">
        <div @click="next('close')">
          <BaseButton mode="btn resume" to="" class="m-5 w-full">
            Resume Game
          </BaseButton>
        </div>

        <div @click="next('restart')">
          <BaseButton
            type="router"
            :to="{ name: 'Splash' }"
            mode="btn restart"
            class="m-5 w-full"
          >
            Start a new game
          </BaseButton>
        </div>
      </div>

      <div @click="next('review')">
        <BaseButton
          type="router"
          :to="{ name: 'FinalRanking', params: { componentId: 'ReviewModal' } }"
          class="text-005d63 text-center font-capriola mb-12 pt-2"
        >
          Review us
        </BaseButton>
      </div>
    </ModalLayout>
  </div>
</template>

<script>
import ModalLayout from '@/layouts/ModalLayout.vue';
import BaseButton from '@/components/utilities/BaseButton.vue';
export default {
  name: 'Timeout',
  components: { ModalLayout, BaseButton },
  methods: {
    next(payload) {
      if (payload === 'close' || payload === 'review') {
        this.$emit('clear');
      }

      if (payload === 'restart') {
        this.$emit('clear');
        if (localStorage.getItem('game-details')) {
          localStorage.removeItem('game-details');
        }
        if (localStorage.getItem('loglevel:webpack-dev-server')) {
          localStorage.removeItem('loglevel:webpack-dev-server');
        }
        if (localStorage.getItem('course-grid')) {
          localStorage.removeItem('course-grid');
        }
        this.$router.go({ name: 'Splash' });
      }
    }
  }
};
</script>

<style></style>
