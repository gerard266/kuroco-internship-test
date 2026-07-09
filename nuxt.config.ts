export default defineNuxtConfig({
  ssr: false,
  runtimeConfig: {
    // Public keys that are exposed to the client
    public: {
      apiBase: "https://gerard-internship-site.g.kuroco.app",
    },
  },
  modules: [[
    "@nuxtjs/i18n",
    {
      strategy: "prefix_and_default",
      locales: [
        { code: "ja", file: "ja.json" },
        { code: "en", file: "en.json" },
      ],
      defaultLocale: "ja",
      vueI18nLoader: true,
      lazy: true,
      langDir: "locales/",
    },
  ], "@nuxtjs/i18n", "@pinia/nuxt"],
});