<script setup></script>

<template>
  <header class="container">
    <nav class="navigator">
      <RouterLink to="/">головна</RouterLink>
      <RouterLink to="/friends">друзі</RouterLink>
      <RouterLink to="/gifts">подарунки</RouterLink>
      <RouterLink to="/assignment">призначення</RouterLink>
    </nav>
    <RouterView />
  </header>
</template>

<style scoped>
/* @import '../src/assets/scss/index.scss'; */
</style>
