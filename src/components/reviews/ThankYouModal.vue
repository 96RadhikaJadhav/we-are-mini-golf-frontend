<template>
  <ModalLayout :closingButton="true" @close="$emit('close')">
    <img
      src="https://res.cloudinary.com/doblhgoan/image/upload/v1610957518/we-are-mini-golf/09-Final-ranking-review-popup-thanks_mym1sb.png"
      class="w-56 absolute -right-10 -bottom-16"
    />
    <!-- Thank You Texts -->
    <div
      class="flex flex-col items-center justify-center text-2xl text-center leading-relaxed font-capriola pb-10"
    >
      <p class="uppercase mb-6 text-aeb49a font-capriola leading-tight">
        thank you for <br />your feedback!
      </p>
      <p class="lead">
        The teams of
      </p>
      <router-link to="">Siem Reap Mini Golf</router-link>
      <p class="lead">&</p>
      <router-link to="">weareminigolf.com</router-link>
      <p class="lead mb-4">wish you a great day!</p>
    </div>
  </ModalLayout>
</template>

<script>
import ModalLayout from '@/layouts/ModalLayout';
export default {
  components: { ModalLayout }
};
</script>

<style scoped>
a {
  @apply text-ff8e67;
}
.lead {
  @apply font-kalam text-005d63 font-light;
}
</style>
