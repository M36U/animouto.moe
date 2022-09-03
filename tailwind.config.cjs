const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        "anilist-bg": "rgb(237, 241, 245)",
        "anilist-bg-dark": "rgb(39, 44, 56)",
        "anilist-fg": "rgb(250, 250, 250)",
        "anilist-fg-dark": "rgb(31, 35, 45)",
        "anilist-text": "rgb(92, 114, 138)",
        "anilist-text-dark": "rgb(159, 173, 189)",
        "anilist-blue": "rgb(61, 180, 242)"
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
};

module.exports = config;
