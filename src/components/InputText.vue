<template>
  <!-- NAME INPUT -->
  <input
    type="text"
    required
    maxlength="10"
    class="focus:outline-none text-005D63 font-kalam text-2xl mr-1 w-1/2 lg:w-full border-2 border-white text-005d63"
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

<style scoped>
input[type='text'] {
  -webkit-appearance: none;
}
input::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #005d63;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #005d63;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #005d63;
}
select {
  color: greenyellow;
}
</style>
