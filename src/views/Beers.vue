<template>
  <div>
    <h1>{{ status }}</h1>
    {{ beersList }}
  </div>
</template>

<script>
export default {
  name: 'Beers',
  data() {
    return {
      status: 'LOADING',
      beersList: undefined,
    };
  },
  async created() {
    const { $axios } = this;
    try {
      const result = await $axios.get(`${process.env.VUE_APP_API_URL}/beers`);
      this.beersList = result.data.slice(0, 10);
      this.status = 'SUCCESS';
    } catch (e) {
      this.status = 'ERROR';
    }
  },
};
</script>
