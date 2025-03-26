# 05-auth instructions

## How to run?

```Bash
cd ./steps
npm run 05-auth
```

## TODO

1. Create a file `admin/guestbook.spec.ts` ;
2. In a group `admin` and subgroup `authentication`, create 3 tests:
   - one test with successful authentication ;
   - one test with failed authentication because of wrong email ;
   - one test with failed authentication because of wrong password ;
3. In a group `admin` and subgroup `guestbook`, create 4 tests:
   - one test to check no "Manage guestbook" link is visible on home when not connected ;
   - one test to check the "Manage guestbook" link is visible on home when connected ;
   - one test to check clicking on "Manage guestbook" link navigate to "Admin guestbook" page ;
   - one test to check the "Admin guestbook" page show up all guestbook (more than 3 messages) ;

Note: there is one admin user configured on the demo app email=`laurent@laboulangerieduterroir.fr` / password=`19LeB0nPain87` ;
