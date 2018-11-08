function btnCalculer_onclick()
{ 

    var Age, Categorie;

    Age = parseFloat(document.getElementById("txtAge").value);

    if((Age > 5 && Age < 9))
    {
        Categorie = "Poussin";
    }
    else if((Age > 8 && Age < 11))
    {
        Categorie = "Pupille";
    }
    else if((Age > 11 && Age < 13))
    {
        Categorie = "Minime";
    }
    else if(Age >= 13)
    {
        Categorie = "Cadet";
    }

    document.getElementById("lblMessage").innerHTML = "Vous etes dans la catégorie " + Categorie ;
}