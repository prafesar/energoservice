<template>
  <div>
    <page-header />
    <router-view />
  </div>
</template>

<script>
import { toRefs, provide } from 'vue';

import PageHeader from '@/components/PageHeader';
import useCablesProvider from '@/use/useCables';
import useAuth from '@/use/useAuth';

export default {
  components: {
    PageHeader
  },
  props: {
    branchId: {
      default: 'molEs',
    }
  },
  setup(props) {
    const {
      state,
      fetchCableListByUnitId,
      toggleUnit,
      toggleFider
    } = useCablesProvider(props.branchId);
    
    provide ('cables', {
      ...toRefs(state),
      fetchCableListByUnitId,
      toggleUnit,
      toggleFider
    })

    provide ('auth', useAuth());
  }
}
</script>
