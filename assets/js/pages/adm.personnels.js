// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.personnels.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 08/09/2021 12:08

$(document).on('keyup', '#login_urca', function () {
  const $val = $(this).val()
  if ($val.length > 2) {
    $.ajax({
      url: Routing.generate('api_personnel_recherche', {needle: $val}),
      dataType: 'json',
      success: function (data) {
        let html = ''
        $('#result').empty()
        jQuery.each(data, function (index, pers) {
          html = html + '<tr>' +
            '<td>' + pers.nom + '</td>' +
            '<td>' + pers.prenom + '</td>' +
            '<td>' + pers.numeroHarpege + '</td>' +
            '<td>' + pers.username + '</td>' +
            '<td>' + pers.mail_univ + '</td>' +
            '<td><a href="#" class="btn btn-success btn-outline btn-square addpersonnel" data-provide="tooltip" data-placement="bottom" title="Ajouter au departement" data-slug="' + pers.slug + '"><i class="fas fa-plus"></i></a></td>' +
            '</tr>'

        })

        html = html + '<tr>' +
          '<td colspan="6"><a href="' + Routing.generate('administration_personnel_create') + '" class="btn btn-success btn-block" data-provide="tooltip" data-placement="bottom" title="Ajouter un intervenant"><i class="fas fa-plus"></i> Si l\'internvenant n\'est pas présent dans l\'intranet vous pouvez l\'ajouter</a></td>' +
          '</tr>'
        $('#result').append(html)
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
  let $type = $(this).data('type')
  $('#listePersonnel').load(Routing.generate('administration_personnel_load_liste', {type: $type}), function () {

    $('#tableau').DataTable({
      language: dataTableLangueFr
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
