var span1 = document.querySelector('.toggle span:nth-of-type(1)');
var span2 = document.querySelector('.toggle span:nth-of-type(2)');
var span3 = document.querySelector('.toggle span:nth-of-type(3)');

var toggle = document.querySelector('.toggle');

var sImg = document.querySelectorAll('.pImg img');
var aImg = document.querySelector('.actor .aImg img');


var pop = document.querySelector('.menu')


sImg[2].addEventListener('click',function(){

aImg.src= "pimg/bf5efc6c596c066703933730849a9b34 (1).jpg";

})

toggle.addEventListener('click',function(){

pop.style.left = -50+"%";

})
// console.log(toggle);
// toggle.addEventListener('click',function(){

// span1.style.transform = "rotate(-40deg)";

// span2.style.transform = "rotate(40deg)";

// })
