// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/messagerie.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 11/09/2020 12:32

$(document).on('click', '.messagerie-filtre', function (e) {
  e.preventDefault()
  e.stopPropagation()
  $('.messagerie-filtre').parent().removeClass('active')
  $(this).parent().addClass('active')
  $('#messages-liste').empty().load(Routing.generate('messagerie_filtre', {'filtre': $(this).data('filtre')}))
})

$(document).on('click', '#saveDraft', function (e) {
  $.ajax({
    url: Routing.generate('messagerie_draft'),
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
      $('#messages-liste').empty().load(Routing.generate('messagerie_filtre', {'filtre': 'draft'}))
    }
  })
})

$(document).on('click', '.message-read', function (e) {
  e.preventDefault()
  e.stopPropagation()

  $('#messages-liste').empty().load(Routing.generate('messagerie_message', {message: $(this).data('message')}))
})

$(document).on('click', '.message-read-auteur', function (e) {
  e.preventDefault()
  e.stopPropagation()

  $('#messages-liste').empty().load(Routing.generate('messagerie_message_envoye', {message: $(this).data('message')}))
})

$(document).on('click', '#new-message', function (e) {
  e.preventDefault()
  e.stopPropagation()

  $('#messages-liste').empty().load(Routing.generate('messagerie_nouveau'))
})

$(document).on('click', '#marquerNotificationsRead', function (e) {
  e.preventDefault()
  e.stopPropagation();

  $.ajax({
    url: Routing.generate('notification_marquer_lu'),
    success: function (e) {

      $('.notification').removeClass('media-new')
    }
  })
})

$(document).on('click', '#messageSent', function (e) {
  let messageToLibrePersonnel = []
  $('input:checkbox[name=messageToLibrePersonnel]:checked').each(function () {
    messageToLibrePersonnel.push($(this).val())
  })

  $(this).attr('disabled', true)
  $(this).text('Envoi en cours...')
  e.preventDefault()
  e.stopPropagation()
  $.ajax({
    url: Routing.generate('messagerie_sent'),
    data: {
      messageToSemestre: $('#messageToSemestre').val(),
      messageToGroupe: $('#messageToGroupe').val(),
      messageToLibreEtudiant: $('#messageToLibreEtudiant').val(),
      messageToLibrePersonnel: messageToLibrePersonnel,
      typeDestinataire: $('input[type=radio][name=messageDestinataireType]:checked').val(),
      copie: $('#messageCopy').val(),
      message: $('.ql-editor').html(),
      sujet: $('#messageSubject').val()
    },
    method: 'POST',
    success: function (data) {
      $('#messages-liste').empty().load(Routing.generate('messagerie_message_envoye', {message: data.message}))
      $('#messageSent').attr('disabled', false)
      $(this).text('Envoyer')
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
  $.ajax({
    url: Routing.generate('messagerie_change_etat'),
    method: 'POST',
    data: {
      etat: 'D',
      message: $(this).data('message')
    },
    success: function () {
      $('#messages-liste').empty().load(Routing.generate('messagerie_filtre', {'filtre': 'all'}))
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
