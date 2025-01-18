console.log("--- Page 4 ---");

const productUrl = "../data/products.json";

// Opdracht 4a 
//data uit de link halen
fetch('../data/products.json').then(response => response.json()).then(data => {
    for (const product of data) {
        console.log(product);
    }
})

//use this function to generate the card for the product
function generateProductCard(product) {
    const card = `
        <div class="card">
            <div class="product-information">
                <h2>${product.title}</h2>
                <p>${product.description}</p>
                <p class="product-price">€${product.price}-</p>
            </div>
            <div class="product-image">
                <img src="../images/product.png" alt="product" srcset="" width="60" height="60">
            </div>
        </div>
    `;
    return card;
}


// Opdracht 4b 

const cardContainer = document.querySelector('.container');
//data uit de link halen voor de card
fetch('../data/products.json').then(response => response.json())
    .then(data => {
        for (const product of data) {
            //card van de function halen
            const cardCode = generateProductCard(product);
            cardContainer.innerHTML += cardCode;
        }
    })
