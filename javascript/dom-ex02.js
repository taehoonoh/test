
// ex3
window.addEventListener('DOMContentLoaded',function(){

var ex3 = document.querySelector('.ex3')
var txtInput = ex3.querySelector('.txt-input3');
var btnInput = ex3.querySelector('.btn-input3');
var delInput = ex3.querySelector('.del-input3');
var txtList = ex3.querySelector('.txt-list3');


var target = null;



delInput.addEventListener('click',function(){


// 잡아서 클릭하고 삭제를 누르면 타겟삭제


//   txtList.innerHTML = null


// txtList.removeChild(txtList.lastChild);
});



btnInput.addEventListener('click',function(){

    txtList.innerHTML += "<p>"+txtInput.value+"</p>";

});


txtList.addEventListener('click',function(a){


    var target111 = a.target;
    target111.remove();
    // console.log(target111);
        
});






});





















// ex2
window.addEventListener('DOMContentLoaded',function(){

    
    var txtInput = document.querySelector('.txt-input'); 
    //텍스트필드
    var btnInput = document.querySelector('.btn-input'); 
    //추가버튼
    var txtList = document.querySelector('.txt-list');
    //텍스트추가 공간

    btnInput.addEventListener('click', function(){

        // 새로운 공간에 필드 값을 추가함
        // txtList.textContent += txtInput.value;
        

        // //텍스트필드 값을가져온다
        /* var txtValue =  txtInput.value;

        var txtNode = document.createTextNode(txtValue);
        // // 텍스트노드를 추가한다.
        txtList.append(txtNode);
        // // append */  

        var txtValue =  txtInput.value;
        txtList.innerHTML += "<p>"+txtValue+"</p>";


    });


});


// ex1
window.addEventListener('DOMContentLoaded',function(){

var ex1 = document.querySelector('.ex1');
var txt = ex1.querySelector('.txt');

txt.textContent += "안녕...";

txt.style.color = "darkblue";
txt.style.fontSize = "2em";

});

// textContent 텍스트만
// innerHTML 태그를 포함한 텍스트

