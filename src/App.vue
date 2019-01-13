<template>
  <div id="app">
    <Header />
    <Section v-for="(section, index) in getSections" :key="section.preview" :data="section" :right="index % 2 === 0"></Section>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Section from '@/components/Section'
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {
    Header,
    Section,
    Footer
  },
  data() {
    return {
      sections: [
        {
          title: "Current Media",
          details: [
            "Quickly access and increment your in-progress Anime and Manga from anywhere.",
            "test"
          ],
          preview: "watching"
        },
        {
          title: "Test 2",
          preview: "search"
        }
      ]
    }
  },
  computed: {
    getSections() {
      return require("@/assets/sections.json");
    }
  }
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
