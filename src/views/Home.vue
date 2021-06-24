<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    {{ status }}
    {{ beersList.length }}
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  data() {
    return {
      status: 'LOADING',
      beersList: undefined,
    };
  },
  async created() {
    const { $axios } = this;
    try {
      const result = await $axios.get('https://api.punkapi.com/v2/beers');
      this.beersList = result.data.slice(0, 10);
      this.status = 'SUCCESS';
    } catch (e) {
      this.status = 'ERROR';
    }
  },
};
</script>
