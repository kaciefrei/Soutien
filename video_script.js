// Charger les dernières vidéos sur la page d'accueil (index.html)
window.addEventListener('DOMContentLoaded', function() {
    // Récupérer les vidéos depuis le stockage local
    var videos = localStorage.getItem('videos');
    if (videos) {
      videos = JSON.parse(videos);
  
      // Afficher les vidéos sur la page d'accueil
      var latestVideosContainer = document.getElementById('latestVideos');
      latestVideosContainer.innerHTML = ''; // Vider le conteneur
      for (var i = 0; i < videos.length; i++) {
        var video = videos[i];
  
        // Créer un élément HTML pour la vidéo
        var videoElement = document.createElement('div');
        videoElement.innerHTML = video.title + '</a> - ' + video.subject + ' - <a href="' + video.link + '">' + video.link + '</a><br>' + '<div class="embed-responsive embed-responsive-16by9">' +
        '<iframe class="embed-responsive-item" src="' + video.link + '" allowfullscreen></iframe>' +
        '</div><br>';
      

  
        // Ajouter la vidéo à la liste des dernières vidéos
        latestVideosContainer.appendChild(videoElement);
      }
    }
  });
  
  // Récupérer le formulaire de dépôt de vidéos
  var videoForm = document.getElementById('videoForm');
  
  // Ajouter un écouteur d'événement pour la soumission du formulaire de vidéos
  videoForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher le rechargement de la page
  
    // Récupérer les valeurs du formulaire
    var videoLink = document.getElementById('videoLink').value;
    var videoTitle = document.getElementById('videoTitle').value;
    var videoSubject = document.getElementById('videoSubject').value;
  
    // Créer un objet pour la vidéo
    var video = {
      link: videoLink,
      title: videoTitle,
      subject: videoSubject,
      date: new Date().toISOString() // Ajouter la date actuelle
    };
  
    // Récupérer les vidéos existantes depuis le stockage local
    var storedVideos = localStorage.getItem('videos');
    if (storedVideos) {
      storedVideos = JSON.parse(storedVideos);
    } else {
      storedVideos = [];
    }
  
    // Ajouter la nouvelle vidéo à la liste des vidéos
    storedVideos.push(video);
  
    // Sauvegarder les vidéos dans le stockage local
    localStorage.setItem('videos', JSON.stringify(storedVideos));
  
    // Réinitialiser le formulaire
    videoForm.reset();
  
    // Afficher un message ou effectuer une action supplémentaire si nécessaire
  });
  