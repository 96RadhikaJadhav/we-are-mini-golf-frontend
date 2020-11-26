<template>
  <modal-layout @close="$emit('close')">
    <!-- Thank You Texts -->
    <div
      class="flex flex-col items-center justify-center text-2xl text-center leading-relaxed font-capriola"
    >
      <p class="uppercase mb-6 text-aeb49a font-capriola">
        thank you for <br />your feedback!
      </p>
      <p class="lead">
        The teams of
      </p>
      <router-link to="">Siem Reap Mini Golf</router-link>
      <p class="lead">&</p>
      <router-link to="">weareminigolf.com</router-link>
      <p class="lead mb-10">wish you a great day!</p>

      <img src="@/assets/logo.png" alt="logo" class="mb-20" />
    </div>
  </modal-layout>
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
  @apply font-kalam text-005d63;
}
</style>
