<template>
  <div>
    <Header />
    <Section v-for="(section, index) in sections" :key="section.preview" :data="section" :right="index % 2 === 0"></Section>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Section from '@/components/Section'
import Footer from "@/components/Footer";
import sections from "@/assets/sections.json";

export default {
  name: "Home",
  components: {
    Header,
    Section,
    Footer
  },
  data() {
    return {
      sections
    }
  }
}
</script>

<style>

</style>