<template>
  <div id="footer">
    <div class="copyright">
      <p>
        © Nicholas "TehNut" Ignoffo {{new Date().getFullYear()}}
        <br>
        I'm not a web dev leave me alone
      </p>
    </div>
    <div class="links">

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

  .copyright {
    padding-top: 5px;
    height: 50px;
    line-height: 15px;
    font-size: x-small;
  }
</style>
