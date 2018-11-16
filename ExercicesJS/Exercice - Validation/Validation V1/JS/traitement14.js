
var Res;

function btnCalculer_onclick()
{

    if(validChampObligatoire() === true)
    {
        traiterInfos();
    }

}
function validChampObligatoire()
{
    var Valide = false;
    if((valideExist("txtNbre1") === true) && (valideExist("txtNbre2") === true))
    {
        Valide = true;
    }
}
function valideExist(nomID)
{
    var Valide;
    if(document.getElementById(nomID).value === "")
    {
        Valide = false;
        document.getElementById(nomID).style.backgroundColor = "red";
    }
    else
    {
        document.getElementById(nomID).style.backgroundColor = "white";
    }
    return Valide;

}

function traiterInfos()
{
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