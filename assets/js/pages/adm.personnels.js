// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.personnels.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 26/08/2020 12:07

import '../../vendor/datatables'
import {dataTableLangueFr} from '../lang/fr'

$(document).ready(function () {
  $('#tableau').DataTable({
    'langue': dataTableLangueFr
  }) //regenerer le datatable avec les nouvelles data
})

$(document).on('keyup', '#login_urca', function () {
  const $val = $(this).val()
  if ($val.length > 2) {
    $.ajax({
      url: Routing.generate('api_personnel_recherche', {needle: $val}),
      dataType: 'json',
      success: function (data) {

        $('#result').empty()
        jQuery.each(data, function (index, pers) {
          const html = '<tr>' +
            '<td>' + pers.nom + '</td>' +
            '<td>' + pers.prenom + '</td>' +
            '<td>' + pers.numeroHarpege + '</td>' +
            '<td>' + pers.username + '</td>' +
            '<td>' + pers.mail_univ + '</td>' +
            '<td><a href="#" class="btn btn-success btn-outline btn-square addpersonnel" data-provide="tooltip" data-placement="bottom" title="Ajouter au departement" data-slug="' + pers.slug + '"><i class="fas fa-plus"></i></a></td>' +
            '</tr>'
          $('#result').append(html)
        })
      }
    })
  }
})

$(document).on('click', '.addpersonnel', function () {
  $.ajax({
    url: Routing.generate('api_personnel_add_to_departement', {slug: $(this).data('slug')}),
    dataType: 'json',
    success: function (data) {
      console.log(data)
      addCallout('Personnel ajouté au département !', 'success')
    }
  })
})

$(document).on('click', '.personnel_index_change', function () {
  $('.personnel_index_change').removeClass('active show')
  $(this).addClass('active show')
  const table = $('#tableau').DataTable()
  table.clear() //effacer le datatable
  table.destroy() //supprimer le datatable
  let $type = $(this).data('type')
  $.ajax({
    url: Routing.generate('api_enseignants_type', {type: $type}),
    dataType: 'json',
    success: function (data) {
      jQuery.each(data, function (index, pers) {
        //ajouter les lignes
        const html = '<tr>\n' +
          '                        <td>' + pers.nom + '</td>\n' +
          '                        <td>' + pers.prenom + '</td>\n' +
          '                        <td>' + pers.posteInterne + '</td>\n' +
          '                        <td>' + pers.telBureau + '</td>\n' +
          '                        <td>' + pers.bureau1 + '</td>\n' +
          '                        <td>' + pers.numeroHarpege + '</td>\n' +
          '                        <td>' + pers.mailUniv + '</td>\n' +
          '                        <td>\n' +
          '<a href="' + Routing.generate('administration_personnel_show', {id: pers.id}) + '" class="btn btn-info btn-outline btn-square" data-provide="tooltip"\n' +
          '   data-placement="bottom" title="Détails"><i class="fa fa-info"></i></a>\n' +
          '<a href="' + Routing.generate('administration_personnel_edit', {id: pers.id}) + '"\n' +
          '   class="btn btn-warning btn-outline btn-square"><i class="fa fa-edit"\n' +
          '                                                     data-provide="tooltip"\n' +
          '                                                     data-placement="bottom"\n' +
          '                                                     title="Modifier"></i></a>\n' +
          '<a href="' + Routing.generate('administration_personnel_delete', {id: pers.id}) + '" class="btn btn-danger btn-outline btn-square supprimer" data-id="id"><i\n' +
          '            class="fa fa-trash" data-provide="tooltip" data-placement="bottom"\n' +
          '            title="Supprimer"></i></a>' +
          '                        </td>\n' +
          '                    </tr>'
        $('#datatableau').append(html)
      })

      $('#export_csv').attr('href', Routing.generate('administration_personnel_export', {
        type: $type,
        '_format': 'csv'
      }))
      $('#export_xlsx').attr('href', Routing.generate('administration_personnel_export', {
        type: $type,
        '_format': 'xlsx'
      }))
      $('#export_pdf').attr('href', Routing.generate('administration_personnel_export', {
        type: $type,
        '_format': 'pdf'
      }))

      $('#tableau').DataTable({
        'langue': dataTableLangueFr
      }) //regenerer le datatable avec les nouvelles data
    }
  })
})

$(document).on('change', '.updateRole', function () {
  $.ajax({
    url: Routing.generate('admin_personnel_departement_modifier_droit', {personnel: $('#personnel').val()}),
    method: 'POST',
    data: {'droit': $(this).val()},
    success: function (data) {
      addCallout('Droits modifiés !', 'success')
    }
  })
})
