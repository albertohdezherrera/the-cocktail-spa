<template>
  <div class="home">
    <div class="home--header">
      <SectionTitle class="mt2 mb2">HOTEL <b>{{ content.name }}</b></SectionTitle>
    </div>
    <div class="home--comparator">
      <Comparator :options="content.options" />
    </div>
  </div>
</template>

<script>
import SectionTitle from '@/components/common/SectionTitle.vue';
import Comparator from '@/components/Comparator/Comparator.vue';

// Content
import myContent from '@/assets/content/content.json';

export default {
  name: 'Home',
  components: {
    SectionTitle,
    Comparator,
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
  &--header {
    margin: 4rem 0;
  }
}
</style>
