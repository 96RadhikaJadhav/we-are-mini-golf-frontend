<template>
  <div class="min-h-full w-full relative">
    
    <div class="h-20 flex items-center justify-center p-2">
      <p>Finish</p>
    </div>
      
      <div class="flex flex-wrap p-2">
        <router-link v-for="hole in holes"
        :key="hole"
        :to="hole"
        class="flex w-1/3 items-center justify-center h-32 hover:bg-005d63"
        >{{ hole}}
        </router-link>      

      </div>
        
        <!-- NAVBAR -->
    <nav-menu class="absolute bottom-0 w-full"></nav-menu>
</div>
</template>

<script>
export default {
  data() {
    return {
      holes: 18
    }
  },
}
</script>

<style>

</style>