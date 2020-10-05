<template>
  <div class="branch-cables ml-4">
    <div class="cable-filter flex flex-wrap justify-start gap-2">
      <div
        v-for="unit in units"
        :key="unit.id"
        class="unit-title bg-gray-600 text-white py-1 px-2 rounded-md" 
        @click="fetchCableListByUnitId(unit.id)"
      >
        {{unit.shortTitle}} 
      </div>
      <div
          class="fider-number bg-green-500 text-white py-1 px-2 rounded-md"
          :key="number"
          v-for="(number) in fiders"
          @click="toggleFider(number)"
        >
         {{number}}
      </div>
    </div>
    <cable-list :cables="filteredList"/> 
  </div>
</template>

<script> // branch/:branchId/cables/
import { getUnitListByBranchId } from '@/services/branch-service';
import { getCableListByUnitId } from '@/services/cable-service';
import CableList from '@/components/cable/CableList';

export default {
  name: 'BranchCables',
  components: {
    CableList
  },
  data() {
    return {
      branchId: this.$route.params.branchId,
      units: [],
      cables: {}, // { unitId: [{}, {}, {}], ... }
      filter: {
        fider: null,
        unit: '',
        search: ''
      }
    }
  },
  created() {
    this.units = getUnitListByBranchId(this.branchId);
  },
  methods: {
    fetchCableListByUnitId(unitId) {
      if (!this.cables[unitId]) {
        this.cables[unitId] = getCableListByUnitId(unitId);
      }
      this.toggleUnit(unitId);
      this.filter.fider = '';
      return;
    },
    toggleUnit(unitId) {
      this.filter.unit = unitId;
    },
    toggleFider(num) {
      this.filter.fider = num;
    },
    onSearch() {

    }
  },
  computed: {
    filteredList() {
      // filter by Unit
      const currUnit = this.filter.unit;
      const byUnit = currUnit ? this.cables[currUnit] : [];
      // filter by Fider
      const currFider = this.filter.fider;
      const byFider = currFider ? byUnit.filter(item => item.fider === currFider) : byUnit;
      // filter by Search
      // const currSearch = this.filter.search;
      // const bySearch = currSearch ?
      return byFider; 
      // all cables
      // const res = Object.values(this.cables).flat();
    },
    cableCount() {
      return this.filteredList.length;
    },
    fiders() { // numbers
      const currUnit = this.filter.unit;
      const cables = currUnit ? this.cables[currUnit] : []
      const fiders = cables.map(cable => cable.fider);
      return new Set(fiders);
    }
  }
}
</script>
