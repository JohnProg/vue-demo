<template>
  <button class="btn btn-default" @click="onClick" v-show="visible">{{ text }}</button>
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
    }
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>
