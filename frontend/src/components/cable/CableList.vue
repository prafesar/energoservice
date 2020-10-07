<template>
  <div class="cable-list flex justify-center">
    <ul class="cables md:w-8/12 max-w-2xl
      flex flex-col content-center">
      <cable-item v-for="cable in cables"
        :key="cable.id"
        :cableId="cable.id"
        :unitId="cable.unitId"
        :title="cable.title"
        :subTitle="cable.subTitle"
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
    cables: Array,
  }
}
</script>