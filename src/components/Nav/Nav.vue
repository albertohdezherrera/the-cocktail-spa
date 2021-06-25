<template>
  <nav class="header-nav">
    <router-link to="/">Tab 1</router-link>
    <router-link to="/beers">Tab 3</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
};
</script>

<style lang="scss">
.header-nav {
  a {
    display: inline-block;
    padding: 2rem 3rem;
    text-decoration: none;
    border-bottom: 3px solid $c-white;
    font-family: $f-secondary;
    color: $c-primary-ligth;
    &.router-link-exact-active {
      color: $c-primary;
      border-color: $c-primary;
    }
  }
}
</style>
