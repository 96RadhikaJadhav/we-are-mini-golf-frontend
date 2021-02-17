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
.btn {
  @apply flex items-center justify-center py-2 px-2 uppercase rounded-full shadow-sm h-11;
}
.primary-orange {
  @apply bg-ff6350;
}
.back {
  @apply p-1;
}
.primary-blue {
  @apply bg-005d63 px-1;
}
.secondary-blue {
  @apply border border-005d63 text-005d63 px-1;
}
.primary-beige {
  @apply bg-fff6eb text-005d63;
}
</style>
