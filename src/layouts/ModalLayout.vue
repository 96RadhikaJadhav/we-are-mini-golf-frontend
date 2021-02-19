<template>
  <div
    class="absolute w-full h-full flex flex-col items-center justify-center px-4 bg-005d63 bg-opacity-80"
  >
    <ErrorMessage v-if="invalid" />

    <!-- Main Card -->
    <div
      class="relative bg-fff6eb rounded-3xl shadow-md w-full max-w-sm p-6 z-10"
    >
      <!-- Closing Button -->
      <div v-if="closingButton" class="flex justify-end pb-6">
        <button
          class="text-aeb49a focus:outline-none cursor-pointer"
          @click="$emit('close')"
        >
          X
        </button>
      </div>

      <!-- Content -->
      <div>
        <slot></slot>
      </div>
    </div>
    <div
      class="bg-ea9864 text-white font-kalam rounded-3xl text-center text-xl leading-tight"
    >
      <slot name="message"> </slot>
    </div>
  </div>
</template>

<script>
import ErrorMessage from '@/components/reviews/ErrorMessage';
export default {
  components: { ErrorMessage },
  props: ['invalid', 'closingButton'],
  data() {
    return {
      name: 'ModalLayout'
    };
  }
};
</script>

<style></style>
