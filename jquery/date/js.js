$(function(){

    var today = new Date();


    console.log(today);
    console.log( today.getFullYear());//년
    console.log( today.getMonth()+1);//월은0~11월
    console.log( today.getDate());//일

    var day = ['일','월','화','수','목','금','토']
    console.log( day[today.getDay()]);//일~월
    
    console.log( today.getHours());//시
    console.log( today.getMinutes());//분
    console.log( today.getMilliseconds());//초

    var lastDate = today.setDate(today.getDate() - 138);

    console.log(lastDate);
     //1970년 1월1일 0시 기준 현재값까지의 초 

    var aa = new Date(lastDate);
    console.log('138일전'+aa.getDate());

    today.setDate(today.getDate() + 138);
    console.log('138일후'+today);


    var oneday = 24*60*60*1000;

    var changeDate = new Date('2020-12-25');
    console.log('월' + (changeDate.getMonth()+1));

    console.log("크리스마스"+(changeDate - today)/oneday);



});