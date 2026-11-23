import { DEFAULT_LOCALE } from "@/i18n";
import { devlogFeed } from "@/lib/devlogFeed";

export function GET() {
  return devlogFeed(DEFAULT_LOCALE);
}
