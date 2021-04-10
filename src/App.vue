<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>


export default {
  name: 'App',
}
</script>

<style>
  @import 'assets/css/style.css';
  @import 'assets/css/fonts.css';

  #app {
    font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: rgb(var(--color-text));
  }
</style>
