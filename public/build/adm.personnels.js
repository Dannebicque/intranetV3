(self["webpackChunk"] = self["webpackChunk"] || []).push([["adm.personnels"],{

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

/***/ "./assets/js/pages/adm.personnels.js":
/*!*******************************************!*\
  !*** ./assets/js/pages/adm.personnels.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_datatables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../vendor/datatables */ "./assets/vendor/datatables/index.js");
/* harmony import */ var _lang_fr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lang/fr */ "./assets/js/lang/fr.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.personnels.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 22/10/2020 15:56


$(document).ready(function () {
  $('#tableau').DataTable({
    'langue': _lang_fr__WEBPACK_IMPORTED_MODULE_1__.dataTableLangueFr
  }); //regenerer le datatable avec les nouvelles data
});
$(document).on('keyup', '#login_urca', function () {
  var $val = $(this).val();

  if ($val.length > 2) {
    $.ajax({
      url: Routing.generate('api_personnel_recherche', {
        needle: $val
      }),
      dataType: 'json',
      success: function success(data) {
        var html = '';
        $('#result').empty();
        jQuery.each(data, function (index, pers) {
          html = html + '<tr>' + '<td>' + pers.nom + '</td>' + '<td>' + pers.prenom + '</td>' + '<td>' + pers.numeroHarpege + '</td>' + '<td>' + pers.username + '</td>' + '<td>' + pers.mail_univ + '</td>' + '<td><a href="#" class="btn btn-success btn-outline btn-square addpersonnel" data-provide="tooltip" data-placement="bottom" title="Ajouter au departement" data-slug="' + pers.slug + '"><i class="fas fa-plus"></i></a></td>' + '</tr>';
        });
        html = html + '<tr>' + '<td colspan="6"><a href="' + Routing.generate('administration_personnel_create') + '" class="btn btn-success btn-block" data-provide="tooltip" data-placement="bottom" title="Ajouter un intervenant"><i class="fas fa-plus"></i> Si l\'internvenant n\'est pas présent dans l\'intranet vous pouvez l\'ajouter</a></td>' + '</tr>';
        $('#result').append(html);
      }
    });
  }
});
$(document).on('click', '.addpersonnel', function () {
  $.ajax({
    url: Routing.generate('api_personnel_add_to_departement', {
      slug: $(this).data('slug')
    }),
    dataType: 'json',
    success: function success(data) {
      console.log(data);
      addCallout('Personnel ajouté au département !', 'success');
    }
  });
});
$(document).on('click', '.personnel_index_change', function () {
  $('.personnel_index_change').removeClass('active show');
  $(this).addClass('active show');
  var $type = $(this).data('type');
  $('#listePersonnel').load(Routing.generate('administration_personnel_load_liste', {
    type: $type
  }), function () {
    $('#tableau').DataTable({
      language: _lang_fr__WEBPACK_IMPORTED_MODULE_1__.dataTableLangueFr
    });
    $('#export_csv').attr('href', Routing.generate('administration_personnel_export', {
      type: $type,
      '_format': 'csv'
    }));
    $('#export_xlsx').attr('href', Routing.generate('administration_personnel_export', {
      type: $type,
      '_format': 'xlsx'
    }));
    $('#export_pdf').attr('href', Routing.generate('administration_personnel_export', {
      type: $type,
      '_format': 'pdf'
    }));
  });
});
$(document).on('change', '.updateRole', function () {
  $.ajax({
    url: Routing.generate('admin_personnel_departement_modifier_droit', {
      personnel: $('#personnel').val()
    }),
    method: 'POST',
    data: {
      'droit': $(this).val()
    },
    success: function success(data) {
      addCallout('Droits modifiés !', 'success');
    }
  });
});

/***/ }),

/***/ "./node_modules/core-js/internals/string-trim-forced.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim-forced.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.trim.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.trim.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var forcedStringTrimMethod = __webpack_require__(/*! ../internals/string-trim-forced */ "./node_modules/core-js/internals/string-trim-forced.js");

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ })

},
0,[["./assets/js/pages/adm.personnels.js","runtime","vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_modules_es_string_split_js","vendors-node_modules_core-js_internals_inherit-if-required_js-node_modules_core-js_internals_-f30b81","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_s-c0b602","vendors-node_modules_core-js_modules_es_array_filter_js-node_modules_core-js_modules_es_array-3f7266","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-2411fb","vendors-node_modules_core-js_modules_es_array_last-index-of_js-node_modules_core-js_modules_e-f7d21d","assets_vendor_datatables_index_js"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbGFuZy9mci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvYWRtLnBlcnNvbm5lbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N0cmluZy10cmltLWZvcmNlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy50cmltLmpzIl0sIm5hbWVzIjpbImRhdGFUYWJsZUxhbmd1ZUZyIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJEYXRhVGFibGUiLCJvbiIsIiR2YWwiLCJ2YWwiLCJsZW5ndGgiLCJhamF4IiwidXJsIiwiUm91dGluZyIsImdlbmVyYXRlIiwibmVlZGxlIiwiZGF0YVR5cGUiLCJzdWNjZXNzIiwiZGF0YSIsImh0bWwiLCJlbXB0eSIsImpRdWVyeSIsImVhY2giLCJpbmRleCIsInBlcnMiLCJub20iLCJwcmVub20iLCJudW1lcm9IYXJwZWdlIiwidXNlcm5hbWUiLCJtYWlsX3VuaXYiLCJzbHVnIiwiYXBwZW5kIiwiY29uc29sZSIsImxvZyIsImFkZENhbGxvdXQiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiJHR5cGUiLCJsb2FkIiwidHlwZSIsImxhbmd1YWdlIiwiYXR0ciIsInBlcnNvbm5lbCIsIm1ldGhvZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxpQkFBaUIsR0FBRztBQUMvQixhQUFXLEVBRG9CO0FBRS9CLGdCQUFjLGlEQUZpQjtBQUcvQixVQUFRLGlHQUh1QjtBQUkvQixlQUFhLGdGQUprQjtBQUsvQixrQkFBZ0IsMERBTGU7QUFNL0IsaUJBQWUsRUFOZ0I7QUFPL0IsZUFBYSxHQVBrQjtBQVEvQixnQkFBYyx3Q0FSaUI7QUFTL0Isb0JBQWtCLHdCQVRhO0FBVS9CLGdCQUFjLHdCQVZpQjtBQVcvQixZQUFVLG1CQVhxQjtBQVkvQixpQkFBZSwrQ0FaZ0I7QUFhL0IsY0FBWTtBQUNWLGFBQVMsU0FEQztBQUVWLFlBQVEsU0FGRTtBQUdWLFlBQVEsU0FIRTtBQUlWLGdCQUFZO0FBSkYsR0FibUI7QUFtQi9CLFVBQVE7QUFDTixxQkFBaUIscURBRFg7QUFFTixzQkFBa0I7QUFGWjtBQW5CdUIsQ0FBMUIsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ05QO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBWTtBQUM1QkYsR0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjRyxTQUFkLENBQXdCO0FBQ3RCLGNBQVVKLHVEQUFpQkE7QUFETCxHQUF4QixFQUQ0QixDQUd6QjtBQUNKLENBSkQ7QUFNQUMsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUcsRUFBWixDQUFlLE9BQWYsRUFBd0IsYUFBeEIsRUFBdUMsWUFBWTtBQUNqRCxNQUFNQyxJQUFJLEdBQUdMLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUU0sR0FBUixFQUFiOztBQUNBLE1BQUlELElBQUksQ0FBQ0UsTUFBTCxHQUFjLENBQWxCLEVBQXFCO0FBQ25CUCxLQUFDLENBQUNRLElBQUYsQ0FBTztBQUNMQyxTQUFHLEVBQUVDLE9BQU8sQ0FBQ0MsUUFBUixDQUFpQix5QkFBakIsRUFBNEM7QUFBQ0MsY0FBTSxFQUFFUDtBQUFULE9BQTVDLENBREE7QUFFTFEsY0FBUSxFQUFFLE1BRkw7QUFHTEMsYUFBTyxFQUFFLGlCQUFVQyxJQUFWLEVBQWdCO0FBQ3ZCLFlBQUlDLElBQUksR0FBRyxFQUFYO0FBQ0FoQixTQUFDLENBQUMsU0FBRCxDQUFELENBQWFpQixLQUFiO0FBQ0FDLGNBQU0sQ0FBQ0MsSUFBUCxDQUFZSixJQUFaLEVBQWtCLFVBQVVLLEtBQVYsRUFBaUJDLElBQWpCLEVBQXVCO0FBQ3ZDTCxjQUFJLEdBQUdBLElBQUksR0FBRyxNQUFQLEdBQ0wsTUFESyxHQUNJSyxJQUFJLENBQUNDLEdBRFQsR0FDZSxPQURmLEdBRUwsTUFGSyxHQUVJRCxJQUFJLENBQUNFLE1BRlQsR0FFa0IsT0FGbEIsR0FHTCxNQUhLLEdBR0lGLElBQUksQ0FBQ0csYUFIVCxHQUd5QixPQUh6QixHQUlMLE1BSkssR0FJSUgsSUFBSSxDQUFDSSxRQUpULEdBSW9CLE9BSnBCLEdBS0wsTUFMSyxHQUtJSixJQUFJLENBQUNLLFNBTFQsR0FLcUIsT0FMckIsR0FNTCx1S0FOSyxHQU1xS0wsSUFBSSxDQUFDTSxJQU4xSyxHQU1pTCx3Q0FOakwsR0FPTCxPQVBGO0FBU0QsU0FWRDtBQVlBWCxZQUFJLEdBQUdBLElBQUksR0FBRyxNQUFQLEdBQ0wsMkJBREssR0FDeUJOLE9BQU8sQ0FBQ0MsUUFBUixDQUFpQixpQ0FBakIsQ0FEekIsR0FDK0Usc09BRC9FLEdBRUwsT0FGRjtBQUdBWCxTQUFDLENBQUMsU0FBRCxDQUFELENBQWE0QixNQUFiLENBQW9CWixJQUFwQjtBQUNEO0FBdEJJLEtBQVA7QUF3QkQ7QUFDRixDQTVCRDtBQThCQWhCLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlHLEVBQVosQ0FBZSxPQUFmLEVBQXdCLGVBQXhCLEVBQXlDLFlBQVk7QUFDbkRKLEdBQUMsQ0FBQ1EsSUFBRixDQUFPO0FBQ0xDLE9BQUcsRUFBRUMsT0FBTyxDQUFDQyxRQUFSLENBQWlCLGtDQUFqQixFQUFxRDtBQUFDZ0IsVUFBSSxFQUFFM0IsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRZSxJQUFSLENBQWEsTUFBYjtBQUFQLEtBQXJELENBREE7QUFFTEYsWUFBUSxFQUFFLE1BRkw7QUFHTEMsV0FBTyxFQUFFLGlCQUFVQyxJQUFWLEVBQWdCO0FBQ3ZCYyxhQUFPLENBQUNDLEdBQVIsQ0FBWWYsSUFBWjtBQUNBZ0IsZ0JBQVUsQ0FBQyxtQ0FBRCxFQUFzQyxTQUF0QyxDQUFWO0FBQ0Q7QUFOSSxHQUFQO0FBUUQsQ0FURDtBQVdBL0IsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUcsRUFBWixDQUFlLE9BQWYsRUFBd0IseUJBQXhCLEVBQW1ELFlBQVk7QUFDN0RKLEdBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCZ0MsV0FBN0IsQ0FBeUMsYUFBekM7QUFDQWhDLEdBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWlDLFFBQVIsQ0FBaUIsYUFBakI7QUFDQSxNQUFJQyxLQUFLLEdBQUdsQyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFlLElBQVIsQ0FBYSxNQUFiLENBQVo7QUFDQWYsR0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJtQyxJQUFyQixDQUEwQnpCLE9BQU8sQ0FBQ0MsUUFBUixDQUFpQixxQ0FBakIsRUFBd0Q7QUFBQ3lCLFFBQUksRUFBRUY7QUFBUCxHQUF4RCxDQUExQixFQUFrRyxZQUFZO0FBRTVHbEMsS0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjRyxTQUFkLENBQXdCO0FBQ3RCa0MsY0FBUSxFQUFFdEMsdURBQWlCQTtBQURMLEtBQXhCO0FBSUFDLEtBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJzQyxJQUFqQixDQUFzQixNQUF0QixFQUE4QjVCLE9BQU8sQ0FBQ0MsUUFBUixDQUFpQixpQ0FBakIsRUFBb0Q7QUFDaEZ5QixVQUFJLEVBQUVGLEtBRDBFO0FBRWhGLGlCQUFXO0FBRnFFLEtBQXBELENBQTlCO0FBSUFsQyxLQUFDLENBQUMsY0FBRCxDQUFELENBQWtCc0MsSUFBbEIsQ0FBdUIsTUFBdkIsRUFBK0I1QixPQUFPLENBQUNDLFFBQVIsQ0FBaUIsaUNBQWpCLEVBQW9EO0FBQ2pGeUIsVUFBSSxFQUFFRixLQUQyRTtBQUVqRixpQkFBVztBQUZzRSxLQUFwRCxDQUEvQjtBQUlBbEMsS0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQnNDLElBQWpCLENBQXNCLE1BQXRCLEVBQThCNUIsT0FBTyxDQUFDQyxRQUFSLENBQWlCLGlDQUFqQixFQUFvRDtBQUNoRnlCLFVBQUksRUFBRUYsS0FEMEU7QUFFaEYsaUJBQVc7QUFGcUUsS0FBcEQsQ0FBOUI7QUFJRCxHQWxCRDtBQW1CRCxDQXZCRDtBQXlCQWxDLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlHLEVBQVosQ0FBZSxRQUFmLEVBQXlCLGFBQXpCLEVBQXdDLFlBQVk7QUFDbERKLEdBQUMsQ0FBQ1EsSUFBRixDQUFPO0FBQ0xDLE9BQUcsRUFBRUMsT0FBTyxDQUFDQyxRQUFSLENBQWlCLDRDQUFqQixFQUErRDtBQUFDNEIsZUFBUyxFQUFFdkMsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQk0sR0FBaEI7QUFBWixLQUEvRCxDQURBO0FBRUxrQyxVQUFNLEVBQUUsTUFGSDtBQUdMekIsUUFBSSxFQUFFO0FBQUMsZUFBU2YsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRTSxHQUFSO0FBQVYsS0FIRDtBQUlMUSxXQUFPLEVBQUUsaUJBQVVDLElBQVYsRUFBZ0I7QUFDdkJnQixnQkFBVSxDQUFDLG1CQUFELEVBQXNCLFNBQXRCLENBQVY7QUFDRDtBQU5JLEdBQVA7QUFRRCxDQVRELEU7Ozs7Ozs7Ozs7QUNqRkEsWUFBWSxtQkFBTyxDQUFDLHFFQUFvQjtBQUN4QyxrQkFBa0IsbUJBQU8sQ0FBQyxpRkFBMEI7O0FBRXBEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ1hhO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxZQUFZLDJHQUF3QztBQUNwRCw2QkFBNkIsbUJBQU8sQ0FBQywrRkFBaUM7O0FBRXRFO0FBQ0E7QUFDQSxHQUFHLHdFQUF3RTtBQUMzRTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6ImFkbS5wZXJzb25uZWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL2xhbmcvZnIuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAyMi8wNy8yMDIwIDE1OjEwXG5cbmV4cG9ydCBjb25zdCBkYXRhVGFibGVMYW5ndWVGciA9IHtcbiAgJ2RlY2ltYWwnOiAnJyxcbiAgJ2VtcHR5VGFibGUnOiAnQXVjdW5lIGRvbm4mZWFjdXRlO2UgZGlzcG9uaWJsZSBkYW5zIGxlIHRhYmxlYXUnLFxuICAnaW5mbyc6ICdBZmZpY2hhZ2UgZGUgbFxcJyZlYWN1dGU7bCZlYWN1dGU7bWVudCBfU1RBUlRfICZhZ3JhdmU7IF9FTkRfIHN1ciBfVE9UQUxfICZlYWN1dGU7bCZlYWN1dGU7bWVudHMnLFxuICAnaW5mb0VtcHR5JzogJ0FmZmljaGFnZSBkZSBsXFwnJmVhY3V0ZTtsJmVhY3V0ZTttZW50IDAgJmFncmF2ZTsgMCBzdXIgMCAmZWFjdXRlO2wmZWFjdXRlO21lbnQnLFxuICAnaW5mb0ZpbHRlcmVkJzogJyhmaWx0ciZlYWN1dGU7IGRlIF9NQVhfICZlYWN1dGU7bCZlYWN1dGU7bWVudHMgYXUgdG90YWwpJyxcbiAgJ2luZm9Qb3N0Rml4JzogJycsXG4gICd0aG91c2FuZHMnOiAnLCcsXG4gICdsZW5ndGhNZW51JzogJ0FmZmljaGVyIF9NRU5VXyAmZWFjdXRlO2wmZWFjdXRlO21lbnRzJyxcbiAgJ2xvYWRpbmdSZWNvcmRzJzogJ0NoYXJnZW1lbnQgZW4gY291cnMuLi4nLFxuICAncHJvY2Vzc2luZyc6ICdUcmFpdGVtZW50IGVuIGNvdXJzLi4uJyxcbiAgJ3NlYXJjaCc6ICdSZWNoZXJjaGVyJm5ic3A7OicsXG4gICd6ZXJvUmVjb3Jkcyc6ICdBdWN1biAmZWFjdXRlO2wmZWFjdXRlO21lbnQgJmFncmF2ZTsgYWZmaWNoZXInLFxuICAncGFnaW5hdGUnOiB7XG4gICAgJ2ZpcnN0JzogJ1ByZW1pZXInLFxuICAgICdsYXN0JzogJ0Rlcm5pZXInLFxuICAgICduZXh0JzogJ1N1aXZhbnQnLFxuICAgICdwcmV2aW91cyc6ICdQciZlYWN1dGU7YyZlYWN1dGU7ZGVudCdcbiAgfSxcbiAgJ2FyaWEnOiB7XG4gICAgJ3NvcnRBc2NlbmRpbmcnOiAnOiBhY3RpdmVyIHBvdXIgdHJpZXIgbGEgY29sb25uZSBwYXIgb3JkcmUgY3JvaXNzYW50JyxcbiAgICAnc29ydERlc2NlbmRpbmcnOiAnOiBhY3RpdmVyIHBvdXIgdHJpZXIgbGEgY29sb25uZSBwYXIgb3JkcmUgZCZlYWN1dGU7Y3JvaXNzYW50J1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvcGFnZXMvYWRtLnBlcnNvbm5lbHMuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAyMi8xMC8yMDIwIDE1OjU2XG5cbmltcG9ydCAnLi4vLi4vdmVuZG9yL2RhdGF0YWJsZXMnXG5pbXBvcnQge2RhdGFUYWJsZUxhbmd1ZUZyfSBmcm9tICcuLi9sYW5nL2ZyJ1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICQoJyN0YWJsZWF1JykuRGF0YVRhYmxlKHtcbiAgICAnbGFuZ3VlJzogZGF0YVRhYmxlTGFuZ3VlRnJcbiAgfSkgLy9yZWdlbmVyZXIgbGUgZGF0YXRhYmxlIGF2ZWMgbGVzIG5vdXZlbGxlcyBkYXRhXG59KVxuXG4kKGRvY3VtZW50KS5vbigna2V5dXAnLCAnI2xvZ2luX3VyY2EnLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0ICR2YWwgPSAkKHRoaXMpLnZhbCgpXG4gIGlmICgkdmFsLmxlbmd0aCA+IDIpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcGlfcGVyc29ubmVsX3JlY2hlcmNoZScsIHtuZWVkbGU6ICR2YWx9KSxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBsZXQgaHRtbCA9ICcnXG4gICAgICAgICQoJyNyZXN1bHQnKS5lbXB0eSgpXG4gICAgICAgIGpRdWVyeS5lYWNoKGRhdGEsIGZ1bmN0aW9uIChpbmRleCwgcGVycykge1xuICAgICAgICAgIGh0bWwgPSBodG1sICsgJzx0cj4nICtcbiAgICAgICAgICAgICc8dGQ+JyArIHBlcnMubm9tICsgJzwvdGQ+JyArXG4gICAgICAgICAgICAnPHRkPicgKyBwZXJzLnByZW5vbSArICc8L3RkPicgK1xuICAgICAgICAgICAgJzx0ZD4nICsgcGVycy5udW1lcm9IYXJwZWdlICsgJzwvdGQ+JyArXG4gICAgICAgICAgICAnPHRkPicgKyBwZXJzLnVzZXJuYW1lICsgJzwvdGQ+JyArXG4gICAgICAgICAgICAnPHRkPicgKyBwZXJzLm1haWxfdW5pdiArICc8L3RkPicgK1xuICAgICAgICAgICAgJzx0ZD48YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1vdXRsaW5lIGJ0bi1zcXVhcmUgYWRkcGVyc29ubmVsXCIgZGF0YS1wcm92aWRlPVwidG9vbHRpcFwiIGRhdGEtcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9XCJBam91dGVyIGF1IGRlcGFydGVtZW50XCIgZGF0YS1zbHVnPVwiJyArIHBlcnMuc2x1ZyArICdcIj48aSBjbGFzcz1cImZhcyBmYS1wbHVzXCI+PC9pPjwvYT48L3RkPicgK1xuICAgICAgICAgICAgJzwvdHI+J1xuXG4gICAgICAgIH0pXG5cbiAgICAgICAgaHRtbCA9IGh0bWwgKyAnPHRyPicgK1xuICAgICAgICAgICc8dGQgY29sc3Bhbj1cIjZcIj48YSBocmVmPVwiJyArIFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX3BlcnNvbm5lbF9jcmVhdGUnKSArICdcIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBidG4tYmxvY2tcIiBkYXRhLXByb3ZpZGU9XCJ0b29sdGlwXCIgZGF0YS1wbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT1cIkFqb3V0ZXIgdW4gaW50ZXJ2ZW5hbnRcIj48aSBjbGFzcz1cImZhcyBmYS1wbHVzXCI+PC9pPiBTaSBsXFwnaW50ZXJudmVuYW50IG5cXCdlc3QgcGFzIHByw6lzZW50IGRhbnMgbFxcJ2ludHJhbmV0IHZvdXMgcG91dmV6IGxcXCdham91dGVyPC9hPjwvdGQ+JyArXG4gICAgICAgICAgJzwvdHI+J1xuICAgICAgICAkKCcjcmVzdWx0JykuYXBwZW5kKGh0bWwpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5hZGRwZXJzb25uZWwnLCBmdW5jdGlvbiAoKSB7XG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcGlfcGVyc29ubmVsX2FkZF90b19kZXBhcnRlbWVudCcsIHtzbHVnOiAkKHRoaXMpLmRhdGEoJ3NsdWcnKX0pLFxuICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICBhZGRDYWxsb3V0KCdQZXJzb25uZWwgYWpvdXTDqSBhdSBkw6lwYXJ0ZW1lbnQgIScsICdzdWNjZXNzJylcbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnBlcnNvbm5lbF9pbmRleF9jaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICQoJy5wZXJzb25uZWxfaW5kZXhfY2hhbmdlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZSBzaG93JylcbiAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlIHNob3cnKVxuICBsZXQgJHR5cGUgPSAkKHRoaXMpLmRhdGEoJ3R5cGUnKVxuICAkKCcjbGlzdGVQZXJzb25uZWwnKS5sb2FkKFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX3BlcnNvbm5lbF9sb2FkX2xpc3RlJywge3R5cGU6ICR0eXBlfSksIGZ1bmN0aW9uICgpIHtcblxuICAgICQoJyN0YWJsZWF1JykuRGF0YVRhYmxlKHtcbiAgICAgIGxhbmd1YWdlOiBkYXRhVGFibGVMYW5ndWVGclxuICAgIH0pXG5cbiAgICAkKCcjZXhwb3J0X2NzdicpLmF0dHIoJ2hyZWYnLCBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9wZXJzb25uZWxfZXhwb3J0Jywge1xuICAgICAgdHlwZTogJHR5cGUsXG4gICAgICAnX2Zvcm1hdCc6ICdjc3YnXG4gICAgfSkpXG4gICAgJCgnI2V4cG9ydF94bHN4JykuYXR0cignaHJlZicsIFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX3BlcnNvbm5lbF9leHBvcnQnLCB7XG4gICAgICB0eXBlOiAkdHlwZSxcbiAgICAgICdfZm9ybWF0JzogJ3hsc3gnXG4gICAgfSkpXG4gICAgJCgnI2V4cG9ydF9wZGYnKS5hdHRyKCdocmVmJywgUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fcGVyc29ubmVsX2V4cG9ydCcsIHtcbiAgICAgIHR5cGU6ICR0eXBlLFxuICAgICAgJ19mb3JtYXQnOiAncGRmJ1xuICAgIH0pKVxuICB9KVxufSlcblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcudXBkYXRlUm9sZScsIGZ1bmN0aW9uICgpIHtcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluX3BlcnNvbm5lbF9kZXBhcnRlbWVudF9tb2RpZmllcl9kcm9pdCcsIHtwZXJzb25uZWw6ICQoJyNwZXJzb25uZWwnKS52YWwoKX0pLFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGRhdGE6IHsnZHJvaXQnOiAkKHRoaXMpLnZhbCgpfSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgYWRkQ2FsbG91dCgnRHJvaXRzIG1vZGlmacOpcyAhJywgJ3N1Y2Nlc3MnKVxuICAgIH1cbiAgfSlcbn0pXG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciB3aGl0ZXNwYWNlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93aGl0ZXNwYWNlcycpO1xuXG52YXIgbm9uID0gJ1xcdTIwMEJcXHUwMDg1XFx1MTgwRSc7XG5cbi8vIGNoZWNrIHRoYXQgYSBtZXRob2Qgd29ya3Mgd2l0aCB0aGUgY29ycmVjdCBsaXN0XG4vLyBvZiB3aGl0ZXNwYWNlcyBhbmQgaGFzIGEgY29ycmVjdCBuYW1lXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICByZXR1cm4gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAhIXdoaXRlc3BhY2VzW01FVEhPRF9OQU1FXSgpIHx8IG5vbltNRVRIT0RfTkFNRV0oKSAhPSBub24gfHwgd2hpdGVzcGFjZXNbTUVUSE9EX05BTUVdLm5hbWUgIT09IE1FVEhPRF9OQU1FO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkdHJpbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbScpLnRyaW07XG52YXIgZm9yY2VkU3RyaW5nVHJpbU1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbS1mb3JjZWQnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUudHJpbWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbVxuJCh7IHRhcmdldDogJ1N0cmluZycsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IGZvcmNlZFN0cmluZ1RyaW1NZXRob2QoJ3RyaW0nKSB9LCB7XG4gIHRyaW06IGZ1bmN0aW9uIHRyaW0oKSB7XG4gICAgcmV0dXJuICR0cmltKHRoaXMpO1xuICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=