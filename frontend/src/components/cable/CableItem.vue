<template>
  <li class="cable-card flex-row flex-wrap w-1/3 gap-3">
    <router-link 
      :to="{ name: 'cable-card', params: key }" tag="p"
      class="cable-title text-black"
    >
      {{title}}
    </router-link>
    <p class="cable-fider text-gray-500">
      {{fider}}
    </p>
  </li>
</template>

<script>
export default {
  name: 'CableItem',
  props: {
    title: {
      type: String,
      default: 'Not get cable title'
    },
    fider: String,
    key: String
  }
}
</script>
