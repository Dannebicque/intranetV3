// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/js/pages/adm.personnels.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 07/07/2022 13:30
import $ from 'jquery'
import { addCallout } from '../util'
import Routing from 'fos-router'

$(document).on('keyup', '#login_urca', function () {
  const $val = $(this).val()
  if ($val.length > 2) {
    $.ajax({
      url: Routing.generate('api_personnel_recherche', { needle: $val }),
      dataType: 'json',
      success(data) {
        let html = ''
        $('#result').empty()
        jQuery.each(data, (index, pers) => {
          html = `${html}<tr>`
            + `<td>${pers.nom}</td>`
            + `<td>${pers.prenom}</td>`
            + `<td>${pers.numeroHarpege}</td>`
            + `<td>${pers.username}</td>`
            + `<td>${pers.mail_univ}</td>`
            + `<td><a href="#" class="btn btn-success btn-outline btn-square addpersonnel" data-provide="tooltip" data-placement="bottom" title="Ajouter au departement" data-slug="${pers.slug}"><i class="fas fa-plus"></i></a></td>`
            + '</tr>'
        })

        html = `${html}<tr>`
          + `<td colspan="6"><a href="${Routing.generate('administration_personnel_create')}" class="btn btn-success btn-block" data-provide="tooltip" data-placement="bottom" title="Ajouter un intervenant"><i class="fas fa-plus"></i> Si l'internvenant n'est pas présent dans l'intranet vous pouvez l'ajouter</a></td>`
          + '</tr>'
        $('#result').append(html)
      },
    })
  }
})

$(document).on('click', '.addpersonnel', function () {
  $.ajax({
    url: Routing.generate('api_personnel_add_to_departement', { slug: $(this).data('slug') }),
    dataType: 'json',
    success() {
      addCallout('Personnel ajouté au département !', 'success')
    },
  })
})

$(document).on('change', '.updateRole', function () {
  $.ajax({
    url: Routing.generate('administration_personnel_departement_modifier_droit', { personnel: $('#personnel').val() }),
    method: 'POST',
    data: { droit: $(this).val() },
    success() {
      addCallout('Droits modifiés !', 'success')
    },
  })
})
