<template>
  <select
    class="text-3b9d11 border border-f5e3c8 rounded-full focus:outline-none relative px-2 font-capriola text-3B9D11 text-center"
    :class="{ error: isInvalid }"
    :value="value"
    required
    @input="$emit('input', $event.target.value)"
  >
    <option value="" disabled selected hidden>AGE</option>
    <option value="8" class="text-xs">Up to 8</option>
    <option value="15" class="text-xs">Up to 15</option>
    <option value="16" class="text-xs">16+</option>
  </select>
</template>

<script>
export default {
  name: 'InputSelect',
  data() {
    return {
      isInvalid: false
    };
  },
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
  background: white;
  -webkit-appearance: none;
  color: #78d03a;
  text-align-last: center;
  font-family: 'Capriola', sans-serif;
}
</style>
