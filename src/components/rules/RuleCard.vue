<template>
  <button
    class="flex flex-col justify-center h-24 w-full text-white rounded-xl uppercase flex-wrap text-lg text-left leading-snug font-capriola shadow-md focus:outline-none relative"
    @click="$emit('clicked', ruleData.cmp)"
  >
    <p class="absolute pl-3">{{ ruleData.title }}</p>
    <img
      :src="require(`@/assets/rules/${ruleData.bg}`)"
      class="w-full h-full rounded-lg"
    />
  </button>
</template>

<script>
export default {
  props: ['ruleData']
};
</script>

<style></style>
