export const SITE = {
  website: "https://gustavobarretto.com",
  author: "Gustavo Barretto",
  title: "Gustavo Barretto",
  desc: "Devlogs, work, and the backstory of Gustavo Barretto.",
  lang: "en",
  postPerPage: 10,
} as const;

export const PROFILE = {
  intro: "I like to build things, especially those that make a difference.",
} as const;

export const SOCIALS = [
  { name: "GitHub", href: "https://github.com/gustavobarretto", icon: "github" },
  { name: "Twitter", href: "https://twitter.com/gustavobarretto", icon: "twitter" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/gustavo-barretto1/", icon: "linkedin" },
  { name: "Email", href: "mailto:gustavobarretto@gmail.com", icon: "mail" },
] as const;

export const NAV_LINKS = [
  { href: "/devlogs", label: "Devlogs" },
  { href: "/work", label: "Work" },
  { href: "/backstory", label: "Backstory" },
] as const;
