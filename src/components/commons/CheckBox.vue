<template>
  <div class="checkbox">
    <label>
      <input type="checkbox"> {{ text }}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: false,
    },
    checked: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
