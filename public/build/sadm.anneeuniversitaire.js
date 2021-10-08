(self["webpackChunkintranetv3"] = self["webpackChunkintranetv3"] || []).push([["sadm.anneeuniversitaire"],{

/***/ "./assets/js/pages/sadm.anneeuniversitaire.js":
/*!****************************************************!*\
  !*** ./assets/js/pages/sadm.anneeuniversitaire.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./assets/js/util.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/sadm.anneeuniversitaire.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 17/08/2020 14:19

$(document).on('change', '.activeAnneeUniversitaire', function (e) {
  e.preventDefault();
  e.stopPropagation();
  var elt = $(this);
  $.ajax({
    url: Routing.generate('sa_annee_universitaire_change_active', {
      annee: $(this).data('id')
    }),
    method: 'POST',
    data: {
      value: $(this).prop('checked')
    },
    success: function success(data) {
      $('.activeAnneeUniversitaire').attr('checked', false);
      elt.attr('checked', true);
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Configuration enregistrée', 'success');
    },
    error: function error(e) {
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Erreur lors de l\'enregistrement de la configuration', 'danger');
    }
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_arra-a68b23","vendors-node_modules_core-js_modules_es_string_split_js","vendors-node_modules_core-js_internals_array-method-is-strict_js-node_modules_core-js_interna-81f81c","vendors-node_modules_core-js_internals_dom-iterables_js-node_modules_core-js_modules_es_symbol_js","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_dat-47334b","assets_js_util_js"], () => (__webpack_exec__("./assets/js/pages/sadm.anneeuniversitaire.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vYXNzZXRzL2pzL3BhZ2VzL3NhZG0uYW5uZWV1bml2ZXJzaXRhaXJlLmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZWx0IiwiYWpheCIsInVybCIsIlJvdXRpbmciLCJnZW5lcmF0ZSIsImFubmVlIiwiZGF0YSIsIm1ldGhvZCIsInZhbHVlIiwicHJvcCIsInN1Y2Nlc3MiLCJhdHRyIiwiYWRkQ2FsbG91dCIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsRUFBWixDQUFlLFFBQWYsRUFBeUIsMkJBQXpCLEVBQXNELFVBQVVDLENBQVYsRUFBYTtBQUNqRUEsR0FBQyxDQUFDQyxjQUFGO0FBQ0FELEdBQUMsQ0FBQ0UsZUFBRjtBQUNBLE1BQUlDLEdBQUcsR0FBR04sQ0FBQyxDQUFDLElBQUQsQ0FBWDtBQUNBQSxHQUFDLENBQUNPLElBQUYsQ0FBTztBQUNMQyxPQUFHLEVBQUVDLE9BQU8sQ0FBQ0MsUUFBUixDQUFpQixzQ0FBakIsRUFBeUQ7QUFBQ0MsV0FBSyxFQUFFWCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFZLElBQVIsQ0FBYSxJQUFiO0FBQVIsS0FBekQsQ0FEQTtBQUVMQyxVQUFNLEVBQUUsTUFGSDtBQUdMRCxRQUFJLEVBQUU7QUFDSkUsV0FBSyxFQUFFZCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFlLElBQVIsQ0FBYSxTQUFiO0FBREgsS0FIRDtBQU1MQyxXQUFPLEVBQUUsaUJBQVVKLElBQVYsRUFBZ0I7QUFDdkJaLE9BQUMsQ0FBQywyQkFBRCxDQUFELENBQStCaUIsSUFBL0IsQ0FBb0MsU0FBcEMsRUFBK0MsS0FBL0M7QUFDQVgsU0FBRyxDQUFDVyxJQUFKLENBQVMsU0FBVCxFQUFvQixJQUFwQjtBQUNBQyx1REFBVSxDQUFDLDJCQUFELEVBQThCLFNBQTlCLENBQVY7QUFDRCxLQVZJO0FBVUZDLFNBQUssRUFBRSxlQUFVaEIsQ0FBVixFQUFhO0FBQ3JCZSx1REFBVSxDQUFDLHNEQUFELEVBQXlELFFBQXpELENBQVY7QUFDRDtBQVpJLEdBQVA7QUFjRCxDQWxCRCxFIiwiZmlsZSI6InNhZG0uYW5uZWV1bml2ZXJzaXRhaXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3BhZ2VzL3NhZG0uYW5uZWV1bml2ZXJzaXRhaXJlLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMTcvMDgvMjAyMCAxNDoxOVxuXG5pbXBvcnQge2FkZENhbGxvdXR9IGZyb20gJy4uL3V0aWwnXG5cbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnLmFjdGl2ZUFubmVlVW5pdmVyc2l0YWlyZScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gIGxldCBlbHQgPSAkKHRoaXMpXG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdzYV9hbm5lZV91bml2ZXJzaXRhaXJlX2NoYW5nZV9hY3RpdmUnLCB7YW5uZWU6ICQodGhpcykuZGF0YSgnaWQnKX0pLFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGRhdGE6IHtcbiAgICAgIHZhbHVlOiAkKHRoaXMpLnByb3AoJ2NoZWNrZWQnKVxuICAgIH0sXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICQoJy5hY3RpdmVBbm5lZVVuaXZlcnNpdGFpcmUnKS5hdHRyKCdjaGVja2VkJywgZmFsc2UpXG4gICAgICBlbHQuYXR0cignY2hlY2tlZCcsIHRydWUpXG4gICAgICBhZGRDYWxsb3V0KCdDb25maWd1cmF0aW9uIGVucmVnaXN0csOpZScsICdzdWNjZXNzJylcbiAgICB9LCBlcnJvcjogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGFkZENhbGxvdXQoJ0VycmV1ciBsb3JzIGRlIGxcXCdlbnJlZ2lzdHJlbWVudCBkZSBsYSBjb25maWd1cmF0aW9uJywgJ2RhbmdlcicpXG4gICAgfVxuICB9KVxufSlcbiJdLCJzb3VyY2VSb290IjoiIn0=