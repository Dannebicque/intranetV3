// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/js/pages/messagerie.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 07/07/2022 13:30
import $ from 'jquery'
import '../tinyMce'
import { addCallout } from '../util'
import Routing from 'fos-router'

$(document).on('click', '.messagerie-filtre', function (e) {
  e.preventDefault()
  e.stopPropagation()
  $('.messagerie-filtre').parent().removeClass('active')
  $(this).parent().addClass('active')
  $('#messages-liste').empty().load(Routing.generate('messagerie_filtre', { filtre: $(this).data('filtre') }))
})

$(document).on('click', '#modalPj', (e) => {
  e.preventDefault()
  e.stopPropagation()
  $('#blocPj').toggle()
})

$(document).on('click', '.addFile', function (e) {
  e.preventDefault()
  e.stopPropagation()
  const $id = parseInt($(this).data('file')) + 1
  const html = `<div class="row" id="file${$id}">\n`
    + '            <div class="col-10">\n'
    + `                <input type="file" name="pj${$id}" id="pj${$id}" class="form-control pjFile" placeholder="Ajouter une pièce jointe">\n`
    + '            </div>\n'
    + '            <div class="col-1">\n'
    + `                <button class="btn btn-block btn-success-outline addFile" data-file="${$id}"><i class="fa fa-plus-circle"></i></button>\n`
    + '            </div>\n'
    + '            <div class="col-1">\n'
    + `                <button class="btn btn-block btn-danger-outline removeFile" data-file="${$id}"><i class="fa\n`
    + '            fa-minus-circle"></i></button>\n'
    + '            </div>\n'
    + '        </div>'

  $('#blocPj').append(html)
})

$(document).on('click', '.removeFile', function (e) {
  e.preventDefault()
  e.stopPropagation()
  const $id = $(this).data('file')
  $(`#file${$id}`).remove()
})

$(document).on('click', '#saveDraft', (e) => {
  e.preventDefault()
  e.stopPropagation()
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
      sujet: $('#messageSubject').val(),
    },
    method: 'POST',
    success(data) {
      $('#messages-liste').empty().load(Routing.generate('messagerie_filtre', { filtre: 'draft' }))
    },
    error() {
      addCallout('danger', 'Une erreur est survenue. Le message est vide.')
    },
  })
})

$(document).on('click', '.message-read', function (e) {
  e.preventDefault()
  e.stopPropagation()

  $('#messages-liste').empty().load(Routing.generate('messagerie_message', { message: $(this).data('message') }))
})

$(document).on('click', '.message-read-auteur', function (e) {
  e.preventDefault()
  e.stopPropagation()

  $('#messages-liste').empty().load(Routing.generate('messagerie_message_envoye', { message: $(this).data('message') }))
})

$(document).on('click', '#new-message', (e) => {
  e.preventDefault()
  e.stopPropagation()

  $('#messages-liste').empty().load(Routing.generate('messagerie_nouveau'), {}, (() => {
    tinymce.remove('#messageMessage')
    tinymce.init({
      selector: '#messageMessage',
      height: 300,
      menubar: false,
      language: 'fr_FR',
      content_css: 'default',
      toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | outdent indent',
    })
  }
  ))
})

$(document).on('change', '.pjFile', () => {
  let tailleTotale = 0
  $('input[type="file"]').each((file, element) => {
    if (typeof element.files[0] !== 'undefined') {
      tailleTotale += element.files[0].size
    }
  })
  tailleTotale /= 1024
  tailleTotale /= 1024
  $('#poidPj').show().html(`Le poids des pièces jointes est de ${tailleTotale.toFixed(3)} Mo`)
})

$(document).on('click', '#messageSent', function (e) {
  e.preventDefault()
  e.stopPropagation()

  const formData = new FormData($('form')[0])
  formData.append('messageMessage', tinymce.activeEditor.getContent({ format: 'html' }))

  // vérifie si tous les éléments sont présents.
  if (document.getElementById('messageSubject').value === '') {
    alert('Le sujet du message est vide.')
    return
  }

  // if (formData.get('messageMessage') === '') {
  //   alert('Le texte du message est vide.')
  //   return
  // }

  const typeDestinataire = document.querySelector('input[name="messageDestinataireType"]:checked')
  if (typeDestinataire === null) {
    alert('Veuillez indiquer un type de destinataire')
    return
  }
  switch (typeDestinataire.value) {
    case 'g':
      if (document.getElementById('messageToGroupe').value === '') {
        alert('Veuillez indiquer au moins un groupe.')
        return
      }
      break
    case 's':
      if (document.getElementById('messageToSemestre').value === '') {
        alert('Veuillez indiquer au moins un semestre.')
        return
      }
      break
    case 'e':
      if (document.getElementById('messageToLibreEtudiant').value === '') {
        alert('Veuillez indiquer au moins un étudiant.')
        return
      }
      break
    case 'p':
      const personnelDestinataire = document.querySelector('input[name="messageToLibrePersonnel[]"]:checked')
      if (personnelDestinataire === null) {
        alert('Veuillez choisir entre permanents et/ou vacataires.')
        return
      }
      break
  }

  const heure = new Date()

  $(this).attr('disabled', true)
  $(this).text('Envoi en cours...')

  $.ajax({
    url: Routing.generate('messagerie_sent'),
    data: formData,
    async: false,
    cache: false,
    contentType: false,
    enctype: 'multipart/form-data',
    processData: false,
    method: 'POST',
    success(data) {
      $('#messages-liste').empty().load(Routing.generate('messagerie_message_envoye', { message: data.message }))
      $('#messageSent').attr('disabled', false)
      $(this).text('Envoyer')
    },
    error(data) {
      $('#messageSent').attr('disabled', false).text('Envoyer')
      console.log(data)
      alert(`Une erreur est survenue lors de l'envoi du message (tentative à : ${heure.toLocaleDateString()} ${heure.toLocaleTimeString()})`)
    },
  })
})

$(document).on('click', '.send_draft', function (e) {
  e.preventDefault()
  e.stopPropagation()
  $('#messages-liste').empty().load(Routing.generate('messagerie_nouveau', { message: $(this).data('message') }))
})

$(document).on('click', '.starred', function () {
  $.ajax({
    url: Routing.generate('messagerie_change_etat'),
    method: 'POST',
    data: {
      valeur: 'S',
      message: $(this).data('message'),
    },
    error() {
      $(this).prop('checked', false)
    },
  })
})

$(document).on('click', '#deleteMessage', function () {
  $.ajax({
    url: Routing.generate('messagerie_change_etat'),
    method: 'POST',
    data: {
      etat: 'D',
      message: $(this).data('message'),
    },
    success() {
      $('#messages-liste').empty().load(Routing.generate('messagerie_filtre', { filtre: 'all' }))
    },
  })
})

$(document).on('click', '.messageDestinataireType', function () {
  const type = $(this).val()
  const blocDestLibreEtudiant = $('#blocDestLibreEtudiant')
  const blocDestLibrePersonnel = $('#blocDestLibrePersonnel')
  const blocDestMessgaeInfo = $('#blocDestMessgaeInfo')
  const blocDestGroupe = $('#blocDestGroupe')
  const blocDestSemestre = $('#blocDestSemestre')

  if (type === 'e') {
    blocDestLibreEtudiant.show()
    blocDestLibrePersonnel.hide()
    blocDestMessgaeInfo.hide()
    blocDestGroupe.hide()
    blocDestSemestre.hide()
  } else if (type === 's') {
    blocDestLibreEtudiant.hide()
    blocDestLibrePersonnel.hide()
    blocDestMessgaeInfo.hide()
    blocDestGroupe.hide()
    blocDestSemestre.show()
  } else if (type === 'g') {
    blocDestLibreEtudiant.hide()
    blocDestLibrePersonnel.hide()
    blocDestMessgaeInfo.hide()
    blocDestGroupe.show()
    blocDestSemestre.hide()
  } else if (type === 'p') {
    blocDestLibreEtudiant.hide()
    blocDestLibrePersonnel.show()
    blocDestMessgaeInfo.hide()
    blocDestGroupe.hide()
    blocDestSemestre.hide()
  }
})
