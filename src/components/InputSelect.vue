<template>
  <select
    class="text-3b9d11 border border-f5e3c8 rounded-full focus:outline-none relative"
    :value="value"
    @input="$emit('input', $event.target.value)"
  >
    <option value="" disabled selected hidden>AGE</option>
    <option value="8">Up to 8</option>
    <option value="15">Up to 15</option>
    <option value="16">16+</option>
  </select>
</template>

<script>
export default {
  name: 'InputSelect',
  props: {
    value: {
      type: String
    }
  }
};
</script>
