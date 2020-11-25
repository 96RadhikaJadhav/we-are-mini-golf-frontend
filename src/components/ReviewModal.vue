<template>
  <div
    class="absolute w-full h-full flex flex-col items-center justify-center px-6 bg-005d63"
  >
    <!-- Main Card -->
    <div class="relative card cream w-full">
      <div class="flex justify-end">
        <button
          class="text-aeb49a focus:outline-none cursor-pointer"
          @click="$emit('clicked')"
        >
          X
        </button>
      </div>

      <div class="flex flex-col items-center text-005d63 text-lg font-capriola">
        <p class="mb-2">Did you enjoy it?<span class="text-ff8e67">*</span></p>
        <p class="mb-8 text-3xl text-aeb49a">☆ ☆ ☆ ☆ ☆</p>

        <p class="p-2">Tell me everything!<span class="text-ff8e67">*</span></p>
        <textarea
          rows="7"
          minlength="10"
          class="card focus:outline-none w-full mb-12"
          v-model="reviewerMessage"
        ></textarea>

        <p class="mb-2">
          What's your pretty name<span class="text-ff8e67">*</span>
        </p>
        <input
          type="text"
          class="card w-3/4 focus:outline-none text-center mb-8"
          v-model="reviewerName"
        />

        <base-button
          @clicked="$emit('submit', reviewerName, reviewerMessage)"
          type="button"
          class="confirm absolute -bottom-5"
          >Tell the world</base-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/utilities/BaseButton';
export default {
  components: { BaseButton },
  data() {
    return {
      reviewerName: '',
      reviewerMessage: ''
    };
  }
};
</script>

<style>
.cream {
  background: #fff6eb;
}
</style>
