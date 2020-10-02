<template>
  <div class="unit">
    <h1 class="unit-title">{{unit.title}}</h1>
    <router-link :to="'/unit/' + unit.id + '/cables'">
      Кабельные линии  
    </router-link>
    <!-- <router-link :to="'/unit/' + unit.id + '/substation'">
      ТП, КТП   
    </router-link> -->
  </div>
</template>

<script> // unit/:unitId
import { getUnitById } from '@/services/branch-service';

export default {
  name: 'Unit',
  data() {
    return {
      unitId: this.$route.params.unitId,
      unit: {},
    }
  },
  created() {
    this.unit = getUnitById(this.unitId)
  }
}
</script>

<style>

</style>