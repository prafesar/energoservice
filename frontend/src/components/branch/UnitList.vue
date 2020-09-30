<template>
  <ul class="units">
    <li :key=unit.id v-for="unit in units">
      <h3 class="unit__title">{{unit.title}}</h3>
      <router-link tag="p" :to="'/unit/' + unit.id + '/cables'">
        link
      </router-link>
    </li>
  </ul> 
</template>

<script>
import branchService from '@/services/branch-service';

export default {
  name: 'UnitList',
  data() {
    return {
      units: [],
      branchId: '',
    }
  },
  created() {
    this.branchId = branchService.getCurrentBranchId();
    this.units = branchService.getUnitListByBranchId(this.branchId);
  }
}
</script>
