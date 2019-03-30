var nbLignePrevisionnel = 1;

//todo: désactivé car off-line. Ajouter les CDN sur base.html.twig
//todo: pourquoi ajaxcomplete?
// $(document).ajaxComplete(function () {
//   $('.editPrevi').editable({
//     type: 'text',
//     url: Routing.generate('administration_previsionnel_edit')
//     //todo: si success recalculer toute la ligne.
//   })
// })

$(document).on('change', '#previSemestre', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $('#blocPrevisionnel').empty().load(Routing.generate('administration_previsionnel_semestre', {semestre: $(this).val(), annee:$(this).data('annee')}));
});

$(document).on('click', '#reloadPreviSemestre', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $('#blocPrevisionnel').empty().load(Routing.generate('administration_previsionnel_semestre', {semestre: $(this).data('semestre'), annee:$(this).data('annee')}));
});

$(document).on('change', '#previMatiere', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $('#blocPrevisionnel').empty().load(Routing.generate('administration_previsionnel_matiere', {matiere: $(this).val(), annee:$(this).data('annee')}));
});

$(document).on('click', '#reloadPreviMatiere', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $('#blocPrevisionnel').empty().load(Routing.generate('administration_previsionnel_matiere', {matiere: $(this).data('matiere'), annee:$(this).data('annee')}));
});

$(document).on('change', '#previPersonnel', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $('#blocPrevisionnel').empty().load(Routing.generate('administration_previsionnel_personnel', {personnel: $(this).val(), annee:$(this).data('annee')}));
});

$(document).on('click', '#reloadPreviPersonnel', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $('#blocPrevisionnel').empty().load(Routing.generate('administration_previsionnel_personnel', {personnel: $(this).data('personnel'), annee:$(this).data('annee')}));
});

$(document).on('click', '.previsionnel_add_change', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $('.previsionnel_add_change').removeClass('active show');
  $(this).addClass('active show');
  $('#mainContent').empty().load($(this).attr('href'));
});

$(document).on('click', '#addIntervenantPrevisionnel', function (e) {
  e.preventDefault();
  e.stopPropagation();
  nbLignePrevisionnel++;

  var html = '<tr>\n' +
    '                        <td>\n' +
    '                            <select class="form-control">\n' +
    '                                <option value="">Choisir l\'intervenant</option>\n' +
    '                            </select>\n' +
    '                        </td>\n' +
    '                        <td><input type="text" name="cm_1" id="cm_' + nbLignePrevisionnel + '" data-ligne="1" class="form-control chgcm" value="0"></td>\n' +
    '                        <td><input type="number" name="gr_cm_1" id="gr_cm_' + nbLignePrevisionnel + '" value="0" data-ligne="1" class="form-control chgcm">\n' +
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
    '                    </tr>';

  $('#nbLigne').val(nbLignePrevisionnel);
  $('#ligneAdd').before(html);
});

$(document).on('change', '.chgcm', function (e) {
  var ligne = $(this).data('ligne');
  var nbSeance = parseFloat($('#cm_' + ligne).val()) / 1.5;
  $('#ind_cm_' + ligne).html(nbSeance.toFixed(2));

  updateSynthesePrevisionnel();
});

$(document).on('change', '.chgtd', function (e) {
  var ligne = $(this).data('ligne');
  var nbSeance = parseFloat($('#td_' + ligne).val()) / 1.5;
  $('#ind_td_' + ligne).html(nbSeance.toFixed(2));

  updateSynthesePrevisionnel();
});

$(document).on('change', '.chgtp', function (e) {
  var ligne = $(this).data('ligne');
  var nbSeance = parseFloat($('#tp_' + ligne).val()) / 1.5;
  $('#ind_tp_' + ligne).html(nbSeance.toFixed(2));

  updateSynthesePrevisionnel();
});

function updateSynthesePrevisionnel() {
  var totalCm = 0;
  var totalTd = 0;
  var totalTp = 0;
  var totalEqTd = 0;
  var totalEtu = 0;
  var totalMatiere = 0;

  for (var i = 1; i <= nbLignePrevisionnel; i++) {
    totalCm = totalCm + parseFloat($('#cm_' + i).val()) * parseInt($('#gr_cm_' + i).val());
    totalTd = totalTd + parseFloat($('#td_' + i).val()) * parseInt($('#gr_td_' + i).val());
    totalTp = totalTp + parseFloat($('#tp_' + i).val()) * parseInt($('#gr_tp_' + i).val());
    totalMatiere = totalMatiere + totalCm + totalTd + totalTp;
    totalEtu = totalEtu + parseFloat($('#cm_' + i).val()) + parseFloat($('#td_' + i).val()) + parseFloat($('#tp_' + i).val());
  }


  $('#totalCm').html(totalCm.toFixed(2));
  $('#totalTd').html(totalTd.toFixed(2));
  $('#totalTp').html(totalTp.toFixed(2));
  $('#totalEqTd').html(totalEqTd.toFixed(2));
  $('#totalEtu').html(totalEtu.toFixed(2));
  $('#totalMatiere').html(totalMatiere.toFixed(2));
}

$(document).on('change', '#previsionnel_semestre', function () {
  var selectMatiere = $('#previsionnel_matiere');
  if ($(this).val() == "") {
    selectMatiere.empty();
    selectMatiere.append($("<option></option>")
      .attr("value", "")
      .text("Choisir d'abord un semestre"));
  } else {
    $.ajax({
      url: Routing.generate('api_matieres_semestre', {'semestre': $(this).val()}),
      success: function (data) {

        selectMatiere.empty();
        selectMatiere.append($("<option></option>")
          .attr("value", "")
          .text("Choisir une matière"));
        jQuery.each(data, function (index, matiere) {

          selectMatiere.append($("<option></option>")
            .attr("value", matiere.id)
            .text(matiere.libelle));
        });
      }
    });
  }
});

$(document).on('change', '#previsionnel_matiere', function () {
  var volumeMatiere = $('#volumeMatiere');
  if ($(this).val() == "") {
    volumeMatiere.html("Choisir d'abord une matière");
  } else {
    $.ajax({
      url: Routing.generate('api_matiere', {'matiere': $(this).val()}),
      success: function (data) {
        var html = "PPN Officiel => CM " + data.cmFormation + " heure(s); TD " + data.tdFormation + " heure(s); TP " + data.tpFormation + " heure(s); PPN Réalisé/departement => CM " + data.cmPpn + " heure(s); TD " + data.tdPpn + " heure(s); TP " + data.tpPpn + " heure(s);"
        volumeMatiere.html(html);
      }
    });
  }
});


$(document).on('click', '#btnGenereFichier', function (e) {
  e.preventDefault()
  e.stopPropagation()

  var selectedChamps = []
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
    success: function(fichier) {

    }
  })
});


//reload si changement d'année
$(document).on('change', '#change_annee_temp_hrs', function (e){

  window.location = Routing.generate('administration_hrs_index', {annee: $(this).val()});
});

$(document).on('change', '#change_annee_temp_previsionnel', function (e){
  window.location = Routing.generate('administration_previsionnel_index', {annee: $(this).val()});
});

// $(document).on('click', '.previsionnelModule', function () {
//   var modalPrevisionnel = $('#modalPrevisionnel');
//
//   $.ajax({
//     url: Routing.generate('api_previsionnel_matiere', {'matiere': $(this).data('matiere')}),
//     success: function (data) {
//
//       modalPrevisionnel.empty();
//       var html = '<table class="table table-bordered table-condensed">\n' +
//         '                    <thead>\n' +
//         '                    <tr>\n' +
//         '                        <th class="cm">NB h*</th>\n' +
//         '                        <th class="cm">NB Gr.</th>\n' +
//         '                        <th class="cm">1.5**</th>\n' +
//         '\n' +
//         '                        <th class="previtd">NB h/ Gr.*</th>\n' +
//         '                        <th class="previtd">NB Gr.</th>\n' +
//         '                        <th class="previtd">1.5**</th>\n' +
//         '\n' +
//         '                        <th class="previtp">NB h/ Gr.*</th>\n' +
//         '                        <th class="previtp">NB Gr.</th>\n' +
//         '                        <th class="previtp">1.5**</th>\n' +
//         '                    </tr>\n' +
//         '                    </thead>\n' +
//         '                    <tbody>\n';
//
//       jQuery.each(data, function (index, matiere) {
//         html = html +
//           '                        <tr>\n' +
//           '                            <td colspan="9">\n' +
//           '                                ' + matiere.personnel + '\n' +
//           '                            </td>\n' +
//           '                        </tr>\n' +
//           '                        <tr>\n' +
//           '                            <td>' + matiere.nbHCm + ' h</td>\n' +
//           '                            <td>' + matiere.nbGrCm + '</td>\n' +
//           '                            <td>' + matiere.nbSeanceCm + '</td>\n' +
//           '                            <td class="previtd">' + matiere.nbHTd + ' h</td>\n' +
//           '                            <td class="previtd">' + matiere.nbGrTd + '</td>\n' +
//           '                            <td class="previtd">' + matiere.nbSeanceTd + '</td>\n' +
//           '                            <td class="previtp">' + matiere.nbHTp + ' h</td>\n' +
//           '                            <td class="previtp">' + matiere.nbGrTp + '</td>\n' +
//           '                            <td class="previtp">' + matiere.nbSeanceTp + '</td>\n' +
//           '                        </tr>\n';
//
//       });
//       html = html + '                    </tbody>\n' +
//         '                </table>';
//
//       modalPrevisionnel.append(html);
//     }
//   });
// })
