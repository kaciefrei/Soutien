// Charger les derniers cours sur la page d'accueil (index.html)
window.addEventListener('DOMContentLoaded', function() {
    // Récupérer les cours depuis le stockage local
    var cours = localStorage.getItem('cours');
    if (cours) {
      cours = JSON.parse(cours);
  
      // Afficher les cours sur la page d'accueil
      var latestCoursContainer = document.getElementById('latestCours');
      latestCoursContainer.innerHTML = ''; // Vider le conteneur
      for (var i = 0; i < cours.length; i++) {
        var cour = cours[i];
  
        // Créer un élément HTML pour le cours
        var coursElement = document.createElement('div');
        coursElement.innerHTML = '<a class="text-decoration-none text-dark" style="color: #6f42c1;">' + cour.subject + ' - ' + cour.level + ' - ' + cour.question + '</a>';

        // Ajouter le cours à la liste des derniers cours
        latestCoursContainer.appendChild(coursElement);
      }
    }
  });
  
  // Récupérer le formulaire de dépôt de cours
  var coursForm = document.getElementById('coursForm');
  
  // Ajouter un écouteur d'événement pour la soumission du formulaire de cours
  coursForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher le rechargement de la page
  
    // Récupérer les valeurs du formulaire
    var coursSubject = document.getElementById('subject').value;
    var coursLevel = document.getElementById('level').value;
    var coursQuestion = document.getElementById('question').value;
  
    // Créer un objet pour le cours
    var cour = {
      subject: coursSubject,
      level: coursLevel,
      question: coursQuestion,
      date: new Date().toISOString() // Ajouter la date actuelle
    };
  
    // Récupérer les cours existants depuis le stockage local
    var storedCours = localStorage.getItem('cours');
    if (storedCours) {
      storedCours = JSON.parse(storedCours);
    } else {
      storedCours = [];
    }
  
    // Ajouter le nouveau cours à la liste des cours
    storedCours.push(cour);
  
    // Sauvegarder les cours dans le stockage local
    localStorage.setItem('cours', JSON.stringify(storedCours));
  
    // Réinitialiser le formulaire
    coursForm.reset();
  
    // Afficher un message ou effectuer une action supplémentaire si nécessaire
  });
  