import { ReactSelect } from '/assets/ReactSelect.js';

function App() {
  const languageCookie = document.cookie
    .split(';')
    .map((c) => c.trimStart())
    .find((c) => c.startsWith('language='));
  const languageCookieValue = languageCookie?.split('=')[1];
  return ReactSelect({
    value: languageCookieValue,
    options: ['en', 'fr'],
    onChange: (newLang) => {
      document.location.href = `${document.location.pathname}?lang=${newLang}`;
    },
  });
}

ReactDOM.render(App(), document.querySelector('#vue-language-switch'));
