function btnCalculer_onclick()
{
    var Nbre1, Nbre2, Operateur, Res;

    Nbre1 = parseFloat(document.getElementById("txtNbre1").value);
    Nbre2 = parseFloat(document.getElementById("txtNbre2").value);
    Operateur = document.getElementById("txtOperateur").value;

    switch (Operateur)
    {
        case "+":

            Res = Nbre1 + Nbre2;

            break;

        case "-":

            Res = Nbre1 - Nbre2;

            break;

        case "/":

            Res = Nbre1 / Nbre2;

            break;

        case "*":

            Res = Nbre1 * Nbre2;

            break;
    }

    document.getElementById("lblMessage").innerHTML = "Le résultat est de " + Res;
}