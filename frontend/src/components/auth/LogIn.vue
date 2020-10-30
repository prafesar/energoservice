<script>
import { inject, reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';

import validate from '@/services/validation-module';

export default {
  setup() {
    const { status, signInWithEmailAndPassword } = inject('auth');
    const router = useRouter();

    const form = reactive({
      email: 'user@user.com',
      password: '123',
      errors: [],
    });
    
    function login(event) {
      if (!validate.email(form.email)) {
        form.errors.push('Please enter a valid email address');
        
      }
      if (!form.errors.length) {
        event.target.classList.add('was-validated');
        signInWithEmailAndPassword(form.email, form.password)
        if (status) {
          router.push('/')
        }
        form.errors.push('ошибка авторизации')
      }
    }

    return {
      user: status,
      signInWithEmailAndPassword,
      ...toRefs(form),
      login
    }
  },
}
</script>

<template>
  <div class="w-full max-w-xs">
    <p v-for="error in errors" :key="error">
        {{error}}
    </p>
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="email">
          Email:
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email" v-model="email" type="email" required>
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="password">
          Password
        </label>
        <input
          class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password" type="password" v-model="password" name="password" required>
        <p class="text-red-500 text-xs italic">Введите пароль.</p>
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          @click="login" type="button">
          Вход
        </button>
        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
          Забыли пароль?
        </a>
      </div>
    </form>
    <p class="text-center text-gray-500 text-xs">
      &copy;2020 Prafesar Corp. All rights reserved.
    </p>
  </div>
</template>
