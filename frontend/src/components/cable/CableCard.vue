<template>
  <div class="cable-card flex-col justify-between p-2 m-1 ">
    <p class="cable-title text-black text-center" >{{cable.title}}</p>
    <p class="cable-fider text-gray-500 text-center">{{cable.fider}}</p>
  </div>
</template>

<script>
import cableService from '@/services/cable-service';

export default {
  name: 'CableCard',
  data() {
    return {
      cable: {},
      events: [],
      cableId: '',
    }
  },
  created() {
    this.cableId = this.$route.params.id;
    this.cable = cableService.getCableById(this.cableId);
  }
}
</script>
