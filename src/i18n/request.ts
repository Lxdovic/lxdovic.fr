import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

import landingEn from './landing/en.json'
import messagesEn from './messages/en.json'

type Messages = typeof landingEn & typeof messagesEn

// WARNING: When modifying this array, ensure that you also modify the 'Messages' type above ^^^
const NAMESPACES = ['landing', 'messages'] as const

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

  return {
    locale,
    messages: Object.assign(
      {},
      ...(await Promise.all(
        NAMESPACES.map(async (namespace) => {
          return (await import(`./${namespace}/${locale}.json`)).default
        })
      ))
    ),
  }
})
