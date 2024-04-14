// Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/js/pages/adm.matieres.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 14/04/2024 11:54
import $ from 'jquery'
import Routing from 'fos-router'
import { addCallout } from '../util'

$('#matiere_semestre').change(function () {
  const semestreSelector = $(this)

  // Request the neighborhoods of the selected city.
  $.ajax({
    url: Routing.generate('api_liste_ue_by_semestre'),
    dataType: 'JSON',
    type: 'POST',
    data: {
      semestreid: semestreSelector.val(),
    },
    success(ues) {
      const matiereSelector = $('#matiere_ue')

      // Remove current options
      matiereSelector.html('')

      // Empty value ...
      matiereSelector.append(`<option value> Choisir une UE dans le semestre ${semestreSelector.find('option:selected').text()} ...</option>`)

      $.each(ues, (key, ue) => {
        matiereSelector.append(`<option value="${ue.id}">${ue.numeroUe} ${ue.libelle}</option>`)
      })
    },
    error(err) {
      alert('An error ocurred while loading data ...')
    },
  })

  $.ajax({
    url: Routing.generate('api_liste_parcour_by_semestre'),
    dataType: 'JSON',
    type: 'POST',
    data: {
      semestreid: semestreSelector.val(),
    },
    success(parcours) {
      const parcourSelector = $('#matiere_parcours')

      // Remove current options
      parcourSelector.html('')

      // Empty value ...
      parcourSelector.append(`<option value> Choisir (optionnel) un parcour pour le semestre ${semestreSelector.find('option:selected').text()} ...</option>`)

      $.each(parcours, (key, parcour) => {
        parcourSelector.append(`<option value="${parcour.id}">${parcour.libelle}</option>`)
      })
    },
    error(err) {
      alert('An error ocurred while loading data ...')
    },
  })

  $.ajax({
    url: Routing.generate('api_matieres_semestre', { semestre: semestreSelector.val() }),
    dataType: 'JSON',
    type: 'GET',
    success(matieres) {
      const parentSelector = $('#matiere_matiereParent')

      // Remove current options
      parentSelector.html('')

      // Empty value ...
      parentSelector.append(`<option value> Choisir (optionnel) une matière parent pour ${$('#matiere_libelle').val()} ...</option>`)

      $.each(matieres, (key, matiere) => {
        parentSelector.append(`<option value="${matiere.id}">${matiere.display}</option>`)
      })
    },
    error(err) {
      alert('An error ocurred while loading data ...')
    },
  })
})

$(document).on('click', '.change-diplome', function (e) {
  e.preventDefault()
  const $diplome = $(this).data('diplome')
  $.ajax({
    url: Routing.generate('administration_matiere_diplome', { diplome: $diplome }),
    dataType: 'HTML',
    type: 'GET',
    success(data) {
      $('#content_diplome').slideUp().empty().append(data)
        .slideDown()
      $('#export_csv').attr('href', Routing.generate('administration_matiere_export', {
        diplome: $diplome,
        _format: 'csv',
      }))
      $('#export_xlsx').attr('href', Routing.generate('administration_matiere_export', {
        diplome: $diplome,
        _format: 'xlsx',
      }))
      $('#export_pdf').attr('href', Routing.generate('administration_matiere_export', {
        diplome: $diplome,
        _format: 'pdf',
      }))
    },
  })
})

$(document).on('change', '.changeParcours', function () {
  $.ajax({
    url: Routing.generate('administration_matiere_change_parcours', {
      id: $(this).data('matiere'),
      parcours: $(this).val(),
    }),
    method: 'POST',
    success(data) {
      addCallout('Modification enregistrée', 'success')
    },
    error(e) {
      addCallout('Erreur lors de l\'enregistrement de la modification', 'danger')
    },
  })
})

$(document).on('change', '.changeUe', function () {
  $.ajax({
    url: Routing.generate('administration_matiere_change_ue', { id: $(this).data('matiere'), ue: $(this).val() }),
    method: 'POST',
    success(data) {
      addCallout('Modification enregistrée', 'success')
    },
    error(e) {
      addCallout('Erreur lors de l\'enregistrement de la modification', 'danger')
    },
  })
})
