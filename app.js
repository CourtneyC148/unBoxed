// Add sto shopping cart

let addToCartBtn = document.querySelectorAll(".addToCartBtn");

let products = [
    {
        name: "jordan retro 13",
        tag: "mens jordans",
        price: 190.00,
        inCart: 0
    },
    {
        name: "jordan retro 13",
        tag: "mens jordans",
        price: 190.00,
        inCart: 0
    },
    {
        name: "jordan retro 13",
        tag: "mens jordans",
        price: 190.00,
        inCart: 0
    },
    {
        name: "jordan retro 13",
        tag: "mens jordans",
        price: 190.00,
        inCart: 0
    }
]

for(let i = 0; i < addToCartBtn.length; i++) {
    addToCartBtn[i].addEventListener('click', () => {
        console.log([i]);
        cartItems(products[i]);
    });
}

const onloadCartNumber = () => {
    let numOfItems = localStorage.getItem('cartItem');

    if (numOfItems) {
        document.getElementById('itemsInCart').textContent = numOfItems;
    }
}

const cartItems = (product) => {
    console.log(product);
    let numOfItems = localStorage.getItem('cartItem');
    numOfItems = parseInt(numOfItems);

    if (numOfItems) {
        localStorage.setItem('cartItem', numOfItems + 1);
        document.getElementById('itemsInCart').textContent = numOfItems + 1;
    } else {
        localStorage.setItem('cartItem', 1);
        document.getElementById('itemsInCart').textContent = 1;
    }
    
}

onloadCartNumber();