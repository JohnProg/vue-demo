<template lang="html">
  <Panel title="Shopping Cart">
    <product-list />
    <cart />
  </Panel>
</template>

<script>
import Panel from '../commons/Panel';
import ProductList from './ProductList';
import Cart from './Cart';

export default {
  components: {
    Panel,
    ProductList,
    Cart,
  },
};
</script>

<style lang="css">
</style>
