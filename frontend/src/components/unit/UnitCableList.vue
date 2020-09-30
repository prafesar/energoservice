<template>
  <cable-list :cables="cables" />
</template>

<script>
import cableService from '../../services/cable-service';
import CableList from '@/components/cable/CableList';

export default {
  name: 'UnitCableList',
  components: {
    CableList
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