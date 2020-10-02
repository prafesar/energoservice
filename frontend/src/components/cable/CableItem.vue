<template>
  <li class="cable-item flex-col justify-between p-2 m-1 ">
    <!-- <router-link :to="{ name: 'cable-card', params: { id } }" tag="p" -->
    <router-link :to="`/unit/${unitId}/cable/${cableId}`" tag="p"
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
    unitId: String,
    title: {
      type: String,
      default: 'Not get cable title'
    },
    fider: String,
    cableId: String
  }
}
</script>
