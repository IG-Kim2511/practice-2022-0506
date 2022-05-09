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
    renderProducts_insid(dataProducts);
    
}

function renderProducts_insed(p) {

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
    });
    
}
