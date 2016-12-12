<template lang="html">
  <ui class="list-group">
    <li class="list-group-item" v-for="item in items">
      <slot>{{ item.text }}</slot>
    </li>
  </ui>
</template>

<script>
export default {
  props: {
    items: Array,
  },
};
</script>

<style lang="css">
</style>
