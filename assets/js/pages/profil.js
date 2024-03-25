// Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/js/pages/profil.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 20/02/2024 18:42
import $ from 'jquery'
import Routing from 'fos-router'
import { addCallout } from '../util'
import { post } from '../fetch'

if (document.getElementById('changeSemestreNotes')) {
  changeSemestreNotes()
}

function changeSemestreNotes() {
  document.getElementById('changeSemestreNotes').addEventListener('change', async (elem) => {
    const scolarite = elem.target.value
    if (scolarite !== '') {
      const element = elem.target
      document.getElementById('changeSemestreNotesTitre').innerHTML = `Résultats du semestre ${element.options[element.selectedIndex].text}`
      const response = await fetch(Routing.generate('profil_etudiant_apc_ancien_semestre', {
        scolarite,
      }))
      document.getElementById('changeSemestreNotesZone').innerHTML = await response.text()
    }
  })
}

$(document).on('change', '#chgt_etudiant_departement', function () {
  $.ajax({
    url: Routing.generate('user_change_departement', { etudiant: $(this).data('etudiant'), departement: $(this).val() }),
    method: 'POST',
    success(e) {
      $('#liste_groupes').empty().append('<tr><td colspan="3">Aucun groupe</td></tr>')
      addCallout('Mofification enregistrée !', 'success')
    },
    error(e) {
      addCallout('Erreur lors de la sauvegarde de la modification !', 'danger')
    },

  })
})

$(document).on('change', '#chgt_etudiant_fin', function () {
  $.ajax({
    url: Routing.generate('user_change_annee_sortie', { etudiant: $(this).data('etudiant'), annee: $(this).val() }),
    method: 'POST',
    success(e) {
      addCallout('Mofification enregistrée !', 'success')
    },
    error(e) {
      addCallout('Erreur lors de la sauvegarde de la modification !', 'danger')
    },

  })
})

$(document).on('click', '.changeprofil', function (e) {
  e.preventDefault()
  e.stopPropagation()
  const $onglet = $(this)
  $('.changeprofil').removeClass('active show')
  $(this).addClass('active show')
  $('#profilContent').empty().load($(this).attr('href'), () => {
    if ($onglet.attr('id') === 'profil-about') {
      const obj = document.querySelector('#valideCommentaire')
      obj.addEventListener('click', (e) => {
        e.preventDefault()
        e.stopPropagation()
        post(Routing.generate('profil_etudiant_ajout_commentaire', { slug: obj.getAttribute('data-slug') }), {
          commentaire: document.querySelector('#texteCommentaire').value,
        })
          .then((data) => {
            // Handle data
            const html = document.createElement('p')
            html.textContent = data.commentaire

            document.querySelector('#listeCommentaire').appendChild(html)
            addCallout('Commentaire ajouté avec succès.', 'success')
            document.querySelector('#texteCommentaire').value = ''
          }).catch((error) => {
          // Handle error
            addCallout('Erreur lors de l\'ajout du commentaire.', 'error')
          })
      })
    }
    if ($onglet.attr('id') === 'profil-notes-apc' || $onglet.data('id') === 'profil-notes-apc') {
      changeSemestreNotes()
    }
    if ($onglet.attr('id') === 'profil-notes') {
      // $.get(Routing.generate('profil_etudiant_ajax_notes_graph', {slug: $(graph).data('etudiant')}), function (datasets) {
      //   console.log(datasets)
      //   let labels = []
      //   new Chart(graph, {
      //     type: 'radar',
      //
      //     // Data
      //     //
      //     data: {
      //       labels: ['Mx101', 'Mx102', 'Mx201', 'Mx203', 'Mx202', 'Mx204', 'Moyenne'],
      //       datasets: datasets
      //     },
      //
      //     // Options
      //     //
      //     options: {
      //       responsive: false,
      //       legend: {
      //         display: true
      //       }
      //     }
      //   })
      // })

    }
  })
})

$(document).on('click', '#btnabs', function (e) {
  $.ajax({
    url: Routing.generate('administration_absences_ajax_add'),
    data: {
      etudiant: $(this).data('etudiant'),
      date: $('#jourabs').val(),
      matiere: $('#moduleabs').val(),
      heure: $('#heureabs').val(),
      justif: $('input[type=radio][name=justifabs]:checked').val(),
    },
    method: 'POST',
    success(data) {
      // ajout de la ligne
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

      const html = `<tr class="${classe}" id="ligne_${data.id}">\n`
        + `                    <td>${data.date} à ${data.heure}</td>\n`
        + `                    <td>${data.codeMatiere}</td>\n`
        + `                    <td>${texte}</td>\n`
        + `                    <td class="hide">${data.personnel}</td>\n`
        + '                    <td>\n'
        + '                        <button data-provide="modaler tooltip"\n'
        + `                                data-url="${Routing.generate('app_etudiant_absence_detail', { uuid: data.uuidString })}"\n`
        + '                                class="btn btn-info btn-outline btn-square btn-xs"\n'
        + '                                data-placement="bottom"\n'
        + '                                title="Détails"\n'
        + '                                data-title="Détails de l\'absence"\n'
        + '                        >\n'
        + '                            <i class="fas fa-info"></i>\n'
        + '                        </button>\n'
        + '                    </td>\n'
        + '                        <td>\n'
        + '                            <div class="custom-control custom-control-lg custom-checkbox">\n'
        + `                                <input type="checkbox" class="custom-control-input checkAbsence" id="check_${data.id}"\n`
        + `                                       data-absence="${data.id}" ${checked}>\n`
        + `                                <label class="custom-control-label" for="check_${data.id}">Justifiée*</label>\n`
        + '                            </div>\n'
        + '                        </td>\n'
        + '                </tr>'

      $('#tableAbsence > tbody:last').append(html)
    },
  })
})

$(document).on('click', '.checkAbsence', function (e) {
  const absence = $(this).data('absence')
  let etat = 0

  if (($(this).is(':checked'))) {
    etat = 1
  }

  $.ajax({
    url: Routing.generate('administration_absences_justifie', { absence, etat }),
    type: 'GET',
    success(data) {
      if (data) {
        $(`#ligne_${absence}`).removeClass('bg-pale-warning').addClass('bg-pale-success')
      } else {
        $(`#ligne_${absence}`).removeClass('bg-pale-success').addClass('bg-pale-warning')
      }
    },
  })
})

$(document).on('click', '#btnInit', function () {
  $.ajax({
    url: Routing.generate('security_password_init', { user: $(this).data('personnel') }),
    method: 'POST',
    success(e) {
      addCallout('Mot de passe initialisé !', 'success')
    },
    error(e) {
      addCallout('Erreur lors l\'initialisation du mot de passe !', 'danger')
    },

  })
})

$(document).on('change', '#chgt_etudiant_semestre', function () {
  $.ajax({
    url: Routing.generate('user_change_semestre', { etudiant: $(this).data('etudiant'), semestre: $(this).val() }),
    method: 'POST',
    success(e) {
      $('#liste_groupes').empty().append('<tr><td colspan="3">Aucun groupe</td></tr>')
      addCallout('Mofification enregistrée !', 'success')
    },
    error(e) {
      addCallout('Erreur lors de la sauvegarde de la modification !', 'danger')
    },

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
