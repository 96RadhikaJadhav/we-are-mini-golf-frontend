<template>
  <div
    class="absolute bottom-0 grass h-auto w-full rounded-t-3xl shadow-md text-white font-kalam p-6 bg-green-600 z-10 max-w-sm"
  >
    <div class="flex items-center justify-end mb-2">
      <button @click="$emit('close')">X</button>
    </div>

    <div class=" flex flex-col justify-center items-center px-4">
      <p class="text-3xl place-self-start uppercase pb-8">
        <slot name="title"></slot>
      </p>
    </div>
  </div>
</template>
