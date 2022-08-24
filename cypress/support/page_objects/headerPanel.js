import {HeaderPanelElements} from "../selectors";

class HeaderPanel {

    verifyCartBubbleNumber(expNumber) {
        cy.get(HeaderPanelElements.CART_BUBBLE_NUMBER_LABEL).should('have.text', expNumber)
    }

    openCart() {
        cy.get(HeaderPanelElements.CART_BUTTON).click()
    }

    typeIntoSearchField(value) {
        cy.get(HeaderPanelElements.SEARCH_INPUT).type(value)
    }

    pressSearchButton() {
        cy.get(HeaderPanelElements.SEARCH_BUTTON).click()
    }
}

export const onHeaderPanel = new HeaderPanel()