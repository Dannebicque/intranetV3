$(document).on('change', '.updateProgression', function () {
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
  const $nbGrCm = parseInt($('#nbgr_cm_' + matiere).text())
  const $nbGrTd = parseInt($('#nbgr_td_' + matiere).text())
  const $nbGrTp = parseInt($('#nbgr_tp_' + matiere).text())


  const $col = 'tot_s' + semaine + '_' + matiere

  let cm = parseInt($('#' + $col + '_cm').val())
  if (isNaN(cm)) {
    cm = 0
  }

  let td = parseInt($('#' + $col + '_td').val())
  if (isNaN(td)) {
    td = 0
  }

  let tp = parseInt($('#' + $col + '_tp').val())
  if (isNaN(tp)) {
    tp = 0
  }

  const $total = cm * $nbGrCm * 1.5 + td * $nbGrTd * 1.5 + tp * $nbGrTp * 1.5
  $('#' + $col).text($total)

  //update ligne
  const $ztotCm = 'tot_cm_' + matiere
  const $ztotTd = 'tot_td_' + matiere
  const $ztotTp = 'tot_tp_' + matiere
  const $ztotSCm = 'tot_cm_seance_' + matiere
  const $ztotSTd = 'tot_td_seance_' + matiere
  const $ztotSTp = 'tot_tp_seance_' + matiere
  const $ztot = 'tot_' + matiere
  const $ztotS = 'tot_seance_' + matiere
  const $ztotCmH = 'tot_cm_h_' + matiere
  const $ztotTdH = 'tot_td_h_' + matiere
  const $ztotTpH = 'tot_tp_h_' + matiere
  const $ztotH = 'tot_h_' + matiere

  let $totCm = 0
  let $totTd = 0
  let $totTp = 0
  //CM
  $('.cm_' + matiere).each(function () {
    let t = parseInt($(this).val())
    if (isNaN(t)) {
      t = 0
    }
    $totCm += t
  })
  $('#' + $ztotSCm).text($totCm)
  $('#' + $ztotCm).text($totCm * $nbGrCm)
  $('#' + $ztotCmH).text($totCm * 1.5 * $nbGrCm)

  //TD
  $('.td_' + matiere).each(function () {
    let t = parseInt($(this).val())
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
    let t = parseInt($(this).val())
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
  const totSemaine = Array()
  for (var semaine = 1; semaine<15; semaine++) {
    totSemaine[semaine] = 0;
  }
  totSemaine['total'] = 0;
  totSemaine['total_groupe'] = 0;
  totSemaine['total_heure'] = 0;

  $('.une_matiere').each(function(){
    //update colonne
    const matiere = $(this).data('matiere')
    const $nbGrCm = parseInt($('#nbgr_cm_' + matiere).text())
    const $nbGrTd = parseInt($('#nbgr_td_' + matiere).text())
    const $nbGrTp = parseInt($('#nbgr_tp_' + matiere).text())
    let $totCm = 0
    let $totTd = 0
    let $totTp = 0

    for (let semaine = 1; semaine<15; semaine++) {

        const $col = 'tot_s' + semaine + '_' + matiere

        let cm = parseInt($('#' + $col + '_cm').val())
        if (isNaN(cm)) {
          cm = 0
        }
        $totCm += cm

        let td = parseInt($('#' + $col + '_td').val())
        if (isNaN(td)) {
          td = 0
        }
        $totTd += td

        let tp = parseInt($('#' + $col + '_tp').val())
        if (isNaN(tp)) {
          tp = 0
        }
        $totTp += tp

        const $total = cm * $nbGrCm * 1.5 + td * $nbGrTd * 1.5 + tp * $nbGrTp * 1.5
        $('#' + $col).text($total)
        totSemaine[semaine] += $total;
    }//fin boucle semaine

    //update ligne
    const $ztotCm = 'tot_cm_' + matiere
    const $ztotTd = 'tot_td_' + matiere
    const $ztotTp = 'tot_tp_' + matiere
    const $ztotSCm = 'tot_cm_seance_' + matiere
    const $ztotSTd = 'tot_td_seance_' + matiere
    const $ztotSTp = 'tot_tp_seance_' + matiere
    const $ztot = 'tot_' + matiere
    const $ztotS = 'tot_seance_' + matiere
    const $ztotCmH = 'tot_cm_h_' + matiere
    const $ztotTdH = 'tot_td_h_' + matiere
    const $ztotTpH = 'tot_tp_h_' + matiere
    const $ztotH = 'tot_h_' + matiere


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
