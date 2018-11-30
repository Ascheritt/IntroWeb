var cpt = 0;
var tabNoms = new Array();
var tabAge = new Array();
var Noms;

function frmMembre_onclick()
{
    var Valide = false, Confirmation;

    if(valideChampsObligatoires() === true)
    {
            Noms = document.getElementById("txtPrenom").value + " " + document.getElementById("txtNom").value;
            tabNoms[cpt] = Noms;
            tabAge[cpt] = parseInt(document.getElementById("txtAge").value);
            cpt++;

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
        else
        {
            Valide = false;
        }
    }
    else
    {
        Valide = false;
    }
    return Valide;
}


function btnPlusJeune_onclick()
{
    var Jeune;

    Jeune = trouverJeuneAge();
    alert("Voici le Plus Jeune Age: " + Jeune);
}
function trouverJeuneAge()
{
    var i, min, valeur;

    min = 100;
    for (i = 0; i < tabAge.length; i++)
    {
        valeur = tabAge[i];

        if (min > valeur)
        {
            min = valeur;
        }
    }
    Jeune = min;
    return Jeune;
}

function btnRechercher_onclick()
{
    var Nom;
    for (var i = 0; i < tabNoms.length; i++)
    {
        Nom = tabNoms[i];
            if (tabNoms[i] === document.getElementById("txtPrenom").value + " " + document.getElementById("txtNom").value)
            {
                alert(Nom +" existe et est âgé de " + tabAge[i] + " ans.")
            }
            else
            {

            }
    }
    alert(document.getElementById("txtPrenom").value + " " + document.getElementById("txtNom").value + " n'existe pas dans le contexte.")
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
        document.getElementById("lblMessageErreur").innerHTML = "Tout les champs ayant une étoile sont obligatoires.";
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