<template lang="html">
  <div class="container">
    <img src="../assets/logo.png" />
    <ul class="nav nav-tabs">
      <router-link tag="li" active-class="active" to="/counter">
        <a>Counter</a>
      </router-link>
      <router-link tag="li" active-class="active" to="/todo">
        <a>Todo</a>
      </router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
};
</script>
