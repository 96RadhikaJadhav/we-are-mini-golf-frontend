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
  height: 100vh;
  width: 100%;
  /* background-image: url('./assets/background-home.png') no-repeat ; */
  font-family: capriola;
}
</style>
