// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/js/pages/adm.alternances.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 07/07/2022 13:30
import $ from 'jquery'
import Swal from 'sweetalert2'
import { addCallout } from '../util'
import Routing from 'fos-router'

$(document).on('change', '.tuteurUniversitaireAlternance', function (e) {
  e.preventDefault()
  e.stopPropagation()
  $.ajax({
    url: Routing.generate('administration_alternance_update_tuteur_universitaire', {
      alternance: $(this).data('alternance'),
      personnel: $(this).val(),
    }),
    success() {
      addCallout('Tuteur universitaire enregistré !', 'success')
    },
    error() {
      addCallout('Une erreur est survenue !', 'danger')
    },
  })
})

$(document).on('click', '.initAllAlternance', function (e) {
  e.preventDefault()
  const url = $(this).attr('href')
  Swal.fire({
    title: 'Etes vous sûr?',
    text: 'Vous allez initialiser tous les suivis d\'alternances. Cela effacera les données déjà présente. !',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Oui, je confirme',
    cancelButtonText: 'Non, Annuler',
    customClass: {
      confirmButton: 'btn btn-primary',
      cancelButton: 'btn btn-secondary',
    },
    buttonsStyling: false,
  }).then((result) => {
    if (result.value) {
      $.ajax({
        url,
        type: 'POST',
        success() {
          addCallout('Initialisation effectuée avec succès', 'success')
          Swal.fire({
            title: 'Alternances initialisées!',
            text: 'Toutes les alternances ont été initialisées.',
            icon: 'success',
            confirmButtonText: 'OK',
            customClass: {
              confirmButton: 'btn btn-primary',
              cancelButton: 'btn btn-secondary',
            },
            buttonsStyling: false,
          })
        },
        error() {
          Swal.fire({
            title: 'Erreur lors de la tentative d\'initialisation!',
            text: 'Merci de renouveler l\'opération',
            icon: 'error',
            confirmButtonText: 'OK',
            customClass: {
              confirmButton: 'btn btn-primary',
              cancelButton: 'btn btn-secondary',
            },
            buttonsStyling: false,
          })
          addCallout('Erreur lors de la tentative d\'initialisation', 'danger')
        },
      })
    } else if (
      // Read more about handling dismissals
      result.dismiss === 'cancel'
    ) {
      Swal.fire({
        title: 'Cancelled',
        text: 'OK! Tout est comme avant !',
        icon: 'error',
        confirmButtonText: 'OK',
        customClass: {
          confirmButton: 'btn btn-primary',
          cancelButton: 'btn btn-secondary',
        },
        buttonsStyling: false,
      })
    }
  })
})
