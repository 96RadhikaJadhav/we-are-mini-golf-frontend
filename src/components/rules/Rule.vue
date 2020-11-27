<template>
  <div
    class="absolute bottom-0 grass h-auto w-full rounded-t-3xl shadow-md text-white font-kalam p-6 bg-green-600 z-10 max-w-sm"
  >
    <div class="flex items-center justify-end mb-2">
      <button @click="$emit('close')">X</button>
    </div>

    <div class=" flex flex-col px-4">
      <p class="title">{{ rule.title }}</p>
      <p class="body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae aperiam
        magni reprehenderit fuga quasi dolore vero saepe quod beatae illum.
      </p>
      <p class="quote">{{ rule.cmp }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['rule']
};
</script>

<style scoped>
.title {
  @apply text-3xl self-start uppercase pb-6;
}
.body {
  @apply font-capriola text-sm pb-4;
}
.quote {
  @apply self-end pb-4;
}
</style>
