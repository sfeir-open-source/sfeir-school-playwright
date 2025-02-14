import { BaseLayout } from '../layouts/base.js';
import { useTranslation } from '../utils/lang.js';
import { Logo } from '../components/logo.js';
import { css } from 'hono/css';

export function About() {
  const pageTitle = useTranslation({ en: 'About', fr: 'À Propos' });
  const aboutTitle = useTranslation({
    en: 'About La Boulangerie du Terroir',
    fr: 'À Propos de La Boulangerie du Terroir',
  });
  const aboutText = useTranslation({ en: englishVersion, fr: frenchVersion });
  return (
    <BaseLayout title={pageTitle}>
      <main>
        <h2>{aboutTitle}</h2>
        <Logo
          class={css`
            margin: 2rem auto;
          `}
        />
        {aboutText}
      </main>
    </BaseLayout>
  );
}

const englishVersion = (
  <>
    <p>
      Since 1987, La Boulangerie du Terroir has passionately preserved the authentic tradition of French bakery. Our
      establishment, located in the heart of the historic district, has built a reputation for excellence thanks to two
      specialties that are our pride: our sourdough country baguette and our irresistible raisin breads.
    </p>
    <p>
      Our country baguette, crafted according to a recipe passed down through generations, is the result of meticulous
      craftsmanship. Every day, our artisan bakers knead a natural sourdough that slowly ferments for 24 hours,
      developing complex flavors and a characteristic honeycombed crumb. Its golden, crispy crust conceals a tender and
      fragrant interior that has already won the hearts of many bread enthusiasts.
    </p>
    <p>
      As for our raisin breads, they represent the perfect marriage between French tradition and our artisanal
      creativity. Our carefully selected raisins, rehydrated in a house-made vanilla-flavored syrup, are nestled in
      hand-worked pure butter puff pastry. This particular attention to detail and ingredient quality has made our
      raisin bread a true local institution.
    </p>
    <p>
      At our bakery, each product tells a story - one of love for craftsmanship and deep respect for baking traditions.
      We invite you to discover our creations, shaped daily with passion by our team of dedicated artisans.
    </p>
    <p>La Boulangerie du Terroir - Authenticity in the service of taste.</p>
  </>
);

const frenchVersion = (
  <>
    <p>
      Depuis 1987, La Boulangerie du Terroir perpétue avec passion la tradition authentique de la boulangerie française.
      Notre maison, située au cœur du quartier historique, s'est forgée une réputation d'excellence grâce à deux
      spécialités qui font notre fierté : notre baguette de campagne au levain naturel et nos irrésistibles pains aux
      raisins.
    </p>
    <p>
      Notre baguette de campagne, élaborée selon une recette transmise de génération en génération, est le fruit d'un
      savoir-faire minutieux. Chaque jour, nos artisans boulangers pétrissent une pâte au levain naturel qui fermente
      lentement pendant 24 heures, développant ainsi des arômes complexes et une mie alvéolée caractéristique. Sa croûte
      dorée et croustillante cache une mie tendre et parfumée qui a déjà conquis le cœur de nombreux amateurs de bon
      pain.
    </p>
    <p>
      Quant à nos pains aux raisins, ils représentent le mariage parfait entre la tradition française et notre
      créativité artisanale. Nos raisins secs, soigneusement sélectionnés et réhydratés dans un sirop maison parfumé à
      la vanille, sont lovés dans une pâte feuilletée pur beurre travaillée à la main. Cette attention particulière aux
      détails et à la qualité des ingrédients fait de notre pain aux raisins une véritable institution locale.
    </p>
    <p>
      Chez nous, chaque produit raconte une histoire, celle d'un amour pour le travail bien fait et d'un respect profond
      pour les traditions boulangères. Nous vous invitons à venir découvrir nos créations, façonnées chaque jour avec
      passion par notre équipe d'artisans dévoués.
    </p>
    <p>La Boulangerie du Terroir - L'authenticité au service du goût.</p>
  </>
);
