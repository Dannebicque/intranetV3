/*
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/assets/js/partials/absences.js
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 3/30/19 12:11 PM
 *  * @lastUpdate 3/30/19 12:10 PM
 *  *
 *
 */

let tabsences = [];

$(document).on('change', '#justifier_etudiant', function () {

  let table = $('#tableJustifier').DataTable();
  table.clear(); //effacer le datatable
  table.destroy(); //supprimer le datatable


  $.ajax({
    url: Routing.generate('administration_absences_liste_absence_etudiant', {etudiant: $(this).val()}),
    success: function (data) {
      let table = $('#tableJustifier').empty();
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

      jQuery.each(data, function (index, etudiant) {
        let html = '<tr>\n' +
          '                        <td>' + etudiant.date + '</td>\n' +
          '                        <td>' + etudiant.heure + '</td>\n' +
          '                        <td>' + etudiant.matiere + '</td>\n' +
          '                        <td><input type="radio" value="true" data-absence="'+ etudiant.id +'" name="radio_'+ etudiant.id +'" class="justifieAbsence"';
        if (etudiant.justifie === true) {
          html = html + " checked ";
        }
         html = html +  '> Oui | <input type="radio" value="false" data-absence="'+ etudiant.id +'" name="radio_'+ etudiant.id +'" class="justifieAbsence"';
        if (etudiant.justifie === false) {
          html = html + " checked ";
        }
        html = html + '> Non</td>\n' +
          '                        <td><a href="" class="btn btn-danger supprimer"><i class="ti-close"></i></a></td>\n' +
          '                    </tr>'
        table.append(html)
      })
      table.append('</tbody>')
      table.dataTable({
        'language': langueFr
      })
    }
  })
})

$(document).on('click', '.justifieAbsence', function() {
  $.ajax({
    type: 'GET',
    url: Routing.generate('administration_absences_justifie', {absence: $(this).data('absence'), etat:$(this).val()}),
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
  });

})

//Saisie des absences
$(document).on('click', '.absChangeTypeGroupe', function (e) {
  e.preventDefault()
  e.stopPropagation()
  $('.absChangeTypeGroupe').removeClass('btn-primary')
  $(this).addClass('btn-primary')
  $('#listeEtudiantsAbsences').load(Routing.generate('api_absence_liste_etudiant', {typegroupe: $(this).data('typegroupe')}))
  let date = $('#absence-date')
  let heure = $('#absence-heure')
  updateAffichage(date.val(), heure.val())
})

$(document).on('change', '#absence-matiere', function () {
  let etudiants = $('.etudiant')
  let date = $('#absence-date')
  let heure = $('#absence-heure')
  etudiants.removeClass('absent')
  updateAffichage(date.val(), heure.val())
})

$(document).on('change', '#absence-date', function () {
  let etudiants = $('.etudiant')
  let date = $('#absence-date')
  let heure = $('#absence-heure')
  etudiants.removeClass('absent')
  updateAffichage(date.val(), heure.val())
})

$(document).on('change', '#absence-heure', function () {
  const etudiants = $('.etudiant')
  const date = $('#absence-date')
  const heure = $('#absence-heure')
  etudiants.removeClass('absent')
  updateAffichage(date.val(), heure.val())
})

//marquage et enregistrement des absents
$(document).on('click', '.etudiant', function () {
  const $split = $(this).attr('id').split('_')
  if ($(this).hasClass('absent')) {

    //supprimer absence
    $(this).removeClass('absent')

    $.ajax({
      type: 'POST',
      url: Routing.generate('application_personnel_absence_saisie_ajax', {
        matiere: $('#absence-matiere').val(),
        etudiant: $split[1]
      }),
      dataType: 'json',
      data: {
        date: $('#absence-date').val(),
        heure: $('#absence-heure').val(),
        action: 'suppr'
      },
      //affichage de l'erreur en cas de problème
      error: function () {
        addCallout('Le délai pour l\'enregistrement est dépassé. Contactez le responsable de la departement', 'danger')
      },
      success: function (data) {
        tabsences = data
        addCallout('La suppression a été effectuée avec succés !', 'success')
      }
    })
  }
  else {
    //marquer comme absent
    $(this).addClass('absent')
    $.ajax({
      type: 'POST',
      url: Routing.generate('application_personnel_absence_saisie_ajax', {
        matiere: $('#absence-matiere').val(),
        etudiant: $split[1]
      }),
      dataType: 'json',
      data: {
        date: $('#absence-date').val(),
        heure: $('#absence-heure').val(),
        action: 'saisie'
      },
      //affichage de l'erreur en cas de problème
      error: function (msg) {
        if (msg.responseText === 'out') {
          addCallout('Le délai pour l\'enregistrement est dépassé. Contactez le responsable de la departement', 'danger')
        } else {
          addCallout('Erreur lors de l\'enregistrement.', 'danger')
        }
      },
      success: function (data) {
        addCallout('Absence enregistrée avec succés !', 'success')

      }
    })
  }
})

$('#liste-absences').dataTable({
  'language': langueFr,
  'fnRowCallback': function (nRow, aData, iDisplayIndex, iDisplayIndexFull) {
    if (aData[6] === 'non' || aData[6] === 'no' || aData[6] === 'No' || aData[6] === 'Non') {
      $('td', nRow).css('background-color', '#fce3e3')
    } else {
      $('td', nRow).css('background-color', '#e3fcf2')
    }
  }
})

//** Partie Justificatif **/

$(document).on('click', '.justificatif-accepte', function (e) {
  const justificatif = $(this).data('justificatif')
  $.ajax({
    url: Routing.generate('administration_absence_justificatif_change_etat', {uuid: justificatif, etat: 'A'}),
    success: function (e) {
      const bx = $('.bx_' + justificatif)
      const parent = bx.parent()
      bx.remove()
      let html = '<a href="#" class="btn btn-success btn-outline"><i class="ti-check"></i>Accepté</a>'
      html = html + '<button data-justificatif="' + justificatif + '"\n' +
        'class="btn btn-danger btn-outline btn-square justificatif-annuler bx_' + justificatif + '" data-provide="tooltip" data-placement="bottom"\n' +
        'title="Annuler"><i\n' +
        'class="material-icons">undo</i></button>'
      parent.prepend(html)
      addCallout('Justificatif d\'absence validé !', 'success')
    },
    error: function (e) {
      addCallout('Une erreur est survenue !', 'danger')
    }
  })
})

$(document).on('click', '.justificatif-refuse', function (e) {
  const justificatif = $(this).data('justificatif')
  $.ajax({
    url: Routing.generate('administration_absence_justificatif_change_etat', {uuid: justificatif, etat: 'R'}),
    success: function (e) {
      const bx = $('.bx_' + justificatif)
      const parent = bx.parent()
      bx.remove()
      let html = '<a href="#" class="btn btn-warning btn-outline"><i class="ti-check"></i>Refusé</a>'
      html = html + '<button data-justificatif="' + justificatif + '"\n' +
        'class="btn btn-danger btn-outline btn-square justificatif-annuler bx_' + justificatif + '" data-provide="tooltip" data-placement="bottom"\n' +
        'title="Annuler"><i\n' +
        'class="material-icons">undo</i></button>'
      parent.prepend(html)
      addCallout('Justificatif d\'absence refusé !', 'success')
    },
    error: function () {
      addCallout('Une erreur est survenue !', 'danger')
    }
  })
})

$(document).on('click', '.justificatif-annuler', function (e) {
  const justificatif = $(this).data('justificatif')
  $.ajax({
    url: Routing.generate('administration_absence_justificatif_change_etat', {uuid: justificatif, etat: 'D'}),
    success: function (e) {
      const bx = $('.bx_' + justificatif)
      const parent = bx.parent()
      bx.remove()
      const html = '<a href="#"\n' +
        '                               class="btn btn-success btn-outline btn-square justificatif-accepte bx_' + justificatif + '" data-provide="tooltip"\n' +
        '                               data-justificatif="' + justificatif + '"\n' +
        '                               data-placement="bottom" title="atitle.accepter.le.justificatif"><i\n' +
        '                                        class="ti-check"></i></a>\n' +
        '                            <a href="#"\n' +
        '                               class="btn btn-warning btn-outline btn-square justificatif-refuse bx_' + justificatif + '" data-provide="tooltip"\n' +
        '                               data-justificatif="' + justificatif + '"\n' +
        '                               data-placement="bottom" title="atitle.refuser.le.justificatif"><i\n' +
        '                                        class="ti-na"></i></a>\n' +
        '\n' +
        '                            <a href="' + Routing.generate('administration_absence_justificatif_delete', {id: justificatif}) + '" data-csrf="{{ csrf_token(\'delete\' ~ justificatif.uuidString) }}"\n' +
        '                               class="btn btn-danger btn-outline btn-square supprimer bx_' + justificatif + '"><i\n' +
        '                                        class="ti-close" data-provide="tooltip" data-placement="bottom"\n' +
        '                                        title="atitle.supprimer"></i></a>'
      parent.prepend(html)
      addCallout('Etat du justificatif d\'absence annulé !', 'success')
    },
    error: function (e) {
      addCallout('Une erreur est survenue !', 'danger')
    }
  })
})
