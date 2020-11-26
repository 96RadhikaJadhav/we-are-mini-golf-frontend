<template>
  <button
    class="flex flex-col justify-center pl-3 pr-6 h-24 w-full rounded-lg text-white uppercase flex-wrap py-4 text-lg text-left leading-snug font-capriola shadow-md bg-pink-900"
    @click="$emit('clicked')"
  >
    <p>{{ rule.title }}</p>
  </button>
</template>

<script>
export default {
  props: ['rule']
};
</script>

<style></style>
