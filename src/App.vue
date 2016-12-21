<template lang="html">
  <div class="container">
    <img src="./assets/logo.png" />
    <ul class="nav nav-tabs">
      <router-link tag="li" active-class="active" to="/counter">
        <a>Counter</a>
      </router-link>
      <router-link tag="li" active-class="active" to="/todo">
        <a>Todo</a>
      </router-link>
      <router-link tag="li" active-class="active" to="/shopping-cart">
        <a>Shopping Cart</a>
      </router-link>
    </ul>

    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<style lang="css">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}

.fade-enter, .fade-leave-active {
  opacity: 0;
}
</style>
