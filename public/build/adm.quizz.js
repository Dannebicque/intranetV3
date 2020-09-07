(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adm.quizz"],{

/***/ "./assets/js/pages/adm.quizz.js":
/*!**************************************!*\
  !*** ./assets/js/pages/adm.quizz.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {__webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");

// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.quizz.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 28/11/2019 19:40
$(document).on('change', 'input[type=radio][name="quizz_question[type]"]', function () {
  var $type = $('input[type=radio][name="quizz_question[type]"]:checked').val();
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

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

/***/ "./node_modules/core-js/internals/string-trim.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "./node_modules/core-js/internals/whitespaces.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/whitespaces.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


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

},[["./assets/js/pages/adm.quizz.js","runtime","vendors~absences~adm.absences~adm.alternances~adm.articles~adm.bornes~adm.configuration~adm.edt~adm.~cf684355","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~865432e1"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvYWRtLnF1aXp6LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9udW1iZXItcGFyc2UtaW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctdHJpbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2hpdGVzcGFjZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5wYXJzZS1pbnQuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50Iiwib24iLCIkdHlwZSIsInZhbCIsIiRkaXYiLCIkaHRtbCIsImFkZENoYW1wUWN1IiwiYWRkQ2hhbXBRY20iLCJlbXB0eSIsImFwcGVuZCIsIiRuYiIsInBhcnNlSW50IiwiZGF0YSIsImJlZm9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEVBQVosQ0FBZSxRQUFmLEVBQXlCLGdEQUF6QixFQUEyRSxZQUFZO0FBQ3JGLE1BQUlDLEtBQUssR0FBR0gsQ0FBQyxDQUFDLHdEQUFELENBQUQsQ0FBNERJLEdBQTVELEVBQVo7QUFDQSxNQUFJQyxJQUFJLEdBQUdMLENBQUMsQ0FBQyxXQUFELENBQVo7QUFDQSxNQUFJTSxLQUFLLEdBQUcsRUFBWjs7QUFFQSxNQUFJSCxLQUFLLEtBQUssS0FBZCxFQUFxQjtBQUNuQkcsU0FBSyxHQUFHQSxLQUFLLEdBQUdDLFdBQVcsQ0FBQyxDQUFELENBQTNCO0FBQ0FELFNBQUssR0FBR0EsS0FBSyxHQUFHLHNIQUFoQjtBQUNELEdBSEQsTUFHTyxJQUFJSCxLQUFLLEtBQUssS0FBZCxFQUFxQjtBQUMxQkcsU0FBSyxHQUFHQSxLQUFLLEdBQUdFLFdBQVcsQ0FB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QUdBLEtBQUssR0FBRyxRQUFoQjtBQUNBQSxPQUFLLEdBQUdBLEtBQUssR0FBRywwQkFBaEI7QUFDQUEsT0FBSyxHQUFHQSxLQUFLLEdBQUcsa0NBQVIsR0FBNkNLLEdBQTdDLEdBQW1ELDZDQUFuRCxHQUFtR0EsR0FBbkcsR0FBeUcsVUFBakg7QUFDQUwsT0FBSyxHQUFHQSxLQUFLLEdBQUcsNkNBQVIsR0FBd0RLLEdBQXhELEdBQThELCtCQUE5RCxHQUFnR0EsR0FBaEcsR0FBc0csOENBQTlHO0FBQ0FMLE9BQUssR0FBR0EsS0FBSyxHQUFHLFFBQWhCO0FBRUEsU0FBT0EsS0FBUDtBQUNELEM7Ozs7Ozs7Ozs7OztBQy9GRCxhQUFhLG1CQUFPLENBQUMsdUVBQXFCO0FBQzFDLFdBQVcsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDN0Msa0JBQWtCLG1CQUFPLENBQUMsaUZBQTBCOztBQUVwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ2JELDZCQUE2QixtQkFBTyxDQUFDLDJHQUF1QztBQUM1RSxrQkFBa0IsbUJBQU8sQ0FBQyxpRkFBMEI7O0FBRXBEO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsZ0RBQWdEO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0Isc0JBQXNCO0FBQzlDO0FBQ0E7QUFDQSx3QkFBd0IscUJBQXFCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDRkEsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyw2QkFBNkIsbUJBQU8sQ0FBQywyRkFBK0I7O0FBRXBFO0FBQ0E7QUFDQSxHQUFHLDJEQUEyRDtBQUM5RDtBQUNBLENBQUMiLCJmaWxlIjoiYWRtLnF1aXp6LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3BhZ2VzL2FkbS5xdWl6ei5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDI4LzExLzIwMTkgMTk6NDBcblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICdpbnB1dFt0eXBlPXJhZGlvXVtuYW1lPVwicXVpenpfcXVlc3Rpb25bdHlwZV1cIl0nLCBmdW5jdGlvbiAoKSB7XG4gIGxldCAkdHlwZSA9ICQoJ2lucHV0W3R5cGU9cmFkaW9dW25hbWU9XCJxdWl6el9xdWVzdGlvblt0eXBlXVwiXTpjaGVja2VkJykudmFsKClcbiAgbGV0ICRkaXYgPSAkKCcjcmVwb25zZXMnKVxuICBsZXQgJGh0bWwgPSAnJ1xuXG4gIGlmICgkdHlwZSA9PT0gJ3FjdScpIHtcbiAgICAkaHRtbCA9ICRodG1sICsgYWRkQ2hhbXBRY3UoMSlcbiAgICAkaHRtbCA9ICRodG1sICsgJzxhIGhyZWY9XCIjXCIgaWQ9XCJhZGRyZXBvbnNlcWN1XCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIiBkYXRhLW5iPVwiMVwiPjxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiPjwvaT5Bam91dGVyIHVuZSByw6lwb25zZTwvYT4nXG4gIH0gZWxzZSBpZiAoJHR5cGUgPT09ICdxY20nKSB7XG4gICAgJGh0bWwgPSAkaHRtbCArIGFkZENoYW1wUWNtKDEpXG4gICAgJGh0bWwgPSAkaHRtbCArICc8YSBocmVmPVwiI1wiIGlkPVwiYWRkcmVwb25zZXFjbVwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCIgZGF0YS1uYj1cIjFcIj48aSBjbGFzcz1cImZhIGZhLXBsdXNcIj48L2k+QWpvdXRlciB1bmUgcsOpcG9uc2U8L2E+J1xuICB9IGVsc2UgaWYgKCR0eXBlID09PSAneWVzbm8nKSB7XG4gICAgJGh0bWwgPSAnPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4nXG4gICAgJGh0bWwgPSAkaHRtbCArICc8bGFiZWwgZm9yPVwicXVlc3Rpb25feWVzbm9cIiBjbGFzcz1cInJlcXVpcmVkXCI+VGV4dGUgZFxcJ2FpZGUgcG91ciBsYSByw6lwb25zZSBPdWkvTm9uPC9sYWJlbD4nXG4gICAgJGh0bWwgPSAkaHRtbCArICc8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInF1ZXN0aW9uX3llc25vXCIgbmFtZT1cInF1ZXN0aW9uX3llc25vXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj4nXG4gICAgJGh0bWwgPSAkaHRtbCArICc8L2Rpdj4nXG4gICAgJGh0bWwgPSAkaHRtbCArICc8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPidcbiAgICAkaHRtbCA9ICRodG1sICsgJzxsYWJlbCBmb3I9XCJxdWVzdGlvbl9saWJyZV9vdWlcIiBjbGFzcz1cInJlcXVpcmVkXCI+VGV4dGUgcG91ciBsZSBcIm91aVwiPC9sYWJlbD4nXG4gICAgJGh0bWwgPSAkaHRtbCArICc8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInF1ZXN0aW9uX2xpYnJlX291aVwiIG5hbWU9XCJxdWVzdGlvbl9saWJyZV9vdWlcIiByZXF1aXJlZD1cInJlcXVpcmVkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT1cIk91aVwiPidcbiAgICAkaHRtbCA9ICRodG1sICsgJzwvZGl2PidcbiAgICAkaHRtbCA9ICRodG1sICsgJzxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+J1xuICAgICRodG1sID0gJGh0bWwgKyAnPGxhYmVsIGZvcj1cInF1ZXN0aW9uX2xpYnJlX25vblwiIGNsYXNzPVwicmVxdWlyZWRcIj5UZXh0ZSBwb3VyIGxlIFwibm9uXCI8L2xhYmVsPidcbiAgICAkaHRtbCA9ICRodG1sICsgJzxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwicXVlc3Rpb25fbGlicmVfbm9uXCIgbmFtZT1cInF1ZXN0aW9uX2xpYnJlX25vblwiIHJlcXVpcmVkPVwicmVxdWlyZWRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHZhbHVlPVwiTm9uXCI+J1xuICAgICRodG1sID0gJGh0bWwgKyAnPC9kaXY+J1xuICB9IGVsc2UgaWYgKCR0eXBlID09PSAnZWNoZWxsZScpIHtcbiAgICAkaHRtbCA9ICc8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPidcbiAgICAkaHRtbCA9ICRodG1sICsgJzxsYWJlbCBmb3I9XCJxdWVzdGlvbl9taW5cIiBjbGFzcz1cInJlcXVpcmVkXCI+UXVlc3Rpb24gw6Agw6ljaGVsbGUuIEluZGlxdWVyIGxhIHZhbGV1ciBtaW5pbWFsZTwvbGFiZWw+J1xuICAgICRodG1sID0gJGh0bWwgKyAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJxdWVzdGlvbl9taW5cIiBuYW1lPVwicXVlc3Rpb25fbWluXCIgcmVxdWlyZWQ9XCJyZXF1aXJlZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9XCIxXCI+J1xuICAgICRodG1sID0gJGh0bWwgKyAnPC9kaXY+J1xuICAgICRodG1sID0gJGh0bWwgKyAnPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4nXG4gICAgJGh0bWwgPSAkaHRtbCArICc8bGFiZWwgZm9yPVwicXVlc3Rpb25fbWluX3NlbnNcIiBjbGFzcz1cInJlcXVpcmVkXCI+U2lnbmlmaWNhdGlvbiB2YWxldXIgbWluaW1hbGU8L2xhYmVsPidcbiAgICAkaHRtbCA9ICRodG1sICsgJzxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwicXVlc3Rpb25fbWluX3NlbnNcIiBuYW1lPVwicXVlc3Rpb25fbWluX3NlbnNcIiByZXF1aXJlZD1cInJlcXVpcmVkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj4nXG4gICAgJGh0bWwgPSAkaHRtbCArICc8L2Rpdj4nXG4gICAgJGh0bWwgPSAkaHRtbCArICc8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPidcbiAgICAkaHRtbCA9ICRodG1sICsgJzxsYWJlbCBmb3I9XCJxdWVzdGlvbl9tYXhcIiBjbGFzcz1cInJlcXVpcmVkXCI+UXVlc3Rpb24gw6Agw6ljaGVsbGUuIEluZGlxdWVyIGxhIHZhbGV1ciBtYXhpbWFsZTwvbGFiZWw+J1xuICAgICRodG1sID0gJGh0bWwgKyAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJxdWVzdGlvbl9tYXhcIiBuYW1lPVwicXVlc3Rpb25fbWF4XCIgcmVxdWlyZWQ9XCJyZXF1aXJlZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9XCIxMFwiPidcbiAgICAkaHRtbCA9ICRodG1sICsgJzwvZGl2PidcbiAgICAkaHRtbCA9ICRodG1sICsgJzxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+J1xuICAgICRodG1sID0gJGh0bWwgKyAnPGxhYmVsIGZvcj1cInF1ZXN0aW9uX21heF9zZW5zXCIgY2xhc3M9XCJyZXF1aXJlZFwiPlNpZ25pZmljYXRpb24gdmFsZXVyIG1heGltYWxlPC9sYWJlbD4nXG4gICAgJGh0bWwgPSAkaHRtbCArICc8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInF1ZXN0aW9uX21heF9zZW5zXCIgbmFtZT1cInF1ZXN0aW9uX21heF9zZW5zXCIgcmVxdWlyZWQ9XCJyZXF1aXJlZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+J1xuICAgICRodG1sID0gJGh0bWwgKyAnPC9kaXY+J1xuXG4gIH0gZWxzZSBpZiAoJHR5cGUgPT09ICdsaWJyZScpIHtcbiAgICAkaHRtbCA9ICc8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPidcbiAgICAkaHRtbCA9ICRodG1sICsgJzxsYWJlbCBmb3I9XCJxdWVzdGlvbl9saWJyZVwiPlRleHRlIGRcXCdhaWRlIHBvdXIgbGEgcsOpcG9uc2UgbGlicmU8L2xhYmVsPidcbiAgICAkaHRtbCA9ICRodG1sICsgJzxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwicXVlc3Rpb25fbGlicmVcIiBuYW1lPVwicXVlc3Rpb25fbGlicmVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPidcbiAgICAkaHRtbCA9ICRodG1sICsgJzwvZGl2PidcbiAgfSBlbHNlIHtcbiAgICAkaHRtbCA9ICc8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtaW5mb1wiPkNob2lzaXIgZFxcJ2Fib3JkIGxlIHR5cGUgZGUgcXVlc3Rpb248L2Rpdj4nXG4gIH1cbiAgJGRpdi5lbXB0eSgpLmFwcGVuZCgkaHRtbClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjYWRkcmVwb25zZXFjdScsIGZ1bmN0aW9uICgpIHtcbiAgbGV0ICRuYiA9IHBhcnNlSW50KCQodGhpcykuZGF0YSgnbmInKSkgKyAxXG4gICQodGhpcykuYmVmb3JlKGFkZENoYW1wUWN1KCRuYikpXG4gICQodGhpcykuZGF0YSgnbmInLCAkbmIpXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2FkZHJlcG9uc2VxY20nLCBmdW5jdGlvbiAoKSB7XG4gIGxldCAkbmIgPSBwYXJzZUludCgkKHRoaXMpLmRhdGEoJ25iJykpICsgMVxuICAkKHRoaXMpLmJlZm9yZShhZGRDaGFtcFFjbSgkbmIpKVxuICAkKHRoaXMpLmRhdGEoJ25iJywgJG5iKVxufSlcblxuZnVuY3Rpb24gYWRkQ2hhbXBRY3UgKCRuYikge1xuICBsZXQgJGh0bWwgPSAnPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4nXG4gICRodG1sID0gJGh0bWwgKyAnPGxhYmVsIGZvcj1cInF1ZXN0aW9uX3FjdVsnICsgJG5iICsgJ11cIiBjbGFzcz1cInJlcXVpcmVkXCI+TGliZWxsw6kgcsOpcG9uc2UgJyArICRuYiArICc8L2xhYmVsPidcbiAgJGh0bWwgPSAkaHRtbCArICc8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInF1ZXN0aW9uX3FjdVsnICsgJG5iICsgJ11cIiBuYW1lPVwicXVlc3Rpb25fcWN1WycgKyAkbmIgKyAnXVwiIHJlcXVpcmVkPVwicmVxdWlyZWRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPidcbiAgJGh0bWwgPSAkaHRtbCArICc8L2Rpdj4nXG4gICRodG1sID0gJGh0bWwgKyAnPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4nXG4gICRodG1sID0gJGh0bWwgKyAnPGxhYmVsIGZvcj1cInF1ZXN0aW9uX3FjdV92YWxldXJbJyArICRuYiArICddXCIgY2xhc3M9XCJyZXF1aXJlZFwiPlZhbGV1ciBwb3VyIGxhIHLDqXBvbnNlICcgKyAkbmIgKyAnPC9sYWJlbD4nXG4gICRodG1sID0gJGh0bWwgKyAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJxdWVzdGlvbl9xY3VfdmFsZXVyWycgKyAkbmIgKyAnXVwiIG5hbWU9XCJxdWVzdGlvbl9xY3VfdmFsZXVyWycgKyAkbmIgKyAnXVwiIHJlcXVpcmVkPVwicmVxdWlyZWRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPidcbiAgJGh0bWwgPSAkaHRtbCArICc8L2Rpdj4nXG5cbiAgcmV0dXJuICRodG1sXG59XG5cbmZ1bmN0aW9uIGFkZENoYW1wUWNtICgkbmIpIHtcbiAgbGV0ICRodG1sID0gJzxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+J1xuICAkaHRtbCA9ICRodG1sICsgJzxsYWJlbCBmb3I9XCJxdWVzdGlvbl9xY21bJyArICRuYiArICddXCIgY2xhc3M9XCJyZXF1aXJlZFwiPkxpYmVsbMOpIHLDqXBvbnNlICcgKyAkbmIgKyAnPC9sYWJlbD4nXG4gICRodG1sID0gJGh0bWwgKyAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJxdWVzdGlvbl9xY21bJyArICRuYiArICddXCIgbmFtZT1cInF1ZXN0aW9uX3FjbVsnICsgJG5iICsgJ11cIiByZXF1aXJlZD1cInJlcXVpcmVkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj4nXG4gICRodG1sID0gJGh0bWwgKyAnPC9kaXY+J1xuICAkaHRtbCA9ICRodG1sICsgJzxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+J1xuICAkaHRtbCA9ICRodG1sICsgJzxsYWJlbCBmb3I9XCJxdWVzdGlvbl9xY21fdmFsZXVyWycgKyAkbmIgKyAnXVwiIGNsYXNzPVwicmVxdWlyZWRcIj5WYWxldXIgcG91ciBsYSByw6lwb25zZSAnICsgJG5iICsgJzwvbGFiZWw+J1xuICAkaHRtbCA9ICRodG1sICsgJzxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwicXVlc3Rpb25fcWNtX3ZhbGV1clsnICsgJG5iICsgJ11cIiBuYW1lPVwicXVlc3Rpb25fcWNtX3ZhbGV1clsnICsgJG5iICsgJ11cIiByZXF1aXJlZD1cInJlcXVpcmVkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj4nXG4gICRodG1sID0gJGh0bWwgKyAnPC9kaXY+J1xuXG4gIHJldHVybiAkaHRtbFxufVxuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciB0cmltID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy10cmltJykudHJpbTtcbnZhciB3aGl0ZXNwYWNlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93aGl0ZXNwYWNlcycpO1xuXG52YXIgJHBhcnNlSW50ID0gZ2xvYmFsLnBhcnNlSW50O1xudmFyIGhleCA9IC9eWystXT8wW1h4XS87XG52YXIgRk9SQ0VEID0gJHBhcnNlSW50KHdoaXRlc3BhY2VzICsgJzA4JykgIT09IDggfHwgJHBhcnNlSW50KHdoaXRlc3BhY2VzICsgJzB4MTYnKSAhPT0gMjI7XG5cbi8vIGBwYXJzZUludGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1wYXJzZWludC1zdHJpbmctcmFkaXhcbm1vZHVsZS5leHBvcnRzID0gRk9SQ0VEID8gZnVuY3Rpb24gcGFyc2VJbnQoc3RyaW5nLCByYWRpeCkge1xuICB2YXIgUyA9IHRyaW0oU3RyaW5nKHN0cmluZykpO1xuICByZXR1cm4gJHBhcnNlSW50KFMsIChyYWRpeCA+Pj4gMCkgfHwgKGhleC50ZXN0KFMpID8gMTYgOiAxMCkpO1xufSA6ICRwYXJzZUludDtcbiIsInZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciB3aGl0ZXNwYWNlID0gJ1snICsgd2hpdGVzcGFjZXMgKyAnXSc7XG52YXIgbHRyaW0gPSBSZWdFeHAoJ14nICsgd2hpdGVzcGFjZSArIHdoaXRlc3BhY2UgKyAnKicpO1xudmFyIHJ0cmltID0gUmVnRXhwKHdoaXRlc3BhY2UgKyB3aGl0ZXNwYWNlICsgJyokJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbSwgdHJpbVN0YXJ0LCB0cmltRW5kLCB0cmltTGVmdCwgdHJpbVJpZ2h0IH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzKSB7XG4gICAgdmFyIHN0cmluZyA9IFN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKCR0aGlzKSk7XG4gICAgaWYgKFRZUEUgJiAxKSBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShsdHJpbSwgJycpO1xuICAgIGlmIChUWVBFICYgMikgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UocnRyaW0sICcnKTtcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbUxlZnQsIHRyaW1TdGFydCB9YCBtZXRob2RzXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbXN0YXJ0XG4gIHN0YXJ0OiBjcmVhdGVNZXRob2QoMSksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbVJpZ2h0LCB0cmltRW5kIH1gIG1ldGhvZHNcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltZW5kXG4gIGVuZDogY3JlYXRlTWV0aG9kKDIpLFxuICAvLyBgU3RyaW5nLnByb3RvdHlwZS50cmltYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltXG4gIHRyaW06IGNyZWF0ZU1ldGhvZCgzKVxufTtcbiIsIi8vIGEgc3RyaW5nIG9mIGFsbCB2YWxpZCB1bmljb2RlIHdoaXRlc3BhY2VzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxubW9kdWxlLmV4cG9ydHMgPSAnXFx1MDAwOVxcdTAwMEFcXHUwMDBCXFx1MDAwQ1xcdTAwMERcXHUwMDIwXFx1MDBBMFxcdTE2ODBcXHUyMDAwXFx1MjAwMVxcdTIwMDJcXHUyMDAzXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwQVxcdTIwMkZcXHUyMDVGXFx1MzAwMFxcdTIwMjhcXHUyMDI5XFx1RkVGRic7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBwYXJzZUludEltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL251bWJlci1wYXJzZS1pbnQnKTtcblxuLy8gYHBhcnNlSW50YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXBhcnNlaW50LXN0cmluZy1yYWRpeFxuJCh7IGdsb2JhbDogdHJ1ZSwgZm9yY2VkOiBwYXJzZUludCAhPSBwYXJzZUludEltcGxlbWVudGF0aW9uIH0sIHtcbiAgcGFyc2VJbnQ6IHBhcnNlSW50SW1wbGVtZW50YXRpb25cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==