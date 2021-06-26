<template>
  <div class="beers">
    <div class="beers__title">
      <h1>Bebidas</h1>
    </div>
    <div class="beers__content">
      <h2 class="beers__content__title">
        Cervezas
      </h2>
      <template v-if="beers.status === 'LOADING'">
        <h1>Cargando</h1>
      </template>
      <template v-else-if="beers.status === 'SUCCESS'">
        <Beer v-for="beer in beers.list" :key="beer.name" :beer="beer" />
      </template>
      <template v-else>
        <h1>Error</h1>
      </template>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue';
import getBeers from '@/services/getBeers';
import Beer from '@/components/Beer/Beer.vue';

export default {
  name: 'Beers',
  components: {
    Beer,
  },
  setup() {
    const beers = reactive({
      status: 'LOADING',
      list: undefined,
    });

    const { getFirstBeers } = getBeers();

    onMounted(async () => {
      try {
        beers.list = await getFirstBeers();
        beers.status = 'SUCCESS';
      } catch (e) {
        beers.status = 'ERROR';
      }
    });
    return {
      beers,
    };
  },
};
</script>

<style lang="scss">
.beers {
  &__title {
    padding: 0.5rem 1rem 2rem 2rem;
    h1 {
      @include font-size(2.4);
      color: $c-primary-ligth;
      font-family: $f-secondary;
    }
  }
  &__content {
    border: 1px solid $c-border;
    background-color: $c-white;
    padding: 2rem;
    &__title {
      @include font-size(2.4);
      color: $c-primary-ligth;
      font-family: $f-secondary;
    }
  }
}
</style>
