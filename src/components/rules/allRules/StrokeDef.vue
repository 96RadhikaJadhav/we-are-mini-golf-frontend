<template>
  <rules-layout @close="$emit('close')">
    <template v-slot:title>
      Stroke Definition
    </template>
  </rules-layout>
</template>

<script>
import RulesLayout from '@/layouts/RulesLayout.vue';
export default {
  components: { RulesLayout }
};
</script>

<style></style>
