<template>
  <div class="cable-form">
    <p>Cable Form title {{title}}</p>
    <div class="elem">
      <label for="title" class="w-1/4 text-right mr-4">Название КЛ</label>
      <input v-model="cableTitle" type="text" name="title" id="title" class="w-3/4 text-left">
    </div>
    <div class="elem">
      <label for="fider" class="w-1/4 text-right mr-4">Фидер</label>
      <select v-model="fiderNum" name="fider" id="fider" class="w-3/4 text-left">
        <option value="null">Выберите фидер</option>
        <option v-for="f in fiders" :key="f.id" :value="f.id">{{f.title}}</option>
      </select>
    </div>
    <!-- <div class="elem">
      <label for="length" class="w-1/4 text-right mr-4">Длинна</label>
      <input v-model="length" type="text" name="length" id="length" class="w-3/4 text-left">
    </div>
    <div class="elem">
      <label for="year" class="w-1/4 text-right mr-4">Год</label>
      <input v-model="year" type="text" name="year" id="year" class="w-3/4 text-left">
    </div>
    <div class="elem">
      <label for="owner" class="w-1/4 text-right mr-4">Балланс</label>
      <select v-model="owner" name="owner" id="owner" class="w-3/4 text-left">
        <option value="null">Выбор</option>
        <option v-for="owner in owners" :key="owner.id" :value="owner.id">{{owner.title}}</option>
      </select>
    </div>      -->
  </div>
</template>

<script>
import { getFiderListByUnitId } from '@/services/cable-service';

export default {
  name: 'CableForm',
  props: {
    unitId: String,
    title: String,
    fider: String
  },
  data() {
    return {
      cableUnitId: this.unitId,
      cableTitle: this.title,
      fiderNum: this.fider,
      owners: [
        { id: 244, title: 'Потребители' },
        { id: 245, title: 'МолЭС' },
      ],
      fiders: getFiderListByUnitId(this.unitId)
    }
  },
  created() {
    console.log(this.cable)
  }
}
</script>

<style lang="postcss" scoped>
  .elem {
    @apply flex justify-start p-4 m-2 ;
  }
  input {
    @apply border-solid rounded-md border-gray-800;
  }
</style>
