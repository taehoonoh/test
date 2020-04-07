window.addEventListener('DOMContentLoaded',function(){

    var all = document.querySelector('nav');
    var img = document.querySelector('section img');
    
    
    
    var xhr = new XMLHttpRequest();
    xhr.open("GET","data.json");
    xhr.send(null);
    xhr.onload = function(){
        var data = JSON.parse(xhr.responseText);
        
        //pushState
        //onpopstate
        all.addEventListener('click',function(e){
            var target = e.target;
            var idx = target.dataset.id;
            view(idx);
            
            history.pushState({page:idx},'kkk','page='+idx);
            
            
            //object 객체 {page:1} 
            // title 제목
            // hash url 끝에남는다 (string) page:1
        });
        
        function view(i){
            img.src = data.event[i];
        };

        window.addEventListener('popstate',function(){
            
            view(history.state.page);

        });
            // history.back();
            // history.forward();
            // history.go(-1);

    }
    
    
});