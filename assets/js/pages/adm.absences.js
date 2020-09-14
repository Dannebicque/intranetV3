// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.absences.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 14/09/2020 17:33
import {addCallout} from '../util'
import '../../vendor/datatables'
import {dataTableLangueFr} from '../lang/fr'

$(document).on('change', '#justifier_etudiant', function () {

  let table = $('#tableJustifier').DataTable()
  table.clear() //effacer le datatable
  table.destroy() //supprimer le datatable


  $.ajax({
    url: Routing.generate('administration_absences_liste_absence_etudiant', {etudiant: $(this).val()}),
    success: function (data) {
      $('#titre_justifie').html('Liste des absences de ' + $('#justifier_etudiant option:selected').text())
      let table = $('#tableJustifier').empty()
      table.append('<thead>\n' +
        '                <tr>\n' +
        '                    <th>Date</th>\n' +
        '                    <th>Heure</th>\n' +
        '                    <th>Matière</th>\n' +
        '                    <th>Justifier</th>\n' +
        '                    <th>Actions</th>\n' +
        '                </tr>\n' +
        '                </thead>' +
        '<tbody>')

      jQuery.each(data, function (index, absence) {
        let html = '<tr id="ligne_' + absence.id + '">\n' +
          '                        <td>' + absence.date + '</td>\n' +
          '                        <td>' + absence.heure + '</td>\n' +
          '                        <td>' + absence.matiere + '</td>\n' +
          '                        <td><input type="radio" value="1" data-absence="' + absence.id + '" name="radio_' + absence.id + '" class="justifieAbsence"'
        if (absence.justifie === true) {
          html = html + ' checked '
        }
        html = html + '> Oui | <input type="radio" value="0" data-absence="' + absence.id + '" name="radio_' + absence.id + '" class="justifieAbsence"'
        if (absence.justifie === false) {
          html = html + ' checked '
        }
        html = html + '> Non</td>\n' +
          '                        <td>' +
          // '<a href="' + Routing.generate('administration_absence_delete') + '" class="btn btn-danger supprimer"><i class="fas fa-trash"></i></a>' +
          '</td>\n' +
          '</tr>'
        table.append(html)
      })
      table.append('</tbody>')
      table.dataTable({
        'language': dataTableLangueFr
      })
    }
  })
})

$(document).on('click', '.justifieAbsence', function () {
  $.ajax({
    type: 'GET',
    url: Routing.generate('administration_absences_justifie', {absence: $(this).data('absence'), etat: $(this).val()}),
    error: function () {
      addCallout('Erreur lors de l\'enregistrement.', 'danger')
    },
    success: function (data) {
      if (data === true) {
        addCallout('Absence justifiée avec succés !', 'success')
      } else {
        addCallout('Absence non justifiée avec succés !', 'warning')
      }
    }
  })

})
