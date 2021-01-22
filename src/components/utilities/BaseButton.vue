<template>
  <component
    :is="type"
    class="font-capriola text-white text-center focus:outline-none mx-auto block"
    :class="mode"
    @click="clicked"
    :to="to"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  inject: ['Timeout'],
  props: {
    mode: {
      type: String
    },
    to: {
      type: [String, Object]
    }
  },
  methods: {
    clicked() {
      this.Timeout();
      this.$emit('clicked');
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
  @apply py-2 px-8 uppercase rounded-full shadow-lg;
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
