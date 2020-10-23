(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adm.previsionnel"],{

/***/ "./assets/js/pages/adm.previsionnel.js":
/*!*********************************************!*\
  !*** ./assets/js/pages/adm.previsionnel.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, jQuery) {/* harmony import */ var core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ "./assets/js/util.js");



// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.previsionnel.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 30/07/2020 11:18

var nbLignePrevisionnel = 1;
$(document).on('change', '.changeIntervenantPrevi', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $.ajax({
    url: Routing.generate('administration_previsionnel_ajax_edit', {
      id: $(this).data('previ')
    }),
    method: 'POST',
    data: {
      value: $(this).val(),
      field: 'personnel'
    },
    success: function success() {
      Object(_util__WEBPACK_IMPORTED_MODULE_3__["addCallout"])('Modification de prévisionnel enregistrée !', 'success');
    },
    error: function error() {
      Object(_util__WEBPACK_IMPORTED_MODULE_3__["addCallout"])('Erreur lors de la modification du prévisionnel !', 'danger');
    }
  });
});
$(document).on('change', '#previSemestre', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $('#blocPrevisionnel').empty().load(Routing.generate('administration_previsionnel_semestre', {
    semestre: $(this).val(),
    annee: $(this).data('annee')
  }));
});
$(document).on('click', '#reloadPreviSemestre', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $('#blocPrevisionnel').empty().load(Routing.generate('administration_previsionnel_semestre', {
    semestre: $(this).data('semestre'),
    annee: $(this).data('annee')
  }));
});
$(document).on('change', '#previMatiere', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $('#blocPrevisionnel').empty().load(Routing.generate('administration_previsionnel_matiere', {
    matiere: $(this).val(),
    annee: $(this).data('annee')
  }));
});
$(document).on('click', '#reloadPreviMatiere', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $('#blocPrevisionnel').empty().load(Routing.generate('administration_previsionnel_matiere', {
    matiere: $(this).data('matiere'),
    annee: $(this).data('annee')
  }));
});
$(document).on('change', '#previPersonnel', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $('#blocPrevisionnel').empty().load(Routing.generate('administration_previsionnel_personnel', {
    personnel: $(this).val(),
    annee: $(this).data('annee')
  }));
});
$(document).on('click', '#reloadPreviPersonnel', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $('#blocPrevisionnel').empty().load(Routing.generate('administration_previsionnel_personnel', {
    personnel: $(this).data('personnel'),
    annee: $(this).data('annee')
  }));
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
  $.ajax({
    url: Routing.generate('api_enseignants_departement'),
    method: 'POST',
    success: function success(data) {
      var html = '<tr>\n' + '                        <td>\n' + '                            <select class="form-control" data-live-search="true" name="intervenant_' + nbLignePrevisionnel + '" id="intervenant_' + nbLignePrevisionnel + '">\n' + '                                <option value="">Choisir l\'intervenant</option>\n';
      jQuery.each(data, function (index, pers) {
        html = html + '<option value="' + pers.id + '">' + pers.display + '</option>\n';
      });
      html = html + '                            </select>\n' + '                        </td>\n' + '                        <td><input type="text" name="cm_' + nbLignePrevisionnel + '" id="cm_' + nbLignePrevisionnel + '" data-ligne="' + nbLignePrevisionnel + '" class="form-control chgcm" value="0"></td>\n' + '                        <td><input type="number" name="gr_cm_' + nbLignePrevisionnel + '" id="gr_cm_' + nbLignePrevisionnel + '" value="0" data-ligne="' + nbLignePrevisionnel + '" class="form-control chgcm">\n' + '                        </td>\n' + '                        <td id="ind_cm_' + nbLignePrevisionnel + '">0</td>\n' + '                        <td style="background-color: #68C39F"><input type="text" value="0" name="td_' + nbLignePrevisionnel + '" id="td_' + nbLignePrevisionnel + '" data-ligne="' + nbLignePrevisionnel + '"\n' + '                                                                     class="form-control chgtd"></td>\n' + '                        <td style="background-color: #68C39F"><input type="number" value="0" name="gr_td_' + nbLignePrevisionnel + '" id="gr_td_' + nbLignePrevisionnel + '"\n' + '                                                                     data-ligne="' + nbLignePrevisionnel + '" class="form-control chgtd"></td>\n' + '                        <td style="background-color: #68C39F" id="ind_td_' + nbLignePrevisionnel + '">0</td>\n' + '                        <td style="background-color: #FFC052"><input type="text" value="0" name="tp_' + nbLignePrevisionnel + '" id="tp_' + nbLignePrevisionnel + '" data-ligne="' + nbLignePrevisionnel + '"\n' + '                                                                     class="form-control chgtp"></td>\n' + '                        <td style="background-color: #FFC052"><input type="number" value="0" name="gr_tp_' + nbLignePrevisionnel + '" id="gr_tp_' + nbLignePrevisionnel + '"\n' + '                                                                     data-ligne="' + nbLignePrevisionnel + '" class="form-control chgtp"></td>\n' + '                        <td style="background-color: #FFC052" id="ind_tp_' + nbLignePrevisionnel + '">0</td>\n' + '                    </tr>';
      $('#nbLigne').val(nbLignePrevisionnel);
      $('#ligneAdd').before(html);
      $('#intervenant_' + nbLignePrevisionnel).selectpicker();
    }
  });
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
  var totalHeuresCm = 0;
  var totalHeuresTd = 0;
  var totalHeuresTp = 0; //let totalMatiere = 0

  for (var i = 1; i <= nbLignePrevisionnel; i++) {
    var $cm = $('#cm_' + i);
    var $td = $('#td_' + i);
    var $tp = $('#tp_' + i);
    totalCm = totalCm + parseFloat($cm.val()) * parseInt($('#gr_cm_' + i).val());
    totalTd = totalTd + parseFloat($td.val()) * parseInt($('#gr_td_' + i).val());
    totalTp = totalTp + parseFloat($tp.val()) * parseInt($('#gr_tp_' + i).val());
    totalHeuresCm = totalHeuresCm + parseFloat($cm.val());
    totalHeuresTd = totalHeuresTd + parseFloat($td.val());
    totalHeuresTp = totalHeuresTp + parseFloat($tp.val());
    totalEtu = totalEtu + parseFloat($cm.val()) + parseFloat($td.val()) + parseFloat($tp.val());
  }

  totalEqTd = totalCm + totalTd + totalTp;
  $('#totalCm').html(totalCm.toFixed(2));
  $('#totalTd').html(totalTd.toFixed(2));
  $('#totalTp').html(totalTp.toFixed(2));
  $('#totalEqTd').html(totalEqTd.toFixed(2));
  $('#totalEtu').html(totalEtu.toFixed(2));
  /** vérificiation */

  /* todo: ne fonctionne par, car doit prendre en compte le nombre de groupe et les possibles autres données déjà saisies. */

  $('#totalHeuresCm').html(totalHeuresCm.toFixed(2));
  $('#totalHeuresTd').html(totalHeuresTd.toFixed(2));
  $('#totalHeuresTp').html(totalHeuresTp.toFixed(2));
  var diffCm = parseFloat($('#cmMaquette').html()) - totalHeuresCm;
  var diffTd = parseFloat($('#tdMaquette').html()) - totalHeuresTd;
  var diffTp = parseFloat($('#tpMaquette').html()) - totalHeuresTp;
  $('#diffCm').html(diffCm.toFixed(2));
  $('#diffTd').html(diffTd.toFixed(2));
  $('#diffTp').html(diffTp.toFixed(2));

  if (diffCm < 0) {
    $('#diffCm').addClass('erreurPrevi').removeClass('validePrevi');
  } else {
    $('#diffCm').addClass('validePrevi').removeClass('erreurPrevi');
  }

  if (diffTd < 0) {
    $('#diffTd').addClass('erreurPrevi').removeClass('validePrevi');
  } else {
    $('#diffTd').addClass('validePrevi').removeClass('erreurPrevi');
  }

  if (diffTp < 0) {
    $('#diffTp').addClass('erreurPrevi').removeClass('validePrevi');
  } else {
    $('#diffTp').addClass('validePrevi').removeClass('erreurPrevi');
  }
}

$(document).on('change', '#previsionnel_matiere', function () {
  var volumeMatiere = $('#volumeMatiere');

  if ($(this).val() === '') {
    volumeMatiere.html('Choisir d\'abord une matière');
  } else {
    $.ajax({
      url: Routing.generate('api_matiere', {
        'matiere': $(this).val()
      }),
      success: function success(data) {
        var html = 'PPN Officiel => CM ' + data.cmFormation + ' heure(s); TD ' + data.tdFormation + ' heure(s); TP ' + data.tpFormation + ' heure(s); PPN Réalisé/departement => CM ' + data.cmPpn + ' heure(s); TD ' + data.tdPpn + ' heure(s); TP ' + data.tpPpn + ' heure(s);';
        volumeMatiere.html(html);
        $('#cmMaquette').html(data.cmFormation);
        $('#totalHeuresCm').html(0);
        $('#diffCm').html(0);
        $('#tdMaquette').html(data.tdFormation);
        $('#totalHeuresTd').html(0);
        $('#diffTd').html(0);
        $('#tpMaquette').html(data.tpFormation);
        $('#totalHeuresTp').html(0);
        $('#diffTp').html(0);
        $('#tabheures').show();
      }
    });
  }
});
$(document).on('click', '#btnGenereFichier', function (e) {
  e.preventDefault();
  e.stopPropagation();
  var selectedChamps = [];
  $('input:checkbox[name=exportChamps]:checked').each(function () {
    selectedChamps.push($(this).val());
  });
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
    success: function success(fichier) {}
  });
}); //reload si changement d'année

$(document).on('change', '#change_annee_temp_hrs', function (e) {
  window.location = Routing.generate('administration_hrs_index', {
    annee: $(this).val()
  });
});
$(document).on('change', '#change_annee_temp_previsionnel', function (e) {
  window.location = Routing.generate('administration_previsionnel_index', {
    annee: $(this).val()
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/util.js":
/*!***************************!*\
  !*** ./assets/js/util.js ***!
  \***************************/
/*! exports provided: addCallout, getDataOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCallout", function() { return addCallout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataOptions", function() { return getDataOptions; });
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);





// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/util.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 16/10/2020 14:54


var $stopCatchEnter = false;

function readUrlMenu($url) {
  var $elt = $url.split('/');
  var $firstElt = 2;

  if ($elt[1] === 'index.php') {
    if ($elt.length > 1) {
      $firstElt = 3;
    }
  }

  if ($elt[$firstElt] === 'super-administration') {
    $firstElt = $firstElt + 1;
  }

  if ($elt[$elt.length - 1] === '') {
    $elt.pop();
  }

  jquery__WEBPACK_IMPORTED_MODULE_5___default()('.menu-item').removeClass('active');
  jquery__WEBPACK_IMPORTED_MODULE_5___default()('#menu-' + $elt[$firstElt]).addClass('active');
} //colorise le bon menu


readUrlMenu(jquery__WEBPACK_IMPORTED_MODULE_5___default()(location).attr('pathname'));
sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.mixin({
  customClass: {
    confirmButton: 'btn btn-primary',
    cancelButton: 'btn btn-secondary'
  },
  buttonsStyling: false
}); //pop up de confirmation de suppression

jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('click', '.supprimer', function (e) {
  e.preventDefault();
  var url = jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).attr('href');
  var csrf = jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).data('csrf');
  sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
    title: 'Confirmer la suppression ?',
    text: 'L\'opération ne pourra pas être annulée.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Oui, je confirme',
    cancelButtonText: 'Non, Annuler',
    customClass: {
      confirmButton: 'btn btn-primary',
      cancelButton: 'btn btn-secondary'
    },
    buttonsStyling: false
  }).then(function (result) {
    if (result.value) {
      jquery__WEBPACK_IMPORTED_MODULE_5___default.a.ajax({
        url: url,
        type: 'DELETE',
        data: {
          _token: csrf
        },
        success: function success(id) {
          if (id.hasOwnProperty('redirect') && id.hasOwnProperty('url')) {
            document.location.href = id.url;
          } else {
            //t.row("#ligne_"+id).remove().draw(); =< datattable todo: remove ligne si datatable ?? problème dans adm>personnel
            jquery__WEBPACK_IMPORTED_MODULE_5___default()('#ligne_' + id).closest('tr').remove();
            addCallout('Suppression effectuée avec succès', 'success');
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
              title: 'Supprimé!',
              text: 'L\'enregistrement a été supprimé.',
              icon: 'success',
              confirmButtonText: 'OK',
              customClass: {
                confirmButton: 'btn btn-primary',
                cancelButton: 'btn btn-secondary'
              },
              buttonsStyling: false
            });
          }
        },
        error: function error(xhr, ajaxOptions, thrownError) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: 'Erreur lors de la suppression!',
            text: 'Merci de renouveler l\'opération',
            icon: 'error',
            confirmButtonText: 'OK',
            customClass: {
              confirmButton: 'btn btn-primary',
              cancelButton: 'btn btn-secondary'
            },
            buttonsStyling: false
          });
          addCallout('Erreur lors de la tentative de suppression', 'danger');
        }
      });
    } else if ( // Read more about handling dismissals
    result.dismiss === 'cancel') {
      sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
        title: 'Cancelled',
        text: 'OK! Tout est comme avant !',
        icon: 'error',
        confirmButtonText: 'OK',
        customClass: {
          confirmButton: 'btn btn-primary',
          cancelButton: 'btn btn-secondary'
        },
        buttonsStyling: false
      });
    }
  });
});
function addCallout(message, label) {
  console.log('callout');
  var translate = new Array();
  translate['success'] = 'Succès';
  translate['danger'] = 'Erreur';
  translate['warning'] = 'Attention';
  var html = '<div class="callout callout-' + label + '" role="alert">\n' + '                    <button type="button" class="close" data-dismiss="callout" aria-label="Close">\n' + '                        <span>&times;</span>\n' + '                    </button>\n' + '                    <h5>' + translate[label] + '</h5>\n' + '                    <p>' + message + '</p>\n' + '                </div>';
  jquery__WEBPACK_IMPORTED_MODULE_5___default()('#mainContent').prepend(html).slideDown('slow');
  jquery__WEBPACK_IMPORTED_MODULE_5___default()('.callout').delay(5000).slideUp('slow');
} //Editable

var myEditInitialContent = '';
var type = 'text';
var EditOnLine = false;
jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('click', '.myedit', function (e) {
  e.preventDefault();
  myEditInitialContent = jquery__WEBPACK_IMPORTED_MODULE_5___default()(this);
  var html = '';
  EditOnLine = true;

  if (typeof jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).data('type') !== 'undefined') {
    type = jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).data('type');
  }

  if (jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).data('type') === 'select') {//todo: A finaliser
  } else if (jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).data('type') === 'textarea') {
    html = genereTextArea(jquery__WEBPACK_IMPORTED_MODULE_5___default()(this));
  } else {
    html = genereInput(jquery__WEBPACK_IMPORTED_MODULE_5___default()(this));
  }

  jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).replaceWith(html);
  jquery__WEBPACK_IMPORTED_MODULE_5___default()('#myedit-input').focus();
});
jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('keyup', '#myedit-input', function (e) {
  if (e.keyCode === 13 && $stopCatchEnter === false) {
    updateData();
  } else if (e.keyCode === 27) {
    jquery__WEBPACK_IMPORTED_MODULE_5___default()('#myEdit-zone').replaceWith(myEditInitialContent);
  }
});
jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('click', '#myedit-valide', function (e) {
  $stopCatchEnter = false;
  e.preventDefault();
  updateData();
});
jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('keypress', function (e) {
  if (EditOnLine === true && $stopCatchEnter === false && e.which === 13) {
    e.preventDefault();
    updateData();
  }

  if (EditOnLine === true && $stopCatchEnter === false && e.which === 27) {
    e.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_5___default()('#myEdit-zone').replaceWith(myEditInitialContent);
  }
});
jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('click', '#myedit-annule', function (e) {
  e.preventDefault();
  jquery__WEBPACK_IMPORTED_MODULE_5___default()('#myEdit-zone').replaceWith(myEditInitialContent);
});

function updateData() {
  var val = jquery__WEBPACK_IMPORTED_MODULE_5___default()('#myedit-input').val();
  jquery__WEBPACK_IMPORTED_MODULE_5___default.a.ajax({
    url: myEditInitialContent.attr('href'),
    data: {
      field: myEditInitialContent.data('field'),
      value: val,
      type: type
    },
    method: 'POST',
    success: function success() {
      myEditInitialContent.html(val);
      jquery__WEBPACK_IMPORTED_MODULE_5___default()('#myEdit-zone').replaceWith(myEditInitialContent);
      EditOnLine = false;
    }
  });
}

function genereTextArea($obj) {
  $stopCatchEnter = true;
  return '<div id="myEdit-zone">\n' + '                      <textarea rows="5" class="form-control" id="myedit-input">' + $obj.html().trim() + '</textarea>\n' + '                      <span class="input-group-append">\n' + ' <button class="btn btn-success-outline" id="myedit-valide"><i class="fas fa-check"></i></button>\n' + '                        <button class="btn btn-danger-outline" id="myedit-annule"><i class="fas fa-times"></i></button>\n' + '                      </span>\n' + '                    </div>';
}

function genereInput($obj) {
  return '<div id="myEdit-zone" class="input-group">\n' + '                      <input type="text" class="form-control" id="myedit-input" value="' + $obj.html().trim() + '" >\n' + '                      <span class="input-group-append">\n' + ' <button class="btn btn-success-outline" id="myedit-valide"><i class="fas fa-check"></i></button>\n' + '                        <button class="btn btn-danger-outline" id="myedit-annule"><i class="fas fa-times"></i></button>\n' + '                      </span>\n' + '                    </div>';
}

jQuery.fn.dataAttr = function (name, def) {
  return jquery__WEBPACK_IMPORTED_MODULE_5___default()(this)[0].getAttribute('data-' + name) || def;
};

jQuery.fn.hasDataAttr = function (name) {
  return jquery__WEBPACK_IMPORTED_MODULE_5___default()(this)[0].hasAttribute('data-' + name);
};

function dataToOption(name) {
  return name.replace(/-([a-z])/g, function (x) {
    return x[1].toUpperCase();
  });
}

function getDataOptions(el, castList) {
  var options = {};
  jquery__WEBPACK_IMPORTED_MODULE_5___default.a.each(jquery__WEBPACK_IMPORTED_MODULE_5___default()(el).data(), function (key, value) {
    key = dataToOption(key); // Escape data-provide

    if (key == 'provide') {
      return;
    }

    if (castList != undefined) {
      var type = castList[key];

      switch (type) {
        case 'bool':
          value = Boolean(value);
          break;

        case 'num':
          value = Number(value);
          break;

        case 'array':
          value = value.split(',');
          break;

        default:
      }
    }

    options[key] = value;
  });
  return options;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/number-parse-float.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/number-parse-float.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var $parseFloat = global.parseFloat;
var FORCED = 1 / $parseFloat(whitespaces + '-0') !== -Infinity;

// `parseFloat` method
// https://tc39.github.io/ecma262/#sec-parsefloat-string
module.exports = FORCED ? function parseFloat(string) {
  var trimmedString = trim(String(string));
  var result = $parseFloat(trimmedString);
  return result === 0 && trimmedString.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),

/***/ "./node_modules/core-js/internals/number-parse-int.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/number-parse-int.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var $parseInt = global.parseInt;
var hex = /^[+-]?0[Xx]/;
var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22;

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(String(string));
  return $parseInt(S, (radix >>> 0) || (hex.test(S) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "./node_modules/core-js/internals/string-repeat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/string-repeat.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `String.prototype.repeat` method implementation
// https://tc39.github.io/ecma262/#sec-string.prototype.repeat
module.exports = ''.repeat || function repeat(count) {
  var str = String(requireObjectCoercible(this));
  var result = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/this-number-value.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/this-number-value.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `thisNumberValue` abstract operation
// https://tc39.github.io/ecma262/#sec-thisnumbervalue
module.exports = function (value) {
  if (typeof value != 'number' && classof(value) != 'Number') {
    throw TypeError('Incorrect invocation');
  }
  return +value;
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.number.to-fixed.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.to-fixed.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var thisNumberValue = __webpack_require__(/*! ../internals/this-number-value */ "./node_modules/core-js/internals/this-number-value.js");
var repeat = __webpack_require__(/*! ../internals/string-repeat */ "./node_modules/core-js/internals/string-repeat.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var nativeToFixed = 1.0.toFixed;
var floor = Math.floor;

var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};

var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

var FORCED = nativeToFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !fails(function () {
  // V8 ~ Android 4.3-
  nativeToFixed.call({});
});

// `Number.prototype.toFixed` method
// https://tc39.github.io/ecma262/#sec-number.prototype.tofixed
$({ target: 'Number', proto: true, forced: FORCED }, {
  // eslint-disable-next-line max-statements
  toFixed: function toFixed(fractionDigits) {
    var number = thisNumberValue(this);
    var fractDigits = toInteger(fractionDigits);
    var data = [0, 0, 0, 0, 0, 0];
    var sign = '';
    var result = '0';
    var e, z, j, k;

    var multiply = function (n, c) {
      var index = -1;
      var c2 = c;
      while (++index < 6) {
        c2 += n * data[index];
        data[index] = c2 % 1e7;
        c2 = floor(c2 / 1e7);
      }
    };

    var divide = function (n) {
      var index = 6;
      var c = 0;
      while (--index >= 0) {
        c += data[index];
        data[index] = floor(c / n);
        c = (c % n) * 1e7;
      }
    };

    var dataToString = function () {
      var index = 6;
      var s = '';
      while (--index >= 0) {
        if (s !== '' || index === 0 || data[index] !== 0) {
          var t = String(data[index]);
          s = s === '' ? t : s + repeat.call('0', 7 - t.length) + t;
        }
      } return s;
    };

    if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits');
    // eslint-disable-next-line no-self-compare
    if (number != number) return 'NaN';
    if (number <= -1e21 || number >= 1e21) return String(number);
    if (number < 0) {
      sign = '-';
      number = -number;
    }
    if (number > 1e-21) {
      e = log(number * pow(2, 69, 1)) - 69;
      z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = fractDigits;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        result = dataToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        result = dataToString() + repeat.call('0', fractDigits);
      }
    }
    if (fractDigits > 0) {
      k = result.length;
      result = sign + (k <= fractDigits
        ? '0.' + repeat.call('0', fractDigits - k) + result
        : result.slice(0, k - fractDigits) + '.' + result.slice(k - fractDigits));
    } else {
      result = sign + result;
    } return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-float.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-float.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var parseFloatImplementation = __webpack_require__(/*! ../internals/number-parse-float */ "./node_modules/core-js/internals/number-parse-float.js");

// `parseFloat` method
// https://tc39.github.io/ecma262/#sec-parsefloat-string
$({ global: true, forced: parseFloat != parseFloatImplementation }, {
  parseFloat: parseFloatImplementation
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-int.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-int.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var parseIntImplementation = __webpack_require__(/*! ../internals/number-parse-int */ "./node_modules/core-js/internals/number-parse-int.js");

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt != parseIntImplementation }, {
  parseInt: parseIntImplementation
});


/***/ })

},[["./assets/js/pages/adm.previsionnel.js","runtime","vendors~absences~adm.absences~adm.alternances~adm.articles~adm.bornes~adm.configuration~adm.edt~adm.~d677a9f6","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~6af3b135","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~3a8cbb67","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~7452d955","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.groupe~adm.justificat~0d230585"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvYWRtLnByZXZpc2lvbm5lbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbnVtYmVyLXBhcnNlLWZsb2F0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9udW1iZXItcGFyc2UtaW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctcmVwZWF0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90aGlzLW51bWJlci12YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm51bWJlci50by1maXhlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnBhcnNlLWZsb2F0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMucGFyc2UtaW50LmpzIl0sIm5hbWVzIjpbIm5iTGlnbmVQcmV2aXNpb25uZWwiLCIkIiwiZG9jdW1lbnQiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImFqYXgiLCJ1cmwiLCJSb3V0aW5nIiwiZ2VuZXJhdGUiLCJpZCIsImRhdGEiLCJtZXRob2QiLCJ2YWx1ZSIsInZhbCIsImZpZWxkIiwic3VjY2VzcyIsImFkZENhbGxvdXQiLCJlcnJvciIsImVtcHR5IiwibG9hZCIsInNlbWVzdHJlIiwiYW5uZWUiLCJtYXRpZXJlIiwicGVyc29ubmVsIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImF0dHIiLCJodG1sIiwialF1ZXJ5IiwiZWFjaCIsImluZGV4IiwicGVycyIsImRpc3BsYXkiLCJiZWZvcmUiLCJzZWxlY3RwaWNrZXIiLCJsaWduZSIsIm5iU2VhbmNlIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJ1cGRhdGVTeW50aGVzZVByZXZpc2lvbm5lbCIsInRvdGFsQ20iLCJ0b3RhbFRkIiwidG90YWxUcCIsInRvdGFsRXFUZCIsInRvdGFsRXR1IiwidG90YWxIZXVyZXNDbSIsInRvdGFsSGV1cmVzVGQiLCJ0b3RhbEhldXJlc1RwIiwiaSIsIiRjbSIsIiR0ZCIsIiR0cCIsInBhcnNlSW50IiwiZGlmZkNtIiwiZGlmZlRkIiwiZGlmZlRwIiwidm9sdW1lTWF0aWVyZSIsImNtRm9ybWF0aW9uIiwidGRGb3JtYXRpb24iLCJ0cEZvcm1hdGlvbiIsImNtUHBuIiwidGRQcG4iLCJ0cFBwbiIsInNob3ciLCJzZWxlY3RlZENoYW1wcyIsInB1c2giLCJmaWNoaWVyIiwid2luZG93IiwibG9jYXRpb24iLCIkc3RvcENhdGNoRW50ZXIiLCJyZWFkVXJsTWVudSIsIiR1cmwiLCIkZWx0Iiwic3BsaXQiLCIkZmlyc3RFbHQiLCJsZW5ndGgiLCJwb3AiLCJTd2FsIiwibWl4aW4iLCJjdXN0b21DbGFzcyIsImNvbmZpcm1CdXR0b24iLCJjYW5jZWxCdXR0b24iLCJidXR0b25zU3R5bGluZyIsImNzcmYiLCJmaXJlIiwidGl0bGUiLCJ0ZXh0IiwiaWNvbiIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsInRoZW4iLCJyZXN1bHQiLCJ0eXBlIiwiX3Rva2VuIiwiaGFzT3duUHJvcGVydHkiLCJocmVmIiwiY2xvc2VzdCIsInJlbW92ZSIsInhociIsImFqYXhPcHRpb25zIiwidGhyb3duRXJyb3IiLCJkaXNtaXNzIiwibWVzc2FnZSIsImxhYmVsIiwiY29uc29sZSIsImxvZyIsInRyYW5zbGF0ZSIsIkFycmF5IiwicHJlcGVuZCIsInNsaWRlRG93biIsImRlbGF5Iiwic2xpZGVVcCIsIm15RWRpdEluaXRpYWxDb250ZW50IiwiRWRpdE9uTGluZSIsImdlbmVyZVRleHRBcmVhIiwiZ2VuZXJlSW5wdXQiLCJyZXBsYWNlV2l0aCIsImZvY3VzIiwia2V5Q29kZSIsInVwZGF0ZURhdGEiLCJ3aGljaCIsIiRvYmoiLCJ0cmltIiwiZm4iLCJkYXRhQXR0ciIsIm5hbWUiLCJkZWYiLCJnZXRBdHRyaWJ1dGUiLCJoYXNEYXRhQXR0ciIsImhhc0F0dHJpYnV0ZSIsImRhdGFUb09wdGlvbiIsInJlcGxhY2UiLCJ4IiwidG9VcHBlckNhc2UiLCJnZXREYXRhT3B0aW9ucyIsImVsIiwiY2FzdExpc3QiLCJvcHRpb25zIiwia2V5IiwidW5kZWZpbmVkIiwiQm9vbGVhbiIsIk51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsbUJBQW1CLEdBQUcsQ0FBMUI7QUFFQUMsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsRUFBWixDQUFlLFFBQWYsRUFBeUIseUJBQXpCLEVBQW9ELFVBQVVDLENBQVYsRUFBYTtBQUMvREEsR0FBQyxDQUFDQyxjQUFGO0FBQ0FELEdBQUMsQ0FBQ0UsZUFBRjtBQUNBTCxHQUFDLENBQUNNLElBQUYsQ0FBTztBQUNMQyxPQUFHLEVBQUVDLE9BQU8sQ0FBQ0MsUUFBUixDQUFpQix1Q0FBakIsRUFBMEQ7QUFBQ0MsUUFBRSxFQUFFVixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFXLElBQVIsQ0FBYSxPQUFiO0FBQUwsS0FBMUQsQ0FEQTtBQUVMQyxVQUFNLEVBQUUsTUFGSDtBQUdMRCxRQUFJLEVBQUU7QUFDSkUsV0FBSyxFQUFFYixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFjLEdBQVIsRUFESDtBQUVKQyxXQUFLLEVBQUU7QUFGSCxLQUhEO0FBT0xDLFdBQU8sRUFBRSxtQkFBWTtBQUNuQkMsOERBQVUsQ0FBQyw0Q0FBRCxFQUErQyxTQUEvQyxDQUFWO0FBQ0QsS0FUSTtBQVVMQyxT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R0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLENBQUM7O0FBRUQ7QUFDQTtBQUNBLEdBQUcsZ0RBQWdEO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQzdIRCxRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLCtCQUErQixtQkFBTyxDQUFDLCtGQUFpQzs7QUFFeEU7QUFDQTtBQUNBLEdBQUcsK0RBQStEO0FBQ2xFO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDUEQsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyw2QkFBNkIsbUJBQU8sQ0FBQywyRkFBK0I7O0FBRXBFO0FBQ0E7QUFDQSxHQUFHLDJEQUEyRDtBQUM5RDtBQUNBLENBQUMiLCJmaWxlIjoiYWRtLnByZXZpc2lvbm5lbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9wYWdlcy9hZG0ucHJldmlzaW9ubmVsLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMzAvMDcvMjAyMCAxMToxOFxuaW1wb3J0IHthZGRDYWxsb3V0fSBmcm9tICcuLi91dGlsJ1xuXG5sZXQgbmJMaWduZVByZXZpc2lvbm5lbCA9IDFcblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcuY2hhbmdlSW50ZXJ2ZW5hbnRQcmV2aScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9wcmV2aXNpb25uZWxfYWpheF9lZGl0Jywge2lkOiAkKHRoaXMpLmRhdGEoJ3ByZXZpJyl9KSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBkYXRhOiB7XG4gICAgICB2YWx1ZTogJCh0aGlzKS52YWwoKSxcbiAgICAgIGZpZWxkOiAncGVyc29ubmVsJ1xuICAgIH0sXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgYWRkQ2FsbG91dCgnTW9kaWZpY2F0aW9uIGRlIHByw6l2aXNpb25uZWwgZW5yZWdpc3Ryw6llICEnLCAnc3VjY2VzcycpXG4gICAgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24gKCkge1xuICAgICAgYWRkQ2FsbG91dCgnRXJyZXVyIGxvcnMgZGUgbGEgbW9kaWZpY2F0aW9uIGR1IHByw6l2aXNpb25uZWwgIScsICdkYW5nZXInKVxuICAgIH1cbiAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnI3ByZXZpU2VtZXN0cmUnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAkKCcjYmxvY1ByZXZpc2lvbm5lbCcpLmVtcHR5KCkubG9hZChSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9wcmV2aXNpb25uZWxfc2VtZXN0cmUnLCB7XG4gICAgc2VtZXN0cmU6ICQodGhpcykudmFsKCksXG4gICAgYW5uZWU6ICQodGhpcykuZGF0YSgnYW5uZWUnKVxuICB9KSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjcmVsb2FkUHJldmlTZW1lc3RyZScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICQoJyNibG9jUHJldmlzaW9ubmVsJykuZW1wdHkoKS5sb2FkKFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX3ByZXZpc2lvbm5lbF9zZW1lc3RyZScsIHtcbiAgICBzZW1lc3RyZTogJCh0aGlzKS5kYXRhKCdzZW1lc3RyZScpLFxuICAgIGFubmVlOiAkKHRoaXMpLmRhdGEoJ2FubmVlJylcbiAgfSkpXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJyNwcmV2aU1hdGllcmUnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAkKCcjYmxvY1ByZXZpc2lvbm5lbCcpLmVtcHR5KCkubG9hZChSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9wcmV2aXNpb25uZWxfbWF0aWVyZScsIHtcbiAgICBtYXRpZXJlOiAkKHRoaXMpLnZhbCgpLFxuICAgIGFubmVlOiAkKHRoaXMpLmRhdGEoJ2FubmVlJylcbiAgfSkpXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI3JlbG9hZFByZXZpTWF0aWVyZScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICQoJyNibG9jUHJldmlzaW9ubmVsJykuZW1wdHkoKS5sb2FkKFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX3ByZXZpc2lvbm5lbF9tYXRpZXJlJywge1xuICAgIG1hdGllcmU6ICQodGhpcykuZGF0YSgnbWF0aWVyZScpLFxuICAgIGFubmVlOiAkKHRoaXMpLmRhdGEoJ2FubmVlJylcbiAgfSkpXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJyNwcmV2aVBlcnNvbm5lbCcsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICQoJyNibG9jUHJldmlzaW9ubmVsJykuZW1wdHkoKS5sb2FkKFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX3ByZXZpc2lvbm5lbF9wZXJzb25uZWwnLCB7XG4gICAgcGVyc29ubmVsOiAkKHRoaXMpLnZhbCgpLFxuICAgIGFubmVlOiAkKHRoaXMpLmRhdGEoJ2FubmVlJylcbiAgfSkpXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI3JlbG9hZFByZXZpUGVyc29ubmVsJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgJCgnI2Jsb2NQcmV2aXNpb25uZWwnKS5lbXB0eSgpLmxvYWQoUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fcHJldmlzaW9ubmVsX3BlcnNvbm5lbCcsIHtcbiAgICBwZXJzb25uZWw6ICQodGhpcykuZGF0YSgncGVyc29ubmVsJyksXG4gICAgYW5uZWU6ICQodGhpcykuZGF0YSgnYW5uZWUnKVxuICB9KSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcucHJldmlzaW9ubmVsX2FkZF9jaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAkKCcucHJldmlzaW9ubmVsX2FkZF9jaGFuZ2UnKS5yZW1vdmVDbGFzcygnYWN0aXZlIHNob3cnKVxuICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUgc2hvdycpXG4gICQoJyNtYWluQ29udGVudCcpLmVtcHR5KCkubG9hZCgkKHRoaXMpLmF0dHIoJ2hyZWYnKSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjYWRkSW50ZXJ2ZW5hbnRQcmV2aXNpb25uZWwnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICBuYkxpZ25lUHJldmlzaW9ubmVsKytcblxuXG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcGlfZW5zZWlnbmFudHNfZGVwYXJ0ZW1lbnQnKSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgbGV0IGh0bWwgPSAnPHRyPlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBkYXRhLWxpdmUtc2VhcmNoPVwidHJ1ZVwiIG5hbWU9XCJpbnRlcnZlbmFudF8nICsgbmJMaWduZVByZXZpc2lvbm5lbCArICdcIiBpZD1cImludGVydmVuYW50XycgKyBuYkxpZ25lUHJldmlzaW9ubmVsICsgJ1wiPlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+Q2hvaXNpciBsXFwnaW50ZXJ2ZW5hbnQ8L29wdGlvbj5cXG4nXG4gICAgICBqUXVlcnkuZWFjaChkYXRhLCBmdW5jdGlvbiAoaW5kZXgsIHBlcnMpIHtcbiAgICAgICAgaHRtbCA9IGh0bWwgKyAnPG9wdGlvbiB2YWx1ZT1cIicgKyBwZXJzLmlkICsgJ1wiPicgKyBwZXJzLmRpc3BsYXkgKyAnPC9vcHRpb24+XFxuJ1xuICAgICAgfSlcbiAgICAgIGh0bWwgPSBodG1sICsgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNtXycgKyBuYkxpZ25lUHJldmlzaW9ubmVsICsgJ1wiIGlkPVwiY21fJyArIG5iTGlnbmVQcmV2aXNpb25uZWwgKyAnXCIgZGF0YS1saWduZT1cIicgKyBuYkxpZ25lUHJldmlzaW9ubmVsICsgJ1wiIGNsYXNzPVwiZm9ybS1jb250cm9sIGNoZ2NtXCIgdmFsdWU9XCIwXCI+PC90ZD5cXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJncl9jbV8nICsgbmJMaWduZVByZXZpc2lvbm5lbCArICdcIiBpZD1cImdyX2NtXycgKyBuYkxpZ25lUHJldmlzaW9ubmVsICsgJ1wiIHZhbHVlPVwiMFwiIGRhdGEtbGlnbmU9XCInICsgbmJMaWduZVByZXZpc2lvbm5lbCArICdcIiBjbGFzcz1cImZvcm0tY29udHJvbCBjaGdjbVwiPlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBpZD1cImluZF9jbV8nICsgbmJMaWduZVByZXZpc2lvbm5lbCArICdcIj4wPC90ZD5cXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICM2OEMzOUZcIj48aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT1cIjBcIiBuYW1lPVwidGRfJyArIG5iTGlnbmVQcmV2aXNpb25uZWwgKyAnXCIgaWQ9XCJ0ZF8nICsgbmJMaWduZVByZXZpc2lvbm5lbCArICdcIiBkYXRhLWxpZ25lPVwiJyArIG5iTGlnbmVQcmV2aXNpb25uZWwgKyAnXCJcXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIGNoZ3RkXCI+PC90ZD5cXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICM2OEMzOUZcIj48aW5wdXQgdHlwZT1cIm51bWJlclwiIHZhbHVlPVwiMFwiIG5hbWU9XCJncl90ZF8nICsgbmJMaWduZVByZXZpc2lvbm5lbCArICdcIiBpZD1cImdyX3RkXycgKyBuYkxpZ25lUHJldmlzaW9ubmVsICsgJ1wiXFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWxpZ25lPVwiJyArIG5iTGlnbmVQcmV2aXNpb25uZWwgKyAnXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgY2hndGRcIj48L3RkPlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogIzY4QzM5RlwiIGlkPVwiaW5kX3RkXycgKyBuYkxpZ25lUHJldmlzaW9ubmVsICsgJ1wiPjA8L3RkPlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogI0ZGQzA1MlwiPjxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPVwiMFwiIG5hbWU9XCJ0cF8nICsgbmJMaWduZVByZXZpc2lvbm5lbCArICdcIiBpZD1cInRwXycgKyBuYkxpZ25lUHJldmlzaW9ubmVsICsgJ1wiIGRhdGEtbGlnbmU9XCInICsgbmJMaWduZVByZXZpc2lvbm5lbCArICdcIlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgY2hndHBcIj48L3RkPlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogI0ZGQzA1MlwiPjxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdmFsdWU9XCIwXCIgbmFtZT1cImdyX3RwXycgKyBuYkxpZ25lUHJldmlzaW9ubmVsICsgJ1wiIGlkPVwiZ3JfdHBfJyArIG5iTGlnbmVQcmV2aXNpb25uZWwgKyAnXCJcXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtbGlnbmU9XCInICsgbmJMaWduZVByZXZpc2lvbm5lbCArICdcIiBjbGFzcz1cImZvcm0tY29udHJvbCBjaGd0cFwiPjwvdGQ+XFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMDUyXCIgaWQ9XCJpbmRfdHBfJyArIG5iTGlnbmVQcmV2aXNpb25uZWwgKyAnXCI+MDwvdGQ+XFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgIDwvdHI+J1xuXG4gICAgICAkKCcjbmJMaWduZScpLnZhbChuYkxpZ25lUHJldmlzaW9ubmVsKVxuICAgICAgJCgnI2xpZ25lQWRkJykuYmVmb3JlKGh0bWwpXG4gICAgICAkKCcjaW50ZXJ2ZW5hbnRfJyArIG5iTGlnbmVQcmV2aXNpb25uZWwpLnNlbGVjdHBpY2tlcigpXG4gICAgfVxuICB9KVxuXG5cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnLmNoZ2NtJywgZnVuY3Rpb24gKGUpIHtcbiAgY29uc3QgbGlnbmUgPSAkKHRoaXMpLmRhdGEoJ2xpZ25lJylcbiAgY29uc3QgbmJTZWFuY2UgPSBwYXJzZUZsb2F0KCQoJyNjbV8nICsgbGlnbmUpLnZhbCgpKSAvIDEuNVxuICAkKCcjaW5kX2NtXycgKyBsaWduZSkuaHRtbChuYlNlYW5jZS50b0ZpeGVkKDIpKVxuXG4gIHVwZGF0ZVN5bnRoZXNlUHJldmlzaW9ubmVsKClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnLmNoZ3RkJywgZnVuY3Rpb24gKGUpIHtcbiAgY29uc3QgbGlnbmUgPSAkKHRoaXMpLmRhdGEoJ2xpZ25lJylcbiAgY29uc3QgbmJTZWFuY2UgPSBwYXJzZUZsb2F0KCQoJyN0ZF8nICsgbGlnbmUpLnZhbCgpKSAvIDEuNVxuICAkKCcjaW5kX3RkXycgKyBsaWduZSkuaHRtbChuYlNlYW5jZS50b0ZpeGVkKDIpKVxuXG4gIHVwZGF0ZVN5bnRoZXNlUHJldmlzaW9ubmVsKClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnLmNoZ3RwJywgZnVuY3Rpb24gKGUpIHtcbiAgY29uc3QgbGlnbmUgPSAkKHRoaXMpLmRhdGEoJ2xpZ25lJylcbiAgY29uc3QgbmJTZWFuY2UgPSBwYXJzZUZsb2F0KCQoJyN0cF8nICsgbGlnbmUpLnZhbCgpKSAvIDEuNVxuICAkKCcjaW5kX3RwXycgKyBsaWduZSkuaHRtbChuYlNlYW5jZS50b0ZpeGVkKDIpKVxuXG4gIHVwZGF0ZVN5bnRoZXNlUHJldmlzaW9ubmVsKClcbn0pXG5cbmZ1bmN0aW9uIHVwZGF0ZVN5bnRoZXNlUHJldmlzaW9ubmVsICgpIHtcbiAgbGV0IHRvdGFsQ20gPSAwXG4gIGxldCB0b3RhbFRkID0gMFxuICBsZXQgdG90YWxUcCA9IDBcbiAgbGV0IHRvdGFsRXFUZCA9IDBcbiAgbGV0IHRvdGFsRXR1ID0gMFxuXG4gIGxldCB0b3RhbEhldXJlc0NtID0gMFxuICBsZXQgdG90YWxIZXVyZXNUZCA9IDBcbiAgbGV0IHRvdGFsSGV1cmVzVHAgPSAwXG4gIC8vbGV0IHRvdGFsTWF0aWVyZSA9IDBcblxuICBmb3IgKGxldCBpID0gMTsgaSA8PSBuYkxpZ25lUHJldmlzaW9ubmVsOyBpKyspIHtcbiAgICBsZXQgJGNtID0gJCgnI2NtXycgKyBpKVxuICAgIGxldCAkdGQgPSAkKCcjdGRfJyArIGkpXG4gICAgbGV0ICR0cCA9ICQoJyN0cF8nICsgaSlcblxuICAgIHRvdGFsQ20gPSB0b3RhbENtICsgcGFyc2VGbG9hdCgkY20udmFsKCkpICogcGFyc2VJbnQoJCgnI2dyX2NtXycgKyBpKS52YWwoKSlcbiAgICB0b3RhbFRkID0gdG90YWxUZCArIHBhcnNlRmxvYXQoJHRkLnZhbCgpKSAqIHBhcnNlSW50KCQoJyNncl90ZF8nICsgaSkudmFsKCkpXG4gICAgdG90YWxUcCA9IHRvdGFsVHAgKyBwYXJzZUZsb2F0KCR0cC52YWwoKSkgKiBwYXJzZUludCgkKCcjZ3JfdHBfJyArIGkpLnZhbCgpKVxuXG4gICAgdG90YWxIZXVyZXNDbSA9IHRvdGFsSGV1cmVzQ20gKyBwYXJzZUZsb2F0KCRjbS52YWwoKSlcbiAgICB0b3RhbEhldXJlc1RkID0gdG90YWxIZXVyZXNUZCArIHBhcnNlRmxvYXQoJHRkLnZhbCgpKVxuICAgIHRvdGFsSGV1cmVzVHAgPSB0b3RhbEhldXJlc1RwICsgcGFyc2VGbG9hdCgkdHAudmFsKCkpXG5cbiAgICB0b3RhbEV0dSA9IHRvdGFsRXR1ICsgcGFyc2VGbG9hdCgkY20udmFsKCkpICsgcGFyc2VGbG9hdCgkdGQudmFsKCkpICsgcGFyc2VGbG9hdCgkdHAudmFsKCkpXG4gIH1cbiAgdG90YWxFcVRkID0gdG90YWxDbSArIHRvdGFsVGQgKyB0b3RhbFRwXG5cbiAgJCgnI3RvdGFsQ20nKS5odG1sKHRvdGFsQ20udG9GaXhlZCgyKSlcbiAgJCgnI3RvdGFsVGQnKS5odG1sKHRvdGFsVGQudG9GaXhlZCgyKSlcbiAgJCgnI3RvdGFsVHAnKS5odG1sKHRvdGFsVHAudG9GaXhlZCgyKSlcbiAgJCgnI3RvdGFsRXFUZCcpLmh0bWwodG90YWxFcVRkLnRvRml4ZWQoMikpXG4gICQoJyN0b3RhbEV0dScpLmh0bWwodG90YWxFdHUudG9GaXhlZCgyKSlcblxuICAvKiogdsOpcmlmaWNpYXRpb24gKi9cbiAgLyogdG9kbzogbmUgZm9uY3Rpb25uZSBwYXIsIGNhciBkb2l0IHByZW5kcmUgZW4gY29tcHRlIGxlIG5vbWJyZSBkZSBncm91cGUgZXQgbGVzIHBvc3NpYmxlcyBhdXRyZXMgZG9ubsOpZXMgZMOpasOgIHNhaXNpZXMuICovXG4gICQoJyN0b3RhbEhldXJlc0NtJykuaHRtbCh0b3RhbEhldXJlc0NtLnRvRml4ZWQoMikpXG4gICQoJyN0b3RhbEhldXJlc1RkJykuaHRtbCh0b3RhbEhldXJlc1RkLnRvRml4ZWQoMikpXG4gICQoJyN0b3RhbEhldXJlc1RwJykuaHRtbCh0b3RhbEhldXJlc1RwLnRvRml4ZWQoMikpXG5cbiAgbGV0IGRpZmZDbSA9IHBhcnNlRmxvYXQoJCgnI2NtTWFxdWV0dGUnKS5odG1sKCkpIC0gdG90YWxIZXVyZXNDbVxuICBsZXQgZGlmZlRkID0gcGFyc2VGbG9hdCgkKCcjdGRNYXF1ZXR0ZScpLmh0bWwoKSkgLSB0b3RhbEhldXJlc1RkXG4gIGxldCBkaWZmVHAgPSBwYXJzZUZsb2F0KCQoJyN0cE1hcXVldHRlJykuaHRtbCgpKSAtIHRvdGFsSGV1cmVzVHBcbiAgJCgnI2RpZmZDbScpLmh0bWwoZGlmZkNtLnRvRml4ZWQoMikpXG4gICQoJyNkaWZmVGQnKS5odG1sKGRpZmZUZC50b0ZpeGVkKDIpKVxuICAkKCcjZGlmZlRwJykuaHRtbChkaWZmVHAudG9GaXhlZCgyKSlcblxuICBpZiAoZGlmZkNtIDwgMCkge1xuICAgICQoJyNkaWZmQ20nKS5hZGRDbGFzcygnZXJyZXVyUHJldmknKS5yZW1vdmVDbGFzcygndmFsaWRlUHJldmknKVxuICB9IGVsc2Uge1xuICAgICQoJyNkaWZmQ20nKS5hZGRDbGFzcygndmFsaWRlUHJldmknKS5yZW1vdmVDbGFzcygnZXJyZXVyUHJldmknKVxuICB9XG5cbiAgaWYgKGRpZmZUZCA8IDApIHtcbiAgICAkKCcjZGlmZlRkJykuYWRkQ2xhc3MoJ2VycmV1clByZXZpJykucmVtb3ZlQ2xhc3MoJ3ZhbGlkZVByZXZpJylcbiAgfSBlbHNlIHtcbiAgICAkKCcjZGlmZlRkJykuYWRkQ2xhc3MoJ3ZhbGlkZVByZXZpJykucmVtb3ZlQ2xhc3MoJ2VycmV1clByZXZpJylcbiAgfVxuXG4gIGlmIChkaWZmVHAgPCAwKSB7XG4gICAgJCgnI2RpZmZUcCcpLmFkZENsYXNzKCdlcnJldXJQcmV2aScpLnJlbW92ZUNsYXNzKCd2YWxpZGVQcmV2aScpXG4gIH0gZWxzZSB7XG4gICAgJCgnI2RpZmZUcCcpLmFkZENsYXNzKCd2YWxpZGVQcmV2aScpLnJlbW92ZUNsYXNzKCdlcnJldXJQcmV2aScpXG4gIH1cbn1cblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcjcHJldmlzaW9ubmVsX21hdGllcmUnLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHZvbHVtZU1hdGllcmUgPSAkKCcjdm9sdW1lTWF0aWVyZScpXG4gIGlmICgkKHRoaXMpLnZhbCgpID09PSAnJykge1xuICAgIHZvbHVtZU1hdGllcmUuaHRtbCgnQ2hvaXNpciBkXFwnYWJvcmQgdW5lIG1hdGnDqHJlJylcbiAgfSBlbHNlIHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcGlfbWF0aWVyZScsIHsnbWF0aWVyZSc6ICQodGhpcykudmFsKCl9KSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGNvbnN0IGh0bWwgPSAnUFBOIE9mZmljaWVsID0+IENNICcgKyBkYXRhLmNtRm9ybWF0aW9uICsgJyBoZXVyZShzKTsgVEQgJyArIGRhdGEudGRGb3JtYXRpb24gKyAnIGhldXJlKHMpOyBUUCAnICsgZGF0YS50cEZvcm1hdGlvbiArICcgaGV1cmUocyk7IFBQTiBSw6lhbGlzw6kvZGVwYXJ0ZW1lbnQgPT4gQ00gJyArIGRhdGEuY21QcG4gKyAnIGhldXJlKHMpOyBURCAnICsgZGF0YS50ZFBwbiArICcgaGV1cmUocyk7IFRQICcgKyBkYXRhLnRwUHBuICsgJyBoZXVyZShzKTsnXG4gICAgICAgIHZvbHVtZU1hdGllcmUuaHRtbChodG1sKVxuICAgICAgICAkKCcjY21NYXF1ZXR0ZScpLmh0bWwoZGF0YS5jbUZvcm1hdGlvbilcbiAgICAgICAgJCgnI3RvdGFsSGV1cmVzQ20nKS5odG1sKDApXG4gICAgICAgICQoJyNkaWZmQ20nKS5odG1sKDApXG4gICAgICAgICQoJyN0ZE1hcXVldHRlJykuaHRtbChkYXRhLnRkRm9ybWF0aW9uKVxuICAgICAgICAkKCcjdG90YWxIZXVyZXNUZCcpLmh0bWwoMClcbiAgICAgICAgJCgnI2RpZmZUZCcpLmh0bWwoMClcbiAgICAgICAgJCgnI3RwTWFxdWV0dGUnKS5odG1sKGRhdGEudHBGb3JtYXRpb24pXG4gICAgICAgICQoJyN0b3RhbEhldXJlc1RwJykuaHRtbCgwKVxuICAgICAgICAkKCcjZGlmZlRwJykuaHRtbCgwKVxuICAgICAgICAkKCcjdGFiaGV1cmVzJykuc2hvdygpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufSlcblxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2J0bkdlbmVyZUZpY2hpZXInLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgZS5zdG9wUHJvcGFnYXRpb24oKVxuXG4gIGNvbnN0IHNlbGVjdGVkQ2hhbXBzID0gW11cbiAgJCgnaW5wdXQ6Y2hlY2tib3hbbmFtZT1leHBvcnRDaGFtcHNdOmNoZWNrZWQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICBzZWxlY3RlZENoYW1wcy5wdXNoKCQodGhpcykudmFsKCkpXG4gIH0pXG5cbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2V4cG9ydF9saXN0aW5nLmZyJyksXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgZGF0YToge1xuICAgICAgJ21hdGllcmUnOiAkKHRoaXMpLmRhdGEoJ21hdGllcmUnKSxcbiAgICAgICdleHBvcnRUeXBlRG9jdW1lbnQnOiAkKCdpbnB1dFt0eXBlPXJhZGlvXVtuYW1lPWV4cG9ydFR5cGVEb2N1bWVudF06Y2hlY2tlZCcpLnZhbCgpLFxuICAgICAgJ2V4cG9ydENoYW1wcyc6IHNlbGVjdGVkQ2hhbXBzLFxuICAgICAgJ2V4cG9ydEZvcm1hdCc6ICQoJ2lucHV0W3R5cGU9cmFkaW9dW25hbWU9ZXhwb3J0Rm9ybWF0XTpjaGVja2VkJykudmFsKCksXG4gICAgICAnZXhwb3J0RmlsdHJlJzogJCgnaW5wdXRbdHlwZT1yYWRpb11bbmFtZT1leHBvcnRGaWx0cmVdOmNoZWNrZWQnKS52YWwoKVxuICAgIH0sXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGZpY2hpZXIpIHtcblxuICAgIH1cbiAgfSlcbn0pXG5cblxuLy9yZWxvYWQgc2kgY2hhbmdlbWVudCBkJ2FubsOpZVxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcjY2hhbmdlX2FubmVlX3RlbXBfaHJzJywgZnVuY3Rpb24gKGUpIHtcblxuICB3aW5kb3cubG9jYXRpb24gPSBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9ocnNfaW5kZXgnLCB7YW5uZWU6ICQodGhpcykudmFsKCl9KVxufSlcblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcjY2hhbmdlX2FubmVlX3RlbXBfcHJldmlzaW9ubmVsJywgZnVuY3Rpb24gKGUpIHtcbiAgd2luZG93LmxvY2F0aW9uID0gUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fcHJldmlzaW9ubmVsX2luZGV4Jywge2FubmVlOiAkKHRoaXMpLnZhbCgpfSlcbn0pXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvdXRpbC5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDE2LzEwLzIwMjAgMTQ6NTRcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXG5cbmxldCAkc3RvcENhdGNoRW50ZXIgPSBmYWxzZVxuXG5mdW5jdGlvbiByZWFkVXJsTWVudSAoJHVybCkge1xuICBjb25zdCAkZWx0ID0gJHVybC5zcGxpdCgnLycpXG4gIGxldCAkZmlyc3RFbHQgPSAyXG4gIGlmICgkZWx0WzFdID09PSAnaW5kZXgucGhwJykge1xuICAgIGlmICgkZWx0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICRmaXJzdEVsdCA9IDNcbiAgICB9XG4gIH1cblxuICBpZiAoJGVsdFskZmlyc3RFbHRdID09PSAnc3VwZXItYWRtaW5pc3RyYXRpb24nKSB7XG4gICAgJGZpcnN0RWx0ID0gJGZpcnN0RWx0ICsgMVxuICB9XG5cbiAgaWYgKCRlbHRbJGVsdC5sZW5ndGggLSAxXSA9PT0gJycpIHtcbiAgICAkZWx0LnBvcCgpXG4gIH1cblxuICAkKCcubWVudS1pdGVtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICQoJyNtZW51LScgKyAkZWx0WyRmaXJzdEVsdF0pLmFkZENsYXNzKCdhY3RpdmUnKVxufVxuXG4vL2NvbG9yaXNlIGxlIGJvbiBtZW51XG5yZWFkVXJsTWVudSgkKGxvY2F0aW9uKS5hdHRyKCdwYXRobmFtZScpKVxuXG5Td2FsLm1peGluKHtcbiAgY3VzdG9tQ2xhc3M6IHtcbiAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgfSxcbiAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG59KVxuLy9wb3AgdXAgZGUgY29uZmlybWF0aW9uIGRlIHN1cHByZXNzaW9uXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnN1cHByaW1lcicsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBjb25zdCB1cmwgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKVxuICBjb25zdCBjc3JmID0gJCh0aGlzKS5kYXRhKCdjc3JmJylcbiAgU3dhbC5maXJlKHtcbiAgICB0aXRsZTogJ0NvbmZpcm1lciBsYSBzdXBwcmVzc2lvbiA/JyxcbiAgICB0ZXh0OiAnTFxcJ29ww6lyYXRpb24gbmUgcG91cnJhIHBhcyDDqnRyZSBhbm51bMOpZS4nLFxuICAgIGljb246ICd3YXJuaW5nJyxcbiAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyMzMDg1ZDYnLFxuICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiAnI2QzMycsXG4gICAgY29uZmlybUJ1dHRvblRleHQ6ICdPdWksIGplIGNvbmZpcm1lJyxcbiAgICBjYW5jZWxCdXR0b25UZXh0OiAnTm9uLCBBbm51bGVyJyxcbiAgICBjdXN0b21DbGFzczoge1xuICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICB9LFxuICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICBpZiAocmVzdWx0LnZhbHVlKSB7XG4gICAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgdHlwZTogJ0RFTEVURScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBfdG9rZW46IGNzcmZcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgaWYgKGlkLmhhc093blByb3BlcnR5KCdyZWRpcmVjdCcpICYmIGlkLmhhc093blByb3BlcnR5KCd1cmwnKSkge1xuICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGlkLnVybFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL3Qucm93KFwiI2xpZ25lX1wiK2lkKS5yZW1vdmUoKS5kcmF3KCk7ID08IGRhdGF0dGFibGUgdG9kbzogcmVtb3ZlIGxpZ25lIHNpIGRhdGF0YWJsZSA/PyBwcm9ibMOobWUgZGFucyBhZG0+cGVyc29ubmVsXG4gICAgICAgICAgICAkKCcjbGlnbmVfJyArIGlkKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpXG4gICAgICAgICAgICBhZGRDYWxsb3V0KCdTdXBwcmVzc2lvbiBlZmZlY3R1w6llIGF2ZWMgc3VjY8OocycsICdzdWNjZXNzJylcbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgIHRpdGxlOiAnU3VwcHJpbcOpIScsXG4gICAgICAgICAgICAgIHRleHQ6ICdMXFwnZW5yZWdpc3RyZW1lbnQgYSDDqXTDqSBzdXBwcmltw6kuJyxcbiAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIGFqYXhPcHRpb25zLCB0aHJvd25FcnJvcikge1xuICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICB0aXRsZTogJ0VycmV1ciBsb3JzIGRlIGxhIHN1cHByZXNzaW9uIScsXG4gICAgICAgICAgICB0ZXh0OiAnTWVyY2kgZGUgcmVub3V2ZWxlciBsXFwnb3DDqXJhdGlvbicsXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgICAgfSlcbiAgICAgICAgICBhZGRDYWxsb3V0KCdFcnJldXIgbG9ycyBkZSBsYSB0ZW50YXRpdmUgZGUgc3VwcHJlc3Npb24nLCAnZGFuZ2VyJylcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgIH0gZWxzZSBpZiAoXG4gICAgICAvLyBSZWFkIG1vcmUgYWJvdXQgaGFuZGxpbmcgZGlzbWlzc2Fsc1xuICAgICAgcmVzdWx0LmRpc21pc3MgPT09ICdjYW5jZWwnXG4gICAgKSB7XG4gICAgICBTd2FsLmZpcmUoe1xuICAgICAgICB0aXRsZTogJ0NhbmNlbGxlZCcsXG4gICAgICAgIHRleHQ6ICdPSyEgVG91dCBlc3QgY29tbWUgYXZhbnQgIScsXG4gICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICB9LFxuICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuICB9KVxufSlcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENhbGxvdXQgKG1lc3NhZ2UsIGxhYmVsKSB7XG4gIGNvbnNvbGUubG9nKCdjYWxsb3V0JylcbiAgdmFyIHRyYW5zbGF0ZSA9IG5ldyBBcnJheSgpXG4gIHRyYW5zbGF0ZVsnc3VjY2VzcyddID0gJ1N1Y2PDqHMnXG4gIHRyYW5zbGF0ZVsnZGFuZ2VyJ10gPSAnRXJyZXVyJ1xuICB0cmFuc2xhdGVbJ3dhcm5pbmcnXSA9ICdBdHRlbnRpb24nXG5cbiAgY29uc3QgaHRtbCA9ICc8ZGl2IGNsYXNzPVwiY2FsbG91dCBjYWxsb3V0LScgKyBsYWJlbCArICdcIiByb2xlPVwiYWxlcnRcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiY2FsbG91dFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4mdGltZXM7PC9zcGFuPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxoNT4nICsgdHJhbnNsYXRlW2xhYmVsXSArICc8L2g1PlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxwPicgKyBtZXNzYWdlICsgJzwvcD5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgIDwvZGl2PidcblxuICAkKCcjbWFpbkNvbnRlbnQnKS5wcmVwZW5kKGh0bWwpLnNsaWRlRG93bignc2xvdycpXG4gICQoJy5jYWxsb3V0JykuZGVsYXkoNTAwMCkuc2xpZGVVcCgnc2xvdycpXG59XG5cbi8vRWRpdGFibGVcbmxldCBteUVkaXRJbml0aWFsQ29udGVudCA9ICcnXG5sZXQgdHlwZSA9ICd0ZXh0J1xubGV0IEVkaXRPbkxpbmUgPSBmYWxzZVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm15ZWRpdCcsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBteUVkaXRJbml0aWFsQ29udGVudCA9ICQodGhpcylcbiAgbGV0IGh0bWwgPSAnJ1xuICBFZGl0T25MaW5lID0gdHJ1ZVxuICBpZiAodHlwZW9mICgkKHRoaXMpLmRhdGEoJ3R5cGUnKSkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdHlwZSA9ICQodGhpcykuZGF0YSgndHlwZScpXG4gIH1cblxuICBpZiAoJCh0aGlzKS5kYXRhKCd0eXBlJykgPT09ICdzZWxlY3QnKSB7XG4gICAgLy90b2RvOiBBIGZpbmFsaXNlclxuICB9IGVsc2UgaWYgKCQodGhpcykuZGF0YSgndHlwZScpID09PSAndGV4dGFyZWEnKSB7XG4gICAgaHRtbCA9IGdlbmVyZVRleHRBcmVhKCQodGhpcykpXG4gIH0gZWxzZSB7XG4gICAgaHRtbCA9IGdlbmVyZUlucHV0KCQodGhpcykpXG4gIH1cbiAgJCh0aGlzKS5yZXBsYWNlV2l0aChodG1sKVxuICAkKCcjbXllZGl0LWlucHV0JykuZm9jdXMoKVxufSlcblxuJChkb2N1bWVudCkub24oJ2tleXVwJywgJyNteWVkaXQtaW5wdXQnLCBmdW5jdGlvbiAoZSkge1xuICBpZiAoZS5rZXlDb2RlID09PSAxMyAmJiAkc3RvcENhdGNoRW50ZXIgPT09IGZhbHNlKSB7XG4gICAgdXBkYXRlRGF0YSgpXG4gIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI215ZWRpdC12YWxpZGUnLCBmdW5jdGlvbiAoZSkge1xuICAkc3RvcENhdGNoRW50ZXIgPSBmYWxzZVxuICBlLnByZXZlbnREZWZhdWx0KClcbiAgdXBkYXRlRGF0YSgpXG59KVxuXG4kKGRvY3VtZW50KS5vbigna2V5cHJlc3MnLCBmdW5jdGlvbiAoZSkge1xuICBpZiAoRWRpdE9uTGluZSA9PT0gdHJ1ZSAmJiAkc3RvcENhdGNoRW50ZXIgPT09IGZhbHNlICYmIGUud2hpY2ggPT09IDEzKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdXBkYXRlRGF0YSgpXG4gIH1cblxuICBpZiAoRWRpdE9uTGluZSA9PT0gdHJ1ZSAmJiAkc3RvcENhdGNoRW50ZXIgPT09IGZhbHNlICYmIGUud2hpY2ggPT09IDI3KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG4gIH1cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbXllZGl0LWFubnVsZScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbn0pXG5cbmZ1bmN0aW9uIHVwZGF0ZURhdGEgKCkge1xuICBsZXQgdmFsID0gJCgnI215ZWRpdC1pbnB1dCcpLnZhbCgpXG4gICQuYWpheCh7XG4gICAgdXJsOiBteUVkaXRJbml0aWFsQ29udGVudC5hdHRyKCdocmVmJyksXG4gICAgZGF0YToge1xuICAgICAgZmllbGQ6IG15RWRpdEluaXRpYWxDb250ZW50LmRhdGEoJ2ZpZWxkJyksXG4gICAgICB2YWx1ZTogdmFsLFxuICAgICAgdHlwZTogdHlwZVxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgbXlFZGl0SW5pdGlhbENvbnRlbnQuaHRtbCh2YWwpXG4gICAgICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbiAgICAgIEVkaXRPbkxpbmUgPSBmYWxzZVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gZ2VuZXJlVGV4dEFyZWEgKCRvYmopIHtcbiAgJHN0b3BDYXRjaEVudGVyID0gdHJ1ZVxuICByZXR1cm4gJzxkaXYgaWQ9XCJteUVkaXQtem9uZVwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHJvd3M9XCI1XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIm15ZWRpdC1pbnB1dFwiPicgKyAkb2JqLmh0bWwoKS50cmltKCkgKyAnPC90ZXh0YXJlYT5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XFxuJyArXG4gICAgJyA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzLW91dGxpbmVcIiBpZD1cIm15ZWRpdC12YWxpZGVcIj48aSBjbGFzcz1cImZhcyBmYS1jaGVja1wiPjwvaT48L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyLW91dGxpbmVcIiBpZD1cIm15ZWRpdC1hbm51bGVcIj48aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT48L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nXG59XG5cbmZ1bmN0aW9uIGdlbmVyZUlucHV0ICgkb2JqKSB7XG5cbiAgcmV0dXJuICc8ZGl2IGlkPVwibXlFZGl0LXpvbmVcIiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwibXllZGl0LWlucHV0XCIgdmFsdWU9XCInICsgJG9iai5odG1sKCkudHJpbSgpICsgJ1wiID5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XFxuJyArXG4gICAgJyA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzLW91dGxpbmVcIiBpZD1cIm15ZWRpdC12YWxpZGVcIj48aSBjbGFzcz1cImZhcyBmYS1jaGVja1wiPjwvaT48L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyLW91dGxpbmVcIiBpZD1cIm15ZWRpdC1hbm51bGVcIj48aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT48L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nXG59XG5cbmpRdWVyeS5mbi5kYXRhQXR0ciA9IGZ1bmN0aW9uIChuYW1lLCBkZWYpIHtcbiAgcmV0dXJuICQodGhpcylbMF0uZ2V0QXR0cmlidXRlKCdkYXRhLScgKyBuYW1lKSB8fCBkZWZcbn1cblxualF1ZXJ5LmZuLmhhc0RhdGFBdHRyID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuICQodGhpcylbMF0uaGFzQXR0cmlidXRlKCdkYXRhLScgKyBuYW1lKVxufVxuXG5mdW5jdGlvbiBkYXRhVG9PcHRpb24gKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUucmVwbGFjZSgvLShbYS16XSkvZywgZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4geFsxXS50b1VwcGVyQ2FzZSgpXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhT3B0aW9ucyAoZWwsIGNhc3RMaXN0KSB7XG4gIHZhciBvcHRpb25zID0ge31cbiAgJC5lYWNoKCQoZWwpLmRhdGEoKSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcblxuICAgIGtleSA9IGRhdGFUb09wdGlvbihrZXkpXG5cbiAgICAvLyBFc2NhcGUgZGF0YS1wcm92aWRlXG4gICAgaWYgKGtleSA9PSAncHJvdmlkZScpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChjYXN0TGlzdCAhPSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciB0eXBlID0gY2FzdExpc3Rba2V5XVxuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2Jvb2wnOlxuICAgICAgICAgIHZhbHVlID0gQm9vbGVhbih2YWx1ZSlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ251bSc6XG4gICAgICAgICAgdmFsdWUgPSBOdW1iZXIodmFsdWUpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnLCcpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBkZWZhdWx0OlxuXG4gICAgICB9XG4gICAgfVxuXG4gICAgb3B0aW9uc1trZXldID0gdmFsdWVcbiAgfSlcblxuICByZXR1cm4gb3B0aW9uc1xufVxuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciB0cmltID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy10cmltJykudHJpbTtcbnZhciB3aGl0ZXNwYWNlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93aGl0ZXNwYWNlcycpO1xuXG52YXIgJHBhcnNlRmxvYXQgPSBnbG9iYWwucGFyc2VGbG9hdDtcbnZhciBGT1JDRUQgPSAxIC8gJHBhcnNlRmxvYXQod2hpdGVzcGFjZXMgKyAnLTAnKSAhPT0gLUluZmluaXR5O1xuXG4vLyBgcGFyc2VGbG9hdGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1wYXJzZWZsb2F0LXN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBGT1JDRUQgPyBmdW5jdGlvbiBwYXJzZUZsb2F0KHN0cmluZykge1xuICB2YXIgdHJpbW1lZFN0cmluZyA9IHRyaW0oU3RyaW5nKHN0cmluZykpO1xuICB2YXIgcmVzdWx0ID0gJHBhcnNlRmxvYXQodHJpbW1lZFN0cmluZyk7XG4gIHJldHVybiByZXN1bHQgPT09IDAgJiYgdHJpbW1lZFN0cmluZy5jaGFyQXQoMCkgPT0gJy0nID8gLTAgOiByZXN1bHQ7XG59IDogJHBhcnNlRmxvYXQ7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHRyaW0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0nKS50cmltO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciAkcGFyc2VJbnQgPSBnbG9iYWwucGFyc2VJbnQ7XG52YXIgaGV4ID0gL15bKy1dPzBbWHhdLztcbnZhciBGT1JDRUQgPSAkcGFyc2VJbnQod2hpdGVzcGFjZXMgKyAnMDgnKSAhPT0gOCB8fCAkcGFyc2VJbnQod2hpdGVzcGFjZXMgKyAnMHgxNicpICE9PSAyMjtcblxuLy8gYHBhcnNlSW50YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXBhcnNlaW50LXN0cmluZy1yYWRpeFxubW9kdWxlLmV4cG9ydHMgPSBGT1JDRUQgPyBmdW5jdGlvbiBwYXJzZUludChzdHJpbmcsIHJhZGl4KSB7XG4gIHZhciBTID0gdHJpbShTdHJpbmcoc3RyaW5nKSk7XG4gIHJldHVybiAkcGFyc2VJbnQoUywgKHJhZGl4ID4+PiAwKSB8fCAoaGV4LnRlc3QoUykgPyAxNiA6IDEwKSk7XG59IDogJHBhcnNlSW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyJyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUucmVwZWF0YCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUucmVwZWF0XG5tb2R1bGUuZXhwb3J0cyA9ICcnLnJlcGVhdCB8fCBmdW5jdGlvbiByZXBlYXQoY291bnQpIHtcbiAgdmFyIHN0ciA9IFN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpKTtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuICB2YXIgbiA9IHRvSW50ZWdlcihjb3VudCk7XG4gIGlmIChuIDwgMCB8fCBuID09IEluZmluaXR5KSB0aHJvdyBSYW5nZUVycm9yKCdXcm9uZyBudW1iZXIgb2YgcmVwZXRpdGlvbnMnKTtcbiAgZm9yICg7biA+IDA7IChuID4+Pj0gMSkgJiYgKHN0ciArPSBzdHIpKSBpZiAobiAmIDEpIHJlc3VsdCArPSBzdHI7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxuLy8gYHRoaXNOdW1iZXJWYWx1ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10aGlzbnVtYmVydmFsdWVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ251bWJlcicgJiYgY2xhc3NvZih2YWx1ZSkgIT0gJ051bWJlcicpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ0luY29ycmVjdCBpbnZvY2F0aW9uJyk7XG4gIH1cbiAgcmV0dXJuICt2YWx1ZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlcicpO1xudmFyIHRoaXNOdW1iZXJWYWx1ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90aGlzLW51bWJlci12YWx1ZScpO1xudmFyIHJlcGVhdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctcmVwZWF0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxudmFyIG5hdGl2ZVRvRml4ZWQgPSAxLjAudG9GaXhlZDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5cbnZhciBwb3cgPSBmdW5jdGlvbiAoeCwgbiwgYWNjKSB7XG4gIHJldHVybiBuID09PSAwID8gYWNjIDogbiAlIDIgPT09IDEgPyBwb3coeCwgbiAtIDEsIGFjYyAqIHgpIDogcG93KHggKiB4LCBuIC8gMiwgYWNjKTtcbn07XG5cbnZhciBsb2cgPSBmdW5jdGlvbiAoeCkge1xuICB2YXIgbiA9IDA7XG4gIHZhciB4MiA9IHg7XG4gIHdoaWxlICh4MiA+PSA0MDk2KSB7XG4gICAgbiArPSAxMjtcbiAgICB4MiAvPSA0MDk2O1xuICB9XG4gIHdoaWxlICh4MiA+PSAyKSB7XG4gICAgbiArPSAxO1xuICAgIHgyIC89IDI7XG4gIH0gcmV0dXJuIG47XG59O1xuXG52YXIgRk9SQ0VEID0gbmF0aXZlVG9GaXhlZCAmJiAoXG4gIDAuMDAwMDgudG9GaXhlZCgzKSAhPT0gJzAuMDAwJyB8fFxuICAwLjkudG9GaXhlZCgwKSAhPT0gJzEnIHx8XG4gIDEuMjU1LnRvRml4ZWQoMikgIT09ICcxLjI1JyB8fFxuICAxMDAwMDAwMDAwMDAwMDAwMTI4LjAudG9GaXhlZCgwKSAhPT0gJzEwMDAwMDAwMDAwMDAwMDAxMjgnXG4pIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIFY4IH4gQW5kcm9pZCA0LjMtXG4gIG5hdGl2ZVRvRml4ZWQuY2FsbCh7fSk7XG59KTtcblxuLy8gYE51bWJlci5wcm90b3R5cGUudG9GaXhlZGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1udW1iZXIucHJvdG90eXBlLnRvZml4ZWRcbiQoeyB0YXJnZXQ6ICdOdW1iZXInLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LXN0YXRlbWVudHNcbiAgdG9GaXhlZDogZnVuY3Rpb24gdG9GaXhlZChmcmFjdGlvbkRpZ2l0cykge1xuICAgIHZhciBudW1iZXIgPSB0aGlzTnVtYmVyVmFsdWUodGhpcyk7XG4gICAgdmFyIGZyYWN0RGlnaXRzID0gdG9JbnRlZ2VyKGZyYWN0aW9uRGlnaXRzKTtcbiAgICB2YXIgZGF0YSA9IFswLCAwLCAwLCAwLCAwLCAwXTtcbiAgICB2YXIgc2lnbiA9ICcnO1xuICAgIHZhciByZXN1bHQgPSAnMCc7XG4gICAgdmFyIGUsIHosIGosIGs7XG5cbiAgICB2YXIgbXVsdGlwbHkgPSBmdW5jdGlvbiAobiwgYykge1xuICAgICAgdmFyIGluZGV4ID0gLTE7XG4gICAgICB2YXIgYzIgPSBjO1xuICAgICAgd2hpbGUgKCsraW5kZXggPCA2KSB7XG4gICAgICAgIGMyICs9IG4gKiBkYXRhW2luZGV4XTtcbiAgICAgICAgZGF0YVtpbmRleF0gPSBjMiAlIDFlNztcbiAgICAgICAgYzIgPSBmbG9vcihjMiAvIDFlNyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBkaXZpZGUgPSBmdW5jdGlvbiAobikge1xuICAgICAgdmFyIGluZGV4ID0gNjtcbiAgICAgIHZhciBjID0gMDtcbiAgICAgIHdoaWxlICgtLWluZGV4ID49IDApIHtcbiAgICAgICAgYyArPSBkYXRhW2luZGV4XTtcbiAgICAgICAgZGF0YVtpbmRleF0gPSBmbG9vcihjIC8gbik7XG4gICAgICAgIGMgPSAoYyAlIG4pICogMWU3O1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgZGF0YVRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGluZGV4ID0gNjtcbiAgICAgIHZhciBzID0gJyc7XG4gICAgICB3aGlsZSAoLS1pbmRleCA+PSAwKSB7XG4gICAgICAgIGlmIChzICE9PSAnJyB8fCBpbmRleCA9PT0gMCB8fCBkYXRhW2luZGV4XSAhPT0gMCkge1xuICAgICAgICAgIHZhciB0ID0gU3RyaW5nKGRhdGFbaW5kZXhdKTtcbiAgICAgICAgICBzID0gcyA9PT0gJycgPyB0IDogcyArIHJlcGVhdC5jYWxsKCcwJywgNyAtIHQubGVuZ3RoKSArIHQ7XG4gICAgICAgIH1cbiAgICAgIH0gcmV0dXJuIHM7XG4gICAgfTtcblxuICAgIGlmIChmcmFjdERpZ2l0cyA8IDAgfHwgZnJhY3REaWdpdHMgPiAyMCkgdGhyb3cgUmFuZ2VFcnJvcignSW5jb3JyZWN0IGZyYWN0aW9uIGRpZ2l0cycpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAobnVtYmVyICE9IG51bWJlcikgcmV0dXJuICdOYU4nO1xuICAgIGlmIChudW1iZXIgPD0gLTFlMjEgfHwgbnVtYmVyID49IDFlMjEpIHJldHVybiBTdHJpbmcobnVtYmVyKTtcbiAgICBpZiAobnVtYmVyIDwgMCkge1xuICAgICAgc2lnbiA9ICctJztcbiAgICAgIG51bWJlciA9IC1udW1iZXI7XG4gICAgfVxuICAgIGlmIChudW1iZXIgPiAxZS0yMSkge1xuICAgICAgZSA9IGxvZyhudW1iZXIgKiBwb3coMiwgNjksIDEpKSAtIDY5O1xuICAgICAgeiA9IGUgPCAwID8gbnVtYmVyICogcG93KDIsIC1lLCAxKSA6IG51bWJlciAvIHBvdygyLCBlLCAxKTtcbiAgICAgIHogKj0gMHgxMDAwMDAwMDAwMDAwMDtcbiAgICAgIGUgPSA1MiAtIGU7XG4gICAgICBpZiAoZSA+IDApIHtcbiAgICAgICAgbXVsdGlwbHkoMCwgeik7XG4gICAgICAgIGogPSBmcmFjdERpZ2l0cztcbiAgICAgICAgd2hpbGUgKGogPj0gNykge1xuICAgICAgICAgIG11bHRpcGx5KDFlNywgMCk7XG4gICAgICAgICAgaiAtPSA3O1xuICAgICAgICB9XG4gICAgICAgIG11bHRpcGx5KHBvdygxMCwgaiwgMSksIDApO1xuICAgICAgICBqID0gZSAtIDE7XG4gICAgICAgIHdoaWxlIChqID49IDIzKSB7XG4gICAgICAgICAgZGl2aWRlKDEgPDwgMjMpO1xuICAgICAgICAgIGogLT0gMjM7XG4gICAgICAgIH1cbiAgICAgICAgZGl2aWRlKDEgPDwgaik7XG4gICAgICAgIG11bHRpcGx5KDEsIDEpO1xuICAgICAgICBkaXZpZGUoMik7XG4gICAgICAgIHJlc3VsdCA9IGRhdGFUb1N0cmluZygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbXVsdGlwbHkoMCwgeik7XG4gICAgICAgIG11bHRpcGx5KDEgPDwgLWUsIDApO1xuICAgICAgICByZXN1bHQgPSBkYXRhVG9TdHJpbmcoKSArIHJlcGVhdC5jYWxsKCcwJywgZnJhY3REaWdpdHMpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZnJhY3REaWdpdHMgPiAwKSB7XG4gICAgICBrID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgIHJlc3VsdCA9IHNpZ24gKyAoayA8PSBmcmFjdERpZ2l0c1xuICAgICAgICA/ICcwLicgKyByZXBlYXQuY2FsbCgnMCcsIGZyYWN0RGlnaXRzIC0gaykgKyByZXN1bHRcbiAgICAgICAgOiByZXN1bHQuc2xpY2UoMCwgayAtIGZyYWN0RGlnaXRzKSArICcuJyArIHJlc3VsdC5zbGljZShrIC0gZnJhY3REaWdpdHMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gc2lnbiArIHJlc3VsdDtcbiAgICB9IHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgcGFyc2VGbG9hdEltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL251bWJlci1wYXJzZS1mbG9hdCcpO1xuXG4vLyBgcGFyc2VGbG9hdGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1wYXJzZWZsb2F0LXN0cmluZ1xuJCh7IGdsb2JhbDogdHJ1ZSwgZm9yY2VkOiBwYXJzZUZsb2F0ICE9IHBhcnNlRmxvYXRJbXBsZW1lbnRhdGlvbiB9LCB7XG4gIHBhcnNlRmxvYXQ6IHBhcnNlRmxvYXRJbXBsZW1lbnRhdGlvblxufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBwYXJzZUludEltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL251bWJlci1wYXJzZS1pbnQnKTtcblxuLy8gYHBhcnNlSW50YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXBhcnNlaW50LXN0cmluZy1yYWRpeFxuJCh7IGdsb2JhbDogdHJ1ZSwgZm9yY2VkOiBwYXJzZUludCAhPSBwYXJzZUludEltcGxlbWVudGF0aW9uIH0sIHtcbiAgcGFyc2VJbnQ6IHBhcnNlSW50SW1wbGVtZW50YXRpb25cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==