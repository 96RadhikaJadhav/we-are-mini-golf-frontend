<template>
  <div class="w-full h-full">
    <input
      class="relative"
      type="range"
      :min="min"
      :max="max"
      :value="value"
      @change="$emit('changed', parseInt($event.target.value))"
    />
  </div>
</template>

<script>
export default {
  name: 'InputRange',
  props: {
    min: { type: Number, default: 0 },
    max: { type: Number },
    value: { type: Number, default: 0 }
  }
};
</script>

<style scoped>
/* Base Style*/
input[type='range'] {
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  width: 100%; /* Specific width is required for Firefox. */
  background: transparent; /* Otherwise white in Chrome */
}

input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
}

input[type='range']:focus {
  outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
}

input[type='range']::-ms-track {
  width: 100%;
  cursor: pointer;

  /* Hides the slider so custom styles can be added */
  background: transparent;
  border-color: transparent;
  color: transparent;
}

/* Thumb style */
/* Special styling for WebKit/Blink */
input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: none;
  height: 3vh;
  width: 3vh;
  border-radius: 50%;
  background: #ff6350;
  cursor: pointer;
  margin-top: -9px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
}

/* All the same stuff for Firefox */
input[type='range']::-moz-range-thumb {
  border: none;
  height: 3vh;
  width: 3vh;
  border-radius: 50%;
  background: #ff6350;
  cursor: pointer;
}

/* All the same stuff for IE */
input[type='range']::-ms-thumb {
  border: none;
  height: 3vh;
  width: 3vh;
  border-radius: 50%;
  background: #ff6350;
  cursor: pointer;
}

/* Track Styling */

input[type='range']::-webkit-slider-runnable-track {
  width: 100%;
  height: 2px;
  cursor: pointer;
  background: #3071a9;
}

input[type='range']:focus::-webkit-slider-runnable-track {
  height: 2px;
  background: #f2e3cb;
}

input[type='range']::-moz-range-track {
  width: 100%;
  height: 2px;
  cursor: pointer;
  background: #3071a9;
}

input[type='range']::-ms-track {
  width: 100%;
  height: 2px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type='range']::-ms-fill-lower {
  background: #f2e3cb;
}
input[type='range']:focus::-ms-fill-lower {
  background: #f2e3cb;
}
input[type='range']::-ms-fill-upper {
  background: #f2e3cb;
}
input[type='range']:focus::-ms-fill-upper {
  background: #f2e3cb;
}
</style>
