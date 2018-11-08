function btnCalculer_onclick()
{
    var veterinaire,jour,prixtoil,animals,Toiletage;

    veterinaire = document.getElementById("lstVeterinaire").value;
    jour = parseFloat(document.getElementById("txtNbreJours").value);

    if (document.getElementById("radChien").checked = true )
    {
        tarif = 18.50;
        animals = "chien";
    }
    else
    {
        tarif = 16.95;
        animals = "chat";
    }


    if(document.getElementById("chkServ").checked = true )
    {
        Toiletage = "avec";
        prixtoil = 5;

    }
    else
    {
        prixtoil = 0;
        Toiletage = "sans";
    }

    montant = tarif * jour;
    tpq = montant * 0.09975;
    tps = montant * 0.05;
    montantfinal = montant + prixtoil + tps + tpq;
    console.log("Vètérinaire responsable est " + veterinaire + "." + "Le montant pour la garde de votre " + animals + " est de " + montantfinal + " pour " + jour + " jours," + Toiletage + " service de toilettage.");
}