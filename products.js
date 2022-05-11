// variable

// js13. fa-cart-arrow-down
// let cart =[];
let cart = JSON.parse(localStorage.getItem('CART')) || [];

// js637 . taostify

const Toast = ()=> {
    Toastify({
        text: "added on cart",
        duration: 3000,
        destination: "./cart.html",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
}

// js0211.fa-sketch

const url = `https://fakestoreapi.com/products/`;


// js417. fetch dataproducsts , instock, numberofunit, object

// addto cart

let dataProducts =[];
console.log(dataProducts)

// 🥒 js704. category
let dataProductsMen =[];
let dataProductsWomen =[];
let dataProductsJ =[];
let dataProductsE =[];
console.log(dataProductsMen)


// fetching data

function getFakeStore() {
    fetch(url)
    .then((res)=> res.json())
    .then((a_datas)=>{
        // js518. loading screen
        document.querySelector('product .heading').innerHTML = `products`;

        // js417 fetched data instock

        a_datas.forEach((p_data) => {
            dataProducts.push({
                ...p_data,
                inStock:10,
            });            
        });

        // js704. category
        a_datas.forEach((p_data) => {
            if (p_data.category === "men's clothing") {
                
                dataProductsMen.push(
                    {
                        ...p_data,
                        inStock:10,                    
                    });
            }
        });

        a_datas.forEach((p_data) => {
            if (p_data.category === "women's clothing") {
                
                dataProductsWomen.push(
                    {
                        ...p_data,
                        inStock:10,                    
                    });
            }
        });

        a_datas.forEach((p_data) => {
            if (p_data.category === "jewelery") {
                
                dataProductsJ.push(
                    {
                        ...p_data,
                        inStock:10,                    
                    });
            }
        });

        a_datas.forEach((p_data) => {
            if (p_data.category === "electronics") {
                
                dataProductsE.push(
                    {
                        ...p_data,
                        inStock:10,                    
                    });
            }
        });



        // js09. fa
        renderProducts();



    })
    
}
getFakeStore();


const boxContainer = document.querySelector('.products .box-container');
function renderProducts() {
    renderProducts_inside(dataProducts);
    
}

function renderProducts_inside(p) {

    boxContainer.innerHTML = ``;
    p.forEach((p_product)=>{
        boxContainer.innerHTML +=`
        <div class="box">
            <div class="image">
                <img src="${p_product.image}"  class="main-img" alt="${p_product.title}">                    
                <div class="icons">
                    <a class="fas fa-shopping-cart" onclick="addToCart(${p_product.id})"></a>
                    
                </div>
            </div>
            <div class="content">
                <h3>${p_product.title}</h3>
                <div class="price">$${p_product.price}</div>
 
                <div>rating ⭐ ${p_product.rating.rate}</div>
                
                <div class="price">inventory: ${p_product.inStock}</div>
                <button class="btn" onclick="addToCart(${p_product.id})">add to cart</button>
            </div>
        </div>
    `  ;
    });``
    
}


// 🍀 js704. category.....................🍚

const allElm = document.querySelector('.category .all');
const menElm= document.querySelector('.category .men');
const womenElm= document.querySelector('.category .women');
const jewelryElm= document.querySelector('.category .jewelry');
const electronicElm= document.querySelector('.category .electronic');

allElm.addEventListener('click',()=>{
    renderProducts_inside(dataProducts);
});
menElm.addEventListener('click',()=>{    
    renderProducts_inside(dataProductsMen);
});

womenElm.addEventListener('click',()=>{    
    renderProducts_inside(dataProductsWomen);
});

jewelryElm.addEventListener('click',()=>{    
    renderProducts_inside(dataProductsJ);
});

electronicElm.addEventListener('click',()=>{    
    renderProducts_inside(dataProductsE);
});


// js13 addtocart n umber of unit

function addToCart(p_id) {

    Toast();

    console.log(cart)

    if (cart.some((pp_item)=> pp_item.id ===p_id)) {

        
        changeNumberOfUnits('plus',p_id);
    } else {
        const item = dataProducts.find((pp_product)=> pp_product.id === p.id);

        console.log(item)


        cart.push(
            {
                ...item,
                numberOfUnits:1,
            }
        )
        
    }

    updateCart();
    
}

function updateCart() {   
    localStorage.setItem('CART', JSON.stringify(cart));

    console.log(cart)
}
updateCart();


// js28

function changeNumberOfUnits(p_action, p_id) {   

    cart= cart.map((p_item)=>{
        let numberOfUnits = p_item.numberOfUnits;

        if (p_item.id ===p_id) {

            if (p_action ===  "minus" && numberOfUnits > 1) {

                numberOfUnits--;
                
            } else if (p_action === "plus" && numberOfUnits < p_item.inStock) {
                numberOfUnits ++;
                
            } else if (p_action ==="plus" && numberOfUnits === p_item.inStock) {

                alert(`sorry, it's outt of stock1`);
                
            }
            
        }

        return {
            ...p_item,
            numberOfUnits:numberOfUnits,
        }
    })
    updateCart();
}


// locarstorage.fa-circle-arrow-down
const deleteAllBtn = document.querySelector('.delete-all-btn');

deleteAllBtn.addEventListener('click',()=>{
    localStorage.clear();
    location.reload();
});