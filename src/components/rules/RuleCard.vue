<template>
  <button
    class="flex flex-col justify-center w-full rounded-xl uppercase flex-wrap leading-snug font-capriola focus:outline-none relative "
    :class="mode"
    @click="$emit('clicked', ruleData.cmp)"
  >
    <div class="absolute" v-if="mode === 'ruleCard'">
      <p class="pl-3 pr-4">{{ ruleData.title }}</p>
    </div>
    <div class="absolute" v-else>
      <img src="@/assets/x_icon.png" class="w-8 mx-auto py-1" />
      <p>{{ ruleData.title }}</p>
    </div>
    <img
      v-if="ruleData.bg"
      :src="require(`@/assets/rules/${ruleData.bg}`)"
      class="rounded-lg"
    />
  </button>
</template>

<script>
export default {
  props: ['ruleData', 'mode']
};
</script>

<style>
.ruleCard {
  @apply text-white shadow-md text-left;
}
.closeBtn {
  color: #ff7d4f;
  align-items: center;
}
</style>
