<template>
  <div class="cable">
    <p>Cables {{ cables }}</p>
    <p>Тест {{ tt }}</p>
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
    const cables = inject('cables');
    const tt = inject('test');
    return { tt, cables };
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
    console.log('setup ----- cables  ' + this.cables);
    console.log('setup ----- tt ' + this.tt);
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