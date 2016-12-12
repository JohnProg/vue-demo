<template lang="html">
  <ul class="list-group">
    <li class="list-group-item" v-for="product in products">
      <product :item="product"></product>
    </li>
  </ul>
</template>

<script>
import List from '../commons/List';
import Product from './Product';

export default {
  components: {
    List,
    Product,
  },
  data() {
    return {
      products: [
        {
          text: 'a',
        },
        {
          text: 'b',
        },
      ],
    };
  },
};
</script>

<style lang="css">
</style>
