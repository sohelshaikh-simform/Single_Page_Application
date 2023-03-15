
var buttonLeft = document.getElementById('scroll-left');
var buttonRight = document.getElementById('scroll-right');
var x = document.querySelectorAll('#All-Products .row')


var l = x.length;
// console.log(l);
var p = 0;
hideLeft();//hide the left button in start        
buttonLeft.onclick = function () {//if user clicks left button scroll the bar to left by 190px
    p += 500;
    x.forEach((x) => {
        x.style.transition = '4s';
        x.style.transform = `translateX(${p}px)`;
    });
    hideLeft();//handle the left button if necessary            
    hideRight();//handle the right button if necessary        
};

buttonRight.onclick = function () {//if user clicks right button scroll the bar to right by 190px
    p -= 500;
    x.forEach((x) => {
        x.style.transition = '4s';
        x.style.transform = `translateX(${p}px)`;
    });
    //  console.log(p, -((l - 6) * 190));
    hideLeft();//handle the left button if necessary 
    hideRight();//handle the right button if necessary  
};
function hideLeft() {//function to handle left button 
    if (p == 0) {
        buttonLeft.style.display = 'none';
    }
    else {
        buttonLeft.style.display = 'block';
    }
}
function hideRight() {//function to handle right button 
    if (p <= -((l - 1) * 300)) {
        buttonRight.style.display = 'none';
    } else {
        buttonRight.style.display = 'block';
    }
}



// Pop up Box
let popup=document.querySelector(".pop-up");
let close=document.querySelector(".cross")
function contact() {
       popup.classList.add("show");
    }
const form = document.getElementById("form");

close.addEventListener("click", ()=>{
    popup.classList.remove("show");
});
form.addEventListener("submit", sub);
function sub(e){
        e.preventDefault();
}




















// function sub(e) {
//     e.preventDefault();
//     img = document.getElementById("price").value;
//     price = document.getElementById("price").value;
//     heading = document.getElementById("heading").value;
//     info = document.getElementById("info").value;
//     console.log(price, heading);
//     // alert("Hi sohel");
//     // console.log(card);
//     let len = document.querySelectorAll(".gallery .row-container .row").length
//     console.log(len);

    // let div1 = document.createElement('div');
    // div1.classList.add("row")
    // div1.innerHTML =
    //     `<img src="images/food1.png" alt="">
    //                 <div class="content">
    //                     <h2>${heading}</h2>
    //                     <p>${info}</p>
    //                 </div>`
    // document.querySelector(".services .row-container").appendChild(div1);
    // let len2 = document.querySelectorAll(".services .row-container .row").length
    // console.log(len2);
    
    // let div3=document.createElement('div');
    // div3.classList.add("row")
    // div3.innerHTML =  `
    // <img src="images/simla.avif" alt=""><button class="package">99999$</button><div class="content"><h2>Ahmedabad</h2><p>CONTEEE</p></div>`;
    // console.log(div3);
    // document.querySelector(".gallery .row-container").appendChild(div3);
    // document.querySelector(".gallery .row-container").appendChild(div3);
    // let len4=document.querySelectorAll(".gallery .row-container .row").length
    // console.log(len4);
// }

