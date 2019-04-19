$(document).on('change', '.updateProgression', function () {
  console.log('update')
  updateProgression($(this).data('semaine'), $(this).data('type'), $(this).data('matiere'), $(this).val())
  calculProgression($(this).data('semaine'), $(this).data('type'), $(this).data('matiere'))
})

function updateProgression (semaine, typecours, matiere,nbSeances) {
  $.ajax({
    url: Routing.generate('application_personnel_progression_update', {matiere:matiere}),
    data: {
      semaine: semaine,
      typecours: typecours,
      nbSeances: nbSeances
    },
    method: 'POST'
  })
}

function calculProgression (semaine, typecours, matiere) {
  //update colonne
  var $nbGrCm = parseInt($('#nbgr_cm_' + matiere).text())
  var $nbGrTd = parseInt($('#nbgr_td_' + matiere).text())
  var $nbGrTp = parseInt($('#nbgr_tp_' + matiere).text())


  var $col = 'tot_s' + semaine + '_' + matiere

  var cm = parseInt($('#' + $col + '_cm').val())
  if (isNaN(cm)) {
    cm = 0
  }

  var td = parseInt($('#' + $col + '_td').val())
  if (isNaN(td)) {
    td = 0
  }

  var tp = parseInt($('#' + $col + '_tp').val())
  if (isNaN(tp)) {
    tp = 0
  }

  var $total = cm * $nbGrCm * 1.5 + td * $nbGrTd * 1.5 + tp * $nbGrTp * 1.5
  $('#' + $col).text($total)

  //update ligne
  var $ztotCm = 'tot_cm_' + matiere
  var $ztotTd = 'tot_td_' + matiere
  var $ztotTp = 'tot_tp_' + matiere
  var $ztotSCm = 'tot_cm_seance_' + matiere
  var $ztotSTd = 'tot_td_seance_' + matiere
  var $ztotSTp = 'tot_tp_seance_' + matiere
  var $ztot = 'tot_' + matiere
  var $ztotS = 'tot_seance_' + matiere
  var $ztotCmH = 'tot_cm_h_' + matiere
  var $ztotTdH = 'tot_td_h_' + matiere
  var $ztotTpH = 'tot_tp_h_' + matiere
  var $ztotH = 'tot_h_' + matiere

  var $totCm = 0
  var $totTd = 0
  var $totTp = 0
  //CM
  $('.cm_' + matiere).each(function () {
    var t = parseInt($(this).val())
    if (isNaN(t)) {
      t = 0
    }
    $totCm += t
  })
  console.log($totCm)
  $('#' + $ztotSCm).text($totCm)
  $('#' + $ztotCm).text($totCm * $nbGrCm)
  $('#' + $ztotCmH).text($totCm * 1.5 * $nbGrCm)

  //TD
  $('.td_' + matiere).each(function () {
    var t = parseInt($(this).val())
    if (isNaN(t)) {
      t = 0
    }
    $totTd += t
  })
  $('#' + $ztotSTd).text($totTd)
  $('#' + $ztotTd).text($totTd * $nbGrTd)
  $('#' + $ztotTdH).text($totTd * 1.5 * $nbGrTd)

  //TP
  $('.tp_' + matiere).each(function () {
    var t = parseInt($(this).val())
    if (isNaN(t)) {
      t = 0
    }
    $totTp += t
  })
  $('#' + $ztotSTp).text($totTp)
  $('#' + $ztotTp).text($totTp * $nbGrTp)
  $('#' + $ztotTpH).text($totTp * 1.5 * $nbGrTp)

  $('#' + $ztotS).text($totCm + $totTd + $totTp)
  $('#' + $ztot).text($totCm * $nbGrCm + $totTd * $nbGrTd + $totTp * $nbGrTp)
  $('#' + $ztotH).text($totCm * 1.5 * $nbGrCm + $totTd * 1.5 * $nbGrTd + $totTp * 1.5 * $nbGrTp)
}

$(document).on('click', '#refresh', function () {
  updateAllProgresssion();
})

function updateAllProgresssion() {
  var totSemaine = Array();
  for (var semaine = 1; semaine<15; semaine++) {
    totSemaine[semaine] = 0;
  }
  totSemaine['total'] = 0;
  totSemaine['total_groupe'] = 0;
  totSemaine['total_heure'] = 0;

  $('.une_matiere').each(function(){
    //update colonne
    var matiere = $(this).data('matiere')
    var $nbGrCm = parseInt($('#nbgr_cm_' + matiere).text())
    var $nbGrTd = parseInt($('#nbgr_td_' + matiere).text())
    var $nbGrTp = parseInt($('#nbgr_tp_' + matiere).text())
    var $totCm = 0
    var $totTd = 0
    var $totTp = 0

      for (var semaine = 1; semaine<15; semaine++) {

        var $col = 'tot_s' + semaine + '_' + matiere

        var cm = parseInt($('#' + $col + '_cm').val())
        if (isNaN(cm)) {
          cm = 0
        }
        $totCm += cm

        var td = parseInt($('#' + $col + '_td').val())
        if (isNaN(td)) {
          td = 0
        }
        $totTd += td

        var tp = parseInt($('#' + $col + '_tp').val())
        if (isNaN(tp)) {
          tp = 0
        }
        $totTp += tp

        var $total = cm * $nbGrCm * 1.5 + td * $nbGrTd * 1.5 + tp * $nbGrTp * 1.5
        $('#' + $col).text($total)
        totSemaine[semaine] += $total;
    }//fin boucle semaine

    //update ligne
    var $ztotCm = 'tot_cm_' + matiere
    var $ztotTd = 'tot_td_' + matiere
    var $ztotTp = 'tot_tp_' + matiere
    var $ztotSCm = 'tot_cm_seance_' + matiere
    var $ztotSTd = 'tot_td_seance_' + matiere
    var $ztotSTp = 'tot_tp_seance_' + matiere
    var $ztot = 'tot_' + matiere
    var $ztotS = 'tot_seance_' + matiere
    var $ztotCmH = 'tot_cm_h_' + matiere
    var $ztotTdH = 'tot_td_h_' + matiere
    var $ztotTpH = 'tot_tp_h_' + matiere
    var $ztotH = 'tot_h_' + matiere



    $('#' + $ztotSCm).text($totCm)
    $('#' + $ztotCm).text($totCm * $nbGrCm)
    $('#' + $ztotCmH).text($totCm * 1.5 * $nbGrCm)

    $('#' + $ztotSTd).text($totTd)
    $('#' + $ztotTd).text($totTd * $nbGrTd)
    $('#' + $ztotTdH).text($totTd * 1.5 * $nbGrTd)

    $('#' + $ztotSTp).text($totTp)
    $('#' + $ztotTp).text($totTp * $nbGrTp)
    $('#' + $ztotTpH).text($totTp * 1.5 * $nbGrTp)

    $('#' + $ztotS).text($totCm + $totTd + $totTp)
    $('#' + $ztot).text($totCm * $nbGrCm + $totTd * $nbGrTd + $totTp * $nbGrTp)
    $('#' + $ztotH).text($totCm * 1.5 * $nbGrCm + $totTd * 1.5 * $nbGrTd + $totTp * 1.5 * $nbGrTp)

    totSemaine['total'] += $totCm + $totTd + $totTp;
    totSemaine['total_groupe'] += $totCm * $nbGrCm + $totTd * $nbGrTd + $totTp * $nbGrTp;
    totSemaine['total_heure'] += $totCm * 1.5 * $nbGrCm + $totTd * 1.5 * $nbGrTd + $totTp * 1.5 * $nbGrTp;

  })

  for (var semaine = 1; semaine<15; semaine++) {
    $('#tot_s'+semaine).text(totSemaine[semaine]);
  }
  $('#tot_seance').text(totSemaine['total']);
  $('#tot_global_groupe').text(totSemaine['total_groupe']);
  $('#tot_global_heure').text(totSemaine['total_heure']);
}
