<template>
  <select
    class="border border-f5e3c8 rounded-full focus:outline-none relative px-2 font-capriola bg-white w-20"
    :class="value === '' ? 'text-78d03a' : 'text-005d63 text-sm'"
    :value="value"
    required
    @input="$emit('input', $event.target.value)"
  >
    <option value="" disabled selected hidden>AGE</option>
    <option value="8" class="text-xs text-78d03a">Up to 8</option>
    <option value="15" class="text-xs text-78d03a">Up to 15</option>
    <option value="16" class="text-xs text-78d03a">16+</option>
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
<style scoped>
select,
option {
  text-align-last: center;
  text-align: -webkit-center;
  text-align-last: -webkit-center;
  -moz-text-align-last: center;
  font-family: 'Capriola', sans-serif;
  -webkit-appearance: none;
}
</style>
