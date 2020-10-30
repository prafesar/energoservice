<template>
  <div class="mb-2 bg-gray-800 text-white">
    <div class="flex flex-col md:flex-row px-4 font-medium items-center tracking-wide">
      <div class="flex md:mt-0 mt-4 items-center">
          <svg viewBox="0 0 32 32" stroke="currentColor" stroke-width="4" stroke-linecap="round" class="w-8 h-8">
            <path
              d="M28 11v11M22 3v26M16 11v11M10 3v26M4 11v11"
              transform="translate(16, 16) rotate(45) scale(.75, 1) translate(-16, -16)"
            />
          </svg>
        <a class="md:my-4 md:mr-4 px-2 rounded text-2xl" href="#">IZP</a>
      </div>
      <!-- <ul class="flex flex-col md:flex-row mx-auto md:mt-0 mt-2 list-disc md:list-none">
        <li class="md:mx-3 md:py-6 pb-2">
          <router-link 
            class="hover:text-gray-200 focus:text-gray-200 text-white"
            to="/branch/molEs">
            Units
          </router-link>
        </li>
      </ul> -->
      
      <auth-menu />
    </div>
  </div>
</template>

<script>
import AuthMenu from '@/components/auth/AuthMenu';

export default {
  name: 'PageHeader',
  components: {
    AuthMenu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.nav-link {
  @apply text-white;
}
.nav-link:focus {
  @apply text-gray-200;
}
.nav-link:hover {
  @apply text-gray-200;
}
.nav-item {
  @apply pb-2;
}
</style>


