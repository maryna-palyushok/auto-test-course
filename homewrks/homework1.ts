/**
 - Try to implement as much tests as you can
 - Do not overload tests with logic, be simple
 - browser.pause() allowed
 - copy/paste is allowed
 - prefer css selectors
 */
//  import * as assert from 'assert';
 //const faker = require('faker');


// describe("Items search", function() {
    // it("should show results in case multiple items matches", function() {
    //     browser.url(`/`)
    //     const enterSearchValue = $('input.form-control').setValue('Duck')
    //     browser.keys(['Enter'])
    //     const searchResults = $$('#box-search-results .product-column').length
    //     browser.pause(2000)
    //     assert(searchResults >= 1, "No results were found");
    // });
  
    // it("should redirect to item page in case only one result matches", function() {
    //     browser.url(`/`)
    //     const enterSearchValue = $('input.form-control').setValue('Yellow')
    //     browser.keys(['Enter'])
    //     const searchedItem = '/rubber-ducks-c-1/subcategory-c-2/yellow-duck-p-1';
    //     const currentURL = browser.getUrl()
    //     browser.pause(2000)
    //     assert(currentURL.includes(searchedItem),
    //         `Alert text: "${currentURL}" to match expected: "${searchedItem}", after successful registration`)
    // });
  
    // it("should redirect to 'no matching results' in case no items matched", function() {
    //     browser.url(`/`)
    //     const enterSearchValue = $('input.form-control').setValue('qwerty')
    //     browser.keys(['Enter'])
    //     browser.pause(1000)
    //     const noMatchResultsMessage = $('#box-search-results').getText()
    //     assert(noMatchResultsMessage.includes('No matching results'), 'Search feature displays incorrect results in case there are no metches');
    // });

//   });
  
//   // Each implemented test gives you 20 points (max total - 40)
//   describe("Search results sorting", function() {
//     it("correctly arranges items when using 'by price' sorting", function() {
//         browser.url(`/`)
//         const enterSearchValue = $('input.form-control').setValue('Duck')
//         browser.keys(['Enter'])
//         browser.pause(2000)
//         const btnSortByPrice = $('a[href*="sort=price"]')
//         btnSortByPrice.click()
//         let searchedProductArray = $$('#box-search-results .product-column a[data-price]')
//         const searchedPricesArray = searchedProductArray.map((price) => {
//             return price.getAttribute('data-price');
//         })
//         console.log(searchedPricesArray)
//         assert(searchedPricesArray === searchedPricesArray.sort(), 'Prducts sorted by Price incorrectly!')
//     });
  
    // it("correctly arranges items when using 'by name' sorting", function() {
    //     browser.url(`/`)
    //     const enterValidSearchValue = $('input.form-control').setValue('Duck')
    //     browser.keys(['Enter'])
    //     browser.pause(2000)
    //     const btnSortByPrice = $('a[href*="sort=name"]')
    //     btnSortByPrice.click()
    //     let searchedProductsArray = $$('#box-search-results .product-column a')
    //     const searchedPricessArray = searchedProductsArray.map((name) => {
    //         return name.getAttribute('title');
    //     })
    //     console.log(searchedPricessArray)
    //     assert(searchedPricessArray === searchedPricessArray.sort(), 'Prducts sorted by Price incorrectly!')
    // });
//   });
  
//   // BONUS LEVEL - this test gives you 15 points
//   describe("Contact us form", function() {
//     it("must send messages to shop administration", function() {
//         const contactForm = $('form[name=contact_form]')
//         const email = `test${new Date().getTime() / 1000}@test.com`
//         browser.url(`/customer-service`)
//         contactForm.$('input[name="name"]').setValue('User')
//         contactForm.$('input[name="email"]').setValue(email)
//         contactForm.$('input[name="subject"]').setValue('Test Subject')
//         contactForm.$('textarea[name="message"]').setValue('Test Message')
//         browser.pause(10000)
//         $('button[name="send"]').click()
//         browser.pause(4000)
//         const alert = $('#notices .alert-success')

//         assert(alert.isDisplayed(), `Expected success alert confirmes sending Email`);

//         const alertText = alert.getText()
//         const expectedText = 'Your email has successfully been sent'
//         assert(alertText.includes(expectedText),
//             `Alert text: "${alertText}" to match expected: "${expectedText}", after successful sending Email`)
//     });
// }); 