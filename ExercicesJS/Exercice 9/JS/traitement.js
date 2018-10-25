function btnCalculer_onclick()
{ 

    var nbEtudiant, nbAgeDor, nbAdulte, nbBillet, prixBillet, montantTot;

    prixBillet = 0;
    nbEtudiant = parseFloat(document.getElementById("txtEtudiant").value);
    prixBillet = prixBillet + (nbEtudiant * 12);
    nbAgeDor = parseFloat(document.getElementById("txtAgeDor").value);
    prixBillet = prixBillet + (nbAgeDor * 15);
    nbAdulte = parseFloat(document.getElementById("txtAdulte").value);
    prixBillet = prixBillet + (nbAdulte * 20);
    nbBillet = nbEtudiant + nbAgeDor + nbAdulte;

    if (nbAdulte+nbEtudiant+nbAgeDor >= 5)
    {
        montantTot = prixBillet * 0.9;
    }
    else
    {
        montantTot = prixBillet;
    }
    montantTot = montantTot * (1.14975);

    console.log("Le montant s'élèvera à " + montantTot + " $.")
}