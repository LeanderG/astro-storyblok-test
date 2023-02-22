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
  CTA?: any[];
  _uid: string;
  component: "feature";
  [k: string]: any;
}

export interface FooterStoryblok {
  logo?: AssetStoryblok;
  first_list?: LinkWrapperStoryblok[];
  second_list?: LinkWrapperStoryblok[];
  third_list?: LinkWrapperStoryblok[];
  copyright?: string;
  socials?: IconLinkStoryblok[];
  _uid: string;
  component: "footer";
  [k: string]: any;
}

export interface GridStoryblok {
  columns?: any[];
  _uid: string;
  component: "grid";
  [k: string]: any;
}

export interface HeaderStoryblok {
  logo?: AssetStoryblok;
  navigation_items?: NavigationLinkStoryblok[];
  _uid: string;
  component: "header";
  [k: string]: any;
}

export interface HeroStageStoryblok {
  richtext?: any;
  foto: AssetStoryblok;
  inhalt?: any[];
  _uid: string;
  component: "hero_stage";
  [k: string]: any;
}

export interface IconLinkStoryblok {
  text?: string;
  icon: AssetStoryblok;
  link: MultilinkStoryblok;
  _uid: string;
  component: "icon_link";
  [k: string]: any;
}

export interface LinkWrapperStoryblok {
  text?: string;
  link?: MultilinkStoryblok;
  _uid: string;
  component: "link_wrapper";
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
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}

export interface ShapeStoryblok {
  svg?: AssetStoryblok;
  x?: number;
  y?: number;
  _uid: string;
  component: "shape";
  [k: string]: any;
}

export interface ShapeContainerStoryblok {
  shapes?: ShapeStoryblok[];
  _uid: string;
  component: "shape_container";
  [k: string]: any;
}

export interface StocksStoryblok {
  _uid: string;
  component: "stocks";
  [k: string]: any;
}

export interface TeaserStoryblok {
  headline?: string;
  _uid: string;
  component: "teaser";
  [k: string]: any;
}
