(self["webpackChunkintranetv3"] = self["webpackChunkintranetv3"] || []).push([["adm.personnels"],{

/***/ "./assets/js/pages/adm.personnels.js":
/*!*******************************************!*\
  !*** ./assets/js/pages/adm.personnels.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

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
      language: dataTableLangueFr
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js"], () => (__webpack_exec__("./assets/js/pages/adm.personnels.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vYXNzZXRzL2pzL3BhZ2VzL2FkbS5wZXJzb25uZWxzLmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsIm9uIiwiJHZhbCIsInZhbCIsImxlbmd0aCIsImFqYXgiLCJ1cmwiLCJSb3V0aW5nIiwiZ2VuZXJhdGUiLCJuZWVkbGUiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJkYXRhIiwiaHRtbCIsImVtcHR5IiwialF1ZXJ5IiwiZWFjaCIsImluZGV4IiwicGVycyIsIm5vbSIsInByZW5vbSIsIm51bWVyb0hhcnBlZ2UiLCJ1c2VybmFtZSIsIm1haWxfdW5pdiIsInNsdWciLCJhcHBlbmQiLCJhZGRDYWxsb3V0IiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsIiR0eXBlIiwibG9hZCIsInR5cGUiLCJEYXRhVGFibGUiLCJsYW5ndWFnZSIsImRhdGFUYWJsZUxhbmd1ZUZyIiwiYXR0ciIsInBlcnNvbm5lbCIsIm1ldGhvZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsRUFBWixDQUFlLE9BQWYsRUFBd0IsYUFBeEIsRUFBdUMsWUFBWTtBQUNqRCxNQUFNQyxJQUFJLEdBQUdILENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUksR0FBUixFQUFiOztBQUNBLE1BQUlELElBQUksQ0FBQ0UsTUFBTCxHQUFjLENBQWxCLEVBQXFCO0FBQ25CTCxLQUFDLENBQUNNLElBQUYsQ0FBTztBQUNMQyxTQUFHLEVBQUVDLE9BQU8sQ0FBQ0MsUUFBUixDQUFpQix5QkFBakIsRUFBNEM7QUFBQ0MsY0FBTSxFQUFFUDtBQUFULE9BQTVDLENBREE7QUFFTFEsY0FBUSxFQUFFLE1BRkw7QUFHTEMsYUFBTyxFQUFFLGlCQUFVQyxJQUFWLEVBQWdCO0FBQ3ZCLFlBQUlDLElBQUksR0FBRyxFQUFYO0FBQ0FkLFNBQUMsQ0FBQyxTQUFELENBQUQsQ0FB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RUFBRUYsS0FEMEU7QUFFaEYsaUJBQVc7QUFGcUUsS0FBcEQsQ0FBOUI7QUFJRCxHQWxCRDtBQW1CRCxDQXZCRDtBQXlCQTlCLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEVBQVosQ0FBZSxRQUFmLEVBQXlCLGFBQXpCLEVBQXdDLFlBQVk7QUFDbERGLEdBQUMsQ0FBQ00sSUFBRixDQUFPO0FBQ0xDLE9BQUcsRUFBRUMsT0FBTyxDQUFDQyxRQUFSLENBQWlCLDRDQUFqQixFQUErRDtBQUFDNEIsZUFBUyxFQUFFckMsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQkksR0FBaEI7QUFBWixLQUEvRCxDQURBO0FBRUxrQyxVQUFNLEVBQUUsTUFGSDtBQUdMekIsUUFBSSxFQUFFO0FBQUMsZUFBU2IsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSSxHQUFSO0FBQVYsS0FIRDtBQUlMUSxXQUFPLEVBQUUsaUJBQVVDLElBQVYsRUFBZ0I7QUFDdkJjLGdCQUFVLENBQUMsbUJBQUQsRUFBc0IsU0FBdEIsQ0FBVjtBQUNEO0FBTkksR0FBUDtBQVFELENBVEQsRSIsImZpbGUiOiJhZG0ucGVyc29ubmVscy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMS4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9wYWdlcy9hZG0ucGVyc29ubmVscy5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDEyLzA5LzIwMjEgMDk6MDFcblxuJChkb2N1bWVudCkub24oJ2tleXVwJywgJyNsb2dpbl91cmNhJywgZnVuY3Rpb24gKCkge1xuICBjb25zdCAkdmFsID0gJCh0aGlzKS52YWwoKVxuICBpZiAoJHZhbC5sZW5ndGggPiAyKSB7XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYXBpX3BlcnNvbm5lbF9yZWNoZXJjaGUnLCB7bmVlZGxlOiAkdmFsfSksXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgbGV0IGh0bWwgPSAnJ1xuICAgICAgICAkKCcjcmVzdWx0JykuZW1wdHkoKVxuICAgICAgICBqUXVlcnkuZWFjaChkYXRhLCBmdW5jdGlvbiAoaW5kZXgsIHBlcnMpIHtcbiAgICAgICAgICBodG1sID0gaHRtbCArICc8dHI+JyArXG4gICAgICAgICAgICAnPHRkPicgKyBwZXJzLm5vbSArICc8L3RkPicgK1xuICAgICAgICAgICAgJzx0ZD4nICsgcGVycy5wcmVub20gKyAnPC90ZD4nICtcbiAgICAgICAgICAgICc8dGQ+JyArIHBlcnMubnVtZXJvSGFycGVnZSArICc8L3RkPicgK1xuICAgICAgICAgICAgJzx0ZD4nICsgcGVycy51c2VybmFtZSArICc8L3RkPicgK1xuICAgICAgICAgICAgJzx0ZD4nICsgcGVycy5tYWlsX3VuaXYgKyAnPC90ZD4nICtcbiAgICAgICAgICAgICc8dGQ+PGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBidG4tb3V0bGluZSBidG4tc3F1YXJlIGFkZHBlcnNvbm5lbFwiIGRhdGEtcHJvdmlkZT1cInRvb2x0aXBcIiBkYXRhLXBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPVwiQWpvdXRlciBhdSBkZXBhcnRlbWVudFwiIGRhdGEtc2x1Zz1cIicgKyBwZXJzLnNsdWcgKyAnXCI+PGkgY2xhc3M9XCJmYXMgZmEtcGx1c1wiPjwvaT48L2E+PC90ZD4nICtcbiAgICAgICAgICAgICc8L3RyPidcblxuICAgICAgICB9KVxuXG4gICAgICAgIGh0bWwgPSBodG1sICsgJzx0cj4nICtcbiAgICAgICAgICAnPHRkIGNvbHNwYW49XCI2XCI+PGEgaHJlZj1cIicgKyBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9wZXJzb25uZWxfY3JlYXRlJykgKyAnXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgYnRuLWJsb2NrXCIgZGF0YS1wcm92aWRlPVwidG9vbHRpcFwiIGRhdGEtcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9XCJBam91dGVyIHVuIGludGVydmVuYW50XCI+PGkgY2xhc3M9XCJmYXMgZmEtcGx1c1wiPjwvaT4gU2kgbFxcJ2ludGVybnZlbmFudCBuXFwnZXN0IHBhcyBwcsOpc2VudCBkYW5zIGxcXCdpbnRyYW5ldCB2b3VzIHBvdXZleiBsXFwnYWpvdXRlcjwvYT48L3RkPicgK1xuICAgICAgICAgICc8L3RyPidcbiAgICAgICAgJCgnI3Jlc3VsdCcpLmFwcGVuZChodG1sKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuYWRkcGVyc29ubmVsJywgZnVuY3Rpb24gKCkge1xuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYXBpX3BlcnNvbm5lbF9hZGRfdG9fZGVwYXJ0ZW1lbnQnLCB7c2x1ZzogJCh0aGlzKS5kYXRhKCdzbHVnJyl9KSxcbiAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBhZGRDYWxsb3V0KCdQZXJzb25uZWwgYWpvdXTDqSBhdSBkw6lwYXJ0ZW1lbnQgIScsICdzdWNjZXNzJylcbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnBlcnNvbm5lbF9pbmRleF9jaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICQoJy5wZXJzb25uZWxfaW5kZXhfY2hhbmdlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZSBzaG93JylcbiAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlIHNob3cnKVxuICBsZXQgJHR5cGUgPSAkKHRoaXMpLmRhdGEoJ3R5cGUnKVxuICAkKCcjbGlzdGVQZXJzb25uZWwnKS5sb2FkKFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX3BlcnNvbm5lbF9sb2FkX2xpc3RlJywge3R5cGU6ICR0eXBlfSksIGZ1bmN0aW9uICgpIHtcblxuICAgICQoJyN0YWJsZWF1JykuRGF0YVRhYmxlKHtcbiAgICAgIGxhbmd1YWdlOiBkYXRhVGFibGVMYW5ndWVGclxuICAgIH0pXG5cbiAgICAkKCcjZXhwb3J0X2NzdicpLmF0dHIoJ2hyZWYnLCBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9wZXJzb25uZWxfZXhwb3J0Jywge1xuICAgICAgdHlwZTogJHR5cGUsXG4gICAgICAnX2Zvcm1hdCc6ICdjc3YnXG4gICAgfSkpXG4gICAgJCgnI2V4cG9ydF94bHN4JykuYXR0cignaHJlZicsIFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX3BlcnNvbm5lbF9leHBvcnQnLCB7XG4gICAgICB0eXBlOiAkdHlwZSxcbiAgICAgICdfZm9ybWF0JzogJ3hsc3gnXG4gICAgfSkpXG4gICAgJCgnI2V4cG9ydF9wZGYnKS5hdHRyKCdocmVmJywgUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fcGVyc29ubmVsX2V4cG9ydCcsIHtcbiAgICAgIHR5cGU6ICR0eXBlLFxuICAgICAgJ19mb3JtYXQnOiAncGRmJ1xuICAgIH0pKVxuICB9KVxufSlcblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcudXBkYXRlUm9sZScsIGZ1bmN0aW9uICgpIHtcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluX3BlcnNvbm5lbF9kZXBhcnRlbWVudF9tb2RpZmllcl9kcm9pdCcsIHtwZXJzb25uZWw6ICQoJyNwZXJzb25uZWwnKS52YWwoKX0pLFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGRhdGE6IHsnZHJvaXQnOiAkKHRoaXMpLnZhbCgpfSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgYWRkQ2FsbG91dCgnRHJvaXRzIG1vZGlmacOpcyAhJywgJ3N1Y2Nlc3MnKVxuICAgIH1cbiAgfSlcbn0pXG4iXSwic291cmNlUm9vdCI6IiJ9