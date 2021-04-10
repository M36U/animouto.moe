<template>
  <div>
    <Header>
      <br><br>
    </Header>
    <Section :data="privacyPolicy" :longBoi="true"/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Section from "@/components/Section";

export default {
  components: {
    Header,
    Section
  },
  data() {
    return {
      privacyPolicy: {
        title: "Privacy Policy",
        details: [
          "<h3>What information is being stored within the extension?</h3>",
          "The preferences that the user sets within the options page as well as an API token for interacting with the <a href='https://anilist.co/' target='_blank'>AniList</a> API are all stored <strong>locally</strong> using the Storage Local API.",
          "<h3>What information is collected?</h3>",
          "No information other than what is required for the extension to function is collected.<br>This includes the current anime/manga <a href='https://anilist.co/' target='_blank'>AniList</a> page that the user is currently viewing.<br><br>This extension makes use of the <a href='https://anilist.co/' target='_blank'>AniList</a> API. Be aware that this service may collect HTTP logs. Do note that we have no control over what this external service collects or stores. If interested you may view <a href='https://anilist.co/terms' target='_blank'>the privacy policy of the external service</a> used within the extension.",
          "<h3>How do we use the information?</h3>",
          "The collected data stated above is used to provide core extension functionality such as viewing the authenticated user's anime/manga list, notifications, and search results.",
          "<h3>What information/data do we share?</h3>",
          "<strong>None</strong> of the collected information/data is shared with third-parties other than what has already been stated above."
        ]
      }
    }
  }
}
</script>

<style>
  .logo {
    padding-top: 20px;
    display: block;
    max-width: 256px;
    margin: 0 auto;
    text-align: center;
  }
</style>