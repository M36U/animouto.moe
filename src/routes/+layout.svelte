<script lang="ts">
  import { MetaTags } from "svelte-meta-tags";
  import "../app.postcss";

  export const prerender = true;

  let lastScrollY = 0;
  let showNav = true;

  function onScroll(event: UIEvent & { currentTarget: EventTarget & Window }) {
    showNav = window.scrollY < lastScrollY || window.scrollY === 0;
    lastScrollY = window.scrollY;
  }
</script>

<svelte:window
  on:scroll={e => onScroll(e)}
/>

<MetaTags 
  title="AniMouto"
  openGraph={{
    title: "AniMouto",
    description: "A little sister to enhance your AniList experience.",
    url: "https://animouto.moe",
    images: [
      { url: "/logo_1024x_bg.png", width: 1024, height: 1024 },
      { url: "/logo_128px_bg.png", width: 128, height: 128 },
    ],
    type: "website",
  }}
/>

<div class="w-full min-h-screen h-full flex flex-col space-between bg-anilist-bg text-anilist-text">
  <header class="fixed w-full h-16 px-4 md:px-64 py-1 flex items-center bg-anilist-fg-dark text-white transition" class:-translate-y-16={!showNav}>
    <a href="/" class="h-full mr-8">
      <img src="/animouto-logo.svg" alt="Logo" class="rounded-lg h-full py-2">
    </a>
    <div class="flex space-x-6">
      <a href="/" class="font-medium opacity-80 hover:opacity-100 transition">Home</a>
      <a href="/privacy" class="font-medium opacity-80 hover:opacity-100 transition">Privacy Policy</a>
    </div>
  </header>
  <main class="flex-1 pt-20">
    <slot />
  </main>
  <footer class="flex-none w-full h-10 md:px-64 py-1 mt-8 flex items-center justify-center space-x-4 bg-anilist-fg">
    <div class="flex flex-col text-xs">
      © Nicholas <a href="https://anilist.co/user/TehNut" target="_blank" class="contents">"TehNut"</a> Ignoffo {new Date().getFullYear()}
    </div>
    <a href="https://github.com/TehNut/AniMouto" target="_blank" class="h-full">
      <img src="/github-logo.png" alt="Github" class="h-full">
    </a>
    <a href="https://anilist.co" target="_blank" class="h-full bg-anilist-bg-dark rounded-md">
      <img src="/anilist-logo.svg" alt="AniList" class="h-full">
    </a>
  </footer>
</div>
