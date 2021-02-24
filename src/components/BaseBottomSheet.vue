<template>
  <div class="relative w-full flex justify-center">
    <div
      class="absolute bottom-0 bg-fff6eb w-full rounded-t-3xl shadow-lg flex flex-col items-center px-6 pt-6 pb-10 max-w-sm"
    >
      <!-- Line -->
      <div class="h-1 w-16 rounded-lg bg-aeb49a mb-7"></div>
      <!-- Heading -->
      <div class=" text-aeb49a uppercase font-capriola mb-10 text-center">
        <slot name="heading"></slot>
      </div>

      <!-- content -->

      <div class="w-full">
        <slot name="content"> </slot>
      </div>
    </div>
  </div>
</template>
