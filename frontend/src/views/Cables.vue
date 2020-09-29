<template>
  <ul v-if="unitId" class="cables">
    <li :key=cable.id v-for="cable in cables">
      <h3 class="cable__title">{{cable.title}}</h3>
      
    </li>
  </ul>
</template>

<script>

import cablesService from '../../services/cables-service';

export default {
  name: 'Cables',
  data() {
    return {
      cables: [],
      unitId: ''
    }
  },
  created() {
    this.unitId = this.$route.params.unitId; 
    this.cables = cablesService.getCableListByUnitId(this.unitId);
  }
}
</script>

<style>

</style>