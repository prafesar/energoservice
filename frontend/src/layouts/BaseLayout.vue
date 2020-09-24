<template>
  <div>
    <Header />
    <div class="flex flex-wrap flex-auto justify-center justify-items-center">
      <slot></slot>
    </div>
    
    <Footer />
  </div>
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