<template>
  <ModalLayout :closingButton="true" @close="$emit('close')" :invalid="invalid">
    <div class="flex flex-col items-center text-005d63 text-lg font-capriola">
      <p class="mb-2">Did you enjoy it?<span class="text-ff8e67">*</span></p>

      <!-- Stars for development -->
      <div class="flex items-center">
        <star-rating
          v-model="reviewerRating"
          :show-rating="false"
          :star-size="40"
        />
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
        class="btn primary-orange absolute -bottom-5"
      >
        Tell the world
      </base-button>
    </div>
  </ModalLayout>
</template>

<script>
import ModalLayout from '@/layouts/ModalLayout.vue';
import BaseButton from '@/components/utilities/BaseButton';
import StarRating from 'vue-star-rating';
export default {
  components: { BaseButton, ModalLayout, StarRating },
  data() {
    return {
      name: 'ReviewModal',
      reviewerName: '',
      reviewerMessage: '',
      reviewerRating: 0,
      invalid: false
    };
  },
  created() {
    this.$gtm.trackEvent({
      event: 'gaEvent',
      eventName: "review_open",
    });
  },
  methods: {
    submitReview() {
      if (
        this.reviewerName === '' ||
        this.reviewerMessage.length < 10 ||
        this.reviewerRating === null
      ) {
        this.invalid = true;
        return;
      } else {
        this.invalid = false;
        this.$gtm.trackEvent({
          event: 'gaEvent',
          eventName: "review_submit",
          rating: this.reviewerRating
        });
        this.$emit(
          'submit',
          this.reviewerName,
          this.reviewerMessage,
          this.reviewerRating
        );
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
