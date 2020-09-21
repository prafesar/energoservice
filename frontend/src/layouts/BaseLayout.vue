<template>
  <fragment>
    <Header />
    <slot></slot>
    <Footer />
  </fragment>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>

</style>