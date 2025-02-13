<!-- .slide: class="transition" -->

# Quiz "Test like a user use the app!"

##==##

<!-- .slide: class="quote-slide" -->

## Example 1 
## <br/>
## Setting value of `#form-input-email` field, then setting value of `#form-input-password` field, then click on `#submit`

Notes:
- ask the student what do they think of this test
- Very technical
- id usage = too dependant to the implementation = expensive to maintain it
- no assertions, just some actions

##==##

<!-- .slide: class="quote-slide" -->

## Example 2 
## <br/>
## Filling the login form (fields with label "E-mail" and "Password"), click on "Login" button, then redirection on home page with profile name in the heading

Notes:
- ask the student what do they think of this test
- user centric = OK

##==##

<!-- .slide: class="quote-slide" -->

## Example 3 
## <br/>
## Click on `div > div > button`, wait 15s, check "Here your export link" is visible

Notes:
- ask the student what do they think of this test
- what is `div > div > button`?
- is the message enough for the user to have the expected feature?
- waiting 15s is no sens for a user

##==##

<!-- .slide: class="quote-slide" -->

## Example 4 
## <br/>
## Click on button "Export", wait the message "Here your export link" is visible, this message should be a link starting with `https://my-export.com/files/`

Notes:
- ask the student what do they think of this test
- user centric = OK
- no hard wait = faster tests = more resilient
- we check the feature is delivered

##==##

<!-- .slide: class="quote-slide" -->

## Example 5 
## <br/>
## Go to book list page, should have 8 `.card` elements in the document

Notes:
- ask the student what do they think of this test
- how to we go to the book list page?
- `.card` seems style class = too technical
- in the document does not mean visible but present in the HTML code of the page
- why 8? Is it possible to add more books? Is it possible a user to have only 1 book in his collection?
- is there something in the book card?
- is it possible to have cards which are not a book?

##==##

<!-- .slide: class="quote-slide" -->

## Example 6 
## <br/>
## Click on the collection tab, then every book (`[data-testid="book-card"]`) on the page should have a title

Notes:
- ask the student what do they think of this test
- user centric = OK
- few rules but resilient
- maybe need to be more precise
- `data-testid` is used here to have dedicated semantic selector
