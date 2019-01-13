<template>
  <div class="section">
    <div class="component-container">
      <div class="details">
        <h1>{{ data.title }}</h1>
        <p v-for="detail in data.details"><span v-html="detail"></span></p>
      </div>
      <img :class="'preview' + (right ? '' : ' left')" :src="'/static/preview_' + data.preview + '.png'" alt="data.title"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Section",
    props: [
      "data",
      "right"
    ]
  }
</script>

<style scoped>
  .section {
    position: relative;
    background: rgb(var(--color-foreground));
    background: linear-gradient(rgb(var(--color-foreground)) 0%, rgba(var(--color-foreground), .5) 50%, rgba(var(--color-foreground), 0) 100%);
    height: 500px;
    border-top: rgb(var(--color-blue)) solid 3px;
  }

  .details {
    display: inline-block;
    padding-right: 50px;
    width: 44%;
  }

  .preview {
    float: right;
    height: 95%;
    padding-top: 12px;
    filter: drop-shadow(0 0 0.25rem black);
  }

  .left {
    float: left;
  }

  @media screen and (max-width: 1125px) {
    .section {
      height: fit-content;
      padding-bottom: 10px;
    }

    .details {
      text-align: center;
      width: initial;
      padding-right: 0;
    }

    .preview {
      width: 75%;
      height: auto;
      float: initial;
    }
  }
</style>
