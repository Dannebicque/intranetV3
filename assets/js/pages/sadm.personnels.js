// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/sadm.personnels.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 08/09/2021 12:08

$(document).on('keyup', '#sa_login_urca', function () {
  const departement = $(this).data('departement')
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
            '<td><a href="#" class="btn btn-success btn-outline btn-square sa_addpersonnel" data-provide="tooltip" data-placement="bottom" title="Ajouter au departement" data-slug="' + pers.slug + '" data-departement="' + departement + '"><i class="fas fa-plus"></i></a></td>' +
            '</tr>'
          $('#result').append(html)
        })
      }
    })
  }
})

$(document).on('click', '.sa_addpersonnel', function () {
  $.ajax({
    url: Routing.generate('api_personnel_add_to_departement', {
      slug: $(this).data('slug'),
      departement: $(this).data('departement')
    }),
    dataType: 'json',
    success: function (data) {
      addCallout('Personnel ajouté au departement !', 'success')

    }
  })
})

// $('#datatableRh').DataTable({
//   'processing': true,
//   'serverSide': true,
//   'language': dataTableLangueFr,
//   'ajax': Routing.generate('api_all_personnel'),
//   'sAjaxDataProp': 'data',
//   'pageLength': 25,
//   'order': [[1, 'asc']],
//   'columns': [
//     {'data': 'numero_harpege'},
//     {'data': 'nom'},
//     {'data': 'prenom'},
//     {'data': 'login'},
//     {'data': 'departements'},
//     {'data': 'deleted'},
//     {
//       'data': 'id',
//       'sortable': false,
//       'mRender': function (data, type, full) {
//         return '<a href="' + Routing.generate('sa_rh_personnel_show', {id: data}) + '" class="btn btn-info btn-outline btn-square" data-provide="tooltip"\n' +
//           '   data-placement="bottom" title="Détails"><i class="fa fa-info"></i></a>\n' +
//           '<a href="' + Routing.generate('sa_rh_personnel_edit', {id: data}) + '"\n' +
//           '   class="btn btn-warning btn-outline btn-square"\n' +
//           '                                                     data-provide="tooltip"\n' +
//           '                                                     data-placement="bottom"\n' +
//           '                                                     title="Modifier"><i class="fa fa-edit"></i></a>\n' +
//           '<a href="' + Routing.generate('sa_rh_delete_personnel', {id: data}) + '" class="btn btn-danger btn-outline btn-square supprimer" data-id="id"' +
//           '            data-provide="tooltip" data-placement="bottom"\n' +
//           '            title="Supprimer"><i class="fa fa-trash"></i></a>'
//       }
//     }]
//   //todo: gérer scrf sur le delete
// })

$(document).on('change', '.change_droit_pf', function () {
  $.ajax({
    url: Routing.generate('sa_personnel_departement_modifier_droit', {pf: $(this).data('pf')}),
    method: 'POST',
    data: {'droit': $(this).val()},
    success: function (data) {
      addCallout('Droits modifiés !', 'success')

    }
  })
})

$(document).on('click', '#searchLdap', function (e) {
  e.preventDefault()
  $.ajax({
    url: Routing.generate('ldap_search'),
    method: 'POST',
    data: {
      'numero': $('#personnel_numero_harpege').val()
    },
    success: function (data) {
      $('#personnel_mail_univ').val(data.mail)
      $('#personnel_username').val(data.login)
    }
  })
})
