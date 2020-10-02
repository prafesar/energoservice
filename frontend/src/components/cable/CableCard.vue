<template>
  <div class="cable-card flex-col justify-between p-2 m-1 ">
    <p class="cable-title text-black text-center" >{{title}}</p>
    <p class="cable-fider text-gray-500 text-center">{{fider}}</p>
  </div>
</template>

<script>
export default {
  name: 'CableCard',
  props: [ 'title', 'fider' ],
}
</script>
