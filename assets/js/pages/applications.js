// Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/js/pages/applications.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 31/07/2023 16:19
import $ from 'jquery'
import Routing from 'fos-router'
import { addCallout } from '../util'

$(document).on('click', '.changeapplication', function (e) {
  e.preventDefault()
  e.stopPropagation()

  $('.changeapplication').removeClass('active show')
  $(this).addClass('active show')
  $('#mainContent').empty().load($(this).attr('href'))
})

$(document).on('change', '#selectsemestre', function () {
  // matieres
  $('#listegroupe').empty()
  const selectMatiere = $('#selectmatiere')
  const selectGroupes = $('#selectgroupes')
  $.ajax(
    {
      url: Routing.generate('api_matieres_semestre', { semestre: $(this).val() }),
      dataType: 'json', // Return data type (what we expect).
      success(data) {
        selectMatiere.empty()
        selectMatiere.append($('<option></option>')
          .attr('value', '')
          .text('Choisir une matière'))
        jQuery.each(data, (index, matiere) => {
          selectMatiere.append($('<option></option>')
            .attr('value', `${matiere.typeMatiere}_${matiere.id}`)
            .text(matiere.display))
        })
        console.log(selectMatiere)
        // todo: a remplacer
        // selectMatiere.attr('data-provide', 'selectpicker')
        // selectMatiere.attr('data-live-search', 'true')
      },
      error() {
        addCallout('Erreur lors de la tentative d\'affichage des matières du semestres. Veuillez contacter le responsable de l\'intranet si le problème persiste !', 'danger')
      },
    },
  )
  // groupes
  $.ajax(
    {
      url: Routing.generate('api_type_groupe_semestre', { semestre: $(this).val() }),

      dataType: 'json', // Return data type (what we expect).
      success(data) {
        selectGroupes.empty()
        selectGroupes.append($('<option></option>')
          .attr('value', '')
          .text('Choisir un type de groupe'))
        jQuery.each(data, (index, typeGroupe) => {
          selectGroupes.append($('<option></option>')
            .attr('value', typeGroupe.id)
            .text(typeGroupe.libelle))
        })
      },
      error() {
        addCallout('Erreur lors de la tentative d\'affichage des groupes du semestres. Veuillez contacter le responsable de l\'intranet si le problème persiste !', 'danger')
      },
    },
  )
})

$(document).on('change', '#selectgroupes', function () {
  const $lgr = $('#listegroupe')
  // matieres
  $.ajax(
    {
      url: Routing.generate('api_groupe_type_groupe', { typeGroupe: $(this).val() }),
      dataType: 'json', // Return data type (what we expect).
      success(data) {
        $lgr.empty()
        let $html = ''
        jQuery.each(data, (index, groupe) => {
          $html += `<input type="checkbox" checked name="detail_groupes[]" value="${groupe.id}"> ${groupe.libelle} | `
        })
        $lgr.html($html)
      },
      error() {
        addCallout('Erreur lors de la tentative d\'affichage des groupes du semestres. Veuillez contacter le responsable de l\'intranet si le problème persiste !', 'danger')
      },
    },
  )
})

$(document).on('click', '#add_rattrapage', () => {
  $('#bloc_add_rattrapage').toggle()
})

$(document).on('click', '#add_carnet', () => {
  $('#bloc_add_carnet').toggle()
})
