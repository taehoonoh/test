//ex1
window.addEventListener('DOMContentLoaded',function(){

var input = document.querySelectorAll('.txt-input');

var menu = document.querySelector('.menu-list')

var bt1 = document.querySelector('.add-button');
var bt2 = document.querySelector('.del-button');

// childre[]을 사용하여 부모요소 자식을 선택한다. 
//  querySlectorAll

// 결과보기
bt1.addEventListener('click', function(){

    if(input[0].value&&input[1].value != null){

  
menu.children[0].textContent =

parseInt(input[0].value)+parseInt((input[1].value));

menu.children[1].textContent =
(parseInt(input[0].value)+parseInt((input[1].value)))/2;

input[0].value= "";
input[1].value= "";
} return;


});

// 취소하기
bt2.addEventListener('click', function(){
    menu.children[0].textContent = '총점';
    menu.children[1].textContent = '평균';

    for(var i = 0; i<input.length; i++){
        input[i].value= "";
    }


});
    




var ex2 = document.querySelector('.ex2');

var classList = ex2.querySelector('.class-list');

classList.addEventListener('click',function(){

    this.className = "red";
});




var ex3 = document.querySelector('.ex3');

var k3 = ex3.querySelector('.class-list');

k3.addEventListener('click',function(){

   this.classList.add('active');
});



var ex4 = document.querySelector('.ex4');

var k4 = document.querySelector('.toggle');
// 왜 toggle 을 찍는지 모르겠음 . 


ex4.addEventListener('click',function(){

   k4.classList.toggle('on');

   k4.textContent = k4.className;

   
//    console.log(k4.classList.contains('on'));

    //console.log(k4.className=='toggle on');



});


var ex5 = document.querySelector('.ex5');
var li = ex5.querySelectorAll('.ex5 li')
var div = ex5.querySelectorAll('.ex5 li div')



for(var i =0; i<li.length; i++){
    li[i].addEventListener('click',function(e){

        console.log(e.target);
        



        for(var k = 0; k<div.length; k++){
            div[k].classList.remove('on');
        }


        

        e.target.querySelector('div').classList.toggle('on');

        // if( e.target.querySelector('div').className.remove == 'on'){
        //     e.target.querySelector('div').classList.remove('on');
        // }

       
        // this는 e li[i]

        
        
})
};


// 클릭한놈만 on 나머지 지운다 .






// var ex5 = ex5.querySelector
// var li =  ex5.querySelector
// var div = ex5.querySelector
// var faq = ex5.querySelector




// faq.addEventListener('click', function(e){

//     console.log(e.target.nodeName =='LI');

//     var liDiv = e.target.querySelector('div');
//     liDiv.classList.toggle('on');
// });























});





