document.addEventListener('DOMContentLoaded', function(){

    // add id au à la balise form
    document.querySelector('#add').addEventListener('click', click, false) 

    // Récupère tous les inputs et génères des jeux de fausses données
    document.querySelector('#getallInputs').addEventListener('click', getAllInput, false)

    function click(){
        chrome.tabs.query({currentWindow:true, active: true},
        function (tabs){

            chrome.tabs.sendMessage(tabs[0].id, 'add')
                      
        }


        )
    }

     function getAllInput(){
        chrome.tabs.query({currentWindow:true, active: true},
            function(tabs){

                chrome.tabs.sendMessage(tabs[0].id, 'getAllInputs')
               

            })
    }
  

}, false)

