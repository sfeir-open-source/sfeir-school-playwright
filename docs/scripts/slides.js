import { SfeirThemeInitializer } from '../web_modules/sfeir-school-theme/sfeir-school-theme.mjs';

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
    return [
      `${dir}/10-installation.md`, //
    ];
  }
  function appDiscovery() {
    return [
      `${dir}/20-app-discovery.md`, // TODO
    ];
  }
  function jsReminders() {
    return [
      `${dir}/30-javascript-reminders.md`, //
      `${dir}/31-arrow-functions.md`,
      `${dir}/32-async-await.md`,
      `${dir}/33-destructuration.md`,
    ];
  }
  function tsReminders() {
    return [
      `${dir}/40-typescript-reminders.md`, //
    ];
  }
  return [
    `${dir}/00-TITLE.md`, //
    installation(), //
    appDiscovery(), //
    jsReminders(), //
    tsReminders(), //
  ];
}

function gettingStartedSlides() {
  const dir = '02-getting-started';

  function testSyntax() {
    return [
      `${dir}/10-test-syntax.md`,
      `${dir}/11-basic-test-syntax.md`,
      `${dir}/12-grouping-tests.md`,
      `${dir}/13-test-annotations.md`,
    ];
  }
  function playwrightUi() {
    return [`${dir}/29-lab-test-suite-run.md`];
  }
  function testStrategy() {
    return [
      `${dir}/30-test-strategy.md`,
      `${dir}/31-test-pyramid.md`,
      `${dir}/32-test-trophy.md`,
      `${dir}/33-other-models.md`,
      `${dir}/34-test-kinds.md`,
    ];
  }
  function userCentricTests() {
    return [
      `${dir}/40-think-user-centric.md`, //
      `${dir}/41-quiz.md`, //
    ];
  }
  return [
    `${dir}/00-TITLE.md`, //
    testSyntax(), //
    playwrightUi(), //
    testStrategy(), //
    userCentricTests(), //
  ];
}

function writingASimpleTestSlides() {
  const dir = '03-writing-a-simple-test';

  function targetDomElement() {
    return [];
  }
  function assertions() {
    return [];
  }
  return [
    `${dir}/00-TITLE.md`, //
    targetDomElement(), //
    assertions(), //
    `${dir}/99-lab-write-first-tests.md`, //
  ];
}

function interactWithThePageSlides() {
  const dir = '04-interact-with-the-page';

  function clicTypeAndCopyPaste() {
    return [];
  }
  function waitLikeAUser() {
    return [];
  }
  function manipulateElementList() {
    return [];
  }
  return [
    `${dir}/00-TITLE.md`, //
    clicTypeAndCopyPaste(), //
    waitLikeAUser(), //
    manipulateElementList(), //
    `${dir}/99-lab-add-or-update-data.md`, //
  ];
}

function testDataAndMocksSlides() {
  const dir = '05-test-data-and-mocks';

  function dataStrategies() {
    return [];
  }
  function apiCallMocks() {
    return [];
  }
  function tdd() {
    return [];
  }
  return [
    `${dir}/00-TITLE.md`, //
    dataStrategies(), //
    apiCallMocks(), //
    tdd(), //
    `${dir}/99-lab-error-use-cases-through-mocks.md`, //
  ];
}

function authenticationSlides() {
  const dir = '06-authentication';

  function authForEveryTests() {
    return [];
  }
  function authForSomeTests() {
    return [];
  }
  return [
    `${dir}/00-TITLE.md`, //
    authForEveryTests(), //
    authForSomeTests(), //
    `${dir}/99-lab-auth-for-a-test-suite.md`, //
  ];
}

function testsScaffoldingSlides() {
  const dir = '07-tests-scaffolding';
  function hooks() {
    return [];
  }
  function parametrizedTests() {
    return [];
  }
  function fixtures() {
    return [];
  }
  function pageObjectPattern() {
    return [];
  }
  return [
    `${dir}/00-TITLE.md`, //
    hooks(), //
    parametrizedTests(), //
    fixtures(), //
    pageObjectPattern(), //
    `${dir}/99-lab-writing-structured-tests.md`, //
  ];
}

function apiTestsSlides() {
  const dir = '08-api-tests';

  function makeApiCall() {
    return [];
  }
  function responseValidation() {
    return [];
  }
  function mixBetweenApiTestAndE2ETests() {
    return [];
  }
  return [
    `${dir}/00-TITLE.md`, //
    makeApiCall(), //
    responseValidation(), //
    mixBetweenApiTestAndE2ETests(), //
    `${dir}/99-lab-writing-an-api-test-suite.md`, //
  ];
}

function componentsTestsSlides() {
  const dir = '09-components-tests';

  function componentTestsReminder() {
    return [];
  }
  function mountAComponentForATest() {
    return [];
  }
  return [
    `${dir}/00-TITLE.md`, //
    componentTestsReminder(), //
    mountAComponentForATest(), //
    `${dir}/99-lab-writing-a-component-test-suite.md`, //
  ];
}

export function formation() {
  return [
    schoolSlides(), // 00 - 15min
    introSlides(), // 01 - 30min
    gettingStartedSlides(), // 02 - 1h
    writingASimpleTestSlides(), // 03 - 1h
    interactWithThePageSlides(), // 04 - 45min
    testDataAndMocksSlides(), // 05 - 45min
    authenticationSlides(), // 06 - 45min
    testsScaffoldingSlides(), // 07 - 45min
    apiTestsSlides(), // 08 - 45min
    componentsTestsSlides(), // 09 - 45min
  ]
    .flatMap((slidePaths) => slidePaths.flatMap((slidePath) => slidePath))
    .flatMap((slidePath) => {
      return { path: slidePath };
    });
}

SfeirThemeInitializer.init(formation);
