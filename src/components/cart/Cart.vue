<template lang="html">
  <panel title="Your Cart">
    <message type="warning" v-show="!products.length">Please add some products to cart.</message>

    <ul class="list-group">
      <li class="list-group-item" v-for="product in products">
        <span class="badge">{{ product.quantity }}</span>
        <product :item="product"></product>
      </li>
    </ul>

    <template slot="footer">
      <p>{{ total }}</p>
      <p>
        <std-button text="Checkout" @click="checkout(products)"
          :enabled="products.length > 0" />
      </p>
      <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
    </template>
  </panel>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Panel from '../commons/Panel';
import Message from '../commons/Message';
import StdButton from '../commons/Button';
import Product from './Product';

export default {
  components: {
    Panel,
    StdButton,
    Message,
    Product,
  },
  computed: {
    ...mapGetters({
      products: 'cartProducts',
      checkoutStatus: 'checkoutStatus',
    }),
    total() {
      return this.products.reduce((total, product) =>
        total + (product.price * product.quantity), 0);
    },
  },
  methods: {
    ...mapActions([
      'checkout',
    ]),
  },
};
</script>

<style lang="css">
</style>
