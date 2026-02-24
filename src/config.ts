export const SITE = {
  website: "https://gustavobarretto.com",
  author: "Gustavo Barretto",
  title: "Gustavo Barretto",
  desc: "Personal website — projects and blog.",
  lang: "en",
  postPerPage: 10,
} as const;

export const SOCIALS = [
  { name: "GitHub", href: "https://github.com/gustavobarretto", icon: "github" },
  { name: "Twitter", href: "https://twitter.com/gustavobarretto", icon: "twitter" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/gustavo-barretto1/", icon: "linkedin" },
  { name: "Email", href: "mailto:gustavobarretto@gmail.com", icon: "mail" },
] as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
] as const;
