function btnCalculer_onclick()
{
    var prixBase,age,prixTotal;

    prixBase = document.getElementById("txtBasePrix").value;
    age = document.getElementById("txtAge").value;
    if(document.getElementById("radMidi").checked === true)
    {
        if (document.getElementById("chkMiSession").checked === true)
        {
            if (age === 16)
            {
                prixBase = prixBase * 0.40;
            }
        }
    }
    prixTotal = prixBase;
    document.getElementById("lblMessage").innerHTML = "le cout pour regarder le film sera de: " + prixTotal;
}

function lstOption_onchange()
{
    var film;

    film = document.getElementById("lstOptions").value;

    document.getElementById("imgFilm").src = "img/" + film + ".jpg";
}