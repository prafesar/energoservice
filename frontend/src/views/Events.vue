<template>
  <base-layout>
		<event-list></event-list>
	</base-layout>
</template>

<script>
import EventList from '@/components/EventList';
import BaseLayout from '@/layouts/BaseLayout';

export default {
  components: {
		EventList,
		BaseLayout
  }
}
</script>

<style>

</style>