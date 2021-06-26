<template>
  <div
    :class="['comparator-item', isActive ? 'comparator-item--active' : '']"
    @click="check()"
  >
    <div class="comparator-item__content">
      <h3 class="comparator-item__content__title">
        {{ content.title }}
      </h3>
      <ul class="comparator-item__content__list">
        <li v-for="(item, index) in content.sellingPoints" :key="index">
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="comparator-item__selector">
      <input
        :id="index"
        :checked="isActive"
        type="checkbox"
        @change="check()">
      <label :for="index">
        Elegir Regimen
      </label>
    </div>
  </div>
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
    isActive: {
      type: Boolean,
      require: true,
    },
  },
  methods: {
    check() {
      this.$emit('checkOption', this.index);
    },
  },
};
</script>

<style lang="scss">
.comparator-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 17%;
  margin: 0 1%;
  padding: 1rem;
  border-radius: 2px;
  border: 1px solid $c-primary-ligth;
  transition: all ease 0.2s;
  background-color: $c-white;
  cursor: pointer;
  &.comparator-item--active {
    border: 1px solid $c-primary;
    .comparator-item__selector {
      border-color: $c-primary-dark;
    }
  }
  &__content {
    margin-bottom: 5rem;
    &__title {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      @include font-size();
      @include line-height();
      color: $c-primary;
      padding: 0.7rem 2rem;
      padding-top: 0;
      min-height: 60px;
      margin-bottom: 3rem;
      &:after {
        content: "";
        position: absolute;
        width: 50%;
        height: 1px;
        background-color: $c-primary-ligth;
        bottom: 0;
      }
    }
    &__list {
      list-style-type: none;
      padding: 0;
      margin: 0;
      li {
        position: relative;
        margin: 0.7rem 0;
        padding-left: 1.8rem;
        @include font-size(1.4);
        color: $c-primary-dark;
        &:before {
          content: "";
          position: absolute;
          width: 0.4rem;
          height: 0.4rem;
          left: .4rem;
          top: 0.6rem;
          background-color: $c-grey;
          border-radius: 50%;
        }
      }
    }
  }
  &__selector {
    width: 100%;
    input {
      position: absolute;
      left: -100rem;
    }
    input[type=checkbox] + label {
      display: block;
      position: relative;
      background-color: $c-grey-ligth;
      color: #616469;
      border: 1px solid $c-white;
      padding: 1.5rem 1rem;
      padding-left: 3.5rem;
      &:after {
        content: "";
        position: absolute;
        left: 1rem;
        top: 50%;
        transform: translateY(-50%);
        width: 1.2rem;
        height: 1.2rem;
        border: 1px solid $c-secondary;
        border-radius: 50%;
      }
    }
    input[type=checkbox]:checked + label {
      color: $c-primary-dark;
      &::before {
        content: "";
        position: absolute;
        left: 1.2rem;
        top: 50%;
        transform: translateY(-50%);
        width: 1rem;
        height: 1rem;
        background: $c-secondary;
        border-radius: 50%;
      }
    }
  }
}
</style>
