
window.addEventListener('DOMContentLoaded',function(){
    


var ex1 = document.querySelector('ex1');

var img = 
document.querySelectorAll('.img-list .thum img');

var popImg = document.querySelector('.popup img')
var popup = document.querySelector('.popup')




for(var i =0; i<img.length; i++){

    img[i].addEventListener('click',function(){


        for(var i =0; i<img.length; i++){

            img[i].classList.remove('active');

        }

        popImg.src = this.src;

        popup.style.display = "flex";
        
        this.classList.add('active');
        

    });
    
}

popImg.addEventListener('click',function(){

    popup.style.display = 'none';
})














});
    







    
    