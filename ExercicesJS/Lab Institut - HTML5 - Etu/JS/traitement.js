function frmMembre_onsubmit()
{
    var Valide = false, Confirmation;

            Confirmation = confirm("Voulez-vous vraiment vous inscrire?");

            if (Confirmation === true)
            {
                Valide = true;
            }
            else
            {
                Valide = false;
            }
    return Valide;
}