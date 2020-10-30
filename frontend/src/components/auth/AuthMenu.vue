<template>
  <ul class="flex list-none absolute right-0 px-1 my-auto">
    <li v-if="status" class="pb-2">
      <a
        class="hover:text-gray-200 focus:text-gray-200 text-white"
        @click.prevent="signOut"
        href="#">
        Выход
      </a>
    </li>
    <li v-else class="pb-2">
      <a
        class="hover:text-gray-200 focus:text-gray-200 text-white"
        @click.prevent="goToLogin"
        href="#">
        Вход
      </a>
    </li>
  </ul>
</template>

<script>
import { inject, watch } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'AuthMenu',
  setup() {
    const { signOut, status } = inject('auth'); // need reactive
    const router = useRouter();
    
    function goToLogin() {
      router.push({ name: "login-page" })
    }

    watch(status, function() {
      if (!status.value) {
        goToLogin()
      }
    });
    
    return { signOut, status, goToLogin }
  }, 
}
</script>
