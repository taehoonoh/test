$(function(){
    //start
    $.ajax({
        url : 'data.xml',
        type : 'GET', //POST
        dataType : 'xml',
        success : function(data){
            
            var thum;
            var name;

            $(data).find('work').each(function(i){
                $(this).find('thum').text();
                $(this).find('name').text();
                // xml

                funmMain();
            }
            });

            function funMain(){

              
                var workMain = "<figure><img src="+ thum +"><figcaption>"+name+"</figcaption></figure>";
                // 태그 정보

                $('section').append(workMain);
                // 출력

            // main 썸네일 제목

            // sub 썸네일제목
            // detail 큰이미지 제목 기간
        }
var workList;
workList +="<li>";
workList +="<figure>";
workList +="<img src="+thum+">";
workList +="<figcaption>";
workList +="<span>"+name+"</span>";
workList +="<span>"+time+"</span>";
workList +="</figcaption>";
workList +="</figure>";
workList +="</li>";

console.log(workList);
    });
    
    //end
});