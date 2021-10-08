(self["webpackChunkintranetv3"] = self["webpackChunkintranetv3"] || []).push([["scolarite"],{

/***/ "./assets/js/pages/scolarite.js":
/*!**************************************!*\
  !*** ./assets/js/pages/scolarite.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./assets/js/util.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/scolarite.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 12/12/2020 16:43

$(document).on('change', '#scolarite_semestre', function () {
  $.ajax({
    url: Routing.generate('administration_scolarite_ues_semestre', {
      semestre: $(this).val()
    }),
    type: 'POST',
    success: function success(data) {
      var $html = '<div class="row">';

      for (var key in data) {
        var value = data[key];
        $html = $html + '<div class="col-sm-12 col-md-4">';
        $html = $html + '<div class="form-group"><label for="ue_' + key + '" class="required">UE ' + value + '</label><input type="text" id="ue_' + key + '" name="ue_' + key + '" required="required" class="form-control" value="0"></div>';
        $html = $html + '</div>';
      }

      $html = $html + '</div>';
      var idUE = $('#ues_semestre');
      idUE.empty().append($html);
    },
    error: function error() {
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Erreur la requête.', 'danger');
    }
  });
});
$(document).on('change', '#scolarite_semestre', function () {
  $.ajax({
    url: Routing.generate('administration_scolarite_ues_semestre', {
      semestre: $(this).val()
    }),
    type: 'POST',
    success: function success(data) {
      var $html = '<div class="row">';

      for (var key in data) {
        var value = data[key];
        $html = $html + '<div class="col-sm-12 col-md-4">';
        $html = $html + '<div class="form-group"><label for="ue_' + key + '" class="required">UE ' + value + '</label><input type="text" id="ue_' + key + '" name="ue_' + key + '" required="required" class="form-control" value="0"></div>';
        $html = $html + '</div>';
      }

      $html = $html + '</div>';
      var idUE = $('#ues_semestre');
      idUE.empty().append($html);
    },
    error: function error() {
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Erreur la requête.', 'danger');
    }
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_arra-a68b23","vendors-node_modules_core-js_modules_es_string_split_js","vendors-node_modules_core-js_internals_array-method-is-strict_js-node_modules_core-js_interna-81f81c","vendors-node_modules_core-js_internals_dom-iterables_js-node_modules_core-js_modules_es_symbol_js","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_dat-47334b","assets_js_util_js"], () => (__webpack_exec__("./assets/js/pages/scolarite.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vYXNzZXRzL2pzL3BhZ2VzL3Njb2xhcml0ZS5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJvbiIsImFqYXgiLCJ1cmwiLCJSb3V0aW5nIiwiZ2VuZXJhdGUiLCJzZW1lc3RyZSIsInZhbCIsInR5cGUiLCJzdWNjZXNzIiwiZGF0YSIsIiRodG1sIiwia2V5IiwidmFsdWUiLCJpZFVFIiwiZW1wdHkiLCJhcHBlbmQiLCJlcnJvciIsImFkZENhbGxvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBQSxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxFQUFaLENBQWUsUUFBZixFQUF5QixxQkFBekIsRUFBZ0QsWUFBWTtBQUMxREYsR0FBQyxDQUFDRyxJQUFGLENBQU87QUFDTEMsT0FBRyxFQUFFQyxPQUFPLENBQUNDLFFBQVIsQ0FBaUIsdUNBQWpCLEVBQTBEO0FBQUNDLGNBQVEsRUFBRVAsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRUSxHQUFSO0FBQVgsS0FBMUQsQ0FEQTtBQUVMQyxRQUFJLEVBQUUsTUFGRDtBQUdMQyxXQUFPLEVBQUUsaUJBQVVDLElBQVYsRUFBZ0I7QUFDdkIsVUFBSUMsS0FBSyxHQUFHLG1CQUFaOztBQUNBLFdBQUssSUFBSUMsR0FBVCxJQUFnQkYsSUFBaEIsRUFBc0I7QUFDcEIsWUFBSUcsS0FBSyxHQUFHSCxJQUFJLENBQUNFLEdBQUQsQ0FBaEI7QUFDQUQsYUFBSyxHQUFHQSxLQUFLLEdBQUcsa0NBQWhCO0FBQ0FBLGFBQUssR0FBR0EsS0FBSyxHQUFHLHlDQUFSLEdBQW9EQyxHQUFwRCxHQUEwRCx3QkFBMUQsR0FBcUZDLEtBQXJGLEdBQTZGLG9DQUE3RixHQUFvSUQsR0FBcEksR0FBMEksYUFBMUksR0FBMEpBLEdBQTFKLEdBQWdLLDZEQUF4SztBQUNBRCxhQUFLLEdBQUdBLEtBQUssR0FBRyxRQUFoQjtBQUNEOztBQUNEQSxXQUFLLEdBQUdBLEtBQUssR0FBRyxRQUFoQjtBQUNBLFVBQU1HLElBQUksR0FBR2YsQ0FBQyxDQUFDLGVBQUQsQ0FBZDtBQUNBZSxVQUFJLENBQUNDLEtBQUwsR0FBYUMsTUFBYixDQUFvQkwsS0FBcEI7QUFDRCxLQWRJO0FBZUxNLFNBQUssRUFBRSxpQkFBWTtBQUNqQkMsdURBQVUsQ0FBQyxvQkFBRCxFQUF1QixRQUF2QixDQUFWO0FBQ0Q7QUFqQkksR0FBUDtBQW1CRCxDQXBCRDtBQXNCQW5CLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEVBQVosQ0FBZSxRQUFmLEVBQXlCLHFCQUF6QixFQUFnRCxZQUFZO0FBQzFERixHQUFDLENBQUNHLElBQUYsQ0FBTztBQUNMQyxPQUFHLEVBQUVDLE9BQU8sQ0FBQ0MsUUFBUixDQUFpQix1Q0FBakIsRUFBMEQ7QUFBQ0MsY0FBUSxFQUFFUCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFRLEdBQVI7QUFBWCxLQUExRCxDQURBO0FBRUxDLFFBQUksRUFBRSxNQUZEO0FBR0xDLFdBQU8sRUFBRSxpQkFBVUMsSUFBVixFQUFnQjtBQUN2QixVQUFJQyxLQUFLLEdBQUcsbUJBQVo7O0FBQ0EsV0FBSyxJQUFJQyxHQUFULElBQWdCRixJQUFoQixFQUFzQjtBQUNwQixZQUFJRyxLQUFLLEdBQUdILElBQUksQ0FBQ0UsR0FBRCxDQUFoQjtBQUNBRCxhQUFLLEdBQUdBLEtBQUssR0FBRyxrQ0FBaEI7QUFDQUEsYUFBSyxHQUFHQSxLQUFLLEdBQUcseUNBQVIsR0FBb0RDLEdBQXBELEdBQTBELHdCQUExRCxHQUFxRkMsS0FBckYsR0FBNkYsb0NBQTdGLEdBQW9JRCxHQUFwSSxHQUEwSSxhQUExSSxHQUEwSkEsR0FBMUosR0FBZ0ssNkRBQXhLO0FBQ0FELGFBQUssR0FBR0EsS0FBSyxHQUFHLFFBQWhCO0FBQ0Q7O0FBQ0RBLFdBQUssR0FBR0EsS0FBSyxHQUFHLFFBQWhCO0FBQ0EsVUFBTUcsSUFBSSxHQUFHZixDQUFDLENBQUMsZUFBRCxDQUFkO0FBQ0FlLFVBQUksQ0FBQ0MsS0FBTCxHQUFhQyxNQUFiLENBQW9CTCxLQUFwQjtBQUNELEtBZEk7QUFlTE0sU0FBSyxFQUFFLGlCQUFZO0FBQ2pCQyx1REFBVSxDQUFDLG9CQUFELEVBQXVCLFFBQXZCLENBQVY7QUFDRDtBQWpCSSxHQUFQO0FBbUJELENBcEJELEUiLCJmaWxlIjoic2NvbGFyaXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3BhZ2VzL3Njb2xhcml0ZS5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDEyLzEyLzIwMjAgMTY6NDNcblxuXG5pbXBvcnQge2FkZENhbGxvdXR9IGZyb20gJy4uL3V0aWwnXG5cbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnI3Njb2xhcml0ZV9zZW1lc3RyZScsIGZ1bmN0aW9uICgpIHtcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX3Njb2xhcml0ZV91ZXNfc2VtZXN0cmUnLCB7c2VtZXN0cmU6ICQodGhpcykudmFsKCl9KSxcbiAgICB0eXBlOiAnUE9TVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIGxldCAkaHRtbCA9ICc8ZGl2IGNsYXNzPVwicm93XCI+J1xuICAgICAgZm9yICh2YXIga2V5IGluIGRhdGEpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gZGF0YVtrZXldXG4gICAgICAgICRodG1sID0gJGh0bWwgKyAnPGRpdiBjbGFzcz1cImNvbC1zbS0xMiBjb2wtbWQtNFwiPidcbiAgICAgICAgJGh0bWwgPSAkaHRtbCArICc8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPjxsYWJlbCBmb3I9XCJ1ZV8nICsga2V5ICsgJ1wiIGNsYXNzPVwicmVxdWlyZWRcIj5VRSAnICsgdmFsdWUgKyAnPC9sYWJlbD48aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInVlXycgKyBrZXkgKyAnXCIgbmFtZT1cInVlXycgKyBrZXkgKyAnXCIgcmVxdWlyZWQ9XCJyZXF1aXJlZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9XCIwXCI+PC9kaXY+J1xuICAgICAgICAkaHRtbCA9ICRodG1sICsgJzwvZGl2PidcbiAgICAgIH1cbiAgICAgICRodG1sID0gJGh0bWwgKyAnPC9kaXY+J1xuICAgICAgY29uc3QgaWRVRSA9ICQoJyN1ZXNfc2VtZXN0cmUnKVxuICAgICAgaWRVRS5lbXB0eSgpLmFwcGVuZCgkaHRtbClcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbiAoKSB7XG4gICAgICBhZGRDYWxsb3V0KCdFcnJldXIgbGEgcmVxdcOqdGUuJywgJ2RhbmdlcicpXG4gICAgfVxuICB9KVxufSlcblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcjc2NvbGFyaXRlX3NlbWVzdHJlJywgZnVuY3Rpb24gKCkge1xuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fc2NvbGFyaXRlX3Vlc19zZW1lc3RyZScsIHtzZW1lc3RyZTogJCh0aGlzKS52YWwoKX0pLFxuICAgIHR5cGU6ICdQT1NUJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgbGV0ICRodG1sID0gJzxkaXYgY2xhc3M9XCJyb3dcIj4nXG4gICAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuICAgICAgICBsZXQgdmFsdWUgPSBkYXRhW2tleV1cbiAgICAgICAgJGh0bWwgPSAkaHRtbCArICc8ZGl2IGNsYXNzPVwiY29sLXNtLTEyIGNvbC1tZC00XCI+J1xuICAgICAgICAkaHRtbCA9ICRodG1sICsgJzxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+PGxhYmVsIGZvcj1cInVlXycgKyBrZXkgKyAnXCIgY2xhc3M9XCJyZXF1aXJlZFwiPlVFICcgKyB2YWx1ZSArICc8L2xhYmVsPjxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidWVfJyArIGtleSArICdcIiBuYW1lPVwidWVfJyArIGtleSArICdcIiByZXF1aXJlZD1cInJlcXVpcmVkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT1cIjBcIj48L2Rpdj4nXG4gICAgICAgICRodG1sID0gJGh0bWwgKyAnPC9kaXY+J1xuICAgICAgfVxuICAgICAgJGh0bWwgPSAkaHRtbCArICc8L2Rpdj4nXG4gICAgICBjb25zdCBpZFVFID0gJCgnI3Vlc19zZW1lc3RyZScpXG4gICAgICBpZFVFLmVtcHR5KCkuYXBwZW5kKCRodG1sKVxuICAgIH0sXG4gICAgZXJyb3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGFkZENhbGxvdXQoJ0VycmV1ciBsYSByZXF1w6p0ZS4nLCAnZGFuZ2VyJylcbiAgICB9XG4gIH0pXG59KVxuIl0sInNvdXJjZVJvb3QiOiIifQ==