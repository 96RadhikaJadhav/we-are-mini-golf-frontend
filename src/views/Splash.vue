<template>
  <div class="w-full h-full bg-fff6eb grid place-items-center">
    <img src="../assets/logo.png" />
  </div>
</template>

<script>
export default {
  name: 'Splash',

  created() {
    setTimeout(() => {
      return this.$router.push('/select-players');
    }, 2000);
  }
};
</script>
