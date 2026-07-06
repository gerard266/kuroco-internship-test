export default defineNuxtConfig({
  ssr: false,
  runtimeConfig: {
    // Public keys that are exposed to the client
    public: {
      apiBase: "https://gerard-internship-site.g.kuroco.app",
    },
  },
});
