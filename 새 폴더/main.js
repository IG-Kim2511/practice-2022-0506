
/* 
๐

selecting featured images, 


*/




// ๐js1212.sideBar ๐main.scss

let sideBar = document.querySelector('.side-bar');
let menuBtn = document.querySelector('.menu-btn');
let closeSideBar = document.querySelector('.close-side-bar');

menuBtn.addEventListener('click',()=>{
        sideBar.classList.toggle('active');
});
closeSideBar.addEventListener('click',()=>{
        sideBar.classList.remove('active');
});



// ๐js0130.searchForm ๐all html, ๐main.scss

let searchForm = document.querySelector('.search-form');  

document.querySelector('.search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

window.onscroll = () =>{
    sideBar.classList.remove('active');
    searchForm.classList.remove('active');
};


