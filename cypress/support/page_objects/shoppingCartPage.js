import {ShoppingCartElements} from "../selectors";

class ShoppingCartPage {

    verifyQuantityOfItems(expNumber) {
        cy.get(ShoppingCartElements.CART_ITEM).should('have.length', expNumber);
    }

    removeItemFromList(seqNumber) {
        return cy.get(ShoppingCartElements.CART_ITEM).eq(seqNumber).then($el => {
            cy.wrap($el).find(ShoppingCartElements.CART_ITEM_TITLE).invoke('text').then(title => {
                cy.wrap($el).find(ShoppingCartElements.CART_ITEM_REMOVE_BUTTON).click();
                return new Cypress.Promise((resolve, reject) => resolve(title));
            })
        })
    }

    verifyItemIsNotInList(title) {
        cy.get(ShoppingCartElements.CART_ITEM).contains(title).should('not.exist');
    }

    verifyEmptyCartElementsAreVisible() {
        cy.get(ShoppingCartElements.EMPTY_CART_ICON).should('be.visible');
        cy.contains('Your cart is empty').should('be.visible');
        cy.get(ShoppingCartElements.GO_SHOPPING_BUTTON).should('be.visible');
    }

    verifyPriceAndCheckoutButtonAreHidden() {
        cy.get(ShoppingCartElements.TOTAL_PRICE_LABEL).should('not.exist');
        cy.get(ShoppingCartElements.CHECKOUT_BUTTON).should('not.exist');
    }
}

export const onShoppingCartPage = new ShoppingCartPage();