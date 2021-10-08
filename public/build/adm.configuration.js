(self["webpackChunkintranetv3"] = self["webpackChunkintranetv3"] || []).push([["adm.configuration"],{

/***/ "./assets/js/pages/adm.configuration.js":
/*!**********************************************!*\
  !*** ./assets/js/pages/adm.configuration.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./assets/js/util.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.configuration.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 06/09/2020 16:14

$(document).on('change', '.changeOption', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $.ajax({
    url: Routing.generate('administration_configuration_change_option'),
    method: 'POST',
    data: {
      type: $(this).data('type'),
      value: $(this).prop('checked'),
      name: $(this).attr('name'),
      id: $(this).data('id')
    },
    success: function success(data) {
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Configuration enregistrée', 'success');
    },
    error: function error(e) {
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Erreur lors de l\'enregistrement de la configuration', 'danger');
    }
  });
});
$(document).on('change', '.changeOptionSelect', function () {
  $.ajax({
    url: Routing.generate('administration_configuration_change_option'),
    method: 'POST',
    data: {
      type: $(this).data('type'),
      value: $(this).val(),
      name: $(this).attr('name'),
      id: $(this).data('id')
    },
    success: function success(data) {
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Configuration enregistrée', 'success');
    },
    error: function error(e) {
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Erreur lors de l\'enregistrement de la configuration', 'danger');
    }
  });
});
$(document).on('change', '.activeAnneeUniversitaire', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $.ajax({
    url: Routing.generate('sa_annee_universitaire_change_active', {
      annee: $(this).data('id')
    }),
    method: 'POST',
    data: {
      value: $(this).prop('checked')
    },
    success: function success(data) {
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_arra-a68b23","vendors-node_modules_core-js_modules_es_string_split_js","vendors-node_modules_core-js_internals_array-method-is-strict_js-node_modules_core-js_interna-81f81c","vendors-node_modules_core-js_internals_dom-iterables_js-node_modules_core-js_modules_es_symbol_js","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_dat-47334b","assets_js_util_js"], () => (__webpack_exec__("./assets/js/pages/adm.configuration.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vYXNzZXRzL2pzL3BhZ2VzL2FkbS5jb25maWd1cmF0aW9uLmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiYWpheCIsInVybCIsIlJvdXRpbmciLCJnZW5lcmF0ZSIsIm1ldGhvZCIsImRhdGEiLCJ0eXBlIiwidmFsdWUiLCJwcm9wIiwibmFtZSIsImF0dHIiLCJpZCIsInN1Y2Nlc3MiLCJhZGRDYWxsb3V0IiwiZXJyb3IiLCJ2YWwiLCJhbm5lZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEVBQVosQ0FBZSxRQUFmLEVBQXlCLGVBQXpCLEVBQTBDLFVBQVVDLENBQVYsRUFBYTtBQUNyREEsR0FBQyxDQUFDQyxjQUFGO0FBQ0FELEdBQUMsQ0FBQ0UsZUFBRjtBQUVBTCxHQUFDLENBQUNNLElBQUYsQ0FBTztBQUNMQyxPQUFHLEVBQUVDLE9BQU8sQ0FBQ0MsUUFBUixDQUFpQiw0Q0FBakIsQ0FEQTtBQUVMQyxVQUFNLEVBQUUsTUFGSDtBQUdMQyxRQUFJLEVBQUU7QUFDSkMsVUFBSSxFQUFFWixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFXLElBQVIsQ0FBYSxNQUFiLENBREY7QUFFSkUsV0FBSyxFQUFFYixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFjLElBQVIsQ0FBYSxTQUFiLENBRkg7QUFHSkMsVUFBSSxFQUFFZixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFnQixJQUFSLENBQWEsTUFBYixDQUhGO0FBSUpDLFFBQUUsRUFBRWpCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVcsSUFBUixDQUFhLElBQWI7QUFKQSxLQUhEO0FBU0xPLFdBQU8sRUFBRSxpQkFBVVAsSUFBVixFQUFnQjtBQUN2QlEsdURBQVUsQ0FBQywyQkFBRCxFQUE4QixTQUE5QixDQUFWO0FBQ0QsS0FYSTtBQVdGQyxTQUFLLEVBQUUsZUFBVWpCLENBQVYsRUFBYTtBQUNyQmdCLHVEQUFVLENBQUMsc0RBQUQsRUFBeUQsUUFBekQsQ0FBVjtBQUNEO0FBYkksR0FBUDtBQWVELENBbkJEO0FBcUJBbkIsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsRUFBWixDQUFlLFFBQWYsRUFBeUIscUJBQXpCLEVBQWdELFlBQVk7QUFDMURGLEdBQUMsQ0FBQ00sSUFBRixDQUFPO0FBQ0xDLE9BQUcsRUFBRUMsT0FBTyxDQUFDQyxRQUFSLENBQWlCLDRDQUFqQixDQURBO0FBRUxDLFVBQU0sRUFBRSxNQUZIO0FBR0xDLFFBQUksRUFBRTtBQUNKQyxVQUFJLEVBQUVaLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVcsSUFBUixDQUFhLE1BQWIsQ0FERjtBQUVKRSxXQUFLLEVBQUViLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXFCLEdBQVIsRUFGSDtBQUdKTixVQUFJLEVBQUVmLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWdCLElBQVIsQ0FBYSxNQUFiLENBSEY7QUFJSkMsUUFBRSxFQUFFakIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRVyxJQUFSLENBQWEsSUFBYjtBQUpBLEtBSEQ7QUFTTE8sV0FBTyxFQUFFLGlCQUFVUCxJQUFWLEVBQWdCO0FBQ3ZCUSx1REFBVSxDQUFDLDJCQUFELEVBQThCLFNBQTlCLENBQVY7QUFDRCxLQVhJO0FBV0ZDLFNBQUssRUFBRSxlQUFVakIsQ0FBVixFQUFhO0FBQ3JCZ0IsdURBQVUsQ0FBQyxzREFBRCxFQUF5RCxRQUF6RCxDQUFWO0FBQ0Q7QUFiSSxHQUFQO0FBZUQsQ0FoQkQ7QUFrQkFuQixDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxFQUFaLENBQWUsUUFBZixFQUF5QiwyQkFBekIsRUFBc0QsVUFBVUMsQ0FBVixFQUFhO0FBQ2pFQSxHQUFDLENBQUNDLGNBQUY7QUFDQUQsR0FBQyxDQUFDRSxlQUFGO0FBRUFMLEdBQUMsQ0FBQ00sSUFBRixDQUFPO0FBQ0xDLE9BQUcsRUFBRUMsT0FBTyxDQUFDQyxRQUFSLENBQWlCLHNDQUFqQixFQUF5RDtBQUFDYSxXQUFLLEVBQUV0QixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFXLElBQVIsQ0FBYSxJQUFiO0FBQVIsS0FBekQsQ0FEQTtBQUVMRCxVQUFNLEVBQUUsTUFGSDtBQUdMQyxRQUFJLEVBQUU7QUFDSkUsV0FBSyxFQUFFYixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFjLElBQVIsQ0FBYSxTQUFiO0FBREgsS0FIRDtBQU1MSSxXQUFPLEVBQUUsaUJBQVVQLElBQVYsRUFBZ0I7QUFDdkJRLHVEQUFVLENBQUMsMkJBQUQsRUFBOEIsU0FBOUIsQ0FBVjtBQUNELEtBUkk7QUFRRkMsU0FBSyxFQUFFLGVBQVVqQixDQUFWLEVBQWE7QUFDckJnQix1REFBVSxDQUFDLHNEQUFELEVBQXlELFFBQXpELENBQVY7QUFDRDtBQVZJLEdBQVA7QUFZRCxDQWhCRCxFIiwiZmlsZSI6ImFkbS5jb25maWd1cmF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3BhZ2VzL2FkbS5jb25maWd1cmF0aW9uLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMDYvMDkvMjAyMCAxNjoxNFxuaW1wb3J0IHthZGRDYWxsb3V0fSBmcm9tICcuLi91dGlsJ1xuXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy5jaGFuZ2VPcHRpb24nLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgZS5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9jb25maWd1cmF0aW9uX2NoYW5nZV9vcHRpb24nKSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBkYXRhOiB7XG4gICAgICB0eXBlOiAkKHRoaXMpLmRhdGEoJ3R5cGUnKSxcbiAgICAgIHZhbHVlOiAkKHRoaXMpLnByb3AoJ2NoZWNrZWQnKSxcbiAgICAgIG5hbWU6ICQodGhpcykuYXR0cignbmFtZScpLFxuICAgICAgaWQ6ICQodGhpcykuZGF0YSgnaWQnKVxuICAgIH0sXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIGFkZENhbGxvdXQoJ0NvbmZpZ3VyYXRpb24gZW5yZWdpc3Ryw6llJywgJ3N1Y2Nlc3MnKVxuICAgIH0sIGVycm9yOiBmdW5jdGlvbiAoZSkge1xuICAgICAgYWRkQ2FsbG91dCgnRXJyZXVyIGxvcnMgZGUgbFxcJ2VucmVnaXN0cmVtZW50IGRlIGxhIGNvbmZpZ3VyYXRpb24nLCAnZGFuZ2VyJylcbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy5jaGFuZ2VPcHRpb25TZWxlY3QnLCBmdW5jdGlvbiAoKSB7XG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9jb25maWd1cmF0aW9uX2NoYW5nZV9vcHRpb24nKSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBkYXRhOiB7XG4gICAgICB0eXBlOiAkKHRoaXMpLmRhdGEoJ3R5cGUnKSxcbiAgICAgIHZhbHVlOiAkKHRoaXMpLnZhbCgpLFxuICAgICAgbmFtZTogJCh0aGlzKS5hdHRyKCduYW1lJyksXG4gICAgICBpZDogJCh0aGlzKS5kYXRhKCdpZCcpXG4gICAgfSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgYWRkQ2FsbG91dCgnQ29uZmlndXJhdGlvbiBlbnJlZ2lzdHLDqWUnLCAnc3VjY2VzcycpXG4gICAgfSwgZXJyb3I6IGZ1bmN0aW9uIChlKSB7XG4gICAgICBhZGRDYWxsb3V0KCdFcnJldXIgbG9ycyBkZSBsXFwnZW5yZWdpc3RyZW1lbnQgZGUgbGEgY29uZmlndXJhdGlvbicsICdkYW5nZXInKVxuICAgIH1cbiAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnLmFjdGl2ZUFubmVlVW5pdmVyc2l0YWlyZScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBlLnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3NhX2FubmVlX3VuaXZlcnNpdGFpcmVfY2hhbmdlX2FjdGl2ZScsIHthbm5lZTogJCh0aGlzKS5kYXRhKCdpZCcpfSksXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgZGF0YToge1xuICAgICAgdmFsdWU6ICQodGhpcykucHJvcCgnY2hlY2tlZCcpXG4gICAgfSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgYWRkQ2FsbG91dCgnQ29uZmlndXJhdGlvbiBlbnJlZ2lzdHLDqWUnLCAnc3VjY2VzcycpXG4gICAgfSwgZXJyb3I6IGZ1bmN0aW9uIChlKSB7XG4gICAgICBhZGRDYWxsb3V0KCdFcnJldXIgbG9ycyBkZSBsXFwnZW5yZWdpc3RyZW1lbnQgZGUgbGEgY29uZmlndXJhdGlvbicsICdkYW5nZXInKVxuICAgIH1cbiAgfSlcbn0pXG4iXSwic291cmNlUm9vdCI6IiJ9