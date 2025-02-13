import { Header } from '../components/header.js';
import { BaseLayout } from '../layouts/base.js';
import { useTermsAndConditionsTitle } from '../utils/lang.js';
import { TERMS } from '../data/terms.js';

export function TermsAndConditions() {
  const title = useTermsAndConditionsTitle();
  return (
    <BaseLayout>
      <main>
        <h2>{title}</h2>
        {TERMS}
      </main>
    </BaseLayout>
  );
}
