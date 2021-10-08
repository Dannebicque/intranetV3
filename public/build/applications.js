(self["webpackChunkintranetv3"] = self["webpackChunkintranetv3"] || []).push([["applications"],{

/***/ "./assets/js/pages/applications.js":
/*!*****************************************!*\
  !*** ./assets/js/pages/applications.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./assets/js/util.js");
/* harmony import */ var _messagerie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messagerie */ "./assets/js/pages/messagerie.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/applications.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 27/09/2021 17:09


$(document).on('click', '.changeapplication', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $('.changeapplication').removeClass('active show');
  $(this).addClass('active show');
  $('#mainContent').empty().load($(this).attr('href'));
});
$(document).on('change', '#selectsemestre', function () {
  //matieres
  $('#listegroupe').empty();
  var selectMatiere = $('#selectmatiere');
  var selectGroupes = $('#selectgroupes');
  $.ajax({
    url: Routing.generate('api_matieres_semestre', {
      semestre: $(this).val()
    }),
    dataType: "json",
    //Return data type (what we expect).
    success: function success(data) {
      selectMatiere.empty();
      selectMatiere.append($('<option></option>').attr('value', '').text('Choisir une matière'));
      jQuery.each(data, function (index, matiere) {
        selectMatiere.append($('<option></option>').attr('value', matiere.typeMatiere + '_' + matiere.id).text(matiere.display));
      });
      console.log(selectMatiere); //todo: a remplacer
      // selectMatiere.attr('data-provide', 'selectpicker')
      // selectMatiere.attr('data-live-search', 'true')
    },
    error: function error() {
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Erreur lors de la tentative d\'affichage des matières du semestres. Veuillez contacter le responsable de l\'intranet si le problème persiste !', 'danger');
    }
  }); //groupes

  $.ajax({
    url: Routing.generate('api_type_groupe_semestre', {
      semestre: $(this).val()
    }),
    dataType: "json",
    //Return data type (what we expect).
    success: function success(data) {
      selectGroupes.empty();
      selectGroupes.append($('<option></option>').attr('value', '').text('Choisir un type de groupe'));
      jQuery.each(data, function (index, typeGroupe) {
        selectGroupes.append($('<option></option>').attr('value', typeGroupe.id).text(typeGroupe.libelle));
      });
    },
    error: function error() {
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Erreur lors de la tentative d\'affichage des groupes du semestres. Veuillez contacter le responsable de l\'intranet si le problème persiste !', 'danger');
    }
  });
});
$(document).on('change', '#selectgroupes', function () {
  var $lgr = $('#listegroupe'); //matieres

  $.ajax({
    url: Routing.generate('api_groupe_type_groupe', {
      typeGroupe: $(this).val()
    }),
    dataType: "json",
    //Return data type (what we expect).
    success: function success(data) {
      $lgr.empty();
      var $html = '';
      jQuery.each(data, function (index, groupe) {
        $html += '<input type="checkbox" checked name="detail_groupes[]" value="' + groupe.id + '"> ' + groupe.libelle + ' | ';
      });
      $lgr.html($html);
    },
    error: function error() {
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Erreur lors de la tentative d\'affichage des groupes du semestres. Veuillez contacter le responsable de l\'intranet si le problème persiste !', 'danger');
    }
  });
});
$(document).on('click', '#add_rattrapage', function () {
  $('#bloc_add_rattrapage').toggle();
});
$(document).on('click', '#add_carnet', function () {
  $('#bloc_add_carnet').toggle();
});

/***/ }),

/***/ "./assets/js/pages/messagerie.js":
/*!***************************************!*\
  !*** ./assets/js/pages/messagerie.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tinyMce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tinyMce */ "./assets/js/tinyMce.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");


// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/messagerie.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 01/10/2021 10:59

$(document).on('click', '.messagerie-filtre', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $('.messagerie-filtre').parent().removeClass('active');
  $(this).parent().addClass('active');
  $('#messages-liste').empty().load(Routing.generate('messagerie_filtre', {
    'filtre': $(this).data('filtre')
  }));
});
$(document).on('click', '#modalPj', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $('#blocPj').toggle();
});
$(document).on('click', '.addFile', function (e) {
  e.preventDefault();
  e.stopPropagation();
  var $id = parseInt($(this).data('file')) + 1;
  var html = '<div class="row" id="file' + $id + '">\n' + '            <div class="col-10">\n' + '                <input type="file" name="pj' + $id + '" id="pj' + $id + '" class="form-control pjFile" placeholder="Ajouter une pièce jointe">\n' + '            </div>\n' + '            <div class="col-1">\n' + '                <button class="btn btn-block btn-success-outline addFile" data-file="' + $id + '"><i class="fa fa-plus-circle"></i></button>\n' + '            </div>\n' + '            <div class="col-1">\n' + '                <button class="btn btn-block btn-danger-outline removeFile" data-file="' + $id + '"><i class="fa\n' + '            fa-minus-circle"></i></button>\n' + '            </div>\n' + '        </div>';
  $('#blocPj').append(html);
});
$(document).on('click', '.removeFile', function (e) {
  e.preventDefault();
  e.stopPropagation();
  var $id = $(this).data('file');
  $('#file' + $id).remove();
});
$(document).on('click', '#saveDraft', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $.ajax({
    url: Routing.generate('messagerie_draft'),
    data: {
      messageToSemestre: $('#messageToSemestre').val(),
      messageToGroupe: $('#messageToGroupe').val(),
      messageToLibreEtudiant: $('#messageToLibreEtudiant').val(),
      messageToLibrePersonnel: $('#messageToLibrePersonnel').val(),
      typeDestinataire: $('input[type=radio][name=messageDestinataireType]:checked').val(),
      copie: $('#messageCopy').val(),
      message: $('.ql-editor').html(),
      sujet: $('#messageSubject').val()
    },
    method: 'POST',
    success: function success(data) {
      $('#messages-liste').empty().load(Routing.generate('messagerie_filtre', {
        'filtre': 'draft'
      }));
    }
  });
});
$(document).on('click', '.message-read', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $('#messages-liste').empty().load(Routing.generate('messagerie_message', {
    message: $(this).data('message')
  }));
});
$(document).on('click', '.message-read-auteur', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $('#messages-liste').empty().load(Routing.generate('messagerie_message_envoye', {
    message: $(this).data('message')
  }));
});
$(document).on('click', '#new-message', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $('#messages-liste').empty().load(Routing.generate('messagerie_nouveau'), {}, function () {
    tinymce.remove('#messageMessage');
    tinymce.init({
      selector: '#messageMessage',
      height: 300,
      menubar: false,
      language: 'fr_FR',
      content_css: 'default',
      toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | outdent indent'
    });
  });
});
$(document).on('change', '.pjFile', function () {
  var tailleTotale = 0;
  $('input[type="file"]').each(function (file, element) {
    if (typeof element.files[0] !== 'undefined') {
      tailleTotale += element.files[0].size;
    }
  });
  tailleTotale = tailleTotale / 1024;
  tailleTotale = tailleTotale / 1024;
  $('#poidPj').show().html('Le poids des pièces jointes est de ' + tailleTotale.toFixed(3) + ' Mo');
});
$(document).on('click', '#messageSent', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $(this).attr('disabled', true);
  $(this).text('Envoi en cours...');
  var formData = new FormData($('form')[0]);
  formData.append('messageMessage', tinymce.activeEditor.getContent({
    format: 'html'
  }));
  $.ajax({
    url: Routing.generate('messagerie_sent'),
    data: formData,
    async: false,
    cache: false,
    contentType: false,
    enctype: 'multipart/form-data',
    processData: false,
    method: 'POST',
    success: function success(data) {
      $('#messages-liste').empty().load(Routing.generate('messagerie_message_envoye', {
        message: data.message
      }));
      $('#messageSent').attr('disabled', false);
      $(this).text('Envoyer');
    }
  });
});
$(document).on('click', '.send_draft', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $('#messages-liste').empty().load(Routing.generate('messagerie_nouveau', {
    message: $(this).data('message')
  }));
});
$(document).on('click', '.starred', function () {
  $.ajax({
    url: Routing.generate('messagerie_change_etat'),
    method: 'POST',
    data: {
      valeur: 'S',
      message: $(this).data('message')
    },
    error: function error() {
      $(this).prop('checked', false);
    }
  });
});
$(document).on('click', '#deleteMessage', function () {
  $.ajax({
    url: Routing.generate('messagerie_change_etat'),
    method: 'POST',
    data: {
      etat: 'D',
      message: $(this).data('message')
    },
    success: function success() {
      $('#messages-liste').empty().load(Routing.generate('messagerie_filtre', {
        'filtre': 'all'
      }));
    }
  });
});
$(document).on('click', '.messageDestinataireType', function () {
  var type = $(this).val();
  var blocDestLibreEtudiant = $('#blocDestLibreEtudiant');
  var blocDestLibrePersonnel = $('#blocDestLibrePersonnel');
  var blocDestMessgaeInfo = $('#blocDestMessgaeInfo');
  var blocDestGroupe = $('#blocDestGroupe');
  var blocDestSemestre = $('#blocDestSemestre');

  if (type === 'e') {
    blocDestLibreEtudiant.show();
    blocDestLibrePersonnel.hide();
    blocDestMessgaeInfo.hide();
    blocDestGroupe.hide();
    blocDestSemestre.hide();
  } else if (type === 's') {
    blocDestLibreEtudiant.hide();
    blocDestLibrePersonnel.hide();
    blocDestMessgaeInfo.hide();
    blocDestGroupe.hide();
    blocDestSemestre.show();
  } else if (type === 'g') {
    blocDestLibreEtudiant.hide();
    blocDestLibrePersonnel.hide();
    blocDestMessgaeInfo.hide();
    blocDestGroupe.show();
    blocDestSemestre.hide();
  } else if (type === 'p') {
    blocDestLibreEtudiant.hide();
    blocDestLibrePersonnel.show();
    blocDestMessgaeInfo.hide();
    blocDestGroupe.hide();
    blocDestSemestre.hide();
  }
});

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_arra-a68b23","vendors-node_modules_core-js_modules_es_string_split_js","vendors-node_modules_core-js_internals_array-method-is-strict_js-node_modules_core-js_interna-81f81c","vendors-node_modules_core-js_internals_dom-iterables_js-node_modules_core-js_modules_es_symbol_js","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_dat-47334b","vendors-node_modules_tinymce_icons_default_icons_min_js-node_modules_tinymce_plugins_lists_pl-a86b6f","assets_js_util_js","assets_js_tinyMce_js"], () => (__webpack_exec__("./assets/js/pages/applications.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vYXNzZXRzL2pzL3BhZ2VzL2FwcGxpY2F0aW9ucy5qcyIsIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vYXNzZXRzL2pzL3BhZ2VzL21lc3NhZ2VyaWUuanMiLCJ3ZWJwYWNrOi8vaW50cmFuZXR2My8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9udW1iZXItcGFyc2UtaW50LmpzIiwid2VicGFjazovL2ludHJhbmV0djMvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLXJlcGVhdC5qcyIsIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RoaXMtbnVtYmVyLXZhbHVlLmpzIiwid2VicGFjazovL2ludHJhbmV0djMvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm51bWJlci50by1maXhlZC5qcyIsIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5wYXJzZS1pbnQuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50Iiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiZW1wdHkiLCJsb2FkIiwiYXR0ciIsInNlbGVjdE1hdGllcmUiLCJzZWxlY3RHcm91cGVzIiwiYWpheCIsInVybCIsIlJvdXRpbmciLCJnZW5lcmF0ZSIsInNlbWVzdHJlIiwidmFsIiwiZGF0YVR5cGUiLCJzdWNjZXNzIiwiZGF0YSIsImFwcGVuZCIsInRleHQiLCJqUXVlcnkiLCJlYWNoIiwiaW5kZXgiLCJtYXRpZXJlIiwidHlwZU1hdGllcmUiLCJpZCIsImRpc3BsYXkiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJhZGRDYWxsb3V0IiwidHlwZUdyb3VwZSIsImxpYmVsbGUiLCIkbGdyIiwiJGh0bWwiLCJncm91cGUiLCJodG1sIiwidG9nZ2xlIiwicGFyZW50IiwiJGlkIiwicGFyc2VJbnQiLCJyZW1vdmUiLCJtZXNzYWdlVG9TZW1lc3RyZSIsIm1lc3NhZ2VUb0dyb3VwZSIsIm1lc3NhZ2VUb0xpYnJlRXR1ZGlhbnQiLCJtZXNzYWdlVG9MaWJyZVBlcnNvbm5lbCIsInR5cGVEZXN0aW5hdGFpcmUiLCJjb3BpZSIsIm1lc3NhZ2UiLCJzdWpldCIsIm1ldGhvZCIsInRpbnltY2UiLCJpbml0Iiwic2VsZWN0b3IiLCJoZWlnaHQiLCJtZW51YmFyIiwibGFuZ3VhZ2UiLCJjb250ZW50X2NzcyIsInRvb2xiYXIiLCJ0YWlsbGVUb3RhbGUiLCJmaWxlIiwiZWxlbWVudCIsImZpbGVzIiwic2l6ZSIsInNob3ciLCJ0b0ZpeGVkIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFjdGl2ZUVkaXRvciIsImdldENvbnRlbnQiLCJmb3JtYXQiLCJhc3luYyIsImNhY2hlIiwiY29udGVudFR5cGUiLCJlbmN0eXBlIiwicHJvY2Vzc0RhdGEiLCJ2YWxldXIiLCJwcm9wIiwiZXRhdCIsInR5cGUiLCJibG9jRGVzdExpYnJlRXR1ZGlhbnQiLCJibG9jRGVzdExpYnJlUGVyc29ubmVsIiwiYmxvY0Rlc3RNZXNzZ2FlSW5mbyIsImJsb2NEZXN0R3JvdXBlIiwiYmxvY0Rlc3RTZW1lc3RyZSIsImhpZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsRUFBWixDQUFlLE9BQWYsRUFBd0Isb0JBQXhCLEVBQThDLFVBQVVDLENBQVYsRUFBYTtBQUN6REEsR0FBQyxDQUFDQyxjQUFGO0FBQ0FELEdBQUMsQ0FBQ0UsZUFBRjtBQUVBTCxHQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3Qk0sV0FBeEIsQ0FBb0MsYUFBcEM7QUFDQU4sR0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRTyxRQUFSLENBQWlCLGFBQWpCO0FBQ0FQLEdBQUMsQ0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOzs7Ozs7Ozs7OztBQzdIRCxRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLDZCQUE2QixtQkFBTyxDQUFDLDJGQUErQjs7QUFFcEU7QUFDQTtBQUNBLEdBQUcsMkRBQTJEO0FBQzlEO0FBQ0EsQ0FBQyIsImZpbGUiOiJhcHBsaWNhdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvcGFnZXMvYXBwbGljYXRpb25zLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMjcvMDkvMjAyMSAxNzowOVxuaW1wb3J0IHthZGRDYWxsb3V0fSBmcm9tICcuLi91dGlsJ1xuaW1wb3J0ICcuL21lc3NhZ2VyaWUnXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY2hhbmdlYXBwbGljYXRpb24nLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgZS5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICQoJy5jaGFuZ2VhcHBsaWNhdGlvbicpLnJlbW92ZUNsYXNzKCdhY3RpdmUgc2hvdycpXG4gICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZSBzaG93JylcbiAgJCgnI21haW5Db250ZW50JykuZW1wdHkoKS5sb2FkKCQodGhpcykuYXR0cignaHJlZicpKVxufSlcblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcjc2VsZWN0c2VtZXN0cmUnLCBmdW5jdGlvbiAoKSB7XG4gIC8vbWF0aWVyZXNcbiAgJCgnI2xpc3RlZ3JvdXBlJykuZW1wdHkoKVxuICBjb25zdCBzZWxlY3RNYXRpZXJlID0gJCgnI3NlbGVjdG1hdGllcmUnKVxuICBjb25zdCBzZWxlY3RHcm91cGVzID0gJCgnI3NlbGVjdGdyb3VwZXMnKVxuICAkLmFqYXgoXG4gICAge1xuICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcGlfbWF0aWVyZXNfc2VtZXN0cmUnLCB7c2VtZXN0cmU6ICQodGhpcykudmFsKCl9KSxcbiAgICAgIGRhdGFUeXBlOiBcImpzb25cIiwgLy9SZXR1cm4gZGF0YSB0eXBlICh3aGF0IHdlIGV4cGVjdCkuXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBzZWxlY3RNYXRpZXJlLmVtcHR5KClcbiAgICAgICAgc2VsZWN0TWF0aWVyZS5hcHBlbmQoJCgnPG9wdGlvbj48L29wdGlvbj4nKVxuICAgICAgICAgIC5hdHRyKCd2YWx1ZScsICcnKVxuICAgICAgICAgIC50ZXh0KCdDaG9pc2lyIHVuZSBtYXRpw6hyZScpKVxuICAgICAgICBqUXVlcnkuZWFjaChkYXRhLCBmdW5jdGlvbiAoaW5kZXgsIG1hdGllcmUpIHtcbiAgICAgICAgICBzZWxlY3RNYXRpZXJlLmFwcGVuZCgkKCc8b3B0aW9uPjwvb3B0aW9uPicpXG4gICAgICAgICAgICAuYXR0cigndmFsdWUnLCBtYXRpZXJlLnR5cGVNYXRpZXJlICsgJ18nICsgbWF0aWVyZS5pZClcbiAgICAgICAgICAgIC50ZXh0KG1hdGllcmUuZGlzcGxheSkpXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdE1hdGllcmUpXG4gICAgICAgIC8vdG9kbzogYSByZW1wbGFjZXJcbiAgICAgICAgLy8gc2VsZWN0TWF0aWVyZS5hdHRyKCdkYXRhLXByb3ZpZGUnLCAnc2VsZWN0cGlja2VyJylcbiAgICAgICAgLy8gc2VsZWN0TWF0aWVyZS5hdHRyKCdkYXRhLWxpdmUtc2VhcmNoJywgJ3RydWUnKVxuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGFkZENhbGxvdXQoJ0VycmV1ciBsb3JzIGRlIGxhIHRlbnRhdGl2ZSBkXFwnYWZmaWNoYWdlIGRlcyBtYXRpw6hyZXMgZHUgc2VtZXN0cmVzLiBWZXVpbGxleiBjb250YWN0ZXIgbGUgcmVzcG9uc2FibGUgZGUgbFxcJ2ludHJhbmV0IHNpIGxlIHByb2Jsw6htZSBwZXJzaXN0ZSAhJywgJ2RhbmdlcicpXG4gICAgICB9XG4gICAgfSlcbiAgLy9ncm91cGVzXG4gICQuYWpheChcbiAgICB7XG4gICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwaV90eXBlX2dyb3VwZV9zZW1lc3RyZScsIHtzZW1lc3RyZTogJCh0aGlzKS52YWwoKX0pLFxuXG4gICAgICBkYXRhVHlwZTogXCJqc29uXCIsIC8vUmV0dXJuIGRhdGEgdHlwZSAod2hhdCB3ZSBleHBlY3QpLlxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgc2VsZWN0R3JvdXBlcy5lbXB0eSgpXG4gICAgICAgIHNlbGVjdEdyb3VwZXMuYXBwZW5kKCQoJzxvcHRpb24+PC9vcHRpb24+JylcbiAgICAgICAgICAuYXR0cigndmFsdWUnLCAnJylcbiAgICAgICAgICAudGV4dCgnQ2hvaXNpciB1biB0eXBlIGRlIGdyb3VwZScpKVxuICAgICAgICBqUXVlcnkuZWFjaChkYXRhLCBmdW5jdGlvbiAoaW5kZXgsIHR5cGVHcm91cGUpIHtcblxuICAgICAgICAgIHNlbGVjdEdyb3VwZXMuYXBwZW5kKCQoJzxvcHRpb24+PC9vcHRpb24+JylcbiAgICAgICAgICAgIC5hdHRyKCd2YWx1ZScsIHR5cGVHcm91cGUuaWQpXG4gICAgICAgICAgICAudGV4dCh0eXBlR3JvdXBlLmxpYmVsbGUpKVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGFkZENhbGxvdXQoJ0VycmV1ciBsb3JzIGRlIGxhIHRlbnRhdGl2ZSBkXFwnYWZmaWNoYWdlIGRlcyBncm91cGVzIGR1IHNlbWVzdHJlcy4gVmV1aWxsZXogY29udGFjdGVyIGxlIHJlc3BvbnNhYmxlIGRlIGxcXCdpbnRyYW5ldCBzaSBsZSBwcm9ibMOobWUgcGVyc2lzdGUgIScsICdkYW5nZXInKVxuICAgICAgfVxuICAgIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJyNzZWxlY3Rncm91cGVzJywgZnVuY3Rpb24gKCkge1xuXG4gIGNvbnN0ICRsZ3IgPSAkKCcjbGlzdGVncm91cGUnKVxuICAvL21hdGllcmVzXG4gICQuYWpheChcbiAgICB7XG4gICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwaV9ncm91cGVfdHlwZV9ncm91cGUnLCB7dHlwZUdyb3VwZTogJCh0aGlzKS52YWwoKX0pLFxuICAgICAgZGF0YVR5cGU6IFwianNvblwiLCAvL1JldHVybiBkYXRhIHR5cGUgKHdoYXQgd2UgZXhwZWN0KS5cbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICRsZ3IuZW1wdHkoKVxuICAgICAgICBsZXQgJGh0bWwgPSAnJ1xuICAgICAgICBqUXVlcnkuZWFjaChkYXRhLCBmdW5jdGlvbiAoaW5kZXgsIGdyb3VwZSkge1xuICAgICAgICAgICRodG1sICs9ICc8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZCBuYW1lPVwiZGV0YWlsX2dyb3VwZXNbXVwiIHZhbHVlPVwiJyArIGdyb3VwZS5pZCArICdcIj4gJyArIGdyb3VwZS5saWJlbGxlICsgJyB8ICdcbiAgICAgICAgfSlcbiAgICAgICAgJGxnci5odG1sKCRodG1sKVxuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGFkZENhbGxvdXQoJ0VycmV1ciBsb3JzIGRlIGxhIHRlbnRhdGl2ZSBkXFwnYWZmaWNoYWdlIGRlcyBncm91cGVzIGR1IHNlbWVzdHJlcy4gVmV1aWxsZXogY29udGFjdGVyIGxlIHJlc3BvbnNhYmxlIGRlIGxcXCdpbnRyYW5ldCBzaSBsZSBwcm9ibMOobWUgcGVyc2lzdGUgIScsICdkYW5nZXInKVxuICAgICAgfVxuICAgIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCcjYWRkX3JhdHRyYXBhZ2UnLCBmdW5jdGlvbigpe1xuICAkKCcjYmxvY19hZGRfcmF0dHJhcGFnZScpLnRvZ2dsZSgpXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCcjYWRkX2Nhcm5ldCcsIGZ1bmN0aW9uKCl7XG4gICQoJyNibG9jX2FkZF9jYXJuZXQnKS50b2dnbGUoKVxufSlcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMS4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9wYWdlcy9tZXNzYWdlcmllLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMDEvMTAvMjAyMSAxMDo1OVxuXG5pbXBvcnQgJy4uL3RpbnlNY2UnXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubWVzc2FnZXJpZS1maWx0cmUnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAkKCcubWVzc2FnZXJpZS1maWx0cmUnKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnYWN0aXZlJylcbiAgJCgnI21lc3NhZ2VzLWxpc3RlJykuZW1wdHkoKS5sb2FkKFJvdXRpbmcuZ2VuZXJhdGUoJ21lc3NhZ2VyaWVfZmlsdHJlJywgeydmaWx0cmUnOiAkKHRoaXMpLmRhdGEoJ2ZpbHRyZScpfSkpXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI21vZGFsUGonLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAkKCcjYmxvY1BqJykudG9nZ2xlKClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuYWRkRmlsZScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gIGxldCAkaWQgPSBwYXJzZUludCgkKHRoaXMpLmRhdGEoJ2ZpbGUnKSkgKyAxXG4gIGxldCBodG1sID0gJzxkaXYgY2xhc3M9XCJyb3dcIiBpZD1cImZpbGUnICsgJGlkICsgJ1wiPlxcbicgK1xuICAgICcgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEwXCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwicGonICsgJGlkICsgJ1wiIGlkPVwicGonICsgJGlkICsgJ1wiIGNsYXNzPVwiZm9ybS1jb250cm9sIHBqRmlsZVwiIHBsYWNlaG9sZGVyPVwiQWpvdXRlciB1bmUgcGnDqGNlIGpvaW50ZVwiPlxcbicgK1xuICAgICcgICAgICAgICAgICA8L2Rpdj5cXG4nICtcbiAgICAnICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1ibG9jayBidG4tc3VjY2Vzcy1vdXRsaW5lIGFkZEZpbGVcIiBkYXRhLWZpbGU9XCInICsgJGlkICsgJ1wiPjxpIGNsYXNzPVwiZmEgZmEtcGx1cy1jaXJjbGVcIj48L2k+PC9idXR0b24+XFxuJyArXG4gICAgJyAgICAgICAgICAgIDwvZGl2PlxcbicgK1xuICAgICcgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWJsb2NrIGJ0bi1kYW5nZXItb3V0bGluZSByZW1vdmVGaWxlXCIgZGF0YS1maWxlPVwiJyArICRpZCArICdcIj48aSBjbGFzcz1cImZhXFxuJyArXG4gICAgJyAgICAgICAgICAgIGZhLW1pbnVzLWNpcmNsZVwiPjwvaT48L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgICAgICAgPC9kaXY+J1xuXG4gICQoJyNibG9jUGonKS5hcHBlbmQoaHRtbClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcucmVtb3ZlRmlsZScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gIGxldCAkaWQgPSAkKHRoaXMpLmRhdGEoJ2ZpbGUnKVxuICAkKCcjZmlsZScgKyAkaWQpLnJlbW92ZSgpXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI3NhdmVEcmFmdCcsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdtZXNzYWdlcmllX2RyYWZ0JyksXG4gICAgZGF0YToge1xuICAgICAgbWVzc2FnZVRvU2VtZXN0cmU6ICQoJyNtZXNzYWdlVG9TZW1lc3RyZScpLnZhbCgpLFxuICAgICAgbWVzc2FnZVRvR3JvdXBlOiAkKCcjbWVzc2FnZVRvR3JvdXBlJykudmFsKCksXG4gICAgICBtZXNzYWdlVG9MaWJyZUV0dWRpYW50OiAkKCcjbWVzc2FnZVRvTGlicmVFdHVkaWFudCcpLnZhbCgpLFxuICAgICAgbWVzc2FnZVRvTGlicmVQZXJzb25uZWw6ICQoJyNtZXNzYWdlVG9MaWJyZVBlcnNvbm5lbCcpLnZhbCgpLFxuICAgICAgdHlwZURlc3RpbmF0YWlyZTogJCgnaW5wdXRbdHlwZT1yYWRpb11bbmFtZT1tZXNzYWdlRGVzdGluYXRhaXJlVHlwZV06Y2hlY2tlZCcpLnZhbCgpLFxuICAgICAgY29waWU6ICQoJyNtZXNzYWdlQ29weScpLnZhbCgpLFxuICAgICAgbWVzc2FnZTogJCgnLnFsLWVkaXRvcicpLmh0bWwoKSxcbiAgICAgIHN1amV0OiAkKCcjbWVzc2FnZVN1YmplY3QnKS52YWwoKVxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICQoJyNtZXNzYWdlcy1saXN0ZScpLmVtcHR5KCkubG9hZChSb3V0aW5nLmdlbmVyYXRlKCdtZXNzYWdlcmllX2ZpbHRyZScsIHsnZmlsdHJlJzogJ2RyYWZ0J30pKVxuICAgIH1cbiAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubWVzc2FnZS1yZWFkJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGUuc3RvcFByb3BhZ2F0aW9uKClcblxuICAkKCcjbWVzc2FnZXMtbGlzdGUnKS5lbXB0eSgpLmxvYWQoUm91dGluZy5nZW5lcmF0ZSgnbWVzc2FnZXJpZV9tZXNzYWdlJywge21lc3NhZ2U6ICQodGhpcykuZGF0YSgnbWVzc2FnZScpfSkpXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm1lc3NhZ2UtcmVhZC1hdXRldXInLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgZS5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICQoJyNtZXNzYWdlcy1saXN0ZScpLmVtcHR5KCkubG9hZChSb3V0aW5nLmdlbmVyYXRlKCdtZXNzYWdlcmllX21lc3NhZ2VfZW52b3llJywge21lc3NhZ2U6ICQodGhpcykuZGF0YSgnbWVzc2FnZScpfSkpXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI25ldy1tZXNzYWdlJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGUuc3RvcFByb3BhZ2F0aW9uKClcblxuICAkKCcjbWVzc2FnZXMtbGlzdGUnKS5lbXB0eSgpLmxvYWQoUm91dGluZy5nZW5lcmF0ZSgnbWVzc2FnZXJpZV9ub3V2ZWF1JyksIHt9LCAoZnVuY3Rpb24gKCkge1xuICAgICAgdGlueW1jZS5yZW1vdmUoJyNtZXNzYWdlTWVzc2FnZScpXG4gICAgICB0aW55bWNlLmluaXQoe1xuICAgICAgICBzZWxlY3RvcjogJyNtZXNzYWdlTWVzc2FnZScsXG4gICAgICAgIGhlaWdodDogMzAwLFxuICAgICAgICBtZW51YmFyOiBmYWxzZSxcbiAgICAgICAgbGFuZ3VhZ2U6ICdmcl9GUicsXG4gICAgICAgIGNvbnRlbnRfY3NzOiAnZGVmYXVsdCcsXG4gICAgICAgIHRvb2xiYXI6ICd1bmRvIHJlZG8gfCBzdHlsZXNlbGVjdCB8IGJvbGQgaXRhbGljIHwgYWxpZ25sZWZ0IGFsaWduY2VudGVyIGFsaWducmlnaHQgYWxpZ25qdXN0aWZ5IHwgb3V0ZGVudCBpbmRlbnQnXG4gICAgICB9KVxuICAgIH1cbiAgKSlcbn0pXG5cblxuXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy5wakZpbGUnLCBmdW5jdGlvbiAoKSB7XG4gIGxldCB0YWlsbGVUb3RhbGUgPSAwXG4gICQoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJykuZWFjaChmdW5jdGlvbiAoZmlsZSwgZWxlbWVudCkge1xuICAgIGlmICh0eXBlb2YgZWxlbWVudC5maWxlc1swXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRhaWxsZVRvdGFsZSArPSBlbGVtZW50LmZpbGVzWzBdLnNpemVcbiAgICB9XG4gIH0pXG4gIHRhaWxsZVRvdGFsZSA9IHRhaWxsZVRvdGFsZSAvIDEwMjRcbiAgdGFpbGxlVG90YWxlID0gdGFpbGxlVG90YWxlIC8gMTAyNFxuICAkKCcjcG9pZFBqJykuc2hvdygpLmh0bWwoJ0xlIHBvaWRzIGRlcyBwacOoY2VzIGpvaW50ZXMgZXN0IGRlICcgKyB0YWlsbGVUb3RhbGUudG9GaXhlZCgzKSArICcgTW8nKVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNtZXNzYWdlU2VudCcsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICQodGhpcykuYXR0cignZGlzYWJsZWQnLCB0cnVlKVxuICAkKHRoaXMpLnRleHQoJ0Vudm9pIGVuIGNvdXJzLi4uJylcblxuICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJCgnZm9ybScpWzBdKVxuICBmb3JtRGF0YS5hcHBlbmQoJ21lc3NhZ2VNZXNzYWdlJywgdGlueW1jZS5hY3RpdmVFZGl0b3IuZ2V0Q29udGVudCh7Zm9ybWF0OiAnaHRtbCd9KSlcblxuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnbWVzc2FnZXJpZV9zZW50JyksXG4gICAgZGF0YTogZm9ybURhdGEsXG4gICAgYXN5bmM6IGZhbHNlLFxuICAgIGNhY2hlOiBmYWxzZSxcbiAgICBjb250ZW50VHlwZTogZmFsc2UsXG4gICAgZW5jdHlwZTogJ211bHRpcGFydC9mb3JtLWRhdGEnLFxuICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgJCgnI21lc3NhZ2VzLWxpc3RlJykuZW1wdHkoKS5sb2FkKFJvdXRpbmcuZ2VuZXJhdGUoJ21lc3NhZ2VyaWVfbWVzc2FnZV9lbnZveWUnLCB7bWVzc2FnZTogZGF0YS5tZXNzYWdlfSkpXG4gICAgICAkKCcjbWVzc2FnZVNlbnQnKS5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKVxuICAgICAgJCh0aGlzKS50ZXh0KCdFbnZveWVyJylcbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnNlbmRfZHJhZnQnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAkKCcjbWVzc2FnZXMtbGlzdGUnKS5lbXB0eSgpLmxvYWQoUm91dGluZy5nZW5lcmF0ZSgnbWVzc2FnZXJpZV9ub3V2ZWF1Jywge21lc3NhZ2U6ICQodGhpcykuZGF0YSgnbWVzc2FnZScpfSkpXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnN0YXJyZWQnLCBmdW5jdGlvbiAoKSB7XG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdtZXNzYWdlcmllX2NoYW5nZV9ldGF0JyksXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgZGF0YToge1xuICAgICAgdmFsZXVyOiAnUycsXG4gICAgICBtZXNzYWdlOiAkKHRoaXMpLmRhdGEoJ21lc3NhZ2UnKVxuICAgIH0sXG4gICAgZXJyb3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgICQodGhpcykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKVxuICAgIH1cbiAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjZGVsZXRlTWVzc2FnZScsIGZ1bmN0aW9uICgpIHtcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ21lc3NhZ2VyaWVfY2hhbmdlX2V0YXQnKSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBkYXRhOiB7XG4gICAgICBldGF0OiAnRCcsXG4gICAgICBtZXNzYWdlOiAkKHRoaXMpLmRhdGEoJ21lc3NhZ2UnKVxuICAgIH0sXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgJCgnI21lc3NhZ2VzLWxpc3RlJykuZW1wdHkoKS5sb2FkKFJvdXRpbmcuZ2VuZXJhdGUoJ21lc3NhZ2VyaWVfZmlsdHJlJywgeydmaWx0cmUnOiAnYWxsJ30pKVxuICAgIH1cbiAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubWVzc2FnZURlc3RpbmF0YWlyZVR5cGUnLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHR5cGUgPSAkKHRoaXMpLnZhbCgpXG4gIGNvbnN0IGJsb2NEZXN0TGlicmVFdHVkaWFudCA9ICQoJyNibG9jRGVzdExpYnJlRXR1ZGlhbnQnKVxuICBjb25zdCBibG9jRGVzdExpYnJlUGVyc29ubmVsID0gJCgnI2Jsb2NEZXN0TGlicmVQZXJzb25uZWwnKVxuICBjb25zdCBibG9jRGVzdE1lc3NnYWVJbmZvID0gJCgnI2Jsb2NEZXN0TWVzc2dhZUluZm8nKVxuICBjb25zdCBibG9jRGVzdEdyb3VwZSA9ICQoJyNibG9jRGVzdEdyb3VwZScpXG4gIGNvbnN0IGJsb2NEZXN0U2VtZXN0cmUgPSAkKCcjYmxvY0Rlc3RTZW1lc3RyZScpXG5cbiAgaWYgKHR5cGUgPT09ICdlJykge1xuICAgIGJsb2NEZXN0TGlicmVFdHVkaWFudC5zaG93KClcbiAgICBibG9jRGVzdExpYnJlUGVyc29ubmVsLmhpZGUoKVxuICAgIGJsb2NEZXN0TWVzc2dhZUluZm8uaGlkZSgpXG4gICAgYmxvY0Rlc3RHcm91cGUuaGlkZSgpXG4gICAgYmxvY0Rlc3RTZW1lc3RyZS5oaWRlKClcbiAgfSBlbHNlIGlmICh0eXBlID09PSAncycpIHtcbiAgICBibG9jRGVzdExpYnJlRXR1ZGlhbnQuaGlkZSgpXG4gICAgYmxvY0Rlc3RMaWJyZVBlcnNvbm5lbC5oaWRlKClcbiAgICBibG9jRGVzdE1lc3NnYWVJbmZvLmhpZGUoKVxuICAgIGJsb2NEZXN0R3JvdXBlLmhpZGUoKVxuICAgIGJsb2NEZXN0U2VtZXN0cmUuc2hvdygpXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2cnKSB7XG4gICAgYmxvY0Rlc3RMaWJyZUV0dWRpYW50LmhpZGUoKVxuICAgIGJsb2NEZXN0TGlicmVQZXJzb25uZWwuaGlkZSgpXG4gICAgYmxvY0Rlc3RNZXNzZ2FlSW5mby5oaWRlKClcbiAgICBibG9jRGVzdEdyb3VwZS5zaG93KClcbiAgICBibG9jRGVzdFNlbWVzdHJlLmhpZGUoKVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdwJykge1xuICAgIGJsb2NEZXN0TGlicmVFdHVkaWFudC5oaWRlKClcbiAgICBibG9jRGVzdExpYnJlUGVyc29ubmVsLnNob3coKVxuICAgIGJsb2NEZXN0TWVzc2dhZUluZm8uaGlkZSgpXG4gICAgYmxvY0Rlc3RHcm91cGUuaGlkZSgpXG4gICAgYmxvY0Rlc3RTZW1lc3RyZS5oaWRlKClcbiAgfVxufSlcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdHJpbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbScpLnRyaW07XG52YXIgd2hpdGVzcGFjZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2hpdGVzcGFjZXMnKTtcblxudmFyICRwYXJzZUludCA9IGdsb2JhbC5wYXJzZUludDtcbnZhciBoZXggPSAvXlsrLV0/MFtYeF0vO1xudmFyIEZPUkNFRCA9ICRwYXJzZUludCh3aGl0ZXNwYWNlcyArICcwOCcpICE9PSA4IHx8ICRwYXJzZUludCh3aGl0ZXNwYWNlcyArICcweDE2JykgIT09IDIyO1xuXG4vLyBgcGFyc2VJbnRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1wYXJzZWludC1zdHJpbmctcmFkaXhcbm1vZHVsZS5leHBvcnRzID0gRk9SQ0VEID8gZnVuY3Rpb24gcGFyc2VJbnQoc3RyaW5nLCByYWRpeCkge1xuICB2YXIgUyA9IHRyaW0oU3RyaW5nKHN0cmluZykpO1xuICByZXR1cm4gJHBhcnNlSW50KFMsIChyYWRpeCA+Pj4gMCkgfHwgKGhleC50ZXN0KFMpID8gMTYgOiAxMCkpO1xufSA6ICRwYXJzZUludDtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlcicpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLnJlcGVhdGAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUucmVwZWF0XG5tb2R1bGUuZXhwb3J0cyA9ICcnLnJlcGVhdCB8fCBmdW5jdGlvbiByZXBlYXQoY291bnQpIHtcbiAgdmFyIHN0ciA9IFN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpKTtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuICB2YXIgbiA9IHRvSW50ZWdlcihjb3VudCk7XG4gIGlmIChuIDwgMCB8fCBuID09IEluZmluaXR5KSB0aHJvdyBSYW5nZUVycm9yKCdXcm9uZyBudW1iZXIgb2YgcmVwZXRpdGlvbnMnKTtcbiAgZm9yICg7biA+IDA7IChuID4+Pj0gMSkgJiYgKHN0ciArPSBzdHIpKSBpZiAobiAmIDEpIHJlc3VsdCArPSBzdHI7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxuLy8gYHRoaXNOdW1iZXJWYWx1ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRoaXNudW1iZXJ2YWx1ZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnbnVtYmVyJyAmJiBjbGFzc29mKHZhbHVlKSAhPSAnTnVtYmVyJykge1xuICAgIHRocm93IFR5cGVFcnJvcignSW5jb3JyZWN0IGludm9jYXRpb24nKTtcbiAgfVxuICByZXR1cm4gK3ZhbHVlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyJyk7XG52YXIgdGhpc051bWJlclZhbHVlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RoaXMtbnVtYmVyLXZhbHVlJyk7XG52YXIgcmVwZWF0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy1yZXBlYXQnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG52YXIgbmF0aXZlVG9GaXhlZCA9IDEuMC50b0ZpeGVkO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcblxudmFyIHBvdyA9IGZ1bmN0aW9uICh4LCBuLCBhY2MpIHtcbiAgcmV0dXJuIG4gPT09IDAgPyBhY2MgOiBuICUgMiA9PT0gMSA/IHBvdyh4LCBuIC0gMSwgYWNjICogeCkgOiBwb3coeCAqIHgsIG4gLyAyLCBhY2MpO1xufTtcblxudmFyIGxvZyA9IGZ1bmN0aW9uICh4KSB7XG4gIHZhciBuID0gMDtcbiAgdmFyIHgyID0geDtcbiAgd2hpbGUgKHgyID49IDQwOTYpIHtcbiAgICBuICs9IDEyO1xuICAgIHgyIC89IDQwOTY7XG4gIH1cbiAgd2hpbGUgKHgyID49IDIpIHtcbiAgICBuICs9IDE7XG4gICAgeDIgLz0gMjtcbiAgfSByZXR1cm4gbjtcbn07XG5cbnZhciBGT1JDRUQgPSBuYXRpdmVUb0ZpeGVkICYmIChcbiAgMC4wMDAwOC50b0ZpeGVkKDMpICE9PSAnMC4wMDAnIHx8XG4gIDAuOS50b0ZpeGVkKDApICE9PSAnMScgfHxcbiAgMS4yNTUudG9GaXhlZCgyKSAhPT0gJzEuMjUnIHx8XG4gIDEwMDAwMDAwMDAwMDAwMDAxMjguMC50b0ZpeGVkKDApICE9PSAnMTAwMDAwMDAwMDAwMDAwMDEyOCdcbikgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gVjggfiBBbmRyb2lkIDQuMy1cbiAgbmF0aXZlVG9GaXhlZC5jYWxsKHt9KTtcbn0pO1xuXG4vLyBgTnVtYmVyLnByb3RvdHlwZS50b0ZpeGVkYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbnVtYmVyLnByb3RvdHlwZS50b2ZpeGVkXG4kKHsgdGFyZ2V0OiAnTnVtYmVyJywgcHJvdG86IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1zdGF0ZW1lbnRzXG4gIHRvRml4ZWQ6IGZ1bmN0aW9uIHRvRml4ZWQoZnJhY3Rpb25EaWdpdHMpIHtcbiAgICB2YXIgbnVtYmVyID0gdGhpc051bWJlclZhbHVlKHRoaXMpO1xuICAgIHZhciBmcmFjdERpZ2l0cyA9IHRvSW50ZWdlcihmcmFjdGlvbkRpZ2l0cyk7XG4gICAgdmFyIGRhdGEgPSBbMCwgMCwgMCwgMCwgMCwgMF07XG4gICAgdmFyIHNpZ24gPSAnJztcbiAgICB2YXIgcmVzdWx0ID0gJzAnO1xuICAgIHZhciBlLCB6LCBqLCBrO1xuXG4gICAgdmFyIG11bHRpcGx5ID0gZnVuY3Rpb24gKG4sIGMpIHtcbiAgICAgIHZhciBpbmRleCA9IC0xO1xuICAgICAgdmFyIGMyID0gYztcbiAgICAgIHdoaWxlICgrK2luZGV4IDwgNikge1xuICAgICAgICBjMiArPSBuICogZGF0YVtpbmRleF07XG4gICAgICAgIGRhdGFbaW5kZXhdID0gYzIgJSAxZTc7XG4gICAgICAgIGMyID0gZmxvb3IoYzIgLyAxZTcpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgZGl2aWRlID0gZnVuY3Rpb24gKG4pIHtcbiAgICAgIHZhciBpbmRleCA9IDY7XG4gICAgICB2YXIgYyA9IDA7XG4gICAgICB3aGlsZSAoLS1pbmRleCA+PSAwKSB7XG4gICAgICAgIGMgKz0gZGF0YVtpbmRleF07XG4gICAgICAgIGRhdGFbaW5kZXhdID0gZmxvb3IoYyAvIG4pO1xuICAgICAgICBjID0gKGMgJSBuKSAqIDFlNztcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIGRhdGFUb1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpbmRleCA9IDY7XG4gICAgICB2YXIgcyA9ICcnO1xuICAgICAgd2hpbGUgKC0taW5kZXggPj0gMCkge1xuICAgICAgICBpZiAocyAhPT0gJycgfHwgaW5kZXggPT09IDAgfHwgZGF0YVtpbmRleF0gIT09IDApIHtcbiAgICAgICAgICB2YXIgdCA9IFN0cmluZyhkYXRhW2luZGV4XSk7XG4gICAgICAgICAgcyA9IHMgPT09ICcnID8gdCA6IHMgKyByZXBlYXQuY2FsbCgnMCcsIDcgLSB0Lmxlbmd0aCkgKyB0O1xuICAgICAgICB9XG4gICAgICB9IHJldHVybiBzO1xuICAgIH07XG5cbiAgICBpZiAoZnJhY3REaWdpdHMgPCAwIHx8IGZyYWN0RGlnaXRzID4gMjApIHRocm93IFJhbmdlRXJyb3IoJ0luY29ycmVjdCBmcmFjdGlvbiBkaWdpdHMnKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKG51bWJlciAhPSBudW1iZXIpIHJldHVybiAnTmFOJztcbiAgICBpZiAobnVtYmVyIDw9IC0xZTIxIHx8IG51bWJlciA+PSAxZTIxKSByZXR1cm4gU3RyaW5nKG51bWJlcik7XG4gICAgaWYgKG51bWJlciA8IDApIHtcbiAgICAgIHNpZ24gPSAnLSc7XG4gICAgICBudW1iZXIgPSAtbnVtYmVyO1xuICAgIH1cbiAgICBpZiAobnVtYmVyID4gMWUtMjEpIHtcbiAgICAgIGUgPSBsb2cobnVtYmVyICogcG93KDIsIDY5LCAxKSkgLSA2OTtcbiAgICAgIHogPSBlIDwgMCA/IG51bWJlciAqIHBvdygyLCAtZSwgMSkgOiBudW1iZXIgLyBwb3coMiwgZSwgMSk7XG4gICAgICB6ICo9IDB4MTAwMDAwMDAwMDAwMDA7XG4gICAgICBlID0gNTIgLSBlO1xuICAgICAgaWYgKGUgPiAwKSB7XG4gICAgICAgIG11bHRpcGx5KDAsIHopO1xuICAgICAgICBqID0gZnJhY3REaWdpdHM7XG4gICAgICAgIHdoaWxlIChqID49IDcpIHtcbiAgICAgICAgICBtdWx0aXBseSgxZTcsIDApO1xuICAgICAgICAgIGogLT0gNztcbiAgICAgICAgfVxuICAgICAgICBtdWx0aXBseShwb3coMTAsIGosIDEpLCAwKTtcbiAgICAgICAgaiA9IGUgLSAxO1xuICAgICAgICB3aGlsZSAoaiA+PSAyMykge1xuICAgICAgICAgIGRpdmlkZSgxIDw8IDIzKTtcbiAgICAgICAgICBqIC09IDIzO1xuICAgICAgICB9XG4gICAgICAgIGRpdmlkZSgxIDw8IGopO1xuICAgICAgICBtdWx0aXBseSgxLCAxKTtcbiAgICAgICAgZGl2aWRlKDIpO1xuICAgICAgICByZXN1bHQgPSBkYXRhVG9TdHJpbmcoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG11bHRpcGx5KDAsIHopO1xuICAgICAgICBtdWx0aXBseSgxIDw8IC1lLCAwKTtcbiAgICAgICAgcmVzdWx0ID0gZGF0YVRvU3RyaW5nKCkgKyByZXBlYXQuY2FsbCgnMCcsIGZyYWN0RGlnaXRzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGZyYWN0RGlnaXRzID4gMCkge1xuICAgICAgayA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICByZXN1bHQgPSBzaWduICsgKGsgPD0gZnJhY3REaWdpdHNcbiAgICAgICAgPyAnMC4nICsgcmVwZWF0LmNhbGwoJzAnLCBmcmFjdERpZ2l0cyAtIGspICsgcmVzdWx0XG4gICAgICAgIDogcmVzdWx0LnNsaWNlKDAsIGsgLSBmcmFjdERpZ2l0cykgKyAnLicgKyByZXN1bHQuc2xpY2UoayAtIGZyYWN0RGlnaXRzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IHNpZ24gKyByZXN1bHQ7XG4gICAgfSByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHBhcnNlSW50SW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbnVtYmVyLXBhcnNlLWludCcpO1xuXG4vLyBgcGFyc2VJbnRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1wYXJzZWludC1zdHJpbmctcmFkaXhcbiQoeyBnbG9iYWw6IHRydWUsIGZvcmNlZDogcGFyc2VJbnQgIT0gcGFyc2VJbnRJbXBsZW1lbnRhdGlvbiB9LCB7XG4gIHBhcnNlSW50OiBwYXJzZUludEltcGxlbWVudGF0aW9uXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=