(self["webpackChunk"] = self["webpackChunk"] || []).push([["adm.matieres"],{

/***/ "./assets/js/lang/fr.js":
/*!******************************!*\
  !*** ./assets/js/lang/fr.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataTableLangueFr": () => (/* binding */ dataTableLangueFr)
/* harmony export */ });
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/lang/fr.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 22/07/2020 15:10
var dataTableLangueFr = {
  'decimal': '',
  'emptyTable': 'Aucune donn&eacute;e disponible dans le tableau',
  'info': 'Affichage de l\'&eacute;l&eacute;ment _START_ &agrave; _END_ sur _TOTAL_ &eacute;l&eacute;ments',
  'infoEmpty': 'Affichage de l\'&eacute;l&eacute;ment 0 &agrave; 0 sur 0 &eacute;l&eacute;ment',
  'infoFiltered': '(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)',
  'infoPostFix': '',
  'thousands': ',',
  'lengthMenu': 'Afficher _MENU_ &eacute;l&eacute;ments',
  'loadingRecords': 'Chargement en cours...',
  'processing': 'Traitement en cours...',
  'search': 'Rechercher&nbsp;:',
  'zeroRecords': 'Aucun &eacute;l&eacute;ment &agrave; afficher',
  'paginate': {
    'first': 'Premier',
    'last': 'Dernier',
    'next': 'Suivant',
    'previous': 'Pr&eacute;c&eacute;dent'
  },
  'aria': {
    'sortAscending': ': activer pour trier la colonne par ordre croissant',
    'sortDescending': ': activer pour trier la colonne par ordre d&eacute;croissant'
  }
};

/***/ }),

/***/ "./assets/js/pages/adm.matieres.js":
/*!*****************************************!*\
  !*** ./assets/js/pages/adm.matieres.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lang_fr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lang/fr */ "./assets/js/lang/fr.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.matieres.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 01/03/2021 18:49

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
      $('#content_diplome').slideUp().empty().append(data).slideDown(); // $('.datatable_matieres').dataTable({
      //   language: dataTableLangueFr
      // })

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

/***/ })

},
0,[["./assets/js/pages/adm.matieres.js","runtime","vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_modules_es_array_find_js-_7db00"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbGFuZy9mci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvYWRtLm1hdGllcmVzLmpzIl0sIm5hbWVzIjpbImRhdGFUYWJsZUxhbmd1ZUZyIiwiJCIsImNoYW5nZSIsInNlbWVzdHJlU2VsZWN0b3IiLCJhamF4IiwidXJsIiwiUm91dGluZyIsImdlbmVyYXRlIiwiZGF0YVR5cGUiLCJ0eXBlIiwiZGF0YSIsInNlbWVzdHJlaWQiLCJ2YWwiLCJzdWNjZXNzIiwidWVzIiwibWF0aWVyZVNlbGVjdG9yIiwiaHRtbCIsImFwcGVuZCIsImZpbmQiLCJ0ZXh0IiwiZWFjaCIsImtleSIsInVlIiwiaWQiLCJudW1lcm9VZSIsImxpYmVsbGUiLCJlcnJvciIsImVyciIsImFsZXJ0IiwicGFyY291cnMiLCJwYXJjb3VyU2VsZWN0b3IiLCJwYXJjb3VyIiwic2VtZXN0cmUiLCJtYXRpZXJlcyIsInBhcmVudFNlbGVjdG9yIiwibWF0aWVyZSIsImRpc3BsYXkiLCJkb2N1bWVudCIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsIiRkaXBsb21lIiwiZGlwbG9tZSIsInNsaWRlVXAiLCJlbXB0eSIsInNsaWRlRG93biIsImF0dHIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsaUJBQWlCLEdBQUc7QUFDL0IsYUFBVyxFQURvQjtBQUUvQixnQkFBYyxpREFGaUI7QUFHL0IsVUFBUSxpR0FIdUI7QUFJL0IsZUFBYSxnRkFKa0I7QUFLL0Isa0JBQWdCLDBEQUxlO0FBTS9CLGlCQUFlLEVBTmdCO0FBTy9CLGVBQWEsR0FQa0I7QUFRL0IsZ0JBQWMsd0NBUmlCO0FBUy9CLG9CQUFrQix3QkFUYTtBQVUvQixnQkFBYyx3QkFWaUI7QUFXL0IsWUFBVSxtQkFYcUI7QUFZL0IsaUJBQWUsK0NBWmdCO0FBYS9CLGNBQVk7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R0FBQyxDQUFDRyxJQUFGLENBQU87QUFDTEMsT0FBRyxFQUFFQyxPQUFPLENBQUNDLFFBQVIsQ0FBaUIsZ0NBQWpCLEVBQW1EO0FBQUNxQyxhQUFPLEVBQUVEO0FBQVYsS0FBbkQsQ0FEQTtBQUVMbkMsWUFBUSxFQUFFLE1BRkw7QUFHTEMsUUFBSSxFQUFFLEtBSEQ7QUFJTEksV0FBTyxFQUFFLGlCQUFVSCxJQUFWLEVBQWdCO0FBQ3ZCVCxPQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQjRDLE9BQXRCLEdBQWdDQyxLQUFoQyxHQUF3QzdCLE1BQXhDLENBQStDUCxJQUEvQyxFQUFxRHFDLFNBQXJELEdBRHVCLENBRXZCO0FBQ0E7QUFDQTs7QUFDQTlDLE9BQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUIrQyxJQUFqQixDQUFzQixNQUF0QixFQUE4QjFDLE9BQU8sQ0FBQ0MsUUFBUixDQUFpQiwrQkFBakIsRUFBa0Q7QUFDOUVxQyxlQUFPLEVBQUVELFFBRHFFO0FBRTlFLG1CQUFXO0FBRm1FLE9BQWxELENBQTlCO0FBSUExQyxPQUFDLENBQUMsY0FBRCxDQUFELENBQWtCK0MsSUFBbEIsQ0FBdUIsTUFBdkIsRUFBK0IxQyxPQUFPLENBQUNDLFFBQVIsQ0FBaUIsK0JBQWpCLEVBQWtEO0FBQy9FcUMsZUFBTyxFQUFFRCxRQURzRTtBQUUvRSxtQkFBVztBQUZvRSxPQUFsRCxDQUEvQjtBQUlBMUMsT0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQitDLElBQWpCLENBQXNCLE1BQXRCLEVBQThCMUMsT0FBTyxDQUFDQyxRQUFSLENBQWlCLCtCQUFqQixFQUFrRDtBQUM5RXFDLGVBQU8sRUFBRUQsUUFEcUU7QUFFOUUsbUJBQVc7QUFGbUUsT0FBbEQsQ0FBOUI7QUFJRDtBQXJCSSxHQUFQO0FBd0JELENBN0JELEUiLCJmaWxlIjoiYWRtLm1hdGllcmVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL2xhbmcvZnIuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAyMi8wNy8yMDIwIDE1OjEwXG5cbmV4cG9ydCBjb25zdCBkYXRhVGFibGVMYW5ndWVGciA9IHtcbiAgJ2RlY2ltYWwnOiAnJyxcbiAgJ2VtcHR5VGFibGUnOiAnQXVjdW5lIGRvbm4mZWFjdXRlO2UgZGlzcG9uaWJsZSBkYW5zIGxlIHRhYmxlYXUnLFxuICAnaW5mbyc6ICdBZmZpY2hhZ2UgZGUgbFxcJyZlYWN1dGU7bCZlYWN1dGU7bWVudCBfU1RBUlRfICZhZ3JhdmU7IF9FTkRfIHN1ciBfVE9UQUxfICZlYWN1dGU7bCZlYWN1dGU7bWVudHMnLFxuICAnaW5mb0VtcHR5JzogJ0FmZmljaGFnZSBkZSBsXFwnJmVhY3V0ZTtsJmVhY3V0ZTttZW50IDAgJmFncmF2ZTsgMCBzdXIgMCAmZWFjdXRlO2wmZWFjdXRlO21lbnQnLFxuICAnaW5mb0ZpbHRlcmVkJzogJyhmaWx0ciZlYWN1dGU7IGRlIF9NQVhfICZlYWN1dGU7bCZlYWN1dGU7bWVudHMgYXUgdG90YWwpJyxcbiAgJ2luZm9Qb3N0Rml4JzogJycsXG4gICd0aG91c2FuZHMnOiAnLCcsXG4gICdsZW5ndGhNZW51JzogJ0FmZmljaGVyIF9NRU5VXyAmZWFjdXRlO2wmZWFjdXRlO21lbnRzJyxcbiAgJ2xvYWRpbmdSZWNvcmRzJzogJ0NoYXJnZW1lbnQgZW4gY291cnMuLi4nLFxuICAncHJvY2Vzc2luZyc6ICdUcmFpdGVtZW50IGVuIGNvdXJzLi4uJyxcbiAgJ3NlYXJjaCc6ICdSZWNoZXJjaGVyJm5ic3A7OicsXG4gICd6ZXJvUmVjb3Jkcyc6ICdBdWN1biAmZWFjdXRlO2wmZWFjdXRlO21lbnQgJmFncmF2ZTsgYWZmaWNoZXInLFxuICAncGFnaW5hdGUnOiB7XG4gICAgJ2ZpcnN0JzogJ1ByZW1pZXInLFxuICAgICdsYXN0JzogJ0Rlcm5pZXInLFxuICAgICduZXh0JzogJ1N1aXZhbnQnLFxuICAgICdwcmV2aW91cyc6ICdQciZlYWN1dGU7YyZlYWN1dGU7ZGVudCdcbiAgfSxcbiAgJ2FyaWEnOiB7XG4gICAgJ3NvcnRBc2NlbmRpbmcnOiAnOiBhY3RpdmVyIHBvdXIgdHJpZXIgbGEgY29sb25uZSBwYXIgb3JkcmUgY3JvaXNzYW50JyxcbiAgICAnc29ydERlc2NlbmRpbmcnOiAnOiBhY3RpdmVyIHBvdXIgdHJpZXIgbGEgY29sb25uZSBwYXIgb3JkcmUgZCZlYWN1dGU7Y3JvaXNzYW50J1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjEuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvcGFnZXMvYWRtLm1hdGllcmVzLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMDEvMDMvMjAyMSAxODo0OVxuXG5pbXBvcnQge2RhdGFUYWJsZUxhbmd1ZUZyfSBmcm9tICcuLi9sYW5nL2ZyJ1xuXG4kKCcjbWF0aWVyZV9zZW1lc3RyZScpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHNlbWVzdHJlU2VsZWN0b3IgPSAkKHRoaXMpXG5cbiAgLy8gUmVxdWVzdCB0aGUgbmVpZ2hib3Job29kcyBvZiB0aGUgc2VsZWN0ZWQgY2l0eS5cbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwaV9saXN0ZV91ZV9ieV9zZW1lc3RyZScpLFxuICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgdHlwZTogJ1BPU1QnLFxuICAgIGRhdGE6IHtcbiAgICAgIHNlbWVzdHJlaWQ6IHNlbWVzdHJlU2VsZWN0b3IudmFsKClcbiAgICB9LFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICh1ZXMpIHtcbiAgICAgIGNvbnN0IG1hdGllcmVTZWxlY3RvciA9ICQoJyNtYXRpZXJlX3VlJylcblxuICAgICAgLy8gUmVtb3ZlIGN1cnJlbnQgb3B0aW9uc1xuICAgICAgbWF0aWVyZVNlbGVjdG9yLmh0bWwoJycpXG5cbiAgICAgIC8vIEVtcHR5IHZhbHVlIC4uLlxuICAgICAgbWF0aWVyZVNlbGVjdG9yLmFwcGVuZCgnPG9wdGlvbiB2YWx1ZT4gQ2hvaXNpciB1bmUgVUUgZGFucyBsZSBzZW1lc3RyZSAnICsgc2VtZXN0cmVTZWxlY3Rvci5maW5kKCdvcHRpb246c2VsZWN0ZWQnKS50ZXh0KCkgKyAnIC4uLjwvb3B0aW9uPicpXG5cblxuICAgICAgJC5lYWNoKHVlcywgZnVuY3Rpb24gKGtleSwgdWUpIHtcbiAgICAgICAgbWF0aWVyZVNlbGVjdG9yLmFwcGVuZCgnPG9wdGlvbiB2YWx1ZT1cIicgKyB1ZS5pZCArICdcIj4nICsgdWUubnVtZXJvVWUgKyAnICcgKyB1ZS5saWJlbGxlICsgJzwvb3B0aW9uPicpXG4gICAgICB9KVxuICAgIH0sXG4gICAgZXJyb3I6IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIGFsZXJ0KCdBbiBlcnJvciBvY3VycmVkIHdoaWxlIGxvYWRpbmcgZGF0YSAuLi4nKVxuICAgIH1cbiAgfSlcblxuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYXBpX2xpc3RlX3BhcmNvdXJfYnlfc2VtZXN0cmUnKSxcbiAgICBkYXRhVHlwZTogJ0pTT04nLFxuICAgIHR5cGU6ICdQT1NUJyxcbiAgICBkYXRhOiB7XG4gICAgICBzZW1lc3RyZWlkOiBzZW1lc3RyZVNlbGVjdG9yLnZhbCgpXG4gICAgfSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocGFyY291cnMpIHtcbiAgICAgIGNvbnN0IHBhcmNvdXJTZWxlY3RvciA9ICQoJyNtYXRpZXJlX3BhcmNvdXJzJylcblxuICAgICAgLy8gUmVtb3ZlIGN1cnJlbnQgb3B0aW9uc1xuICAgICAgcGFyY291clNlbGVjdG9yLmh0bWwoJycpXG5cbiAgICAgIC8vIEVtcHR5IHZhbHVlIC4uLlxuICAgICAgcGFyY291clNlbGVjdG9yLmFwcGVuZCgnPG9wdGlvbiB2YWx1ZT4gQ2hvaXNpciAob3B0aW9ubmVsKSB1biBwYXJjb3VyIHBvdXIgbGUgc2VtZXN0cmUgJyArIHNlbWVzdHJlU2VsZWN0b3IuZmluZCgnb3B0aW9uOnNlbGVjdGVkJykudGV4dCgpICsgJyAuLi48L29wdGlvbj4nKVxuXG5cbiAgICAgICQuZWFjaChwYXJjb3VycywgZnVuY3Rpb24gKGtleSwgcGFyY291cikge1xuICAgICAgICBwYXJjb3VyU2VsZWN0b3IuYXBwZW5kKCc8b3B0aW9uIHZhbHVlPVwiJyArIHBhcmNvdXIuaWQgKyAnXCI+JyArIHBhcmNvdXIubGliZWxsZSArICc8L29wdGlvbj4nKVxuICAgICAgfSlcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICBhbGVydCgnQW4gZXJyb3Igb2N1cnJlZCB3aGlsZSBsb2FkaW5nIGRhdGEgLi4uJylcbiAgICB9XG4gIH0pXG5cbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwaV9tYXRpZXJlc19zZW1lc3RyZScsIHtzZW1lc3RyZTogc2VtZXN0cmVTZWxlY3Rvci52YWwoKX0pLFxuICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgdHlwZTogJ0dFVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKG1hdGllcmVzKSB7XG4gICAgICBjb25zdCBwYXJlbnRTZWxlY3RvciA9ICQoJyNtYXRpZXJlX21hdGllcmVQYXJlbnQnKVxuXG4gICAgICAvLyBSZW1vdmUgY3VycmVudCBvcHRpb25zXG4gICAgICBwYXJlbnRTZWxlY3Rvci5odG1sKCcnKVxuXG4gICAgICAvLyBFbXB0eSB2YWx1ZSAuLi5cbiAgICAgIHBhcmVudFNlbGVjdG9yLmFwcGVuZCgnPG9wdGlvbiB2YWx1ZT4gQ2hvaXNpciAob3B0aW9ubmVsKSB1bmUgbWF0acOocmUgcGFyZW50IHBvdXIgJyArICQoJyNtYXRpZXJlX2xpYmVsbGUnKS52YWwoKSArICcgLi4uPC9vcHRpb24+JylcblxuXG4gICAgICAkLmVhY2gobWF0aWVyZXMsIGZ1bmN0aW9uIChrZXksIG1hdGllcmUpIHtcbiAgICAgICAgcGFyZW50U2VsZWN0b3IuYXBwZW5kKCc8b3B0aW9uIHZhbHVlPVwiJyArIG1hdGllcmUuaWQgKyAnXCI+JyArIG1hdGllcmUuZGlzcGxheSArICc8L29wdGlvbj4nKVxuICAgICAgfSlcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICBhbGVydCgnQW4gZXJyb3Igb2N1cnJlZCB3aGlsZSBsb2FkaW5nIGRhdGEgLi4uJylcbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNoYW5nZS1kaXBsb21lJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICQoJy5jaGFuZ2UtZGlwbG9tZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUgc2hvdycpXG4gICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZSBzaG93JylcbiAgbGV0ICRkaXBsb21lID0gJCh0aGlzKS5kYXRhKCdkaXBsb21lJylcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX21hdGllcmVfZGlwbG9tZScsIHtkaXBsb21lOiAkZGlwbG9tZX0pLFxuICAgIGRhdGFUeXBlOiAnSFRNTCcsXG4gICAgdHlwZTogJ0dFVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICQoJyNjb250ZW50X2RpcGxvbWUnKS5zbGlkZVVwKCkuZW1wdHkoKS5hcHBlbmQoZGF0YSkuc2xpZGVEb3duKClcbiAgICAgIC8vICQoJy5kYXRhdGFibGVfbWF0aWVyZXMnKS5kYXRhVGFibGUoe1xuICAgICAgLy8gICBsYW5ndWFnZTogZGF0YVRhYmxlTGFuZ3VlRnJcbiAgICAgIC8vIH0pXG4gICAgICAkKCcjZXhwb3J0X2NzdicpLmF0dHIoJ2hyZWYnLCBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9tYXRpZXJlX2V4cG9ydCcsIHtcbiAgICAgICAgZGlwbG9tZTogJGRpcGxvbWUsXG4gICAgICAgICdfZm9ybWF0JzogJ2NzdidcbiAgICAgIH0pKVxuICAgICAgJCgnI2V4cG9ydF94bHN4JykuYXR0cignaHJlZicsIFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX21hdGllcmVfZXhwb3J0Jywge1xuICAgICAgICBkaXBsb21lOiAkZGlwbG9tZSxcbiAgICAgICAgJ19mb3JtYXQnOiAneGxzeCdcbiAgICAgIH0pKVxuICAgICAgJCgnI2V4cG9ydF9wZGYnKS5hdHRyKCdocmVmJywgUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fbWF0aWVyZV9leHBvcnQnLCB7XG4gICAgICAgIGRpcGxvbWU6ICRkaXBsb21lLFxuICAgICAgICAnX2Zvcm1hdCc6ICdwZGYnXG4gICAgICB9KSlcbiAgICB9XG4gIH0pXG5cbn0pXG4iXSwic291cmNlUm9vdCI6IiJ9