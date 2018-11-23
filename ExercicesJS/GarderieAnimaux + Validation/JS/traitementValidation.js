var ServiceToilettage, PrixServiceToilettage ,NbreJours, Tarif, Montant, Salaire, Veterinaires, Choix, Taxes, Rabais, NbreHeures, TauxHoraires, Valide;

function btnCalculer_onclick()
{
    SaisirVariables();
    saisirTauxHoraires();
    SaisirNbreJours();
    SaisirService();
    CalculerMontant();
    Valide = validChampOblig();




    document.getElementById("lblMessage").innerHTML = " Le montant sera de: " + Taxes + " et Votre Veterinaire sera " + Veterinaires + " pour la garde de votre " + Choix + " " + ServiceToilettage2 ;

}

function validChampOblig()
{
    var valide = true;
    var TabValeurs = new Array("txtNbreJours", "txtNomClient", "txtNumClient")

    for(var i=0 ; i < TabValeurs.length; i++)
    {
        if(validExist(TabValeurs[i]) === false)
        {
            valide = false;
        }

    }
    return valide;
}

function validExist(NomID)
{
    var valide = true;

    if(document.getElementById(NomID).value === "")
    {
        valide = false;
        document.getElementById(NomID).style.backgroundColor = "Red";
    }
    else {
        valide = true;
        document.getElementById(NomID).style.backgroundColor = "White";
    }
    return valide;

}

function saisirTauxHoraires()
{

    Veterinaires = document.getElementById("lstVeterinaire").value;


    switch (Veterinaires)
    {
        case "Audrey Bouchard":

            TauxHoraires = 25;
        break;

        case "Stéphane Tremblay":

            TauxHoraires = 35;
        break;

        case "Maxime Simard":

            TauxHoraires = 40;
        break;

        case "Mélissa Caron":

            TauxHoraires = 45;
        break;
    }

}

function SaisirNbreJours()

{
    if ((NbreJours >= 1) && (NbreJours <= 5))
    {
        Rabais = 0;
    }
    else if ((NbreJours >= 5) && (NbreJours <= 10))
        {
            Rabais = 0.05;
        }
    else if ((NbreJours >= 10 && NbreJours <= 30))
        {
            Rabais = 0.01;
        }
    else if (NbreJours >= 30)
        {
            Rabais = 0.015;
        }
}

function CalculerMontant()
{
    if (document.getElementById("radChien").checked === true)
    {
        Tarif = 18.50;

        Choix = "Chien";

    }
    else
    {
        Tarif = 16.95;
        Choix = "Chat";
    }

    Salaire = (NbreHeures*TauxHoraires);
    Rabais = (NbreJours*Tarif) * Rabais;
    Montant = ((NbreJours*Tarif) - Rabais) + ServiceToilettage;
    Taxes = Montant + (Montant*1.14975) + Travail;


}

function SaisirService()
{


    if (document.getElementById("chkServ").checked === true)
    {

        PrixServiceToilettage = 5;
        ServiceToilettage = "avec Service de Toilettage"
    }

    else
    {
        PrixServiceToilettage = 0;
        ServiceToilettage = "Sans Service de Toilettage"
    }
}


function SaisirVariables()
{
    Choix = document.getElementById("radChien","radChat").value;
    ServiceToilettage = parseFloat(document.getElementById("chkServ").value);
    NbreJours = parseFloat(document.getElementById("txtNbreJours").value);
    NbreHeures = parseFloat((document.getElementById("txtNbHeures")).value);
}

function btnRadio_onclick()
{
    if (document.getElementById("radChien").checked === true )
    {
        document.getElementById("imgAnimal").src = "img/Annoying.jpg";
    }
    else
    {
        document.getElementById("imgAnimal").src = "img/CatFrisk.jpg";
    }
}