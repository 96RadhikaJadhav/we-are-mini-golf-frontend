<template>
  <div class="loadingSpinner"></div>
</template>

<script>
export default {
  name: 'BaseSpinner'
};
</script>

<style>
.loadingSpinner {
  margin: 1rem auto;
  font-size: 0.3em;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  animation: spinnerLoop 0.9s infinite ease;
  transform: translateZ(0);
}
@keyframes spinnerLoop {
  0%,
  100% {
    box-shadow: 0em -2.6em 0em 0em #ff6350,
      1.8em -1.8em 0 0em rgba(255, 99, 80, 0.2),
      2.5em 0em 0 0em rgba(255, 99, 80, 0.2),
      1.75em 1.75em 0 0em rgba(255, 99, 80, 0.2),
      0em 2.5em 0 0em rgba(255, 99, 80, 0.2),
      -1.8em 1.8em 0 0em rgba(255, 99, 80, 0.2),
      -2.6em 0em 0 0em rgba(255, 99, 80, 0.5),
      -1.8em -1.8em 0 0em rgba(255, 99, 80, 0.7);
  }
  12.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 99, 80, 0.7),
      1.8em -1.8em 0 0em #ff6350, 2.5em 0em 0 0em rgba(255, 99, 80, 0.2),
      1.75em 1.75em 0 0em rgba(255, 99, 80, 0.2),
      0em 2.5em 0 0em rgba(255, 99, 80, 0.2),
      -1.8em 1.8em 0 0em rgba(255, 99, 80, 0.2),
      -2.6em 0em 0 0em rgba(255, 99, 80, 0.2),
      -1.8em -1.8em 0 0em rgba(255, 99, 80, 0.5);
  }
  25% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 99, 80, 0.5),
      1.8em -1.8em 0 0em rgba(255, 99, 80, 0.7), 2.5em 0em 0 0em #ff6350,
      1.75em 1.75em 0 0em rgba(255, 99, 80, 0.2),
      0em 2.5em 0 0em rgba(255, 99, 80, 0.2),
      -1.8em 1.8em 0 0em rgba(255, 99, 80, 0.2),
      -2.6em 0em 0 0em rgba(255, 99, 80, 0.2),
      -1.8em -1.8em 0 0em rgba(255, 99, 80, 0.2);
  }
  37.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 99, 80, 0.2),
      1.8em -1.8em 0 0em rgba(255, 99, 80, 0.5),
      2.5em 0em 0 0em rgba(255, 99, 80, 0.7), 1.75em 1.75em 0 0em #ff6350,
      0em 2.5em 0 0em rgba(255, 99, 80, 0.2),
      -1.8em 1.8em 0 0em rgba(255, 99, 80, 0.2),
      -2.6em 0em 0 0em rgba(255, 99, 80, 0.2),
      -1.8em -1.8em 0 0em rgba(255, 99, 80, 0.2);
  }
  50% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 99, 80, 0.2),
      1.8em -1.8em 0 0em rgba(255, 99, 80, 0.2),
      2.5em 0em 0 0em rgba(255, 99, 80, 0.5),
      1.75em 1.75em 0 0em rgba(255, 99, 80, 0.7), 0em 2.5em 0 0em #ff6350,
      -1.8em 1.8em 0 0em rgba(255, 99, 80, 0.2),
      -2.6em 0em 0 0em rgba(255, 99, 80, 0.2),
      -1.8em -1.8em 0 0em rgba(255, 99, 80, 0.2);
  }
  62.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 99, 80, 0.2),
      1.8em -1.8em 0 0em rgba(255, 99, 80, 0.2),
      2.5em 0em 0 0em rgba(255, 99, 80, 0.2),
      1.75em 1.75em 0 0em rgba(255, 99, 80, 0.5),
      0em 2.5em 0 0em rgba(255, 99, 80, 0.7), -1.8em 1.8em 0 0em #ff6350,
      -2.6em 0em 0 0em rgba(255, 99, 80, 0.2),
      -1.8em -1.8em 0 0em rgba(255, 99, 80, 0.2);
  }
  75% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 99, 80, 0.2),
      1.8em -1.8em 0 0em rgba(255, 99, 80, 0.2),
      2.5em 0em 0 0em rgba(255, 99, 80, 0.2),
      1.75em 1.75em 0 0em rgba(255, 99, 80, 0.2),
      0em 2.5em 0 0em rgba(255, 99, 80, 0.5),
      -1.8em 1.8em 0 0em rgba(255, 99, 80, 0.7), -2.6em 0em 0 0em #ff6350,
      -1.8em -1.8em 0 0em rgba(255, 99, 80, 0.2);
  }
  87.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 99, 80, 0.2),
      1.8em -1.8em 0 0em rgba(255, 99, 80, 0.2),
      2.5em 0em 0 0em rgba(255, 99, 80, 0.2),
      1.75em 1.75em 0 0em rgba(255, 99, 80, 0.2),
      0em 2.5em 0 0em rgba(255, 99, 80, 0.2),
      -1.8em 1.8em 0 0em rgba(255, 99, 80, 0.5),
      -2.6em 0em 0 0em rgba(255, 99, 80, 0.7), -1.8em -1.8em 0 0em #ff6350;
  }
}
</style>
