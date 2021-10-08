(self["webpackChunkintranetv3"] = self["webpackChunkintranetv3"] || []).push([["adm.quizz"],{

/***/ "./assets/js/pages/adm.quizz.js":
/*!**************************************!*\
  !*** ./assets/js/pages/adm.quizz.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");

// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.quizz.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 28/11/2019 19:40
$(document).on('change', 'input[type=radio][name="questionnaire_question[type]"]', function () {
  var $type = $('input[type=radio][name="questionnaire_question[type]"]:checked').val();
  var $div = $('#reponses');
  var $html = '';

  if ($type === 'qcu') {
    $html = $html + addChampQcu(1);
    $html = $html + '<a href="#" id="addreponseqcu" class="btn btn-success" data-nb="1"><i class="fa fa-plus"></i>Ajouter une réponse</a>';
  } else if ($type === 'qcm') {
    $html = $html + addChampQcm(1);
    $html = $html + '<a href="#" id="addreponseqcm" class="btn btn-success" data-nb="1"><i class="fa fa-plus"></i>Ajouter une réponse</a>';
  } else if ($type === 'yesno') {
    $html = '<div class="form-group">';
    $html = $html + '<label for="question_yesno" class="required">Texte d\'aide pour la réponse Oui/Non</label>';
    $html = $html + '<input type="text" id="question_yesno" name="question_yesno" class="form-control">';
    $html = $html + '</div>';
    $html = $html + '<div class="form-group">';
    $html = $html + '<label for="question_libre_oui" class="required">Texte pour le "oui"</label>';
    $html = $html + '<input type="text" id="question_libre_oui" name="question_libre_oui" required="required" class="form-control" value="Oui">';
    $html = $html + '</div>';
    $html = $html + '<div class="form-group">';
    $html = $html + '<label for="question_libre_non" class="required">Texte pour le "non"</label>';
    $html = $html + '<input type="text" id="question_libre_non" name="question_libre_non" required="required" class="form-control" value="Non">';
    $html = $html + '</div>';
  } else if ($type === 'echelle') {
    $html = '<div class="form-group">';
    $html = $html + '<label for="question_min" class="required">Question à échelle. Indiquer la valeur minimale</label>';
    $html = $html + '<input type="text" id="question_min" name="question_min" required="required" class="form-control" value="1">';
    $html = $html + '</div>';
    $html = $html + '<div class="form-group">';
    $html = $html + '<label for="question_min_sens" class="required">Signification valeur minimale</label>';
    $html = $html + '<input type="text" id="question_min_sens" name="question_min_sens" required="required" class="form-control">';
    $html = $html + '</div>';
    $html = $html + '<div class="form-group">';
    $html = $html + '<label for="question_max" class="required">Question à échelle. Indiquer la valeur maximale</label>';
    $html = $html + '<input type="text" id="question_max" name="question_max" required="required" class="form-control" value="10">';
    $html = $html + '</div>';
    $html = $html + '<div class="form-group">';
    $html = $html + '<label for="question_max_sens" class="required">Signification valeur maximale</label>';
    $html = $html + '<input type="text" id="question_max_sens" name="question_max_sens" required="required" class="form-control">';
    $html = $html + '</div>';
  } else if ($type === 'libre') {
    $html = '<div class="form-group">';
    $html = $html + '<label for="question_libre">Texte d\'aide pour la réponse libre</label>';
    $html = $html + '<input type="text" id="question_libre" name="question_libre" class="form-control">';
    $html = $html + '</div>';
  } else {
    $html = '<div class="alert alert-info">Choisir d\'abord le type de question</div>';
  }

  $div.empty().append($html);
});
$(document).on('click', '#addreponseqcu', function () {
  var $nb = parseInt($(this).data('nb')) + 1;
  $(this).before(addChampQcu($nb));
  $(this).data('nb', $nb);
});
$(document).on('click', '#addreponseqcm', function () {
  var $nb = parseInt($(this).data('nb')) + 1;
  $(this).before(addChampQcm($nb));
  $(this).data('nb', $nb);
});

function addChampQcu($nb) {
  var $html = '<div class="form-group">';
  $html = $html + '<label for="question_qcu[' + $nb + ']" class="required">Libellé réponse ' + $nb + '</label>';
  $html = $html + '<input type="text" id="question_qcu[' + $nb + ']" name="question_qcu[' + $nb + ']" required="required" class="form-control">';
  $html = $html + '</div>';
  $html = $html + '<div class="form-group">';
  $html = $html + '<label for="question_qcu_valeur[' + $nb + ']" class="required">Valeur pour la réponse ' + $nb + '</label>';
  $html = $html + '<input type="text" id="question_qcu_valeur[' + $nb + ']" name="question_qcu_valeur[' + $nb + ']" required="required" class="form-control">';
  $html = $html + '</div>';
  return $html;
}

function addChampQcm($nb) {
  var $html = '<div class="form-group">';
  $html = $html + '<label for="question_qcm[' + $nb + ']" class="required">Libellé réponse ' + $nb + '</label>';
  $html = $html + '<input type="text" id="question_qcm[' + $nb + ']" name="question_qcm[' + $nb + ']" required="required" class="form-control">';
  $html = $html + '</div>';
  $html = $html + '<div class="form-group">';
  $html = $html + '<label for="question_qcm_valeur[' + $nb + ']" class="required">Valeur pour la réponse ' + $nb + '</label>';
  $html = $html + '<input type="text" id="question_qcm_valeur[' + $nb + ']" name="question_qcm_valeur[' + $nb + ']" required="required" class="form-control">';
  $html = $html + '</div>';
  return $html;
}

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

/***/ "./node_modules/core-js/internals/string-trim.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "./node_modules/core-js/internals/whitespaces.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/whitespaces.js ***!
  \*******************************************************/
/***/ ((module) => {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_export_js"], () => (__webpack_exec__("./assets/js/pages/adm.quizz.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vYXNzZXRzL2pzL3BhZ2VzL2FkbS5xdWl6ei5qcyIsIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL251bWJlci1wYXJzZS1pbnQuanMiLCJ3ZWJwYWNrOi8vaW50cmFuZXR2My8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctdHJpbS5qcyIsIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3doaXRlc3BhY2VzLmpzIiwid2VicGFjazovL2ludHJhbmV0djMvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnBhcnNlLWludC5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJvbiIsIiR0eXBlIiwidmFsIiwiJGRpdiIsIiRodG1sIiwiYWRkQ2hhbXBRY3UiLCJhZGRDaGFtcFFjbSIsImVtcHR5IiwiYXBwZW5kIiwiJG5iIiwicGFyc2VJbnQiLCJkYXRhIiwiYmVmb3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsRUFBWixDQUFlLFFBQWYsRUFBeUIsd0RBQXpCLEVBQW1GLFlBQVk7QUFDN0YsTUFBSUMsS0FBSyxHQUFHSCxDQUFDLENBQUMsZ0VBQUQsQ0FBRCxDQUFvRUksR0FBcEUsRUFBWjtBQUNBLE1BQUlDLElBQUksR0FBR0wsQ0FBQyxDQUFDLFdBQUQsQ0FBWjtBQUNBLE1BQUlNLEtBQUssR0FBRyxFQUFaOztBQUVBLE1BQUlILEtBQUssS0FBSyxLQUFkLEVBQXFCO0FBQ25CRyxTQUFLLEdBQUdBLEtBQUssR0FBR0MsV0FBVyxDQUFDLENBQUQsQ0FBM0I7QUFDQUQsU0FBSyxHQUFHQSxLQUFLLEdBQUcsc0hBQWhCO0FBQ0QsR0FIRCxNQUdPLElBQUlILEtBQUssS0FB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YykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9wYWdlcy9hZG0ucXVpenouanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAyOC8xMS8yMDE5IDE5OjQwXG5cbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnaW5wdXRbdHlwZT1yYWRpb11bbmFtZT1cInF1ZXN0aW9ubmFpcmVfcXVlc3Rpb25bdHlwZV1cIl0nLCBmdW5jdGlvbiAoKSB7XG4gIGxldCAkdHlwZSA9ICQoJ2lucHV0W3R5cGU9cmFkaW9dW25hbWU9XCJxdWVzdGlvbm5haXJlX3F1ZXN0aW9uW3R5cGVdXCJdOmNoZWNrZWQnKS52YWwoKVxuICBsZXQgJGRpdiA9ICQoJyNyZXBvbnNlcycpXG4gIGxldCAkaHRtbCA9ICcnXG5cbiAgaWYgKCR0eXBlID09PSAncWN1Jykge1xuICAgICRodG1sID0gJGh0bWwgKyBhZGRDaGFtcFFjdSgxKVxuICAgICRodG1sID0gJGh0bWwgKyAnPGEgaHJlZj1cIiNcIiBpZD1cImFkZHJlcG9uc2VxY3VcIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIGRhdGEtbmI9XCIxXCI+PGkgY2xhc3M9XCJmYSBmYS1wbHVzXCI+PC9pPkFqb3V0ZXIgdW5lIHLDqXBvbnNlPC9hPidcbiAgfSBlbHNlIGlmICgkdHlwZSA9PT0gJ3FjbScpIHtcbiAgICAkaHRtbCA9ICRodG1sICsgYWRkQ2hhbXBRY20oMSlcbiAgICAkaHRtbCA9ICRodG1sICsgJzxhIGhyZWY9XCIjXCIgaWQ9XCJhZGRyZXBvbnNlcWNtXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIiBkYXRhLW5iPVwiMVwiPjxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiPjwvaT5Bam91dGVyIHVuZSByw6lwb25zZTwvYT4nXG4gIH0gZWxzZSBpZiAoJHR5cGUgPT09ICd5ZXNubycpIHtcbiAgICAkaHRtbCA9ICc8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPidcbiAgICAkaHRtbCA9ICRodG1sICsgJzxsYWJlbCBmb3I9XCJxdWVzdGlvbl95ZXNub1wiIGNsYXNzPVwicmVxdWlyZWRcIj5UZXh0ZSBkXFwnYWlkZSBwb3VyIGxhIHLDqXBvbnNlIE91aS9Ob248L2xhYmVsPidcbiAgICAkaHRtbCA9ICRodG1sICsgJzxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwicXVlc3Rpb25feWVzbm9cIiBuYW1lPVwicXVlc3Rpb25feWVzbm9cIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPidcbiAgICAkaHRtbCA9ICRodG1sICsgJzwvZGl2PidcbiAgICAkaHRtbCA9ICRodG1sICsgJzxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+J1xuICAgICRodG1sID0gJGh0bWwgKyAnPGxhYmVsIGZvcj1cInF1ZXN0aW9uX2xpYnJlX291aVwiIGNsYXNzPVwicmVxdWlyZWRcIj5UZXh0ZSBwb3VyIGxlIFwib3VpXCI8L2xhYmVsPidcbiAgICAkaHRtbCA9ICRodG1sICsgJzxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwicXVlc3Rpb25fbGlicmVfb3VpXCIgbmFtZT1cInF1ZXN0aW9uX2xpYnJlX291aVwiIHJlcXVpcmVkPVwicmVxdWlyZWRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHZhbHVlPVwiT3VpXCI+J1xuICAgICRodG1sID0gJGh0bWwgKyAnPC9kaXY+J1xuICAgICRodG1sID0gJGh0bWwgKyAnPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4nXG4gICAgJGh0bWwgPSAkaHRtbCArICc8bGFiZWwgZm9yPVwicXVlc3Rpb25fbGlicmVfbm9uXCIgY2xhc3M9XCJyZXF1aXJlZFwiPlRleHRlIHBvdXIgbGUgXCJub25cIjwvbGFiZWw+J1xuICAgICRodG1sID0gJGh0bWwgKyAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJxdWVzdGlvbl9saWJyZV9ub25cIiBuYW1lPVwicXVlc3Rpb25fbGlicmVfbm9uXCIgcmVxdWlyZWQ9XCJyZXF1aXJlZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9XCJOb25cIj4nXG4gICAgJGh0bWwgPSAkaHRtbCArICc8L2Rpdj4nXG4gIH0gZWxzZSBpZiAoJHR5cGUgPT09ICdlY2hlbGxlJykge1xuICAgICRodG1sID0gJzxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+J1xuICAgICRodG1sID0gJGh0bWwgKyAnPGxhYmVsIGZvcj1cInF1ZXN0aW9uX21pblwiIGNsYXNzPVwicmVxdWlyZWRcIj5RdWVzdGlvbiDDoCDDqWNoZWxsZS4gSW5kaXF1ZXIgbGEgdmFsZXVyIG1pbmltYWxlPC9sYWJlbD4nXG4gICAgJGh0bWwgPSAkaHRtbCArICc8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInF1ZXN0aW9uX21pblwiIG5hbWU9XCJxdWVzdGlvbl9taW5cIiByZXF1aXJlZD1cInJlcXVpcmVkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT1cIjFcIj4nXG4gICAgJGh0bWwgPSAkaHRtbCArICc8L2Rpdj4nXG4gICAgJGh0bWwgPSAkaHRtbCArICc8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPidcbiAgICAkaHRtbCA9ICRodG1sICsgJzxsYWJlbCBmb3I9XCJxdWVzdGlvbl9taW5fc2Vuc1wiIGNsYXNzPVwicmVxdWlyZWRcIj5TaWduaWZpY2F0aW9uIHZhbGV1ciBtaW5pbWFsZTwvbGFiZWw+J1xuICAgICRodG1sID0gJGh0bWwgKyAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJxdWVzdGlvbl9taW5fc2Vuc1wiIG5hbWU9XCJxdWVzdGlvbl9taW5fc2Vuc1wiIHJlcXVpcmVkPVwicmVxdWlyZWRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPidcbiAgICAkaHRtbCA9ICRodG1sICsgJzwvZGl2PidcbiAgICAkaHRtbCA9ICRodG1sICsgJzxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+J1xuICAgICRodG1sID0gJGh0bWwgKyAnPGxhYmVsIGZvcj1cInF1ZXN0aW9uX21heFwiIGNsYXNzPVwicmVxdWlyZWRcIj5RdWVzdGlvbiDDoCDDqWNoZWxsZS4gSW5kaXF1ZXIgbGEgdmFsZXVyIG1heGltYWxlPC9sYWJlbD4nXG4gICAgJGh0bWwgPSAkaHRtbCArICc8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInF1ZXN0aW9uX21heFwiIG5hbWU9XCJxdWVzdGlvbl9tYXhcIiByZXF1aXJlZD1cInJlcXVpcmVkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT1cIjEwXCI+J1xuICAgICRodG1sID0gJGh0bWwgKyAnPC9kaXY+J1xuICAgICRodG1sID0gJGh0bWwgKyAnPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4nXG4gICAgJGh0bWwgPSAkaHRtbCArICc8bGFiZWwgZm9yPVwicXVlc3Rpb25fbWF4X3NlbnNcIiBjbGFzcz1cInJlcXVpcmVkXCI+U2lnbmlmaWNhdGlvbiB2YWxldXIgbWF4aW1hbGU8L2xhYmVsPidcbiAgICAkaHRtbCA9ICRodG1sICsgJzxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwicXVlc3Rpb25fbWF4X3NlbnNcIiBuYW1lPVwicXVlc3Rpb25fbWF4X3NlbnNcIiByZXF1aXJlZD1cInJlcXVpcmVkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj4nXG4gICAgJGh0bWwgPSAkaHRtbCArICc8L2Rpdj4nXG5cbiAgfSBlbHNlIGlmICgkdHlwZSA9PT0gJ2xpYnJlJykge1xuICAgICRodG1sID0gJzxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+J1xuICAgICRodG1sID0gJGh0bWwgKyAnPGxhYmVsIGZvcj1cInF1ZXN0aW9uX2xpYnJlXCI+VGV4dGUgZFxcJ2FpZGUgcG91ciBsYSByw6lwb25zZSBsaWJyZTwvbGFiZWw+J1xuICAgICRodG1sID0gJGh0bWwgKyAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJxdWVzdGlvbl9saWJyZVwiIG5hbWU9XCJxdWVzdGlvbl9saWJyZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+J1xuICAgICRodG1sID0gJGh0bWwgKyAnPC9kaXY+J1xuICB9IGVsc2Uge1xuICAgICRodG1sID0gJzxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1pbmZvXCI+Q2hvaXNpciBkXFwnYWJvcmQgbGUgdHlwZSBkZSBxdWVzdGlvbjwvZGl2PidcbiAgfVxuICAkZGl2LmVtcHR5KCkuYXBwZW5kKCRodG1sKVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNhZGRyZXBvbnNlcWN1JywgZnVuY3Rpb24gKCkge1xuICBsZXQgJG5iID0gcGFyc2VJbnQoJCh0aGlzKS5kYXRhKCduYicpKSArIDFcbiAgJCh0aGlzKS5iZWZvcmUoYWRkQ2hhbXBRY3UoJG5iKSlcbiAgJCh0aGlzKS5kYXRhKCduYicsICRuYilcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjYWRkcmVwb25zZXFjbScsIGZ1bmN0aW9uICgpIHtcbiAgbGV0ICRuYiA9IHBhcnNlSW50KCQodGhpcykuZGF0YSgnbmInKSkgKyAxXG4gICQodGhpcykuYmVmb3JlKGFkZENoYW1wUWNtKCRuYikpXG4gICQodGhpcykuZGF0YSgnbmInLCAkbmIpXG59KVxuXG5mdW5jdGlvbiBhZGRDaGFtcFFjdSAoJG5iKSB7XG4gIGxldCAkaHRtbCA9ICc8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPidcbiAgJGh0bWwgPSAkaHRtbCArICc8bGFiZWwgZm9yPVwicXVlc3Rpb25fcWN1WycgKyAkbmIgKyAnXVwiIGNsYXNzPVwicmVxdWlyZWRcIj5MaWJlbGzDqSByw6lwb25zZSAnICsgJG5iICsgJzwvbGFiZWw+J1xuICAkaHRtbCA9ICRodG1sICsgJzxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwicXVlc3Rpb25fcWN1WycgKyAkbmIgKyAnXVwiIG5hbWU9XCJxdWVzdGlvbl9xY3VbJyArICRuYiArICddXCIgcmVxdWlyZWQ9XCJyZXF1aXJlZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+J1xuICAkaHRtbCA9ICRodG1sICsgJzwvZGl2PidcbiAgJGh0bWwgPSAkaHRtbCArICc8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPidcbiAgJGh0bWwgPSAkaHRtbCArICc8bGFiZWwgZm9yPVwicXVlc3Rpb25fcWN1X3ZhbGV1clsnICsgJG5iICsgJ11cIiBjbGFzcz1cInJlcXVpcmVkXCI+VmFsZXVyIHBvdXIgbGEgcsOpcG9uc2UgJyArICRuYiArICc8L2xhYmVsPidcbiAgJGh0bWwgPSAkaHRtbCArICc8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInF1ZXN0aW9uX3FjdV92YWxldXJbJyArICRuYiArICddXCIgbmFtZT1cInF1ZXN0aW9uX3FjdV92YWxldXJbJyArICRuYiArICddXCIgcmVxdWlyZWQ9XCJyZXF1aXJlZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+J1xuICAkaHRtbCA9ICRodG1sICsgJzwvZGl2PidcblxuICByZXR1cm4gJGh0bWxcbn1cblxuZnVuY3Rpb24gYWRkQ2hhbXBRY20gKCRuYikge1xuICBsZXQgJGh0bWwgPSAnPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4nXG4gICRodG1sID0gJGh0bWwgKyAnPGxhYmVsIGZvcj1cInF1ZXN0aW9uX3FjbVsnICsgJG5iICsgJ11cIiBjbGFzcz1cInJlcXVpcmVkXCI+TGliZWxsw6kgcsOpcG9uc2UgJyArICRuYiArICc8L2xhYmVsPidcbiAgJGh0bWwgPSAkaHRtbCArICc8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInF1ZXN0aW9uX3FjbVsnICsgJG5iICsgJ11cIiBuYW1lPVwicXVlc3Rpb25fcWNtWycgKyAkbmIgKyAnXVwiIHJlcXVpcmVkPVwicmVxdWlyZWRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPidcbiAgJGh0bWwgPSAkaHRtbCArICc8L2Rpdj4nXG4gICRodG1sID0gJGh0bWwgKyAnPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4nXG4gICRodG1sID0gJGh0bWwgKyAnPGxhYmVsIGZvcj1cInF1ZXN0aW9uX3FjbV92YWxldXJbJyArICRuYiArICddXCIgY2xhc3M9XCJyZXF1aXJlZFwiPlZhbGV1ciBwb3VyIGxhIHLDqXBvbnNlICcgKyAkbmIgKyAnPC9sYWJlbD4nXG4gICRodG1sID0gJGh0bWwgKyAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJxdWVzdGlvbl9xY21fdmFsZXVyWycgKyAkbmIgKyAnXVwiIG5hbWU9XCJxdWVzdGlvbl9xY21fdmFsZXVyWycgKyAkbmIgKyAnXVwiIHJlcXVpcmVkPVwicmVxdWlyZWRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPidcbiAgJGh0bWwgPSAkaHRtbCArICc8L2Rpdj4nXG5cbiAgcmV0dXJuICRodG1sXG59XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHRyaW0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0nKS50cmltO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciAkcGFyc2VJbnQgPSBnbG9iYWwucGFyc2VJbnQ7XG52YXIgaGV4ID0gL15bKy1dPzBbWHhdLztcbnZhciBGT1JDRUQgPSAkcGFyc2VJbnQod2hpdGVzcGFjZXMgKyAnMDgnKSAhPT0gOCB8fCAkcGFyc2VJbnQod2hpdGVzcGFjZXMgKyAnMHgxNicpICE9PSAyMjtcblxuLy8gYHBhcnNlSW50YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcGFyc2VpbnQtc3RyaW5nLXJhZGl4XG5tb2R1bGUuZXhwb3J0cyA9IEZPUkNFRCA/IGZ1bmN0aW9uIHBhcnNlSW50KHN0cmluZywgcmFkaXgpIHtcbiAgdmFyIFMgPSB0cmltKFN0cmluZyhzdHJpbmcpKTtcbiAgcmV0dXJuICRwYXJzZUludChTLCAocmFkaXggPj4+IDApIHx8IChoZXgudGVzdChTKSA/IDE2IDogMTApKTtcbn0gOiAkcGFyc2VJbnQ7XG4iLCJ2YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciB3aGl0ZXNwYWNlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93aGl0ZXNwYWNlcycpO1xuXG52YXIgd2hpdGVzcGFjZSA9ICdbJyArIHdoaXRlc3BhY2VzICsgJ10nO1xudmFyIGx0cmltID0gUmVnRXhwKCdeJyArIHdoaXRlc3BhY2UgKyB3aGl0ZXNwYWNlICsgJyonKTtcbnZhciBydHJpbSA9IFJlZ0V4cCh3aGl0ZXNwYWNlICsgd2hpdGVzcGFjZSArICcqJCcpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS57IHRyaW0sIHRyaW1TdGFydCwgdHJpbUVuZCwgdHJpbUxlZnQsIHRyaW1SaWdodCB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcykge1xuICAgIHZhciBzdHJpbmcgPSBTdHJpbmcocmVxdWlyZU9iamVjdENvZXJjaWJsZSgkdGhpcykpO1xuICAgIGlmIChUWVBFICYgMSkgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UobHRyaW0sICcnKTtcbiAgICBpZiAoVFlQRSAmIDIpIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKHJ0cmltLCAnJyk7XG4gICAgcmV0dXJuIHN0cmluZztcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgU3RyaW5nLnByb3RvdHlwZS57IHRyaW1MZWZ0LCB0cmltU3RhcnQgfWAgbWV0aG9kc1xuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbXN0YXJ0XG4gIHN0YXJ0OiBjcmVhdGVNZXRob2QoMSksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbVJpZ2h0LCB0cmltRW5kIH1gIG1ldGhvZHNcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1lbmRcbiAgZW5kOiBjcmVhdGVNZXRob2QoMiksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnRyaW1gIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbVxuICB0cmltOiBjcmVhdGVNZXRob2QoMylcbn07XG4iLCIvLyBhIHN0cmluZyBvZiBhbGwgdmFsaWQgdW5pY29kZSB3aGl0ZXNwYWNlc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbm1vZHVsZS5leHBvcnRzID0gJ1xcdTAwMDlcXHUwMDBBXFx1MDAwQlxcdTAwMENcXHUwMDBEXFx1MDAyMFxcdTAwQTBcXHUxNjgwXFx1MjAwMFxcdTIwMDFcXHUyMDAyXFx1MjAwM1xcdTIwMDRcXHUyMDA1XFx1MjAwNlxcdTIwMDdcXHUyMDA4XFx1MjAwOVxcdTIwMEFcXHUyMDJGXFx1MjA1RlxcdTMwMDBcXHUyMDI4XFx1MjAyOVxcdUZFRkYnO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgcGFyc2VJbnRJbXBsZW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9udW1iZXItcGFyc2UtaW50Jyk7XG5cbi8vIGBwYXJzZUludGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXBhcnNlaW50LXN0cmluZy1yYWRpeFxuJCh7IGdsb2JhbDogdHJ1ZSwgZm9yY2VkOiBwYXJzZUludCAhPSBwYXJzZUludEltcGxlbWVudGF0aW9uIH0sIHtcbiAgcGFyc2VJbnQ6IHBhcnNlSW50SW1wbGVtZW50YXRpb25cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==