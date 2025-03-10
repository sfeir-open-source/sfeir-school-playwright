# 06-scaffolding instructions

## How to run?

```Bash
cd ./steps
npm run 06-scaffolding
```

## TODO

1. Create a page object `HomePage` in `tests/page-object/home.page.ts` and use it in every tests ;

`HomePage` should have the following members:

- `go()`
- `headerHomeLink()`

2. Create a page object `DiscoveriesPage` in `tests/page-object/discoveries.page.ts` and use it in every tests ;

`DiscoveriesPage` should have the following members:

- `productCards()`

3. Create a page object `GuestbookPage` in `tests/page-object/guestbook.page.ts` and use it in every tests ;

`GuestbookPage` should have the following members:

- `title()`
- `messages()`
- `newMessageButton()`
- `everyMessages()` (give a `GuestbookMessageCardPage`'s list)
- `oneMessageByContent({ author, message })`

4. Create a page object `AdminGuestbookPage` in `tests/page-object/admin-guestbook.page.ts` and use it in every tests ;

`AdminGuestbookPage` should have the following members:

- `go()`
- `manageGuestbookButton()`
- `title()`
- `messages()`

Bonus:

5. Transform `HomePage`, `DiscoveriesPage`, `GuestbookPage` and `AdminGuestbookPage` as fixtures
