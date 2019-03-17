var tabsences = [];

$(document).on('change', '#justifier_etudiant', function (e) {

  var table = $('#tableJustifier').DataTable();
  table.clear(); //effacer le datatable
  table.destroy(); //supprimer le datatable


  $.ajax({
    url: Routing.generate('administration_absences_liste_absence_etudiant', {etudiant: $(this).val()}),
    //dataType: 'json',
    success: function (data) {
      var table = $('#tableJustifier').empty();
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
        //console.log(etudiant)
        var html = '<tr>\n' +
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
  console.log($(this).val());
  $.ajax({
    type: 'GET',
    url: Routing.generate('administration_absences_justifie', {absence: $(this).data('absence'), etat:$(this).val()}),
    error: function (msg, string) {
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
  $('#listeEtudiantsAbsences').load(Routing.generate('api_absence_liste_etudiant', {typegroupe: $(this).data('typegroupe')}))
  var date = $('#absence-date')
  var heure = $('#absence-heure')
  updateAffichage(date.val(), heure.val())
})


function updateAffichage (date, heure) {
  $.ajax({
    type: 'GET',
    url: Routing.generate('application_personnel_absence_get_ajax', {matiere: $('#absence-matiere').val()}),
    dataType: 'json',
    success: function (data) {
      tabsences = data
      var t = date.split('/')
      var ddate = t[2].trim() + '-' + t[1].trim() + '-' + t[0].trim()

      if (typeof tabsences[ddate] !== 'undefined') {
        if (typeof tabsences[ddate][heure] !== 'undefined') {
          for (var i = 0; i < tabsences[ddate][heure].length; i++) {
            $('#etu_' + tabsences[ddate][heure][i]).addClass('absent')
          }
        }
      }
    }
  })


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
  var $split = $(this).attr('id').split('_');
  if ($(this).hasClass('absent')) {

    //supprimer absence
    $(this).removeClass('absent')

    //$(this).addClass('absence');
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
      error: function (msg, string) {
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
    //$(this).removeClass('absence');
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
      error: function (msg, string) {
        if (msg.responseText == 'out') {
          addCallout('Le délai pour l\'enregistrement est dépassé. Contactez le responsable de la departement', 'danger')
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

//** Partie Justificatif **/

$(document).on('click', '.justificatif-accepte', function (e) {
  var justificatif = $(this).data('justificatif')
  $.ajax({
    url: Routing.generate('administration_absence_justificatif_change_etat', {uuid: justificatif, etat: 'A'}),
    success: function (e) {
      var bx = $('.bx_' + justificatif)
      var parent = bx.parent()
      bx.remove()
      parent.prepend('<a href="#" class="btn btn-success btn-outline"><i class="ti-check"></i>Accepté</a>')
      //todo: gérer la création du bouton annuler.
      addCallout('Justificatif d\'absence validé !', 'success')
    },
    error: function (e) {
      addCallout('Une erreur est survenue !', 'danger')
    }
  })
})

$(document).on('click', '.justificatif-refuse', function (e) {
  var justificatif = $(this).data('justificatif')
  $.ajax({
    url: Routing.generate('administration_absence_justificatif_change_etat', {uuid: justificatif, etat: 'R'}),
    success: function (e) {
      var bx = $('.bx_' + justificatif)
      var parent = bx.parent()
      bx.remove()
      parent.prepend('<a href="#" class="btn btn-warning btn-outline"><i class="ti-check"></i>Refusé</a>')
      //todo: gérer la création du bouton annuler.
      addCallout('Justificatif d\'absence refusé !', 'success')
    },
    error: function (e) {
      addCallout('Une erreur est survenue !', 'danger')
    }
  })
})

$(document).on('click', '.justificatif-annuler', function (e) {
  var justificatif = $(this).data('justificatif')
  $.ajax({
    url: Routing.generate('administration_absence_justificatif_change_etat', {uuid: justificatif, etat: 'D'}),
    success: function (e) {
      var bx = $('.bx_' + justificatif)
      var parent = bx.parent()
      bx.remove()
      //todo: gérer la création des deux boutons.

      var html = "<a href=\"#\"\n" +
        "                               class=\"btn btn-success btn-outline btn-square justificatif-accepte bx_"+justificatif+"\" data-provide=\"tooltip\"\n" +
        "                               data-justificatif=\""+justificatif+"\"\n" +
        "                               data-placement=\"bottom\" title=\"atitle.accepter.le.justificatif\"><i\n" +
        "                                        class=\"ti-check\"></i></a>\n" +
        "                            <a href=\"#\"\n" +
        "                               class=\"btn btn-warning btn-outline btn-square justificatif-refuse bx_"+justificatif+"\" data-provide=\"tooltip\"\n" +
        "                               data-justificatif=\""+justificatif+"\"\n" +
        "                               data-placement=\"bottom\" title=\"atitle.refuser.le.justificatif\"><i\n" +
        "                                        class=\"ti-na\"></i></a>\n" +
        "\n" +
        "                            <a href=\""+Routing.generate('administration_absence_justificatif_delete', {id: justificatif})+"\" data-csrf=\"{{ csrf_token('delete' ~ justificatif.uuidString) }}\"\n" +
        "                               class=\"btn btn-danger btn-outline btn-square supprimer bx_"+justificatif+"\"><i\n" +
        "                                        class=\"ti-close\" data-provide=\"tooltip\" data-placement=\"bottom\"\n" +
        "                                        title=\"atitle.supprimer\"></i></a>"
      parent.prepend(html)
      addCallout('Etat du justificatif d\'absence annulé !', 'success')
    },
    error: function (e) {
      addCallout('Une erreur est survenue !', 'danger')
    }
  })
})
