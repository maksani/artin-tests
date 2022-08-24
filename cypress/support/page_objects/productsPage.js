import {ProductPageElements} from "../selectors";

class ProductsPage {

    clickSortProductsByPriceDesc() {
        cy.get(ProductPageElements.SORT_BY_PRICE_DESC_LABEL).click()
            .should('have.attr', 'data-status', 'active')
    }

    addFirstNProductsToCart(number) {
        cy.get(ProductPageElements.PRODUCT_TILE).each(($product, index, $list) => {
            if (index < number) {
                cy.wrap($product).trigger('mouseover')
                    .find(ProductPageElements.ADD_TO_CART_BTN).click({force: true})
            }
        })
    }

    fillOutDeliveryAddress(city, address) {
        cy.get(ProductPageElements.DELIVERY_ADDRESS_BTN).click()
        cy.get(ProductPageElements.DELIVERY_CITY_DROPDOWN).click()
        cy.get(ProductPageElements.DELIVERY_CITY_DROPDOWN_OPTIONS).contains(city).click()
        cy.get(ProductPageElements.DELIVERY_ADDRESS_INPUT).type(address)
        cy.get(ProductPageElements.DELIVERY_ADDRESS_SUGGESTION).click()
        cy.get(ProductPageElements.DELIVERY_ADDRESS_SUBMIT_BTN).click()
    }

    verifyAllProductsContainTitle(titlePart) {
        cy.contains('Query search results').should('be.visible')
        cy.get(ProductPageElements.PRODUCT_TITLE).should('have.length.at.least', 1).each($title => {
            expect($title.text()).includes(titlePart, "Search works incorrectly")
        })
    }
}

export const onProductsPage = new ProductsPage();