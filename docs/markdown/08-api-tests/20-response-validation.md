<!-- .slide: class="transition" -->

# Response validation

##==##

<!-- .slide: class="with-code" -->

# Checking response status

```TypeScript
const res = await request.get('/api/health');
expect(res.status()).toBe(200);
```

<!-- .element: class="big-code" -->

Notes:

- the result of the request methods call will give access to the full response
- we can get the status for example and checking the value with low level assertions (the ones that does not make any retry or DOM actions)

##==##

<!-- .slide: class="with-code" -->

# Checking response headers

```TypeScript
const res = await request.post('/api/login', {
    form: { email: 'john@example.com', password: 'SuperSecure1' }
});
expect(body.headers()).toHaveProperty('Content-Type');
expect(body.headers()['Content-Type']).toBe('application/json');
```

<!-- .element: class="big-code" -->

Notes:

- nothing special, but you can access headers too

##==##

<!-- .slide: class="with-code" -->

# Checking response body

```TypeScript
const res = await request.post('/api/login', {
    form: { email: 'john@example.com', password: 'SuperSecure1' }
});
const body = await res.json();
expect(body.token).not.toHaveLenght(0);
```

<!-- .element: class="big-code" -->

Notes:

- to access the body (here as json, but as text, buffer, stream, blob, etc.) we need to await it
- then you can manipulate the body as you want like you can make with a `fetch()` response
