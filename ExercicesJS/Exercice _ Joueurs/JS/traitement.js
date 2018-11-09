var Joueurs = new Array(4);
var Pts = new Array(4);
cpt=1;
i=0;


function btnAjouter_onclick()
{
    if (i < 5)
    {
        Joueurs[i] = document.getElementById("txtJoueur").value;
        i++
    }

    if (cpt < 4)
    {
        cpt++;
        document.getElementById("lblNbreJoueur").innerHTML = "Numéro du joueur " + cpt;
    }
    else
    {
        document.getElementById("lblNbreJoueur").innerHTML = "Tous les joueurs sont entrés.";
        document.getElementById("btnAjouter").disabled = true;
        document.getElementById("btnTrouverMoy").disabled = false;
        document.getElementById("btnTrouverMeilleur").disabled = false;
        document.getElementById("btnTrouverPire").disabled = false;
        document.getElementById("btnRechercher").disabled = false;
    }



}