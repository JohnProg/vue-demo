<template>
  <button class="btn btn-default" @click="onClick"
    :disabled="!enabled" v-show="visible">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    visible: {
      type: Boolean,
      required: false,
      default: true,
    },
    enabled: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>
