<template>
  <transition name="slide">
    <div
      class="absolute bottom-0 h-auto w-full rounded-t-3xl shadow-md text-white font-kalam p-6 bg-3B9D11 z-10 max-w-sm"
    >
      <div class="flex items-center justify-end mb-2">
        <button @click="$emit('close')" class="focus:outline-none">X</button>
      </div>

      <div class=" flex flex-col px-4">
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
