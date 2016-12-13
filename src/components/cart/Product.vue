<template lang="html">
  <span>{{ item.title }} - {{ item.price }}</span>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<style lang="css">
</style>
