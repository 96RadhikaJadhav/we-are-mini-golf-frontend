<template>
  <button
    class="flex flex-col justify-center pl-3 pr-6 h-24 w-full rounded-lg text-white uppercase flex-wrap py-4 text-lg text-left leading-snug font-capriola shadow-md bg-pink-500 focus:outline-none"
    @click="$emit('clicked', ruleData.cmp)"
  >
    <p>{{ ruleData.title }}</p>
  </button>
</template>

<script>
export default {
  props: ['ruleData']
};
</script>

<style></style>
