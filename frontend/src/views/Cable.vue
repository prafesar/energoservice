<template>
  <div class="cable">
    <p>Cables </p>
    <button @click.prevent="onCardView()">Просмотр</button>
    <button @click.prevent="onFormView()">Форма</button>
    <component :is="currentComponent" v-bind="cable" :unitId="unitId"/>
  </div>
</template>

<script>
import { inject } from 'vue';

import { getCableById } from '@/services/cable-service';
import CableCard from '@/components/cable/CableCard';

export default {
  name: 'Cable',
  components: {
    CableCard
  },
  setup() {
    const context = inject('cables');
    if (!context) {
      throw new Error('context must use provider');
    }
    return context;
  },
  data() {
    return {
      unitId: this.$route.params.unitId,
      cableId: this.$route.params.cableId,
      cable: {},
      currentComponent: 'CableCard'
    }
  },
  created() {
    this.cable = getCableById(this.cableId);
  },
  methods: {
    onCardView() {
      this.currentComponent = 'CableCard';
    },
    onFormView() {
      this.currentComponent = 'CableForm';
    }
  }
}
</script>

<style>

</style>