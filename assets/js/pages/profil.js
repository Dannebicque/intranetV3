// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/profil.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 06/10/2020 12:23
import {addCallout} from '../util'

require('chart.js')

$(document).on('change', '#chgt_etudiant_departement', function () {
  $.ajax({
    url: Routing.generate('user_change_departement', {etudiant: $(this).data('etudiant'), departement: $(this).val()}),
    method: 'POST',
    success: function (e) {
      $('#liste_groupes').empty().append('<tr><td colspan="3">Aucun groupe</td></tr>')
      addCallout('Mofification enregistrée !', 'success')
    },
    error: function (e) {
      addCallout('Erreur lors de la sauvegarde de la modification !', 'danger')
    }

  })
})

$(document).on('change', '#chgt_etudiant_fin', function () {
  $.ajax({
    url: Routing.generate('user_change_annee_sortie', {etudiant: $(this).data('etudiant'), annee: $(this).val()}),
    method: 'POST',
    success: function (e) {
      addCallout('Mofification enregistrée !', 'success')
    },
    error: function (e) {
      addCallout('Erreur lors de la sauvegarde de la modification !', 'danger')
    }

  })
})

$(document).on('click', '.changeprofil', function (e) {
  e.preventDefault()
  e.stopPropagation()
  let $onglet = $(this)
  $('.changeprofil').removeClass('active show')
  $(this).addClass('active show')
  $('#profilContent').empty().load($(this).attr('href'), function () {
    if ($onglet.attr('id') === 'profil-notes') {
      console.log('graph')
      const graph = $('#chart-radar')
      $.get(Routing.generate('profil_etudiant_ajax_notes_graph', {slug: $(graph).data('etudiant')}), function (datasets) {
        console.log(datasets)
        let labels = []
        new Chart(graph, {
          type: 'radar',

          // Data
          //
          data: {
            labels: ['Mx101', 'Mx102', 'Mx201', 'Mx203', 'Mx202', 'Mx204', 'Moyenne'],
            datasets: datasets
          },

          // Options
          //
          options: {
            responsive: false,
            legend: {
              display: true
            }
          }
        })
      })

    }
  })


})

$(document).on('change', '.addfavori', function (e) {
  e.preventDefault()
  e.stopPropagation()

  $.ajax({
    url: Routing.generate('user_add_favori'),
    method: 'POST',
    data: {
      'user': $(this).val(),
      'etat': $(this).prop('checked')
    }
  })
})

$(document).on('click', '#btnabs', function (e) {
  $.ajax({
    url: Routing.generate('administration_absences_ajax_add'),
    data: {
      'etudiant': $(this).data('etudiant'),
      'date': $('#jourabs').val(),
      'matiere': $('#moduleabs').val(),
      'heure': $('#heureabs').val(),
      'justif': $('input[type=radio][name=justifabs]:checked').val()
    },
    method: 'POST',
    success: function (data) {
      //ajout de la ligne
      let classe = ''
      let texte = ''
      let checked = ''
      if (data.justifie === true) {
        classe = 'bg-pale-success'
        texte = 'Oui'
        checked = 'checked'
      } else {
        classe = 'bg-pale-warning'
        texte = 'Non'
        checked = ''
      }

      let html = '<tr class="' + classe + '" id="ligne_' + data.id + '">\n' +
        '                    <td>' + data.date + ' à ' + data.heure + '</td>\n' +
        '                    <td>' + data.codeMatiere + '</td>\n' +
        '                    <td>' + texte + '</td>\n' +
        '                    <td class="hide">' + data.personnel + '</td>\n' +
        '                    <td>\n' +
        '                        <button data-provide="modaler tooltip"\n' +
        '                                data-url="' + Routing.generate('app_etudiant_absence_detail', {'uuid': data.uuidString}) + '"\n' +
        '                                class="btn btn-info btn-outline btn-square btn-xs"\n' +
        '                                data-placement="bottom"\n' +
        '                                title="Détails"\n' +
        '                                data-title="Détails de l\'absence"\n' +
        '                        >\n' +
        '                            <i class="fas fa-info"></i>\n' +
        '                        </button>\n' +
        '                    </td>\n' +
        '                        <td>\n' +
        '                            <div class="custom-control custom-control-lg custom-checkbox">\n' +
        '                                <input type="checkbox" class="custom-control-input checkAbsence" id="check_' + data.id + '"\n' +
        '                                       data-absence="' + data.id + '" ' + checked + '>\n' +
        '                                <label class="custom-control-label" for="check_' + data.id + '">Justifiée*</label>\n' +
        '                            </div>\n' +
        '                        </td>\n' +
        '                </tr>'

      console.log(html)
      $('#tableAbsence > tbody:last').append(html)
    }
  })
})

$(document).on('click', '.checkAbsence', function (e) {
  let absence = $(this).data('absence')
  let etat = 0

  if (($(this).is(':checked'))) {
    etat = 1
  }

  $.ajax({
    url: Routing.generate('administration_absences_justifie', {'absence': absence, 'etat': etat}),
    type: 'GET',
    success: function (data) {
      if (data) {
        $('#ligne_' + absence).removeClass('bg-pale-warning').addClass('bg-pale-success')
      } else {
        $('#ligne_' + absence).removeClass('bg-pale-success').addClass('bg-pale-warning')
      }
    }
  })

})

$(document).on('change', '#chgt_etudiant_semestre', function () {
  $.ajax({
    url: Routing.generate('user_change_semestre', {etudiant: $(this).data('etudiant'), semestre: $(this).val()}),
    method: 'POST',
    success: function (e) {
      $('#liste_groupes').empty().append('<tr><td colspan="3">Aucun groupe</td></tr>')
      addCallout('Mofification enregistrée !', 'success')
    },
    error: function (e) {
      addCallout('Erreur lors de la sauvegarde de la modification !', 'danger')
    }

  })
})



/*        {% for semestre in semestres %}
  {
    label: "S1",
      backgroundColor: "rgba(51,202,185,0.7)",
    borderColor: "rgba(0,0,0,0)",
    pointBackgroundColor: "rgba(51,202,185,0.7)",
    pointBorderColor: "#fff",
    pointHoverBackgroundColor: "#fff",
    pointHoverBorderColor: "rgba(51,202,185,0.7)",
    data: [10, 9, 19, 8, 15, 16, 8.5]
  }{% if not loop.last %},{% endif %}
  {% endfor %}

 */
