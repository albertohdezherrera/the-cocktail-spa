<template>
  <p>{{ content }}</p>
</template>

<script>
export default {
  name: 'ComparatorItem',
  props: {
    content: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      require: true,
    },
  },
};
</script>
