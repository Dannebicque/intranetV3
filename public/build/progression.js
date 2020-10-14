(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["progression"],{

/***/ "./assets/js/pages/progression.js":
/*!****************************************!*\
  !*** ./assets/js/pages/progression.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {__webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");

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

},[["./assets/js/pages/progression.js","runtime","vendors~absences~adm.absences~adm.alternances~adm.articles~adm.bornes~adm.configuration~adm.edt~adm.~d677a9f6","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~6af3b135"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvcHJvZ3Jlc3Npb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL251bWJlci1wYXJzZS1pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N0cmluZy10cmltLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93aGl0ZXNwYWNlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnBhcnNlLWludC5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJvbiIsInVwZGF0ZVByb2dyZXNzaW9uIiwiZGF0YSIsInZhbCIsImNhbGN1bFByb2dyZXNzaW9uIiwic2VtYWluZSIsInR5cGVjb3VycyIsIm1hdGllcmUiLCJuYlNlYW5jZXMiLCJhamF4IiwidXJsIiwiUm91dGluZyIsImdlbmVyYXRlIiwibWV0aG9kIiwiJG5iR3JDbSIsInBhcnNlSW50IiwidGV4dCIsIiRuYkdyVGQiLCIkbmJHclRwIiwiJGNvbCIsImNtIiwiaXNOYU4iLCJ0ZCIsInRwIiwiJHRvdGFsIiwiJHp0b3RDbSIsIiR6dG90VGQiLCIkenRvdFRwIiwiJHp0b3RTQ20iLCIkenRvdFNUZCIsIiR6dG90U1RwIiwiJHp0b3QiLCIkenRvdFMiLCIkenRvdENtSCIsIiR6dG90VGRIIiwiJHp0b3RUcEgiLCIkenRvdEgiLCIkdG90Q20iLCIkdG90VGQiLCIkdG90VHAiLCJlYWNoIiwidCIsInVwZGF0ZUFsbFByb2dyZXNzc2lvbiIsInRvdFNlbWFpbmUiLCJBcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEVBQVosQ0FBZSxRQUFmLEVBQXlCLG9CQUF6QixFQUErQyxZQUFZ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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDYkQsNkJBQTZCLG1CQUFPLENBQUMsMkdBQXVDO0FBQzVFLGtCQUFrQixtQkFBTyxDQUFDLGlGQUEwQjs7QUFFcEQ7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixnREFBZ0Q7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixzQkFBc0I7QUFDOUM7QUFDQTtBQUNBLHdCQUF3QixxQkFBcUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNGQSxRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLDZCQUE2QixtQkFBTyxDQUFDLDJGQUErQjs7QUFFcEU7QUFDQTtBQUNBLEdBQUcsMkRBQTJEO0FBQzlEO0FBQ0EsQ0FBQyIsImZpbGUiOiJwcm9ncmVzc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9wYWdlcy9wcm9ncmVzc2lvbi5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDA5LzAyLzIwMjAgMTg6MDVcblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcudXBkYXRlUHJvZ3Jlc3Npb24nLCBmdW5jdGlvbiAoKSB7XG4gIHVwZGF0ZVByb2dyZXNzaW9uKCQodGhpcykuZGF0YSgnc2VtYWluZScpLCAkKHRoaXMpLmRhdGEoJ3R5cGUnKSwgJCh0aGlzKS5kYXRhKCdtYXRpZXJlJyksICQodGhpcykudmFsKCkpXG4gIGNhbGN1bFByb2dyZXNzaW9uKCQodGhpcykuZGF0YSgnc2VtYWluZScpLCAkKHRoaXMpLmRhdGEoJ3R5cGUnKSwgJCh0aGlzKS5kYXRhKCdtYXRpZXJlJykpXG59KVxuXG5mdW5jdGlvbiB1cGRhdGVQcm9ncmVzc2lvbiAoc2VtYWluZSwgdHlwZWNvdXJzLCBtYXRpZXJlLG5iU2VhbmNlcykge1xuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYXBwbGljYXRpb25fcGVyc29ubmVsX3Byb2dyZXNzaW9uX3VwZGF0ZScsIHttYXRpZXJlOm1hdGllcmV9KSxcbiAgICBkYXRhOiB7XG4gICAgICBzZW1haW5lOiBzZW1haW5lLFxuICAgICAgdHlwZWNvdXJzOiB0eXBlY291cnMsXG4gICAgICBuYlNlYW5jZXM6IG5iU2VhbmNlc1xuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCdcbiAgfSlcbn1cblxuZnVuY3Rpb24gY2FsY3VsUHJvZ3Jlc3Npb24gKHNlbWFpbmUsIHR5cGVjb3VycywgbWF0aWVyZSkge1xuICAvL3VwZGF0ZSBjb2xvbm5lXG4gIGNvbnN0ICRuYkdyQ20gPSBwYXJzZUludCgkKCcjbmJncl9jbV8nICsgbWF0aWVyZSkudGV4dCgpKVxuICBjb25zdCAkbmJHclRkID0gcGFyc2VJbnQoJCgnI25iZ3JfdGRfJyArIG1hdGllcmUpLnRleHQoKSlcbiAgY29uc3QgJG5iR3JUcCA9IHBhcnNlSW50KCQoJyNuYmdyX3RwXycgKyBtYXRpZXJlKS50ZXh0KCkpXG5cblxuICBjb25zdCAkY29sID0gJ3RvdF9zJyArIHNlbWFpbmUgKyAnXycgKyBtYXRpZXJlXG5cbiAgbGV0IGNtID0gcGFyc2VJbnQoJCgnIycgKyAkY29sICsgJ19jbScpLnZhbCgpKVxuICBpZiAoaXNOYU4oY20pKSB7XG4gICAgY20gPSAwXG4gIH1cblxuICBsZXQgdGQgPSBwYXJzZUludCgkKCcjJyArICRjb2wgKyAnX3RkJykudmFsKCkpXG4gIGlmIChpc05hTih0ZCkpIHtcbiAgICB0ZCA9IDBcbiAgfVxuXG4gIGxldCB0cCA9IHBhcnNlSW50KCQoJyMnICsgJGNvbCArICdfdHAnKS52YWwoKSlcbiAgaWYgKGlzTmFOKHRwKSkge1xuICAgIHRwID0gMFxuICB9XG5cbiAgY29uc3QgJHRvdGFsID0gY20gKiAkbmJHckNtICogMS41ICsgdGQgKiAkbmJHclRkICogMS41ICsgdHAgKiAkbmJHclRwICogMS41XG4gICQoJyMnICsgJGNvbCkudGV4dCgkdG90YWwpXG5cbiAgLy91cGRhdGUgbGlnbmVcbiAgY29uc3QgJHp0b3RDbSA9ICd0b3RfY21fJyArIG1hdGllcmVcbiAgY29uc3QgJHp0b3RUZCA9ICd0b3RfdGRfJyArIG1hdGllcmVcbiAgY29uc3QgJHp0b3RUcCA9ICd0b3RfdHBfJyArIG1hdGllcmVcbiAgY29uc3QgJHp0b3RTQ20gPSAndG90X2NtX3NlYW5jZV8nICsgbWF0aWVyZVxuICBjb25zdCAkenRvdFNUZCA9ICd0b3RfdGRfc2VhbmNlXycgKyBtYXRpZXJlXG4gIGNvbnN0ICR6dG90U1RwID0gJ3RvdF90cF9zZWFuY2VfJyArIG1hdGllcmVcbiAgY29uc3QgJHp0b3QgPSAndG90XycgKyBtYXRpZXJlXG4gIGNvbnN0ICR6dG90UyA9ICd0b3Rfc2VhbmNlXycgKyBtYXRpZXJlXG4gIGNvbnN0ICR6dG90Q21IID0gJ3RvdF9jbV9oXycgKyBtYXRpZXJlXG4gIGNvbnN0ICR6dG90VGRIID0gJ3RvdF90ZF9oXycgKyBtYXRpZXJlXG4gIGNvbnN0ICR6dG90VHBIID0gJ3RvdF90cF9oXycgKyBtYXRpZXJlXG4gIGNvbnN0ICR6dG90SCA9ICd0b3RfaF8nICsgbWF0aWVyZVxuXG4gIGxldCAkdG90Q20gPSAwXG4gIGxldCAkdG90VGQgPSAwXG4gIGxldCAkdG90VHAgPSAwXG4gIC8vQ01cbiAgJCgnLmNtXycgKyBtYXRpZXJlKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgdCA9IHBhcnNlSW50KCQodGhpcykudmFsKCkpXG4gICAgaWYgKGlzTmFOKHQpKSB7XG4gICAgICB0ID0gMFxuICAgIH1cbiAgICAkdG90Q20gKz0gdFxuICB9KVxuICAkKCcjJyArICR6dG90U0NtKS50ZXh0KCR0b3RDbSlcbiAgJCgnIycgKyAkenRvdENtKS50ZXh0KCR0b3RDbSAqICRuYkdyQ20pXG4gICQoJyMnICsgJHp0b3RDbUgpLnRleHQoJHRvdENtICogMS41ICogJG5iR3JDbSlcblxuICAvL1REXG4gICQoJy50ZF8nICsgbWF0aWVyZSkuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHQgPSBwYXJzZUludCgkKHRoaXMpLnZhbCgpKVxuICAgIGlmIChpc05hTih0KSkge1xuICAgICAgdCA9IDBcbiAgICB9XG4gICAgJHRvdFRkICs9IHRcbiAgfSlcbiAgJCgnIycgKyAkenRvdFNUZCkudGV4dCgkdG90VGQpXG4gICQoJyMnICsgJHp0b3RUZCkudGV4dCgkdG90VGQgKiAkbmJHclRkKVxuICAkKCcjJyArICR6dG90VGRIKS50ZXh0KCR0b3RUZCAqIDEuNSAqICRuYkdyVGQpXG5cbiAgLy9UUFxuICAkKCcudHBfJyArIG1hdGllcmUpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgIGxldCB0ID0gcGFyc2VJbnQoJCh0aGlzKS52YWwoKSlcbiAgICBpZiAoaXNOYU4odCkpIHtcbiAgICAgIHQgPSAwXG4gICAgfVxuICAgICR0b3RUcCArPSB0XG4gIH0pXG4gICQoJyMnICsgJHp0b3RTVHApLnRleHQoJHRvdFRwKVxuICAkKCcjJyArICR6dG90VHApLnRleHQoJHRvdFRwICogJG5iR3JUcClcbiAgJCgnIycgKyAkenRvdFRwSCkudGV4dCgkdG90VHAgKiAxLjUgKiAkbmJHclRwKVxuXG4gICQoJyMnICsgJHp0b3RTKS50ZXh0KCR0b3RDbSArICR0b3RUZCArICR0b3RUcClcbiAgJCgnIycgKyAkenRvdCkudGV4dCgkdG90Q20gKiAkbmJHckNtICsgJHRvdFRkICogJG5iR3JUZCArICR0b3RUcCAqICRuYkdyVHApXG4gICQoJyMnICsgJHp0b3RIKS50ZXh0KCR0b3RDbSAqIDEuNSAqICRuYkdyQ20gKyAkdG90VGQgKiAxLjUgKiAkbmJHclRkICsgJHRvdFRwICogMS41ICogJG5iR3JUcClcbn1cblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNyZWZyZXNoJywgZnVuY3Rpb24gKCkge1xuICB1cGRhdGVBbGxQcm9ncmVzc3Npb24oKTtcbn0pXG5cbmZ1bmN0aW9uIHVwZGF0ZUFsbFByb2dyZXNzc2lvbigpIHtcbiAgY29uc3QgdG90U2VtYWluZSA9IEFycmF5KClcbiAgZm9yICh2YXIgc2VtYWluZSA9IDE7IHNlbWFpbmU8MTU7IHNlbWFpbmUrKykge1xuICAgIHRvdFNlbWFpbmVbc2VtYWluZV0gPSAwO1xuICB9XG4gIHRvdFNlbWFpbmVbJ3RvdGFsJ10gPSAwO1xuICB0b3RTZW1haW5lWyd0b3RhbF9ncm91cGUnXSA9IDA7XG4gIHRvdFNlbWFpbmVbJ3RvdGFsX2hldXJlJ10gPSAwO1xuXG4gICQoJy51bmVfbWF0aWVyZScpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAvL3VwZGF0ZSBjb2xvbm5lXG4gICAgY29uc3QgbWF0aWVyZSA9ICQodGhpcykuZGF0YSgnbWF0aWVyZScpXG4gICAgY29uc3QgJG5iR3JDbSA9IHBhcnNlSW50KCQoJyNuYmdyX2NtXycgKyBtYXRpZXJlKS50ZXh0KCkpXG4gICAgY29uc3QgJG5iR3JUZCA9IHBhcnNlSW50KCQoJyNuYmdyX3RkXycgKyBtYXRpZXJlKS50ZXh0KCkpXG4gICAgY29uc3QgJG5iR3JUcCA9IHBhcnNlSW50KCQoJyNuYmdyX3RwXycgKyBtYXRpZXJlKS50ZXh0KCkpXG4gICAgbGV0ICR0b3RDbSA9IDBcbiAgICBsZXQgJHRvdFRkID0gMFxuICAgIGxldCAkdG90VHAgPSAwXG5cbiAgICBmb3IgKGxldCBzZW1haW5lID0gMTsgc2VtYWluZTwxNTsgc2VtYWluZSsrKSB7XG5cbiAgICAgICAgY29uc3QgJGNvbCA9ICd0b3RfcycgKyBzZW1haW5lICsgJ18nICsgbWF0aWVyZVxuXG4gICAgICAgIGxldCBjbSA9IHBhcnNlSW50KCQoJyMnICsgJGNvbCArICdfY20nKS52YWwoKSlcbiAgICAgICAgaWYgKGlzTmFOKGNtKSkge1xuICAgICAgICAgIGNtID0gMFxuICAgICAgICB9XG4gICAgICAgICR0b3RDbSArPSBjbVxuXG4gICAgICAgIGxldCB0ZCA9IHBhcnNlSW50KCQoJyMnICsgJGNvbCArICdfdGQnKS52YWwoKSlcbiAgICAgICAgaWYgKGlzTmFOKHRkKSkge1xuICAgICAgICAgIHRkID0gMFxuICAgICAgICB9XG4gICAgICAgICR0b3RUZCArPSB0ZFxuXG4gICAgICAgIGxldCB0cCA9IHBhcnNlSW50KCQoJyMnICsgJGNvbCArICdfdHAnKS52YWwoKSlcbiAgICAgICAgaWYgKGlzTmFOKHRwKSkge1xuICAgICAgICAgIHRwID0gMFxuICAgICAgICB9XG4gICAgICAgICR0b3RUcCArPSB0cFxuXG4gICAgICAgIGNvbnN0ICR0b3RhbCA9IGNtICogJG5iR3JDbSAqIDEuNSArIHRkICogJG5iR3JUZCAqIDEuNSArIHRwICogJG5iR3JUcCAqIDEuNVxuICAgICAgICAkKCcjJyArICRjb2wpLnRleHQoJHRvdGFsKVxuICAgICAgICB0b3RTZW1haW5lW3NlbWFpbmVdICs9ICR0b3RhbDtcbiAgICB9Ly9maW4gYm91Y2xlIHNlbWFpbmVcblxuICAgIC8vdXBkYXRlIGxpZ25lXG4gICAgY29uc3QgJHp0b3RDbSA9ICd0b3RfY21fJyArIG1hdGllcmVcbiAgICBjb25zdCAkenRvdFRkID0gJ3RvdF90ZF8nICsgbWF0aWVyZVxuICAgIGNvbnN0ICR6dG90VHAgPSAndG90X3RwXycgKyBtYXRpZXJlXG4gICAgY29uc3QgJHp0b3RTQ20gPSAndG90X2NtX3NlYW5jZV8nICsgbWF0aWVyZVxuICAgIGNvbnN0ICR6dG90U1RkID0gJ3RvdF90ZF9zZWFuY2VfJyArIG1hdGllcmVcbiAgICBjb25zdCAkenRvdFNUcCA9ICd0b3RfdHBfc2VhbmNlXycgKyBtYXRpZXJlXG4gICAgY29uc3QgJHp0b3QgPSAndG90XycgKyBtYXRpZXJlXG4gICAgY29uc3QgJHp0b3RTID0gJ3RvdF9zZWFuY2VfJyArIG1hdGllcmVcbiAgICBjb25zdCAkenRvdENtSCA9ICd0b3RfY21faF8nICsgbWF0aWVyZVxuICAgIGNvbnN0ICR6dG90VGRIID0gJ3RvdF90ZF9oXycgKyBtYXRpZXJlXG4gICAgY29uc3QgJHp0b3RUcEggPSAndG90X3RwX2hfJyArIG1hdGllcmVcbiAgICBjb25zdCAkenRvdEggPSAndG90X2hfJyArIG1hdGllcmVcblxuXG4gICAgJCgnIycgKyAkenRvdFNDbSkudGV4dCgkdG90Q20pXG4gICAgJCgnIycgKyAkenRvdENtKS50ZXh0KCR0b3RDbSAqICRuYkdyQ20pXG4gICAgJCgnIycgKyAkenRvdENtSCkudGV4dCgkdG90Q20gKiAxLjUgKiAkbmJHckNtKVxuXG4gICAgJCgnIycgKyAkenRvdFNUZCkudGV4dCgkdG90VGQpXG4gICAgJCgnIycgKyAkenRvdFRkKS50ZXh0KCR0b3RUZCAqICRuYkdyVGQpXG4gICAgJCgnIycgKyAkenRvdFRkSCkudGV4dCgkdG90VGQgKiAxLjUgKiAkbmJHclRkKVxuXG4gICAgJCgnIycgKyAkenRvdFNUcCkudGV4dCgkdG90VHApXG4gICAgJCgnIycgKyAkenRvdFRwKS50ZXh0KCR0b3RUcCAqICRuYkdyVHApXG4gICAgJCgnIycgKyAkenRvdFRwSCkudGV4dCgkdG90VHAgKiAxLjUgKiAkbmJHclRwKVxuXG4gICAgJCgnIycgKyAkenRvdFMpLnRleHQoJHRvdENtICsgJHRvdFRkICsgJHRvdFRwKVxuICAgICQoJyMnICsgJHp0b3QpLnRleHQoJHRvdENtICogJG5iR3JDbSArICR0b3RUZCAqICRuYkdyVGQgKyAkdG90VHAgKiAkbmJHclRwKVxuICAgICQoJyMnICsgJHp0b3RIKS50ZXh0KCR0b3RDbSAqIDEuNSAqICRuYkdyQ20gKyAkdG90VGQgKiAxLjUgKiAkbmJHclRkICsgJHRvdFRwICogMS41ICogJG5iR3JUcClcblxuICAgIHRvdFNlbWFpbmVbJ3RvdGFsJ10gKz0gJHRvdENtICsgJHRvdFRkICsgJHRvdFRwO1xuICAgIHRvdFNlbWFpbmVbJ3RvdGFsX2dyb3VwZSddICs9ICR0b3RDbSAqICRuYkdyQ20gKyAkdG90VGQgKiAkbmJHclRkICsgJHRvdFRwICogJG5iR3JUcDtcbiAgICB0b3RTZW1haW5lWyd0b3RhbF9oZXVyZSddICs9ICR0b3RDbSAqIDEuNSAqICRuYkdyQ20gKyAkdG90VGQgKiAxLjUgKiAkbmJHclRkICsgJHRvdFRwICogMS41ICogJG5iR3JUcDtcblxuICB9KVxuXG4gIGZvciAodmFyIHNlbWFpbmUgPSAxOyBzZW1haW5lPDE1OyBzZW1haW5lKyspIHtcbiAgICAkKCcjdG90X3MnK3NlbWFpbmUpLnRleHQodG90U2VtYWluZVtzZW1haW5lXSk7XG4gIH1cbiAgJCgnI3RvdF9zZWFuY2UnKS50ZXh0KHRvdFNlbWFpbmVbJ3RvdGFsJ10pO1xuICAkKCcjdG90X2dsb2JhbF9ncm91cGUnKS50ZXh0KHRvdFNlbWFpbmVbJ3RvdGFsX2dyb3VwZSddKTtcbiAgJCgnI3RvdF9nbG9iYWxfaGV1cmUnKS50ZXh0KHRvdFNlbWFpbmVbJ3RvdGFsX2hldXJlJ10pO1xufVxuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciB0cmltID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy10cmltJykudHJpbTtcbnZhciB3aGl0ZXNwYWNlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93aGl0ZXNwYWNlcycpO1xuXG52YXIgJHBhcnNlSW50ID0gZ2xvYmFsLnBhcnNlSW50O1xudmFyIGhleCA9IC9eWystXT8wW1h4XS87XG52YXIgRk9SQ0VEID0gJHBhcnNlSW50KHdoaXRlc3BhY2VzICsgJzA4JykgIT09IDggfHwgJHBhcnNlSW50KHdoaXRlc3BhY2VzICsgJzB4MTYnKSAhPT0gMjI7XG5cbi8vIGBwYXJzZUludGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1wYXJzZWludC1zdHJpbmctcmFkaXhcbm1vZHVsZS5leHBvcnRzID0gRk9SQ0VEID8gZnVuY3Rpb24gcGFyc2VJbnQoc3RyaW5nLCByYWRpeCkge1xuICB2YXIgUyA9IHRyaW0oU3RyaW5nKHN0cmluZykpO1xuICByZXR1cm4gJHBhcnNlSW50KFMsIChyYWRpeCA+Pj4gMCkgfHwgKGhleC50ZXN0KFMpID8gMTYgOiAxMCkpO1xufSA6ICRwYXJzZUludDtcbiIsInZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciB3aGl0ZXNwYWNlID0gJ1snICsgd2hpdGVzcGFjZXMgKyAnXSc7XG52YXIgbHRyaW0gPSBSZWdFeHAoJ14nICsgd2hpdGVzcGFjZSArIHdoaXRlc3BhY2UgKyAnKicpO1xudmFyIHJ0cmltID0gUmVnRXhwKHdoaXRlc3BhY2UgKyB3aGl0ZXNwYWNlICsgJyokJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbSwgdHJpbVN0YXJ0LCB0cmltRW5kLCB0cmltTGVmdCwgdHJpbVJpZ2h0IH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzKSB7XG4gICAgdmFyIHN0cmluZyA9IFN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKCR0aGlzKSk7XG4gICAgaWYgKFRZUEUgJiAxKSBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShsdHJpbSwgJycpO1xuICAgIGlmIChUWVBFICYgMikgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UocnRyaW0sICcnKTtcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbUxlZnQsIHRyaW1TdGFydCB9YCBtZXRob2RzXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbXN0YXJ0XG4gIHN0YXJ0OiBjcmVhdGVNZXRob2QoMSksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbVJpZ2h0LCB0cmltRW5kIH1gIG1ldGhvZHNcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltZW5kXG4gIGVuZDogY3JlYXRlTWV0aG9kKDIpLFxuICAvLyBgU3RyaW5nLnByb3RvdHlwZS50cmltYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltXG4gIHRyaW06IGNyZWF0ZU1ldGhvZCgzKVxufTtcbiIsIi8vIGEgc3RyaW5nIG9mIGFsbCB2YWxpZCB1bmljb2RlIHdoaXRlc3BhY2VzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxubW9kdWxlLmV4cG9ydHMgPSAnXFx1MDAwOVxcdTAwMEFcXHUwMDBCXFx1MDAwQ1xcdTAwMERcXHUwMDIwXFx1MDBBMFxcdTE2ODBcXHUyMDAwXFx1MjAwMVxcdTIwMDJcXHUyMDAzXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwQVxcdTIwMkZcXHUyMDVGXFx1MzAwMFxcdTIwMjhcXHUyMDI5XFx1RkVGRic7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBwYXJzZUludEltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL251bWJlci1wYXJzZS1pbnQnKTtcblxuLy8gYHBhcnNlSW50YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXBhcnNlaW50LXN0cmluZy1yYWRpeFxuJCh7IGdsb2JhbDogdHJ1ZSwgZm9yY2VkOiBwYXJzZUludCAhPSBwYXJzZUludEltcGxlbWVudGF0aW9uIH0sIHtcbiAgcGFyc2VJbnQ6IHBhcnNlSW50SW1wbGVtZW50YXRpb25cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==