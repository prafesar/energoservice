<template>
  <div>
    <page-header />
    <router-view />
    <page-footer />
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader';
import PageFooter from '@/components/PageFooter';

export default {
  components: {
    PageHeader,
    PageFooter
  }
}
</script>
