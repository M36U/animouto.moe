<template>
  <div class="component-container">
    <img src="../assets/img/animouto-logo.svg" alt="AniMouto logo" class="logo">
    <h1>AniMouto</h1>
    <h3>Let an imouto enhance your AniList experience.</h3>

    <p class="description"><span class="highlight">AniMouto</span> is an unofficial <span class="highlight">AniList</span> extension which allows quick access to many features of <span class="highlight">AniList</span> including your current Airing, Anime, and Manga lists, notifications, recent forum activity, and search.</p>
    <p class="description"><span class="highlight">AniMouto</span> is designed to feel like a true extension to <span class="highlight">AniList</span> by providing a very similar look and feel.</p>

    <a href="https://chrome.google.com/webstore/detail/animouto/ilhjhegbgdghfkdgeahkpikkjgaaoklh" target="_blank"><img src="../assets/img/chrome-logo.svg" class="link-icon"></a>
    <img src="../assets/img/firefox-logo.png" class="link-icon" style="filter:grayscale(100%);cursor:not-allowed;" title="Not currently available">
    <br />
    <br />
  </div>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>
  .description {
    color: rgb(var(--color-text-light));
  }

  .logo {
    padding-top: 20px;
    display: block;
    max-width: 256px;
    margin: 0 auto;
    text-align: center;
  }

  .link-icon {
    width: 48px;
    padding-left: 3px;
    padding-right: 3px;
    transition: .1s;
    filter: drop-shadow(0 0 6px rgba(0, 0, 0, 0.2));
  }

  .link-icon:hover {
    filter: drop-shadow(0 0 6px rgba(0, 0, 0, 0.2)) saturate(1.5);
  }
</style>
