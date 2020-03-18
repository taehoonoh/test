$(function(){
// 레디

$('nav li').on('mouseover',function(){

    $(this).find('div').stop().slideDown();
});
$('nav li').on('mouseout',function(){

    $(this).find('div').stop().slideUp();
});

// $('nav ul .about').on('mouseout',function(){

//     $('.test1').slideUp();
// });


// $('nav ul .service').on('mouseover',function(){

//     $('.test2').slideDown();
// });

// $('nav ul .service').on('mouseout',function(){

//     $('.test2').slideUp();
// });



$('.menu').on('mouseover',function(){
    
    $('header div p > span').stop().show().animate({

        top:40+"px", opacity:1
    },500)

});

$('.menu').on('mouseout',function(){
    
    $('header div p > span').stop().hide().animate({

        top:60+"px", opacity:0
    },500)
    
});    


// 이렇게 줄여서 가능
// $('.menu').on({
//     mouseenter : nav1,
//     mouseout : nav2,
//     click
//      : nav3,

// });
// function nav(){}



//hasClass('active')를 가지고있으면

// 슬라이드 다운업  애니메이트
});