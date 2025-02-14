const target = document.querySelector('#discovery-content');
const lang = document.body.attributes.getNamedItem('data-lang').value;
fetch('/api/v1/discoveries')
  .then((res) => res.json())
  .then((products) => {
    const html = products
      .map(
        (p) => `
              <article data-testid="product-card">
                <header>${p.label[lang]}</header>
                <main>
                  <img src="${p.img}"/>
                  <p>${p.description[lang]}</p>
                </main>
                <footer>${p.price}€</footer>
              </article>
              `
      )
      .join('');
    target.innerHTML = html;
  })
  .catch(() => {
    target.innerHTML = lang === 'fr' ? 'Une erreur est survenue... 😰' : 'An error occurred... 😰';
  });
