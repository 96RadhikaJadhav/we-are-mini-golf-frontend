<template>
  <router-link
  :to="to" 
  class="text-white text-center font-semibold focus:outline-none mx-auto block"
  :class="mode"
  >
  <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: ['mode', 'to']

}
</script>

<style scoped>
  .confirm {
    padding: 0.5rem 2rem 0.5rem 2rem;
    text-transform: uppercase;
    border-radius: 9999px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    background-color: #FF6350;
    font-size: 1.125rem;  
  }

  .back {
    padding: 1rem;

  }
</style>