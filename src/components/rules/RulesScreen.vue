<template>
  <div class="relative w-full flex justify-center">
    <rule
      v-if="displayRule"
      @close="displayRule = false"
      :rule="selectedRule"
    ></rule>

    <!-- Card -->
    <div
      class="absolute bottom-0 bg-fff6eb w-full rounded-t-3xl shadow-lg flex flex-col items-center px-6 pt-6 pb-10 max-w-sm"
    >
      <!-- Line -->
      <div class="h-1 w-16 rounded-lg bg-aeb49a mb-7"></div>
      <!-- Text -->
      <div class=" text-aeb49a uppercase font-capriola mb-10 text-center">
        <p class="text-2xl">mini golf rules</p>
        <p class="font-kalam mt-2">aka the peace keeper</p>
      </div>

      <!-- Rules Card Table -->
      <div class="grid grid-cols-2 gap-3 w-full">
        <rule-card
          v-for="(ruleData, index) in RulesData"
          :key="index"
          :ruleData="ruleData"
          @clicked="findRule"
          mode="ruleCard"
        ></rule-card>

        <rule-card
          :ruleData="closeRulesCard"
          @click.native="$emit('close')"
          mode="closeBtn"
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
      displayRule: false,
      closeRulesCard: {
        title: 'Close Rules'
      }
    };
  },
  methods: {
    findRule(cmp) {
      this.selectedRule = this.RulesData.find(item => item.cmp === cmp);
      this.displayRule = true;
    }
  }
};
</script>
