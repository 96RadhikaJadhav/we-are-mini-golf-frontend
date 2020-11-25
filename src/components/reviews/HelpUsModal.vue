<template>
  <div
    class="w-full h-full px-6 flex flex-col items-center justify-center bg-005d63 bg-opacity-80 absolute"
  >
    <!-- Card -->
    <div
      class="bg-fff6eb rounded-t-3xl font-capriola pt-6 rounded-3xl overflow-hidden"
    >
      <div class="w-full h-auto px-8 text-center">
        <div class="flex justify-end">
          <p>X</p>
        </div>
        <p class="uppercase text-aeb49a text-2xl mb-10">
          We love that <br />
          you loved it!
        </p>
        <p class="text-005d63 mb-10">
          A little help is always appeciated, feel free to post your review on
          your favourite platform:
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
      </div>

      <!-- Orange bottom of Card -->
      <div
        class="bg-ff8e67 text-white p-4 font-kalam rounded-t-3xl text-center text-xl leading-tight"
      >
        <p>
          To make your life easier, we've already copied your review so you only
          have to paste it!!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
