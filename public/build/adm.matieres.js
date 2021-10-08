(self["webpackChunkintranetv3"] = self["webpackChunkintranetv3"] || []).push([["adm.matieres"],{

/***/ "./assets/js/pages/adm.matieres.js":
/*!*****************************************!*\
  !*** ./assets/js/pages/adm.matieres.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./assets/js/util.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.matieres.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 27/09/2021 22:16

$('#matiere_semestre').change(function () {
  var semestreSelector = $(this); // Request the neighborhoods of the selected city.

  $.ajax({
    url: Routing.generate('api_liste_ue_by_semestre'),
    dataType: 'JSON',
    type: 'POST',
    data: {
      semestreid: semestreSelector.val()
    },
    success: function success(ues) {
      var matiereSelector = $('#matiere_ue'); // Remove current options

      matiereSelector.html(''); // Empty value ...

      matiereSelector.append('<option value> Choisir une UE dans le semestre ' + semestreSelector.find('option:selected').text() + ' ...</option>');
      $.each(ues, function (key, ue) {
        matiereSelector.append('<option value="' + ue.id + '">' + ue.numeroUe + ' ' + ue.libelle + '</option>');
      });
    },
    error: function error(err) {
      alert('An error ocurred while loading data ...');
    }
  });
  $.ajax({
    url: Routing.generate('api_liste_parcour_by_semestre'),
    dataType: 'JSON',
    type: 'POST',
    data: {
      semestreid: semestreSelector.val()
    },
    success: function success(parcours) {
      var parcourSelector = $('#matiere_parcours'); // Remove current options

      parcourSelector.html(''); // Empty value ...

      parcourSelector.append('<option value> Choisir (optionnel) un parcour pour le semestre ' + semestreSelector.find('option:selected').text() + ' ...</option>');
      $.each(parcours, function (key, parcour) {
        parcourSelector.append('<option value="' + parcour.id + '">' + parcour.libelle + '</option>');
      });
    },
    error: function error(err) {
      alert('An error ocurred while loading data ...');
    }
  });
  $.ajax({
    url: Routing.generate('api_matieres_semestre', {
      semestre: semestreSelector.val()
    }),
    dataType: 'JSON',
    type: 'GET',
    success: function success(matieres) {
      var parentSelector = $('#matiere_matiereParent'); // Remove current options

      parentSelector.html(''); // Empty value ...

      parentSelector.append('<option value> Choisir (optionnel) une matière parent pour ' + $('#matiere_libelle').val() + ' ...</option>');
      $.each(matieres, function (key, matiere) {
        parentSelector.append('<option value="' + matiere.id + '">' + matiere.display + '</option>');
      });
    },
    error: function error(err) {
      alert('An error ocurred while loading data ...');
    }
  });
});
$(document).on('click', '.change-diplome', function (e) {
  e.preventDefault();
  $('.change-diplome').removeClass('active show');
  $(this).addClass('active show');
  var $diplome = $(this).data('diplome');
  $.ajax({
    url: Routing.generate('administration_matiere_diplome', {
      diplome: $diplome
    }),
    dataType: 'HTML',
    type: 'GET',
    success: function success(data) {
      $('#content_diplome').slideUp().empty().append(data).slideDown();
      $('#export_csv').attr('href', Routing.generate('administration_matiere_export', {
        diplome: $diplome,
        '_format': 'csv'
      }));
      $('#export_xlsx').attr('href', Routing.generate('administration_matiere_export', {
        diplome: $diplome,
        '_format': 'xlsx'
      }));
      $('#export_pdf').attr('href', Routing.generate('administration_matiere_export', {
        diplome: $diplome,
        '_format': 'pdf'
      }));
    }
  });
});
$(document).on('change', '.changeParcours', function () {
  $.ajax({
    url: Routing.generate('administration_matiere_change_parcours', {
      id: $(this).data('matiere'),
      parcours: $(this).val()
    }),
    method: 'POST',
    success: function success(data) {
      (0,_util__WEBPACK_IMPORTED_MODULE_1__.addCallout)('Modification enregistrée', 'success');
    },
    error: function error(e) {
      (0,_util__WEBPACK_IMPORTED_MODULE_1__.addCallout)('Erreur lors de l\'enregistrement de la modification', 'danger');
    }
  });
});
$(document).on('change', '.changeUe', function () {
  $.ajax({
    url: Routing.generate('administration_matiere_change_ue', {
      id: $(this).data('matiere'),
      ue: $(this).val()
    }),
    method: 'POST',
    success: function success(data) {
      (0,_util__WEBPACK_IMPORTED_MODULE_1__.addCallout)('Modification enregistrée', 'success');
    },
    error: function error(e) {
      (0,_util__WEBPACK_IMPORTED_MODULE_1__.addCallout)('Erreur lors de l\'enregistrement de la modification', 'danger');
    }
  });
});

/***/ }),

/***/ "./node_modules/core-js/internals/add-to-unscopables.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.find.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $find = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").find;
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var FIND = 'find';
var SKIPS_HOLES = true;

var USES_TO_LENGTH = arrayMethodUsesToLength(FIND);

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_arra-a68b23","vendors-node_modules_core-js_modules_es_string_split_js","vendors-node_modules_core-js_internals_array-method-is-strict_js-node_modules_core-js_interna-81f81c","vendors-node_modules_core-js_internals_dom-iterables_js-node_modules_core-js_modules_es_symbol_js","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_dat-47334b","assets_js_util_js"], () => (__webpack_exec__("./assets/js/pages/adm.matieres.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vYXNzZXRzL2pzL3BhZ2VzL2FkbS5tYXRpZXJlcy5qcyIsIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maW5kLmpzIl0sIm5hbWVzIjpbIiQiLCJjaGFuZ2UiLCJzZW1lc3RyZVNlbGVjdG9yIiwiYWpheCIsInVybCIsIlJvdXRpbmciLCJnZW5lcmF0ZSIsImRhdGFUeXBlIiwidHlwZSIsImRhdGEiLCJzZW1lc3RyZWlkIiwidmFsIiwic3VjY2VzcyIsInVlcyIsIm1hdGllcmVTZWxlY3RvciIsImh0bWwiLCJhcHBlbmQiLCJmaW5kIiwidGV4dCIsImVhY2giLCJrZXkiLCJ1ZSIsImlkIiwibnVtZXJvVWUiLCJsaWJlbGxlIiwiZXJyb3IiLCJlcnIiLCJhbGVydCIsInBhcmNvdXJzIiwicGFyY291clNlbGVjdG9yIiwicGFyY291ciIsInNlbWVzdHJlIiwibWF0aWVyZXMiLCJwYXJlbnRTZWxlY3RvciIsIm1hdGllcmUiLCJkaXNwbGF5IiwiZG9jdW1lbnQiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCIkZGlwbG9tZSIsImRpcGxvbWUiLCJzbGlkZVVwIiwiZW1wdHkiLCJzbGlkZURvd24iLCJhdHRyIiwibWV0aG9kIiwiYWRkQ2FsbG91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUFBLENBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCQyxNQUF2QixDQUE4QixZQUFZO0FBQ3hDLE1BQU1DLGdCQUFnQixHQUFHRixDQUFDLENBQUMsSUFBRCxDQUExQixDQUR3QyxDQUd4Qzs7QUFDQUEsR0FBQyxD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QkFBcUIsRUFBRTs7QUFFbkU7QUFDQTtBQUNBLEdBQUcsdUVBQXVFO0FBQzFFO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSIsImZpbGUiOiJhZG0ubWF0aWVyZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvcGFnZXMvYWRtLm1hdGllcmVzLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMjcvMDkvMjAyMSAyMjoxNlxuXG5pbXBvcnQge2FkZENhbGxvdXR9IGZyb20gJy4uL3V0aWwnXG5cbiQoJyNtYXRpZXJlX3NlbWVzdHJlJykuY2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgc2VtZXN0cmVTZWxlY3RvciA9ICQodGhpcylcblxuICAvLyBSZXF1ZXN0IHRoZSBuZWlnaGJvcmhvb2RzIG9mIHRoZSBzZWxlY3RlZCBjaXR5LlxuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYXBpX2xpc3RlX3VlX2J5X3NlbWVzdHJlJyksXG4gICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICB0eXBlOiAnUE9TVCcsXG4gICAgZGF0YToge1xuICAgICAgc2VtZXN0cmVpZDogc2VtZXN0cmVTZWxlY3Rvci52YWwoKVxuICAgIH0sXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHVlcykge1xuICAgICAgY29uc3QgbWF0aWVyZVNlbGVjdG9yID0gJCgnI21hdGllcmVfdWUnKVxuXG4gICAgICAvLyBSZW1vdmUgY3VycmVudCBvcHRpb25zXG4gICAgICBtYXRpZXJlU2VsZWN0b3IuaHRtbCgnJylcblxuICAgICAgLy8gRW1wdHkgdmFsdWUgLi4uXG4gICAgICBtYXRpZXJlU2VsZWN0b3IuYXBwZW5kKCc8b3B0aW9uIHZhbHVlPiBDaG9pc2lyIHVuZSBVRSBkYW5zIGxlIHNlbWVzdHJlICcgKyBzZW1lc3RyZVNlbGVjdG9yLmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpLnRleHQoKSArICcgLi4uPC9vcHRpb24+JylcblxuXG4gICAgICAkLmVhY2godWVzLCBmdW5jdGlvbiAoa2V5LCB1ZSkge1xuICAgICAgICBtYXRpZXJlU2VsZWN0b3IuYXBwZW5kKCc8b3B0aW9uIHZhbHVlPVwiJyArIHVlLmlkICsgJ1wiPicgKyB1ZS5udW1lcm9VZSArICcgJyArIHVlLmxpYmVsbGUgKyAnPC9vcHRpb24+JylcbiAgICAgIH0pXG4gICAgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24gKGVycikge1xuICAgICAgYWxlcnQoJ0FuIGVycm9yIG9jdXJyZWQgd2hpbGUgbG9hZGluZyBkYXRhIC4uLicpXG4gICAgfVxuICB9KVxuXG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcGlfbGlzdGVfcGFyY291cl9ieV9zZW1lc3RyZScpLFxuICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgdHlwZTogJ1BPU1QnLFxuICAgIGRhdGE6IHtcbiAgICAgIHNlbWVzdHJlaWQ6IHNlbWVzdHJlU2VsZWN0b3IudmFsKClcbiAgICB9LFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChwYXJjb3Vycykge1xuICAgICAgY29uc3QgcGFyY291clNlbGVjdG9yID0gJCgnI21hdGllcmVfcGFyY291cnMnKVxuXG4gICAgICAvLyBSZW1vdmUgY3VycmVudCBvcHRpb25zXG4gICAgICBwYXJjb3VyU2VsZWN0b3IuaHRtbCgnJylcblxuICAgICAgLy8gRW1wdHkgdmFsdWUgLi4uXG4gICAgICBwYXJjb3VyU2VsZWN0b3IuYXBwZW5kKCc8b3B0aW9uIHZhbHVlPiBDaG9pc2lyIChvcHRpb25uZWwpIHVuIHBhcmNvdXIgcG91ciBsZSBzZW1lc3RyZSAnICsgc2VtZXN0cmVTZWxlY3Rvci5maW5kKCdvcHRpb246c2VsZWN0ZWQnKS50ZXh0KCkgKyAnIC4uLjwvb3B0aW9uPicpXG5cblxuICAgICAgJC5lYWNoKHBhcmNvdXJzLCBmdW5jdGlvbiAoa2V5LCBwYXJjb3VyKSB7XG4gICAgICAgIHBhcmNvdXJTZWxlY3Rvci5hcHBlbmQoJzxvcHRpb24gdmFsdWU9XCInICsgcGFyY291ci5pZCArICdcIj4nICsgcGFyY291ci5saWJlbGxlICsgJzwvb3B0aW9uPicpXG4gICAgICB9KVxuICAgIH0sXG4gICAgZXJyb3I6IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIGFsZXJ0KCdBbiBlcnJvciBvY3VycmVkIHdoaWxlIGxvYWRpbmcgZGF0YSAuLi4nKVxuICAgIH1cbiAgfSlcblxuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYXBpX21hdGllcmVzX3NlbWVzdHJlJywge3NlbWVzdHJlOiBzZW1lc3RyZVNlbGVjdG9yLnZhbCgpfSksXG4gICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICB0eXBlOiAnR0VUJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAobWF0aWVyZXMpIHtcbiAgICAgIGNvbnN0IHBhcmVudFNlbGVjdG9yID0gJCgnI21hdGllcmVfbWF0aWVyZVBhcmVudCcpXG5cbiAgICAgIC8vIFJlbW92ZSBjdXJyZW50IG9wdGlvbnNcbiAgICAgIHBhcmVudFNlbGVjdG9yLmh0bWwoJycpXG5cbiAgICAgIC8vIEVtcHR5IHZhbHVlIC4uLlxuICAgICAgcGFyZW50U2VsZWN0b3IuYXBwZW5kKCc8b3B0aW9uIHZhbHVlPiBDaG9pc2lyIChvcHRpb25uZWwpIHVuZSBtYXRpw6hyZSBwYXJlbnQgcG91ciAnICsgJCgnI21hdGllcmVfbGliZWxsZScpLnZhbCgpICsgJyAuLi48L29wdGlvbj4nKVxuXG5cbiAgICAgICQuZWFjaChtYXRpZXJlcywgZnVuY3Rpb24gKGtleSwgbWF0aWVyZSkge1xuICAgICAgICBwYXJlbnRTZWxlY3Rvci5hcHBlbmQoJzxvcHRpb24gdmFsdWU9XCInICsgbWF0aWVyZS5pZCArICdcIj4nICsgbWF0aWVyZS5kaXNwbGF5ICsgJzwvb3B0aW9uPicpXG4gICAgICB9KVxuICAgIH0sXG4gICAgZXJyb3I6IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIGFsZXJ0KCdBbiBlcnJvciBvY3VycmVkIHdoaWxlIGxvYWRpbmcgZGF0YSAuLi4nKVxuICAgIH1cbiAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY2hhbmdlLWRpcGxvbWUnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgJCgnLmNoYW5nZS1kaXBsb21lJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZSBzaG93JylcbiAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlIHNob3cnKVxuICBsZXQgJGRpcGxvbWUgPSAkKHRoaXMpLmRhdGEoJ2RpcGxvbWUnKVxuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fbWF0aWVyZV9kaXBsb21lJywge2RpcGxvbWU6ICRkaXBsb21lfSksXG4gICAgZGF0YVR5cGU6ICdIVE1MJyxcbiAgICB0eXBlOiAnR0VUJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgJCgnI2NvbnRlbnRfZGlwbG9tZScpLnNsaWRlVXAoKS5lbXB0eSgpLmFwcGVuZChkYXRhKS5zbGlkZURvd24oKVxuICAgICAgJCgnI2V4cG9ydF9jc3YnKS5hdHRyKCdocmVmJywgUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fbWF0aWVyZV9leHBvcnQnLCB7XG4gICAgICAgIGRpcGxvbWU6ICRkaXBsb21lLFxuICAgICAgICAnX2Zvcm1hdCc6ICdjc3YnXG4gICAgICB9KSlcbiAgICAgICQoJyNleHBvcnRfeGxzeCcpLmF0dHIoJ2hyZWYnLCBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9tYXRpZXJlX2V4cG9ydCcsIHtcbiAgICAgICAgZGlwbG9tZTogJGRpcGxvbWUsXG4gICAgICAgICdfZm9ybWF0JzogJ3hsc3gnXG4gICAgICB9KSlcbiAgICAgICQoJyNleHBvcnRfcGRmJykuYXR0cignaHJlZicsIFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX21hdGllcmVfZXhwb3J0Jywge1xuICAgICAgICBkaXBsb21lOiAkZGlwbG9tZSxcbiAgICAgICAgJ19mb3JtYXQnOiAncGRmJ1xuICAgICAgfSkpXG4gICAgfVxuICB9KVxuXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy5jaGFuZ2VQYXJjb3VycycsIGZ1bmN0aW9uICgpIHtcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX21hdGllcmVfY2hhbmdlX3BhcmNvdXJzJywge1xuICAgICAgaWQ6ICQodGhpcykuZGF0YSgnbWF0aWVyZScpLFxuICAgICAgcGFyY291cnM6ICQodGhpcykudmFsKClcbiAgICB9KSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgYWRkQ2FsbG91dCgnTW9kaWZpY2F0aW9uIGVucmVnaXN0csOpZScsICdzdWNjZXNzJylcbiAgICB9LCBlcnJvcjogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGFkZENhbGxvdXQoJ0VycmV1ciBsb3JzIGRlIGxcXCdlbnJlZ2lzdHJlbWVudCBkZSBsYSBtb2RpZmljYXRpb24nLCAnZGFuZ2VyJylcbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy5jaGFuZ2VVZScsIGZ1bmN0aW9uICgpIHtcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX21hdGllcmVfY2hhbmdlX3VlJywge2lkOiAkKHRoaXMpLmRhdGEoJ21hdGllcmUnKSwgdWU6ICQodGhpcykudmFsKCl9KSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgYWRkQ2FsbG91dCgnTW9kaWZpY2F0aW9uIGVucmVnaXN0csOpZScsICdzdWNjZXNzJylcbiAgICB9LCBlcnJvcjogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGFkZENhbGxvdXQoJ0VycmV1ciBsb3JzIGRlIGxcXCdlbnJlZ2lzdHJlbWVudCBkZSBsYSBtb2RpZmljYXRpb24nLCAnZGFuZ2VyJylcbiAgICB9XG4gIH0pXG59KVxuXG5cbiIsInZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZScpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcblxudmFyIFVOU0NPUEFCTEVTID0gd2VsbEtub3duU3ltYm9sKCd1bnNjb3BhYmxlcycpO1xudmFyIEFycmF5UHJvdG90eXBlID0gQXJyYXkucHJvdG90eXBlO1xuXG4vLyBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAdW5zY29wYWJsZXNcbmlmIChBcnJheVByb3RvdHlwZVtVTlNDT1BBQkxFU10gPT0gdW5kZWZpbmVkKSB7XG4gIGRlZmluZVByb3BlcnR5TW9kdWxlLmYoQXJyYXlQcm90b3R5cGUsIFVOU0NPUEFCTEVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiBjcmVhdGUobnVsbClcbiAgfSk7XG59XG5cbi8vIGFkZCBhIGtleSB0byBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICBBcnJheVByb3RvdHlwZVtVTlNDT1BBQkxFU11ba2V5XSA9IHRydWU7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGZpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZmluZDtcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcycpO1xudmFyIGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC11c2VzLXRvLWxlbmd0aCcpO1xuXG52YXIgRklORCA9ICdmaW5kJztcbnZhciBTS0lQU19IT0xFUyA9IHRydWU7XG5cbnZhciBVU0VTX1RPX0xFTkdUSCA9IGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoKEZJTkQpO1xuXG4vLyBTaG91bGRuJ3Qgc2tpcCBob2xlc1xuaWYgKEZJTkQgaW4gW10pIEFycmF5KDEpW0ZJTkRdKGZ1bmN0aW9uICgpIHsgU0tJUFNfSE9MRVMgPSBmYWxzZTsgfSk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZmluZGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maW5kXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBTS0lQU19IT0xFUyB8fCAhVVNFU19UT19MRU5HVEggfSwge1xuICBmaW5kOiBmdW5jdGlvbiBmaW5kKGNhbGxiYWNrZm4gLyogLCB0aGF0ID0gdW5kZWZpbmVkICovKSB7XG4gICAgcmV0dXJuICRmaW5kKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAdW5zY29wYWJsZXNcbmFkZFRvVW5zY29wYWJsZXMoRklORCk7XG4iXSwic291cmNlUm9vdCI6IiJ9