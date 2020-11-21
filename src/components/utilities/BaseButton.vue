<template>
  <router-link
    :to="to"
    class="text-white text-center focus:outline-none mx-auto block"
    :class="mode"
    @click="$emit('clicked')"
  >
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: ['mode', 'to']
};
</script>
