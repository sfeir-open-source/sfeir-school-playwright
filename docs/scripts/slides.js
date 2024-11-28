import { SfeirThemeInitializer } from '../web_modules/sfeir-school-theme/sfeir-school-theme.mjs';

// One method per module
function schoolSlides() {
  const dir = '00-school';
  return [
    `${dir}/00-TITLE.md`,
    `${dir}/01-wifi.md`,
    `${dir}/02-repository.md`,
    `${dir}/10-speaker-ape.md`,
    `${dir}/11-tour-de-table.md`,
    `${dir}/20-what-we-will-do.md`,
  ];
}

function introSlides() {
  const dir = '01-intro';
  function installation() {
    return [`${dir}/00-lab-example.md`];
  }
  function appDiscovery() {
    return [];
  }
  function jsRemindersFunctions() {
    return [];
  }
  function jsRemindersAsyncAwait() {
    return [];
  }
  return [
    `${dir}/00-TITLE.md`,
    ...installation(),
    ...appDiscovery(),
    ...jsRemindersFunctions(),
    ...jsRemindersAsyncAwait(),
  ];
}

function formation() {
  return [
    ...schoolSlides(), //
    ...introSlides(), //
  ].map((slidePath) => {
    return { path: slidePath };
  });
}

SfeirThemeInitializer.init(formation);
