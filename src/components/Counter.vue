<template>
  <div>
    <p>Count: {{ $store.state.count }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  methods: mapActions([
    'increment',
    'decrement'
  ]),
};
</script>
