var pop = document.querySelector('.pop');

var popImg = pop.querySelector('img');
var popFig = pop.querySelector('figcaption');


var galUl = document.querySelector('ul');
var galImg = galUl.querySelectorAll('img');
var galFig = galUl.querySelectorAll('figcaption');

var btn = pop.querySelectorAll('a');

pop.style.display = "none";

var dNum;

galUl.addEventListener('click',function(e){

    dNum = e.target.dataset.num;

    pop.style.display = "flex";

    Fun();
});

pop.addEventListener('click',function(){

    pop.style.display = "none";
});

btn[0].addEventListener('click',function(){
event.preventDefault();
event.stopPropagation();

dNum--;
Fun();

});

btn[1].addEventListener('click',function(){
    event.preventDefault();
    event.stopPropagation();
    dNum++;
   
    Fun();

    });



function Fun(){
    for(var i =0; i<btn.length;i++){
        btn[i].style.display = "block";
    };
    if(dNum==0){
        btn[0].style.display = "none";
    }else if(dNum==5){
        btn[1].style.display = "none";
    };

 
        popImg.src = galImg[dNum].src
        popFig.textContent = galFig[dNum].textContent;
}
