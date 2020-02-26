// Create variables and assign their values
var inStock;
var shipping;
inStock = true;
shipping = false;

// Get the element that has an id of stock
var elStock = document.getElementById('stock');
// Set class name with value of inStock variable
elStock.className = inStock;


// Get the element that has an id of shipping
var elShip = document.getElementById('shipping');
// Set class name with value of shipping variable
elShip.className = shipping 


elStock.onclick = ()=>{

    elStock.className = shipping
}
elShip.onclick = ()=>{
    elShip.className = inStock
}



// 변수
var haha = document.getElementById('tit');

var aa = document.getElementById('content');

var bb = aa.innerHTML;

haha.innerText = "ClassName";

var none = document.getElementById('content');

setInterval(function(){
    none.className='active';
},1000);



// nonenone.className = active 