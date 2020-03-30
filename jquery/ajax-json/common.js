$(function(){
    //start
    $.ajax({
        url : 'data.json',
        type : 'GET', //POST
        dataType : 'json',
        success : function(data){
            
         

            for(var i in data.event){
                // var imgNode = document.createElement('img');
                // imgNode.src = data.event[i];
                var imgNode = "<img src="+data.event[i]+">";

                $('section').append(imgNode);
            }

        }


    });
    
    //end
});