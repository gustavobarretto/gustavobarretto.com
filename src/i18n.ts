export const LOCALES = ["en", "pt-BR", "es"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE = "en" satisfies Locale;

export const LANGUAGES = {
  en: { slug: "en", label: "ENG", name: "English" },
  "pt-BR": { slug: "pt-br", label: "PT-BR", name: "Português do Brasil" },
  es: { slug: "es", label: "ESP", name: "Español" },
} as const;

export const SECTIONS = ["devlogs", "work", "backstory"] as const;
export type Section = (typeof SECTIONS)[number];

export function localPath(locale: Locale, path: string) {
  return locale === DEFAULT_LOCALE ? path : `/${LANGUAGES[locale].slug}${path}`;
}

export function sectionPath(locale: Locale, section: Section) {
  return localPath(locale, `/${section}`);
}

export type LanguageLinks = Partial<Record<Locale, string>>;
