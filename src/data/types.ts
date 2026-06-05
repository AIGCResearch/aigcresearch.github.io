export type Link = { label: string; href: string; disabled?: boolean };

export type Pillar = { icon: string; title: string; body: string };

export type Direction = {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  body: string;
  tags: string[];
};

export type Publication = {
  id: string;
  title: string;
  tagline: string;
  body: string;
  links: Link[];
  featured?: boolean;
};

export type SocialLink = { icon: string; label: string; href: string; disabled?: boolean };

export type Member = {
  name: string;
  monogram: string;
  role: string;
  affiliation: string;
  bio: string;
  avatar?: string;
  wechatQr?: string;
  links: { homepage?: string; scholar?: string; google_scholar?: string; github?: string; email?: string };
};

export type Content = {
  meta: { title: string; description: string };
  nav: {
    brand: string;
    brandSub: string;
    links: { id: string; label: string }[];
  };
  hero: {
    eyebrow: string;
    headline: string;
    subhead: string;
    intro: string;
    ctas: Link[];
  };
  philosophy: {
    eyebrow: string;
    title: string;
    intro: string;
    pillars: Pillar[];
  };
  directions: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Direction[];
  };
  publications: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Publication[];
  };
  team: {
    eyebrow: string;
    title: string;
    intro: string;
    members: Member[];
    advisorsLabel: string;
    advisors: Member[];
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    email: string;
    emailCtaLabel: string;
    wechatTitle: string;
    wechatNote: string;
    socials: SocialLink[];
  };
  footer: { copyright: string; tagline: string };
  langToggle: { zh: string; en: string };
};
