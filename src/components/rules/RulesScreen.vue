<template>
  <div class="relative w-full flex justify-center">
    <rule
      v-if="displayRule"
      @close="displayRule = false"
      :rule="selectedRule"
    ></rule>

    <!-- Card -->
    <BaseBottomSheet>
      <!-- Line -->
      <div class="h-1 w-16 rounded-lg bg-aeb49a mb-7"></div>
      <!-- Text -->

      <template #heading>
        <div class=" text-aeb49a uppercase font-capriola text-center">
          <p class="text-2xl">mini golf rules</p>
          <p class="font-kalam mt-2">aka the peace keeper</p>
        </div>
      </template>

      <template #content>
        <!-- Rules Card Table -->
        <div class="grid grid-cols-2 gap-3 w-full pb-4">
          <rule-card
            v-for="(ruleData, index) in RulesData"
            :key="index"
            :ruleData="ruleData"
            @clicked="findRule"
            mode="ruleCard"
          ></rule-card>
        </div>
      </template>
    </BaseBottomSheet>
  </div>
</template>

<script>
import RuleCard from './RuleCard';
import RulesData from '@/rules.js';
import Rule from './Rule';
import BaseBottomSheet from '../BaseBottomSheet';

export default {
  components: {
    RuleCard,
    Rule,
    BaseBottomSheet
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
  methods: {
    findRule(cmp) {
      this.selectedRule = this.RulesData.find(item => item.cmp === cmp);
      this.displayRule = true;
    }
  }
};
</script>
