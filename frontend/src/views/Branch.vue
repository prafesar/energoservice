<template>
  <div class="branch">
    <h1 class="branch-title">{{branch.title}}</h1>
    <div v-for="unit in units" :key="unit.id">
      <h2 class="unit-title" @click="fetchUnitData(unit.id)">
        {{unit.title}} 
      </h2>
      <div class="unit-fider-list">
        <span class="fider-number" :key="fider.id" v-for="fider in fiders[unit.id]"> - {{fider.number}}</span>
      </div>
      <cable-list :cables="cables[unit.id]" :unitId="unit.id"/> <!--  add unit id -->
    </div>
  </div>
</template>

<script> // branch/:branchId
import { getBranchById, getUnitListByBranchId } from '@/services/branch-service';
import { getCableListByUnitId, getFiderListByUnitId } from '@/services/cable-service';
import CableList from '@/components/cable/CableList';

export default {
  name: 'Branch',
  components: {
    CableList
  },
  data() {
    return {
      branchId: this.$route.params.branchId,
      branch: {},
      units: [],
      cables: {}, // { unitId: [{}, {}, {}], ... }
      fiders: {}
    }
  },
  created() {
    this.branch = getBranchById(this.branchId);
    this.units = [ this.units, ...getUnitListByBranchId(this.branchId) ];
  },
  methods: {
    fetchCableListByUnitId(unitId) {
      if (!this.cables[unitId]) {
        this.cables = {...this.cables, [unitId]: getCableListByUnitId(unitId) }
      }
      return;
    },
    fetchFiderListByUnitId(unitId) {
      if (!this.fiders[unitId]) {
        this.fiders = { ...this.fiders, [unitId]: getFiderListByUnitId(unitId) } 
      }
      return;
    },
    fetchUnitData(unitId) {
      this.fetchCableListByUnitId(unitId);
      this.fetchFiderListByUnitId(unitId);
      return;
    }
  }
}
</script>
