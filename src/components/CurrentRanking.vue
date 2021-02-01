<template>
  <div class="my-2 font-kalam grid grid-flow-col grid-cols-6">
    <!-- 2nd, 3rd, 4th etc -->
    <div class="col-span-1">
      <p class="font-kalam text-ea9864 mr-4 text-xl">
        {{ rank(index + 2) }}
      </p>
    </div>
    <!-- Player Name -->
    <div class="col-span-3">
      <p class="text-2xl text-005d63">{{ player.name }}</p>
    </div>
    <!-- Player Last Hole -->
    <div class="col-span-1">
      <div
        class="flex items-center justify-center h-8 w-8 border border-005d63 rounded-full text-005d63 mr-2"
        v-show="!show"
      >
        <p class="mt-1">{{ player.holeScore[holeNo - 1] }}</p>
      </div>
      <!-- Player Total Score -->
    </div>
    <div class="col-span-1">
      <div
        class="flex items-center justify-center h-8 w-8 bg-ff8e67 rounded-full text-white"
      >
        <p class="mt-1">{{ player.totalScore }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['player', 'index', 'holeNo', 'show'],
  methods: {
    rank(i) {
      if (i === 2) {
        return '2nd';
      } else if (i === 3) {
        return '3rd';
      } else if (i === 4) {
        return '4th';
      } else if (i === 5) {
        return '5th';
      } else if (i === 6) {
        return '6th';
      }
    }
  }
};
</script>
