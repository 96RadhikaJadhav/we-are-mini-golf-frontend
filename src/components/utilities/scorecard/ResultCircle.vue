<template>
  <div class="flex flex-col items-center my-4 font-kalam">
    <p class="uppercase text-xs font-capriola green">
      <slot name="title"></slot>
    </p>

    <p :class="`circle ${type}`">
      <slot name="result"></slot>
    </p>
  </div>
</template>

<script>
export default {
  props: ['type']
};
</script>

<style scoped>
.circle {
  @apply rounded-full flex items-center justify-center;
}
.primary {
  background: #3b9d11;
  @apply h-16 w-16 rounded-full  text-f5e3c8 text-2xl;
}
.secondary {
  background: #f5e3c8;
  color: #3b9d11;
  @apply h-14 w-14;
}
.green {
  color: #3b9d11;
}
</style>
