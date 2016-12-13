<template lang="html">
  <div :class="classObject" role="alert">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      classObject: {
        alert: true,
        'alert-success': this.type === 'success',
        'alert-info': this.type === 'info',
        'alert-warning': this.type === 'warning',
        'alert-danger': this.type === 'error',
      },
    };
  },
};
</script>

<style lang="css">
</style>
