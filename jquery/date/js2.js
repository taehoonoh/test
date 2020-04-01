$(function(){

    var today = new Date();
    console.log(today);
    console.log(today.getFullYear()+'년');
    console.log((today.getMonth()+1)+'월');
    console.log(today.getDate()+'일');
    var day = ['일','월','화','수','목','금','토','일']
    console.log(day[today.getDay()]+'요일');


    var finish = new Date('2020-06-08');
    

    var oneday = 24*60*60*1000;
    
    var dDay = ("ㅠㅠD"+Math.round((today - finish)/oneday));
    
        // 2020년 4월 1일 수요일


        // 종강일(2020.6.8)까지
        con1 = `눈물의 종강 ${finish.getFullYear()}년 ${finish.getMonth()+1}월 
        
        ${finish.getDate()}일 ${dDay}`;
        $('div').text(con1);
        
        var event = new Date();
        var eventS = new Date('2020-04-01');
        var eventE = new Date('2020-04-08 18:00:00');
        
        
        console.log(event.getDate());
        console.log(eventS);
        

       if(event >= eventS && event <=eventE ){
           console.log('이벤트기간입니다.')
       }else{console.log('이벤트가 종료 되었습니다.')}

        

        

        











})