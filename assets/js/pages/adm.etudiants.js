// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.etudiants.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 26/07/2020 11:13
import '../../vendor/datatables'
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
    {'data': 'profil'}]
})
