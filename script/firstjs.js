// Déclarer pseudoValue en dehors des fonctions pour qu'elle soit accessible à l'échelle globale
var pseudoValue;
document.querySelector("header").remove();
function connexion() {
    // Récupérer la valeur de l'input pseudo
    pseudoValue = document.getElementById("pseudo").value;

    // Vérifier si l'input pseudo est rempli
    if (pseudoValue.trim() !== "") {
        // Supprimer l'élément
        document.querySelector(".connexion").remove();
        document.querySelector(".svg").innerHTML= '<svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 24 24" fill="none"stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3" /><circle cx="12" cy="10" r="3" /><circle cx="12" cy="12" r="10" /></svg>';
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
