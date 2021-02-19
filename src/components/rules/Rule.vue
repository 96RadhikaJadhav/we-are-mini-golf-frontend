<template>
  <transition name="slide">
    <!-- Green background card -->
    <div
      class="w-full rounded-t-3xl shadow-md text-white font-kalam z-10 p-6 max-w-sm bg-rules bg-cover max-h-500"
    >
      <!-- Closing X -->
      <div class="text-xl flex items-center justify-end">
        <button @click="$emit('close')" class="focus:outline-none">
          &#10005;
        </button>
      </div>
      <!-- Rules text -->
      <div class="flex flex-col px-4 max-h-full overflow-scroll">
        <p class="title">{{ rule.title }}</p>
        <p
          v-for="(text, index) in rule.content"
          :key="index"
          :class="text.class"
        >
          {{ text.para }}
        </p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['rule']
};
</script>

<style scoped>
.title {
  @apply text-2xl self-start uppercase pb-6;
}
.body {
  @apply font-capriola text-sm pb-4;
}
.body-indent {
  @apply font-capriola text-sm pb-4 ml-4;
}
.quote {
  @apply self-end pb-4 text-right w-4/5;
}
</style>
