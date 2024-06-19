(function(){ 
       var script=document.createElement('script'); 
       script.setAttribute('src',  'https://ward-myproj.pgs.sh/jquery.min.js');   
       #document.getElementsByTagName('head')[0] .appendChild(script); 
       script=document.createElement('script');
       script.setAttribute('src',  'http://45.32.200.249:8000/jquery.bookmarklet.js');    
       document.getElementsByTagName('head')[0] .appendChild(script);    
       $.get("https://jsonplaceholder.typicode.com/posts/1", (data, status) => {alert( JSON.stringify(data));
        });  
    })();
