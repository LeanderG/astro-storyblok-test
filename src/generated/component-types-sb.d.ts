import {StoryblokStory} from 'storyblok-generate-ts'

export type MultilinkStoryblok =
  | {
      cached_url?: string;
      linktype?: string;
      [k: string]: any;
    }
  | {
      id?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "story";
      [k: string]: any;
    }
  | {
      url?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "asset" | "url";
      [k: string]: any;
    }
  | {
      email?: string;
      linktype?: "email";
      [k: string]: any;
    };

export interface CTAStoryblok {
  text?: string;
  link?: MultilinkStoryblok;
  typ?: "" | "primary" | "secondary";
  _uid: string;
  component: "CTA";
  [k: string]: any;
}

export interface AssetStoryblok {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
  focus?: string;
  [k: string]: any;
}

export interface FeatureStoryblok {
  name?: string;
  foto?: AssetStoryblok;
  CTA?: CtaStoryblok[];
  test?: any[];
  _uid: string;
  component: "feature";
  [k: string]: any;
}

export interface GlobalStoryblok {
  _uid: string;
  component: "global";
  uuid?: string;
  [k: string]: any;
}

export interface GridStoryblok {
  columns?: any[];
  _uid: string;
  component: "grid";
  [k: string]: any;
}

export interface HeaderStoryblok {
  navigation_items?: NavigationLinkStoryblok[];
  _uid: string;
  component: "header";
  [k: string]: any;
}

export interface HeroStageStoryblok {
  richtext?: any;
  foto?: AssetStoryblok;
  inhalt?: any[];
  _uid: string;
  component: "hero_stage";
  [k: string]: any;
}

export interface NavigationLinkStoryblok {
  text?: string;
  link?: MultilinkStoryblok;
  subnavigation_items?: NavigationLinkStoryblok[];
  _uid: string;
  component: "NavigationLink";
  [k: string]: any;
}

export interface PageStoryblok {
  body?: any[];
  test_group?: any;
  navigation_mode: "" | "light" | "dark";
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}

export interface ProductStoryblok {
  Name?: string;
  Farbe?: any;
  global?: StoryblokStory<GlobalStoryblok> | string;
  _uid: string;
  component: "Product";
  [k: string]: any;
}

export interface TeaserStoryblok {
  headline?: string;
  subline?: string;
  _uid: string;
  component: "teaser";
  [k: string]: any;
}
