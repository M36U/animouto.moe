<template>
  <div id="footer">
    <div class="component-container">
      <div class="copyright flex-child">
        <p>
          © Nicholas "TehNut" Ignoffo {{new Date().getFullYear()}}
          <br>
          I'm not a web dev leave me alone
        </p>
      </div>
      <div class="links flex-child">
        <a href="https://github.com/TehNut/AniMouto" target="_blank"><img src="../assets/img/github-logo.png" class="link-icon"></a>
        <a href="https://anilist.co/user/TehNut" target="_blank"><img src="../assets/img/anilist-logo.svg" class="link-icon"></a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped>
  #footer {
    background-color: rgb(var(--color-foreground));
    width: 100%;
  }

  .component-container {
    display: flex;
    align-items: center;
    width: 400px;
  }

  .flex-child {
    margin: auto;
    width: 200px;
  }

  .copyright {
    font-size: x-small;
    align-items: self-end;
  }

  .links img {
    align-items: self-start;
    width: 32px;
  }
</style>
