export default defineNuxtConfig({
  app: {
    head: {
      title: "Engenheiro de software e resolvedor de problemas",
      titleTemplate: "João Procópio: %s",
      htmlAttrs: {
        lang: "pt-BR",
      },
      meta: [
        { charset: "utf-8" },
        {
          hid: "viewport",
          name: "viewport",
          content: "width=device-width, initial-scale=1.0, minimum-scale=1.0",
        },
        {
          hid: "google-site-verification",
          name: "google-site-verification",
          content: "zSPPjtXp_CJ-oYGfkizcdrePI0Vt8tvGefn2msmrC5w",
        },
        {
          hid: "description",
          name: "description",
          content:
            "João Procópio é um engenheiro de software que acredita na tecnologia como um caminho para resolver problemas reais",
        },
        { hid: "robots", name: "robots", content: "index, follow" },
      ],
      link: [
        {
          key: "canonical",
          rel: "canonical",
          href: "v1.joaoprocopio.com.br",
        },
        {
          key: "icon",
          rel: "icon",
          href: "/favicon.svg",
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "preload",
          as: "style",
          type: "text/css",
          onload: "this.rel='stylesheet'",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
        },
        {
          rel: "preload",
          as: "style",
          type: "text/css",
          onload: "this.rel='stylesheet'",
          href: "https://fonts.googleapis.com/css2?family=Cousine:wght@400&display=swap",
        },
      ],
    },
  },
  modules: ["@nuxt/content", "@nuxt/image-edge"],
  css: ["~/assets/styles/index.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  telemetry: false,
})
