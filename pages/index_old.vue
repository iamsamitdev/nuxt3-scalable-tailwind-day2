<script lang="ts" setup>
  useHead({
    title: 'Home',
    meta: [
      { 
        name: 'description', 
        content: 'Home Nuxt 3, IT Genius Engineering' 
      },
      {
        name: 'keywords',
        content: 'Home, Nuxt 3, Learning Nuxt 3'
      },
    ],
  })
</script>

<template>
  <div>
    
    <section
      id="hero"
      class="bg-skin-fill sm:h-screen grid place-items-center -mt-1 sm:mt-0 hero-default"
    >
      <div
        class="container mx-auto px-4 xl:px-0 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-20"
      >
        <div class="w-full sm:w-6/12">
          <h1 class="text-4xl sm:text-6xl font-bold xl:leading-[4rem] text-skin-base">
            ลำโพงบลูทูชที่ยอดเยี่ยม
          </h1>
          <p class="text-xl mt-4 mb-14 text-skin-muted">
            จากค่ายมาแชลอันโด่งดัง
          </p>
          <div class="space-x-4">
            <button class="text-2xl text-white px-4 py-3 bg-teal-700 rounded-lg">
              เข้ารับชม
            </button>
          </div>
        </div>
        <div class="w-full sm:w-6/12 flex justify-end p-6 sm:p-0">
          <img loading="lazy" src="~/assets/images/speaker.jpg" alt="" class="w-auto rounded-lg animate-pulse">
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>

</style>
