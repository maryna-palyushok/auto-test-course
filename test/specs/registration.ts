import * as assert from 'assert';     

describe('User registration', function () {
    it('can register', function () {
        browser.url(`/create_account`)

        const registrationForm = $('#box-create-account')

        registrationForm.$('input[name="firstname"]').setValue('Test')
        registrationForm.$('input[name="lastname"]').setValue('Test')
        const countrySelect = $('select[name="country_code"]')
        countrySelect.selectByVisibleText('Ukraine')
        
        const email = `test${new Date().getTime() / 1000}@test.com`
        
        registrationForm.$('input[name="email"]').setValue(email);
        registrationForm.$('input[name="phone"]').setValue('+3804411111111')
        registrationForm.$('input[name="password"]').setValue(email)
        registrationForm.$('input[name="confirmed_password"]').setValue(email)
        registrationForm.$('input[name="terms_agreed"]').click()
        
        $('button[name="create_account"]').click()
  
        const alert = $('#notices .alert-success')
        alert.waitForDisplayed(null, null, `Expected success alert to be viaible after registration`)

        const expectedText = 'Your customer account has been created'
        let lastResult = null;
        browser.waitUntil(() => {
            try {
                let lastResult = alert.getText();
                return lastResult.includes(expectedText)
            }catch (err) { 
                return false
            }
        }), null, `Alert text: "${lastResult}" to match expected: "${expectedText}", after successful registration`
        
        
        // const alertText = alert.getText()
        // const expectedText = 'Your customer account has been created'
        // assert(alertText.includes(expectedText),
        //     `Alert text: "${alertText}" to match expected: "${expectedText}", after successful registration`)
    })
})
