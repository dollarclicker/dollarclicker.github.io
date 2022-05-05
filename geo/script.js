var paysPropre = ['Afghanistan', 'Angola', 'Albanie', 'Andorre', 'Émirats arabes unis', 'Argentine', 'Arménie', 'Antigua-et-Barbuda', 'Australie', 'Autriche', 'Azerbaïdjan', 'Burundi', 'Belgique', 'Bénin', 'Burkina Faso', 'Bangladesh', 'Bulgarie', 'Bahreïn', 'Bahamas', 'Bosnie-Herzégovine', 'Biélorussie', 'Belize', 'Bolivie', 'Brésil', 'Barbade', 'Brunei', 'Bhoutan', 'Botswana', 'République centrafricaine', 'Canada', 'Suisse', 'Chili', 'Chine', "Côte d'Ivoire", 'Cameroun', 'Republique démocratique du congo', 'Congo', 'Colombie', 'Comores', 'Cap-Vert', 'Costa Rica', 'Cuba', 'Chypre', 'Tchéquie', 'Allemagne', 'Djibouti', 'Dominique', 'Danemark', 'République dominicaine', 'Algérie', 'Équateur', 'Égypte', 'Érythrée', 'Espagne', 'Estonie', 'Éthiopie', 'Finlande', 'Fidji', 'France', 'Micronésie', 'Gabon', 'Royaume-Uni', 'Géorgie', 'Ghana', 'Guinée', 'Gambie', 'Guinée-Bissau', 'Guinée équatoriale', 'Grèce', 'Grenade', 'Guatemala', 'Guyana', 'Honduras', 'Croatie', 'Haïti', 'Hongrie', 'Indonésie', 'Inde', 'Irlande', 'Iran', 'Irak', 'Islande', 'Israël', 'Italie', 'Jamaïque', 'Jordanie', 'Japon', 'Kazakhstan', 'Kenya', 'Kirghizistan', 'Cambodge', 'Kiribati', 'Saint-Christophe-et-Niévès', 'Corée du Sud', 'Kosovo', 'Koweït', 'Laos', 'Liban', 'Liberia', 'Libye', 'Sainte-Lucie', 'Liechtenstein', 'Sri Lanka', 'Lesotho', 'Lituanie', 'Luxembourg', 'Lettonie', 'Saint-Martin', 'Maroc', 'Monaco', 'Moldavie', 'Madagascar', 'Maldives', 'Mexique', 'Îles Marshall', 'Macédoine', 'Mali', 'Malte', 'Birmanie', 'Monténégro', 'Mongolie', 'Mozambique', 'Mauritanie', 'Île Maurice', 'Malawi', 'Malaisie', 'Namibie', 'Niger', 'Nigéria', 'Nicaragua', 'Pays-Bas', 'Norvège', 'Népal', 'Nauru', 'Nouvelle-Zélande', 'Oman', 'Pakistan', 'Pérou', 'Philippines', 'Palaos', 'Papouasie-Nouvelle-Guinée', 'Pologne', 'Corée du Nord', 'Portugal', 'Paraguay', 'Qatar', 'Roumanie', 'Russie', 'Rwanda', 'Arabie Saoudite', 'Soudan', 'Sénégal', 'Singapour', 'Îles Salomon', 'Sierra Leone', 'Salvador', 'Saint-Marin', 'Somalie', 'Serbie', 'Soudan du Sud', 'São Tomé et Príncipe', 'Suriname', 'Slovaquie', 'Slovénie', 'Suède', 'Swaziland', 'Saint-Martin', 'Seychelles', 'Syrie', 'Tchad', 'Togo', 'Thaïlande', 'Tadjikistan', 'Turkménistan', 'Timor oriental', 'Tonga', 'Trinité-et-Tobago', 'Tunisie', 'Turquie', 'Tuvalu', 'Taïwan', 'Tanzanie', 'Ouganda', 'Ukraine', 'Uruguay', 'États-Unis', 'Ouzbékistan', 'Vatican', 'Saint-Vincent-et-les-Grenadines', 'Venezuela', 'Viêt Nam', 'Vanuatu', 'Samoa', 'Yémen', 'Afrique du Sud', 'Zambie', 'Zimbabwe']
var compteur_pays = 0
pays = transformer_liste(paysPropre)


function transformer_str(a, espace) {
    var b="áàâäãåçéèêëíïîìñóòôöõúùûüýÁÀÂÄÃÅÇÉÈÊËÍÏÎÌÑÓÒÔÖÕÚÙÛÜÝ-'",
        c="aaaaaaceeeeiiiinooooouuuuyAAAAAACEEEEIIIINOOOOOUUUUY  ",
        d="";
    for(var i = 0, j = a.length; i < j; i++) {
      var e = a.substr(i, 1);
      d += (b.indexOf(e) !== -1) ? c.substr(b.indexOf(e), 1) : e;
      if (espace === false){
        d = d.replace(' ','');
      }
      
      
    }

    return d.toLowerCase();
  }

function transformer_liste(lst){
    var lst_transforme = []
    for(var i = 0 ; i< lst.length; i++){
        lst_transforme.push(transformer_str(lst[i], false))
    }
    return lst_transforme
}

function obtenirLienDrapeau(p){
    p = transformer_str(p, true)
    p = p.replaceAll(' ', '-')
    var lien = 'http://www.drapeaux-du-monde.fr/drapeaux-du-monde/drapeau-'+ p +'.jpg'

    return lien
}

function entrer(){
    
    var pays_entre = transformer_str(document.getElementById('inputpays').value, false)

    if(pays.includes(pays_entre)){

        compteur_pays += 1
        document.getElementById('compteur').innerHTML = compteur_pays


        if(document.getElementById('pays').childElementCount > 11){
            document.getElementById('pays').id = 'ancienneliste'
            var nouvelle_liste = document.createElement('ul')
            nouvelle_liste.id = 'pays'
            document.getElementById('listespays').appendChild(nouvelle_liste)
        }
        var input = document.createTextNode(paysPropre[pays.indexOf(pays_entre)]);
        var li = document.createElement('li');
        li.appendChild(input);
        document.getElementById('pays').append(li)


        var lienDrapeau = obtenirLienDrapeau(paysPropre[pays.indexOf(pays_entre)])
        document.getElementById('drapeauimg').remove()
        var div_drapeau = document.getElementById('drapeau')
        var drapeau = document.createElement('img')
        drapeau.src = lienDrapeau
        drapeau.id='drapeauimg'
        div_drapeau.appendChild(drapeau)

        for( var i = 0; i < pays.length; i++){ 
    
            if ( pays[i] === document.getElementById('inputpays').value) { 

                pays.splice(i, 1);
                paysPropre.splice(i, 1) 
            }
        }

        document.getElementById('inputpays').value = ""
    }
    
    
}

function afficherPays(){
    pays.forEach(item => console.log(item)); 
}

document.getElementById('inputpays').addEventListener('keyup', function(event){
    if(event.code === 'Enter'){
        entrer()
        }
    })   

