(self["webpackChunkintranetv3"] = self["webpackChunkintranetv3"] || []).push([["adm.rattrapages"],{

/***/ "./assets/js/pages/adm.rattrapages.js":
/*!********************************************!*\
  !*** ./assets/js/pages/adm.rattrapages.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./assets/js/util.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.rattrapages.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 29/04/2021 09:25

$(document).on('click', '.rattrapage-accepte', function (e) {
  e.preventDefault();
  var rattrapage = $(this).data('rattrapage');
  $.ajax({
    url: Routing.generate('administration_rattrapage_change_etat', {
      uuid: rattrapage,
      etat: 'a'
    }),
    success: function success() {
      var bx = $('.bx_' + rattrapage);
      var parent = bx.parent();
      bx.remove();
      parent.prepend('<a href="#" class="btn btn-success btn-outline"><i class="ti-check"></i>Acceptée</a>');
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Demande de rattrapage validée !', 'success');
    },
    error: function error() {
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Une erreur est survenue !', 'danger');
    }
  });
});
$(document).on('click', '.rattrapage-refuse', function (e) {
  e.preventDefault();
  var rattrapage = $(this).data('rattrapage');
  $.ajax({
    url: Routing.generate('administration_rattrapage_change_etat', {
      uuid: rattrapage,
      etat: 'r'
    }),
    success: function success() {
      var bx = $('.bx_' + rattrapage);
      var parent = bx.parent();
      bx.remove();
      parent.prepend('<a href="#" class="btn btn-warning btn-outline"><i class="ti-na"></i>Refusée</a>');
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Demande de rattrapage refusée !', 'success');
    },
    error: function error() {
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Une erreur est survenue !', 'danger');
    }
  });
});
$(document).on('change', '.dateChange', function () {
  var rattrapage = $(this).data('rattrapage');
  $.ajax({
    url: Routing.generate('administration_rattrapage_planning_change', {
      uuid: rattrapage,
      type: 'date'
    }),
    data: {
      data: $(this).val()
    },
    method: 'POST',
    error: function error() {
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Une erreur est survenue !', 'danger');
    }
  });
});
$(document).on('blur', '.salleChange', function () {
  var rattrapage = $(this).data('rattrapage');
  $.ajax({
    url: Routing.generate('administration_rattrapage_planning_change', {
      uuid: rattrapage,
      type: 'salle',
      data: $(this).val()
    }),
    error: function error(e) {
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Une erreur est survenue !', 'danger');
    }
  });
});
$(document).on('blur', '.heureChange', function () {
  var rattrapage = $(this).data('rattrapage');
  $.ajax({
    url: Routing.generate('administration_rattrapage_planning_change', {
      uuid: rattrapage,
      type: 'heure',
      data: $(this).val()
    }),
    error: function error() {
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Une erreur est survenue !', 'danger');
    }
  });
});
$(document).on('click', '#sallePartout', function () {
  var salle = $('#salle').val();
  $.ajax({
    //sauvegarde de la salle pour les rattrapages du diplôme
    url: Routing.generate('administration_rattrapage_update_global', {
      type: 'salle',
      diplome: diplome
    }),
    data: {
      valeur: salle
    },
    method: 'POST',
    success: function success() {
      $('.salleChange').each(function () {
        $(this).val(salle);
      });
    }
  });
});
$(document).on('click', '#datePartout', function (e) {
  e.preventDefault();
  var date = $('#date').val();
  $.ajax({
    //sauvegarde de la salle pour les rattrapages du diplôme
    url: Routing.generate('administration_rattrapage_update_global', {
      type: 'date',
      diplome: diplome
    }),
    data: {
      valeur: date
    },
    method: 'POST',
    success: function success() {
      $('.dateChange').each(function () {
        $(this).val(date);
      });
    }
  });
});
$(document).on('click', '#heurePartout', function (e) {
  e.preventDefault();
  var heure = $('#heure').val();
  $.ajax({
    //sauvegarde de la salle pour les rattrapages du diplôme
    url: Routing.generate('administration_rattrapage_update_global', {
      type: 'heure',
      diplome: diplome
    }),
    data: {
      valeur: heure
    },
    method: 'POST',
    success: function success() {
      $('.heureChange').each(function () {
        $(this).val(heure);
      });
    }
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_arra-a68b23","vendors-node_modules_core-js_modules_es_string_split_js","vendors-node_modules_core-js_internals_array-method-is-strict_js-node_modules_core-js_interna-81f81c","vendors-node_modules_core-js_internals_dom-iterables_js-node_modules_core-js_modules_es_symbol_js","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_dat-47334b","assets_js_util_js"], () => (__webpack_exec__("./assets/js/pages/adm.rattrapages.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vYXNzZXRzL2pzL3BhZ2VzL2FkbS5yYXR0cmFwYWdlcy5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJhdHRyYXBhZ2UiLCJkYXRhIiwiYWpheCIsInVybCIsIlJvdXRpbmciLCJnZW5lcmF0ZSIsInV1aWQiLCJldGF0Iiwic3VjY2VzcyIsImJ4IiwicGFyZW50IiwicmVtb3ZlIiwicHJlcGVuZCIsImFkZENhbGxvdXQiLCJlcnJvciIsInR5cGUiLCJ2YWwiLCJtZXRob2QiLCJzYWxsZSIsImRpcGxvbWUiLCJ2YWxldXIiLCJlYWNoIiwiZGF0ZSIsImhldXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsRUFBWixDQUFlLE9BQWYsRUFBd0IscUJBQXhCLEVBQStDLFVBQVVDLENBQVYsRUFBYTtBQUMxREEsR0FBQyxDQUFDQyxjQUFGO0FBQ0EsTUFBTUMsVUFBVSxHQUFHTCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFNLElBQVIsQ0FBYSxZQUFiLENBQW5CO0FBQ0FOLEdBQUMsQ0FBQ08sSUFBRixDQUFPO0FBQ0xDLE9BQUcsRUFBRUMsT0FBTyxDQUFDQyxRQUFSLENBQWlCLHVDQUFqQixFQUEwRDtBQUFDQyxVQUFJLEVBQUVOLFVBQVA7QUFBbUJPLFVBQUksRUFBRTtBQUF6QixLQUExRCxDQURBO0FBRUxDLFdBQU8sRUFBRSxtQkFBWTtBQUNuQixVQUFNQyxFQUFFLEdBQUdkLENBQUMsQ0FBQyxTQUFTSyxVQUFWLENBQVo7QUFDQSxVQUFNVSxNQUFNLEdBQUdELEVBQUUsQ0FBQ0MsTUFBSCxFQUFmO0FBQ0FELFFBQUUsQ0FBQ0UsTUFBSDtBQUNBRCxZQUFNLENBQUNFLE9BQVAsQ0FBZSxzRkFBZjtBQUNBQyx1REFBVSxDQUFDLGlDQUFELEVBQW9D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SSxHQUFQO0FBYUQsQ0FoQkQsRSIsImZpbGUiOiJhZG0ucmF0dHJhcGFnZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvcGFnZXMvYWRtLnJhdHRyYXBhZ2VzLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMjkvMDQvMjAyMSAwOToyNVxuaW1wb3J0IHthZGRDYWxsb3V0fSBmcm9tICcuLi91dGlsJ1xuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnJhdHRyYXBhZ2UtYWNjZXB0ZScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBjb25zdCByYXR0cmFwYWdlID0gJCh0aGlzKS5kYXRhKCdyYXR0cmFwYWdlJylcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX3JhdHRyYXBhZ2VfY2hhbmdlX2V0YXQnLCB7dXVpZDogcmF0dHJhcGFnZSwgZXRhdDogJ2EnfSksXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgYnggPSAkKCcuYnhfJyArIHJhdHRyYXBhZ2UpXG4gICAgICBjb25zdCBwYXJlbnQgPSBieC5wYXJlbnQoKVxuICAgICAgYngucmVtb3ZlKClcbiAgICAgIHBhcmVudC5wcmVwZW5kKCc8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1vdXRsaW5lXCI+PGkgY2xhc3M9XCJ0aS1jaGVja1wiPjwvaT5BY2NlcHTDqWU8L2E+JylcbiAgICAgIGFkZENhbGxvdXQoJ0RlbWFuZGUgZGUgcmF0dHJhcGFnZSB2YWxpZMOpZSAhJywgJ3N1Y2Nlc3MnKVxuICAgIH0sXG4gICAgZXJyb3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGFkZENhbGxvdXQoJ1VuZSBlcnJldXIgZXN0IHN1cnZlbnVlICEnLCAnZGFuZ2VyJylcbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnJhdHRyYXBhZ2UtcmVmdXNlJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IHJhdHRyYXBhZ2UgPSAkKHRoaXMpLmRhdGEoJ3JhdHRyYXBhZ2UnKVxuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fcmF0dHJhcGFnZV9jaGFuZ2VfZXRhdCcsIHt1dWlkOiByYXR0cmFwYWdlLCBldGF0OiAncid9KSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBieCA9ICQoJy5ieF8nICsgcmF0dHJhcGFnZSlcbiAgICAgIGNvbnN0IHBhcmVudCA9IGJ4LnBhcmVudCgpXG4gICAgICBieC5yZW1vdmUoKVxuICAgICAgcGFyZW50LnByZXBlbmQoJzxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLXdhcm5pbmcgYnRuLW91dGxpbmVcIj48aSBjbGFzcz1cInRpLW5hXCI+PC9pPlJlZnVzw6llPC9hPicpXG4gICAgICBhZGRDYWxsb3V0KCdEZW1hbmRlIGRlIHJhdHRyYXBhZ2UgcmVmdXPDqWUgIScsICdzdWNjZXNzJylcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbiAoKSB7XG4gICAgICBhZGRDYWxsb3V0KCdVbmUgZXJyZXVyIGVzdCBzdXJ2ZW51ZSAhJywgJ2RhbmdlcicpXG4gICAgfVxuICB9KVxufSlcblxuXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy5kYXRlQ2hhbmdlJywgZnVuY3Rpb24gKCkge1xuXG4gIGNvbnN0IHJhdHRyYXBhZ2UgPSAkKHRoaXMpLmRhdGEoJ3JhdHRyYXBhZ2UnKVxuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fcmF0dHJhcGFnZV9wbGFubmluZ19jaGFuZ2UnLCB7dXVpZDogcmF0dHJhcGFnZSwgdHlwZTogJ2RhdGUnfSksXG4gICAgZGF0YToge1xuICAgICAgZGF0YTogJCh0aGlzKS52YWwoKVxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgZXJyb3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGFkZENhbGxvdXQoJ1VuZSBlcnJldXIgZXN0IHN1cnZlbnVlICEnLCAnZGFuZ2VyJylcbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignYmx1cicsICcuc2FsbGVDaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHJhdHRyYXBhZ2UgPSAkKHRoaXMpLmRhdGEoJ3JhdHRyYXBhZ2UnKVxuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fcmF0dHJhcGFnZV9wbGFubmluZ19jaGFuZ2UnLCB7dXVpZDogcmF0dHJhcGFnZSwgdHlwZTogJ3NhbGxlJywgZGF0YTogJCh0aGlzKS52YWwoKX0pLFxuICAgIGVycm9yOiBmdW5jdGlvbiAoZSkge1xuICAgICAgYWRkQ2FsbG91dCgnVW5lIGVycmV1ciBlc3Qgc3VydmVudWUgIScsICdkYW5nZXInKVxuICAgIH1cbiAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdibHVyJywgJy5oZXVyZUNoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcmF0dHJhcGFnZSA9ICQodGhpcykuZGF0YSgncmF0dHJhcGFnZScpXG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9yYXR0cmFwYWdlX3BsYW5uaW5nX2NoYW5nZScsIHt1dWlkOiByYXR0cmFwYWdlLCB0eXBlOiAnaGV1cmUnLCBkYXRhOiAkKHRoaXMpLnZhbCgpfSksXG4gICAgZXJyb3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGFkZENhbGxvdXQoJ1VuZSBlcnJldXIgZXN0IHN1cnZlbnVlICEnLCAnZGFuZ2VyJylcbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI3NhbGxlUGFydG91dCcsIGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgc2FsbGUgPSAkKCcjc2FsbGUnKS52YWwoKVxuICAkLmFqYXgoe1xuICAgIC8vc2F1dmVnYXJkZSBkZSBsYSBzYWxsZSBwb3VyIGxlcyByYXR0cmFwYWdlcyBkdSBkaXBsw7RtZVxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fcmF0dHJhcGFnZV91cGRhdGVfZ2xvYmFsJywge3R5cGU6ICdzYWxsZScsIGRpcGxvbWU6ZGlwbG9tZX0pLFxuICAgIGRhdGE6IHtcbiAgICAgIHZhbGV1cjogc2FsbGVcbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICQoJy5zYWxsZUNoYW5nZScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykudmFsKHNhbGxlKVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2RhdGVQYXJ0b3V0JywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IGRhdGUgPSAkKCcjZGF0ZScpLnZhbCgpXG4gICQuYWpheCh7XG4gICAgLy9zYXV2ZWdhcmRlIGRlIGxhIHNhbGxlIHBvdXIgbGVzIHJhdHRyYXBhZ2VzIGR1IGRpcGzDtG1lXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9yYXR0cmFwYWdlX3VwZGF0ZV9nbG9iYWwnLCB7dHlwZTogJ2RhdGUnLCBkaXBsb21lOmRpcGxvbWV9KSxcbiAgICBkYXRhOiB7XG4gICAgICB2YWxldXI6IGRhdGVcbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICQoJy5kYXRlQ2hhbmdlJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS52YWwoZGF0ZSlcbiAgICAgIH0pXG4gICAgfVxuICB9KVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNoZXVyZVBhcnRvdXQnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgY29uc3QgaGV1cmUgPSAkKCcjaGV1cmUnKS52YWwoKVxuICAkLmFqYXgoe1xuICAgIC8vc2F1dmVnYXJkZSBkZSBsYSBzYWxsZSBwb3VyIGxlcyByYXR0cmFwYWdlcyBkdSBkaXBsw7RtZVxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fcmF0dHJhcGFnZV91cGRhdGVfZ2xvYmFsJywge3R5cGU6ICdoZXVyZScsIGRpcGxvbWU6ZGlwbG9tZX0pLFxuICAgIGRhdGE6IHtcbiAgICAgIHZhbGV1cjogaGV1cmVcbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICQoJy5oZXVyZUNoYW5nZScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykudmFsKGhldXJlKVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG59KVxuIl0sInNvdXJjZVJvb3QiOiIifQ==