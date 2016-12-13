<template lang="html">
  <ul class="list-group">
    <li class="list-group-item" v-for="product in products">
      <span class="badge">{{ product.inventory }}</span>
      <product :item="product"></product>
      <div>
        <std-button text="Add to cart" @click="addToCart(product)"
          :enabled="product.inventory > 0" />
      </div>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import List from '../commons/List';
import StdButton from '../commons/Button';
import Product from './Product';

export default {
  components: {
    List,
    StdButton,
    Product,
  },
  computed: mapGetters({
    products: 'products',
  }),
  methods: {
    ...mapActions([
      'addToCart',
    ]),
  },
};
</script>

<style lang="css">
</style>
