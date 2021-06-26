<template>
  <div class="beer">
    <span :class="['beer__abv', `beer__abv--${calculateAvgColor(beer.abv)}`]">{{ beer.abv }}</span>
    <img class="beer__img" :src="beer.image_url" />
    <h3 class="beer__name">{{ beer.name }}</h3>
    <p class="beer__description">{{ beer.description }}</p>
    <p class="beer__ideal">Ideal para combinar con: {{ conactArrayText(beer.food_pairing) }}</p>
  </div>
</template>

<script>
import misc from '@/misc/misc';

export default {
  name: 'Beers',
  props: {
    beer: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const { conactArrayText, calculateAvgColor } = misc();
    return {
      conactArrayText,
      calculateAvgColor,
    };
  },
};
</script>

<style lang="scss">
.beer {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto auto;
  gap: 0 0;
  grid-template-areas:
    "name"
    "img"
    "description"
    "ideal";
  margin-bottom: 1.5rem;
  padding: 1rem 2rem;
  border: 1px solid $c-border;
  &__abv {
    position: absolute;
    width: 20%;
    max-width: 12rem;
    top: 1rem;
    right: 0;
    padding: .5rem 1rem;
    font-family: $f-secondary;
    @include font-size(1.8);
    font-weight: 700;
    &.beer__abv--danger { background-color: $c-danger; }
    &.beer__abv--moderate { background-color: $c-moderate; }
    &.beer__abv--warning { background-color: $c-warning; }
  }
  &__img {
    grid-area: img;
    max-height: 20rem;
    margin: 1rem auto;
    margin-bottom: 2rem;
  }
  &__name {
    grid-auto-rows: auto;
    grid-area: name;
    margin-top: 0;
    max-width: 75%;
    margin-bottom: 2rem;
    @include font-size(1.8);
    color: $c-primary;
  }
  &__description {
    grid-area: description;
    @include font-size(1.4);
  }
  &__ideal {
    grid-area: ideal;
    @include font-size(1.4);
    @include line-height(1.9);
    color: $c-primary-ligth;
    font-family: $f-secondary;
    font-weight: 700;
  }
    @media (min-width: $mq-tablet) {
      grid-template-columns: 12rem auto;
      grid-template-rows: auto 1fr auto;
      grid-template-areas:
        "img name"
        "img description"
        "img ideal";
      padding: 2.5rem;
        &__img {
          grid-area: img;
          max-height: 15rem;
          margin: 0 auto;
          object-fit: contain;
        }
        &__name,
        &__description,
        &__ideal {
          display: block;
          margin-left: 3rem;
          max-width: 75%;
        }
        &__name {
          grid-area: name;
          margin-bottom: 1rem;
        }
        &__description {
          grid-area: description;
          margin-bottom: 3rem;
        }
        &__ideal {
          grid-area: ideal;
        }
      &__abv {
        width: 10%;
      }
    }
}

</style>
