<template>
  <div class="comparator">
    <template v-for="(option, index) in options" :key="index">
      <ComparatorItem
        :content="option"
        :index="index"
        :isActive="index === active"
        @checkOption="selectActive"
      />
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
  data() {
    return {
      active: null,
    };
  },
  methods: {
    selectActive(val) {
      this.active = val;
    },
  },
};
</script>

<style lang="scss">
.comparator {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
