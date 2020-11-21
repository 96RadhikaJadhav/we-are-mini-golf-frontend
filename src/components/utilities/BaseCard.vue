<template>
  <div
    class="bg-white py-y shadow-md inline-flex justify-between py-6 px-2 rounded-3xl"
  >
    <input
      type="text"
      class="focus:outline-none w-1/2 text-005D63 font-kalam text-xl mr-1"
      :value="value"
      :placeholder="placeholder"
    />

    <!-- AGE INPUT -->
    <select
      name="age"
      id="age"
      class="text-3b9d11 border border-f5e3c8 rounded-full focus:outline-none relative"
      required
    >
      <option value="" disabled selected hidden>AGE</option>
      <option value="8">Up to 8</option>
      <option value="15">Up to 15</option>
      <option value="16">16+</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String
    },
    placeholder: {
      type: String
    }
  }
};
</script>

<style></style>
