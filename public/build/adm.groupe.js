(self["webpackChunkintranetv3"] = self["webpackChunkintranetv3"] || []).push([["adm.groupe"],{

/***/ "./assets/js/pages/adm.groupe.js":
/*!***************************************!*\
  !*** ./assets/js/pages/adm.groupe.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./assets/js/util.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.groupe.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 12/09/2021 09:01

$(document).on('click', '.change-semestre', function (e) {
  e.preventDefault();
  $('.change-semestre').removeClass('active show');
  $(this).addClass('active show');
  var semestre = $(this).data('semestre');
  $('#liste_semestre').empty().load(Routing.generate('administration_groupe_liste_semestre', {
    semestre: semestre
  }, function () {
    $('#export_csv').attr('href', Routing.generate('administration_groupe_export', {
      semestre: semestre,
      '_format': 'csv'
    }));
    $('#export_xlsx').attr('href', Routing.generate('administration_groupe_export', {
      semestre: semestre,
      '_format': 'xlsx'
    }));
    $('#export_pdf').attr('href', Routing.generate('administration_groupe_export', {
      semestre: semestre,
      '_format': 'pdf'
    }));
  }));
  $('#type_groupes_semestre').empty().load(Routing.generate('administration_type_groupe_liste_semestre', {
    semestre: semestre
  }));
});
$(document).on('change', '.change-parent', function () {
  var semestre = $(this).data('semestre');
  $.ajax({
    url: Routing.generate('administration_groupe_change_parent'),
    data: {
      groupe: $(this).data('groupe'),
      parent: $(this).val()
    },
    method: 'POST',
    success: function success() {
      $('#groupes_semestre').empty().load(Routing.generate('administration_groupe_liste_semestre', {
        semestre: semestre
      }));
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Mise à jour du parent', 'success');
    }
  });
});
$(document).on('change', '.change-typegroupe', function () {
  var semestre = $(this).data('semestre');
  $.ajax({
    url: Routing.generate('administration_groupe_change_typegroupe'),
    data: {
      groupe: $(this).data('groupe'),
      typegroupe: $(this).val()
    },
    method: 'POST',
    success: function success() {
      $('#groupes_semestre').empty().load(Routing.generate('administration_groupe_liste_semestre', {
        semestre: semestre
      }));
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Mise à jour du type de groupe', 'success');
    }
  });
});
$(document).on('change', '.change-parcours', function () {
  var semestre = $(this).data('semestre');
  $.ajax({
    url: Routing.generate('administration_groupe_change_parcours'),
    data: {
      groupe: $(this).data('groupe'),
      parcours: $(this).val()
    },
    method: 'POST',
    success: function success() {
      $('#groupes_semestre').empty().load(Routing.generate('administration_groupe_liste_semestre', {
        semestre: semestre
      }));
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Mise à jour du parcours associé au groupe', 'success');
    }
  });
});
$(document).on('change', '.change-type_typegroupe', function () {
  $.ajax({
    url: Routing.generate('administration_typegroupe_change_type', {
      typeGroupe: $(this).data('typegroupe')
    }),
    data: {
      type: $(this).val()
    },
    method: 'POST',
    success: function success() {
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Mise à jour du type de type de groupe', 'success');
    }
  });
});
$(document).on('click', '.duplicate-groupe', function (e) {
  e.preventDefault();
  var semestre = $(this).data('semestre');
  $.ajax({
    url: Routing.generate('administration_groupe_duplicate', {
      groupe: $(this).data('groupe')
    }),
    method: 'GET',
    success: function success() {
      $('#groupes_semestre').empty().load(Routing.generate('administration_groupe_liste_semestre', {
        semestre: semestre
      }));
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Groupe dupliqué', 'success');
    }
  });
});
$(document).on('click', '.duplicate-type_groupe', function (e) {
  e.preventDefault();
  var semestre = $(this).data('semestre');
  $.ajax({
    url: Routing.generate('administration_type_groupe_duplicate', {
      typegroupe: $(this).data('typegroupe')
    }),
    method: 'GET',
    success: function success() {
      $('#groupes_semestre').empty().load(Routing.generate('administration_groupe_liste_semestre', {
        semestre: semestre
      }));
      $('#type_groupes_semestre').empty().load(Routing.generate('administration_type_groupe_liste_semestre', {
        semestre: semestre
      }));
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Type de groupe dupliqué', 'success');
    }
  });
});
$(document).on('click', '#addGroupe', function (e) {
  //todo: vérifier que les champs obligatoires sont remplis.
  e.preventDefault();
  var semestre = $(this).data('semestre');
  var data = new FormData($('#form_groupe')[0]);
  $.ajax({
    url: Routing.generate('administration_groupe_new', {
      semestre: semestre
    }),
    data: data,
    processData: false,
    contentType: false,
    method: 'POST',
    success: function success() {
      $('#groupes_semestre').empty().load(Routing.generate('administration_groupe_liste_semestre', {
        semestre: semestre
      }));
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Mise à jour du parcours associé au groupe', 'success');
    }
  });
});
$(document).on('click', '#addTypeGroupe', function (e) {
  e.preventDefault();
  var semestre = $(this).data('semestre');
  $.ajax({
    url: Routing.generate('administration_type_groupe_new', {
      semestre: semestre
    }),
    data: {
      libelle: $('#typegroupe_libelle').val(),
      type: $('#typegroupe_type').val(),
      defaut: $('#typegroupe_defaut').prop('checked')
    },
    method: 'POST',
    success: function success() {
      $('#groupes_semestre').empty().load(Routing.generate('administration_groupe_liste_semestre', {
        semestre: semestre
      }));
      $('#type_groupes_semestre').empty().load(Routing.generate('administration_type_groupe_liste_semestre', {
        semestre: semestre
      }));
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Ajout d\'un type de groupe', 'success');
    }
  });
});
$(document).on('change', '.changeDefaut', function (e) {
  var semestre = $(this).data('semestre');
  e.preventDefault();
  e.stopPropagation();
  $.ajax({
    url: Routing.generate('administration_type_groupe_defaut', {
      semestre: semestre,
      typegroupe: $(this).data('type-groupe')
    }),
    method: 'POST',
    data: {
      defaut: $(this).prop('checked')
    },
    success: function success() {
      $('#type_groupes_semestre').empty().load(Routing.generate('administration_type_groupe_liste_semestre', {
        semestre: semestre
      }));
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Type de groupe par défaut enregistrée', 'success');
    },
    error: function error() {
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Erreur lors de l\'enregistrement', 'danger');
    }
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_arra-a68b23","vendors-node_modules_core-js_modules_es_string_split_js","vendors-node_modules_core-js_internals_array-method-is-strict_js-node_modules_core-js_interna-81f81c","vendors-node_modules_core-js_internals_dom-iterables_js-node_modules_core-js_modules_es_symbol_js","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_dat-47334b","assets_js_util_js"], () => (__webpack_exec__("./assets/js/pages/adm.groupe.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vYXNzZXRzL2pzL3BhZ2VzL2FkbS5ncm91cGUuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50Iiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwic2VtZXN0cmUiLCJkYXRhIiwiZW1wdHkiLCJsb2FkIiwiUm91dGluZyIsImdlbmVyYXRlIiwiYXR0ciIsImFqYXgiLCJ1cmwiLCJncm91cGUiLCJwYXJlbnQiLCJ2YWwiLCJtZXRob2QiLCJzdWNjZXNzIiwiYWRkQ2FsbG91dCIsInR5cGVncm91cGUiLCJwYXJjb3VycyIsInR5cGVHcm91cGUiLCJ0eXBlIiwiRm9ybURhdGEiLCJwcm9jZXNzRGF0YSIsImNvbnRlbnRUeXBlIiwibGliZWxsZSIsImRlZmF1dCIsInByb3AiLCJzdG9wUHJvcGFnYXRpb24iLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUFBLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEVBQVosQ0FBZSxPQUFmLEVBQXdCLGtCQUF4QixFQUE0QyxVQUFVQyxDQUFWLEVBQWE7QUFDdkRBLEdBQUMsQ0FBQ0MsY0FBRjtBQUNBSixHQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQkssV0FBdEIsQ0FBa0MsYUFBbEM7QUFDQUwsR0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRTSxRQUFSLENBQWlCLGFBQWpCO0FBQ0EsTUFBSUMsUUFBUSxHQUFHUCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFRLElBQVIsQ0FBYSxVQUFiLENBQWY7QUFFQVIsR0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJTLEtBQXJCLEdBQTZCQyxJQUE3QixDQUFrQ0MsT0FBTyxDQUFDQyxRQUFSLENBQWlCLHNDQUFqQixFQUF5RDtBQUFDTCxZQUFRLEVBQUVBO0FBQVgsR0FBekQsRUFBK0UsWUFBWTtBQUN6SFAsS0FBQyxDQUFD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QyxDQUFWO0FBQ0QsS0FaSTtBQVlGWSxTQUFLLEVBQUUsaUJBQVk7QUFDcEJaLHVEQUFVLENBQUMsa0NBQUQsRUFBcUMsUUFBckMsQ0FBVjtBQUNEO0FBZEksR0FBUDtBQWlCRCxDQXRCRCxFIiwiZmlsZSI6ImFkbS5ncm91cGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvcGFnZXMvYWRtLmdyb3VwZS5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDEyLzA5LzIwMjEgMDk6MDFcblxuaW1wb3J0IHthZGRDYWxsb3V0fSBmcm9tICcuLi91dGlsJ1xuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNoYW5nZS1zZW1lc3RyZScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICAkKCcuY2hhbmdlLXNlbWVzdHJlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZSBzaG93JylcbiAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlIHNob3cnKVxuICBsZXQgc2VtZXN0cmUgPSAkKHRoaXMpLmRhdGEoJ3NlbWVzdHJlJylcblxuICAkKCcjbGlzdGVfc2VtZXN0cmUnKS5lbXB0eSgpLmxvYWQoUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fZ3JvdXBlX2xpc3RlX3NlbWVzdHJlJywge3NlbWVzdHJlOiBzZW1lc3RyZX0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICQoJyNleHBvcnRfY3N2JykuYXR0cignaHJlZicsIFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX2dyb3VwZV9leHBvcnQnLCB7XG4gICAgICAgIHNlbWVzdHJlOiBzZW1lc3RyZSxcbiAgICAgICAgJ19mb3JtYXQnOiAnY3N2J1xuICAgICAgfSkpXG4gICAgICAkKCcjZXhwb3J0X3hsc3gnKS5hdHRyKCdocmVmJywgUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fZ3JvdXBlX2V4cG9ydCcsIHtcbiAgICAgICAgc2VtZXN0cmU6IHNlbWVzdHJlLFxuICAgICAgICAnX2Zvcm1hdCc6ICd4bHN4J1xuICAgICAgfSkpXG4gICAgICAkKCcjZXhwb3J0X3BkZicpLmF0dHIoJ2hyZWYnLCBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9ncm91cGVfZXhwb3J0Jywge1xuICAgICAgICBzZW1lc3RyZTogc2VtZXN0cmUsXG4gICAgICAgICdfZm9ybWF0JzogJ3BkZidcbiAgICAgIH0pKVxuICAgIH0pXG4gIClcbiAgJCgnI3R5cGVfZ3JvdXBlc19zZW1lc3RyZScpLmVtcHR5KCkubG9hZChSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl90eXBlX2dyb3VwZV9saXN0ZV9zZW1lc3RyZScsIHtzZW1lc3RyZTogc2VtZXN0cmV9KSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnLmNoYW5nZS1wYXJlbnQnLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHNlbWVzdHJlID0gJCh0aGlzKS5kYXRhKCdzZW1lc3RyZScpXG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9ncm91cGVfY2hhbmdlX3BhcmVudCcpLFxuICAgIGRhdGE6IHtcbiAgICAgIGdyb3VwZTogJCh0aGlzKS5kYXRhKCdncm91cGUnKSxcbiAgICAgIHBhcmVudDogJCh0aGlzKS52YWwoKVxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgJCgnI2dyb3VwZXNfc2VtZXN0cmUnKS5lbXB0eSgpLmxvYWQoUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fZ3JvdXBlX2xpc3RlX3NlbWVzdHJlJywge3NlbWVzdHJlOiBzZW1lc3RyZX0pKVxuICAgICAgYWRkQ2FsbG91dCgnTWlzZSDDoCBqb3VyIGR1IHBhcmVudCcsICdzdWNjZXNzJylcbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy5jaGFuZ2UtdHlwZWdyb3VwZScsIGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgc2VtZXN0cmUgPSAkKHRoaXMpLmRhdGEoJ3NlbWVzdHJlJylcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX2dyb3VwZV9jaGFuZ2VfdHlwZWdyb3VwZScpLFxuICAgIGRhdGE6IHtcbiAgICAgIGdyb3VwZTogJCh0aGlzKS5kYXRhKCdncm91cGUnKSxcbiAgICAgIHR5cGVncm91cGU6ICQodGhpcykudmFsKClcbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICQoJyNncm91cGVzX3NlbWVzdHJlJykuZW1wdHkoKS5sb2FkKFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX2dyb3VwZV9saXN0ZV9zZW1lc3RyZScsIHtzZW1lc3RyZTogc2VtZXN0cmV9KSlcbiAgICAgIGFkZENhbGxvdXQoJ01pc2Ugw6Agam91ciBkdSB0eXBlIGRlIGdyb3VwZScsICdzdWNjZXNzJylcbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy5jaGFuZ2UtcGFyY291cnMnLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHNlbWVzdHJlID0gJCh0aGlzKS5kYXRhKCdzZW1lc3RyZScpXG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9ncm91cGVfY2hhbmdlX3BhcmNvdXJzJyksXG4gICAgZGF0YToge1xuICAgICAgZ3JvdXBlOiAkKHRoaXMpLmRhdGEoJ2dyb3VwZScpLFxuICAgICAgcGFyY291cnM6ICQodGhpcykudmFsKClcbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICQoJyNncm91cGVzX3NlbWVzdHJlJykuZW1wdHkoKS5sb2FkKFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX2dyb3VwZV9saXN0ZV9zZW1lc3RyZScsIHtzZW1lc3RyZTogc2VtZXN0cmV9KSlcbiAgICAgIGFkZENhbGxvdXQoJ01pc2Ugw6Agam91ciBkdSBwYXJjb3VycyBhc3NvY2nDqSBhdSBncm91cGUnLCAnc3VjY2VzcycpXG4gICAgfVxuICB9KVxufSlcblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcuY2hhbmdlLXR5cGVfdHlwZWdyb3VwZScsIGZ1bmN0aW9uICgpIHtcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX3R5cGVncm91cGVfY2hhbmdlX3R5cGUnLCB7dHlwZUdyb3VwZTogJCh0aGlzKS5kYXRhKCd0eXBlZ3JvdXBlJyl9KSxcbiAgICBkYXRhOiB7XG4gICAgICB0eXBlOiAkKHRoaXMpLnZhbCgpXG4gICAgfSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICBhZGRDYWxsb3V0KCdNaXNlIMOgIGpvdXIgZHUgdHlwZSBkZSB0eXBlIGRlIGdyb3VwZScsICdzdWNjZXNzJylcbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmR1cGxpY2F0ZS1ncm91cGUnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgY29uc3Qgc2VtZXN0cmUgPSAkKHRoaXMpLmRhdGEoJ3NlbWVzdHJlJylcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX2dyb3VwZV9kdXBsaWNhdGUnLCB7Z3JvdXBlOiAkKHRoaXMpLmRhdGEoJ2dyb3VwZScpfSksXG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAkKCcjZ3JvdXBlc19zZW1lc3RyZScpLmVtcHR5KCkubG9hZChSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9ncm91cGVfbGlzdGVfc2VtZXN0cmUnLCB7c2VtZXN0cmU6IHNlbWVzdHJlfSkpXG4gICAgICBhZGRDYWxsb3V0KCdHcm91cGUgZHVwbGlxdcOpJywgJ3N1Y2Nlc3MnKVxuICAgIH1cbiAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuZHVwbGljYXRlLXR5cGVfZ3JvdXBlJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IHNlbWVzdHJlID0gJCh0aGlzKS5kYXRhKCdzZW1lc3RyZScpXG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl90eXBlX2dyb3VwZV9kdXBsaWNhdGUnLCB7dHlwZWdyb3VwZTogJCh0aGlzKS5kYXRhKCd0eXBlZ3JvdXBlJyl9KSxcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICQoJyNncm91cGVzX3NlbWVzdHJlJykuZW1wdHkoKS5sb2FkKFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX2dyb3VwZV9saXN0ZV9zZW1lc3RyZScsIHtzZW1lc3RyZTogc2VtZXN0cmV9KSlcbiAgICAgICQoJyN0eXBlX2dyb3VwZXNfc2VtZXN0cmUnKS5lbXB0eSgpLmxvYWQoUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fdHlwZV9ncm91cGVfbGlzdGVfc2VtZXN0cmUnLCB7c2VtZXN0cmU6IHNlbWVzdHJlfSkpXG4gICAgICBhZGRDYWxsb3V0KCdUeXBlIGRlIGdyb3VwZSBkdXBsaXF1w6knLCAnc3VjY2VzcycpXG4gICAgfVxuICB9KVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNhZGRHcm91cGUnLCBmdW5jdGlvbiAoZSkge1xuICAvL3RvZG86IHbDqXJpZmllciBxdWUgbGVzIGNoYW1wcyBvYmxpZ2F0b2lyZXMgc29udCByZW1wbGlzLlxuICBlLnByZXZlbnREZWZhdWx0KClcbiAgY29uc3Qgc2VtZXN0cmUgPSAkKHRoaXMpLmRhdGEoJ3NlbWVzdHJlJylcbiAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoJCgnI2Zvcm1fZ3JvdXBlJylbMF0pXG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9ncm91cGVfbmV3Jywge3NlbWVzdHJlOiBzZW1lc3RyZX0pLFxuICAgIGRhdGE6IGRhdGEsXG4gICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxuICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAkKCcjZ3JvdXBlc19zZW1lc3RyZScpLmVtcHR5KCkubG9hZChSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9ncm91cGVfbGlzdGVfc2VtZXN0cmUnLCB7c2VtZXN0cmU6IHNlbWVzdHJlfSkpXG4gICAgICBhZGRDYWxsb3V0KCdNaXNlIMOgIGpvdXIgZHUgcGFyY291cnMgYXNzb2Npw6kgYXUgZ3JvdXBlJywgJ3N1Y2Nlc3MnKVxuICAgIH1cbiAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjYWRkVHlwZUdyb3VwZScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBjb25zdCBzZW1lc3RyZSA9ICQodGhpcykuZGF0YSgnc2VtZXN0cmUnKVxuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fdHlwZV9ncm91cGVfbmV3Jywge3NlbWVzdHJlOiBzZW1lc3RyZX0pLFxuICAgIGRhdGE6IHtcbiAgICAgIGxpYmVsbGU6ICQoJyN0eXBlZ3JvdXBlX2xpYmVsbGUnKS52YWwoKSxcbiAgICAgIHR5cGU6ICQoJyN0eXBlZ3JvdXBlX3R5cGUnKS52YWwoKSxcbiAgICAgIGRlZmF1dDogJCgnI3R5cGVncm91cGVfZGVmYXV0JykucHJvcCgnY2hlY2tlZCcpXG4gICAgfSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAkKCcjZ3JvdXBlc19zZW1lc3RyZScpLmVtcHR5KCkubG9hZChSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9ncm91cGVfbGlzdGVfc2VtZXN0cmUnLCB7c2VtZXN0cmU6IHNlbWVzdHJlfSkpXG4gICAgICAkKCcjdHlwZV9ncm91cGVzX3NlbWVzdHJlJykuZW1wdHkoKS5sb2FkKFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX3R5cGVfZ3JvdXBlX2xpc3RlX3NlbWVzdHJlJywge3NlbWVzdHJlOiBzZW1lc3RyZX0pKVxuICAgICAgYWRkQ2FsbG91dCgnQWpvdXQgZFxcJ3VuIHR5cGUgZGUgZ3JvdXBlJywgJ3N1Y2Nlc3MnKVxuXG4gICAgfVxuICB9KVxufSlcblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcuY2hhbmdlRGVmYXV0JywgZnVuY3Rpb24gKGUpIHtcbiAgY29uc3Qgc2VtZXN0cmUgPSAkKHRoaXMpLmRhdGEoJ3NlbWVzdHJlJylcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGUuc3RvcFByb3BhZ2F0aW9uKClcblxuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fdHlwZV9ncm91cGVfZGVmYXV0Jywge1xuICAgICAgc2VtZXN0cmU6IHNlbWVzdHJlLFxuICAgICAgdHlwZWdyb3VwZTogJCh0aGlzKS5kYXRhKCd0eXBlLWdyb3VwZScpXG4gICAgfSksXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgZGF0YToge1xuICAgICAgZGVmYXV0OiAkKHRoaXMpLnByb3AoJ2NoZWNrZWQnKVxuICAgIH0sXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgJCgnI3R5cGVfZ3JvdXBlc19zZW1lc3RyZScpLmVtcHR5KCkubG9hZChSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl90eXBlX2dyb3VwZV9saXN0ZV9zZW1lc3RyZScsIHtzZW1lc3RyZTogc2VtZXN0cmV9KSlcbiAgICAgIGFkZENhbGxvdXQoJ1R5cGUgZGUgZ3JvdXBlIHBhciBkw6lmYXV0IGVucmVnaXN0csOpZScsICdzdWNjZXNzJylcbiAgICB9LCBlcnJvcjogZnVuY3Rpb24gKCkge1xuICAgICAgYWRkQ2FsbG91dCgnRXJyZXVyIGxvcnMgZGUgbFxcJ2VucmVnaXN0cmVtZW50JywgJ2RhbmdlcicpXG4gICAgfVxuICB9KVxuXG59KVxuXG4iXSwic291cmNlUm9vdCI6IiJ9