let btn = document.querySelectorAll(".btn-tab");
let tab_container = document.querySelectorAll(".tab-content-text")
btn.forEach((btns,index)=>{
    btns.addEventListener("click",(e)=>{
         btn.forEach((btn)=>{
            btn.classList.remove("active")
         })
        e.target.classList.add("active")
        tab_container.forEach((tab)=>{
            tab.classList.remove("active");
        })
        tab_container[index].classList.add("active")
    })
})

let main_product = document.querySelector(".main-product-img");
let small_product = document.querySelectorAll(".small-img-product");

small_product.forEach((pro)=>{
    pro.addEventListener("click",()=>{
        main_product.src = pro.src
    })
})