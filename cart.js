
// variable
const cartItemsEl = document.querySelector('.shopping-cart .box-container');

const subTotalElm = document.querySelector('.shopping-cart .subtotal');
const taxElm = document.querySelector('.shopping-cart .tax');
const totalElm = document.querySelector('.shopping-cart .total');
const numberOfItemsElm = document.querySelector('.shopping-cart .numberOfItems');


// 🦄multi page. localstorage data ussage 

// product.js - cart
// let cart  = [];
// js 45-30 local storage

let cart = JSON.parse(localStorage.getItem("CART")) || [];