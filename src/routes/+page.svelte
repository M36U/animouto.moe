<script lang="ts">


  const webstores = [
    {
      name: "Chrome Webstore",
      url: "https://chrome.google.com/webstore/detail/animouto/ilhjhegbgdghfkdgeahkpikkjgaaoklh",
      logo: "/chrome-logo.svg"
    },
    {
      name: "Mozilla Webstore",
      url: "https://addons.mozilla.org/en-US/firefox/addon/animouto/",
      logo: "/firefox-logo.png"
    }
  ];
  const previews = [
    {
      name: "Current Media",
      description: "Quickly access and increment your in-progress Anime and Manga from anywhere.",
      image: "/preview/list.png"
    },
    {
      name: "Detailed View",
      description: "Get a glance at the details directly within the popup.",
      image: "/preview/details.png"
    },
    {
      name: "Search",
      description: "Search for media without changing pages. Includes quick access to common listing functions.",
      image: "/preview/search.png"
    },
    {
      name: "Notifications",
      description: "View your notifications without opening the site. Optionally get desktop notifications as well!",
      image: "/preview/notifications.png"
    }
  ];
</script>

<div class="w-full flex flex-col items-center">
  <div class="w-2/3 max-w-3xl flex flex-col items-center text-center">
    <div class="w-72 aspect-square flex items-center px-8 rounded-3xl bg-anilist-fg-dark">
      <img src="/animouto-logo.svg" alt="AniMouto">
    </div>
    <h2 class="mt-8 text-3xl font-semibold">AniMouto</h2>
    <p class="text-lg font-medium">Let an imouto enhance your AniList experience.</p>
    <div class="mt-4 prose-md prose-a:text-anilist-blue prose-a:font-medium prose-em:font-medium prose-em:not-italic">
      <p><em>AniMouto</em> is an unofficial <a href="https://anilist.co" target="_blank">AniList</a> extension which allows quick access to many features of <em>AniList</em> including your current anime and manga lists, notifications, and search.</p>
      <p><em>AniMouto</em> is designed to feel like a true extension to <em>AniList</em> by providing a very similar look and feel.</p>
    </div>
    <h2 class="mt-4 text-lg font-medium">Get it on these webstores!</h2>
    <div class="mt-2 flex space-x-2">
      {#each webstores as webstore}
        <a href={webstore.url} target="_blank" class="hover:scale-105 transition">
          <img src={webstore.logo} alt={webstore.name} class="aspect-square object-cover">
        </a>
      {/each}
    </div>
  </div>
  <hr class="border w-2/3 my-8" />
  <div class="flex flex-col w-1/2 space-y-8">
    {#each previews as preview, i}
      <div class="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row" class:image-right={i % 2 === 0}>
        <img class="shadow-md rounded-md w-full md:w-1/3 md:mr-8 border" src={preview.image} alt={preview.name}>
        <div class="w-full md:w-2/3 flex flex-col text-center items-center justify-center">
          <h2 class="text-xl md:text-2xl mb-4 md:mb-8 font-semibold text-anilist-blue">{preview.name}</h2>
          <p class="prose">{preview.description}</p>
        </div>
      </div>
      {#if i < previews.length - 1}
        <hr class="border w-full my-8" />
      {/if}
    {/each}
  </div>
</div>

<style lang="postcss">
  .image-right {
    @apply md:flex-row-reverse;
  }

  .image-right > img {
    @apply md:mr-0 md:ml-8;
  }
</style>