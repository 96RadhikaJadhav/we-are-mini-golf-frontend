<template>
  <div class="relative h-screen">
    <component :is="componentId" @close="componentId = ''"> </component>

    <!-- Card -->
    <div
      class="absolute bottom-0 bg-fff6eb w-full rounded-t-3xl shadow-lg flex flex-col items-center px-6 pt-6 pb-10 max-w-sm mx-auto"
    >
      <!-- Line -->
      <div class="h-1 w-16 rounded-lg bg-aeb49a mb-10"></div>
      <!-- Text -->
      <div class=" text-aeb49a uppercase font-capriola mb-10 text-center">
        <p>the</p>
        <p class="text-3xl">mini golf rules</p>
        <p class="font-kalam mt-2">aka the peace keeper</p>
      </div>

      <!-- Rules Card Table -->
      <div class="grid grid-cols-2 gap-3 w-full">
        <rule-card
          v-for="(rule, index) in Rules"
          :key="index"
          :rule="rule"
          @clicked="componentId = rule.cmp"
        ></rule-card>
      </div>
    </div>
  </div>
</template>

<script>
import RuleCard from './RuleCard';
import RulesLayout from '@/layouts/RulesLayout';
import Rules from '@/rules.js';
import HowToPlay from './allRules/HowToPlay';
import ScoreCount from './allRules/ScoreCount';
import StrokeDef from './allRules/StrokeDef';
import First from './allRules/First';

export default {
  components: {
    RuleCard,
    RulesLayout,
    HowToPlay,
    ScoreCount,
    StrokeDef,
    First
  },
  data() {
    return {
      name: 'RulesScreen',
      componentId: '',
      Rules
    };
  }
};
</script>

<style></style>
