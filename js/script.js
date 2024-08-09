// Sélectionne le formulaire et les éléments nécessaires
const formulaire = document.querySelector('form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const name_msg = document.querySelector('#name_message');
const email_msg = document.querySelector('#email_message');

// Ajoute un écouteur d'événements pour la soumission du formulaire
formulaire.addEventListener('submit', (event) => {
    event.preventDefault(); // Empêche l'envoi du formulaire

    // Récupère et nettoie les valeurs des champs
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    let valid = true;
    name_msg.textContent = ''; // Réinitialise le message d'erreur pour le nom
    email_msg.textContent = ''; // Réinitialise le message d'erreur pour l'email

    // Vérification du nom
    if (nameValue.length < 6) {
        valid = false; // Indique que le nom n'est pas valide
        name_msg.style.opacity = '1'; // Rendre le message visible
        name_msg.textContent = "Le nom doit avoir au minimum 6 caractères"; // Message d'erreur pour le nom
    }
    /**
    Vérification de l'email
    L'expression régulière suivante valide un email :
    ^[^\s@]+ : commence par un ou plusieurs caractères qui ne sont ni des espaces ni le symbole '@'.
    @[^\s@]+ : doit contenir un '@' suivi par un ou plusieurs caractères qui ne sont ni des espaces ni le symbole '@'.
    \. : doit inclure un point '.'.
    [^\s@]+$ : se termine par un ou plusieurs caractères qui ne sont ni des espaces ni le symbole '@'.
    On aurait pu limitter les extensions à .com et .fr
    const emailPattern = /^[^\s@]+@[^\s@]+\.(com|fr)$/;
     */
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailValue === '' || !emailPattern.test(emailValue)) {
        valid = false; // Indique que l'email n'est pas valide
        email_msg.style.opacity = '1'; // Rendre le message visible
        email_msg.textContent = "L'email doit être valide"; // Message d'erreur pour l'email
    }

    // Si les entrées sont valides, soumet le formulaire
    if (valid) {
        // Envoi du formulaire
        setTimeout(() => {
            alert('LES ENTRÉES SONT VALIDES'); // Alerte pour indiquer que les entrées sont valides
            formulaire.submit(); // Soumet le formulaire
        }, 300);
    }
});

