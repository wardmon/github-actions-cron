(function(){ 
       var script=document.createElement('script'); 
       script.setAttribute('src',  'https://ward-myproj.pgs.sh/jquery.min.js');   
       document.getElementsByTagName('head')[0] .appendChild(script); 
       script=document.createElement('script');
       script.setAttribute('src',  'http://45.32.200.249:8000/jquery.bookmarklet.js');    
       document.getElementsByTagName('head')[0] .appendChild(script);    
       $.get("https://jsonplaceholder.typicode.com/posts/3", (data, status) => {alert( JSON.stringify(data));
        });  
        // Create a new div element
        const newDiv = document.createElement("div");

        // Set some attributes (optional)
        newDiv.id = "myNewDiv";
        newDiv.className = "customDiv";

        // Add some text content (optional)
        newDiv.textContent = "Hello, world!";

        // Append the new div to an existing element in the DOM
        document.body.appendChild(newDiv);
    })();
