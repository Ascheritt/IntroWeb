var tabJoueurs = new Array(4);
var tabPts = new Array(4);
var txtExist;
cpt=0;


function btnAjouter_onclick()
{
    if (cpt < 4)
    {
        tabJoueurs[cpt] = document.getElementById("txtJoueur").value;
        tabPts[cpt] = parseInt(document.getElementById("txtPoints").value);
        cpt++;
        document.getElementById("lblNbreJoueur").innerHTML = "Numéro du joueur " + cpt;
    }
    if (cpt === 4)
    {
        document.getElementById("lblNbreJoueur").innerHTML = "Tous les joueurs sont entrés.";
        document.getElementById("btnAjouter").disabled = true;
        document.getElementById("btnTrouverMoy").disabled = false;
        document.getElementById("btnTrouverMeilleur").disabled = false;
        document.getElementById("btnTrouverPire").disabled = false;
        document.getElementById("btnRechercher").disabled = false;
    }



}
function btnMoyenne_onclick()
{
    var Moy;

    Moy = calculerMoy();
    document.getElementById("lblReponse").innerHTML = ("Voici la moyenne: " + Moy);
}
function calculerMoy()
{
    var i, acc;

    acc = 0;

    for (i =0; i < 4; i++)
    {
        acc = acc + tabPts[i];
    }


    Moy = acc/4;

    return Moy;
}

function btnMeilleurPointage_onclick()
{
    var Meilleur;

    Meilleur = trouverMeilleurPt();
    document.getElementById("lblReponse").innerHTML = ("Voici le meilleur pointage: " + Meilleur);
}

function btnRechercher_onclick()
{
    var trouver, nomSaisie, resultat, nomResultat, i;
    nomSaisie = document.getElementById("txtJoueur").value;
    i = 0;
    trouver = false;
    while((trouver === false) && (i < 4))
    {
        if(nomSaisie === tabJoueurs[i])
        {
            resultat = tabPts[i];
            nomResultat = tabJoueurs[i];
            trouver = true;
        }
        else
        {
            i++;
        }
    }
    if(trouver === true)
    {
        document.getElementById("lblReponse").innerHTML = "Le score de "+ nomResultat +" est de "+ resultat;
    }
    else
    {
        document.getElementById("lblReponse").innerHTML = "Le nom n'existe pas";
    }
}


function trouverMeilleurPt()
{
    var i, max, valeur;

    max = 0;
    for (i = 0; i < 4; i++)
    {
        valeur = tabPts[i];

        if (max < valeur)
        {
            max = valeur;
        }
    }
    Meilleur = max;
    return Meilleur;
}

function btnPirePointage_onclick()
{
    var Pire;

    Pire = trouverPirePt();
    document.getElementById("lblReponse").innerHTML = ("Voici le pire pointage: " + Pire);
}
function trouverPirePt()
{
    var i, min, valeur;

    min = 100;
    for (i = 0; i < 4; i++)
    {
        valeur = tabPts[i];

        if (min > valeur)
        {
            min = valeur;
        }
    }
    Pire = min;
    return Pire;
}