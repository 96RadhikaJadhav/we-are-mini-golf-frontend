<template>
  <!-- <div class="w-48 h-auto "> -->
  <!-- <img src="@/assets/ribbon.png" class="w-48 " />
    <div
      class="h-32 w-32 absolute flex flex-col items-center justify-center p-2"
    >
      <p class="text-white uppercase text-xl mx-auto text-center">
        {{ award.type }}
      </p>
    </div>
   
  </div> -->
  <div class="w-48 h-auto relative flex flex-col items-center justify-center">
    <img src="@/assets/ribbon.png" />
    <div class="absolute mb-28">
      <p class="text-white uppercase text-xl mx-auto text-center px-8">
        {{ award.type }}
      </p>
    </div>
    <p class="mt-4">{{ award.desc }}</p>
  </div>
</template>

<script>
export default {
  props: ['award']
};
</script>

<style></style>
