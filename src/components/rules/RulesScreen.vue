<template>
  <div class="relative h-screen w-full flex justify-center">
    <rule
      v-if="displayRule"
      @close="displayRule = false"
      :rule="selectedRule"
    ></rule>

    <!-- Card -->
    <div
      class="absolute bottom-0 bg-fff6eb w-full rounded-t-3xl shadow-lg flex flex-col items-center px-6 pt-6 pb-10 max-w-sm"
    >
      <button @click="rulesActive">close</button>
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
          v-for="(ruleData, index) in RulesData"
          :key="index"
          :ruleData="ruleData"
          @clicked="findRule"
        ></rule-card>
      </div>
    </div>
  </div>
</template>

<script>
import RuleCard from './RuleCard';
import RulesData from '@/rules.js';
import Rule from './Rule';

export default {
  components: {
    RuleCard,
    Rule
  },
  data() {
    return {
      name: 'RulesScreen',
      componentId: '',
      RulesData,
      selectedRule: '',
      displayRule: false
    };
  },
  inject: ['rulesActive'],
  methods: {
    findRule(cmp) {
      this.selectedRule = this.RulesData.find(item => item.cmp === cmp);
      this.displayRule = true;
    }
  }
};
</script>

<style></style>
