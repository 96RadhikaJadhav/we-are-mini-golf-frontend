<template>
  <rules-layout @close="$emit('close')">
    <template v-slot:title>
      Score Count
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
