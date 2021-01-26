<template>
  <div class="p-10 bg-white shadow-lg rounded-3xl" @click="$emit('clicked')">
    <slot></slot>
  </div>
</template>
