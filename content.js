// Tab de fausses données
var email = [
    "lorem@gmail.com",
    "dontes76@gmail.com",
    "adtye@hotmail.fr",
    "learnd@yahoo.com",
    "orange23@orange.fr",
    "github12@gmail.com",
    "tom23@gmail.com"
]

var country = [
    "France",
    "Allemagne",
    "Turquie",
    "Belgique",
    "Suisse",
    "Italie",
    "Espagne"
]

var title = [
    "Faites de votre réalité INFORMATIQUEA",
    "Comment se faire des amis et influencer les gens avec INFORMATIQUE",
    "5 secrets: comment utiliser INFORMATIQUE pour créer une entreprise performante (produit)",
    "Tout ce que vous vouliez savoir sur INFORMATIQUE et que vous aviez peur de demander",
    "2 façons d'utiliser INFORMATIQUE pour devenir irrésistible pour les clients",
    "Comment j'ai amélioré mon INFORMATIQUE en une leçon facile",
    "Si vous voulez être un gagnant, changez votre philosophie INFORMATIQUE maintenant!"     
]

var postalcode = [
    "74140",
    "68300",
    "68400",
    "33320",
    "33610",
    "58640",
    "93140"
]

var dateborn = [
    "01/10/1998",
    "12/12/1978",
    "03/07/1956",
    "12/05/1999",
    "15/04/1972",
    "31/06/1986",
    "20/11/2000",    

]

var city = [
    "Paris",
    "Londre",
    "Marseille",
    "Grenoble",
    "Nice",
    "Rome",
    "Istanbul"
]

var address = [
    "24  rue du Paillle en queue",
    "100  rue La Boétie",
    "105  boulevard de la Liberation",
    "125  rue Beauvau",
    "1066  rue de la tour",
    "94  avenue Ferdinand de Lesseps",
    "94  avenue des champs"
]


var firstname = [
    "Emma",
    "Lina",
    "Thomas",
    "Hugo",
    "Jhone",
    "David",
    "Bart"
]

var phone = [
    "0612458524",
    "0641257845",
    "0623510247",
    "0745125696",
    "0745120236",
    "0789568956",
    "0745120784"
]

var lastname = [
    "Dupont",
    "Martin",
    "Thomas",
    "Jones",
    "Brown",
    "Ray",
    "Taylor"
]

var firstname = [
    "Emma",
    "Lina",
    "Thomas",
    "Hugo",
    "Jhone",
    "David",
    "Bart"
]

var username = [
    "Teddy343",
    "BryanTo78",
    "lednock",
    "occupy787",
    "mobster111",
    "wind998",
    "gillettepoll"
]

    // Var GlobalTab englobe tous les tabs contenant des jeux de fausses données
    var GlobalTab = [["email",email], ["postal",postalcode], ["city",city], ["address",address],
    ["firstname",firstname], ["number",phone], ["lastname",lastname], ["name",firstname]
    , ["username",username],["title",title],["date",dateborn],["country",country] ]

    // Collapse
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
        content.style.display = "none";
        } else {
        content.style.display = "block";
        }
    });
    }

    // // attente de chargement des données
    // setTimeout(function(){
            
    //         var table = document.getElementById('getTab');
    //         // var span = document.createElement('span');
    //         // span.setAttribute("id","chargement");
    //         // table.append(span)

    // }, 1500 )
   

        // Insertion des name des diff input field dans le tableau du collapse
        setTimeout(function(){
            var table = document.getElementById('getTab');
            var span = document.getElementById('load');
            span.textContent = "Chargement réussi";
       
            for(var i = 0; i < GlobalTab.length; i ++){
                var tr = document.createElement('tr');
                tr.setAttribute("id", i);
                var td = document.createElement('td');
                td.innerHTML = GlobalTab[i][0];
                tr.append(td)
                table.append(tr)
            }

        },3000)

   

chrome.runtime.onMessage.addListener(function (request) {
   
    // Request correspond à la réponse du sendMessage (popup.js)
    let result = request;
         
   
    // Retourne random caractères pour compléter
    function completeString(phrase,nbr) {
        
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
       
        for ( var i = 0; i <= nbr; i++ ) {
           phrase = phrase + characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return phrase;
    }

    // Retourne random number pour compléter
    function completeInt(phrase,nbr) {
        console.log(phrase,nbr)
        var int = '1234567890';
       
        for ( var i = 0; i <= nbr; i++ ) {
           phrase = phrase + int.charAt(Math.floor(Math.random() * int.length));
        }
        console.log(phrase);
        return phrase;
    }

    //  Enlève les caractères en trop d'un string
    function remove_lasts_character(phrase,nbrMax) {
        if (phrase === parseInt(phrase, 10)){
           convert = phrase.toString();
           return convert.slice(0,convert.length - 1 * nbrMax )
        }

        return phrase.slice(0,phrase.length - 1 * nbrMax )
    }


   
    // Function qui get les min et max Length d'un champ;
    function getLengthInput(min = null,max = null,phrase, type = null){

        if(type === "number"){

            var lphrase = phrase.toString().length;
            console.log("+++++" + lphrase);
            console.log(type);
            console.log(phrase);
        }else{
            var lphrase = phrase.length;
        }
       
       
        // Calcule le nbr de caractères nécessaire pour atteindre le minimum de caractère demandé.
        var nbrMin = min - lphrase;
        // Calcule le nbr de caractères dépassé pour atteindre le maximum de caractère demandé.
        var nbrMax = lphrase - max;

        // Si le input n'a aucun max ou min défini
        if(min === -1 && max === -1){
            return phrase;
        }else{
            if(lphrase >= min && lphrase <= max ){
                return phrase;
            }else{
                if(lphrase < min ){
                    if(type === "number"){
                        console.log('jjj')
                        phrase = completeInt(phrase,nbrMin);
                        return phrase;
                    }
                    phrase = completeString(phrase,nbrMin);
                    return phrase;
                }

                if(lphrase > max ){
                    if(type === "number"){
                        phrase = remove_lasts_character(phrase,nbrMax);
                        return phrase;
                    }
                    phrase = remove_lasts_character(phrase,nbrMax);
                    return phrase;
                }
            }


        }

        // Input a 1 seul définies. (min)
        if(min != -1 && max === -1){        
            if(lphrase < min){
                    phrase = completeString(phrase,nbrMin);
                    return phrase;
            }else{
                return phrase
            }
        }

        
       // Input a 1 seul définies. (max)
        if(min === -1 && max != -1){        
            if(lphrase > max){
                    phrase = remove_lasts_character(phrase,nbrMax);
                    return phrase;
            }else{
                return phrase
            }
        }
    }
     
    // Obtient un nbr random
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    // Retourne un long string 
    function getLongString() {

        var phrase = "Lorem ipsum ";
        random = getRandomInt(20);

        for(var y = 0; y < random; y ++ ){

            var words = ['Funsit isale ', 'sodales finibus ', 'cursus ligula ' , 'a ligula sed ' , 'commodo eget ' , 'molestie ' , 'sollicitudin laoreet '];

            var word = words[Math.floor(Math.random() * words.length)];

            phrase = phrase + word;
        }

        return phrase;
    }

    


    // Ad l'attribut id form au formulaire
    if(result === "add") {
        console.log('ID form attribué');
        var form = document.querySelector("form")
        form.setAttribute("id","form");
      
       
    }

    

    if(result === "getAllInputs") {
            
        var t = document.getElementById('form');
        var inputs = t.querySelectorAll('input,textarea,select');
        var count = inputs.length
     

        for(var i = 0; i != count; i ++){   
            var input = inputs[i];
            var inputId = inputs[i].id;
            
            var inputType = inputs[i].type
            var inputName = inputs[i].name.toLowerCase();
            var max = input.maxLength;
            var min = input.minLength;

            var phrase = null;
            switch (inputType) {
                case 'text':
                             
                               
                                for(var j = 0; j < GlobalTab.length; j ++){
                                    if(inputName.includes(GlobalTab[j][0])){
                                        r = getRandomInt(7);
                                        phrase = GlobalTab[j][1][r];
                                        result = getLengthInput(min,max,phrase);
                                        input.value = result;
                                        break;
                                    }

                                    // SI aucun inputName ne match dans le tableau Global il renvoie un string 
                                    r = getLongString();
                                    input.value = r;
                                    
                                }

                    
                                break;

                case 'textarea':
                                r = getLongString();
                                input.value = r;
                                break;
                case 'password':
                                r = getLongString();
                                input.value = r;
                                break;

                case 'number':
                                for(var j = 0; j < GlobalTab.length; j ++){
                                    if(inputName.includes(GlobalTab[j][0])){
                                        r = getRandomInt(6);
                                        input = GlobalTab[j][1][r];
                                        result = getLengthInput(min,max,phrase,inputType);
                                        
                                    }
                                }
                                
                                int = getRandomInt(100);
                                result = getLengthInput(min,max,int,inputType);
                                input.value = result;  
                                
                                break;
                case 'select-one':
                                var countOptions = input.length
                                r = getRandomInt(countOptions);
                                inputId.value = r;
                                input[r].selected = countOptions;
                                break;

                case 'email':

                                r = getRandomInt(7);
                                input.value = email[r];
                                break;

                case 'date':

                                r = getRandomInt(7);
                                input.value = dateborn[r];
                                break;

                case 'tel':

                                r = getRandomInt(7);
                                input.value = phone[r];
                                break;
                case 'radio':

                
                                input.checked = true;
                                break;
                    
                case 'checkbox':
                                input.checked = true;
                                var count = input.length;

                                input.checked = true;
                                break;
                    
                default:
                              
                                break;
            }
        }
    }
})
