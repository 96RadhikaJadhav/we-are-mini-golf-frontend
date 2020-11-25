<template>
  <div class="font-kalam text-3B9D11">
      <slot name="title">
        <p class="uppercase text-sm">Team Average</p>
      </slot>

      <slot name="result">
        <div class="circle"
        :class="type">
          <p>50%</p>
        </div>
      </slot>
    
  </div>
</template>

<script>
export default {
  props: ['type']
}
</script>

<style scoped>
  .circle {
    @apply rounded-full;
  }
  .primary {
    @apply h-14 w-14 bg-black;
  }
  .secondary {
    @apply h-10 w-10;
  }
</style>