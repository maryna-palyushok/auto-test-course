export class HeaderDetails {

    getQuantity() {
        let quantityBadge = $('#cart a div').getText()
        return quantityBadge
    }
}

export const Header = new HeaderDetails()