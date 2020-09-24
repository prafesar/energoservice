<template>
  <base-layout>
		<card
			v-for="item in items"
			:key="item.id"
			:title="item.object"
			:subtitle="item.event"
			:text="item.description"
		></card>
	</base-layout>
</template>

<script>
import BaseLayout from '@/layouts/BaseLayout';
import Card from '@/components/t-card'

export default {
  components: {
		BaseLayout,
		Card
	},
	data() {
		return {
			items: [
				{
					id: 1, 
					object: 'ТП 240 - КТП 345  КЛ-564 Кульшино МолРЭС', 
					event: 'Испытана по плану',
					description: 'При испытании были поверхностные пробои на опорной изоляции'
				},
				{
					id: 2, 
					object: 'ТП 14 - КТП 345  КЛ-200 Красное МолРЭС', 
					event: 'Испытана по плану',
					description: 'Испытательное напряжение 40'
				},
				{
					id: 2, 
					object: 'ТП 100 - КТП 345  КЛ-111 Молодечно ГорРЭС', 
					event: 'Повреждение при испытании',
					description: 'Концевая муфта при напряжении 25кВ'
				}
			]
		}
	}
}
</script>

<style>

</style>