import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

import landingEn from './landing/en.json'
import commonEn from './common/en.json'

type Messages = {
  landing: typeof landingEn;
  common: typeof commonEn;
}

// WARNING: When modifying this array, ensure that you also modify the 'Messages' type above ^^^
const NAMESPACES = ['landing', 'common'] as const

declare global {
  // Use type safe message keys with `next-intl`
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface IntlMessages extends Messages {}
}

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale)) {
    locale = routing.defaultLocale
  }

  console.log(Object.assign(
    {},
    ...(await Promise.all(
      NAMESPACES.map(async (namespace) => {
        return {namespace: (await import(`./${namespace}/${locale}.json`)).default}
      }),
    )),
  ),)

  return {
    locale,
    messages: Object.assign(
      {},
      ...(await Promise.all(
        NAMESPACES.map(async (namespace) => {
          return {[namespace]: (await import(`./${namespace}/${locale}.json`)).default}
        }),
      )),
    ),
  }
})
