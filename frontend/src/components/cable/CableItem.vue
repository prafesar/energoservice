<template>
  <li
    class="cable-item flex-col justify-between 
    border-1 border-black rounded-md p-4 m-1 shadow bg-gray-700"
  >
    <!--  :to="{ name: 'cable-card', params: { id } }" -->
    <router-link 
      tag="p"
      class="cable-title text-white font-medium"
      :to="`/unit/${unitId}/cable/${cableId}`"
    >
      {{title}}
    </router-link>
    <p class="cable-fider text-gray-400 font-thin">
      {{subTitle}}
    </p>
  </li>
</template>

<script>
export default {
  name: 'CableItem',
  props: {
    unitId: String,
    cableId: String,
    title: {
      type: String,
      default: 'Not get cable title'
    },
    subTitle: String
  }
}
</script>
