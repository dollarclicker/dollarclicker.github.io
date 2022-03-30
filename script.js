
const button = document.querySelector('#button');
var argent = 0;
var argent_seconde_precedente = 0;
var prix_amelio = 20;
var prix_valeur = 100;
var nbr_ameliorateur = 0;
var nbr_valeur = 1;
var score_par_sec = 0;
var cote_gauche = document.querySelector(".cotegauche")

var winWidth = cote_gauche.offsetWidth;
var winHeight = cote_gauche.offsetHeight;

function ajouter(){
    argent += nbr_valeur;
    document.getElementById('clics').innerHTML = argent;
    var tag = document.createElement("p")
    tag.classList.add('billet')
    var text = document.createTextNode("");
    tag.appendChild(text);
    var element = document.getElementById("dollars");
    element.appendChild(tag)
    billeterie()
};

function acheter_amelio(){
    if(argent>=prix_amelio){
        argent = argent - prix_amelio;
        
        prix_amelio = parseInt(prix_amelio*1.2);
        document.getElementById('prix').innerHTML = prix_amelio;
        nbr_ameliorateur += 1;
        if (nbr_ameliorateur>1){
            document.getElementById('pluriel').innerHTML = ' améliorateurs';

        };
        document.getElementById('ameliorateur').innerHTML = nbr_ameliorateur;
        score()

    };
};

function acheter_valeur(){
    if (argent>=prix_valeur){
        
        nbr_valeur += 1
        argent = argent - prix_valeur;
        
        prix_valeur  = parseInt(prix_valeur*1.1);
        document.getElementById('prix_val').innerHTML = prix_valeur;
        document.getElementById('amelioration_val').innerHTML = nbr_valeur-1;
        
        
    }
}



function score(){
    score_par_sec = nbr_ameliorateur
    document.getElementById('score_par_sec').innerHTML = score_par_sec
}


setInterval(function(){

    console.log(argent-argent_seconde_precedente)
    argent += score_par_sec;
    if (argent-argent_seconde_precedente>=0){
        document.getElementById('score_par_sec').innerHTML = argent-argent_seconde_precedente;
    }
    document.getElementById('clics').innerHTML = argent;
    argent_seconde_precedente = argent;
    

}, 1000 );

setInterval(function(){
    
    if(argent<prix_amelio){
        document.getElementById('boutonamelio').className = "pasachetable";
    }else{
        document.getElementById('boutonamelio').className = "achetable";
    }
    if(argent<prix_valeur){
        document.getElementById('boutonvaleur').className = "pasachetable";
    }else{
        document.getElementById('boutonvaleur').className = "achetable";
    }
},50)

function billeterie(){
    var billets = document.getElementsByClassName("billet")
    for ( var i=0; i < billets.length; i++ ) {

        
        var thisDiv = billets[i];
        
        
        randomTop = getRandomNumber(0, winHeight);
        randomLeft = getRandomNumber(0, winWidth);
        
        
        
        thisDiv.style.top = randomTop +"px";
        thisDiv.style.left = randomLeft +"px";
        
        
        setTimeout(function(){
            thisDiv.remove();
        }, 1000);
    }
    
    
    function getRandomNumber(min, max) {
        
        return Math.random() * (max - min) + min;
        
    }
    
    
}

function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function load() {
    
    var json_str = getCookie('data');

    if(json_str != null){
        var arr = JSON.parse(json_str);
        console.log(arr)

        argent = arr[0]
        prix_amelio = arr[1]
        prix_valeur = arr[2]
        nbr_ameliorateur = arr[3]
        nbr_valeur = arr[4]
        score_par_sec = arr[5]

        document.getElementById('prix').innerHTML = prix_amelio;
        document.getElementById('pluriel').innerHTML = ' améliorateurs';
        document.getElementById('ameliorateur').innerHTML = nbr_ameliorateur;
        document.getElementById('prix_val').innerHTML = prix_valeur;
        document.getElementById('amelioration_val').innerHTML = nbr_valeur-1;
    }else{
        var data = [argent,prix_amelio,prix_valeur,nbr_ameliorateur,nbr_valeur]
        var json_str = JSON.stringify(data);
        setCookie('data', json_str);
        load()
    }

    
    
  }

  function save(){
    var data = [argent,prix_amelio,prix_valeur,nbr_ameliorateur,nbr_valeur,score_par_sec]
    var json_str = JSON.stringify(data);
    setCookie('data', json_str);

    
  }

  setInterval(function(){
      //auto-save
    save()


  },60000)

  function alerter(texte){
    alert(texte)
  }

  function verifier(){
      var reponse = window.confirm("Etes-vous sûr de vouloir réinitialiser la partie ?")
      if (reponse){
          reset()
      }
  }

  function reset(){
    setCookie("username", "0", 30);
    argent = 0;
    argent_seconde_precedente = 0;
    prix_amelio = 20;
    prix_valeur = 100;
    nbr_ameliorateur = 0;
    nbr_valeur = 1;
    score_par_sec = 0;

    document.getElementById('prix').innerHTML = prix_amelio;
    document.getElementById('pluriel').innerHTML = ' améliorateur';
    document.getElementById('ameliorateur').innerHTML = nbr_ameliorateur;
    document.getElementById('prix_val').innerHTML = prix_valeur;
    document.getElementById('amelioration_val').innerHTML = nbr_valeur-1;
    
  }

