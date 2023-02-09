/// <reference types="astro/client" />

interface ImportMetaEnv {
  PUBLIC_STORYBLOK_PREVIEW_TOKEN: string;
  VITE_ASTRO_SSR: "true" | "false";
  PUBLIC_STORYBLOK_API_VERSION: "draft" | "published";
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
