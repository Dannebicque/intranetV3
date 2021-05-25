// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.etudiants.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 23/05/2021 14:06
import {dataTableLangueFr} from '../lang/fr'

const table = $('#datatableEtudiants').DataTable({})
table.clear() //effacer le datatable
table.destroy() //supprimer le datatable

$('#datatableEtudiants').DataTable({
  'language': dataTableLangueFr,
  'processing': true,
  'serverSide': true,
  'ajax': Routing.generate('api_etudiant_departement'),
  'sAjaxDataProp': 'data',
  'order': [[1, 'asc'], [2, 'asc']],
  'pageLength': 25,
  'columns': [
    {'data': 'numetudiant'},
    {'data': 'nom'},
    {'data': 'prenom'},
    {'data': 'semestre'},
    {'data': 'etat'},
    {'data': 'profil'}]
})


$(document).on('change', '.changeEtat', function () {
  $.ajax({
    url: Routing.generate('adm_etudiant_change_etat', {uuid: $(this).data('etudiant'), etat: $(this).val()}),
    method: 'POST',
    success: function () {

    }
  })
})

$(document).on('change', '.editEtudiant', function () {
  $.ajax({
    url: Routing.generate('adm_etudiant_edit_ajax', {id: $(this).data('etudiant')}),
    method: 'POST',
    data: {
      field: $(this).data('field'),
      value: $(this).val()
    },
    success: function () {
    }
  })
})

