<template>
  <div>
    <p>Count: {{ $store.state.count }}</p>
    <Button text="+" @click="increment"></Button>
    <Button text="-" @click="decrement"></Button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Button from './Button';

export default {
  components: {
    Button,
  },
  methods: mapActions([
    'increment',
    'decrement'
  ]),
};
</script>
