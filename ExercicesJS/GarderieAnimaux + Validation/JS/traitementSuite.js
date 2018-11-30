function btnCalculer_onclick()
{
    var veterinaire,jours,prixtoil,rabais,tauxH,tarif,montant,tps,tvq,montantF,heures;

    veterinaire = document.getElementById("lstVeterinaire").value;
    jours = parseFloat(document.getElementById("txtNbreJours").value);
    heures = parseFloat(document.getElementById("txtNbreheures").value);
    if (document.getElementById("radChien").checked === true )
    {
        tarif = 18.50;
    }
    else
    {
        tarif = 16.95;
    }


    if(document.getElementById("chkServ").checked === true)
    {
        prixtoil = 5;
    }
    else
    {
        prixtoil = 0;
    }

    if (jours >= 1 && jours < 5)
    {
        rabais = 1;
    }
    else if (jours >= 5 && jours < 10)
    {
        rabais = 0.95;
    }
    else if (jours >= 10 && jours <= 30)
    {
        rabais = 0.90;
    }
    else if (jours > 30)
    {
        rabais = 0.85;
    }

    if (veterinaire === "Audrey Bouchard")
    {
        tauxH = 45;
    }
    if (veterinaire === "Stéphane Tremblay")
    {
        tauxH = 40;
    }
    if (veterinaire === "Maxim Simard")
    {
        tauxH = 25;
    }
    if (veterinaire === "Mélissa Caron")
    {
        tauxH = 35;
    }

    montant = jours * heures * tauxH * rabais;
    montant = montant + tarif;
    tvq = montant * 0.09975;
    tps = montant * 0.05;
    montantF = montant + prixtoil + tps + tvq;
    document.getElementById("lblMessage").innerHTML = "Le coût des soins de votre animal est de " + montantF;
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