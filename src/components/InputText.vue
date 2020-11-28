<template>
  <!-- NAME INPUT -->
  <input
    type="text"
    class="focus:outline-none text-005D63 font-kalam text-xl mr-1 w-1/2 lg:w-full"
    :value="value"
    @input="$emit('input', $event.target.value)"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  name: 'InputText',
  props: {
    placeholder: {
      type: String
    },
    value: {
      type: String
    }
  }
};
</script>
