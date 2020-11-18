<template>
  <div class="flex items-center p-4 w-full">
    <input type="text"
        class="focus:outline-none text-005D63 font-kalam text-xl"
        :value="value"
        :placeholder="placeholder"
        />
        <select 
        name="age" 
        id="age" 
        class="text-3b9d11 border py-1 px-3 border-f5e3c8 rounded-full focus:outline-none relative"
        required>
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
}
</script>

<style scoped>
  option {
    font-size: 0.75rem;
  }
</style>