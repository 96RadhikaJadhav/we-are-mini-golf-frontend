<template>
  <div id="app" class="antialiased h-screen">
    <div v-if="rules">
      <rules></rules>
    </div>
    <transition name="fade" mode="out-in">
      <component :is="this.$route.meta.layout || 'div'">
        <router-view />
      </component>
    </transition>
  </div>
</template>

<script>
import rules from '@/components/rules/RulesScreen.vue';
export default {
  data() {
    return {
      rules: false
    };
  },
  provide() {
    return {
      rulesActive: this.showRules
    };
  },
  methods: {
    showRules() {
      return (this.rules = !this.rules);
    }
  },
  components: { rules }
};
</script>

<style>
html,
body {
  height: 100vh;
  width: 100%;
  /* background-image: url('./assets/background-home.png') no-repeat ; */
  font-family: capriola;
}
</style>
