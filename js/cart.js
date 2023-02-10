window.addEventListener("load", init);

function init() {

    let cart = {
        product: [],
        totalPrice: countTotalPrice(),
        quantityProducts: cart.product.length,
    }

    let product1 = {
        title: "1",
        description: "111",
        price: 10,
        quantity: 2,
        addInCart: function () {
            cart.product.push(this);
        }
    }

    let product2 = {
        title: "2",
        description: "2",
        price: 11,
        quantity: 3,
        addInCart: function () {
            cart.product.push(this);
        }
    }

    function countTotalPrice() {
        let totalPrice = 0
        cart.product.forEach(element => {
            totalPrice = totalPrice + element.price * element * quantity;
        });
    }


    product1.addInCart();
    product2.addInCart();
}


