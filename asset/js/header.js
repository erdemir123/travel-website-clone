const header = document.querySelector("header")
window.addEventListener("scroll",()=>{
    
    if(window.scrollY>0){
        header.classList.add("active")
    }
    else{
        header.classList.remove("active")
    }
})
const search = document.querySelector("#search-btn")
const search_div= document.querySelector(".search")
const search_close= document.querySelector("#search-close")
search.addEventListener("click",()=>{
    search_div.classList.add("active")
})
search_close.addEventListener("click",()=>{
    search_div.classList.remove("active")
})

const navbar = document.querySelector(".navbar-nav")
const menu_btn = document.querySelector("#menu-btn")
menu_btn.addEventListener("click",()=>{
    navbar.classList.toggle("active")
})


const nav_close = document.querySelector("#nav-close")
nav_close.addEventListener("click",()=>{
    navbar.classList.remove("active")
})

///google search input

const search5 = document.querySelector("#search5")
const input = document.querySelector("#input")

search5.addEventListener("click",()=>{
    let url =  'https://www.google.com/search?q='+ input.value
    window.open(url)
    confirm("dene")
})






