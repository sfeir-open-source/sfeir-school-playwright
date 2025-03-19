# 07-api-tests instructions

## How to run?

```Bash
cd ./steps
npm run 07-api-tests
```

## TODO

1. Create a new file `tests/api.spec.ts` ;
2. In a test group `/api/app`, create a test that checks `GET /api/app/health` returns an object with only one property with `UP` as value ;
3. In the test group `/api/app`, create a test that checks `GET /api/app/info` returns an object with only 2 properties `name` (with value `demo-app`) and `version` ;
4. In the test group `/api/app`, create a test that checks `GET /api/app/mappings` returns an object with one property `mappings` which contains a non empty list of object with one property `method` and one property `path` ;
5. In a test group `discoveries`, create a test that checks `GET /api/v1/discoveries` returns a list of product with valid properties ;

Bonus:

6. In a test group `/api/doc`, create a test that checks `GET /api/doc` returns an object with the correct api `title`, `description`, `version` and every expected `paths` ;
7. In the test group `/api/doc`, create a test that checks every swagger path is accessible (we get a 200 status code) ;
