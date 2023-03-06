import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import tailwind from "@astrojs/tailwind";
import basicSsl from "@vitejs/plugin-basic-ssl";
import vercel from "@astrojs/vercel/serverless";
import solidJs from "@astrojs/solid-js";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-storyblok-test.pages.dev/",
  integrations: [
    storyblok({
      accessToken: import.meta.env.VITE_STORYBLOK_PREVIEW_TOKEN,
      apiOptions: {
        rateLimit: 15,
      },
      bridge: import.meta.env.VITE_ASTRO_SSR === "true" || import.meta.env.DEV,
      components: {
        page: "storyblok/Page",
        feature: "storyblok/Feature",
        grid: "storyblok/Grid",
        teaser: "storyblok/Teaser",
        CTA: "storyblok/CTA",
        header: "storyblok/Header",
        hero_stage: "storyblok/HeroStage",
        footer: "storyblok/Footer",
        icon_link: "storyblok/IconLink",
        stocks: "storyblok/Stocks",
        shape_container: "storyblok/ShapeContainer",
        shape: "storyblok/Shape",
        neui: "storyblok/Neui",
      },
    }),
    tailwind(),
    solidJs(),
    sitemap(),
  ],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
  output: import.meta.env.VITE_ASTRO_SSR === "true" ? "server" : undefined,
  adapter: import.meta.env.VITE_ASTRO_SSR === "true" ? vercel() : undefined,
});
