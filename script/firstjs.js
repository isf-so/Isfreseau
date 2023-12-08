// Déclarer pseudoValue en dehors des fonctions pour qu'elle soit accessible à l'échelle globale
var pseudoValue;

function connexion() {
    // Récupérer la valeur de l'input pseudo
    pseudoValue = document.getElementById("pseudo").value;

    // Vérifier si l'input pseudo est rempli
    if (pseudoValue.trim() !== "") {
        // Supprimer l'élément
        document.querySelector(".connexion").remove();
        document.querySelector("#salut").innerHTML = pseudoValue;
    } else {
        // Gérer le cas où l'input pseudo n'est pas rempli
        alert("Veuillez saisir un pseudo avant de soumettre le formulaire.");
    }
}

function post() {
    // Récupérer les valeurs du formulaire
    let text = document.querySelector('#caption').value;

    // Créer un élément de publication
    let postElement = document.createElement('div');
    postElement.innerHTML = pseudoValue + " : " + text + '</p>';
    

    // Ajouter la publication à la div #post
    document.getElementById('post').appendChild(postElement);
}
