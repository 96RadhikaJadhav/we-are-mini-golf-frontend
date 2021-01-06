<template>
  <div>
    <div
      class="mx-6 flex flex-col justify-center items-center relative max-w-sm"
    >
      <img :src="award.img" />
      <p
        :class="
          `text-white text-3xl font-kalam absolute transform ${award.deg} mb-2`
        "
      >
        {{ winner }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['winner', 'award']
};
</script>

<style></style>
