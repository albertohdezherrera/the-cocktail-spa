<template>
  <div class="comparator">
    <template v-for="(option, index) in options" :key="index">
      <ComparatorItem  :content="option" :index="index" />
    </template>
  </div>
</template>

<script>
import ComparatorItem from './ComparatorItem.vue';

export default {
  name: 'Comparator',
  components: {
    ComparatorItem,
  },
  props: {
    options: {
      type: [Array],
      required: true,
      default: null,
      validator(val) {
        return typeof Array.isArray(val);
      },
    },
  },
};
</script>
