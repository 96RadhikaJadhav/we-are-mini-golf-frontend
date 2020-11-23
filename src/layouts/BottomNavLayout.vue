<template>
  <div class="h-full w-full">
    <transition name="fade">
      <router-view class="mx-auto box-border h-full" />
    </transition>
    <NavMenu />
  </div>
</template>

<script>
import NavMenu from '@/components/NavMenu';
export default {
  name: 'BottomNavLayout',
  components: { NavMenu }
};
</script>
