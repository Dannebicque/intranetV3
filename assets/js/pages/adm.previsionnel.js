// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.previsionnel.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 03/05/2021 17:16
import {addCallout} from '../util'

let nbLignePrevisionnel = 1

$(document).on('change', '.changeIntervenantPrevi', function (e) {
  e.preventDefault()
  e.stopPropagation()
  $.ajax({
    url: Routing.generate('administration_previsionnel_ajax_edit', {id: $(this).data('previ')}),
    method: 'POST',
    data: {
      value: $(this).val(),
      field: 'personnel'
    },
    success: function () {
      addCallout('Modification de prévisionnel enregistrée !', 'success')
    },
    error: function () {
      addCallout('Erreur lors de la modification du prévisionnel !', 'danger')
    }
  })
})

$(document).on('change', '#previSemestre', function (e) {
  e.preventDefault()
  e.stopPropagation()
  $('#blocPrevisionnel').empty().load(Routing.generate('administration_previsionnel_semestre', {
    semestre: $(this).val(),
    annee: $(this).data('annee')
  }))
})

$(document).on('click', '#reloadPreviSemestre', function (e) {
  e.preventDefault()
  e.stopPropagation()
  $('#blocPrevisionnel').empty().load(Routing.generate('administration_previsionnel_semestre', {
    semestre: $(this).data('semestre'),
    annee: $(this).data('annee')
  }))
})

$(document).on('change', '#previMatiere', function (e) {
  const s = $(this).val().split('_')
  e.preventDefault()
  e.stopPropagation()
  $('#blocPrevisionnel').empty().load(Routing.generate('administration_previsionnel_matiere', {
    matiere: s[1],
    type: s[0],
    annee: $(this).data('annee')
  }))
})

$(document).on('click', '#reloadPreviMatiere', function (e) {
  e.preventDefault()
  e.stopPropagation()
  $('#blocPrevisionnel').empty().load(Routing.generate('administration_previsionnel_matiere', {
    matiere: $(this).data('matiere'),
    type: $(this).data('type'),
    annee: $(this).data('annee')
  }))
})

$(document).on('change', '#previPersonnel', function (e) {
  e.preventDefault()
  e.stopPropagation()
  $('#blocPrevisionnel').empty().load(Routing.generate('administration_previsionnel_personnel', {
    personnel: $(this).val(),
    annee: $(this).data('annee')
  }))
})

$(document).on('click', '#reloadPreviPersonnel', function (e) {
  e.preventDefault()
  e.stopPropagation()
  $('#blocPrevisionnel').empty().load(Routing.generate('administration_previsionnel_personnel', {
    personnel: $(this).data('personnel'),
    annee: $(this).data('annee')
  }))
})

$(document).on('click', '.previsionnel_add_change', function (e) {
  e.preventDefault()
  e.stopPropagation()
  $('.previsionnel_add_change').removeClass('active show')
  $(this).addClass('active show')
  $('#mainContent').empty().load($(this).attr('href'))
})

$(document).on('click', '#addIntervenantPrevisionnel', function (e) {
  e.preventDefault()
  e.stopPropagation()
  nbLignePrevisionnel++


  $.ajax({
    url: Routing.generate('api_enseignants_departement'),
    method: 'POST',
    success: function (data) {
      let html = '<tr>\n' +
        '                        <td>\n' +
        '                            <select class="form-control" data-live-search="true" name="intervenant_' + nbLignePrevisionnel + '" id="intervenant_' + nbLignePrevisionnel + '">\n' +
        '                                <option value="">Choisir l\'intervenant</option>\n'
      jQuery.each(data, function (index, pers) {
        html = html + '<option value="' + pers.id + '">' + pers.display + '</option>\n'
      })
      html = html + '                            </select>\n' +
        '                        </td>\n' +
        '                        <td><input type="text" name="cm_' + nbLignePrevisionnel + '" id="cm_' + nbLignePrevisionnel + '" data-ligne="' + nbLignePrevisionnel + '" class="form-control chgcm" value="0"></td>\n' +
        '                        <td><input type="number" name="gr_cm_' + nbLignePrevisionnel + '" id="gr_cm_' + nbLignePrevisionnel + '" value="0" data-ligne="' + nbLignePrevisionnel + '" class="form-control chgcm">\n' +
        '                        </td>\n' +
        '                        <td id="ind_cm_' + nbLignePrevisionnel + '">0</td>\n' +
        '                        <td style="background-color: #68C39F"><input type="text" value="0" name="td_' + nbLignePrevisionnel + '" id="td_' + nbLignePrevisionnel + '" data-ligne="' + nbLignePrevisionnel + '"\n' +
        '                                                                     class="form-control chgtd"></td>\n' +
        '                        <td style="background-color: #68C39F"><input type="number" value="0" name="gr_td_' + nbLignePrevisionnel + '" id="gr_td_' + nbLignePrevisionnel + '"\n' +
        '                                                                     data-ligne="' + nbLignePrevisionnel + '" class="form-control chgtd"></td>\n' +
        '                        <td style="background-color: #68C39F" id="ind_td_' + nbLignePrevisionnel + '">0</td>\n' +
        '                        <td style="background-color: #FFC052"><input type="text" value="0" name="tp_' + nbLignePrevisionnel + '" id="tp_' + nbLignePrevisionnel + '" data-ligne="' + nbLignePrevisionnel + '"\n' +
        '                                                                     class="form-control chgtp"></td>\n' +
        '                        <td style="background-color: #FFC052"><input type="number" value="0" name="gr_tp_' + nbLignePrevisionnel + '" id="gr_tp_' + nbLignePrevisionnel + '"\n' +
        '                                                                     data-ligne="' + nbLignePrevisionnel + '" class="form-control chgtp"></td>\n' +
        '                        <td style="background-color: #FFC052" id="ind_tp_' + nbLignePrevisionnel + '">0</td>\n' +
        '                    </tr>'

      $('#nbLigne').val(nbLignePrevisionnel)
      $('#ligneAdd').before(html)
      $('#intervenant_' + nbLignePrevisionnel).selectpicker()
    }
  })


})

$(document).on('change', '.chgcm', function (e) {
  const ligne = $(this).data('ligne')
  const nbSeance = parseFloat($('#cm_' + ligne).val()) / 1.5
  $('#ind_cm_' + ligne).html(nbSeance.toFixed(2))

  updateSynthesePrevisionnel()
})

$(document).on('change', '.chgtd', function (e) {
  const ligne = $(this).data('ligne')
  const nbSeance = parseFloat($('#td_' + ligne).val()) / 1.5
  $('#ind_td_' + ligne).html(nbSeance.toFixed(2))

  updateSynthesePrevisionnel()
})

$(document).on('change', '.chgtp', function (e) {
  const ligne = $(this).data('ligne')
  const nbSeance = parseFloat($('#tp_' + ligne).val()) / 1.5
  $('#ind_tp_' + ligne).html(nbSeance.toFixed(2))

  updateSynthesePrevisionnel()
})

function updateSynthesePrevisionnel () {
  let totalCm = 0
  let totalTd = 0
  let totalTp = 0
  let totalEqTd = 0
  let totalEtu = 0

  let totalHeuresCm = 0
  let totalHeuresTd = 0
  let totalHeuresTp = 0
  //let totalMatiere = 0

  for (let i = 1; i <= nbLignePrevisionnel; i++) {
    let $cm = $('#cm_' + i)
    let $td = $('#td_' + i)
    let $tp = $('#tp_' + i)

    totalCm = totalCm + parseFloat($cm.val()) * parseInt($('#gr_cm_' + i).val())
    totalTd = totalTd + parseFloat($td.val()) * parseInt($('#gr_td_' + i).val())
    totalTp = totalTp + parseFloat($tp.val()) * parseInt($('#gr_tp_' + i).val())

    totalHeuresCm = totalHeuresCm + parseFloat($cm.val())
    totalHeuresTd = totalHeuresTd + parseFloat($td.val())
    totalHeuresTp = totalHeuresTp + parseFloat($tp.val())

    totalEtu = totalEtu + parseFloat($cm.val()) + parseFloat($td.val()) + parseFloat($tp.val())
  }
  totalEqTd = totalCm + totalTd + totalTp

  $('#totalCm').html(totalCm.toFixed(2))
  $('#totalTd').html(totalTd.toFixed(2))
  $('#totalTp').html(totalTp.toFixed(2))
  $('#totalEqTd').html(totalEqTd.toFixed(2))
  $('#totalEtu').html(totalEtu.toFixed(2))

  /** vérificiation */
  /* todo: ne fonctionne par, car doit prendre en compte le nombre de groupe et les possibles autres données déjà saisies. */
  $('#totalHeuresCm').html(totalHeuresCm.toFixed(2))
  $('#totalHeuresTd').html(totalHeuresTd.toFixed(2))
  $('#totalHeuresTp').html(totalHeuresTp.toFixed(2))

  let diffCm = parseFloat($('#cmMaquette').html()) - totalHeuresCm
  let diffTd = parseFloat($('#tdMaquette').html()) - totalHeuresTd
  let diffTp = parseFloat($('#tpMaquette').html()) - totalHeuresTp
  $('#diffCm').html(diffCm.toFixed(2))
  $('#diffTd').html(diffTd.toFixed(2))
  $('#diffTp').html(diffTp.toFixed(2))

  if (diffCm < 0) {
    $('#diffCm').addClass('erreurPrevi').removeClass('validePrevi')
  } else {
    $('#diffCm').addClass('validePrevi').removeClass('erreurPrevi')
  }

  if (diffTd < 0) {
    $('#diffTd').addClass('erreurPrevi').removeClass('validePrevi')
  } else {
    $('#diffTd').addClass('validePrevi').removeClass('erreurPrevi')
  }

  if (diffTp < 0) {
    $('#diffTp').addClass('erreurPrevi').removeClass('validePrevi')
  } else {
    $('#diffTp').addClass('validePrevi').removeClass('erreurPrevi')
  }
}

$(document).on('change', '#previsionnel_matiere', function () {
  const volumeMatiere = $('#volumeMatiere')
  if ($(this).val() === '') {
    volumeMatiere.html('Choisir d\'abord une matière')
  } else {
    $.ajax({
      url: Routing.generate('api_matiere', {'matiere': $(this).val()}),
      success: function (data) {
        const html = 'PPN Officiel => CM ' + data.cmFormation + ' heure(s); TD ' + data.tdFormation + ' heure(s); TP ' + data.tpFormation + ' heure(s); PPN Réalisé/departement => CM ' + data.cmPpn + ' heure(s); TD ' + data.tdPpn + ' heure(s); TP ' + data.tpPpn + ' heure(s);'
        volumeMatiere.html(html)
        $('#cmMaquette').html(data.cmFormation)
        $('#totalHeuresCm').html(0)
        $('#diffCm').html(0)
        $('#tdMaquette').html(data.tdFormation)
        $('#totalHeuresTd').html(0)
        $('#diffTd').html(0)
        $('#tpMaquette').html(data.tpFormation)
        $('#totalHeuresTp').html(0)
        $('#diffTp').html(0)
        $('#tabheures').show()
      }
    })
  }
})


$(document).on('click', '#btnGenereFichier', function (e) {
  e.preventDefault()
  e.stopPropagation()

  const selectedChamps = []
  $('input:checkbox[name=exportChamps]:checked').each(function () {
    selectedChamps.push($(this).val())
  })

  $.ajax({
    url: Routing.generate('export_listing.fr'),
    method: 'POST',
    data: {
      'matiere': $(this).data('matiere'),
      'exportTypeDocument': $('input[type=radio][name=exportTypeDocument]:checked').val(),
      'exportChamps': selectedChamps,
      'exportFormat': $('input[type=radio][name=exportFormat]:checked').val(),
      'exportFiltre': $('input[type=radio][name=exportFiltre]:checked').val()
    },
    success: function (fichier) {

    }
  })
})


//reload si changement d'année
$(document).on('change', '#change_annee_temp_hrs', function (e) {

  window.location = Routing.generate('administration_hrs_index', {annee: $(this).val()})
})

$(document).on('change', '#change_annee_temp_previsionnel', function (e) {
  window.location = Routing.generate('administration_previsionnel_index', {annee: $(this).val()})
})
