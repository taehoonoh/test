var input = document.querySelectorAll('.txt-input');

var bt1 = document.querySelector('.add-button');
var bt2 = document.querySelector('.del-button');

var li = document.querySelectorAll('.menu-list li');


bt1.addEventListener('click',function(){


li[0].textContent =
parseInt(input[0].value)+parseInt(input[1].value);

li[1].textContent =
(parseInt(input[0].value)+parseInt(input[1].value))/2;
});




bt2.addEventListener('click',function(){
    li[0].textContent = "총점"
    li[1].textContent = "평균"
});


// ex4

var ex4 = document.querySelector('.ex4');
var div = ex4.querySelector('div');

ex4.addEventListener('click',function(){

    div.classList.toggle('on');
});




// ex5

var ex5 = document.querySelector('.ex5');

var li = document.querySelectorAll('.faq li')

var liDiv = document.querySelectorAll('.faq li div');

var faq = document.querySelectorAll('.faq')

for(var i = 0; i<li.length; i++){
    li[i].addEventListener('click',function(e){
        var add = e.target.querySelector('div');
        

       
            add.classList.toggle('on');

        


      

        

    

    });
};


