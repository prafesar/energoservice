<template>
  <div class="w-screen">
    <ul v-if="unitId" class="cables flex flex-col p-3 justify-center px-auto">
      <cable-item v-for="cable in cables"
        :key="cable.id"
        :title="cable.title"
        :fider="cable.fider"
      ></cable-item>
    </ul>
  </div>
</template>

<script>
import cableService from '../../services/cable-service';
import CableItem from '@/components/cable/CableItem';

export default {
  name: 'CableList',
  components: {
    CableItem
  },
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