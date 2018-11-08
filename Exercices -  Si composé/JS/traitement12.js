function btnCalculer_onclick()
{ 

    var Nbre1, Nbre2, Nbre3, Nbre4;

    Nbre1 = parseFloat(document.getElementById("txtNbre1").value);
    Nbre2 = parseFloat(document.getElementById("txtNbre2").value);
    Nbre3 = parseFloat(document.getElementById("txtNbre3").value);
    Nbre4 = 3;

    if((Nbre1>=Nbre2 && Nbre2 !== Nbre3))
    {
        Nbre4 = Nbre4 + 2 * Nbre1;
    }
    else if((Nbre1 === Nbre2 || Nbre2 > Nbre3))
    {
        Nbre4 = Nbre4 + Nbre1;
    }
    else
    {
        Nbre4 = Nbre4 * Nbre2 / Nbre1 - Nbre3;
    }

    document.getElementById("lblMessage").innerHTML = "Le nombre 4 est égal à " + Nbre4;
}