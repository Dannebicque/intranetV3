(self["webpackChunkintranetv3"] = self["webpackChunkintranetv3"] || []).push([["adm.personnels"],{

/***/ "./assets/js/pages/adm.personnels.js":
/*!*******************************************!*\
  !*** ./assets/js/pages/adm.personnels.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./assets/js/util.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.personnels.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 12/09/2021 09:01

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
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Personnel ajouté au département !', 'success');
    }
  });
});
$(document).on('click', '.personnel_index_change', function () {
  $('.personnel_index_change').removeClass('active show');
  $(this).addClass('active show');
  var $type = $(this).data('type');
  $('#listePersonnel').load(Routing.generate('administration_personnel_load_liste', {
    type: $type
  }));
});
$(document).on('change', '.updateRole', function () {
  $.ajax({
    url: Routing.generate('administration_personnel_departement_modifier_droit', {
      personnel: $('#personnel').val()
    }),
    method: 'POST',
    data: {
      'droit': $(this).val()
    },
    success: function success(data) {
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Droits modifiés !', 'success');
    }
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_arra-a68b23","vendors-node_modules_core-js_modules_es_string_split_js","vendors-node_modules_core-js_internals_array-method-is-strict_js-node_modules_core-js_interna-81f81c","vendors-node_modules_core-js_internals_dom-iterables_js-node_modules_core-js_modules_es_symbol_js","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_dat-47334b","assets_js_util_js"], () => (__webpack_exec__("./assets/js/pages/adm.personnels.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vYXNzZXRzL2pzL3BhZ2VzL2FkbS5wZXJzb25uZWxzLmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsIm9uIiwiJHZhbCIsInZhbCIsImxlbmd0aCIsImFqYXgiLCJ1cmwiLCJSb3V0aW5nIiwiZ2VuZXJhdGUiLCJuZWVkbGUiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJkYXRhIiwiaHRtbCIsImVtcHR5IiwialF1ZXJ5IiwiZWFjaCIsImluZGV4IiwicGVycyIsIm5vbSIsInByZW5vbSIsIm51bWVyb0hhcnBlZ2UiLCJ1c2VybmFtZSIsIm1haWxfdW5pdiIsInNsdWciLCJhcHBlbmQiLCJhZGRDYWxsb3V0IiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsIiR0eXBlIiwibG9hZCIsInR5cGUiLCJwZXJzb25uZWwiLCJtZXRob2QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsRUFBWixDQUFlLE9BQWYsRUFBd0IsYUFBeEIsRUFBdUMsWUFBWTtBQUNqRCxNQUFNQyxJQUFJLEdBQUdILENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUksR0FBUixFQUFiOztBQUNBLE1BQUlELElBQUksQ0FBQ0UsTUFBTCxHQUFjLENBQWxCLEVBQXFCO0FBQ25CTCxLQUFDLENBQUNNLElBQUYsQ0FBTztBQUNMQyxTQUFHLEVBQUVDLE9BQU8sQ0FBQ0MsUUFBUixDQUFpQix5QkFBakIsRUFBNEM7QUFBQ0MsY0FBTSxFQUFFUDtBQUFULE9BQTVDLENBREE7QUFFTFEsY0FBUSxFQUFFLE1BRkw7QUFHTEMsYUFBTyxFQUFFLGlCQUFVQyxJQUFWLEVBQWdCO0FBQ3ZCLFlBQUlDLElBQUksR0FBRyxFQUFYO0FBQ0FkLFNBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYWUsS0FBYjtBQUNBQyxjQUFNLENBQUNDLElBQVAsQ0FBWUosSUFBWixFQUFrQixVQUFVSyxLQUFWLEVBQWlCQyxJQUFqQixFQUF1QjtBQUN2Q0wsY0FBSSxHQUFHQSxJQUFJLEdBQUcsTUFBUCxHQUNMLE1BREssR0FDSUssSUFBSSxDQUFDQyxHQURULEdBQ2UsT0FEZixHQUVMLE1BRkssR0FFSUQsSUFBSSxDQUFDRSxNQUZULEdBRWtCLE9BRmxCLEdBR0wsTUFISyxHQUdJRixJQUFJLENBQUNHLGFBSFQsR0FHeUIsT0FIekIsR0FJTCxNQUpLLEdBSUlILElBQUksQ0FBQ0ksUUFKVCxHQUlvQixPQUpwQixHQUtMLE1BTEssR0FLSUosSUFBSSxDQUFDSyxTQUxULEdBS3FCLE9BTHJCLEdBTUwsdUtBTkssR0FNcUtMLElBQUksQ0FBQ00sSUFOMUssR0FNaUwsd0NBTmpMLEdBT0wsT0FQRjtBQVNELFNBVkQ7QUFZQVgsWUFBSSxHQUFHQSxJQUFJLEdBQUcsTUFBUCxHQUNMLDJCQURLLEdBQ3lCTixPQUFPLENBQUNDLFFBQVIsQ0FBaUIsaUNBQWpCLENBRHpCLEdBQytFLHNPQUQvRSxHQUVMLE9BRkY7QUFHQVQsU0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhMEIsTUFBYixDQUFvQlosSUFBcEI7QUFDRDtBQXRCSSxLQUFQO0FBd0JEO0FBQ0YsQ0E1QkQ7QUE4QkFkLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEVBQVosQ0FBZSxPQUFmLEVBQXdCLGVBQXhCLEVBQXlDLFlBQVk7QUFDbkRGLEdBQUMsQ0FBQ00sSUFBRixDQUFPO0FBQ0xDLE9BQUcsRUFBRUMsT0FBTyxDQUFDQyxRQUFSLENBQWlCLGtDQUFqQixFQUFxRDtBQUFDZ0IsVUFBSSxFQUFFekIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRYSxJQUFSLENBQWEsTUFBYjtBQUFQLEtBQXJELENBREE7QUFFTEYsWUFBUSxFQUFFLE1BRkw7QUFHTEMsV0FBTyxFQUFFLGlCQUFVQyxJQUFWLEVBQWdCO0FBQ3ZCYyx1REFBVSxDQUFDLG1DQUFELEVBQXNDLFNBQXRDLENBQVY7QUFDRDtBQUxJLEdBQVA7QUFPRCxDQVJEO0FBVUEzQixDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxFQUFaLENBQWUsT0FBZixFQUF3Qix5QkFBeEIsRUFBbUQsWUFBWTtBQUM3REYsR0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkI0QixXQUE3QixDQUF5QyxhQUF6QztBQUNBNUIsR0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNkIsUUFBUixDQUFpQixhQUFqQjtBQUNBLE1BQUlDLEtBQUssR0FBRzlCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWEsSUFBUixDQUFhLE1BQWIsQ0FBWjtBQUNBYixHQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQitCLElBQXJCLENBQTBCdkIsT0FBTyxDQUFDQyxRQUFSLENBQWlCLHFDQUFqQixFQUF3RDtBQUFDdUIsUUFBSSxFQUFFRjtBQUFQLEdBQXhELENBQTFCO0FBQ0QsQ0FMRDtBQU9BOUIsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsRUFBWixDQUFlLFFBQWYsRUFBeUIsYUFBekIsRUFBd0MsWUFBWTtBQUNsREYsR0FBQyxDQUFDTSxJQUFGLENBQU87QUFDTEMsT0FBRyxFQUFFQyxPQUFPLENBQUNDLFFBQVIsQ0FBaUIscURBQWpCLEVBQXdFO0FBQUN3QixlQUFTLEVBQUVqQyxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCSSxHQUFoQjtBQUFaLEtBQXhFLENBREE7QUFFTDhCLFVBQU0sRUFBRSxNQUZIO0FBR0xyQixRQUFJLEVBQUU7QUFBQyxlQUFTYixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFJLEdBQVI7QUFBVixLQUhEO0FBSUxRLFdBQU8sRUFBRSxpQkFBVUMsSUFBVixFQUFnQjtBQUN2QmMsdURBQVUsQ0FBQyxtQkFBRCxFQUFzQixTQUF0QixDQUFWO0FBQ0Q7QUFOSSxHQUFQO0FBUUQsQ0FURCxFIiwiZmlsZSI6ImFkbS5wZXJzb25uZWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3BhZ2VzL2FkbS5wZXJzb25uZWxzLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMTIvMDkvMjAyMSAwOTowMVxuXG5pbXBvcnQge2FkZENhbGxvdXR9IGZyb20gJy4uL3V0aWwnXG5cbiQoZG9jdW1lbnQpLm9uKCdrZXl1cCcsICcjbG9naW5fdXJjYScsIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgJHZhbCA9ICQodGhpcykudmFsKClcbiAgaWYgKCR2YWwubGVuZ3RoID4gMikge1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwaV9wZXJzb25uZWxfcmVjaGVyY2hlJywge25lZWRsZTogJHZhbH0pLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGxldCBodG1sID0gJydcbiAgICAgICAgJCgnI3Jlc3VsdCcpLmVtcHR5KClcbiAgICAgICAgalF1ZXJ5LmVhY2goZGF0YSwgZnVuY3Rpb24gKGluZGV4LCBwZXJzKSB7XG4gICAgICAgICAgaHRtbCA9IGh0bWwgKyAnPHRyPicgK1xuICAgICAgICAgICAgJzx0ZD4nICsgcGVycy5ub20gKyAnPC90ZD4nICtcbiAgICAgICAgICAgICc8dGQ+JyArIHBlcnMucHJlbm9tICsgJzwvdGQ+JyArXG4gICAgICAgICAgICAnPHRkPicgKyBwZXJzLm51bWVyb0hhcnBlZ2UgKyAnPC90ZD4nICtcbiAgICAgICAgICAgICc8dGQ+JyArIHBlcnMudXNlcm5hbWUgKyAnPC90ZD4nICtcbiAgICAgICAgICAgICc8dGQ+JyArIHBlcnMubWFpbF91bml2ICsgJzwvdGQ+JyArXG4gICAgICAgICAgICAnPHRkPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgYnRuLW91dGxpbmUgYnRuLXNxdWFyZSBhZGRwZXJzb25uZWxcIiBkYXRhLXByb3ZpZGU9XCJ0b29sdGlwXCIgZGF0YS1wbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT1cIkFqb3V0ZXIgYXUgZGVwYXJ0ZW1lbnRcIiBkYXRhLXNsdWc9XCInICsgcGVycy5zbHVnICsgJ1wiPjxpIGNsYXNzPVwiZmFzIGZhLXBsdXNcIj48L2k+PC9hPjwvdGQ+JyArXG4gICAgICAgICAgICAnPC90cj4nXG5cbiAgICAgICAgfSlcblxuICAgICAgICBodG1sID0gaHRtbCArICc8dHI+JyArXG4gICAgICAgICAgJzx0ZCBjb2xzcGFuPVwiNlwiPjxhIGhyZWY9XCInICsgUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fcGVyc29ubmVsX2NyZWF0ZScpICsgJ1wiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1ibG9ja1wiIGRhdGEtcHJvdmlkZT1cInRvb2x0aXBcIiBkYXRhLXBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPVwiQWpvdXRlciB1biBpbnRlcnZlbmFudFwiPjxpIGNsYXNzPVwiZmFzIGZhLXBsdXNcIj48L2k+IFNpIGxcXCdpbnRlcm52ZW5hbnQgblxcJ2VzdCBwYXMgcHLDqXNlbnQgZGFucyBsXFwnaW50cmFuZXQgdm91cyBwb3V2ZXogbFxcJ2Fqb3V0ZXI8L2E+PC90ZD4nICtcbiAgICAgICAgICAnPC90cj4nXG4gICAgICAgICQoJyNyZXN1bHQnKS5hcHBlbmQoaHRtbClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmFkZHBlcnNvbm5lbCcsIGZ1bmN0aW9uICgpIHtcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwaV9wZXJzb25uZWxfYWRkX3RvX2RlcGFydGVtZW50Jywge3NsdWc6ICQodGhpcykuZGF0YSgnc2x1ZycpfSksXG4gICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgYWRkQ2FsbG91dCgnUGVyc29ubmVsIGFqb3V0w6kgYXUgZMOpcGFydGVtZW50ICEnLCAnc3VjY2VzcycpXG4gICAgfVxuICB9KVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5wZXJzb25uZWxfaW5kZXhfY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAkKCcucGVyc29ubmVsX2luZGV4X2NoYW5nZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUgc2hvdycpXG4gICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZSBzaG93JylcbiAgbGV0ICR0eXBlID0gJCh0aGlzKS5kYXRhKCd0eXBlJylcbiAgJCgnI2xpc3RlUGVyc29ubmVsJykubG9hZChSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9wZXJzb25uZWxfbG9hZF9saXN0ZScsIHt0eXBlOiAkdHlwZX0pKVxufSlcblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcudXBkYXRlUm9sZScsIGZ1bmN0aW9uICgpIHtcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX3BlcnNvbm5lbF9kZXBhcnRlbWVudF9tb2RpZmllcl9kcm9pdCcsIHtwZXJzb25uZWw6ICQoJyNwZXJzb25uZWwnKS52YWwoKX0pLFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGRhdGE6IHsnZHJvaXQnOiAkKHRoaXMpLnZhbCgpfSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgYWRkQ2FsbG91dCgnRHJvaXRzIG1vZGlmacOpcyAhJywgJ3N1Y2Nlc3MnKVxuICAgIH1cbiAgfSlcbn0pXG4iXSwic291cmNlUm9vdCI6IiJ9