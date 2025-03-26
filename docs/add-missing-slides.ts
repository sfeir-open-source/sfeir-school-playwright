import { formation } from './scripts/slides.js';

const TITLE = `<!-- .slide: class="transition" -->

# Introduction
`;

const LAB = `<!-- .slide: class="exercice" -->

# Example workshop

## Lab

<br>

1. Create two function components: Header and Card
2. Pass MESSAGE declared in App to Card as property
3. Find out how to express style in JSX

<br>

- use provided html templates as blueprint
- don't forget that class in html is className in JSX
- don't forget to import the logo source

### npm run 01-workshop-example
`;

formation()
  .map(({ path }) => 'markdown/' + path)
  .filter((p) => {
    try {
      Deno.lstatSync(p);
      return false;
    } catch {
      return true;
    }
  })
  .forEach((p) => {
    console.log('Missing => ', p);
    const dir = p.slice(0, p.lastIndexOf('/'));
    try {
      Deno.lstatSync(dir);
    } catch {
      Deno.mkdirSync(dir, { recursive: true });
    }
    if (p.includes('-lab-')) {
      Deno.writeTextFileSync(p, LAB);
    } else {
      Deno.writeTextFileSync(p, TITLE);
    }
  });
// .forEach((p) => Deno.writeTextFileSync(p, MD));
