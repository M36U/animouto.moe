<template>
  <div class="section">
    <div :class="'component-container' + (right ? '' : ' left')">
      <div class="details">
        <h1 class="highlight" style="padding-bottom:20px;">{{ data.title }}</h1>
        <p v-for="detail in data.details" style="padding-bottom:5px;"><span v-html="detail"></span></p>
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
    padding-top: 10px;
    padding-bottom: 10px;
    position: relative;
    background: rgb(var(--color-foreground));
    background: linear-gradient(0deg, rgba(29,39,52,1) 0%, rgba(32,41,54,1) 100%);
    height: 500px;
    border-top: rgb(var(--color-blue)) solid 3px;
  }

  .component-container {
    display: flex;
    align-items: center;
  }

  .details {
    padding-right: 50px;
    width: 44%;
    min-width: 200px;
  }

  .preview {
    margin: auto;
    height: 95%;
    filter: drop-shadow(0 0 6px rgba(0, 0, 0, 0.2));
    border: rgba(0, 0, 0, 0.1) solid 1px;
  }

  .left {
    flex-direction: row-reverse;
  }

  .left .details {
    padding-right: 0;
    padding-left: 50px;
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
