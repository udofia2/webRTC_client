// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
import "dotenv/config";

  const strapiBaseUri = process.env.STRAPI_URL;


export default defineNuxtConfig({
  devtools: { enabled: false },
  nitro: {
    compressPublicAssets: true,
  },
  alias: {
    //  '~assets': '@/assets',
    // "@": resolve(__dirname, "/"),
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    ["@nuxtjs/robots", { configPath: "~/config/robots.config" }],
  ],
  runtimeConfig: {
    public: {
      baseUrl: process.env.baseUrl,
    },
  },

});