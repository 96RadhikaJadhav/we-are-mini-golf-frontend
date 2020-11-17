<template>
  <div id="app" class="antialiased h-screen">
    <component :is="this.$route.meta.layout || 'div'">
      <router-view />
    </component>
  </div>
</template>

<style>
html,
body {
  height: 100%;
  width: 100%;
  background-image: url('./assets/background-home.png');
  font-family: capriola;
}
</style>
