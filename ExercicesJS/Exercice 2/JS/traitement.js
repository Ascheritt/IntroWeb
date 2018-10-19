function btnCalculer_onclick()
{
    var MoyKmMois, TotKM;

    MoyKmMois = parseFloat(document.getElementById("txtMoyKmMois").value);
    TotKM = (MoyKmMois)*60;

    console.log("Tel est votre toltal de Km parcourru en 5 ans: " + TotKm);

}