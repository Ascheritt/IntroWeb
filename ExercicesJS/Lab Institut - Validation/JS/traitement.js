function frmMembre_onclick()
{
    var Valide = false, Confirmation;

    if(valideChampsObligatoires() === true)
    {

        if(valideFormat() === true)
        {
            Confirmation = confirm("Voulez-vous vraiment vous inscrire et payer un montant de " + PrixMembre() + "$ pour devenir membre?");
            if (Confirmation === true)
            {
                Valide = true;
            }
            else
            {
                Valide = false;
            }

        }
    }
    return Valide;
}

function valideChampsObligatoires()
{
    var Valide = true;
    var tabCase = new Array("txtNom","txtPrenom","txtVille","txtTel","txtAdresse");
    var i;

    for(i = 0; i < tabCase.length; i++)
    {
        if(valideExiste(tabCase[i]) !== false)
        {
            Valide = true;
        }
    }

    return Valide;
}
function valideExiste(NomID)
{
    var Valide = false;
    if(document.getElementById(NomID).value === "")
    {
        Valide = false;
        document.getElementById(NomID).style.borderColor = "red";
    }
    else{
        Valide = true;
        document.getElementById(NomID).style.borderColor = "white";
    }
    return Valide;
}
function valideFormat()
{
    var Valide = true;
    var tabCase = new Array("txtNom","txtPrenom", "txtTel", "txtCodePostal", "txtCodePerm");


    if (ValiderNom(tabCase[0]) === false)
    {
        Valide = false;
        document.getElementById(tabCase[0]).style.borderColor = "red";
    }
    if (ValiderNom(tabCase[1]) === false)
    {
        Valide = false;
        document.getElementById(tabCase[1]).style.borderColor = "red";
    }
    if (ValiderTelephone(tabCase[2]) === false)
    {
        Valide = false;
        document.getElementById(tabCase[2]).style.borderColor = "red";
    }
    if (ValiderCodePoste(tabCase[3]) === false)
    {
        if (document.getElementById(tabCase[3]).value === "")
        {
            document.getElementById(tabCase[3]).style.borderColor = "white";
        }
        else
        {
            Valide = false;
            document.getElementById(tabCase[3]).style.borderColor = "red";
            document.getElementById("lblMessageErreur").innerHTML = "Une valeur est entrée incorrectement";
        }
    }
    if (ValiderCodePermanent(tabCase[4]) === false)
    {
        if (document.getElementById(tabCase[4]).value === "")
        {
            document.getElementById(tabCase[4]).style.borderColor = "white";
        }
        else
        {
            Valide = false;
            document.getElementById(tabCase[4]).style.borderColor = "red";
            document.getElementById("lblMessageErreur").innerHTML = "Une valeur est entrée incorrectement.";
        }
    }
return Valide;
}
function ValiderNom(Chaine)
{
    return /^[A-z]+\-?[A-z]*$/.test(document.getElementById(Chaine).value);
}
function ValiderTelephone(Chaine)
{
    return /\([0-9]{3}\) [0-9]{3}-[0-9]{4} | [0-9]{3}-[0-9]/.test(document.getElementById(Chaine).value);
}
function ValiderCodePoste(Chaine)
{
    return /([A-z][0-9][A-z] [0-9][A-z][0-9])/.test(document.getElementById(Chaine).value);
}
function ValiderCodePermanent(Chaine)
{
    return /^[A-z]{4}[0-9]{8}$/.test(document.getElementById(Chaine).value);
}

function PrixMembre()
{
    var Prix, Categorie;

    Categorie = document.getElementById("type").value;

    if (Categorie === "Adulte")
    {
        Prix = 90;
    }
    else if (Categorie === "Étudiant")
    {
        Prix = 60;
    }
    else
    {
        Prix = 80;
    }

    return Prix;
}