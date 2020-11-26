<template>
  <modal-layout @close="$emit('close')" :invalid="invalid">
    <div class="flex flex-col items-center text-005d63 text-lg font-capriola">
      <p class="mb-2">Did you enjoy it?<span class="text-ff8e67">*</span></p>

      <!-- Stars for development -->
      <div class="flex items-center">
        <button class="mb-8 text-3xl" @click="reviewerRating = 1">☆</button>
        <p class="mb-8 text-3xl text-aeb49a">☆ ☆ ☆</p>
        <button class="mb-8 text-3xl" @click="reviewerRating = 5">☆</button>
      </div>

      <p class="p-2">Tell me everything!<span class="text-ff8e67">*</span></p>
      <textarea
        rows="7"
        minlength="10"
        class="card focus:outline-none w-full mb-12 border-transparent border-2"
        :class="{ warning: invalid }"
        v-model="reviewerMessage"
      ></textarea>

      <p class="mb-2">
        What's your pretty name<span class="text-ff8e67">*</span>
      </p>
      <input
        type="text"
        class="card w-3/4 focus:outline-none text-center mb-8 border-transparent border-2"
        :class="{ warning: invalid }"
        v-model="reviewerName"
      />

      <base-button
        @clicked="submitReview"
        type="button"
        class="confirm absolute -bottom-5"
        >Tell the world</base-button
      >
    </div>
  </modal-layout>
</template>

<script>
import ModalLayout from '@/layouts/ModalLayout.vue';
import BaseButton from '@/components/utilities/BaseButton';
export default {
  components: { BaseButton, ModalLayout },
  data() {
    return {
      name: 'ReviewModal',
      reviewerName: '',
      reviewerMessage: '',
      reviewerRating: '',
      invalid: false
    };
  },
  methods: {
    submitReview() {
      const name = this.reviewerName,
        msg = this.reviewerMessage,
        rate = this.reviewerRating;

      if (name === '' || msg.length < 10 || rate == null) {
        this.invalid = true;
        return;
      } else {
        this.invalid = false;
        this.$emit('submit', name, msg, rate);
      }
    }
  }
};
</script>

<style scoped>
.warning {
  @apply border-ea9864 border-2;
}
</style>
