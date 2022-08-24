import {onHeaderPanel} from "../support/page_objects/headerPanel";
import {onProductsPage} from "../support/page_objects/productsPage";

describe("Verifies search functionality", () => {

    it("Verify can search for a product", () => {
        const searchText = 'Barilla Fusilli';
        onHeaderPanel.typeIntoSearchField(searchText);
        onHeaderPanel.pressSearchButton();
        onProductsPage.verifyAllProductsContainTitle(searchText);
    })
})