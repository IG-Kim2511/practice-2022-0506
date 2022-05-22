
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

// js 13-40. render cart items

/* 

<form>
    <span>quantity : </span>
    <input value-"${pp_item.numberofunits}">
</form>
*/

function renderCartItems(params) {
    cartItemsEl.innerHTML ="";

    cart.forEach((PP_item) => {
        cartItemsEl.innerHTML += `
        
            <div class="box">
                <i class="fas fa-xmark" onclick="removeItemFromCart(${pp_item.id})"></i>
                <img src="${pp_item.image}" alt="${pp_item.title}">
                <div class="content">
                    <h3>${pp_item.title.substring(0, 15)}..</h3>
            
                    <div class="units">
                    <div class="number"> QTY : ${pp_item.numberOfUnits}</div>
                        <button class="mybtn plus" onclick="changeNumberOfUnits('plus', ${pp_item.id})">+</button>           
                        <button class="mybtn minus" onclick="changeNumberOfUnits('minus', ${pp_item.id})">-</button>
                    </div>
                    <div class="price">$${pp_item.price}</div>
                </div>
            </div>
        `;
        
    })

 
}

// 🥨products.fa-js
function updateCart_onCart() {
    renderCartItems();
    renderSubtotal();
    console.log(cart)

    localStorage.setItem('CART',JSON.stringify(cart));
    
}
updateCart_onCart();


// 👉products.js

function changeNumberOfUnits(p_action,p_id) {

    cart = cart.map((p_item)=>{

        let numberOfUnits = p_item.numberOfUnits;

        if (p_item.id === p_id) {
            
        }




    }

    );
    
}




































// 🥨 products.js  - 🍀js13-40.update Cart  

function updateCart_onCart(params) {
    renderCartItems();
    renderSubtotal();

    console.log(cart)
    
}


/* 
🦄 🍄🚀
🍀🍉   🧨🥒 
😎😈🤢🤡🐲👅👄 
🍚🍤🍖  🍘🍙 🥨🥐🍛  🎃🎨

🎯 💊 ⚽🏓🩸🧲  📌
    
👉👇👆⚾❌⭕ 🌊🧊  ⚡
💋🌀🎈 🎨 🏓🎯 💊🩸🧲 📌 🍓🍅🍈  🔥🍚 🍤⛄  
❓❗⭕❌

(🍀home----------)

🍀 section 
🍀 js_220400 
🍉 small section 

🍚 : ~ing , bug

js_220400 :connect

🍄 : Algorithm)  , code explain
🦄 point, 알아낸것
😎 공식 (알고리즘 상위호환)
🍛 복습때 자주 잊고 틀리는것, 오답노트

(🍤 delete later) : delete later
🍤 (hard-coding) (soft-coding)
🍤 way-1 way-2 way-3
🍤 :  Tip, 중요사항




/* test용 : body 백그라운드 컬러 - red */
// document.querySelector('body').setAttribute('style', 'background-color:lightblue;');

/* 
🍀c2, JS 썼던것들 정리
(~ 뜻 : 변수, 오브젝트)

animationend, animationstart, animationiteration


🍀createElement

classlist.appendChild(document)
classlist.add
classlist.remove
classlist.toggle

.contains()
.closest()

createTextNode

~.dataset (html : data-name="#home" , JS : ~.dataset.name;)

e.preventDefault()
e.clientX, e.clientY
elapsedTime, propertyName

.focus() : open했을때 input에 커서가 깜빡이면서 이미 타이핑할 준비가 되어있음

Math.floor
Math.ceil
Math.round

Math.floor() : 소수점 마지막이 0 이면 0을 안보여줌 - 마지막 숫자...반내림

parseFloat() : 소수점 마지막이 0이어도 0을 안보여줌 - 마지막숫자에서 끊음

👉소수점 2자리에서 끊음
Math.floor(변수* 100) / 100
parseFloat(변수).toFixed(2);

👉소수점 4자리에서 끊음
parseFloat(변수).toFixed(4);  


parseInt(~~string~~) : string 👉number
~~~.toString(); : number 👉 string
 
🍀(about Height)
getBoundingClientRect().top;
pageYOffset
window.scrollY

innerHeight 
offsetTop
offsetHeight

innerHTML =
insertAdjacentHTML
insertAdjacentText
insertAdjacentElement

localStorage


location.reload();  새로고침

🍀load
load – DOM 트리를 만드는 게 완성+ 이미지등등 모두 불러오는 것이 끝났을 때 발생
DOMContentLoaded – 브라우저가 HTML을 전부 읽고 DOM 트리를 완성하는 즉시 발생
unload / beforeunload  – 사용자가 페이지를 떠날 때 발생
resize

Math.floor(Math.random()*1000);

node : parentNode, childNode, removeChild, appendChild, nodeName , children[4]

reset()

requestAnimationFrame / cancelAnimationFrame

.scrollTop
.scrollintoView
.scrollY

.scrollBy :  (코딩용... 자동으로 가장 밑으로 스크롤시키기) window.scrollBy(0, window.innerHeight);

setAttribute('style','color:red')
~.setAttribute('data-id,123)  /  ~.getAttribute('data-id)
~.setAttribute('style', 'pointer-events: none;');

.setItem(~,~);
.getItem()

🍀
setTimeout /  clearTimeout 
setInterval /  clearInterval 
requestAnimationFrame  / cancelAnimationFrame

substring

🍀
~.style.width =`${~*100}%`;  
~.style.transform = `rotateX(${mousePos.y*5}deg) rotateY(${mousePos.x*5}deg)`;
~~~.style.backgroundColor = "#ffff00";

.test()
textContent, textHTML
toggle
trim()

transitionend transitionstart

typeof ~~ 

🍀todolist공식
let div = document.createElement('div');
div.className = "alert";
div.innerHTML = "~~~";
document.body.append(div);


.value : input내용 가져오기 
.textContent : div내용 가져오기 
*/



/* 🦄 JS 문법 정리

🦄즉시함수
(function () {
  ~~~~~
})();


🦄constructor / prototype
function Card(num, color) {
    this.num = num;
    this.color = color;
    this.init();
}

Card.prototype = {
    constructor: Card,
    init: function() {
        const mainElem = document.createElement('div');
        mainElem.style.color = this.color;
        mainElem.innerHTML = this.num;
        mainElem.classList.add('card');
        document.body.appendChild(mainElem);
    }
};

const card1 = new Card(1, 'green');
const card2 = new Card(7, 'blue');



🦄 class

class Character_c {
    constructor(a_num){
        this.mainElem = document.createElement("div");
        this.mainElem.classList.add('character');
        this.mainElem.innerHTML =`
            <img src="./img/poke(${a_num}).png" alt="">
        `;
        stageElem.appendChild(this.mainElem);
    }
    sayHi(){
        console.log('prototype')
    }
}

btnC.addEventListener('click',()=>{
    let ig = new Character_c(num);  
});


🦄 class (2)
class Note {
  constructor(a, b) {
    this.title = a;
    this.body = b;
    this.id = Math.floor(Math.random() * 1000);
    console.log(this.id);
  }
}

let newNote = new Note(11, 22);
let newNote2 = new Note(1, 2);
*/


/* <🍄알고리즘>

<🍄createElement> - "🚀 cia"

  let div = document.createElement('div');
  div.className = "alert";
  div.innerHTML = `~~~~`;          
  document.body.append(div);

<🍄for + querySelectorAll 활용하기>

~~~.addEventListener('click',()=>{

    const kei = document.querySelectorAll('.items-remove');

    for (let i = 0; i < kei.length; i++) {
        kei[i].innerHTML=``;      
    }
});


  
<🍄 0~1의 값을 구하는 공식>

0. 0~1의 값을 구하는 공식 만들어서 그 값을 활용하기
1. 계속 바뀌는 값 / 고정된 값 =  0~1의 값을 구해냄 
2. 그 값을 translateZ, style.width에 사용함

🚀드림코딩
let homeHeight = home.getBoundingClientRect().height;
homeAvatar.style.opacity = 1 - window.scrollY / homeHeight;

🚀1분코딩
let maxScroll = document.body.offsetHeight - window.innerHeight;
const scrollPer= pageYOffset/ maxScroll;


<🚀> "gps io"
(계속 바뀌는 값 / 고정된 값 =  0~1의 값)

1. 계속 바뀌는 값
getBoundingClientRect().top;
pageYOffset
window.scrollY

2. 고정값
innerHeight 
offsetTop



<🍄게임 만들기 , n++>

  let n = 0;  
  btn.addEventListener("click", function () {
          n++;  
          number.innerHTML=`${n}`;
        
          if (n > 20) {
              실행하고싶은 함수코딩
        }
      });

    
<🍄e.target마우스 클릭위치 사용>

function(e){  
const mousePos = { x: 0, y: 0 };

mousePos.x = -1 + (e.clientX / window.innerWidth) * 2;
mousePos.y = 1 - (e.clientY / window.innerHeight) * 2;

~.style.transform = `rotateX(${mousePos.y*5}deg) rotateY(${mousePos.x*5}deg)`;
}


🚀.parentNode.children 활용하기 . 
10. 형제node중에서 3번째 node의 textContent가져오기
 e.target.parentNode.parentNode.children[4].textContent;

20. 
 for (let i = 0; i < itemsRemoveElem.length; i++) {       
        itemsRemoveElem[i].parentNode.remove();
  }


<  🚀암기공식 : 마우스 위치값잡는 계산식 (암기) 자주 쓰임 >
  가운데 수치가 0으로 만드는게 포인트
  left, bottom일수록 -1,
  right,top일수록 +1로 설정됨        

  
  let mousePosition={x:0,y:0};  

  window.addEventListener('mousemove',(e)=>{    
  
      mousePosition.x =(e.clientX /  window.innerWidth *5)-2.5; 🚀
      mousePosition.y =e.clientY/ window.innerWidth *5;
      
      stageElem.style.transform = `rotateX(${ mousePosition.y }deg) rotateY(${mousePosition.x}deg)`;

  });


<🍄계산하기-더하기...>

grandTotalElem += priceNumber;

<🍄키보드 만들기>
이전에 type한 것 (기존 valu) + 내가 e.target으로 type한것...화면에 보여줌

if (e.target.classList.contains('key_1')) {
  let valu = loginDisplay.value;
  loginDisplay.value=valu+'1';
}


*/


/* 🚀JS 수학 공식 정리
*/

//  🍀let 🍀const 👉 variable.js



// // 🍀function : 바로위에서 call (까먹지 않게...)

// keiventure();
// function keiventure() {
// }


// // 🍀 event Listeners
// submitBtn.addEventListener('click', init);

// submitBtn.addEventListener('keypress', (e) => {
//   if (e.key === 'enter') {
//     init;
//   }
// })

// function init() {
//   a_handler();
//   b_handler(); 
// }

// //🍀 functions 
// function a_handler() {
// }
// function b_handler() {  
// }



// //<🍄innerHTML =``안의 클래스도 버블링 가능함, event bubbling, classList.contains(~)>

// function scanner(p_dataNumber,p_dataName,p_dataPrice) {
//   let tr= document.createElement('tr');
//   tr.innerHTML=` 
//   <td><button class="remove_btn">remove</button></td>  
//   `;
//   tbody.append(tr);    
// }

// // 🍀 remove_btn.
// document.addEventListener('click',(e)=>{
//   if (e.target.classList.contains('remove_btn')) {
//       e.target.parentNode.parentNode.remove();      
//   }
// });



// //  C 58 . JS 58

// // 🍀 API
// // /covid-19/counties
// let url_usa = 'https://disease.sh/v3/covid-19/jhucsse/counties';
// let url_historical = 'https://disease.sh/v3/covid-19/historical/us?lastdays=500';


// /*🍀fetch- api-breakingbad*/
// fetch('https://www.breakingbadapi.com/api/characters')
// .then(response => response.json())
// .then(data => console.log(data));


// /*🥒 fetch- api-poke */

// const fetchPokeList = (url) => {
// fetch(url)
// .then((res) => res.json())
// .then((data) => {
//   console.log(data);
//   console.log(data.results[24].name);
//   pokeName.innerHTML=`${data.results[24].name}`;

//   // 🍉when name is match , show the other data.
//   if (data.results[24].name ==='pikachu') {
//   console.log("hello")
//   pokeUrl.innerHTML=`${data.results[24].url}`;
//   }
// });
// };

// fetchPokeList("https://pokeapi.co/api/v2/pokemon?offset=0&limit=100");

// /* 🥒 fetch 3- api- words */
// var url = "https://random-word-api.herokuapp.com/word?number=1000";

// let words = [];

// getWords();
// function getWords() {
//     fetch(url)
//     .then((res) => res.json())
//     .then((a_data) => {
//         console.log(a_data);
//         /*🍉 ~~~coding~~~ */
     
//         a_data.forEach((a) => {
//             if (a.length < 7) {
//                 words.push(a)            
//             }  
//         });
//         console.log(words)        
//     });    
// }


// // 🥒 fetch 4- api- fake store
// var url = `https://fakestoreapi.com/products/`;
// let productOver100 = [];

// getFakeStore();
// function getFakeStore() {
//     fetch(url)
//     .then((res) => res.json())
//     .then((a_datas) => {
//         console.log(a_datas);
//         /*🍉 ~~~coding~~~ */
     
//         a_datas.forEach((a_data) => {
//             if (a_data.price > 100) {
//                 productOver100.push(a_data)            
//             }  
//         });

//         console.log(productOver100)
        
//     });    
// }
 

// //🍀 axios 

// function mynaming() {

//   axios.get(url_usa)
//     .then(function (response) {
//       // handle success   
//       console.log(response)
//     })
//     .catch(function (error) {
//       // handle error
//       console.log(error);
//     })
//     .then(function () {
//       // always executed
//     });
// }

// mynaming();


// //🍀 axios /  rapidApi 사용하기

// function covidStates() {

//   const options = {
//     method: 'GET',
//     url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/covid-ovid-data/sixmonth/USA',
//     headers: {
//       'x-rapidapi-key': api.rapidApiKey,    //config안의 rapid api key를 변수로 가져옴  + source코드는 공개안하고, site만 deploy하면 아무도 알 수 없음
//       'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
//     }
//   };

//   axios.request(options).then(function (response) {
//     console.log(response.data);
//   }).catch(function (error) {
//     console.error(error);
//   });


// }
// covidStates();



