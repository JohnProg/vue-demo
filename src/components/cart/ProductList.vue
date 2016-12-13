<template lang="html">
  <panel title="Products">
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
  </panel>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Panel from '../commons/Panel';
import StdButton from '../commons/Button';
import Product from './Product';

export default {
  components: {
    Panel,
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
