
// next-intl functon to create sever translation configuration

import { getRequestConfig } from "next-intl/server";

// my locale seeting
import { routing } from "./routing";

type Locale = (typeof routing.locales)[number];

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});

// overall: this page tells next-intl which language to use and which json tranlation need to load.