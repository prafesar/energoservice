<template>
  <div>
    <ul v-if="unitId" class="cables">
      <li :key=cable.id v-for="cable in cables">
        <h3 class="cable__title">{{cable.title}}</h3>
        
      </li>
    </ul>
  </div>
</template>

<script>
import cableService from '../../services/cable-service';

export default {
  name: 'CableList',
  data() {
    return {
      cables: [],
      unitId: ''
    }
  },
  created() {
    this.unitId = this.$route.params.id; 
    this.cables = cableService.getCableListByUnitId(this.unitId);
  }
}
</script>