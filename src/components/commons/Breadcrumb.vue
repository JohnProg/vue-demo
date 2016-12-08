<template lang="html">
  <ol class="breadcrumb">
    <li v-for="item in items"
      :class="{ active: isSelected(item) }">
      <template v-if="isSelected(item)">{{ item.text }}</template>
      <template v-else>
        <a href="#" @click.prevent="onClick(item.key)">{{ item.text }}</a>
      </template>
    </li>
  </ol>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
    },
    initialSelectedKey: {
      type: String,
    },
  },
  data() {
    return {
      selectedKey: this.initialSelectedKey,
    };
  },
  methods: {
    isSelected(item) {
      return item.key === this.selectedKey;
    },
    onClick(key) {
      this.selectedKey = key;
      this.$emit('select', {
        selectedKey: key,
      });
    },
  },
};
</script>

<style lang="css">
</style>
