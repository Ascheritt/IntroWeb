function btnCalculer_onclick()
{
    var Jour, Choix;

    Choix = parseFloat(document.getElementById("txtNumSem").value);

    switch(Choix)
    {
        case 1:
            Jour = "Dimanche";
            break;
        case 2:
            Jour = "Lundi";
            break;
        case 3:
            Jour = "Mardi";
            break;
        case 4:
            Jour = "Mercredi";
            break;
        case 5:
            Jour = "Jeudi";
            break;
        case 6:
            Jour = "Vendredi";
            break;
        case 7:
            Jour = "Samedi";
            break;
    }

    document.getElementById("lblMessage").innerHTML = "Le jour de la semaine est: " + Jour;
}