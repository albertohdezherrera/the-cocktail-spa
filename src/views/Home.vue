<template>
  <div class="home">
    <div class="home--header">
      <SectionTitle class="mt2 mb2 mr2">HOTEL <b>{{ content.name }}</b></SectionTitle>
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
    align-items: center;
    justify-content: center;
    margin: 4rem 0;
  }
}
</style>
