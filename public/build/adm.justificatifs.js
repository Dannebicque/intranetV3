(self["webpackChunkintranetv3"] = self["webpackChunkintranetv3"] || []).push([["adm.justificatifs"],{

/***/ "./assets/js/pages/adm.justificatifs.js":
/*!**********************************************!*\
  !*** ./assets/js/pages/adm.justificatifs.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./assets/js/util.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.justificatifs.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 30/07/2020 11:18

$(document).on('click', '.justificatif-accepte', function (e) {
  var justificatif = $(this).data('justificatif');
  $.ajax({
    url: Routing.generate('administration_absence_justificatif_change_etat', {
      uuid: justificatif,
      etat: 'A'
    }),
    success: function success(e) {
      var bx = $('.bx_' + justificatif);
      var parent = bx.parent();
      bx.remove();
      var html = '<a href="#" class="btn btn-success btn-outline"><i class="ti-check"></i>Accepté</a>';
      html = html + '<button data-justificatif="' + justificatif + '"\n' + 'class="btn btn-danger btn-outline btn-square justificatif-annuler bx_' + justificatif + '" data-provide="tooltip" data-placement="bottom"\n' + 'title="Annuler"><i\n' + 'class="material-icons">undo</i></button>';
      parent.prepend(html);
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Justificatif d\'absence validé !', 'success');
    },
    error: function error(e) {
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Une erreur est survenue !', 'danger');
    }
  });
});
$(document).on('click', '.justificatif-refuse', function (e) {
  var justificatif = $(this).data('justificatif');
  $.ajax({
    url: Routing.generate('administration_absence_justificatif_change_etat', {
      uuid: justificatif,
      etat: 'R'
    }),
    success: function success(e) {
      var bx = $('.bx_' + justificatif);
      var parent = bx.parent();
      bx.remove();
      var html = '<a href="#" class="btn btn-warning btn-outline"><i class="ti-check"></i>Refusé</a>';
      html = html + '<button data-justificatif="' + justificatif + '"\n' + 'class="btn btn-danger btn-outline btn-square justificatif-annuler bx_' + justificatif + '" data-provide="tooltip" data-placement="bottom"\n' + 'title="Annuler"><i\n' + 'class="material-icons">undo</i></button>';
      parent.prepend(html);
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Justificatif d\'absence refusé !', 'success');
    },
    error: function error() {
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Une erreur est survenue !', 'danger');
    }
  });
});
$(document).on('click', '.justificatif-annuler', function (e) {
  var justificatif = $(this).data('justificatif');
  $.ajax({
    url: Routing.generate('administration_absence_justificatif_change_etat', {
      uuid: justificatif,
      etat: 'D'
    }),
    success: function success(e) {
      var bx = $('.bx_' + justificatif);
      var parent = bx.parent();
      bx.remove();
      var html = '<a href="#"\n' + '                               class="btn btn-success btn-outline btn-square justificatif-accepte bx_' + justificatif + '" data-provide="tooltip"\n' + '                               data-justificatif="' + justificatif + '"\n' + '                               data-placement="bottom" title="atitle.accepter.le.justificatif"><i\n' + '                                        class="ti-check"></i></a>\n' + '                            <a href="#"\n' + '                               class="btn btn-warning btn-outline btn-square justificatif-refuse bx_' + justificatif + '" data-provide="tooltip"\n' + '                               data-justificatif="' + justificatif + '"\n' + '                               data-placement="bottom" title="atitle.refuser.le.justificatif"><i\n' + '                                        class="ti-na"></i></a>\n' + '\n' + '                            <a href="' + Routing.generate('administration_absence_justificatif_delete', {
        id: justificatif
      }) + '" data-csrf="{{ csrf_token(\'delete\' ~ justificatif.uuidString) }}"\n' + '                               class="btn btn-danger btn-outline btn-square supprimer bx_' + justificatif + '"><i\n' + '                                        class="ti-close" data-provide="tooltip" data-placement="bottom"\n' + '                                        title="atitle.supprimer"></i></a>';
      parent.prepend(html);
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Etat du justificatif d\'absence annulé !', 'success');
    },
    error: function error(e) {
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Une erreur est survenue !', 'danger');
    }
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_arra-a68b23","vendors-node_modules_core-js_modules_es_string_split_js","vendors-node_modules_core-js_internals_array-method-is-strict_js-node_modules_core-js_interna-81f81c","vendors-node_modules_core-js_internals_dom-iterables_js-node_modules_core-js_modules_es_symbol_js","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_dat-47334b","assets_js_util_js"], () => (__webpack_exec__("./assets/js/pages/adm.justificatifs.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vYXNzZXRzL2pzL3BhZ2VzL2FkbS5qdXN0aWZpY2F0aWZzLmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsIm9uIiwiZSIsImp1c3RpZmljYXRpZiIsImRhdGEiLCJhamF4IiwidXJsIiwiUm91dGluZyIsImdlbmVyYXRlIiwidXVpZCIsImV0YXQiLCJzdWNjZXNzIiwiYngiLCJwYXJlbnQiLCJyZW1vdmUiLCJodG1sIiwicHJlcGVuZCIsImFkZENhbGxvdXQiLCJlcnJvciIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsRUFBWixDQUFlLE9BQWYsRUFBd0IsdUJBQXhCLEVBQWlELFVBQVVDLENBQVYsRUFBYTtBQUM1RCxNQUFNQyxZQUFZLEdBQUdKLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUssSUFBUixDQUFhLGNBQWIsQ0FBckI7QUFDQUwsR0FBQyxDQUFDTSxJQUFGLENBQU87QUFDTEMsT0FBRyxFQUFFQyxPQUFPLENBQUNDLFFBQVIsQ0FBaUIsaURBQWpCLEVBQW9FO0FBQUNDLFVBQUksRUFBRU4sWUFBUDtBQUFxQk8sVUFBSSxFQUFFO0FBQTNCLEtBQXBFLENBREE7QUFFTEMsV0FBTyxFQUFFLGlCQUFVVCxDQUFWLEVBQWE7QUFDcEIsVUFBTVUsRUFBRSxHQUFHYixDQUFDLENBQUMsU0FBU0ksWUFBVixDQUFaO0FBQ0EsVUFBTVUsTUFBTSxHQUFHRCxFQUFFLENBQUNDLE1BQUgsRUFBZjtBQUNBRCxRQUFFLENBQUNFLE1BQUg7QUFDQSxVQUFJQyxJQUFJLEdBQUcscUZBQVg7QUFDQUEsVUFBSSxHQUFHQSxJQUFJLEdBQUcsNkJBQVAsR0FBdUNaLFlBQXZDLEdBQXNELEtBQXRELEdBQ0wsdUVBREssR0FDcUVBLFlBRHJFLEdBQ29GLG9EQURwRixHQUVMLHNCQUZLLEdBR0wsMENBSEY7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ZjtBQUNBRSx1REFBVSxDQUFDLDBDQUFELEVBQTZDLFNBQTdDLENBQVY7QUFDRCxLQXZCSTtBQXdCTEMsU0FBSyxFQUFFLGVBQVVoQixDQUFWLEVBQWE7QUFDbEJlLHVEQUFVLENBQUMsMkJBQUQsRUFBOEIsUUFBOUIsQ0FBVjtBQUNEO0FBMUJJLEdBQVA7QUE0QkQsQ0E5QkQsRSIsImZpbGUiOiJhZG0uanVzdGlmaWNhdGlmcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9wYWdlcy9hZG0uanVzdGlmaWNhdGlmcy5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDMwLzA3LzIwMjAgMTE6MThcblxuaW1wb3J0IHthZGRDYWxsb3V0fSBmcm9tICcuLi91dGlsJ1xuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmp1c3RpZmljYXRpZi1hY2NlcHRlJywgZnVuY3Rpb24gKGUpIHtcbiAgY29uc3QganVzdGlmaWNhdGlmID0gJCh0aGlzKS5kYXRhKCdqdXN0aWZpY2F0aWYnKVxuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fYWJzZW5jZV9qdXN0aWZpY2F0aWZfY2hhbmdlX2V0YXQnLCB7dXVpZDoganVzdGlmaWNhdGlmLCBldGF0OiAnQSd9KSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZSkge1xuICAgICAgY29uc3QgYnggPSAkKCcuYnhfJyArIGp1c3RpZmljYXRpZilcbiAgICAgIGNvbnN0IHBhcmVudCA9IGJ4LnBhcmVudCgpXG4gICAgICBieC5yZW1vdmUoKVxuICAgICAgbGV0IGh0bWwgPSAnPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBidG4tb3V0bGluZVwiPjxpIGNsYXNzPVwidGktY2hlY2tcIj48L2k+QWNjZXB0w6k8L2E+J1xuICAgICAgaHRtbCA9IGh0bWwgKyAnPGJ1dHRvbiBkYXRhLWp1c3RpZmljYXRpZj1cIicgKyBqdXN0aWZpY2F0aWYgKyAnXCJcXG4nICtcbiAgICAgICAgJ2NsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLW91dGxpbmUgYnRuLXNxdWFyZSBqdXN0aWZpY2F0aWYtYW5udWxlciBieF8nICsganVzdGlmaWNhdGlmICsgJ1wiIGRhdGEtcHJvdmlkZT1cInRvb2x0aXBcIiBkYXRhLXBsYWNlbWVudD1cImJvdHRvbVwiXFxuJyArXG4gICAgICAgICd0aXRsZT1cIkFubnVsZXJcIj48aVxcbicgK1xuICAgICAgICAnY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPnVuZG88L2k+PC9idXR0b24+J1xuICAgICAgcGFyZW50LnByZXBlbmQoaHRtbClcbiAgICAgIGFkZENhbGxvdXQoJ0p1c3RpZmljYXRpZiBkXFwnYWJzZW5jZSB2YWxpZMOpICEnLCAnc3VjY2VzcycpXG4gICAgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGFkZENhbGxvdXQoJ1VuZSBlcnJldXIgZXN0IHN1cnZlbnVlICEnLCAnZGFuZ2VyJylcbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmp1c3RpZmljYXRpZi1yZWZ1c2UnLCBmdW5jdGlvbiAoZSkge1xuICBjb25zdCBqdXN0aWZpY2F0aWYgPSAkKHRoaXMpLmRhdGEoJ2p1c3RpZmljYXRpZicpXG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9hYnNlbmNlX2p1c3RpZmljYXRpZl9jaGFuZ2VfZXRhdCcsIHt1dWlkOiBqdXN0aWZpY2F0aWYsIGV0YXQ6ICdSJ30pLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XG4gICAgICBjb25zdCBieCA9ICQoJy5ieF8nICsganVzdGlmaWNhdGlmKVxuICAgICAgY29uc3QgcGFyZW50ID0gYngucGFyZW50KClcbiAgICAgIGJ4LnJlbW92ZSgpXG4gICAgICBsZXQgaHRtbCA9ICc8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuIGJ0bi13YXJuaW5nIGJ0bi1vdXRsaW5lXCI+PGkgY2xhc3M9XCJ0aS1jaGVja1wiPjwvaT5SZWZ1c8OpPC9hPidcbiAgICAgIGh0bWwgPSBodG1sICsgJzxidXR0b24gZGF0YS1qdXN0aWZpY2F0aWY9XCInICsganVzdGlmaWNhdGlmICsgJ1wiXFxuJyArXG4gICAgICAgICdjbGFzcz1cImJ0biBidG4tZGFuZ2VyIGJ0bi1vdXRsaW5lIGJ0bi1zcXVhcmUganVzdGlmaWNhdGlmLWFubnVsZXIgYnhfJyArIGp1c3RpZmljYXRpZiArICdcIiBkYXRhLXByb3ZpZGU9XCJ0b29sdGlwXCIgZGF0YS1wbGFjZW1lbnQ9XCJib3R0b21cIlxcbicgK1xuICAgICAgICAndGl0bGU9XCJBbm51bGVyXCI+PGlcXG4nICtcbiAgICAgICAgJ2NsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj51bmRvPC9pPjwvYnV0dG9uPidcbiAgICAgIHBhcmVudC5wcmVwZW5kKGh0bWwpXG4gICAgICBhZGRDYWxsb3V0KCdKdXN0aWZpY2F0aWYgZFxcJ2Fic2VuY2UgcmVmdXPDqSAhJywgJ3N1Y2Nlc3MnKVxuICAgIH0sXG4gICAgZXJyb3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGFkZENhbGxvdXQoJ1VuZSBlcnJldXIgZXN0IHN1cnZlbnVlICEnLCAnZGFuZ2VyJylcbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmp1c3RpZmljYXRpZi1hbm51bGVyJywgZnVuY3Rpb24gKGUpIHtcbiAgY29uc3QganVzdGlmaWNhdGlmID0gJCh0aGlzKS5kYXRhKCdqdXN0aWZpY2F0aWYnKVxuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fYWJzZW5jZV9qdXN0aWZpY2F0aWZfY2hhbmdlX2V0YXQnLCB7dXVpZDoganVzdGlmaWNhdGlmLCBldGF0OiAnRCd9KSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZSkge1xuICAgICAgY29uc3QgYnggPSAkKCcuYnhfJyArIGp1c3RpZmljYXRpZilcbiAgICAgIGNvbnN0IHBhcmVudCA9IGJ4LnBhcmVudCgpXG4gICAgICBieC5yZW1vdmUoKVxuICAgICAgY29uc3QgaHRtbCA9ICc8YSBocmVmPVwiI1wiXFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgYnRuLW91dGxpbmUgYnRuLXNxdWFyZSBqdXN0aWZpY2F0aWYtYWNjZXB0ZSBieF8nICsganVzdGlmaWNhdGlmICsgJ1wiIGRhdGEtcHJvdmlkZT1cInRvb2x0aXBcIlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtanVzdGlmaWNhdGlmPVwiJyArIGp1c3RpZmljYXRpZiArICdcIlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9XCJhdGl0bGUuYWNjZXB0ZXIubGUuanVzdGlmaWNhdGlmXCI+PGlcXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRpLWNoZWNrXCI+PC9pPjwvYT5cXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiXFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXdhcm5pbmcgYnRuLW91dGxpbmUgYnRuLXNxdWFyZSBqdXN0aWZpY2F0aWYtcmVmdXNlIGJ4XycgKyBqdXN0aWZpY2F0aWYgKyAnXCIgZGF0YS1wcm92aWRlPVwidG9vbHRpcFwiXFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1qdXN0aWZpY2F0aWY9XCInICsganVzdGlmaWNhdGlmICsgJ1wiXFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1wbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT1cImF0aXRsZS5yZWZ1c2VyLmxlLmp1c3RpZmljYXRpZlwiPjxpXFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0aS1uYVwiPjwvaT48L2E+XFxuJyArXG4gICAgICAgICdcXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiJyArIFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX2Fic2VuY2VfanVzdGlmaWNhdGlmX2RlbGV0ZScsIHtpZDoganVzdGlmaWNhdGlmfSkgKyAnXCIgZGF0YS1jc3JmPVwie3sgY3NyZl90b2tlbihcXCdkZWxldGVcXCcgfiBqdXN0aWZpY2F0aWYudXVpZFN0cmluZykgfX1cIlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLW91dGxpbmUgYnRuLXNxdWFyZSBzdXBwcmltZXIgYnhfJyArIGp1c3RpZmljYXRpZiArICdcIj48aVxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGktY2xvc2VcIiBkYXRhLXByb3ZpZGU9XCJ0b29sdGlwXCIgZGF0YS1wbGFjZW1lbnQ9XCJib3R0b21cIlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiYXRpdGxlLnN1cHByaW1lclwiPjwvaT48L2E+J1xuICAgICAgcGFyZW50LnByZXBlbmQoaHRtbClcbiAgICAgIGFkZENhbGxvdXQoJ0V0YXQgZHUganVzdGlmaWNhdGlmIGRcXCdhYnNlbmNlIGFubnVsw6kgIScsICdzdWNjZXNzJylcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbiAoZSkge1xuICAgICAgYWRkQ2FsbG91dCgnVW5lIGVycmV1ciBlc3Qgc3VydmVudWUgIScsICdkYW5nZXInKVxuICAgIH1cbiAgfSlcbn0pXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=