// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/js/pages/adm.scolarite.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 07/07/2022 13:30
import $ from 'jquery'
import { invalidChamps, validChamps, completeChamps } from '../util'
import Routing from 'fos-router'

$(document).on('click', '#afficheEtudiants', (e) => {
  e.preventDefault()
  e.stopPropagation()
  const semestre = $('#semestre')
  const anneeUniversitaire = $('#anneeUniversitaire')

  if (semestre.val() !== '' && anneeUniversitaire.val() !== '') {
    validChamps(anneeUniversitaire)
    validChamps(semestre)
    $('#zone').empty().load(Routing.generate('administration_scolarite_saisie_promo_ajax', {
      semestre: semestre.val(),
      anneeUniversitaire: anneeUniversitaire.val(),
    }))
  } else {
    invalidChamps(anneeUniversitaire)
    invalidChamps(semestre)
  }
})

$(document).on('click', '#importEtudiants', (e) => {
  e.preventDefault()
  e.stopPropagation()
  const semestre = $('#semestre')
  const anneeUniversitaire = $('#anneeUniversitaire')

  if (semestre.val() !== '' && anneeUniversitaire.val() !== '') {
    validChamps(anneeUniversitaire)
    validChamps(semestre)
    $('#zone').empty().load(Routing.generate('administration_scolarite_saisie_promo_import_ajax', {
      semestre: semestre.val(),
      anneeUniversitaire: anneeUniversitaire.val(),
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
