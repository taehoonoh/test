var pop = document.querySelector('.pop');
var popImg = pop.querySelector('.pop img');
var popFig = pop.querySelector('figcaption')
var container = document.querySelector('.container');
var bt = pop.querySelectorAll('a')


var imgList = container.querySelectorAll('.gallery img');
var imgFig = container.querySelectorAll('figcaption');


popImg.addEventListener('click',function(){

   pop.classList.remove('ly-pop');
});

// popup
for(let i =0; i<imgList.length; i++){
imgList[i].addEventListener('click',function(){
    pop.classList.add('ly-pop');
    popImg.src = imgList[i].src;
    popFig.textContent = imgFig[i].textContent

});
}

// prev
bt[0].addEventListener('click',function(){
for(let k=0; k<imgList.length;k++){

popImg.src = imgList[k].src

console.log(imgList[k]);
popFig.textContent = imgFig[k].textContent
}
});

// next
bt[1].addEventListener('click',function(){
for(var k=0; k<imgList.length;k--){

        popImg.src = imgList[k].src;
        popFig.textContent = imgFig[k].textContent
        }

});

