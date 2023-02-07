import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import tailwind from "@astrojs/tailwind";
import basicSsl from "@vitejs/plugin-basic-ssl";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [
    storyblok({
      accessToken: import.meta.env.VITE_STORYBLOK_PREVIEW_TOKEN,
      components: {
        page: "storyblok/Page",
        feature: "storyblok/Feature",
        grid: "storyblok/Grid",
        teaser: "storyblok/Teaser",
        CTA: "storyblok/CTA",
        header: "storyblok/Header",
        hero_stage: "storyblok/HeroStage",
      },
    }),
    tailwind(),
  ],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
  output: import.meta.env.ASTRO_SSR === "true" ? "server" : undefined,
  adapter: import.meta.env.ASTRO_SSR === "true" ? cloudflare() : undefined,
});
