(self["webpackChunkintranetv3"] = self["webpackChunkintranetv3"] || []).push([["sadm.scolarite"],{

/***/ "./assets/js/pages/sadm.scolarite.js":
/*!*******************************************!*\
  !*** ./assets/js/pages/sadm.scolarite.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./assets/js/util.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/sadm.scolarite.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 21/09/2020 15:49

$(document).on('change', '#chgt_etudiant_departement', function () {
  $.ajax({
    url: Routing.generate('user_change_departement', {
      etudiant: $(this).data('etudiant'),
      departement: $(this).val()
    }),
    method: 'POST',
    success: function success(e) {
      $('#liste_groupes').empty().append('<tr><td colspan="3">Aucun groupe</td></tr>');
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Mofification enregistrée !', 'success');
    },
    error: function error(e) {
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Erreur lors de la sauvegarde de la modification !', 'danger');
    }
  });
});
$(document).on('change', '#chgt_etudiant_fin', function () {
  $.ajax({
    url: Routing.generate('user_change_annee_sortie', {
      etudiant: $(this).data('etudiant'),
      annee: $(this).val()
    }),
    method: 'POST',
    success: function success(e) {
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Mofification enregistrée !', 'success');
    },
    error: function error(e) {
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Erreur lors de la sauvegarde de la modification !', 'danger');
    }
  });
});
$(document).on('keyup', '#etudiant', function () {
  var $val = $(this).val();

  if ($val.length > 2) {
    $('#resultat').empty().load(Routing.generate('sa_etudiant_recherche', {
      needle: $val
    }));
  }
});
$(document).on('change', '#scolarite_semestre', function () {
  $.ajax({
    url: Routing.generate('administration_scolarite_ues_semestre', {
      semestre: $(this).val()
    }),
    type: 'POST',
    success: function success(data) {
      var $html = '<div class="row" id="blocUEs"><div class="col-sm-1">&nbsp;</div><div class="col-sm-11">';

      for (var key in data) {
        var value = data[key];
        $html = $html + '<div class="form-group"><label for="ue_' + key + '" class="required">UE ' + value + '</label><input type="text" id="ue_' + key + '" name="ue_' + key + '" required="required" class="form-control" value="0"></div>';
      }

      $html = $html + '</div></div>';
      var idUE = $('#scolarite_semestre');

      if (document.getElementById("blocUEs")) {
        $('#blocUEs').remove();
      }

      idUE.after($html);
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_arra-a68b23","vendors-node_modules_core-js_modules_es_string_split_js","vendors-node_modules_core-js_internals_array-method-is-strict_js-node_modules_core-js_interna-81f81c","vendors-node_modules_core-js_internals_dom-iterables_js-node_modules_core-js_modules_es_symbol_js","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_dat-47334b","assets_js_util_js"], () => (__webpack_exec__("./assets/js/pages/sadm.scolarite.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vYXNzZXRzL2pzL3BhZ2VzL3NhZG0uc2NvbGFyaXRlLmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsIm9uIiwiYWpheCIsInVybCIsIlJvdXRpbmciLCJnZW5lcmF0ZSIsImV0dWRpYW50IiwiZGF0YSIsImRlcGFydGVtZW50IiwidmFsIiwibWV0aG9kIiwic3VjY2VzcyIsImUiLCJlbXB0eSIsImFwcGVuZCIsImFkZENhbGxvdXQiLCJlcnJvciIsImFubmVlIiwiJHZhbCIsImxlbmd0aCIsImxvYWQiLCJuZWVkbGUiLCJzZW1lc3RyZSIsInR5cGUiLCIkaHRtbCIsImtleSIsInZhbHVlIiwiaWRVRSIsImdldEVsZW1lbnRCeUlkIiwicmVtb3ZlIiwiYWZ0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxFQUFaLENBQWUsUUFBZixFQUF5Qiw0QkFBekIsRUFBdUQsWUFBWTtBQUNqRUYsR0FBQyxDQUFDRyxJQUFGLENBQU87QUFDTEMsT0FBRyxFQUFFQyxPQUFPLENBQUNDLFFBQVIsQ0FBaUIseUJBQWpCLEVBQTRDO0FBQUNDLGNBQVEsRUFBRVAsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRUSxJQUFSLENBQWEsVUFBYixDQUFYO0FBQXFDQyxpQkFBVyxFQUFFVCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFVLEdBQVI7QUFBbEQsS0FBNUMsQ0FEQTtBQUVMQyxVQUFNLEVBQUUsTUFGSDtBQUdMQyxXQUFPLEVBQUUsaUJBQVVDLENBQVYsRUFBYTtBQUNwQmIsT0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JjLEtBQXBCLEdBQTRCQyxNQUE1QixDQUFtQyw0Q0FBbkM7QUFDQUMsdURBQVUsQ0FBQyw0QkFBRCxFQUErQixTQUEvQixDQUFWO0FBQ0QsS0FOSTtBQU9MQyxTQUFLLEVBQUUsZUFBVUosQ0FB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IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3BhZ2VzL3NhZG0uc2NvbGFyaXRlLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMjEvMDkvMjAyMCAxNTo0OVxuaW1wb3J0IHthZGRDYWxsb3V0fSBmcm9tICcuLi91dGlsJ1xuXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJyNjaGd0X2V0dWRpYW50X2RlcGFydGVtZW50JywgZnVuY3Rpb24gKCkge1xuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgndXNlcl9jaGFuZ2VfZGVwYXJ0ZW1lbnQnLCB7ZXR1ZGlhbnQ6ICQodGhpcykuZGF0YSgnZXR1ZGlhbnQnKSwgZGVwYXJ0ZW1lbnQ6ICQodGhpcykudmFsKCl9KSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZSkge1xuICAgICAgJCgnI2xpc3RlX2dyb3VwZXMnKS5lbXB0eSgpLmFwcGVuZCgnPHRyPjx0ZCBjb2xzcGFuPVwiM1wiPkF1Y3VuIGdyb3VwZTwvdGQ+PC90cj4nKVxuICAgICAgYWRkQ2FsbG91dCgnTW9maWZpY2F0aW9uIGVucmVnaXN0csOpZSAhJywgJ3N1Y2Nlc3MnKVxuICAgIH0sXG4gICAgZXJyb3I6IGZ1bmN0aW9uIChlKSB7XG4gICAgICBhZGRDYWxsb3V0KCdFcnJldXIgbG9ycyBkZSBsYSBzYXV2ZWdhcmRlIGRlIGxhIG1vZGlmaWNhdGlvbiAhJywgJ2RhbmdlcicpXG4gICAgfVxuXG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJyNjaGd0X2V0dWRpYW50X2ZpbicsIGZ1bmN0aW9uICgpIHtcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3VzZXJfY2hhbmdlX2FubmVlX3NvcnRpZScsIHtldHVkaWFudDogJCh0aGlzKS5kYXRhKCdldHVkaWFudCcpLCBhbm5lZTogJCh0aGlzKS52YWwoKX0pLFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XG4gICAgICBhZGRDYWxsb3V0KCdNb2ZpZmljYXRpb24gZW5yZWdpc3Ryw6llICEnLCAnc3VjY2VzcycpXG4gICAgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGFkZENhbGxvdXQoJ0VycmV1ciBsb3JzIGRlIGxhIHNhdXZlZ2FyZGUgZGUgbGEgbW9kaWZpY2F0aW9uICEnLCAnZGFuZ2VyJylcbiAgICB9XG5cbiAgfSlcbn0pXG5cblxuJChkb2N1bWVudCkub24oJ2tleXVwJywgJyNldHVkaWFudCcsIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgJHZhbCA9ICQodGhpcykudmFsKClcbiAgaWYgKCR2YWwubGVuZ3RoID4gMikge1xuICAgICQoJyNyZXN1bHRhdCcpLmVtcHR5KCkubG9hZChSb3V0aW5nLmdlbmVyYXRlKCdzYV9ldHVkaWFudF9yZWNoZXJjaGUnLCB7bmVlZGxlOiAkdmFsfSkpXG4gIH1cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnI3Njb2xhcml0ZV9zZW1lc3RyZScsIGZ1bmN0aW9uICgpIHtcbiAgJC5hamF4KFxuICAgIHtcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fc2NvbGFyaXRlX3Vlc19zZW1lc3RyZScsIHtzZW1lc3RyZTogJCh0aGlzKS52YWwoKX0pLFxuICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyICRodG1sID0gJzxkaXYgY2xhc3M9XCJyb3dcIiBpZD1cImJsb2NVRXNcIj48ZGl2IGNsYXNzPVwiY29sLXNtLTFcIj4mbmJzcDs8L2Rpdj48ZGl2IGNsYXNzPVwiY29sLXNtLTExXCI+J1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGFba2V5XVxuICAgICAgICAgICRodG1sID0gJGh0bWwgKyAnPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj48bGFiZWwgZm9yPVwidWVfJyArIGtleSArICdcIiBjbGFzcz1cInJlcXVpcmVkXCI+VUUgJyArIHZhbHVlICsgJzwvbGFiZWw+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ1ZV8nICsga2V5ICsgJ1wiIG5hbWU9XCJ1ZV8nICsga2V5ICsgJ1wiIHJlcXVpcmVkPVwicmVxdWlyZWRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHZhbHVlPVwiMFwiPjwvZGl2PidcbiAgICAgICAgfVxuICAgICAgICAkaHRtbCA9ICRodG1sICsgJzwvZGl2PjwvZGl2PidcbiAgICAgICAgdmFyIGlkVUUgPSAkKCcjc2NvbGFyaXRlX3NlbWVzdHJlJylcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmxvY1VFc1wiKSkge1xuICAgICAgICAgICQoJyNibG9jVUVzJykucmVtb3ZlKClcbiAgICAgICAgfVxuICAgICAgICBpZFVFLmFmdGVyKCRodG1sKVxuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGFkZENhbGxvdXQoJ0VycmV1ciBsYSByZXF1w6p0ZS4nLCAnZGFuZ2VyJylcbiAgICAgIH1cbiAgICB9KTtcbn0pO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9