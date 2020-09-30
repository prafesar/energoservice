<template>
  <ul class="units flex flex-col items-center">
    <li
      class="bg-teal-800 m-1 w-4/5
       rounded-lg p-4"
      :key=unit.id v-for="unit in units"
    >
      <router-link
        class="text-white"
        :to="'/unit/' + unit.id + '/cables'">
        {{unit.title}}
      </router-link>
      <!-- add fiders list by unit -->
    </li>
  </ul> 
</template>

<script>
import branchService from '@/services/branch-service';

export default {
  name: 'BranchUnitList',
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
