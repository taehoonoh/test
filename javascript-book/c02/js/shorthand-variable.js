// METHOD 1
var price = 5;


var haha = document.getElementById('h2').innerHTML

var quantity = haha.length;

var total = price * quantity;






/* METHOD 2
var price, quantity, total;
price = 5;
quantity = 14;
total = price * quantity;
*/

/* METHOD 3
var price = 5, quantity = 14;
var total = price * quantity;
*/

// Write the total into the element with id of cost
var el = document.getElementById('cost');  
el.textContent = '$' + total;             






/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on line 20, but note the security issues on p228-231
el.innerHTML = '$' + total;
*/