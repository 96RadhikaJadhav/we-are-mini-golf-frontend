<template>
  <component
    :is="type"
    class="font-capriola text-white text-center focus:outline-none mx-auto block"
    :class="mode"
    @click="$emit('clicked')"
    :to="to"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  props: {
    mode: {
      type: String
    },
    to: {
      type: [String, Object]
    }
  },
  computed: {
    type() {
      if (this.to) {
        return 'router-link';
      } else {
        return 'button';
      }
    }
  }
};
</script>

<style scoped>
.confirm {
  @apply py-2 px-8 uppercase rounded-full shadow-lg bg-ff6350 text-base;
}

.back {
  @apply p-1;
}
</style>
