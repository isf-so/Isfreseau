document.querySelector("#salut").innerHTML= window.pseudoVariable ;
function post() {
    // Récupérer les valeurs du formulaire
    var caption = document.getElementById('caption').value;

    // Créer un élément de publication
    var postElement = document.createElement('div');
    postElement.innerHTML = window.pseudoVariable+" : " +caption + '</p>';

    // Ajouter la publication à la div #post
    document.getElementById('post').appendChild(postElement);


}
