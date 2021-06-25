<template>
  <nav>
    <router-link to="/">Tab 1</router-link>
    <router-link to="/tab-3">Tab 3</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {

    };
  },
  computed: {
    activeLink() {
      return '';
    },
  },
};
</script>

<style lang="scss">
nav {
  a {
    display: inline-block;
    padding: 2rem 3rem;
    text-decoration: none;
  }
}
</style>
