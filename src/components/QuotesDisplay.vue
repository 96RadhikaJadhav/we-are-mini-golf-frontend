<template>
  <div class="w-full p-4">
    <!-- Top of page quote -->
    <BaseCard @clicked="$emit('clicked')" class="bg-FFF6EB">
      <div v-for="(player, index) in playersInfo" :key="player.id">
        <p class="uppercase text-aeb49a text-xl text-center font-kalam">
          {{ quoteGen(player, index) }}
        </p>
      </div>
    </BaseCard>
  </div>
</template>

<script>
import quote from '@/quotes.js';
import BaseCard from '@/components/utilities/BaseCard';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      name: 'QuotesDisplay',
      quote
    };
  },
  props: ['playersInfo', 'holeNo'],
  components: { BaseCard },
  methods: {
    quoteGen(player, i) {
      const lastScore = player.holeScore[this.holeNo - 1];
      const quote = this.quote;
      const random = Math.floor(Math.random() * 9);
      const par = this.getPar[this.holeNo - 1];

      // Hole in One
      if (lastScore === 1) {
        const newQuote = quote.holeInOne[random];
        return `${player.name}${newQuote}`;
      } else if (lastScore > 1 && lastScore < par && i === this.counter) {
        const newQuote = quote.parBestUnder[random];
        return `${player.name}${newQuote}`;
      } else if (lastScore === par && i === this.counter) {
        const newQuote = quote.parExact[random];
        return `${player.name}${newQuote}`;
      } else if (
        lastScore >= par + 1 &&
        lastScore <= par + 2 &&
        i === this.counter
      ) {
        const newQuote = quote.parOverByOne[random];
        return `${player.name}${newQuote}`;
      } else if (lastScore >= par + 3 && i === this.counter) {
        const newQuote = quote.parOverByThree[random];
        return `${player.name}${newQuote}`;
      } else return;
    }
  },
  computed: {
    ...mapGetters('gameInfo', ['counter', 'getPar'])
  }
};
</script>

<style scoped>
.popout {
  bottom: 95%;
}
</style>
