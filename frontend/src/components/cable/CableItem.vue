<template>
  <li class="cable-item flex-col justify-between p-2 m-1 ">
    <!-- <router-link :to="{ name: 'cable-card', params: { id } }" tag="p" -->
    <router-link :to="`/cable/${id}`" tag="p"
      class="cable-title text-black"
    >{{title}}</router-link>
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
    id: String
  }
}
</script>
