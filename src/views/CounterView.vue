<template lang="html">
  <counter class="center-block" :value="$store.state.counter.count" />
</template>

<script>
import Counter from '../components/Counter';

export default {
  components: {
    Counter,
  },
};
</script>

<style lang="css">
</style>
