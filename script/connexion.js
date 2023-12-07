function connexion() {
    // Récupère la valeur du champ pseudo
    var pseudoValue = document.getElementById("pseudo").value;
    // Vous pouvez également stocker la valeur dans une variable globale pour une utilisation ultérieure
    window.pseudoVariable = pseudoValue;
    window.location.href = "../pages/firstpage.html";
}
