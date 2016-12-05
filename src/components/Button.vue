<template>
  <button class="btn btn-default" @click="onClick">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>
