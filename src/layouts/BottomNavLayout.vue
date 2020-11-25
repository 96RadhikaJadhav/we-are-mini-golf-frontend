<template>
  <div class="h-full w-full">
    <transition name="fade">
      <router-view class="mx-auto box-border min-h-screen" />
    </transition>
    <div class="sticky bottom-0">
      <NavMenu />
    </div>
  </div>
</template>

<script>
import NavMenu from '@/components/NavMenu';
export default {
  name: 'BottomNavLayout',
  components: { NavMenu }
};
</script>
