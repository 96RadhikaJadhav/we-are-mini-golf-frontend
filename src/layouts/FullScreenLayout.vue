<template>
  <div class="h-full w-full">
    <transition name="fade" appear>
      <router-view class="w-full mx-auto box-border min-h-screen" />
    </transition>
  </div>
</template>
