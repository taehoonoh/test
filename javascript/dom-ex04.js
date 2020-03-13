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
    
    var j = 0;


    for(let i =0; i<tab.length; i++){

        tab[i].addEventListener('click',function(){
            
            // for(let i =0; i<tab.length; i++){
            //     tab[i].classList.remove('active');
            //     tabCon[i].classList.remove( 'active');
            // }
            tab[j].classList.remove('active');
            tabCon[j].classList.remove( 'active');

            this.classList.add('active');
            tabCon[i].classList.add('active');

            j=i;

        })


        
    }


 // var haha = ex2.querySelector('.active');

            // if(haha.classList.contains('active')){
            //     haha.classList.remove('active');
            // }



            

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


    

    var ex3 = document.querySelector('#ex3')
    var thum = ex3.querySelectorAll('.thum img');
    var detail = ex3.querySelector('.detail img')


    
    for(var i =0; i<thum.length; i++){

        //console.log(thum[i]);
    thum[i].addEventListener('click',function(){

        for(var i =0; i<thum.length; i++){
         
         
            thum[i].classList.remove('active');
    

            
        }         

        detail.src = this.src;

        this.classList.add('active');
        // detail[0].setAttribute('src','img/img-02.jpg');   
    });   
    
    
   
    
};
    
   
    
    //this.classList.remove('active');

        



        


















});