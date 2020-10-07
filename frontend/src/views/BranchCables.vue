<template>
  <div class="branch-cables ml-4">
    <hr>
    <div class="cable-filter flex flex-wrap justify-start gap-4">
      <div
        class="unit-title flex bg-gray-600 text-white py-1 px-2 m-1 rounded-md" 
        v-for="unit in units"
        :key="unit.id"
        @click="fetchCableListByUnitId(unit.id)"
      >
        {{unit.shortTitle}} 
      </div>
      <div
        class="fider-number flex bg-green-500 text-white py-1 px-2 m-1 rounded-md"
        v-for="(number) in fiderList"
        :key="number"
        @click="toggleFider(number)"
      >
        {{number}}
      </div>
    </div>
    <hr>
    <cable-list :cables="cableList"/> 
  </div>
</template>

<script> // branch/:branchId/cables/
import { onMounted } from 'vue';

import useCables from '@/use/useCables';
import CableList from '@/components/cable/CableList';

export default {
  name: 'BranchCables',
  components: {
    CableList
  },
  props: {
    branchId: {
      default: 'molEs', // How to put branchId to setup() !??
    }
  },
  setup(props) {
    const { units, cables, filter, fiderList, cableList, cableCount,
      fetchUnitList, fetchCableListByUnitId, toggleUnit, toggleFider
    } = useCables();
    
    onMounted(() => {
      fetchUnitList(props.branchId)
    });
    return {
      units, cables, filter, fiderList, cableList, cableCount,
      fetchUnitList, fetchCableListByUnitId, toggleUnit, toggleFider
    }
  }
}
</script>
