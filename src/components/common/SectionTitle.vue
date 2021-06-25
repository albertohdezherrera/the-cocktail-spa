<template>
  <div class="section-title">
    <h1 class="section-title__text">
      <slot></slot>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'SectionTitle',
};
</script>

<style lang="scss">
.section-title {
  text-align: center;
  &__text {
    font-family: $f-secondary;
    @include font-size(2.4);
    @include line-height(3);
    color: $c-primary;
    font-weight: 400;
  }
}
</style>
