<template>
  <modal-layout @close="$emit('close')">
    <p class="uppercase text-aeb49a text-2xl mb-10 text-center">
      We love that <br />
      you loved it!
    </p>
    <p class="text-005d63 mb-10">
      A little help is always appeciated, feel free to post your review on your
      favourite platform:
    </p>

    <!-- LOGOS -->
    <div class="flex items-center justify-evenly mb-10">
      <router-link to="">
        <div class="h-20 w-20">
          <img src="@/assets/image-1.png" alt="" />
          <!-- cannot find google maps icon with white bg for here -->
        </div>
      </router-link>

      <router-link to="">
        <div class="h-20 w-20">
          <img src="@/assets/image-2@2x.png" />
        </div>
      </router-link>

      <router-link to="">
        <div class="h-2- w-20">
          <img src="@/assets/image-3@2x.png" class="h-20 w-20" /></div
      ></router-link>
    </div>

    <!-- Orange bottom of Card -->
    <template v-slot:message>
       <p class="px-6 py-4">To make your life easier, we've already copied your review so you only have to paste it!</p>
    </template>
   
  </modal-layout>
</template>

<script>
import ModalLayout from '@/layouts/ModalLayout';
export default {
  components: { ModalLayout }
};
</script>

<style></style>
