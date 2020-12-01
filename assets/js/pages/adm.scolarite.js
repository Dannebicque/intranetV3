// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.scolarite.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 01/12/2020 22:04
import {invalidChamps, validChamps, completeChamps} from '../util'


$(document).on('click', '#afficheEtudiants', function (e) {
  e.preventDefault()
  e.stopPropagation()
  const semestre = $('#semestre')
  const anneeUniversitaire = $('#anneeUniversitaire')

  if (semestre.val() !== '' && anneeUniversitaire.val() !== '') {
    validChamps(anneeUniversitaire)
    validChamps(semestre)
    $('#zone').empty().load(Routing.generate('administration_scolarite_saisie_promo_ajax', {
      semestre: semestre.val(),
      anneeUniversitaire: anneeUniversitaire.val()
    }))
  } else {
    invalidChamps(anneeUniversitaire)
    invalidChamps(semestre)
  }
})

$(document).on('click', '#importEtudiants', function (e) {
  e.preventDefault()
  e.stopPropagation()
  const semestre = $('#semestre')
  const anneeUniversitaire = $('#anneeUniversitaire')

  if (semestre.val() !== '' && anneeUniversitaire.val() !== '') {
    validChamps(anneeUniversitaire)
    validChamps(semestre)
    $('#zone').empty().load(Routing.generate('administration_scolarite_saisie_promo_import_ajax', {
      semestre: semestre.val(),
      anneeUniversitaire: anneeUniversitaire.val()
    }))
  } else {
    invalidChamps(anneeUniversitaire)
    invalidChamps(semestre)
  }
})

$(document).on('change', '#semestre', function () {
  completeChamps($(this))
})

$(document).on('change', '#anneeUniversitaire', function () {
  completeChamps($(this))
})
