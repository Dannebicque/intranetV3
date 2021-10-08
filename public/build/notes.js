(self["webpackChunkintranetv3"] = self["webpackChunkintranetv3"] || []).push([["notes"],{

/***/ "./assets/js/pages/notes.js":
/*!**********************************!*\
  !*** ./assets/js/pages/notes.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./assets/js/util.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/notes.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 29/03/2021 17:07

$('.savegroupe').click(function () {
  var groupe = $(this).attr('id');
  var notes = {
    'notes': []
  };
  var erreur = false;
  $('.noteetudiant:input').each(function () {
    if ($(this).hasClass(groupe)) //vérifier que c'est le groupe concerné
      {
        var $id = $(this).data('etudiant');
        var blCommentaire = $('#com_' + $id);

        if (blCommentaire.val().length > 255) {
          erreur = true;
          blCommentaire.addClass('is-invalid');
        }

        var obj = {
          'id': $id,
          'note': $(this).val(),
          'absence': $('#abs_' + $id).prop('checked'),
          'commentaire': blCommentaire.val()
        };
        notes['notes'].push(obj);
      }
  });

  if (erreur === false) {
    $.ajax({
      url: Routing.generate('application_personnel_note_ajax_saisie', {
        uuid: $(this).data('evaluation')
      }),
      type: 'POST',
      data: {
        notes: notes
      },
      success: function success(data) {
        (0,_util__WEBPACK_IMPORTED_MODULE_1__.addCallout)('Les notes de <strong>ce groupe</strong> ont été enregistrées avec succés ! Vous pouvez les modifier !', 'success'); //feature: supprimer le "orange" sur les notes sauvegardées. Peut être récupérer en data les notes.
      },
      error: function error() {
        (0,_util__WEBPACK_IMPORTED_MODULE_1__.addCallout)('Une erreur est survenue pendant l\'envoi... <br>Veuillez réessayer', 'danger'); //feature: être plus précis ?
      }
    });
  } else {
    (0,_util__WEBPACK_IMPORTED_MODULE_1__.addCallout)('Le formulaire contient des erreurs. Veuillez corriger et valider de nouveau', 'danger');
  }
});
$(document).on('keyup', '.noteetudiant', function (e) {
  var val = $(this).val();

  if (val === '-0.01') {
    $(this).removeClass('is-invalid').removeClass('is-valid');
  } else if (parseFloat(val) >= 0 && parseFloat(val) <= 20) {
    $(this).removeClass('is-invalid').addClass('is-valid');
  } else {
    $(this).removeClass('is-valid').addClass('is-invalid');
  }
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_arra-a68b23","vendors-node_modules_core-js_modules_es_string_split_js","vendors-node_modules_core-js_internals_array-method-is-strict_js-node_modules_core-js_interna-81f81c","vendors-node_modules_core-js_internals_dom-iterables_js-node_modules_core-js_modules_es_symbol_js","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_dat-47334b","assets_js_util_js"], () => (__webpack_exec__("./assets/js/pages/notes.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vYXNzZXRzL2pzL3BhZ2VzL25vdGVzLmpzIiwid2VicGFjazovL2ludHJhbmV0djMvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbnVtYmVyLXBhcnNlLWZsb2F0LmpzIiwid2VicGFjazovL2ludHJhbmV0djMvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnBhcnNlLWZsb2F0LmpzIl0sIm5hbWVzIjpbIiQiLCJjbGljayIsImdyb3VwZSIsImF0dHIiLCJub3RlcyIsImVycmV1ciIsImVhY2giLCJoYXNDbGFzcyIsIiRpZCIsImRhdGEiLCJibENvbW1lbnRhaXJlIiwidmFsIiwibGVuZ3RoIiwiYWRkQ2xhc3MiLCJvYmoiLCJwcm9wIiwicHVzaCIsImFqYXgiLCJ1cmwiLCJSb3V0aW5nIiwiZ2VuZXJhdGUiLCJ1dWlkIiwidHlwZSIsInN1Y2Nlc3MiLCJhZGRDYWxsb3V0IiwiZXJyb3IiLCJkb2N1bWVudCIsIm9uIiwiZSIsInJlbW92ZUNsYXNzIiwicGFyc2VGbG9hdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUFBLENBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJDLEtBQWpCLENBQXVCLFlBQVk7QUFDakMsTUFBTUMsTUFBTSxHQUFHRixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFHLElBQVIsQ0FBYSxJQUFiLENBQWY7QUFDQSxNQUFNQyxLQUFLLEdBQUc7QUFBQyxhQUFTO0FBQVYsR0FBZDtBQUNBLE1BQUlDLE1BQU0sR0FBRyxLQUFiO0FBQ0FMLEdBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCTSxJQUF6QixDQUE4QixZQUFZO0FBQ3hDLFFBQUlOLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUU8sUUFBUixDQUFpQkwsTUFBakIsQ0FBSixFQUE4QjtBQUM5QjtBQUNFLFlBQU1NLEdBQUcsR0FBR1IsQ0FBQyxDQUFDLElB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Y2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvcGFnZXMvbm90ZXMuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAyOS8wMy8yMDIxIDE3OjA3XG5cbmltcG9ydCB7YWRkQ2FsbG91dH0gZnJvbSAnLi4vdXRpbCdcblxuJCgnLnNhdmVncm91cGUnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGdyb3VwZSA9ICQodGhpcykuYXR0cignaWQnKVxuICBjb25zdCBub3RlcyA9IHsnbm90ZXMnOiBbXX1cbiAgbGV0IGVycmV1ciA9IGZhbHNlXG4gICQoJy5ub3RlZXR1ZGlhbnQ6aW5wdXQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhncm91cGUpKSAvL3bDqXJpZmllciBxdWUgYydlc3QgbGUgZ3JvdXBlIGNvbmNlcm7DqVxuICAgIHtcbiAgICAgIGNvbnN0ICRpZCA9ICQodGhpcykuZGF0YSgnZXR1ZGlhbnQnKVxuICAgICAgY29uc3QgYmxDb21tZW50YWlyZSA9ICQoJyNjb21fJyArICRpZClcbiAgICAgIGlmIChibENvbW1lbnRhaXJlLnZhbCgpLmxlbmd0aCA+IDI1NSkge1xuICAgICAgICBlcnJldXIgPSB0cnVlXG4gICAgICAgIGJsQ29tbWVudGFpcmUuYWRkQ2xhc3MoJ2lzLWludmFsaWQnKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgICdpZCc6ICRpZCxcbiAgICAgICAgJ25vdGUnOiAkKHRoaXMpLnZhbCgpLFxuICAgICAgICAnYWJzZW5jZSc6ICQoJyNhYnNfJyArICRpZCkucHJvcCgnY2hlY2tlZCcpLFxuICAgICAgICAnY29tbWVudGFpcmUnOiBibENvbW1lbnRhaXJlLnZhbCgpXG4gICAgICB9XG5cbiAgICAgIG5vdGVzWydub3RlcyddLnB1c2gob2JqKVxuICAgIH1cbiAgfSlcbiAgaWYgKGVycmV1ciA9PT0gZmFsc2UpIHtcbiAgICAkLmFqYXgoXG4gICAgICB7XG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYXBwbGljYXRpb25fcGVyc29ubmVsX25vdGVfYWpheF9zYWlzaWUnLCB7dXVpZDogJCh0aGlzKS5kYXRhKCdldmFsdWF0aW9uJyl9KSxcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgbm90ZXM6IG5vdGVzXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgYWRkQ2FsbG91dCgnTGVzIG5vdGVzIGRlIDxzdHJvbmc+Y2UgZ3JvdXBlPC9zdHJvbmc+IG9udCDDqXTDqSBlbnJlZ2lzdHLDqWVzIGF2ZWMgc3VjY8OpcyAhIFZvdXMgcG91dmV6IGxlcyBtb2RpZmllciAhJywgJ3N1Y2Nlc3MnKVxuICAgICAgICAgIC8vZmVhdHVyZTogc3VwcHJpbWVyIGxlIFwib3JhbmdlXCIgc3VyIGxlcyBub3RlcyBzYXV2ZWdhcmTDqWVzLiBQZXV0IMOqdHJlIHLDqWN1cMOpcmVyIGVuIGRhdGEgbGVzIG5vdGVzLlxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGFkZENhbGxvdXQoJ1VuZSBlcnJldXIgZXN0IHN1cnZlbnVlIHBlbmRhbnQgbFxcJ2Vudm9pLi4uIDxicj5WZXVpbGxleiByw6llc3NheWVyJywgJ2RhbmdlcicpXG4gICAgICAgICAgLy9mZWF0dXJlOiDDqnRyZSBwbHVzIHByw6ljaXMgP1xuICAgICAgICB9XG4gICAgICB9KVxuICB9IGVsc2Uge1xuICAgIGFkZENhbGxvdXQoJ0xlIGZvcm11bGFpcmUgY29udGllbnQgZGVzIGVycmV1cnMuIFZldWlsbGV6IGNvcnJpZ2VyIGV0IHZhbGlkZXIgZGUgbm91dmVhdScsICdkYW5nZXInKVxuICB9XG5cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdrZXl1cCcsICcubm90ZWV0dWRpYW50JywgZnVuY3Rpb24gKGUpIHtcbiAgY29uc3QgdmFsID0gJCh0aGlzKS52YWwoKVxuICBpZiAodmFsID09PSAnLTAuMDEnKSB7XG4gICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpLnJlbW92ZUNsYXNzKCdpcy12YWxpZCcpXG4gIH0gZWxzZSBpZiAocGFyc2VGbG9hdCh2YWwpID49IDAgJiYgcGFyc2VGbG9hdCh2YWwpIDw9IDIwKSB7XG4gICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpLmFkZENsYXNzKCdpcy12YWxpZCcpXG4gIH0gZWxzZSB7XG4gICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaXMtdmFsaWQnKS5hZGRDbGFzcygnaXMtaW52YWxpZCcpXG4gIH1cbn0pXG5cblxuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciB0cmltID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy10cmltJykudHJpbTtcbnZhciB3aGl0ZXNwYWNlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93aGl0ZXNwYWNlcycpO1xuXG52YXIgJHBhcnNlRmxvYXQgPSBnbG9iYWwucGFyc2VGbG9hdDtcbnZhciBGT1JDRUQgPSAxIC8gJHBhcnNlRmxvYXQod2hpdGVzcGFjZXMgKyAnLTAnKSAhPT0gLUluZmluaXR5O1xuXG4vLyBgcGFyc2VGbG9hdGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXBhcnNlZmxvYXQtc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IEZPUkNFRCA/IGZ1bmN0aW9uIHBhcnNlRmxvYXQoc3RyaW5nKSB7XG4gIHZhciB0cmltbWVkU3RyaW5nID0gdHJpbShTdHJpbmcoc3RyaW5nKSk7XG4gIHZhciByZXN1bHQgPSAkcGFyc2VGbG9hdCh0cmltbWVkU3RyaW5nKTtcbiAgcmV0dXJuIHJlc3VsdCA9PT0gMCAmJiB0cmltbWVkU3RyaW5nLmNoYXJBdCgwKSA9PSAnLScgPyAtMCA6IHJlc3VsdDtcbn0gOiAkcGFyc2VGbG9hdDtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHBhcnNlRmxvYXRJbXBsZW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9udW1iZXItcGFyc2UtZmxvYXQnKTtcblxuLy8gYHBhcnNlRmxvYXRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1wYXJzZWZsb2F0LXN0cmluZ1xuJCh7IGdsb2JhbDogdHJ1ZSwgZm9yY2VkOiBwYXJzZUZsb2F0ICE9IHBhcnNlRmxvYXRJbXBsZW1lbnRhdGlvbiB9LCB7XG4gIHBhcnNlRmxvYXQ6IHBhcnNlRmxvYXRJbXBsZW1lbnRhdGlvblxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9