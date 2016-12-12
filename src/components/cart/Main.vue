<template lang="html">
  <Panel title="Shopping Cart">
    <product-list />
  </Panel>
</template>

<script>
import Panel from '../commons/Panel';
import ProductList from './ProductList';

export default {
  components: {
    Panel,
    ProductList,
  },
};
</script>

<style lang="css">
</style>
