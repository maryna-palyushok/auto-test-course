import { expect } from 'chai'
import {App} from '../../pageobjects/application'

describe('Cart', function() {
    beforeEach(function () {
        browser.deleteAllCookies();
    })
    it.only('can add item', function() {
        App.product.open('/rubber-ducks-c-1/red-duck-p-3')
        App.product.addToCart()
        App.checkout.open( )
        expect(App.checkout.isItemsInCart()).to.be.true
    })

    it('can add correct item', function () {
        App.product.open('/rubber-ducks-c-1/red-duck-p-3')
        const productDetails = App.product.getProductDetails()
        
        console.log('$$$$productDetails', productDetails.toString())        

        App.product.addToCart()

        App.checkout.open()
        expect(App.checkout.isItemsInCart()).to.be.true

        const productNameInCart = App.checkout.shoppingCart.items[0].getProductName()
        const productPriceInCart = App.checkout.shoppingCart.items[0].getProductPrice()

        console.log('productNameInCart', productNameInCart)
        console.log('productPriceInCart', productPriceInCart)

        expect(productNameInCart).to.equal(productDetails.name)
        expect(productPriceInCart).to.equal(productDetails.price)
    })
    it("cart`s badge is successfuly changed regarding to number of purchases", function() {
        App.product.open('/rubber-ducks-c-1/red-duck-p-3')
        App.product.addToCart()
        let quantity = App.header.getQuantity()
        expect(quantity.match('1'))
        
    });
    it("is successful for discounted item", function() {
        App.product.open('/rubber-ducks-c-1/subcategory-c-2/yellow-duck-p-1')
        const discountPrice = App.product.getDiscountPrice().getText()
        App.product.sizeSelect('Large')
        App.product.addToCart()
        App.checkout.open()
        
        const productPriceInCart = App.checkout.shoppingCart.items[0].getProductPrice()
        
        expect(discountPrice.match(productPriceInCart.toString()))
    });

    it("is successful for 2 same items in card", function() {
        App.product.open('/rubber-ducks-c-1/red-duck-p-3')
        App.product.getQuantity().setValue('2')
        App.product.addToCart()
        App.checkout.open()
        const cartQuantity = App.product.getProductQuantity().getText()
        expect(cartQuantity.match('2'))
    });

    it("is successful for 2 different items in card", function() {
        
        App.product.open('/rubber-ducks-c-1/red-duck-p-3')
        const productDetailsProduct1 = App.product.getProductDetails()
        App.product.addToCart()
        App.product.open('rubber-ducks-c-1/blue-duck-p-4')
        const productDetailsProduct2 = App.product.getProductDetails()
        App.product.addToCart()
        App.checkout.open()
        
        let productNameInCartProduct1 = App.checkout.shoppingCart.items[0].getProductName()
        let productPriceInCartProduct1 = App.checkout.shoppingCart.items[0].getProductPrice()
        
        expect(productNameInCartProduct1).to.equal(productDetailsProduct1.name)
        expect(productPriceInCartProduct1).to.equal(productDetailsProduct1.price)
        
        let productNameInCartProduct2 = App.checkout.shoppingCart.items[1].getProductName()
        let productPriceInCartProduct2 = App.checkout.shoppingCart.items[1].getProductPrice()
        
        expect(productNameInCartProduct2).to.equal(productDetailsProduct2.name)
        expect(productPriceInCartProduct2).to.equal(productDetailsProduct2.price)
        
    });
})