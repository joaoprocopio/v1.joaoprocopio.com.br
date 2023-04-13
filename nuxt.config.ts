import { fontFamily } from "tailwindcss/defaultTheme"

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  css: ["~/assets/styles/index.css"],
  app: {
    head: {
      title: "João",
      titleTemplate: "%s - Portfolio",
      htmlAttrs: {
        lang: "pt-BR",
      },
      meta: [
        { charset: "utf-8" },
        { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      ],
      link: [
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
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap",
        },
      ],
    },
  },
  experimental: {
    payloadExtraction: false,
  },
  tailwindcss: {
    config: {
      content: [
        "./components/**/*.vue",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./error.vue",
        "./app.vue",
      ],
      theme: {
        extend: {
          fontFamily: {
            sans: ["Inter", ...fontFamily.sans],
            mono: [...fontFamily.mono],
            serif: [...fontFamily.serif],
          },
        },
      },
    },
  },
})
