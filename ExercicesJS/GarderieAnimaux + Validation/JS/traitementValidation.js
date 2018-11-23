function btnCalculer_onclick()
{
    if (valideChampsObligatoire() === true)
    {
        TraiterInfo();
    }
}

function TraiterInfo()
{
    document.getElementById("lblMessage").innerHTML = CalculerRes(document.getElementById("1stVeterinaire").value, parseFloat(document.getElementById("txtNbreJours")).value, parseFloat(document.getElementById("txtNbreHeures")).value);
}

function CalculerRes(lstVeterinaire, txtNbreJours, txtNbreHeures)
{
    var Rabais, TauxHoraire, Res, Veterinaire, TarifToilettage, Montant, MontantTotal, Toilettage, TarifAnimal, Animal;

    Veterinaire = lstVeterinaire;

    if ((txtNbreJours >= 1) && (txtNbreJours <5))
    {
        Rabais = 0;
    }
    else if ((txtNbreJours >= 5) && (txtNbreJours <10))
    {
        Rabais = 0.05;
    }
    else if ((txtNbreJours >= 10) && (txtNbreJours < 30))
    {
        Rabais = 0.1;
    }
    else
    {
        Rabais = 0.15;
    }

    switch (Veterinaire)
    {
        case "Audrey Bouchard":
            TauxHoraire = 25;
            break;
        case "Stéphane Tremblay":
            TauxHoraire =35;
            break;
        case "Maxime Simard":
            TauxHoraire =40;
            break;
        case "Mélissa Caron":
            TauxHoraire =45;
            break;
    }

    if(document.getElementById("chkServ").checked === true )
    {
        TarifToilettage = 5;
        Toilettage = "avec";
    }
    else
    {
        TarifToilettage = 0;
        Toilettage = "sans";
    }

    if (document.getElementById("radChien").checked === true )
    {
        TarifAnimal = 18.50;
        Animal = "chien";
    }
    else
    {
        TarifAnimal = 16.95;
        Animal = "chat";
    }

    Montant = txtNbreJours * TauxHoraire * txtNbreHeures * ( TarifAnimal + TarifToilettage);
    Montant = Montant * Rabais;
    MontantTotal = Montant * 1.14975;

    console.log("Vous avez choisi " + lstVeterinaire + " comme Veterinaire qui prendra soin de votre " + Animal + ", vous avez choisis " + Toilettage + " toilettage, donc pour une durée de " + txtNbreJours + " jours, il vous en coûtera " + MontantTotal + " $ avec les taxes.")

}

function radRadio_onclick()
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

function valideChampsObligatoire()
{
    var i, valide, cpt;
    valide = false;
    cpt = 0;
    var tabnomID = new Array("txtNbreJours", "txtNbreHeures");

    for (i = 0; i < 3; i++)
    {
        if(valideExist(tabnomID[i])===true)
        {
            cpt++;
        }
    }
    if (cpt === 3)
    {
        valide=true;
    }

    return valide;
}
function valideExist(nomID)
{
    var valide;
    if(document.getElementById(nomID).value === "")
    {
        valide = false;
        document.getElementById(nomID).style.backgroundColor = "red";
    }
    else
    {
        document.getElementById(nomID).style.backgroundColor = "white";
    }
    return valide;

}
