<template>
  <ul v-if="this.$route.params.id" class="units">
    <li :key=unit.id v-for="unit in units">
      <h3 class="unit__title">{{unit.title}}</h3>
    </li>
  </ul> 
</template>

<script>
import unitService from '../../services/units-service';

export default {
  name: 'Units',
  data() {
    return {
      units: [],
      branchId: '',
    }
  },
  created() {
    this.branchId = this.$route.params.id;
    this.units = unitService.getUnitListByBranchId(this.branchId);
  },
  methods: {
    cableList: () => this.$router.push
  }
}
</script>

<style>

</style>