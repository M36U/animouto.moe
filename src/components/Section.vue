<template>
  <div class="section">
    <div :class="'component-container' + (right ? '' : ' left')">
      <div class="details">
        <h1>{{ data.title }}</h1>
        <p v-for="detail in data.details"><span v-html="detail"></span></p>
      </div>
      <img class="preview" :src="'/static/preview_' + data.preview + '.png'" alt="data.title"/>
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

  .component-container {
    display: flex;
    align-items: center;
    flex-flow: row wrap;
  }

  .details {
    padding-right: 50px;
    width: 44%;
  }

  .preview {
    margin: auto;
    height: 95%;
    filter: drop-shadow(0 0 0.25rem black);
  }

  .left {
    flex-direction: row-reverse;
  }

  @media screen and (max-width: 1125px) {
    .section {
      height: fit-content;
      padding-bottom: 10px;
    }

    .component-container {
      flex-direction: column;
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
