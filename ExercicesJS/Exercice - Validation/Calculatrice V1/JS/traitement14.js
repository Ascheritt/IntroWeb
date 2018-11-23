var Res;
function btnCalculer_onclick()
{
    var Nbre1, Nbre2, Symbole;

    document.getElementById("lblMessage").innerHTML = calculer(parseFloat(document.getElementById("txtNbre1").value), parseFloat(document.getElementById("txtNbre2").value), document.getElementById("txtOperateur").value)
}
function calculer(Nbre1, Nbre2, Symbole)
{


    switch(Symbole)
    {
        case '-' :
            Res = Nbre1 - Nbre2;
            break;

        case '+':
            Res = Nbre1 + Nbre2;
            break;
        case '*':
            Res = Nbre1 * Nbre2;
            break;
        case '/':
            Res = Nbre1 / Nbre2;
            break;
    }

    return Res
}
