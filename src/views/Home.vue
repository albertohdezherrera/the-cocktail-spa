<template>
  <div class="home">
    <div class="home--header">
      <SectionTitle class="home--header__title">HOTEL <b>{{ content.name }}</b></SectionTitle>
      <StarsRate :stars="content.stars" />
    </div>
    <div class="home--comparator">
      <Comparator :options="content.options" />
    </div>
  </div>
</template>

<script>
import SectionTitle from '@/components/common/SectionTitle.vue';
import Comparator from '@/components/Comparator/Comparator.vue';
import StarsRate from '@/components/Stars/Stars.vue';

// Content
import myContent from '@/assets/content/content.json';

export default {
  name: 'Home',
  components: {
    SectionTitle,
    Comparator,
    StarsRate,
  },
  data() {
    return {
      content: myContent,
    };
  },
};
</script>

<style lang="scss">
.home {
  margin-bottom: 4rem;
  &--header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 4rem 0;
    &__title{
      width: 100%;
    }
    @media (min-width: $mq-tablet) {
      flex-wrap: nowrap;
      &__title{
        width: auto;
        margin-right: 2rem;
      }
    }
  }
}
</style>
