// Create and name the variable.
// Tell the interpreter it is an array.
// Assign values inside the parentheses.
var colors = new Array('white', 
                       'black',
                       'custom');

// Show the first item from the array.
var el = document.getElementById('colors');


// for(var i =0; i<colors.length;i++){
//     document.write(Array[i])
// }

el.textContent = colors;



var clr = '';
for(var i in colors){
    clr += "<a>"+colors[i]+"</a>";
}
el.innerHTML = clr;
var aa = el.getElementsByTagName('a');

for(var i in colors){
    aa[0].className = colors[0];
    aa[2].className = colors[2];
}
if(aa[i] != colors[1]){
    aa[i].className('white','gray');
    console.log('true');
}else{
    console.log('false');
}
    

