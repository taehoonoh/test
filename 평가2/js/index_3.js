var pop = document.querySelector('.ly-pop');

var popImg = pop.querySelector('img');
var popFig = pop.querySelector('figcaption');

var galUl = document.querySelector('.gallery');

var galImg = galUl.querySelectorAll('img');


var galFig = galUl.querySelectorAll('figcaption');

var btn = pop.querySelectorAll('a')

var dNum;
pop.style.display="none";


galUl.addEventListener('click',function(e){
  dNum = e.target.dataset.num;

  popImg.src = e.target.src;
  popFig.textContent = galFig[dNum].textContent;

  pop.style.display="flex";

  for(var i =0; i<btn.length; i++){
  btn[i].style.display = "block";
  }
  if(dNum == 0){
    btn[0].style.display ="none";
  } else if(dNum ==5){
    btn[1].style.display ="none";
  }

})

popImg.addEventListener('click',function(e){

  pop.style.display="none";
})


btn[0].addEventListener('click',function(e){

  event.preventDefault();
  event.stopPropagation();

  dNum--;

  popImg.src = galImg[dNum].src;
  // 확인필요
  popFig.textContent = galFig[dNum].textContent;

  for(var i =0; i<btn.length; i++){
    btn[i].style.display = "block";
    }
    if(dNum == 0){
      btn[0].style.display ="none";
    } else if(dNum ==5){
      btn[1].style.display ="none";
    }
  
});


btn[1].addEventListener('click',function(e){

  event.preventDefault();
  event.stopPropagation();

  dNum++;
  popImg.src = galImg[dNum].src;
  popFig.textContent = galFig[dNum].textContent;

  for(var i =0; i<btn.length; i++){
    btn[i].style.display = "block";
    }
    if(dNum == 0){
      btn[0].style.display ="none";
    } else if(dNum ==5){
      btn[1].style.display ="none";
    }
    //for 문 돌려서 버튼 따로따로 
});