<template>
  <header>
    <Nav />
  </header>
  <main>
    <router-view/>
  </main>
</template>

<script>
import Nav from '@/components/Nav/Nav.vue';

export default {
  name: 'App',
  components: {
    Nav,
  },
};
</script>

<style lang="scss">
  header,
  main {
    max-width: 90%;
  }
  header {
    display: flex;
    justify-content: flex-end;
    padding: 0 2rem;
    background: $c-white;
    box-shadow: 0 1px 2px 0 #505C7733;
    margin: 0 auto;
    margin-bottom: 5rem;
  }
</style>
