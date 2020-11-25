<template>
  <div
    class="w-full h-full flex flex-col justify-center items-center bg-005d63 px-4"
  >
    <!-- CARD -->
    <div class="bg-fff6eb py-6 px-8 rounded-3xl shadow-md">
      <!-- X -->
      <div class="flex justify-end">
        <p class="cursor-pointer" @click="$emit('clicked')">X</p>
      </div>

      <!-- Thank You Texts -->
      <div class="flex flex-col items-center justify-center text-2xl text-center leading-relaxed font-capriola">
        <p class="uppercase py-6 text-aeb49a font-capriola">
          thank you for your feedback!
        </p>
        <p class="lead">
          The teams of
        </p>
        <router-link to="">Siem Reap Mini Golf</router-link>
        <p class="lead">&</p>
        <router-link to="">weareminigolf.com</router-link>
        <p class="lead">wish you a great day!</p>
      </div>
    </div>
    <img src="@/assets/logo.png" alt="logo" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
a {
  @apply text-ff8e67;
}
.lead {
  @apply font-kalam text-005d63;
}
</style>
