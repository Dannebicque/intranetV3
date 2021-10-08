(self["webpackChunkintranetv3"] = self["webpackChunkintranetv3"] || []).push([["adm.previsionnel"],{

/***/ "./assets/js/pages/adm.previsionnel.js":
/*!*********************************************!*\
  !*** ./assets/js/pages/adm.previsionnel.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util */ "./assets/js/util.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");





// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.previsionnel.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 08/09/2021 12:08

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
      (0,_util__WEBPACK_IMPORTED_MODULE_5__.addCallout)('Modification de prévisionnel enregistrée !', 'success');
    },
    error: function error() {
      (0,_util__WEBPACK_IMPORTED_MODULE_5__.addCallout)('Erreur lors de la modification du prévisionnel !', 'danger');
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
  var s = $(this).val().split('_');
  e.preventDefault();
  e.stopPropagation();
  $('#blocPrevisionnel').empty().load(Routing.generate('administration_previsionnel_matiere', {
    matiere: s[1],
    type: s[0],
    annee: $(this).data('annee')
  }));
});
$(document).on('click', '#reloadPreviMatiere', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $('#blocPrevisionnel').empty().load(Routing.generate('administration_previsionnel_matiere', {
    matiere: $(this).data('matiere'),
    type: $(this).data('type'),
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
      $('#ligneAdd').before(html); //todo: a remplacer
      //$('#intervenant_' + nbLignePrevisionnel).selectpicker()
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

/***/ }),

/***/ "./node_modules/core-js/internals/number-parse-float.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/number-parse-float.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var $parseFloat = global.parseFloat;
var FORCED = 1 / $parseFloat(whitespaces + '-0') !== -Infinity;

// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var $parseInt = global.parseInt;
var hex = /^[+-]?0[Xx]/;
var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22;

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(String(string));
  return $parseInt(S, (radix >>> 0) || (hex.test(S) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "./node_modules/core-js/internals/string-repeat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/string-repeat.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat
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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue
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
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

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
// https://tc39.es/ecma262/#sec-number.prototype.tofixed
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
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var parseFloatImplementation = __webpack_require__(/*! ../internals/number-parse-float */ "./node_modules/core-js/internals/number-parse-float.js");

// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
$({ global: true, forced: parseFloat != parseFloatImplementation }, {
  parseFloat: parseFloatImplementation
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-int.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-int.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var parseIntImplementation = __webpack_require__(/*! ../internals/number-parse-int */ "./node_modules/core-js/internals/number-parse-int.js");

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt != parseIntImplementation }, {
  parseInt: parseIntImplementation
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_arra-a68b23","vendors-node_modules_core-js_modules_es_string_split_js","vendors-node_modules_core-js_internals_array-method-is-strict_js-node_modules_core-js_interna-81f81c","vendors-node_modules_core-js_internals_dom-iterables_js-node_modules_core-js_modules_es_symbol_js","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_dat-47334b","assets_js_util_js"], () => (__webpack_exec__("./assets/js/pages/adm.previsionnel.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vYXNzZXRzL2pzL3BhZ2VzL2FkbS5wcmV2aXNpb25uZWwuanMiLCJ3ZWJwYWNrOi8vaW50cmFuZXR2My8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9udW1iZXItcGFyc2UtZmxvYXQuanMiLCJ3ZWJwYWNrOi8vaW50cmFuZXR2My8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9udW1iZXItcGFyc2UtaW50LmpzIiwid2VicGFjazovL2ludHJhbmV0djMvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLXJlcGVhdC5qcyIsIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RoaXMtbnVtYmVyLXZhbHVlLmpzIiwid2VicGFjazovL2ludHJhbmV0djMvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm51bWJlci50by1maXhlZC5qcyIsIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5wYXJzZS1mbG9hdC5qcyIsIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5wYXJzZS1pbnQuanMiXSwibmFtZXMiOlsibmJMaWduZVByZXZpc2lvbm5lbCIsIiQiLCJkb2N1bWVudCIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiYWpheCIsInVybCIsIlJvdXRpbmciLCJnZW5lcmF0ZSIsImlkIiwiZGF0YSIsIm1ldGhvZCIsInZhbHVlIiwidmFsIiwiZmllbGQiLCJzdWNjZXNzIiwiYWRkQ2FsbG91dCIsImVycm9yIiwiZW1wdHkiLCJsb2FkIiwic2VtZXN0cmUiLCJhbm5lZSIsInMiLCJzcGxpdCIsIm1hdGllcmUiLCJ0eXBlIiwicGVyc29ubmVsIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImF0dHIiLCJodG1sIiwialF1ZXJ5IiwiZWFjaCIsImluZGV4IiwicGVycyIsImRpc3BsYXkiLCJiZWZvcmUiLCJsaWduZSIsIm5iU2VhbmNlIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJ1cGRhdGVTeW50aGVzZVByZXZpc2lvbm5lbCIsInRvdGFsQ20iLCJ0b3RhbFRkIiwidG90YWxUcCIsInRvdGFsRXFUZCIsInRvdGFsRXR1IiwidG90YWxIZXVyZXNDbSIsInRvdGFsSGV1cmVzVGQiLCJ0b3RhbEhldXJlc1RwIiwiaSIsIiRjbSIsIiR0ZCIsIiR0cCIsInBhcnNlSW50IiwiZGlmZkNtIiwiZGlmZlRkIiwiZGlmZlRwIiwidm9sdW1lTWF0aWVyZSIsImNtRm9ybWF0aW9uIiwidGRGb3JtYXRpb24iLCJ0cEZvcm1hdGlvbiIsImNtUHBuIiwidGRQcG4iLCJ0cFBwbiIsInNob3ciLCJzZWxlY3RlZENoYW1wcyIsInB1c2giLCJmaWNoaWVyIiwid2luZG93IiwibG9jYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxtQkFBbUIsR0FBRyxDQUExQjtBQUVBQyxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxFQUFaLENBQWUsUUFBZixFQUF5Qix5QkFBekIsRUFBb0QsVUFBVUMsQ0FBVixFQUFhO0FBQy9EQSxHQUFDLENBQUNDLGNBQUY7QUFDQUQsR0FBQyxDQUFDRSxlQUFGO0FBQ0FMLEdBQUMsQ0FBQ00sSUFBRixDQUFPO0FBQ0xDLE9BQUcsRUFBRUMsT0FBTyxDQUFDQyxRQUFSLENBQWlCLHVDQUFqQixFQUEwRDtBQUFDQyxRQUFFLEVBQUVWLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVcsSUFBUixDQUFhLE9BQWI7QUFBTCxLQUExRCxDQURBO0FBRUxDLFVBQU0sRUFBRSxNQUZIO0FBR0xELFFBQUksRUFBRTtBQUNKRSxXQUFLLEVBQUViLENBQUMsQ0FBQyxJQUFELENBQUQs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Q0FBQywyRkFBK0I7O0FBRXBFO0FBQ0E7QUFDQSxHQUFHLDJEQUEyRDtBQUM5RDtBQUNBLENBQUMiLCJmaWxlIjoiYWRtLnByZXZpc2lvbm5lbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMS4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9wYWdlcy9hZG0ucHJldmlzaW9ubmVsLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMDgvMDkvMjAyMSAxMjowOFxuaW1wb3J0IHthZGRDYWxsb3V0fSBmcm9tICcuLi91dGlsJ1xuXG5sZXQgbmJMaWduZVByZXZpc2lvbm5lbCA9IDFcblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcuY2hhbmdlSW50ZXJ2ZW5hbnRQcmV2aScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9wcmV2aXNpb25uZWxfYWpheF9lZGl0Jywge2lkOiAkKHRoaXMpLmRhdGEoJ3ByZXZpJyl9KSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBkYXRhOiB7XG4gICAgICB2YWx1ZTogJCh0aGlzKS52YWwoKSxcbiAgICAgIGZpZWxkOiAncGVyc29ubmVsJ1xuICAgIH0sXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgYWRkQ2FsbG91dCgnTW9kaWZpY2F0aW9uIGRlIHByw6l2aXNpb25uZWwgZW5yZWdpc3Ryw6llICEnLCAnc3VjY2VzcycpXG4gICAgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24gKCkge1xuICAgICAgYWRkQ2FsbG91dCgnRXJyZXVyIGxvcnMgZGUgbGEgbW9kaWZpY2F0aW9uIGR1IHByw6l2aXNpb25uZWwgIScsICdkYW5nZXInKVxuICAgIH1cbiAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnI3ByZXZpU2VtZXN0cmUnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAkKCcjYmxvY1ByZXZpc2lvbm5lbCcpLmVtcHR5KCkubG9hZChSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9wcmV2aXNpb25uZWxfc2VtZXN0cmUnLCB7XG4gICAgc2VtZXN0cmU6ICQodGhpcykudmFsKCksXG4gICAgYW5uZWU6ICQodGhpcykuZGF0YSgnYW5uZWUnKVxuICB9KSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjcmVsb2FkUHJldmlTZW1lc3RyZScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICQoJyNibG9jUHJldmlzaW9ubmVsJykuZW1wdHkoKS5sb2FkKFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX3ByZXZpc2lvbm5lbF9zZW1lc3RyZScsIHtcbiAgICBzZW1lc3RyZTogJCh0aGlzKS5kYXRhKCdzZW1lc3RyZScpLFxuICAgIGFubmVlOiAkKHRoaXMpLmRhdGEoJ2FubmVlJylcbiAgfSkpXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJyNwcmV2aU1hdGllcmUnLCBmdW5jdGlvbiAoZSkge1xuICBjb25zdCBzID0gJCh0aGlzKS52YWwoKS5zcGxpdCgnXycpXG4gIGUucHJldmVudERlZmF1bHQoKVxuICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICQoJyNibG9jUHJldmlzaW9ubmVsJykuZW1wdHkoKS5sb2FkKFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX3ByZXZpc2lvbm5lbF9tYXRpZXJlJywge1xuICAgIG1hdGllcmU6IHNbMV0sXG4gICAgdHlwZTogc1swXSxcbiAgICBhbm5lZTogJCh0aGlzKS5kYXRhKCdhbm5lZScpXG4gIH0pKVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNyZWxvYWRQcmV2aU1hdGllcmUnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAkKCcjYmxvY1ByZXZpc2lvbm5lbCcpLmVtcHR5KCkubG9hZChSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9wcmV2aXNpb25uZWxfbWF0aWVyZScsIHtcbiAgICBtYXRpZXJlOiAkKHRoaXMpLmRhdGEoJ21hdGllcmUnKSxcbiAgICB0eXBlOiAkKHRoaXMpLmRhdGEoJ3R5cGUnKSxcbiAgICBhbm5lZTogJCh0aGlzKS5kYXRhKCdhbm5lZScpXG4gIH0pKVxufSlcblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcjcHJldmlQZXJzb25uZWwnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAkKCcjYmxvY1ByZXZpc2lvbm5lbCcpLmVtcHR5KCkubG9hZChSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9wcmV2aXNpb25uZWxfcGVyc29ubmVsJywge1xuICAgIHBlcnNvbm5lbDogJCh0aGlzKS52YWwoKSxcbiAgICBhbm5lZTogJCh0aGlzKS5kYXRhKCdhbm5lZScpXG4gIH0pKVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNyZWxvYWRQcmV2aVBlcnNvbm5lbCcsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICQoJyNibG9jUHJldmlzaW9ubmVsJykuZW1wdHkoKS5sb2FkKFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX3ByZXZpc2lvbm5lbF9wZXJzb25uZWwnLCB7XG4gICAgcGVyc29ubmVsOiAkKHRoaXMpLmRhdGEoJ3BlcnNvbm5lbCcpLFxuICAgIGFubmVlOiAkKHRoaXMpLmRhdGEoJ2FubmVlJylcbiAgfSkpXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnByZXZpc2lvbm5lbF9hZGRfY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgJCgnLnByZXZpc2lvbm5lbF9hZGRfY2hhbmdlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZSBzaG93JylcbiAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlIHNob3cnKVxuICAkKCcjbWFpbkNvbnRlbnQnKS5lbXB0eSgpLmxvYWQoJCh0aGlzKS5hdHRyKCdocmVmJykpXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2FkZEludGVydmVuYW50UHJldmlzaW9ubmVsJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgbmJMaWduZVByZXZpc2lvbm5lbCsrXG5cblxuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYXBpX2Vuc2VpZ25hbnRzX2RlcGFydGVtZW50JyksXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIGxldCBodG1sID0gJzx0cj5cXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgZGF0YS1saXZlLXNlYXJjaD1cInRydWVcIiBuYW1lPVwiaW50ZXJ2ZW5hbnRfJyArIG5iTGlnbmVQcmV2aXNpb25uZWwgKyAnXCIgaWQ9XCJpbnRlcnZlbmFudF8nICsgbmJMaWduZVByZXZpc2lvbm5lbCArICdcIj5cXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkNob2lzaXIgbFxcJ2ludGVydmVuYW50PC9vcHRpb24+XFxuJ1xuICAgICAgalF1ZXJ5LmVhY2goZGF0YSwgZnVuY3Rpb24gKGluZGV4LCBwZXJzKSB7XG4gICAgICAgIGh0bWwgPSBodG1sICsgJzxvcHRpb24gdmFsdWU9XCInICsgcGVycy5pZCArICdcIj4nICsgcGVycy5kaXNwbGF5ICsgJzwvb3B0aW9uPlxcbidcbiAgICAgIH0pXG4gICAgICBodG1sID0gaHRtbCArICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjbV8nICsgbmJMaWduZVByZXZpc2lvbm5lbCArICdcIiBpZD1cImNtXycgKyBuYkxpZ25lUHJldmlzaW9ubmVsICsgJ1wiIGRhdGEtbGlnbmU9XCInICsgbmJMaWduZVByZXZpc2lvbm5lbCArICdcIiBjbGFzcz1cImZvcm0tY29udHJvbCBjaGdjbVwiIHZhbHVlPVwiMFwiPjwvdGQ+XFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiZ3JfY21fJyArIG5iTGlnbmVQcmV2aXNpb25uZWwgKyAnXCIgaWQ9XCJncl9jbV8nICsgbmJMaWduZVByZXZpc2lvbm5lbCArICdcIiB2YWx1ZT1cIjBcIiBkYXRhLWxpZ25lPVwiJyArIG5iTGlnbmVQcmV2aXNpb25uZWwgKyAnXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgY2hnY21cIj5cXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8dGQgaWQ9XCJpbmRfY21fJyArIG5iTGlnbmVQcmV2aXNpb25uZWwgKyAnXCI+MDwvdGQ+XFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjNjhDMzlGXCI+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCIwXCIgbmFtZT1cInRkXycgKyBuYkxpZ25lUHJldmlzaW9ubmVsICsgJ1wiIGlkPVwidGRfJyArIG5iTGlnbmVQcmV2aXNpb25uZWwgKyAnXCIgZGF0YS1saWduZT1cIicgKyBuYkxpZ25lUHJldmlzaW9ubmVsICsgJ1wiXFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCBjaGd0ZFwiPjwvdGQ+XFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjNjhDMzlGXCI+PGlucHV0IHR5cGU9XCJudW1iZXJcIiB2YWx1ZT1cIjBcIiBuYW1lPVwiZ3JfdGRfJyArIG5iTGlnbmVQcmV2aXNpb25uZWwgKyAnXCIgaWQ9XCJncl90ZF8nICsgbmJMaWduZVByZXZpc2lvbm5lbCArICdcIlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1saWduZT1cIicgKyBuYkxpZ25lUHJldmlzaW9ubmVsICsgJ1wiIGNsYXNzPVwiZm9ybS1jb250cm9sIGNoZ3RkXCI+PC90ZD5cXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICM2OEMzOUZcIiBpZD1cImluZF90ZF8nICsgbmJMaWduZVByZXZpc2lvbm5lbCArICdcIj4wPC90ZD5cXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICNGRkMwNTJcIj48aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT1cIjBcIiBuYW1lPVwidHBfJyArIG5iTGlnbmVQcmV2aXNpb25uZWwgKyAnXCIgaWQ9XCJ0cF8nICsgbmJMaWduZVByZXZpc2lvbm5lbCArICdcIiBkYXRhLWxpZ25lPVwiJyArIG5iTGlnbmVQcmV2aXNpb25uZWwgKyAnXCJcXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIGNoZ3RwXCI+PC90ZD5cXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICNGRkMwNTJcIj48aW5wdXQgdHlwZT1cIm51bWJlclwiIHZhbHVlPVwiMFwiIG5hbWU9XCJncl90cF8nICsgbmJMaWduZVByZXZpc2lvbm5lbCArICdcIiBpZD1cImdyX3RwXycgKyBuYkxpZ25lUHJldmlzaW9ubmVsICsgJ1wiXFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWxpZ25lPVwiJyArIG5iTGlnbmVQcmV2aXNpb25uZWwgKyAnXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgY2hndHBcIj48L3RkPlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogI0ZGQzA1MlwiIGlkPVwiaW5kX3RwXycgKyBuYkxpZ25lUHJldmlzaW9ubmVsICsgJ1wiPjA8L3RkPlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8L3RyPidcblxuICAgICAgJCgnI25iTGlnbmUnKS52YWwobmJMaWduZVByZXZpc2lvbm5lbClcbiAgICAgICQoJyNsaWduZUFkZCcpLmJlZm9yZShodG1sKVxuICAgICAgLy90b2RvOiBhIHJlbXBsYWNlclxuICAgICAgLy8kKCcjaW50ZXJ2ZW5hbnRfJyArIG5iTGlnbmVQcmV2aXNpb25uZWwpLnNlbGVjdHBpY2tlcigpXG4gICAgfVxuICB9KVxuXG5cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnLmNoZ2NtJywgZnVuY3Rpb24gKGUpIHtcbiAgY29uc3QgbGlnbmUgPSAkKHRoaXMpLmRhdGEoJ2xpZ25lJylcbiAgY29uc3QgbmJTZWFuY2UgPSBwYXJzZUZsb2F0KCQoJyNjbV8nICsgbGlnbmUpLnZhbCgpKSAvIDEuNVxuICAkKCcjaW5kX2NtXycgKyBsaWduZSkuaHRtbChuYlNlYW5jZS50b0ZpeGVkKDIpKVxuXG4gIHVwZGF0ZVN5bnRoZXNlUHJldmlzaW9ubmVsKClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnLmNoZ3RkJywgZnVuY3Rpb24gKGUpIHtcbiAgY29uc3QgbGlnbmUgPSAkKHRoaXMpLmRhdGEoJ2xpZ25lJylcbiAgY29uc3QgbmJTZWFuY2UgPSBwYXJzZUZsb2F0KCQoJyN0ZF8nICsgbGlnbmUpLnZhbCgpKSAvIDEuNVxuICAkKCcjaW5kX3RkXycgKyBsaWduZSkuaHRtbChuYlNlYW5jZS50b0ZpeGVkKDIpKVxuXG4gIHVwZGF0ZVN5bnRoZXNlUHJldmlzaW9ubmVsKClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnLmNoZ3RwJywgZnVuY3Rpb24gKGUpIHtcbiAgY29uc3QgbGlnbmUgPSAkKHRoaXMpLmRhdGEoJ2xpZ25lJylcbiAgY29uc3QgbmJTZWFuY2UgPSBwYXJzZUZsb2F0KCQoJyN0cF8nICsgbGlnbmUpLnZhbCgpKSAvIDEuNVxuICAkKCcjaW5kX3RwXycgKyBsaWduZSkuaHRtbChuYlNlYW5jZS50b0ZpeGVkKDIpKVxuXG4gIHVwZGF0ZVN5bnRoZXNlUHJldmlzaW9ubmVsKClcbn0pXG5cbmZ1bmN0aW9uIHVwZGF0ZVN5bnRoZXNlUHJldmlzaW9ubmVsICgpIHtcbiAgbGV0IHRvdGFsQ20gPSAwXG4gIGxldCB0b3RhbFRkID0gMFxuICBsZXQgdG90YWxUcCA9IDBcbiAgbGV0IHRvdGFsRXFUZCA9IDBcbiAgbGV0IHRvdGFsRXR1ID0gMFxuXG4gIGxldCB0b3RhbEhldXJlc0NtID0gMFxuICBsZXQgdG90YWxIZXVyZXNUZCA9IDBcbiAgbGV0IHRvdGFsSGV1cmVzVHAgPSAwXG4gIC8vbGV0IHRvdGFsTWF0aWVyZSA9IDBcblxuICBmb3IgKGxldCBpID0gMTsgaSA8PSBuYkxpZ25lUHJldmlzaW9ubmVsOyBpKyspIHtcbiAgICBsZXQgJGNtID0gJCgnI2NtXycgKyBpKVxuICAgIGxldCAkdGQgPSAkKCcjdGRfJyArIGkpXG4gICAgbGV0ICR0cCA9ICQoJyN0cF8nICsgaSlcblxuICAgIHRvdGFsQ20gPSB0b3RhbENtICsgcGFyc2VGbG9hdCgkY20udmFsKCkpICogcGFyc2VJbnQoJCgnI2dyX2NtXycgKyBpKS52YWwoKSlcbiAgICB0b3RhbFRkID0gdG90YWxUZCArIHBhcnNlRmxvYXQoJHRkLnZhbCgpKSAqIHBhcnNlSW50KCQoJyNncl90ZF8nICsgaSkudmFsKCkpXG4gICAgdG90YWxUcCA9IHRvdGFsVHAgKyBwYXJzZUZsb2F0KCR0cC52YWwoKSkgKiBwYXJzZUludCgkKCcjZ3JfdHBfJyArIGkpLnZhbCgpKVxuXG4gICAgdG90YWxIZXVyZXNDbSA9IHRvdGFsSGV1cmVzQ20gKyBwYXJzZUZsb2F0KCRjbS52YWwoKSlcbiAgICB0b3RhbEhldXJlc1RkID0gdG90YWxIZXVyZXNUZCArIHBhcnNlRmxvYXQoJHRkLnZhbCgpKVxuICAgIHRvdGFsSGV1cmVzVHAgPSB0b3RhbEhldXJlc1RwICsgcGFyc2VGbG9hdCgkdHAudmFsKCkpXG5cbiAgICB0b3RhbEV0dSA9IHRvdGFsRXR1ICsgcGFyc2VGbG9hdCgkY20udmFsKCkpICsgcGFyc2VGbG9hdCgkdGQudmFsKCkpICsgcGFyc2VGbG9hdCgkdHAudmFsKCkpXG4gIH1cbiAgdG90YWxFcVRkID0gdG90YWxDbSArIHRvdGFsVGQgKyB0b3RhbFRwXG5cbiAgJCgnI3RvdGFsQ20nKS5odG1sKHRvdGFsQ20udG9GaXhlZCgyKSlcbiAgJCgnI3RvdGFsVGQnKS5odG1sKHRvdGFsVGQudG9GaXhlZCgyKSlcbiAgJCgnI3RvdGFsVHAnKS5odG1sKHRvdGFsVHAudG9GaXhlZCgyKSlcbiAgJCgnI3RvdGFsRXFUZCcpLmh0bWwodG90YWxFcVRkLnRvRml4ZWQoMikpXG4gICQoJyN0b3RhbEV0dScpLmh0bWwodG90YWxFdHUudG9GaXhlZCgyKSlcblxuICAvKiogdsOpcmlmaWNpYXRpb24gKi9cbiAgLyogdG9kbzogbmUgZm9uY3Rpb25uZSBwYXIsIGNhciBkb2l0IHByZW5kcmUgZW4gY29tcHRlIGxlIG5vbWJyZSBkZSBncm91cGUgZXQgbGVzIHBvc3NpYmxlcyBhdXRyZXMgZG9ubsOpZXMgZMOpasOgIHNhaXNpZXMuICovXG4gICQoJyN0b3RhbEhldXJlc0NtJykuaHRtbCh0b3RhbEhldXJlc0NtLnRvRml4ZWQoMikpXG4gICQoJyN0b3RhbEhldXJlc1RkJykuaHRtbCh0b3RhbEhldXJlc1RkLnRvRml4ZWQoMikpXG4gICQoJyN0b3RhbEhldXJlc1RwJykuaHRtbCh0b3RhbEhldXJlc1RwLnRvRml4ZWQoMikpXG5cbiAgbGV0IGRpZmZDbSA9IHBhcnNlRmxvYXQoJCgnI2NtTWFxdWV0dGUnKS5odG1sKCkpIC0gdG90YWxIZXVyZXNDbVxuICBsZXQgZGlmZlRkID0gcGFyc2VGbG9hdCgkKCcjdGRNYXF1ZXR0ZScpLmh0bWwoKSkgLSB0b3RhbEhldXJlc1RkXG4gIGxldCBkaWZmVHAgPSBwYXJzZUZsb2F0KCQoJyN0cE1hcXVldHRlJykuaHRtbCgpKSAtIHRvdGFsSGV1cmVzVHBcbiAgJCgnI2RpZmZDbScpLmh0bWwoZGlmZkNtLnRvRml4ZWQoMikpXG4gICQoJyNkaWZmVGQnKS5odG1sKGRpZmZUZC50b0ZpeGVkKDIpKVxuICAkKCcjZGlmZlRwJykuaHRtbChkaWZmVHAudG9GaXhlZCgyKSlcblxuICBpZiAoZGlmZkNtIDwgMCkge1xuICAgICQoJyNkaWZmQ20nKS5hZGRDbGFzcygnZXJyZXVyUHJldmknKS5yZW1vdmVDbGFzcygndmFsaWRlUHJldmknKVxuICB9IGVsc2Uge1xuICAgICQoJyNkaWZmQ20nKS5hZGRDbGFzcygndmFsaWRlUHJldmknKS5yZW1vdmVDbGFzcygnZXJyZXVyUHJldmknKVxuICB9XG5cbiAgaWYgKGRpZmZUZCA8IDApIHtcbiAgICAkKCcjZGlmZlRkJykuYWRkQ2xhc3MoJ2VycmV1clByZXZpJykucmVtb3ZlQ2xhc3MoJ3ZhbGlkZVByZXZpJylcbiAgfSBlbHNlIHtcbiAgICAkKCcjZGlmZlRkJykuYWRkQ2xhc3MoJ3ZhbGlkZVByZXZpJykucmVtb3ZlQ2xhc3MoJ2VycmV1clByZXZpJylcbiAgfVxuXG4gIGlmIChkaWZmVHAgPCAwKSB7XG4gICAgJCgnI2RpZmZUcCcpLmFkZENsYXNzKCdlcnJldXJQcmV2aScpLnJlbW92ZUNsYXNzKCd2YWxpZGVQcmV2aScpXG4gIH0gZWxzZSB7XG4gICAgJCgnI2RpZmZUcCcpLmFkZENsYXNzKCd2YWxpZGVQcmV2aScpLnJlbW92ZUNsYXNzKCdlcnJldXJQcmV2aScpXG4gIH1cbn1cblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcjcHJldmlzaW9ubmVsX21hdGllcmUnLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHZvbHVtZU1hdGllcmUgPSAkKCcjdm9sdW1lTWF0aWVyZScpXG4gIGlmICgkKHRoaXMpLnZhbCgpID09PSAnJykge1xuICAgIHZvbHVtZU1hdGllcmUuaHRtbCgnQ2hvaXNpciBkXFwnYWJvcmQgdW5lIG1hdGnDqHJlJylcbiAgfSBlbHNlIHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcGlfbWF0aWVyZScsIHsnbWF0aWVyZSc6ICQodGhpcykudmFsKCl9KSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGNvbnN0IGh0bWwgPSAnUFBOIE9mZmljaWVsID0+IENNICcgKyBkYXRhLmNtRm9ybWF0aW9uICsgJyBoZXVyZShzKTsgVEQgJyArIGRhdGEudGRGb3JtYXRpb24gKyAnIGhldXJlKHMpOyBUUCAnICsgZGF0YS50cEZvcm1hdGlvbiArICcgaGV1cmUocyk7IFBQTiBSw6lhbGlzw6kvZGVwYXJ0ZW1lbnQgPT4gQ00gJyArIGRhdGEuY21QcG4gKyAnIGhldXJlKHMpOyBURCAnICsgZGF0YS50ZFBwbiArICcgaGV1cmUocyk7IFRQICcgKyBkYXRhLnRwUHBuICsgJyBoZXVyZShzKTsnXG4gICAgICAgIHZvbHVtZU1hdGllcmUuaHRtbChodG1sKVxuICAgICAgICAkKCcjY21NYXF1ZXR0ZScpLmh0bWwoZGF0YS5jbUZvcm1hdGlvbilcbiAgICAgICAgJCgnI3RvdGFsSGV1cmVzQ20nKS5odG1sKDApXG4gICAgICAgICQoJyNkaWZmQ20nKS5odG1sKDApXG4gICAgICAgICQoJyN0ZE1hcXVldHRlJykuaHRtbChkYXRhLnRkRm9ybWF0aW9uKVxuICAgICAgICAkKCcjdG90YWxIZXVyZXNUZCcpLmh0bWwoMClcbiAgICAgICAgJCgnI2RpZmZUZCcpLmh0bWwoMClcbiAgICAgICAgJCgnI3RwTWFxdWV0dGUnKS5odG1sKGRhdGEudHBGb3JtYXRpb24pXG4gICAgICAgICQoJyN0b3RhbEhldXJlc1RwJykuaHRtbCgwKVxuICAgICAgICAkKCcjZGlmZlRwJykuaHRtbCgwKVxuICAgICAgICAkKCcjdGFiaGV1cmVzJykuc2hvdygpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufSlcblxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2J0bkdlbmVyZUZpY2hpZXInLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgZS5zdG9wUHJvcGFnYXRpb24oKVxuXG4gIGNvbnN0IHNlbGVjdGVkQ2hhbXBzID0gW11cbiAgJCgnaW5wdXQ6Y2hlY2tib3hbbmFtZT1leHBvcnRDaGFtcHNdOmNoZWNrZWQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICBzZWxlY3RlZENoYW1wcy5wdXNoKCQodGhpcykudmFsKCkpXG4gIH0pXG5cbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2V4cG9ydF9saXN0aW5nLmZyJyksXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgZGF0YToge1xuICAgICAgJ21hdGllcmUnOiAkKHRoaXMpLmRhdGEoJ21hdGllcmUnKSxcbiAgICAgICdleHBvcnRUeXBlRG9jdW1lbnQnOiAkKCdpbnB1dFt0eXBlPXJhZGlvXVtuYW1lPWV4cG9ydFR5cGVEb2N1bWVudF06Y2hlY2tlZCcpLnZhbCgpLFxuICAgICAgJ2V4cG9ydENoYW1wcyc6IHNlbGVjdGVkQ2hhbXBzLFxuICAgICAgJ2V4cG9ydEZvcm1hdCc6ICQoJ2lucHV0W3R5cGU9cmFkaW9dW25hbWU9ZXhwb3J0Rm9ybWF0XTpjaGVja2VkJykudmFsKCksXG4gICAgICAnZXhwb3J0RmlsdHJlJzogJCgnaW5wdXRbdHlwZT1yYWRpb11bbmFtZT1leHBvcnRGaWx0cmVdOmNoZWNrZWQnKS52YWwoKVxuICAgIH0sXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGZpY2hpZXIpIHtcblxuICAgIH1cbiAgfSlcbn0pXG5cblxuLy9yZWxvYWQgc2kgY2hhbmdlbWVudCBkJ2FubsOpZVxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcjY2hhbmdlX2FubmVlX3RlbXBfaHJzJywgZnVuY3Rpb24gKGUpIHtcblxuICB3aW5kb3cubG9jYXRpb24gPSBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9ocnNfaW5kZXgnLCB7YW5uZWU6ICQodGhpcykudmFsKCl9KVxufSlcblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcjY2hhbmdlX2FubmVlX3RlbXBfcHJldmlzaW9ubmVsJywgZnVuY3Rpb24gKGUpIHtcbiAgd2luZG93LmxvY2F0aW9uID0gUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fcHJldmlzaW9ubmVsX2luZGV4Jywge2FubmVlOiAkKHRoaXMpLnZhbCgpfSlcbn0pXG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHRyaW0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0nKS50cmltO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciAkcGFyc2VGbG9hdCA9IGdsb2JhbC5wYXJzZUZsb2F0O1xudmFyIEZPUkNFRCA9IDEgLyAkcGFyc2VGbG9hdCh3aGl0ZXNwYWNlcyArICctMCcpICE9PSAtSW5maW5pdHk7XG5cbi8vIGBwYXJzZUZsb2F0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcGFyc2VmbG9hdC1zdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gRk9SQ0VEID8gZnVuY3Rpb24gcGFyc2VGbG9hdChzdHJpbmcpIHtcbiAgdmFyIHRyaW1tZWRTdHJpbmcgPSB0cmltKFN0cmluZyhzdHJpbmcpKTtcbiAgdmFyIHJlc3VsdCA9ICRwYXJzZUZsb2F0KHRyaW1tZWRTdHJpbmcpO1xuICByZXR1cm4gcmVzdWx0ID09PSAwICYmIHRyaW1tZWRTdHJpbmcuY2hhckF0KDApID09ICctJyA/IC0wIDogcmVzdWx0O1xufSA6ICRwYXJzZUZsb2F0O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciB0cmltID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy10cmltJykudHJpbTtcbnZhciB3aGl0ZXNwYWNlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93aGl0ZXNwYWNlcycpO1xuXG52YXIgJHBhcnNlSW50ID0gZ2xvYmFsLnBhcnNlSW50O1xudmFyIGhleCA9IC9eWystXT8wW1h4XS87XG52YXIgRk9SQ0VEID0gJHBhcnNlSW50KHdoaXRlc3BhY2VzICsgJzA4JykgIT09IDggfHwgJHBhcnNlSW50KHdoaXRlc3BhY2VzICsgJzB4MTYnKSAhPT0gMjI7XG5cbi8vIGBwYXJzZUludGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXBhcnNlaW50LXN0cmluZy1yYWRpeFxubW9kdWxlLmV4cG9ydHMgPSBGT1JDRUQgPyBmdW5jdGlvbiBwYXJzZUludChzdHJpbmcsIHJhZGl4KSB7XG4gIHZhciBTID0gdHJpbShTdHJpbmcoc3RyaW5nKSk7XG4gIHJldHVybiAkcGFyc2VJbnQoUywgKHJhZGl4ID4+PiAwKSB8fCAoaGV4LnRlc3QoUykgPyAxNiA6IDEwKSk7XG59IDogJHBhcnNlSW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyJyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUucmVwZWF0YCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5yZXBlYXRcbm1vZHVsZS5leHBvcnRzID0gJycucmVwZWF0IHx8IGZ1bmN0aW9uIHJlcGVhdChjb3VudCkge1xuICB2YXIgc3RyID0gU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcykpO1xuICB2YXIgcmVzdWx0ID0gJyc7XG4gIHZhciBuID0gdG9JbnRlZ2VyKGNvdW50KTtcbiAgaWYgKG4gPCAwIHx8IG4gPT0gSW5maW5pdHkpIHRocm93IFJhbmdlRXJyb3IoJ1dyb25nIG51bWJlciBvZiByZXBldGl0aW9ucycpO1xuICBmb3IgKDtuID4gMDsgKG4gPj4+PSAxKSAmJiAoc3RyICs9IHN0cikpIGlmIChuICYgMSkgcmVzdWx0ICs9IHN0cjtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG4vLyBgdGhpc051bWJlclZhbHVlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdGhpc251bWJlcnZhbHVlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlICE9ICdudW1iZXInICYmIGNsYXNzb2YodmFsdWUpICE9ICdOdW1iZXInKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdJbmNvcnJlY3QgaW52b2NhdGlvbicpO1xuICB9XG4gIHJldHVybiArdmFsdWU7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXInKTtcbnZhciB0aGlzTnVtYmVyVmFsdWUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdGhpcy1udW1iZXItdmFsdWUnKTtcbnZhciByZXBlYXQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXJlcGVhdCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbnZhciBuYXRpdmVUb0ZpeGVkID0gMS4wLnRvRml4ZWQ7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG52YXIgcG93ID0gZnVuY3Rpb24gKHgsIG4sIGFjYykge1xuICByZXR1cm4gbiA9PT0gMCA/IGFjYyA6IG4gJSAyID09PSAxID8gcG93KHgsIG4gLSAxLCBhY2MgKiB4KSA6IHBvdyh4ICogeCwgbiAvIDIsIGFjYyk7XG59O1xuXG52YXIgbG9nID0gZnVuY3Rpb24gKHgpIHtcbiAgdmFyIG4gPSAwO1xuICB2YXIgeDIgPSB4O1xuICB3aGlsZSAoeDIgPj0gNDA5Nikge1xuICAgIG4gKz0gMTI7XG4gICAgeDIgLz0gNDA5NjtcbiAgfVxuICB3aGlsZSAoeDIgPj0gMikge1xuICAgIG4gKz0gMTtcbiAgICB4MiAvPSAyO1xuICB9IHJldHVybiBuO1xufTtcblxudmFyIEZPUkNFRCA9IG5hdGl2ZVRvRml4ZWQgJiYgKFxuICAwLjAwMDA4LnRvRml4ZWQoMykgIT09ICcwLjAwMCcgfHxcbiAgMC45LnRvRml4ZWQoMCkgIT09ICcxJyB8fFxuICAxLjI1NS50b0ZpeGVkKDIpICE9PSAnMS4yNScgfHxcbiAgMTAwMDAwMDAwMDAwMDAwMDEyOC4wLnRvRml4ZWQoMCkgIT09ICcxMDAwMDAwMDAwMDAwMDAwMTI4J1xuKSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBWOCB+IEFuZHJvaWQgNC4zLVxuICBuYXRpdmVUb0ZpeGVkLmNhbGwoe30pO1xufSk7XG5cbi8vIGBOdW1iZXIucHJvdG90eXBlLnRvRml4ZWRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1udW1iZXIucHJvdG90eXBlLnRvZml4ZWRcbiQoeyB0YXJnZXQ6ICdOdW1iZXInLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LXN0YXRlbWVudHNcbiAgdG9GaXhlZDogZnVuY3Rpb24gdG9GaXhlZChmcmFjdGlvbkRpZ2l0cykge1xuICAgIHZhciBudW1iZXIgPSB0aGlzTnVtYmVyVmFsdWUodGhpcyk7XG4gICAgdmFyIGZyYWN0RGlnaXRzID0gdG9JbnRlZ2VyKGZyYWN0aW9uRGlnaXRzKTtcbiAgICB2YXIgZGF0YSA9IFswLCAwLCAwLCAwLCAwLCAwXTtcbiAgICB2YXIgc2lnbiA9ICcnO1xuICAgIHZhciByZXN1bHQgPSAnMCc7XG4gICAgdmFyIGUsIHosIGosIGs7XG5cbiAgICB2YXIgbXVsdGlwbHkgPSBmdW5jdGlvbiAobiwgYykge1xuICAgICAgdmFyIGluZGV4ID0gLTE7XG4gICAgICB2YXIgYzIgPSBjO1xuICAgICAgd2hpbGUgKCsraW5kZXggPCA2KSB7XG4gICAgICAgIGMyICs9IG4gKiBkYXRhW2luZGV4XTtcbiAgICAgICAgZGF0YVtpbmRleF0gPSBjMiAlIDFlNztcbiAgICAgICAgYzIgPSBmbG9vcihjMiAvIDFlNyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBkaXZpZGUgPSBmdW5jdGlvbiAobikge1xuICAgICAgdmFyIGluZGV4ID0gNjtcbiAgICAgIHZhciBjID0gMDtcbiAgICAgIHdoaWxlICgtLWluZGV4ID49IDApIHtcbiAgICAgICAgYyArPSBkYXRhW2luZGV4XTtcbiAgICAgICAgZGF0YVtpbmRleF0gPSBmbG9vcihjIC8gbik7XG4gICAgICAgIGMgPSAoYyAlIG4pICogMWU3O1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgZGF0YVRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGluZGV4ID0gNjtcbiAgICAgIHZhciBzID0gJyc7XG4gICAgICB3aGlsZSAoLS1pbmRleCA+PSAwKSB7XG4gICAgICAgIGlmIChzICE9PSAnJyB8fCBpbmRleCA9PT0gMCB8fCBkYXRhW2luZGV4XSAhPT0gMCkge1xuICAgICAgICAgIHZhciB0ID0gU3RyaW5nKGRhdGFbaW5kZXhdKTtcbiAgICAgICAgICBzID0gcyA9PT0gJycgPyB0IDogcyArIHJlcGVhdC5jYWxsKCcwJywgNyAtIHQubGVuZ3RoKSArIHQ7XG4gICAgICAgIH1cbiAgICAgIH0gcmV0dXJuIHM7XG4gICAgfTtcblxuICAgIGlmIChmcmFjdERpZ2l0cyA8IDAgfHwgZnJhY3REaWdpdHMgPiAyMCkgdGhyb3cgUmFuZ2VFcnJvcignSW5jb3JyZWN0IGZyYWN0aW9uIGRpZ2l0cycpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAobnVtYmVyICE9IG51bWJlcikgcmV0dXJuICdOYU4nO1xuICAgIGlmIChudW1iZXIgPD0gLTFlMjEgfHwgbnVtYmVyID49IDFlMjEpIHJldHVybiBTdHJpbmcobnVtYmVyKTtcbiAgICBpZiAobnVtYmVyIDwgMCkge1xuICAgICAgc2lnbiA9ICctJztcbiAgICAgIG51bWJlciA9IC1udW1iZXI7XG4gICAgfVxuICAgIGlmIChudW1iZXIgPiAxZS0yMSkge1xuICAgICAgZSA9IGxvZyhudW1iZXIgKiBwb3coMiwgNjksIDEpKSAtIDY5O1xuICAgICAgeiA9IGUgPCAwID8gbnVtYmVyICogcG93KDIsIC1lLCAxKSA6IG51bWJlciAvIHBvdygyLCBlLCAxKTtcbiAgICAgIHogKj0gMHgxMDAwMDAwMDAwMDAwMDtcbiAgICAgIGUgPSA1MiAtIGU7XG4gICAgICBpZiAoZSA+IDApIHtcbiAgICAgICAgbXVsdGlwbHkoMCwgeik7XG4gICAgICAgIGogPSBmcmFjdERpZ2l0cztcbiAgICAgICAgd2hpbGUgKGogPj0gNykge1xuICAgICAgICAgIG11bHRpcGx5KDFlNywgMCk7XG4gICAgICAgICAgaiAtPSA3O1xuICAgICAgICB9XG4gICAgICAgIG11bHRpcGx5KHBvdygxMCwgaiwgMSksIDApO1xuICAgICAgICBqID0gZSAtIDE7XG4gICAgICAgIHdoaWxlIChqID49IDIzKSB7XG4gICAgICAgICAgZGl2aWRlKDEgPDwgMjMpO1xuICAgICAgICAgIGogLT0gMjM7XG4gICAgICAgIH1cbiAgICAgICAgZGl2aWRlKDEgPDwgaik7XG4gICAgICAgIG11bHRpcGx5KDEsIDEpO1xuICAgICAgICBkaXZpZGUoMik7XG4gICAgICAgIHJlc3VsdCA9IGRhdGFUb1N0cmluZygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbXVsdGlwbHkoMCwgeik7XG4gICAgICAgIG11bHRpcGx5KDEgPDwgLWUsIDApO1xuICAgICAgICByZXN1bHQgPSBkYXRhVG9TdHJpbmcoKSArIHJlcGVhdC5jYWxsKCcwJywgZnJhY3REaWdpdHMpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZnJhY3REaWdpdHMgPiAwKSB7XG4gICAgICBrID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgIHJlc3VsdCA9IHNpZ24gKyAoayA8PSBmcmFjdERpZ2l0c1xuICAgICAgICA/ICcwLicgKyByZXBlYXQuY2FsbCgnMCcsIGZyYWN0RGlnaXRzIC0gaykgKyByZXN1bHRcbiAgICAgICAgOiByZXN1bHQuc2xpY2UoMCwgayAtIGZyYWN0RGlnaXRzKSArICcuJyArIHJlc3VsdC5zbGljZShrIC0gZnJhY3REaWdpdHMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gc2lnbiArIHJlc3VsdDtcbiAgICB9IHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgcGFyc2VGbG9hdEltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL251bWJlci1wYXJzZS1mbG9hdCcpO1xuXG4vLyBgcGFyc2VGbG9hdGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXBhcnNlZmxvYXQtc3RyaW5nXG4kKHsgZ2xvYmFsOiB0cnVlLCBmb3JjZWQ6IHBhcnNlRmxvYXQgIT0gcGFyc2VGbG9hdEltcGxlbWVudGF0aW9uIH0sIHtcbiAgcGFyc2VGbG9hdDogcGFyc2VGbG9hdEltcGxlbWVudGF0aW9uXG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHBhcnNlSW50SW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbnVtYmVyLXBhcnNlLWludCcpO1xuXG4vLyBgcGFyc2VJbnRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1wYXJzZWludC1zdHJpbmctcmFkaXhcbiQoeyBnbG9iYWw6IHRydWUsIGZvcmNlZDogcGFyc2VJbnQgIT0gcGFyc2VJbnRJbXBsZW1lbnRhdGlvbiB9LCB7XG4gIHBhcnNlSW50OiBwYXJzZUludEltcGxlbWVudGF0aW9uXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=