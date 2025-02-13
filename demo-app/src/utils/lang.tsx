import { createContext, useContext, type PropsWithChildren } from 'hono/jsx';
import type { JSX } from 'hono/jsx/jsx-runtime';

export type SupportedLanguage = 'en' | 'fr';

const LanguageContext = createContext<SupportedLanguage>('en');

export function ProvideLanguage({ lang, children }: PropsWithChildren<{ lang: SupportedLanguage }>) {
  return <LanguageContext.Provider value={lang}>{children}</LanguageContext.Provider>;
}

export function useUserLang() {
  return useContext(LanguageContext);
}

export function useTranslation(translations: Record<SupportedLanguage, JSX.Element | string>) {
  const lang = useUserLang();
  console.log({ lang });
  return translations[lang] ?? translations['en'];
}

export function useTermsAndConditionsTitle() {
  return useTranslation({ en: 'Terms & conditions', fr: 'Conditions générales de vente' });
}

export function useBakeryTitle() {
  return useTranslation({ en: 'Bakery', fr: 'Boulangerie' });
}

export function usePastryTitle() {
  return useTranslation({ en: 'Pastry', fr: 'Pâtisserie' });
}
