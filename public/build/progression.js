(self["webpackChunk"] = self["webpackChunk"] || []).push([["progression"],{

/***/ "./assets/js/pages/progression.js":
/*!****************************************!*\
  !*** ./assets/js/pages/progression.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");

// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/progression.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 09/02/2020 18:05
$(document).on('change', '.updateProgression', function () {
  updateProgression($(this).data('semaine'), $(this).data('type'), $(this).data('matiere'), $(this).val());
  calculProgression($(this).data('semaine'), $(this).data('type'), $(this).data('matiere'));
});

function updateProgression(semaine, typecours, matiere, nbSeances) {
  $.ajax({
    url: Routing.generate('application_personnel_progression_update', {
      matiere: matiere
    }),
    data: {
      semaine: semaine,
      typecours: typecours,
      nbSeances: nbSeances
    },
    method: 'POST'
  });
}

function calculProgression(semaine, typecours, matiere) {
  //update colonne
  var $nbGrCm = parseInt($('#nbgr_cm_' + matiere).text());
  var $nbGrTd = parseInt($('#nbgr_td_' + matiere).text());
  var $nbGrTp = parseInt($('#nbgr_tp_' + matiere).text());
  var $col = 'tot_s' + semaine + '_' + matiere;
  var cm = parseInt($('#' + $col + '_cm').val());

  if (isNaN(cm)) {
    cm = 0;
  }

  var td = parseInt($('#' + $col + '_td').val());

  if (isNaN(td)) {
    td = 0;
  }

  var tp = parseInt($('#' + $col + '_tp').val());

  if (isNaN(tp)) {
    tp = 0;
  }

  var $total = cm * $nbGrCm * 1.5 + td * $nbGrTd * 1.5 + tp * $nbGrTp * 1.5;
  $('#' + $col).text($total); //update ligne

  var $ztotCm = 'tot_cm_' + matiere;
  var $ztotTd = 'tot_td_' + matiere;
  var $ztotTp = 'tot_tp_' + matiere;
  var $ztotSCm = 'tot_cm_seance_' + matiere;
  var $ztotSTd = 'tot_td_seance_' + matiere;
  var $ztotSTp = 'tot_tp_seance_' + matiere;
  var $ztot = 'tot_' + matiere;
  var $ztotS = 'tot_seance_' + matiere;
  var $ztotCmH = 'tot_cm_h_' + matiere;
  var $ztotTdH = 'tot_td_h_' + matiere;
  var $ztotTpH = 'tot_tp_h_' + matiere;
  var $ztotH = 'tot_h_' + matiere;
  var $totCm = 0;
  var $totTd = 0;
  var $totTp = 0; //CM

  $('.cm_' + matiere).each(function () {
    var t = parseInt($(this).val());

    if (isNaN(t)) {
      t = 0;
    }

    $totCm += t;
  });
  $('#' + $ztotSCm).text($totCm);
  $('#' + $ztotCm).text($totCm * $nbGrCm);
  $('#' + $ztotCmH).text($totCm * 1.5 * $nbGrCm); //TD

  $('.td_' + matiere).each(function () {
    var t = parseInt($(this).val());

    if (isNaN(t)) {
      t = 0;
    }

    $totTd += t;
  });
  $('#' + $ztotSTd).text($totTd);
  $('#' + $ztotTd).text($totTd * $nbGrTd);
  $('#' + $ztotTdH).text($totTd * 1.5 * $nbGrTd); //TP

  $('.tp_' + matiere).each(function () {
    var t = parseInt($(this).val());

    if (isNaN(t)) {
      t = 0;
    }

    $totTp += t;
  });
  $('#' + $ztotSTp).text($totTp);
  $('#' + $ztotTp).text($totTp * $nbGrTp);
  $('#' + $ztotTpH).text($totTp * 1.5 * $nbGrTp);
  $('#' + $ztotS).text($totCm + $totTd + $totTp);
  $('#' + $ztot).text($totCm * $nbGrCm + $totTd * $nbGrTd + $totTp * $nbGrTp);
  $('#' + $ztotH).text($totCm * 1.5 * $nbGrCm + $totTd * 1.5 * $nbGrTd + $totTp * 1.5 * $nbGrTp);
}

$(document).on('click', '#refresh', function () {
  updateAllProgresssion();
});

function updateAllProgresssion() {
  var totSemaine = Array();

  for (var semaine = 1; semaine < 15; semaine++) {
    totSemaine[semaine] = 0;
  }

  totSemaine['total'] = 0;
  totSemaine['total_groupe'] = 0;
  totSemaine['total_heure'] = 0;
  $('.une_matiere').each(function () {
    //update colonne
    var matiere = $(this).data('matiere');
    var $nbGrCm = parseInt($('#nbgr_cm_' + matiere).text());
    var $nbGrTd = parseInt($('#nbgr_td_' + matiere).text());
    var $nbGrTp = parseInt($('#nbgr_tp_' + matiere).text());
    var $totCm = 0;
    var $totTd = 0;
    var $totTp = 0;

    for (var _semaine = 1; _semaine < 15; _semaine++) {
      var $col = 'tot_s' + _semaine + '_' + matiere;
      var cm = parseInt($('#' + $col + '_cm').val());

      if (isNaN(cm)) {
        cm = 0;
      }

      $totCm += cm;
      var td = parseInt($('#' + $col + '_td').val());

      if (isNaN(td)) {
        td = 0;
      }

      $totTd += td;
      var tp = parseInt($('#' + $col + '_tp').val());

      if (isNaN(tp)) {
        tp = 0;
      }

      $totTp += tp;
      var $total = cm * $nbGrCm * 1.5 + td * $nbGrTd * 1.5 + tp * $nbGrTp * 1.5;
      $('#' + $col).text($total);
      totSemaine[_semaine] += $total;
    } //fin boucle semaine
    //update ligne


    var $ztotCm = 'tot_cm_' + matiere;
    var $ztotTd = 'tot_td_' + matiere;
    var $ztotTp = 'tot_tp_' + matiere;
    var $ztotSCm = 'tot_cm_seance_' + matiere;
    var $ztotSTd = 'tot_td_seance_' + matiere;
    var $ztotSTp = 'tot_tp_seance_' + matiere;
    var $ztot = 'tot_' + matiere;
    var $ztotS = 'tot_seance_' + matiere;
    var $ztotCmH = 'tot_cm_h_' + matiere;
    var $ztotTdH = 'tot_td_h_' + matiere;
    var $ztotTpH = 'tot_tp_h_' + matiere;
    var $ztotH = 'tot_h_' + matiere;
    $('#' + $ztotSCm).text($totCm);
    $('#' + $ztotCm).text($totCm * $nbGrCm);
    $('#' + $ztotCmH).text($totCm * 1.5 * $nbGrCm);
    $('#' + $ztotSTd).text($totTd);
    $('#' + $ztotTd).text($totTd * $nbGrTd);
    $('#' + $ztotTdH).text($totTd * 1.5 * $nbGrTd);
    $('#' + $ztotSTp).text($totTp);
    $('#' + $ztotTp).text($totTp * $nbGrTp);
    $('#' + $ztotTpH).text($totTp * 1.5 * $nbGrTp);
    $('#' + $ztotS).text($totCm + $totTd + $totTp);
    $('#' + $ztot).text($totCm * $nbGrCm + $totTd * $nbGrTd + $totTp * $nbGrTp);
    $('#' + $ztotH).text($totCm * 1.5 * $nbGrCm + $totTd * 1.5 * $nbGrTd + $totTp * 1.5 * $nbGrTp);
    totSemaine['total'] += $totCm + $totTd + $totTp;
    totSemaine['total_groupe'] += $totCm * $nbGrCm + $totTd * $nbGrTd + $totTp * $nbGrTp;
    totSemaine['total_heure'] += $totCm * 1.5 * $nbGrCm + $totTd * 1.5 * $nbGrTd + $totTp * 1.5 * $nbGrTp;
  });

  for (var semaine = 1; semaine < 15; semaine++) {
    $('#tot_s' + semaine).text(totSemaine[semaine]);
  }

  $('#tot_seance').text(totSemaine['total']);
  $('#tot_global_groupe').text(totSemaine['total_groupe']);
  $('#tot_global_heure').text(totSemaine['total_heure']);
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
0,[["./assets/js/pages/progression.js","runtime","vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_export_js"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvcHJvZ3Jlc3Npb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL251bWJlci1wYXJzZS1pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N0cmluZy10cmltLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93aGl0ZXNwYWNlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnBhcnNlLWludC5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJvbiIsInVwZGF0ZVByb2dyZXNzaW9uIiwiZGF0YSIsInZhbCIsImNhbGN1bFByb2dyZXNzaW9uIiwic2VtYWluZSIsInR5cGVjb3VycyIsIm1hdGllcmUiLCJuYlNlYW5jZXMiLCJhamF4IiwidXJsIiwiUm91dGluZyIsImdlbmVyYXRlIiwibWV0aG9kIiwiJG5iR3JDbSIsInBhcnNlSW50IiwidGV4dCIsIiRuYkdyVGQiLCIkbmJHclRwIiwiJGNvbCIsImNtIiwiaXNOYU4iLCJ0ZCIsInRwIiwiJHRvdGFsIiwiJHp0b3RDbSIsIiR6dG90VGQiLCIkenRvdFRwIiwiJHp0b3RTQ20iLCIkenRvdFNUZCIsIiR6dG90U1RwIiwiJHp0b3QiLCIkenRvdFMiLCIkenRvdENtSCIsIiR6dG90VGRIIiwiJHp0b3RUcEgiLCIkenRvdEgiLCIkdG90Q20iLCIkdG90VGQiLCIkdG90VHAiLCJlYWNoIiwidCIsInVwZGF0ZUFsbFByb2dyZXNzc2lvbiIsInRvdFNlbWFpbmUiLCJBcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEVBQVosQ0FBZSxRQUFmLEVBQXlCLG9CQUF6QixFQUErQyxZQUFZ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QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7OztBQ2JELDZCQUE2QixtQkFBTyxDQUFDLDJHQUF1QztBQUM1RSxrQkFBa0IsbUJBQU8sQ0FBQyxpRkFBMEI7O0FBRXBEO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsZ0RBQWdEO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0Isc0JBQXNCO0FBQzlDO0FBQ0E7QUFDQSx3QkFBd0IscUJBQXFCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0ZBLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsNkJBQTZCLG1CQUFPLENBQUMsMkZBQStCOztBQUVwRTtBQUNBO0FBQ0EsR0FBRywyREFBMkQ7QUFDOUQ7QUFDQSxDQUFDIiwiZmlsZSI6InByb2dyZXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3BhZ2VzL3Byb2dyZXNzaW9uLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMDkvMDIvMjAyMCAxODowNVxuXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy51cGRhdGVQcm9ncmVzc2lvbicsIGZ1bmN0aW9uICgpIHtcbiAgdXBkYXRlUHJvZ3Jlc3Npb24oJCh0aGlzKS5kYXRhKCdzZW1haW5lJyksICQodGhpcykuZGF0YSgndHlwZScpLCAkKHRoaXMpLmRhdGEoJ21hdGllcmUnKSwgJCh0aGlzKS52YWwoKSlcbiAgY2FsY3VsUHJvZ3Jlc3Npb24oJCh0aGlzKS5kYXRhKCdzZW1haW5lJyksICQodGhpcykuZGF0YSgndHlwZScpLCAkKHRoaXMpLmRhdGEoJ21hdGllcmUnKSlcbn0pXG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2dyZXNzaW9uIChzZW1haW5lLCB0eXBlY291cnMsIG1hdGllcmUsbmJTZWFuY2VzKSB7XG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcHBsaWNhdGlvbl9wZXJzb25uZWxfcHJvZ3Jlc3Npb25fdXBkYXRlJywge21hdGllcmU6bWF0aWVyZX0pLFxuICAgIGRhdGE6IHtcbiAgICAgIHNlbWFpbmU6IHNlbWFpbmUsXG4gICAgICB0eXBlY291cnM6IHR5cGVjb3VycyxcbiAgICAgIG5iU2VhbmNlczogbmJTZWFuY2VzXG4gICAgfSxcbiAgICBtZXRob2Q6ICdQT1NUJ1xuICB9KVxufVxuXG5mdW5jdGlvbiBjYWxjdWxQcm9ncmVzc2lvbiAoc2VtYWluZSwgdHlwZWNvdXJzLCBtYXRpZXJlKSB7XG4gIC8vdXBkYXRlIGNvbG9ubmVcbiAgY29uc3QgJG5iR3JDbSA9IHBhcnNlSW50KCQoJyNuYmdyX2NtXycgKyBtYXRpZXJlKS50ZXh0KCkpXG4gIGNvbnN0ICRuYkdyVGQgPSBwYXJzZUludCgkKCcjbmJncl90ZF8nICsgbWF0aWVyZSkudGV4dCgpKVxuICBjb25zdCAkbmJHclRwID0gcGFyc2VJbnQoJCgnI25iZ3JfdHBfJyArIG1hdGllcmUpLnRleHQoKSlcblxuXG4gIGNvbnN0ICRjb2wgPSAndG90X3MnICsgc2VtYWluZSArICdfJyArIG1hdGllcmVcblxuICBsZXQgY20gPSBwYXJzZUludCgkKCcjJyArICRjb2wgKyAnX2NtJykudmFsKCkpXG4gIGlmIChpc05hTihjbSkpIHtcbiAgICBjbSA9IDBcbiAgfVxuXG4gIGxldCB0ZCA9IHBhcnNlSW50KCQoJyMnICsgJGNvbCArICdfdGQnKS52YWwoKSlcbiAgaWYgKGlzTmFOKHRkKSkge1xuICAgIHRkID0gMFxuICB9XG5cbiAgbGV0IHRwID0gcGFyc2VJbnQoJCgnIycgKyAkY29sICsgJ190cCcpLnZhbCgpKVxuICBpZiAoaXNOYU4odHApKSB7XG4gICAgdHAgPSAwXG4gIH1cblxuICBjb25zdCAkdG90YWwgPSBjbSAqICRuYkdyQ20gKiAxLjUgKyB0ZCAqICRuYkdyVGQgKiAxLjUgKyB0cCAqICRuYkdyVHAgKiAxLjVcbiAgJCgnIycgKyAkY29sKS50ZXh0KCR0b3RhbClcblxuICAvL3VwZGF0ZSBsaWduZVxuICBjb25zdCAkenRvdENtID0gJ3RvdF9jbV8nICsgbWF0aWVyZVxuICBjb25zdCAkenRvdFRkID0gJ3RvdF90ZF8nICsgbWF0aWVyZVxuICBjb25zdCAkenRvdFRwID0gJ3RvdF90cF8nICsgbWF0aWVyZVxuICBjb25zdCAkenRvdFNDbSA9ICd0b3RfY21fc2VhbmNlXycgKyBtYXRpZXJlXG4gIGNvbnN0ICR6dG90U1RkID0gJ3RvdF90ZF9zZWFuY2VfJyArIG1hdGllcmVcbiAgY29uc3QgJHp0b3RTVHAgPSAndG90X3RwX3NlYW5jZV8nICsgbWF0aWVyZVxuICBjb25zdCAkenRvdCA9ICd0b3RfJyArIG1hdGllcmVcbiAgY29uc3QgJHp0b3RTID0gJ3RvdF9zZWFuY2VfJyArIG1hdGllcmVcbiAgY29uc3QgJHp0b3RDbUggPSAndG90X2NtX2hfJyArIG1hdGllcmVcbiAgY29uc3QgJHp0b3RUZEggPSAndG90X3RkX2hfJyArIG1hdGllcmVcbiAgY29uc3QgJHp0b3RUcEggPSAndG90X3RwX2hfJyArIG1hdGllcmVcbiAgY29uc3QgJHp0b3RIID0gJ3RvdF9oXycgKyBtYXRpZXJlXG5cbiAgbGV0ICR0b3RDbSA9IDBcbiAgbGV0ICR0b3RUZCA9IDBcbiAgbGV0ICR0b3RUcCA9IDBcbiAgLy9DTVxuICAkKCcuY21fJyArIG1hdGllcmUpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgIGxldCB0ID0gcGFyc2VJbnQoJCh0aGlzKS52YWwoKSlcbiAgICBpZiAoaXNOYU4odCkpIHtcbiAgICAgIHQgPSAwXG4gICAgfVxuICAgICR0b3RDbSArPSB0XG4gIH0pXG4gICQoJyMnICsgJHp0b3RTQ20pLnRleHQoJHRvdENtKVxuICAkKCcjJyArICR6dG90Q20pLnRleHQoJHRvdENtICogJG5iR3JDbSlcbiAgJCgnIycgKyAkenRvdENtSCkudGV4dCgkdG90Q20gKiAxLjUgKiAkbmJHckNtKVxuXG4gIC8vVERcbiAgJCgnLnRkXycgKyBtYXRpZXJlKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgdCA9IHBhcnNlSW50KCQodGhpcykudmFsKCkpXG4gICAgaWYgKGlzTmFOKHQpKSB7XG4gICAgICB0ID0gMFxuICAgIH1cbiAgICAkdG90VGQgKz0gdFxuICB9KVxuICAkKCcjJyArICR6dG90U1RkKS50ZXh0KCR0b3RUZClcbiAgJCgnIycgKyAkenRvdFRkKS50ZXh0KCR0b3RUZCAqICRuYkdyVGQpXG4gICQoJyMnICsgJHp0b3RUZEgpLnRleHQoJHRvdFRkICogMS41ICogJG5iR3JUZClcblxuICAvL1RQXG4gICQoJy50cF8nICsgbWF0aWVyZSkuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHQgPSBwYXJzZUludCgkKHRoaXMpLnZhbCgpKVxuICAgIGlmIChpc05hTih0KSkge1xuICAgICAgdCA9IDBcbiAgICB9XG4gICAgJHRvdFRwICs9IHRcbiAgfSlcbiAgJCgnIycgKyAkenRvdFNUcCkudGV4dCgkdG90VHApXG4gICQoJyMnICsgJHp0b3RUcCkudGV4dCgkdG90VHAgKiAkbmJHclRwKVxuICAkKCcjJyArICR6dG90VHBIKS50ZXh0KCR0b3RUcCAqIDEuNSAqICRuYkdyVHApXG5cbiAgJCgnIycgKyAkenRvdFMpLnRleHQoJHRvdENtICsgJHRvdFRkICsgJHRvdFRwKVxuICAkKCcjJyArICR6dG90KS50ZXh0KCR0b3RDbSAqICRuYkdyQ20gKyAkdG90VGQgKiAkbmJHclRkICsgJHRvdFRwICogJG5iR3JUcClcbiAgJCgnIycgKyAkenRvdEgpLnRleHQoJHRvdENtICogMS41ICogJG5iR3JDbSArICR0b3RUZCAqIDEuNSAqICRuYkdyVGQgKyAkdG90VHAgKiAxLjUgKiAkbmJHclRwKVxufVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI3JlZnJlc2gnLCBmdW5jdGlvbiAoKSB7XG4gIHVwZGF0ZUFsbFByb2dyZXNzc2lvbigpO1xufSlcblxuZnVuY3Rpb24gdXBkYXRlQWxsUHJvZ3Jlc3NzaW9uKCkge1xuICBjb25zdCB0b3RTZW1haW5lID0gQXJyYXkoKVxuICBmb3IgKHZhciBzZW1haW5lID0gMTsgc2VtYWluZTwxNTsgc2VtYWluZSsrKSB7XG4gICAgdG90U2VtYWluZVtzZW1haW5lXSA9IDA7XG4gIH1cbiAgdG90U2VtYWluZVsndG90YWwnXSA9IDA7XG4gIHRvdFNlbWFpbmVbJ3RvdGFsX2dyb3VwZSddID0gMDtcbiAgdG90U2VtYWluZVsndG90YWxfaGV1cmUnXSA9IDA7XG5cbiAgJCgnLnVuZV9tYXRpZXJlJykuZWFjaChmdW5jdGlvbigpe1xuICAgIC8vdXBkYXRlIGNvbG9ubmVcbiAgICBjb25zdCBtYXRpZXJlID0gJCh0aGlzKS5kYXRhKCdtYXRpZXJlJylcbiAgICBjb25zdCAkbmJHckNtID0gcGFyc2VJbnQoJCgnI25iZ3JfY21fJyArIG1hdGllcmUpLnRleHQoKSlcbiAgICBjb25zdCAkbmJHclRkID0gcGFyc2VJbnQoJCgnI25iZ3JfdGRfJyArIG1hdGllcmUpLnRleHQoKSlcbiAgICBjb25zdCAkbmJHclRwID0gcGFyc2VJbnQoJCgnI25iZ3JfdHBfJyArIG1hdGllcmUpLnRleHQoKSlcbiAgICBsZXQgJHRvdENtID0gMFxuICAgIGxldCAkdG90VGQgPSAwXG4gICAgbGV0ICR0b3RUcCA9IDBcblxuICAgIGZvciAobGV0IHNlbWFpbmUgPSAxOyBzZW1haW5lPDE1OyBzZW1haW5lKyspIHtcblxuICAgICAgICBjb25zdCAkY29sID0gJ3RvdF9zJyArIHNlbWFpbmUgKyAnXycgKyBtYXRpZXJlXG5cbiAgICAgICAgbGV0IGNtID0gcGFyc2VJbnQoJCgnIycgKyAkY29sICsgJ19jbScpLnZhbCgpKVxuICAgICAgICBpZiAoaXNOYU4oY20pKSB7XG4gICAgICAgICAgY20gPSAwXG4gICAgICAgIH1cbiAgICAgICAgJHRvdENtICs9IGNtXG5cbiAgICAgICAgbGV0IHRkID0gcGFyc2VJbnQoJCgnIycgKyAkY29sICsgJ190ZCcpLnZhbCgpKVxuICAgICAgICBpZiAoaXNOYU4odGQpKSB7XG4gICAgICAgICAgdGQgPSAwXG4gICAgICAgIH1cbiAgICAgICAgJHRvdFRkICs9IHRkXG5cbiAgICAgICAgbGV0IHRwID0gcGFyc2VJbnQoJCgnIycgKyAkY29sICsgJ190cCcpLnZhbCgpKVxuICAgICAgICBpZiAoaXNOYU4odHApKSB7XG4gICAgICAgICAgdHAgPSAwXG4gICAgICAgIH1cbiAgICAgICAgJHRvdFRwICs9IHRwXG5cbiAgICAgICAgY29uc3QgJHRvdGFsID0gY20gKiAkbmJHckNtICogMS41ICsgdGQgKiAkbmJHclRkICogMS41ICsgdHAgKiAkbmJHclRwICogMS41XG4gICAgICAgICQoJyMnICsgJGNvbCkudGV4dCgkdG90YWwpXG4gICAgICAgIHRvdFNlbWFpbmVbc2VtYWluZV0gKz0gJHRvdGFsO1xuICAgIH0vL2ZpbiBib3VjbGUgc2VtYWluZVxuXG4gICAgLy91cGRhdGUgbGlnbmVcbiAgICBjb25zdCAkenRvdENtID0gJ3RvdF9jbV8nICsgbWF0aWVyZVxuICAgIGNvbnN0ICR6dG90VGQgPSAndG90X3RkXycgKyBtYXRpZXJlXG4gICAgY29uc3QgJHp0b3RUcCA9ICd0b3RfdHBfJyArIG1hdGllcmVcbiAgICBjb25zdCAkenRvdFNDbSA9ICd0b3RfY21fc2VhbmNlXycgKyBtYXRpZXJlXG4gICAgY29uc3QgJHp0b3RTVGQgPSAndG90X3RkX3NlYW5jZV8nICsgbWF0aWVyZVxuICAgIGNvbnN0ICR6dG90U1RwID0gJ3RvdF90cF9zZWFuY2VfJyArIG1hdGllcmVcbiAgICBjb25zdCAkenRvdCA9ICd0b3RfJyArIG1hdGllcmVcbiAgICBjb25zdCAkenRvdFMgPSAndG90X3NlYW5jZV8nICsgbWF0aWVyZVxuICAgIGNvbnN0ICR6dG90Q21IID0gJ3RvdF9jbV9oXycgKyBtYXRpZXJlXG4gICAgY29uc3QgJHp0b3RUZEggPSAndG90X3RkX2hfJyArIG1hdGllcmVcbiAgICBjb25zdCAkenRvdFRwSCA9ICd0b3RfdHBfaF8nICsgbWF0aWVyZVxuICAgIGNvbnN0ICR6dG90SCA9ICd0b3RfaF8nICsgbWF0aWVyZVxuXG5cbiAgICAkKCcjJyArICR6dG90U0NtKS50ZXh0KCR0b3RDbSlcbiAgICAkKCcjJyArICR6dG90Q20pLnRleHQoJHRvdENtICogJG5iR3JDbSlcbiAgICAkKCcjJyArICR6dG90Q21IKS50ZXh0KCR0b3RDbSAqIDEuNSAqICRuYkdyQ20pXG5cbiAgICAkKCcjJyArICR6dG90U1RkKS50ZXh0KCR0b3RUZClcbiAgICAkKCcjJyArICR6dG90VGQpLnRleHQoJHRvdFRkICogJG5iR3JUZClcbiAgICAkKCcjJyArICR6dG90VGRIKS50ZXh0KCR0b3RUZCAqIDEuNSAqICRuYkdyVGQpXG5cbiAgICAkKCcjJyArICR6dG90U1RwKS50ZXh0KCR0b3RUcClcbiAgICAkKCcjJyArICR6dG90VHApLnRleHQoJHRvdFRwICogJG5iR3JUcClcbiAgICAkKCcjJyArICR6dG90VHBIKS50ZXh0KCR0b3RUcCAqIDEuNSAqICRuYkdyVHApXG5cbiAgICAkKCcjJyArICR6dG90UykudGV4dCgkdG90Q20gKyAkdG90VGQgKyAkdG90VHApXG4gICAgJCgnIycgKyAkenRvdCkudGV4dCgkdG90Q20gKiAkbmJHckNtICsgJHRvdFRkICogJG5iR3JUZCArICR0b3RUcCAqICRuYkdyVHApXG4gICAgJCgnIycgKyAkenRvdEgpLnRleHQoJHRvdENtICogMS41ICogJG5iR3JDbSArICR0b3RUZCAqIDEuNSAqICRuYkdyVGQgKyAkdG90VHAgKiAxLjUgKiAkbmJHclRwKVxuXG4gICAgdG90U2VtYWluZVsndG90YWwnXSArPSAkdG90Q20gKyAkdG90VGQgKyAkdG90VHA7XG4gICAgdG90U2VtYWluZVsndG90YWxfZ3JvdXBlJ10gKz0gJHRvdENtICogJG5iR3JDbSArICR0b3RUZCAqICRuYkdyVGQgKyAkdG90VHAgKiAkbmJHclRwO1xuICAgIHRvdFNlbWFpbmVbJ3RvdGFsX2hldXJlJ10gKz0gJHRvdENtICogMS41ICogJG5iR3JDbSArICR0b3RUZCAqIDEuNSAqICRuYkdyVGQgKyAkdG90VHAgKiAxLjUgKiAkbmJHclRwO1xuXG4gIH0pXG5cbiAgZm9yICh2YXIgc2VtYWluZSA9IDE7IHNlbWFpbmU8MTU7IHNlbWFpbmUrKykge1xuICAgICQoJyN0b3Rfcycrc2VtYWluZSkudGV4dCh0b3RTZW1haW5lW3NlbWFpbmVdKTtcbiAgfVxuICAkKCcjdG90X3NlYW5jZScpLnRleHQodG90U2VtYWluZVsndG90YWwnXSk7XG4gICQoJyN0b3RfZ2xvYmFsX2dyb3VwZScpLnRleHQodG90U2VtYWluZVsndG90YWxfZ3JvdXBlJ10pO1xuICAkKCcjdG90X2dsb2JhbF9oZXVyZScpLnRleHQodG90U2VtYWluZVsndG90YWxfaGV1cmUnXSk7XG59XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHRyaW0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0nKS50cmltO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciAkcGFyc2VJbnQgPSBnbG9iYWwucGFyc2VJbnQ7XG52YXIgaGV4ID0gL15bKy1dPzBbWHhdLztcbnZhciBGT1JDRUQgPSAkcGFyc2VJbnQod2hpdGVzcGFjZXMgKyAnMDgnKSAhPT0gOCB8fCAkcGFyc2VJbnQod2hpdGVzcGFjZXMgKyAnMHgxNicpICE9PSAyMjtcblxuLy8gYHBhcnNlSW50YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcGFyc2VpbnQtc3RyaW5nLXJhZGl4XG5tb2R1bGUuZXhwb3J0cyA9IEZPUkNFRCA/IGZ1bmN0aW9uIHBhcnNlSW50KHN0cmluZywgcmFkaXgpIHtcbiAgdmFyIFMgPSB0cmltKFN0cmluZyhzdHJpbmcpKTtcbiAgcmV0dXJuICRwYXJzZUludChTLCAocmFkaXggPj4+IDApIHx8IChoZXgudGVzdChTKSA/IDE2IDogMTApKTtcbn0gOiAkcGFyc2VJbnQ7XG4iLCJ2YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciB3aGl0ZXNwYWNlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93aGl0ZXNwYWNlcycpO1xuXG52YXIgd2hpdGVzcGFjZSA9ICdbJyArIHdoaXRlc3BhY2VzICsgJ10nO1xudmFyIGx0cmltID0gUmVnRXhwKCdeJyArIHdoaXRlc3BhY2UgKyB3aGl0ZXNwYWNlICsgJyonKTtcbnZhciBydHJpbSA9IFJlZ0V4cCh3aGl0ZXNwYWNlICsgd2hpdGVzcGFjZSArICcqJCcpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS57IHRyaW0sIHRyaW1TdGFydCwgdHJpbUVuZCwgdHJpbUxlZnQsIHRyaW1SaWdodCB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcykge1xuICAgIHZhciBzdHJpbmcgPSBTdHJpbmcocmVxdWlyZU9iamVjdENvZXJjaWJsZSgkdGhpcykpO1xuICAgIGlmIChUWVBFICYgMSkgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UobHRyaW0sICcnKTtcbiAgICBpZiAoVFlQRSAmIDIpIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKHJ0cmltLCAnJyk7XG4gICAgcmV0dXJuIHN0cmluZztcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgU3RyaW5nLnByb3RvdHlwZS57IHRyaW1MZWZ0LCB0cmltU3RhcnQgfWAgbWV0aG9kc1xuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbXN0YXJ0XG4gIHN0YXJ0OiBjcmVhdGVNZXRob2QoMSksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbVJpZ2h0LCB0cmltRW5kIH1gIG1ldGhvZHNcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1lbmRcbiAgZW5kOiBjcmVhdGVNZXRob2QoMiksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnRyaW1gIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbVxuICB0cmltOiBjcmVhdGVNZXRob2QoMylcbn07XG4iLCIvLyBhIHN0cmluZyBvZiBhbGwgdmFsaWQgdW5pY29kZSB3aGl0ZXNwYWNlc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbm1vZHVsZS5leHBvcnRzID0gJ1xcdTAwMDlcXHUwMDBBXFx1MDAwQlxcdTAwMENcXHUwMDBEXFx1MDAyMFxcdTAwQTBcXHUxNjgwXFx1MjAwMFxcdTIwMDFcXHUyMDAyXFx1MjAwM1xcdTIwMDRcXHUyMDA1XFx1MjAwNlxcdTIwMDdcXHUyMDA4XFx1MjAwOVxcdTIwMEFcXHUyMDJGXFx1MjA1RlxcdTMwMDBcXHUyMDI4XFx1MjAyOVxcdUZFRkYnO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgcGFyc2VJbnRJbXBsZW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9udW1iZXItcGFyc2UtaW50Jyk7XG5cbi8vIGBwYXJzZUludGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXBhcnNlaW50LXN0cmluZy1yYWRpeFxuJCh7IGdsb2JhbDogdHJ1ZSwgZm9yY2VkOiBwYXJzZUludCAhPSBwYXJzZUludEltcGxlbWVudGF0aW9uIH0sIHtcbiAgcGFyc2VJbnQ6IHBhcnNlSW50SW1wbGVtZW50YXRpb25cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==