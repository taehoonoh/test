// Create an array and assign it values.
var colors; 
colors = ['red', 'black', 'blue'];

var el = document.getElementById('colors');


var clr = '';
for(var i in colors){
    clr += "<span>"+colors[i]+"</span>";
}

el.innerHTML = clr;

var spam = el.getElementsByTagName('span');





// 클래스명을 추가한다.





// for(var i=0;i<=colors.length;i++){
//     // spam[i].style.color = colors[i]
//     spam[i].classList.add(colors[i])
    
// }



for(var i in colors){
    // spam[i].style.color = colors[i]
    spam[i].classList.add(colors[i])
    
}


spam[0].classList.add('white');

for(var i in colors){
   
    if(!spam[i].classList.contains('white')){
        spam[i].classList.add('white');
// 화이트를 가지고있지않을경우 실행한다
    }else{spam[i].classList.add('vi');
}
}















//  for(var i in colors){
//      spam[i].style.color = colors[i]
// }