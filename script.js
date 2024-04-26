const men = document.getElementById("men");
const women = document.getElementById("women");
const kids = document.getElementById("kids");

var header = document.getElementById("choices");
var btns = header.getElementsByClassName("btn");

async function getData(){
    const promise = await fetch("https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json");
    return await promise.json();
}

//     const result = await getData();
//     console.log(result);

//     const cardsContainer = document.querySelector('.cards-container');
//     cardsContainer.innerHTML = '';

//     result.categories[0].category_products.forEach(product => {
//         const card = document.createElement('div');
//         card.classList.add('cards');
        
//         const img = document.createElement('img');
//         img.classList.add('card-img');
//         img.src = product.image;
//         img.alt = product.title;
//         img.width = 200;
//         img.height = 290;

//         const badge = document.createElement('div');
//         if(product.badge_text!=null){
//             badge.classList.add('badge');
//             badge.innerText = product.badge_text;
//         }

//         const desc = document.createElement('div');
//         desc.classList.add('desc');
        
        
//         const title = document.createElement('h3');
//         title.innerText = product.title;
//         const dot = document.createElement('img');
//         dot.classList.add('dot_img');
//         dot.src = "./images/dot.png";
        

//         const vendor = document.createElement('p');
//         vendor.innerText = product.vendor;

//         const priceContainer = document.createElement('div');
//         priceContainer.classList.add('price-container');

//         const price = document.createElement('h4');
//         price.innerText = `Rs ${product.price}`;

//         const orgPrice = document.createElement('p');
//         orgPrice.innerText = product.compare_at_price;

//         const discount = document.createElement('p');
//         discount.classList.add('dis')
//         const disValue = Math.floor((parseInt(product.compare_at_price)-parseInt(product.price))/parseInt(product.compare_at_price)*100);
//         discount.innerText = `${disValue}% Off`

//         const addToCartBtn = document.createElement('button');
//         addToCartBtn.innerText = 'Add to Cart';
//         addToCartBtn.classList.add('add_btn')

//         desc.appendChild(title);
//         desc.appendChild(dot);
//         desc.appendChild(vendor);
        
//         priceContainer.appendChild(price);
//         priceContainer.appendChild(orgPrice);
//         priceContainer.appendChild(discount);

//         card.appendChild(img);
//         card.appendChild(badge)
//         card.appendChild(desc);
//         card.appendChild(priceContainer);
//         card.appendChild(addToCartBtn);

//         cardsContainer.appendChild(card);
//     });
// });
men.addEventListener('click', async () => {
    const result = await getData();
    console.log(result);

    const cardsContainer = document.querySelector('.cards-container');
    cardsContainer.innerHTML = '';

    result.categories[0].category_products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('cards');
        
        const imgContainer = document.createElement('div'); 
        imgContainer.classList.add('img-container');

        const img = document.createElement('img');
        img.classList.add('card-img');
        img.src = product.image;
        img.alt = product.title;
        img.width = 200;
        img.height = 290;

        const badge = document.createElement('div');
        if(product.badge_text!=null){
            badge.classList.add('badge');
            badge.innerText = product.badge_text;
        }
        
        const desc = document.createElement('div');
        desc.classList.add('desc');
        
        const title = document.createElement('h3');
        title.innerText = product.title;
        const dot = document.createElement('img');
        dot.classList.add('dot_img');
        dot.src = "./images/dot.png";

        const vendor = document.createElement('p');
        vendor.innerText = product.vendor;

        const priceContainer = document.createElement('div');
        priceContainer.classList.add('price-container');

        const price = document.createElement('h4');
        price.innerText = `Rs ${product.price}`;

        const orgPrice = document.createElement('p');
        orgPrice.innerText = product.compare_at_price;

        const discount = document.createElement('p');
        discount.classList.add('dis');
        const disValue = Math.floor((parseInt(product.compare_at_price)-parseInt(product.price))/parseInt(product.compare_at_price)*100);
        discount.innerText = `${disValue}% Off`;

        const addToCartBtn = document.createElement('button');
        addToCartBtn.innerText = 'Add to Cart';
        addToCartBtn.classList.add('add_btn');

        imgContainer.appendChild(img);
        imgContainer.appendChild(badge);
        card.appendChild(imgContainer); 

        desc.appendChild(title);
        desc.appendChild(dot);
        desc.appendChild(vendor);
        
        priceContainer.appendChild(price);
        priceContainer.appendChild(orgPrice);
        priceContainer.appendChild(discount);

        card.appendChild(desc);
        card.appendChild(priceContainer);
        card.appendChild(addToCartBtn);

        cardsContainer.appendChild(card);
    });
});

women.addEventListener('click', async () => {
    const result = await getData();
    console.log(result);

    const cardsContainer = document.querySelector('.cards-container');
    cardsContainer.innerHTML = '';

    result.categories[1].category_products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('cards');
        
        const imgContainer = document.createElement('div'); 
        imgContainer.classList.add('img-container');

        const img = document.createElement('img');
        img.classList.add('card-img');
        img.src = product.image;
        img.alt = product.title;
        img.width = 200;
        img.height = 290;

        const badge = document.createElement('div');
        if(product.badge_text!=null){
            badge.classList.add('badge');
            badge.innerText = product.badge_text;
        }
        
        const desc = document.createElement('div');
        desc.classList.add('desc');
        
        const title = document.createElement('h3');
        title.innerText = product.title;
        const dot = document.createElement('img');
        dot.classList.add('dot_img');
        dot.src = "./images/dot.png";

        const vendor = document.createElement('p');
        vendor.innerText = product.vendor;

        const priceContainer = document.createElement('div');
        priceContainer.classList.add('price-container');

        const price = document.createElement('h4');
        price.innerText = `Rs ${product.price}`;

        const orgPrice = document.createElement('p');
        orgPrice.innerText = product.compare_at_price;

        const discount = document.createElement('p');
        discount.classList.add('dis');
        const disValue = Math.floor((parseInt(product.compare_at_price)-parseInt(product.price))/parseInt(product.compare_at_price)*100);
        discount.innerText = `${disValue}% Off`;

        const addToCartBtn = document.createElement('button');
        addToCartBtn.innerText = 'Add to Cart';
        addToCartBtn.classList.add('add_btn');

        imgContainer.appendChild(img);
        imgContainer.appendChild(badge);
        card.appendChild(imgContainer);

        desc.appendChild(title);
        desc.appendChild(dot);
        desc.appendChild(vendor);
        
        priceContainer.appendChild(price);
        priceContainer.appendChild(orgPrice);
        priceContainer.appendChild(discount);

        card.appendChild(desc);
        card.appendChild(priceContainer);
        card.appendChild(addToCartBtn);

        cardsContainer.appendChild(card);
    });
});

kids.addEventListener('click', async () => {
    const result = await getData();
    console.log(result);

    const cardsContainer = document.querySelector('.cards-container');
    cardsContainer.innerHTML = '';

    result.categories[2].category_products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('cards');
        
        const imgContainer = document.createElement('div'); 
        imgContainer.classList.add('img-container');

        const img = document.createElement('img');
        img.classList.add('card-img');
        img.src = product.image;
        img.alt = product.title;
        img.width = 200;
        img.height = 290;

        const badge = document.createElement('div');
        if(product.badge_text!=null){
            badge.classList.add('badge');
            badge.innerText = product.badge_text;
        }
        
        const desc = document.createElement('div');
        desc.classList.add('desc');
        
        const title = document.createElement('h3');
        title.innerText = product.title;
        const dot = document.createElement('img');
        dot.classList.add('dot_img');
        dot.src = "./images/dot.png";

        const vendor = document.createElement('p');
        vendor.innerText = product.vendor;

        const priceContainer = document.createElement('div');
        priceContainer.classList.add('price-container');

        const price = document.createElement('h4');
        price.innerText = `Rs ${product.price}`;

        const orgPrice = document.createElement('p');
        orgPrice.innerText = product.compare_at_price;

        const discount = document.createElement('p');
        discount.classList.add('dis');
        const disValue = Math.floor((parseInt(product.compare_at_price)-parseInt(product.price))/parseInt(product.compare_at_price)*100);
        discount.innerText = `${disValue}% Off`;

        const addToCartBtn = document.createElement('button');
        addToCartBtn.innerText = 'Add to Cart';
        addToCartBtn.classList.add('add_btn');

        imgContainer.appendChild(img);
        imgContainer.appendChild(badge);
        card.appendChild(imgContainer);

        desc.appendChild(title);
        desc.appendChild(dot);
        desc.appendChild(vendor);
        
        priceContainer.appendChild(price);
        priceContainer.appendChild(orgPrice);
        priceContainer.appendChild(discount);

        card.appendChild(desc);
        card.appendChild(priceContainer);
        card.appendChild(addToCartBtn);

        cardsContainer.appendChild(card);
    });
});

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
  }