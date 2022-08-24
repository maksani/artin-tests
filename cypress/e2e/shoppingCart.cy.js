import {onHomePage} from "../support/page_objects/homePage";
import {onProductsPage} from "../support/page_objects/productsPage";
import {onHeaderPanel} from "../support/page_objects/headerPanel";
import {onShoppingCartPage} from "../support/page_objects/shoppingCartPage";

const deliveryData = require('../fixtures/delivery_data.json')

describe('Verify shopping cart works properly', () => {

    it("Verify adding items to shopping cart and remove one", () => {
        const itemsAddNumber = 3;
        onHomePage.selectProductsCategory("Dairy and Eggs > Cheese > Pickled cheese");
        onProductsPage.clickSortProductsByPriceDesc();
        onProductsPage.fillOutDeliveryAddress(deliveryData.city, deliveryData.address)
        onProductsPage.addFirstNProductsToCart(itemsAddNumber);
        onHeaderPanel.verifyCartBubbleNumber(itemsAddNumber);
        onHeaderPanel.openCart();
        onShoppingCartPage.verifyQuantityOfItems(itemsAddNumber);
        onShoppingCartPage.removeItemFromList(2).then(title => {
            onShoppingCartPage.verifyItemIsNotInList(title);
        })
    })

    it("Verify empty shopping cart", () => {
        onHeaderPanel.openCart();
        onShoppingCartPage.verifyEmptyCartElementsAreVisible();
        onShoppingCartPage.verifyPriceAndCheckoutButtonAreHidden();
    })

})