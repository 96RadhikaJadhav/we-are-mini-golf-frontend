<template>
  <div>
    <img src="@/assets/ribbon.png" class="w-48 " />
    <div
      class="h-32 w-32 absolute left-7 top-8 flex flex-col items-center justify-center p-2"
    >
      <p class="text-white uppercase text-xl mx-auto">
        {{ award.type }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['award']
};
</script>

<style></style>
