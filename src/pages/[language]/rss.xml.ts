import type { APIContext } from "astro";
import { DEFAULT_LOCALE, LOCALES, LANGUAGES, type Locale } from "@/i18n";
import { devlogFeed } from "@/lib/devlogFeed";

export function getStaticPaths() {
  return LOCALES.filter((locale) => locale !== DEFAULT_LOCALE).map((locale) => ({
    params: { language: LANGUAGES[locale].slug },
    props: { locale },
  }));
}

export function GET({ props }: APIContext<{ locale: Locale }>) {
  return devlogFeed(props.locale);
}
