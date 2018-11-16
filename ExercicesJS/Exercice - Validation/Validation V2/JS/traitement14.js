function btnCalculer_onclick()
{

    if(validChampObligatoire() === true)
    {
        traiterInfos();
    }

}
function validChampObligatoire()
{
    var i, valide = false;
    var tabnomID = new Array("txtNbre1", "txtNbre2", "txtOperateur");

    for (i = 0; i < 3; i++)
    {
        if(validExist(tabnomID[i])===true)
        {
            valide = true;
        }
    }
}
function valideExist(nomID)
{
    var valide;
    if(document.getElementById(nomID).value === "")
    {
        valide = false;
        document.getElementById(nomID).style.backgroundColor = "red";
    }
    else
    {
        document.getElementById(nomID).style.backgroundColor = "white";
    }
    return valide;

}

function traiterInfos()
{
    document.getElementById("lblMessage").innerHTML = calculer(parseFloat(document.getElementById("txtNbre1").value), parseFloat(document.getElementById("txtNbre2").value), document.getElementById("txtOperateur").value)
}

function calculer(Nbre1, Nbre2, Symbole)
{
    var Res;

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