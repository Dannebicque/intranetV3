/*
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/assets/js/partials/profil.js
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 3/30/19 12:11 PM
 *  * @lastUpdate 3/30/19 12:11 PM
 *  *
 *
 */

$(document).on('click', '.changeprofil', function (e) {
  e.preventDefault()
  e.stopPropagation()

  $('.changeprofil').removeClass('active show')
  $(this).addClass('active show')
  $('#profilContent').empty().load($(this).attr('href'))
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
        '                    <td>' + data.date + '</td>\n' +
        '                    <td>' + data.heure + '</td>\n' +
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
        '                            <i class="' + iconShow + '"></i>\n' +
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


      $('#tableAbsence > tbody:last').append(html)
    }
  })
})

$(document).on('click', '.checkAbsence', function (e) {
  let absence = $(this).data('absence')
  let etat = 1

  if (($(this).is(':checked'))) {
    etat = 0
  }

  console.log(etat)
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
