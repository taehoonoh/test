//ex1
window.addEventListener('DOMContentLoaded',function(){
    

    var ex1 = document.querySelector('#ex1');
    var menuTrigger = ex1.querySelector('.menu-trigger');
    var nav = ex1.querySelector('.nav');

    menuTrigger.addEventListener('click',function(){



        this.classList.toggle('active-1'); //x모양
        // nav.classList.toggle('active');

        this.style = "border: 5px solid tomato;";

        if(this.classList.contains('active-1')){
            nav.classList.add('active');
        }else{ nav.classList.remove('active');
    }

    });



    // for(var i = 0; i<tabCon.length;i++){

    //     tabLi[i].addEventListener('click', function(){


    //         this.className = 'active';
    //         tabCon[i].className ='active';
    //     });
    // }

















    // tab.addEventListener('click',function(e){

    //     console.log(e.target);
    //    var data = e.target.dataset.id;

    //    for(var i =0;i<tabCon.length;i++){
            
    //     tabCon[i].className = '';
        
    // }

    //     e.target.className = 'active';

    //     tabcon[data].className = 'active';   
        
       
    // });





    var ex2 = document.querySelector('#ex2');

    var tab = ex2.querySelectorAll('ul li');

    var tabCon = ex2.querySelectorAll('.box .tab-con');
  
    var tabLi = ex2.querySelectorAll('.tab li');


    for(var i =0; i<3; i++){

        tab[i].addEventListener('click',function(){
            
            for(var i =0; i<3; i++){
                tab[i].classList.remove('active');
            }
            // var haha = ex2.querySelector('.active');

            // if(haha.classList.contains('active')){
            //     haha.classList.remove('active');
            // }


            this.classList.add('active');
        })


        
    }


    // tab[0].addEventListener('click',function(){

    //     tab[0].classList.add('active');
    //     tab[1].classList.remove('active');
    //     tab[2].classList.remove('active');
    // });

    // tab[1].addEventListener('click',function(){

    //     tab[1].classList.add('active');
    //     tab[0].classList.remove('active');
    //     tab[2].classList.remove('active');
    // });

    // tab[2].addEventListener('click',function(){

    //     tab[2].classList.add('active');
    //     tab[0].classList.remove('active');
    //     tab[1].classList.remove('active');
    // });
























});