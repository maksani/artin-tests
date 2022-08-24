import {HeaderPanelElements} from "../selectors";

class HomePage {

    /**
     * Navigates through the categories
     * @param categories either single category name or sequence in the format:
     *        Category > SubCategory1 > SubCategory2 > SubCategoryN
     */
    selectProductsCategory(categories) {
        cy.get(HeaderPanelElements.CATEGORIES_MENU_BUTTON).click()
        const subCategories = categories.split(' > ')
        const last = subCategories.slice(-1)
        subCategories.forEach(category => cy.get(`li[title='${category}']`).trigger('mouseover'))
        cy.get(`li[title='${last}']>a`).click()
    }

}

export const onHomePage = new HomePage();
