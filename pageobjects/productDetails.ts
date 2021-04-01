import { BasePage } from "./base"
import {App} from '../pageobjects/application'
import { ProductDetailsModel } from "../models/ProductDetails"

export class ProductDetailsPage extends BasePage {

    getDiscountPrice() {
        const discontPrice = $('form .campaign-price')
        return discontPrice
    }

    sizeSelect(size: string) {
        const selectSizeDropDown = $('select[name="options[Size]"]')
        selectSizeDropDown.selectByVisibleText(size)
    }

    public getProductPrice() {
        return parseFloat($('#box-product')
            .getAttribute('data-price'))
    }

    public getProductQuantity() {
        return $('#box-checkout-cart input[value]')
    }

    public getProductName(): string {
        return $('h1.title').getText()
    }

    getProductDetails(): ProductDetailsModel {
        const productDetails = new ProductDetailsModel()

        productDetails.name = this.getProductName()
        productDetails.price = this.getProductPrice()

        return productDetails
        
    }

    getQuantity() {
        return $('input[name=quantity]')
    }

    addToCart() { 
        const currentItemsInCart = App.header.getQuantity()
        $('button[name="add_cart_product"]').click()
        browser.waitUntil(() => {
            return App.header.getQuantity() > currentItemsInCart
        }), null, `Expected items in cart to be changed.
        Current items: ${App.header.getQuantity()} items before ${currentItemsInCart}`
    }
}

export const ProductDetails = new ProductDetailsPage()