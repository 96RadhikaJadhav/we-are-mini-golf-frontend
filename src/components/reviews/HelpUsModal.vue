<template>
  <ModalLayout :closingButton="true" @close="$emit('close')">
    <p
      class="uppercase text-aeb49a text-2xl mb-10 text-center font-capriola font-light"
    >
      We love that <br />
      you loved it!
    </p>
    <p class="text-005d63 mb-10 font-capriola text-center px-4">
      A little help is always appeciated, feel free to post your review on your
      favourite platform:
    </p>

    <!-- LOGOS -->
    <div class="flex items-center justify-evenly mb-10">
      <a v-if="googleUrl" :href="googleUrl" target="_blank">
        <div class="w-16">
          <img
            src="https://res.cloudinary.com/doblhgoan/image/upload/v1613546498/we-are-mini-golf-prod/icons/Google_Maps_jw3sl3.png"
            alt="googlemaps"
          />
        </div>
      </a>

      <a v-if="tripAdvisorUrl" :href="tripAdvisorUrl" target="_blank">
        <div class="w-16">
          <img
            src="https://res.cloudinary.com/doblhgoan/image/upload/v1613546498/we-are-mini-golf-prod/icons/Trip_Advisor_mcp1uc.png"
          />
        </div>
      </a>
      <a v-if="yelpUrl" :href="yelpUrl" target="_blank">
        <div class="w-16 ">
          <img
            src="https://res.cloudinary.com/doblhgoan/image/upload/v1613546498/we-are-mini-golf-prod/icons/Yelp_wp2zzd.png"
          />
        </div>
      </a>
    </div>

    <!-- Orange bottom of Card -->
    <template v-slot:message>
      <p class="px-6 py-4">
        To make your life easier, we've already copied your review so you only
        have to paste it!
      </p>
    </template>
  </ModalLayout>
</template>

<script>
import ModalLayout from '@/layouts/ModalLayout';
export default {
  data() {
    return {
      googleUrl: '',
      tripAdvisorUrl: '',
      yelpUrl: ''
    };
  },
  components: { ModalLayout },
  created() {
    let grid = JSON.parse(localStorage.getItem('course-grid'));
    let url = grid.socialInfo;
    this.googleUrl = url.google;
    this.tripAdvisorUrl = url.tripAdvisor;
    this.yelpUrl = url.yelp;
  }
};
</script>

<style></style>
