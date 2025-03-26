import { useCookie } from '../utils/cookie.utils';
import { Select } from './select';

export function LanguageSwitch() {
  const langFromCookie = useCookie('language', 'en');
  const availableLanguages = ['en', 'fr'];
  return (
    <Select
      value={langFromCookie}
      options={availableLanguages}
      onChange={(newLang) => {
        console.log({ newLang });
        document.location.href = `${document.location.pathname}?lang=${newLang}`;
      }}
    />
  );
}
