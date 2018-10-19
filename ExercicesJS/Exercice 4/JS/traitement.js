function btnCalculer_onclick()
{
    var NbKm, ConsoVoi, PrixLitre, CoutTot;

    NbKm = parseFloat(document.getElementById("txtNbKm").value);
    ConsoVoi = parseFloat(document.getElementById("txtConsoVoi").value);
    PrixLitre = parseFloat(document.getElementById("txtPrixLitre").value);

    CoutTot = (NbKm/100) * ConsoVoi * PrixLitre;

    console.log("Le coût total du voyage est de: " + CoutTot);

}