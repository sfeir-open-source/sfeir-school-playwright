<!-- .slide: class="transition" -->

# Make API call

##==##

<!-- .slide: class="with-code" -->

# Access the page...

```TypeScript
test('ui test', ({ page }) => {
    await page.goto('/');
});
```

<!-- .element: class="big-code" -->

Notes:

- as we see before

##==##

<!-- .slide: class="with-code" -->

# Access the API!

```TypeScript
test('ui test', ({ page }) => {
    await page.goto('/');
});

test('api test', ({ request }) => {
    await request.get('/api/health');
});
```

<!-- .element: class="big-code" -->

Notes:

- as simple as before!
- Playwright offer the request fixture built-in
- it gives method to make any api calls

##==##

<!-- .slide: class="with-code" -->

# Exemple 1: simulate submitting a login form

```TypeScript
const res = await request.post('/api/login', {
    form: { email: 'john@example.com', password: 'SuperSecure1' }
});
```

<!-- .element: class="big-code" -->

Notes:

- to speed up auth, we can use api call to simulate login
- pay attention, it's not how the user will authenticate, so keep some test using the UI!

##==##

<!-- .slide: class="with-code" -->

# Exemple 1: simulate submitting a login form (FormData version)

```TypeScript
const form = new FormData();
form.set('email', 'john@example.com')
form.set('password', 'SuperSecure1')
const res = await request.post('/api/login', { form });
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Exemple 2: make an authenticate POST call

```TypeScript
const res = await request.post('/api/v1/secret-user-data', {
    headers: { 'Authorization': 'Bearer A.Pretty-Legit-Jwt.Token' }
});
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Exemple 3: cleanup data after running a UI test

```TypeScript
const res = await request.delete(`/api/v1/messages/${messageIdCreatedDuringTheTest}`);
```

<!-- .element: class="big-code" -->

Notes:

- some times we want to cleanup data we created/updated during the test
- using API call it can be easier to make this cleanup!
