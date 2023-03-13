
var buttonLeft =document.getElementById('scroll-left');
var buttonRight=document.getElementById('scroll-right');
var x=document.querySelectorAll('#All-Products .row')


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
    if (p <= -((l-1) * 300)) {
        buttonRight.style.display = 'none';
    } else {
        buttonRight.style.display = 'block';
    }
}