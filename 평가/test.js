
// 변수(input)
var kem = document.querySelectorAll('tr td input');
var bt = document.querySelectorAll('button');


// 변수(성적 결과표)
var userR = document.querySelector('.name');
var sum1 = document.querySelector('.sum');
var avg1 = document.querySelector('.avg');
var pf = document.querySelector('.p-f');


/*Q1. 수강생 이름을 입력하고 결과표에 출력하시오. [10점]          
- 입력한 점수를 합산하여 총점을 구하고 결과표에 출력하시오.  

A 유형) 개별 선택자를 이용하여 합산 [10점]

B 유형) 다중 선택자 및 반복문을 이용하여 합산 [20점] */


// 성적 결과표
bt[0].addEventListener('click',function(){
    


    // 수강생
    userR.textContent = kem[0].value

    // 합계
    sum1.textContent = parseInt(kem[1].value)+parseInt(kem[2].value)+parseInt(kem[3].value);
    
   
//  var sum =  parseInt(kem[1].value)+parseInt(kem[2].value)+parseInt(kem[3].value);


// 반복문으로 합계를 구하지 못했습니다..
     for(var k = 1; k <kem.length; k++){
    sum1.textContent = pareInt(kem[k].value);
};   

    
//Q2. 총점을 이용하여 평균을 구하고 결과표에 출력하시오. [10점] 

    // 평균
    avg1.textContent = sum / 3;

        var last = sum/3
    

//Q3.합격or불합격 판정을 위한 조건문을 작성하고 결과표에 출력하시오. [20점] 
        if(last>=60){
            pf.textContent = "합격"
        } else{ pf.textContent = '불합격'};

        for(var i =0; i<kem.length; i++){
            kem[i].value = null;
        }
});



// 입력 취소
bt[1].addEventListener('click',function(){

    for(var i =0; i<kem.length; i++){
        kem[i].value = null;
    }

});


