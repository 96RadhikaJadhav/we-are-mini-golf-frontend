<template>
  <div class="h-full w-full">
    <transition name="fade" mode="out-in">
      <router-view class="w-full mx-auto box-border min-h-screen" />
    </transition>
  </div>
</template>
