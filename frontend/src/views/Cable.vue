<template>
<div class="cable">
  <button @click.prevent="onCardView()">Просмотр</button>
  <button @click.prevent="onFormView()">Форма</button>
  <component :is="currentComponent" v-bind="cable" :unitId="unitId"/>
</div>

</template>

<script>
import { getCableById } from '@/services/cable-service';
import CableCard from '@/components/cable/CableCard';
import CableForm from '@/components/cable/CableForm';

export default {
  name: 'Cable',
  components: {
    CableCard,
    CableForm
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
      console.log(this.currentComponent);
    },
    onFormView() {
      this.currentComponent = 'CableForm';
      console.log(this.currentComponent);
    }
  }
}
</script>

<style>

</style>