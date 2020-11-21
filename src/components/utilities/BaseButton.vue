<template>
  <component
    :is="type"
    class="text-white text-center focus:outline-none mx-auto block"
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
