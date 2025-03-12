import './App.css';
import { LanguageSwitch } from './components/language-switch';
import { useCookie } from './utils/cookie.utils';

function App() {
  const text = useTranslation({ en: 'The current language is English.', fr: 'La langue courante est le français.' });
  return (
    <>
      <LanguageSwitch />
      <p>{text}</p>
    </>
  );
}

function useTranslation(trad: Record<'en' | 'fr', string>): string {
  const langFromCookie = useCookie('language', 'en') as 'en' | 'fr';
  return trad[langFromCookie ?? 'en'];
}

export default App;
