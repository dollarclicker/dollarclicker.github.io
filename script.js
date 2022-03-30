
const button = document.querySelector('#button');
        var argent = 0;
        var argent_seconde_precedente = 0;
        var prix_amelio = 20;
        var prix_valeur = 100;
        var nbr_ameliorateur = 0;
        var nbr_valeur = 1;
        var score_par_sec = 0;
        

        function ajouter(){
            argent += nbr_valeur;
            document.getElementById('clics').innerHTML = argent;
            
    
        };

        function acheter_amelio(){
            if(argent>=prix_amelio){
                argent = argent - prix_amelio;
                document.getElementById('clics').innerHTML = argent;
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
                document.getElementById('clics').innerHTML = argent;
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
        
      
        
