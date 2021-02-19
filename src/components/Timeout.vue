<template>
  <div class="z-50 absolute top-0 left-0 right-0 bottom-0">
    <ModalLayout @close="next('close')" :closingButton="false">
      <div class="py-6">
        <h1 class="uppercase text-aeb49a text-xl text-center font-kalam px-5">
          Looks like you've been away for a while...
        </h1>

        <div class="w-4/5 mx-auto">
          <div @click="next('close')">
            <BaseButton mode="btn primary-blue" to="" class="mt-5 mb-4 w-full">
              Resume Game
            </BaseButton>
          </div>

          <div @click="next('restart')">
            <BaseButton
              type="router"
              :to="{ name: 'Splash' }"
              mode="btn secondary-blue"
              class="mb-5 w-full"
            >
              Start a new game
            </BaseButton>
          </div>
        </div>

        <div @click="next('review')">
          <BaseButton
            type="router"
            :to="{
              name: 'FinalRanking',
              params: { componentId: 'ReviewModal' }
            }"
            class="text-005d63 text-center font-capriola mb-3"
          >
            Review us
          </BaseButton>
        </div>
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
