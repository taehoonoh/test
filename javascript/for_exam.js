// <!-- 함수종류

// function f1(){할일};
// f1();

// var 변수명 = function(){};

// (funtion(){}); -->



    function fun(){

        var x  = prompt('덧셈 첫번째 숫자를 입력하세요');
        var y  = prompt('덧셈 두번째 숫자를 입력하세요');
        var hi = document.getElementById('result');
    
        hi.textContent = parseInt(x)+parseInt(y);
        }
    
    
        // var hi = document.getElementById('result');
        // hi.onclick=() => {  
        //     var x  = prompt('덧셈 첫번째 숫자를 입력하세요');
        //     var y  = prompt('덧셈 두번째 숫자를 입력하세요');
    
        //     hi.textContent = parseInt(x)+parseInt(y)
        // }
    
    
    
    
        function fun2(){
        var x  = document.getElementsByClassName('calc-x');
    ;
        var y  = document.getElementsByClassName('calc-y');
    
        var sum = Number(x[0].value) + Number(y[0].value);
    
        var gohome = document.getElementById('go')
    
    
        gohome.value = sum;
        }
    
    
    // 전역변수와 지역변수
    
    // var gohome = document.getElementById('go')
    // gohome.onclick= fun2()=>{
    //     var x  = document.getElementsByClassName('calc-x');
    // ;
    //     var y  = document.getElementsByClassName('calc-y');
    
    //     var sum = Number(x[0].value) + Number(y[0].value);
    
    //     gohome.value = sum;
    // };
    
    
    
    
    //ex2 다중함수결과물얻기
    
var result = document.querySelectorAll('.result input');
 var number = document.querySelectorAll(".number input");

for(var i =0;i<number.length;i++){
    number[i].onclick = function (){
        
        if(result[0].value == 0){
            result[0].value = '';
        }

        result[0].value += this.value;
    }
}

result[1].onclick = function(){
    var total = eval(result[0].value)
    result[0].value = total;
}

result[2].onclick =()=>{
    result[0].value = 0;
}


// var a = "[0,2,5,8,7,8,10]";
// console.log(typeof eval(a));
// // eval ""을 지우고 인식


// 랜덤함수
var ran = Math.floor(Math.random()*43);
var ran1 = Math.floor(Math.random()*43);
var ran2 = Math.floor(Math.random()*43);
var ran3 = Math.floor(Math.random()*43);
var ran4 = Math.floor(Math.random()*43);
var ran5 = Math.floor(Math.random()*43);

console.log(ran)
console.log(ran1)
console.log(ran2)
console.log(ran3)
console.log(ran4)
console.log(ran5)




// 출석체크

var sCheck = document.querySelector(".study-check");
var input = sCheck.querySelector('div input');
var tbody = sCheck.querySelector('tbody');

var checkcheck1 = document.getElementById('check1')
var checkcheck2 = document.getElementById('check2')




checkcheck1.value= ""

checkcheck2.onclick = function(){
    var name = checkcheck1.value;
    var i = 2;
    this.onclick = function(){
    
       if(i<10){
        i = "0"+i
        }  
        tbody.innerHTML += "<tr><td>"+i+"</td><td>"+name+"</td></tr>";
        i++
  
    
}
} 



// alert("입력값이 없습니다.");










