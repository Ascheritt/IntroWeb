function btnCalculer_onclick()
{
    var ArgentCAN, TauxChangeEuro, Euro;

    ArgentCAN = parseFloat(document.getElementById("txtArgentCAN").value);
    TauxChangeEuro = parseFloat(document.getElementById("txtTauxChangeEuro").value);
    Euro = (ArgentCAN*TauxChangeEuro);

    console.log("La conversion est de : " + Euro);

}