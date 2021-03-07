// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/settings.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 07/03/2021 21:05
import {addCallout} from '../util'

$(document).on('change', '.departementParDefaut', function (e) {
  $.ajax({
    url: Routing.generate('user_change_departement_defaut', {departement: $(this).val()}),
    method: 'POST',
    success: function (e) {
      addCallout('Mofification enregistrée !', 'success')
    },
    error: function (e) {
      addCallout('Erreur lors de la sauvegarde de la modification !', 'danger')
    }
  })
})

$(document).on('click', '#valideNewpassword', function (e) {
  e.preventDefault()
  const passwd1 = $('#password_1').val().trim()
  const passwd2 = $('#password_2').val().trim()
  const passwdactuel = $('#password_actuel').val().trim()

  if (passwd2 !== '' && passwd1 !== '' && passwdactuel !== '') {
    if (passwd1 !== passwd2) {
      addCallout('Les deux nouveaux mot de passe ne sont pas identique!', 'danger')
    } else {
      $.ajax({
        url: Routing.generate('user_change_password'),
        data: {
          passwd1: passwd1,
          passwd2: passwd2,
          passwdactuel: passwdactuel
        },
        method: 'POST',
        success: function (e) {
          addCallout('Mofification de votre mot de passe effectuée !', 'success')
        },
        error: function (e) {
          addCallout('Erreur lors de la modification du mot de passe !', 'danger')
        }
      })
    }
  } else {
    addCallout('Tous les champs sont obligatoires pour la modification du mot de passe!', 'danger')
  }
})

