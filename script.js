    
            
            
            
            
            const url = 'https://swapi.dev/api/people/1';

            fetch(url)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    appendData(data);
                })
                .catch(function (err) {
                    console.log('error: ' + err);
                });

            function appendData(data) {
                var mainContainer = document.getElementById("myData");
                var div = document.createElement("div");
                div.innerHTML = "Name : " + data.name;
                mainContainer.appendChild(div);
                
            }