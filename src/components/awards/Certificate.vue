<template>
  <div class="w-48 h-auto relative flex flex-col items-center justify-center ">
    <img src="@/assets/ribbon.png" />
    <div class="absolute top-0 h-48 flex items-center justify-center">
      <p class="text-white uppercase text-xl mx-auto text-center px-8">
        {{ award.type }}
      </p>
    </div>
    <p class="mt-6">{{ award.desc }}</p>
    <div
      class="h-8 w-8 border border-005d63 bg-white rounded-full text-005d63 mt-2"
    >
      <p class="text-lg">{{ award.total }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['award']
};
</script>

<style></style>
