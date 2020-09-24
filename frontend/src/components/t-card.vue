<template>
  <article 
    class="card
      py-4 px-2 m-2
      lg:w-1/2 sm:w-full 
    border-gray-500 border-2 rounded-md">
    <h3 class="card__title
      bg-teal-200 rounded-md p-2
      text-gray-900">
      {{title}}
    </h3>
    <p class="card__subtitle text-left text-gray-800">
      {{subtitle}}
    </p>
    <p class="card__text text-left text-gray-600">
      {{text}}
    </p>
    <router-link to="{{url}}">more...</router-link>
  </article>
</template>

<script>
export default {
  props: ['title', 'subtitle', 'text', 'url']
}
</script>

<style>

</style>