<template>
  <Panel title="Counter">
    <p>Count: {{ value }}</p>
    <btn text="+" @click="increment"></btn>
    <btn text="-" @click="decrement"></btn>
  </Panel>
</template>

<script>
import { mapActions } from 'vuex';
import Panel from './Panel';
import btn from './Button';

export default {
  components: {
    Panel,
    btn,
  },
  props: {
    value: {
      type: Number,
      default: 0,
    },
  },
  methods: mapActions([
    'increment',
    'decrement',
  ]),
};
</script>
