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
          v-for="(number) in fiderList"
          @click="toggleFider(number)"
        >
         {{number}}
      </div>
    </div>
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
      units,
      cables,
      filter,
      fiderList,
      cableList,
      cableCount,
      fetchUnitList,
      fetchCableListByUnitId,
      toggleUnit,
      toggleFider
    }
  }
}
</script>
