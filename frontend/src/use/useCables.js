import { reactive, computed, readonly } from 'vue';

import { getUnitListByBranchId } from '@/services/branch-service';
import { getCableListByUnitId } from '@/services/cable-service';

export default function (branchId) {
  const state = reactive({
    cables: {},
    filter: {
      unitId: '',
      fider: null,
      search: ''
    },
    units: computed(() => getUnitListByBranchId(branchId)),
    fiderList: computed(() => {
      const currUnit = state.filter.unitId;
      const cables = currUnit ? state.cables[currUnit] : []
      const fiders = cables.map(cable => cable.fider);
      return new Set(fiders);
    }),
    cableList: computed(() => {
      // filter by UnitId
      const currUnit = state.filter.unitId;
      const filteredByUnit = currUnit ? state.cables[currUnit] : [];
      // filter by Fider
      const currFider = state.filter.fider;
      const filteredByFider = currFider 
        ? filteredByUnit.filter(item => item.fider === currFider)
        : filteredByUnit;
      // filter by Search
      // const currSearch = state.filter.search;
      // const bySearch = currSearch ?
      return filteredByFider; 
    }),
    cableCount: computed(() => {
      return state.cableList.length
    })
  });

  function fetchCableListByUnitId(unitId) {
    if (!state.cables[unitId]) {
      state.cables[unitId] = getCableListByUnitId(unitId);
    }
    toggleUnit(unitId);
    state.filter.fider = null;
    return;
  }

  function toggleFider(num) {
    state.filter.fider = num;
    return;
  }

  function toggleUnit(id) {
    state.filter.unitId = id;
    return;
  }

  return {
    state: readonly(state),
    fetchCableListByUnitId,
    toggleUnit,
    toggleFider
  };
}
