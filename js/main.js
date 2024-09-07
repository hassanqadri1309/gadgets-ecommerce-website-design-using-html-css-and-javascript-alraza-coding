let burger_icon = document.querySelector(".burger_icon");
let nav_ul = document.querySelector(".nav_ul");
burger_icon.addEventListener("click",()=>{
    if(burger_icon.classList.contains("fa-bars")){
        burger_icon.classList.remove("fa-bars")
        burger_icon.classList.add("fa-xmark")
        nav_ul.classList.add('active');
    }
    else{
        burger_icon.classList.add("fa-bars")
        burger_icon.classList.remove("fa-xmark")
        nav_ul.classList.remove('active');
    }
})

// filter gallery 
let filter_btn = document.querySelector(".section-btn").querySelectorAll(".btn");
let filter_item = document.querySelector(".grid-row").querySelectorAll(".col");
filter_btn.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        filter_btn.forEach((btn)=>{
            btn.classList.remove("active");
        })
        e.target.classList.add("active");
        let data_btn = btn.getAttribute('data-btn');
        filter_item.forEach((item)=>{
        let data_item = item.getAttribute('data-item');
        if(data_btn==data_item || data_btn=="all"){
            item.classList.remove("hide")
        }else{
            item.classList.add("hide");
        }
        })
    })
})

// discount countdown
let end_day = new Date("may 25, 2024 23:59:59").getTime();
let counDown = setInterval(()=>{
    let now = new Date().getTime();
    let distance = end_day - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    let day_sec = document.querySelector(".day").textContent = days;
    let hour_sec = document.querySelector(".hour").textContent = hours;
    let min_sec = document.querySelector(".mint").textContent = minutes;
    let second_sec = document.querySelector(".sec").textContent = seconds;
    if(distance<0){
        clearInterval(counDown);
    }
},1000)
