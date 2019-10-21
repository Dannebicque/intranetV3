// Copyright (C) 10 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/public/src/assets/js/script/partials/messagerie.js
// @author     David Annebicque
// @project intranetv3
// @date 21/10/2019 09:52
// @lastUpdate 19/10/2019 17:49

$(document).on('click', '.messagerie-filtre', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $('#messages-liste').empty().load(Routing.generate('messagerie_filtre', {'filtre': $(this).data('filtre')}));
});

$(document).on('click', '.message-read', function (e) {
  e.preventDefault();
  e.stopPropagation();

  $('#messages-liste').empty().load(Routing.generate('messagerie_message', {message: $(this).data('message')}));
})

$(document).on('click', '#new-message', function (e) {
  e.preventDefault();
  e.stopPropagation();

  $('#messages-liste').empty().load(Routing.generate('messagerie_nouveau'));
})

$(document).on('click', '#marquerNotificationsRead', function (e) {
  e.preventDefault();
  e.stopPropagation();

  $.ajax({
    url: Routing.generate('notification_marquer_lu'),
    success: function (e) {

      $('.notification').removeClass('media-new')
    }
  })
})

$(document).on('click', '#messageSent', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $.ajax({
    url: Routing.generate('messagerie_sent'),
    data: {
      messageToSemestre: $('#messageToSemestre').val(),
      messageToGroupe: $('#messageToGroupe').val(),
      messageToLibreEtudiant: $('#messageToLibreEtudiant').val(),
      messageToLibrePersonnel: $('#messageToLibrePersonnel').val(),
      typeDestinataire: $('input[type=radio][name=messageDestinataireType]:checked').val(),
      copie: $('#messageCopy').val(),
      message: $('.ql-editor').html(),
      sujet: $('#messageSubject').val()
    },
    method: 'POST',
    success: function (data) {
      //baculer vers l'affichage du message + statistiques d'envois
    }
  })
})

$(document).on('click', '.starred', function () {
  $.ajax({
    url: Routing.generate('messagerie_change_etat'),
    method: 'POST',
    data: {
      valeur: 'S',
      message: $(this).data('message')
    },
    error: function () {
      $(this).prop('checked', false)
    }
  })
})

$(document).on('click', '#deleteMessage', function () {
  console.log($(this).data('message'))
  $.ajax({
    url: Routing.generate('messagerie_change_etat'),
    method: 'POST',
    data: {
      etat: 'D',
      message: $(this).data('message')
    },
    success: function () {
      //todo: retourner à la page avant
    }
  })
})

$(document).on('click', '.messageDestinataireType', function () {
  const type = $(this).val()
  const blocDestLibreEtudiant = $('#blocDestLibreEtudiant')
  const blocDestLibrePersonnel = $('#blocDestLibrePersonnel')
  const blocDestMessgaeInfo = $('#blocDestMessgaeInfo')
  const blocDestGroupe = $('#blocDestGroupe')
  const blocDestSemestre = $('#blocDestSemestre')

  if (type === 'e'){
    blocDestLibreEtudiant.show()
    blocDestLibrePersonnel.hide()
    blocDestMessgaeInfo.hide()
    blocDestGroupe.hide()
    blocDestSemestre.hide()
  } else if (type === 's'){
    blocDestLibreEtudiant.hide()
    blocDestLibrePersonnel.hide()
    blocDestMessgaeInfo.hide()
    blocDestGroupe.hide()
    blocDestSemestre.show()
  }else if (type === 'g'){
    blocDestLibreEtudiant.hide()
    blocDestLibrePersonnel.hide()
    blocDestMessgaeInfo.hide()
    blocDestGroupe.show()
    blocDestSemestre.hide()
  }else if (type === 'p'){
    blocDestLibreEtudiant.hide()
    blocDestLibrePersonnel.show()
    blocDestMessgaeInfo.hide()
    blocDestGroupe.hide()
    blocDestSemestre.hide()
  }
})
