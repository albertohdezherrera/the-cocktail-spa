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
    padding: 2rem;
    @media (min-width: $mq-tablet) {
      width: 90%;
      padding: 0;
    }
  }
  #app {
    padding-bottom: 1rem;
  }
  header {
    padding: 0 2rem;
    background: $c-white;
    box-shadow: 0 1px 2px 0 #505C7733;
    margin: 0 auto;
    @media (min-width: $mq-tablet) {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 3rem;
    }
  }
</style>
