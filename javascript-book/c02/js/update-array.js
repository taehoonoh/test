// Create the array and assign it values
var colors = ['white', 'black', 'custom'];

// Update the third item in the array
colors[2] = 'beige';
colors.push('beige2');
// push는 배열의 끝에 원하는 값을 추가해주는 함수입니다.

colors.shift();
// 첫번째 값에 있는 값을 제거
colors.pop();
// 마지막 값을 제거

colors = colors.concat("aa","bb");
// 두개의 배열을 합쳐줌

var font = ["dotum","gulim"];
colors = colors.concat(font);

colors = colors.reverse();
// 배열을 역순으로 재배치 

var slice =[10,20,30,40];

var bbb = slice.slice(0,3);

console.log(bbb);


// 그대로 살아있다 원본 영향을 받지않는다.
// 결과값 10 20  / / // 30은짤려 
// 선택된 부분이
// 새로운 배열 객체로 반환
// 찾은 인덱스값을 반환 
// 배열원소값에 영향을 주지 않음
// colors = colors.join('/');
// 배열값 사이에 원하는 문자를 삽입

//배열의 startIndex부터 endIndex까지(endIndex는 불포함)

var splice = [10,20,30,40];

splice.splice(0,1);

//splice( index, 제거할 요소 개수, 
//배열에 추가될 요소 )
// 길이
// 값이 배열을 바꾸면서 원본 영향을 준다.
//  splice한 결과값을 변경


console.log(colors);
console.log("slice"+slice);
console.log("splice"+splice);

// Get the element with an id of colors
var el = document.getElementById('colors');
// Replace element with third item from the array
el.textContent = colors[2];
