<template>
  <div
    class="mx-auto bg-fff6eb w-full rounded-t-3xl shadow-lg flex flex-col items-center px-6 pt-6 pb-10 max-w-sm max-h-screen overflow-scroll"
  >
    <!-- Line -->
    <div class="h-1 w-16 rounded-lg bg-aeb49a mb-4"></div>
    <!-- Heading -->
    <div class=" text-aeb49a uppercase font-capriola mb-4 text-center">
      <slot name="heading"></slot>
    </div>

    <!-- content -->

    <div class="w-full" style="height:60%">
      <slot name="content"> </slot>
    </div>
  </div>
</template>
