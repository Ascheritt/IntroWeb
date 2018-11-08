function btnCalculer_onclick()
{ 

    var Nbre1, Nbre2, Signe;

    Nbre1 = parseFloat(document.getElementById("txtNbre1").value);
    Nbre2 = parseFloat(document.getElementById("txtNbre2").value);

    if(Nbre1 >= 0 && Nbre2 >= 0 || Nbre1 < 0 && Nbre2 < 0)
    {
        Signe = "Positif"
    }
    else
    {
        Signe = "Négatif"
    }

    document.getElementById("lblMessage").innerHTML = "Le signe est " + Signe;
}