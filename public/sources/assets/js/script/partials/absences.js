var tabsences = [];

$(document).on('change', '#justifier_etudiant', function (e) {
  console.log('justifier_etudiant')
  $.ajax({
    url: Routing.generate('administration_absences_liste_absence_etudiant.fr', {etudiant: $(this).val()}),
    //dataType: 'json',
    success: function (data) {
      console.log('ok')
      console.log(data)
      console.log(data.length)

      var table = $('#tableJustifier').empty()
      table.append('<thead>\n' +
        '                <tr>\n' +
        '                    <th>{{ \'table.date\'|trans }}</th>\n' +
        '                    <th>{{ \'table.heure\'|trans }}</th>\n' +
        '                    <th>{{ \'table.matiere\'|trans }}</th>\n' +
        '                    <th>{{ \'table.justifier\'|trans }}</th>\n' +
        '                    <th>{{ \'table.actions\'|trans }}</th>\n' +
        '                </tr>\n' +
        '                </thead>' +
        '<tbody>')

      jQuery.each(data, function (index, etudiant) {
        console.log(etudiant)
        var html = '<tr>\n' +
          '                        <td>' + etudiant.date + '</td>\n' +
          '                        <td>' + etudiant.heure + '</td>\n' +
          '                        <td>' + etudiant.matiere + '</td>\n' +
          '                        <td>' + etudiant.justifie + '</td>\n' +
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

//Saisie des absences
$(document).on('click', '.absChangeTypeGroupe', function (e) {
  e.preventDefault()
  e.stopPropagation()
  $('#listeEtudiantsAbsences').load(Routing.generate('api_absence_liste_etudiant', {typegroupe: $(this).data('typegroupe')}))
  var date = $('#absence-date')
  var heure = $('#absence-heure')
  updateAffichage(date.val(), heure.val())
})


function updateAffichage (date, heure) {
  $.ajax({
    type: 'GET',
    url: Routing.generate('application_personnel_absence_get_ajax.fr', {matiere: $('#absence-matiere').val()}),
    dataType: 'json',
    success: function (data) {
      tabsences = data
    }
  })
  var t = date.split('/')
  var ddate = t[2].trim() + '-' + t[1].trim() + '-' + t[0].trim()


  if (typeof tabsences[ddate] !== 'undefined') {
    if (typeof tabsences[ddate][heure] !== 'undefined') {
      for (var i = 0; i < tabsences[ddate][heure].length; i++) {
        $('#' + tabsences[ddate][heure][i]).addClass('absent')
      }
    }
  }

}

$(document).on('change', '#absence-matiere', function () {
  var etudiants = $('.etudiant')
  var date = $('#absence-date')
  var heure = $('#absence-heure')
  etudiants.removeClass('absent')
  //etudiants.addClass('absence');
  updateAffichage(date.val(), heure.val())
})

$(document).on('change', '#absence-date', function () {
  var etudiants = $('.etudiant')
  var date = $('#absence-date')
  var heure = $('#absence-heure')
  etudiants.removeClass('absent')
  updateAffichage(date.val(), heure.val())
})

$(document).on('change', '#absence-heure', function () {
  var etudiants = $('.etudiant')
  var date = $('#absence-date')
  var heure = $('#absence-heure')
  etudiants.removeClass('absent')
  updateAffichage(date.val(), heure.val())
})

//marquage et enregistrement des absents
$(document).on('click', '.etudiant', function () {
  if ($(this).hasClass('absent')) {

    //supprimer absence
    $(this).removeClass('absent')
    //$(this).addClass('absence');
    $.ajax({
      type: 'POST',
      url: Routing.generate('application_personnel_absence_saisie_ajax.fr', {
        matiere: $('#absence-matiere').val(),
        etudiant: $(this).attr('id')
      }),
      dataType: 'json',
      data: {
        date: $('#absence-date').val(),
        heure: $('#absence-heure').val(),
        action: 'suppr'
      },
      //affichage de l'erreur en cas de problème
      error: function (msg, string) {
        addCallout('Le délai pour l\'enregistrement est dépassé. Contactez le responsable de la formation', 'danger')
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
    //$(this).removeClass('absence');
    $.ajax({
      type: 'POST',
      url: Routing.generate('application_personnel_absence_saisie_ajax.fr', {
        matiere: $('#absence-matiere').val(),
        etudiant: $(this).attr('id')
      }),
      dataType: 'json',
      data: {
        date: $('#absence-date').val(),
        heure: $('#absence-heure').val(),
        action: 'saisie'
      },
      //affichage de l'erreur en cas de problème
      error: function (msg, string) {
        if (msg.responseText == 'out') {
          addCallout('Le délai pour l\'enregistrement est dépassé. Contactez le responsable de la formation', 'danger')
        } else {
          addCallout('Erreur lors de l\'enregistrement.', 'danger')
        }
      },
      success: function (data) {
        tabsences = data
        console.log('ajout')
        console.log(tabsences)
        addCallout('Absence enregistrée avec succés !', 'success')

      }
    })
  }
})

$('#liste-absences').dataTable({
  'language': langueFr,
  /*'createdRow': function (row, data, dataIndex) {
    if (data[6] == 'non' || data[6] == 'no' || data[6] == 'No' || data[6] == 'Non')
    {
      $(row).addClass('bg-pale-error')
    } else {
      $(row).addClass('bg-pale-error')
    }
  }*/
  'fnRowCallback': function (nRow, aData, iDisplayIndex, iDisplayIndexFull) {
    if (aData[6] == 'non' || aData[6] == 'no' || aData[6] == 'No' || aData[6] == 'Non') {
      $('td', nRow).css('background-color', '#fce3e3')
    } else {
      $('td', nRow).css('background-color', '#e3fcf2')
    }
  }
})