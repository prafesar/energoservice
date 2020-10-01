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
import { getDefaultBranchId, getUnitListByBranchId } from '@/services/branch-service';

export default {
  name: 'BranchUnitList',
  data() {
    return {
      units: [],
      branchId: this.$route.params.id,
    }
  },
  created() {
    if (!this.branchId) {
      const id = getDefaultBranchId();
      this.$router.push({ name: 'branch-unit-list', params: { id } });
    }
    this.units = getUnitListByBranchId(this.branchId);
  },
  // watch: {
  //   '$route'(to) {
  //     this.branchId = to.params.id;
  //   }
  // }
}
</script>
