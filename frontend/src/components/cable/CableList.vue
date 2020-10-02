<template>
  <div class="cable-list flex justify-center">
    <ul class="cables md:w-8/12 max-w-2xl
      flex flex-col content-center divide-y-2 divide-gray-400">
      <cable-item v-for="cable in cables"
        :key="cable.id"
        :cableId="cable.id"
        :unitId="unitId"
        :title="cable.title"
        :fider="cable.fider"
      ></cable-item>
    </ul>
  </div>
</template>

<script>
import CableItem from '@/components/cable/CableItem';

export default {
  name: 'CableList',
  components: {
    CableItem
  },
  props: {
    unitId: String,
    cables: Array,
  }
}
</script>