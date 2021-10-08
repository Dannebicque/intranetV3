(self["webpackChunkintranetv3"] = self["webpackChunkintranetv3"] || []).push([["sadm.personnels"],{

/***/ "./assets/js/pages/sadm.personnels.js":
/*!********************************************!*\
  !*** ./assets/js/pages/sadm.personnels.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/sadm.personnels.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 23/09/2021 09:58
$(document).on('keyup', '#sa_login_urca', function () {
  var departement = $(this).data('departement');
  var $val = $(this).val();

  if ($val.length > 2) {
    $.ajax({
      url: Routing.generate('api_personnel_recherche', {
        needle: $val
      }),
      dataType: 'json',
      success: function success(data) {
        $('#result').empty();
        jQuery.each(data, function (index, pers) {
          var html = '<tr>' + '<td>' + pers.nom + '</td>' + '<td>' + pers.prenom + '</td>' + '<td>' + pers.numeroHarpege + '</td>' + '<td>' + pers.username + '</td>' + '<td>' + pers.mail_univ + '</td>' + '<td><a href="#" class="btn btn-success btn-outline btn-square sa_addpersonnel" data-provide="tooltip" data-placement="bottom" title="Ajouter au departement" data-slug="' + pers.slug + '" data-departement="' + departement + '"><i class="fas fa-plus"></i></a></td>' + '</tr>';
          $('#result').append(html);
        });
      }
    });
  }
});
$(document).on('click', '.sa_addpersonnel', function () {
  $.ajax({
    url: Routing.generate('api_personnel_add_to_departement', {
      slug: $(this).data('slug'),
      departement: $(this).data('departement')
    }),
    dataType: 'json',
    success: function success(data) {
      addCallout('Personnel ajouté au departement !', 'success');
    }
  });
}); // $('#datatableRh').DataTable({
//   'processing': true,
//   'serverSide': true,
//   'language': dataTableLangueFr,
//   'ajax': Routing.generate('api_all_personnel'),
//   'sAjaxDataProp': 'data',
//   'pageLength': 25,
//   'order': [[1, 'asc']],
//   'columns': [
//     {'data': 'numero_harpege'},
//     {'data': 'nom'},
//     {'data': 'prenom'},
//     {'data': 'login'},
//     {'data': 'departements'},
//     {'data': 'deleted'},
//     {
//       'data': 'id',
//       'sortable': false,
//       'mRender': function (data, type, full) {
//         return '<a href="' + Routing.generate('sa_rh_personnel_show', {id: data}) + '" class="btn btn-info btn-outline btn-square" data-provide="tooltip"\n' +
//           '   data-placement="bottom" title="Détails"><i class="fa fa-info"></i></a>\n' +
//           '<a href="' + Routing.generate('sa_rh_personnel_edit', {id: data}) + '"\n' +
//           '   class="btn btn-warning btn-outline btn-square"\n' +
//           '                                                     data-provide="tooltip"\n' +
//           '                                                     data-placement="bottom"\n' +
//           '                                                     title="Modifier"><i class="fa fa-edit"></i></a>\n' +
//           '<a href="' + Routing.generate('sa_rh_delete_personnel', {id: data}) + '" class="btn btn-danger btn-outline btn-square supprimer" data-id="id"' +
//           '            data-provide="tooltip" data-placement="bottom"\n' +
//           '            title="Supprimer"><i class="fa fa-trash"></i></a>'
//       }
//     }]
//   //todo: gérer scrf sur le delete
// })

$(document).on('change', '.change_droit_pf', function () {
  $.ajax({
    url: Routing.generate('sa_personnel_departement_modifier_droit', {
      pf: $(this).data('pf')
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
$(document).on('click', '#searchLdap', function (e) {
  e.preventDefault();
  $.ajax({
    url: Routing.generate('ldap_search'),
    method: 'POST',
    data: {
      'numero': $('#personnel_numero_harpege').val()
    },
    success: function success(data) {
      $('#personnel_mail_univ').val(data.mail);
      $('#personnel_username').val(data.login);
      $('#personnel_nom').val(data.nom);
      $('#personnel_prenom').val(data.prenom);
      $('#personnel_date_naissance').val(data.dateNaissance);
    }
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js"], () => (__webpack_exec__("./assets/js/pages/sadm.personnels.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vYXNzZXRzL2pzL3BhZ2VzL3NhZG0ucGVyc29ubmVscy5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJvbiIsImRlcGFydGVtZW50IiwiZGF0YSIsIiR2YWwiLCJ2YWwiLCJsZW5ndGgiLCJhamF4IiwidXJsIiwiUm91dGluZyIsImdlbmVyYXRlIiwibmVlZGxlIiwiZGF0YVR5cGUiLCJzdWNjZXNzIiwiZW1wdHkiLCJqUXVlcnkiLCJlYWNoIiwiaW5kZXgiLCJwZXJzIiwiaHRtbCIsIm5vbSIsInByZW5vbSIsIm51bWVyb0hhcnBlZ2UiLCJ1c2VybmFtZSIsIm1haWxfdW5pdiIsInNsdWciLCJhcHBlbmQiLCJhZGRDYWxsb3V0IiwicGYiLCJtZXRob2QiLCJlIiwicHJldmVudERlZmF1bHQiLCJtYWlsIiwibG9naW4iLCJkYXRlTmFpc3NhbmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxFQUFaLENBQWUsT0FBZixFQUF3QixnQkFBeEIsRUFBMEMsWUFBWTtBQUNwRCxNQUFNQyxXQUFXLEdBQUdILENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUksSUFBUixDQUFhLGFBQWIsQ0FBcEI7QUFDQSxNQUFNQyxJQUFJLEdBQUdMLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUU0sR0FBUixFQUFiOztBQUNBLE1BQUlELElBQUksQ0FBQ0UsTUFBTCxHQUFjLENBQWxCLEVBQXFCO0FBQ25CUCxLQUFDLENBQUNRLElBQUYsQ0FBTztBQUNMQyxTQUFHLEVBQUVDLE9BQU8sQ0FBQ0MsUUFBUixDQUFpQix5QkFBakIsRUFBNEM7QUFBQ0MsY0FBTSxFQUFFUDtBQUFULE9BQTVDLENBREE7QUFFTFEsY0FBUSxFQUFFLE1BRkw7QUFHTEMsYUFBTyxFQUFFLGlCQUFVVixJQUFWLEVBQWdCO0FBQ3ZCSixTQUFDLENBQUMsU0FBRCxD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LGlCQUFVVixJQUFWLEVBQWdCO0FBQ3ZCSixPQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQk0sR0FBMUIsQ0FBOEJGLElBQUksQ0FBQzZCLElBQW5DO0FBQ0FqQyxPQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5Qk0sR0FBekIsQ0FBNkJGLElBQUksQ0FBQzhCLEtBQWxDO0FBQ0FsQyxPQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQk0sR0FBcEIsQ0FBd0JGLElBQUksQ0FBQ2lCLEdBQTdCO0FBQ0FyQixPQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1Qk0sR0FBdkIsQ0FBMkJGLElBQUksQ0FBQ2tCLE1BQWhDO0FBQ0F0QixPQUFDLENBQUMsMkJBQUQsQ0FBRCxDQUErQk0sR0FBL0IsQ0FBbUNGLElBQUksQ0FBQytCLGFBQXhDO0FBQ0Q7QUFaSSxHQUFQO0FBY0QsQ0FoQkQsRSIsImZpbGUiOiJzYWRtLnBlcnNvbm5lbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvcGFnZXMvc2FkbS5wZXJzb25uZWxzLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMjMvMDkvMjAyMSAwOTo1OFxuXG4kKGRvY3VtZW50KS5vbigna2V5dXAnLCAnI3NhX2xvZ2luX3VyY2EnLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGRlcGFydGVtZW50ID0gJCh0aGlzKS5kYXRhKCdkZXBhcnRlbWVudCcpXG4gIGNvbnN0ICR2YWwgPSAkKHRoaXMpLnZhbCgpXG4gIGlmICgkdmFsLmxlbmd0aCA+IDIpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcGlfcGVyc29ubmVsX3JlY2hlcmNoZScsIHtuZWVkbGU6ICR2YWx9KSxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAkKCcjcmVzdWx0JykuZW1wdHkoKVxuICAgICAgICBqUXVlcnkuZWFjaChkYXRhLCBmdW5jdGlvbiAoaW5kZXgsIHBlcnMpIHtcbiAgICAgICAgICBjb25zdCBodG1sID0gJzx0cj4nICtcbiAgICAgICAgICAgICc8dGQ+JyArIHBlcnMubm9tICsgJzwvdGQ+JyArXG4gICAgICAgICAgICAnPHRkPicgKyBwZXJzLnByZW5vbSArICc8L3RkPicgK1xuICAgICAgICAgICAgJzx0ZD4nICsgcGVycy5udW1lcm9IYXJwZWdlICsgJzwvdGQ+JyArXG4gICAgICAgICAgICAnPHRkPicgKyBwZXJzLnVzZXJuYW1lICsgJzwvdGQ+JyArXG4gICAgICAgICAgICAnPHRkPicgKyBwZXJzLm1haWxfdW5pdiArICc8L3RkPicgK1xuICAgICAgICAgICAgJzx0ZD48YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1vdXRsaW5lIGJ0bi1zcXVhcmUgc2FfYWRkcGVyc29ubmVsXCIgZGF0YS1wcm92aWRlPVwidG9vbHRpcFwiIGRhdGEtcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9XCJBam91dGVyIGF1IGRlcGFydGVtZW50XCIgZGF0YS1zbHVnPVwiJyArIHBlcnMuc2x1ZyArICdcIiBkYXRhLWRlcGFydGVtZW50PVwiJyArIGRlcGFydGVtZW50ICsgJ1wiPjxpIGNsYXNzPVwiZmFzIGZhLXBsdXNcIj48L2k+PC9hPjwvdGQ+JyArXG4gICAgICAgICAgICAnPC90cj4nXG4gICAgICAgICAgJCgnI3Jlc3VsdCcpLmFwcGVuZChodG1sKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuc2FfYWRkcGVyc29ubmVsJywgZnVuY3Rpb24gKCkge1xuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYXBpX3BlcnNvbm5lbF9hZGRfdG9fZGVwYXJ0ZW1lbnQnLCB7XG4gICAgICBzbHVnOiAkKHRoaXMpLmRhdGEoJ3NsdWcnKSxcbiAgICAgIGRlcGFydGVtZW50OiAkKHRoaXMpLmRhdGEoJ2RlcGFydGVtZW50JylcbiAgICB9KSxcbiAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBhZGRDYWxsb3V0KCdQZXJzb25uZWwgYWpvdXTDqSBhdSBkZXBhcnRlbWVudCAhJywgJ3N1Y2Nlc3MnKVxuXG4gICAgfVxuICB9KVxufSlcblxuLy8gJCgnI2RhdGF0YWJsZVJoJykuRGF0YVRhYmxlKHtcbi8vICAgJ3Byb2Nlc3NpbmcnOiB0cnVlLFxuLy8gICAnc2VydmVyU2lkZSc6IHRydWUsXG4vLyAgICdsYW5ndWFnZSc6IGRhdGFUYWJsZUxhbmd1ZUZyLFxuLy8gICAnYWpheCc6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwaV9hbGxfcGVyc29ubmVsJyksXG4vLyAgICdzQWpheERhdGFQcm9wJzogJ2RhdGEnLFxuLy8gICAncGFnZUxlbmd0aCc6IDI1LFxuLy8gICAnb3JkZXInOiBbWzEsICdhc2MnXV0sXG4vLyAgICdjb2x1bW5zJzogW1xuLy8gICAgIHsnZGF0YSc6ICdudW1lcm9faGFycGVnZSd9LFxuLy8gICAgIHsnZGF0YSc6ICdub20nfSxcbi8vICAgICB7J2RhdGEnOiAncHJlbm9tJ30sXG4vLyAgICAgeydkYXRhJzogJ2xvZ2luJ30sXG4vLyAgICAgeydkYXRhJzogJ2RlcGFydGVtZW50cyd9LFxuLy8gICAgIHsnZGF0YSc6ICdkZWxldGVkJ30sXG4vLyAgICAge1xuLy8gICAgICAgJ2RhdGEnOiAnaWQnLFxuLy8gICAgICAgJ3NvcnRhYmxlJzogZmFsc2UsXG4vLyAgICAgICAnbVJlbmRlcic6IGZ1bmN0aW9uIChkYXRhLCB0eXBlLCBmdWxsKSB7XG4vLyAgICAgICAgIHJldHVybiAnPGEgaHJlZj1cIicgKyBSb3V0aW5nLmdlbmVyYXRlKCdzYV9yaF9wZXJzb25uZWxfc2hvdycsIHtpZDogZGF0YX0pICsgJ1wiIGNsYXNzPVwiYnRuIGJ0bi1pbmZvIGJ0bi1vdXRsaW5lIGJ0bi1zcXVhcmVcIiBkYXRhLXByb3ZpZGU9XCJ0b29sdGlwXCJcXG4nICtcbi8vICAgICAgICAgICAnICAgZGF0YS1wbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT1cIkTDqXRhaWxzXCI+PGkgY2xhc3M9XCJmYSBmYS1pbmZvXCI+PC9pPjwvYT5cXG4nICtcbi8vICAgICAgICAgICAnPGEgaHJlZj1cIicgKyBSb3V0aW5nLmdlbmVyYXRlKCdzYV9yaF9wZXJzb25uZWxfZWRpdCcsIHtpZDogZGF0YX0pICsgJ1wiXFxuJyArXG4vLyAgICAgICAgICAgJyAgIGNsYXNzPVwiYnRuIGJ0bi13YXJuaW5nIGJ0bi1vdXRsaW5lIGJ0bi1zcXVhcmVcIlxcbicgK1xuLy8gICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcHJvdmlkZT1cInRvb2x0aXBcIlxcbicgK1xuLy8gICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcGxhY2VtZW50PVwiYm90dG9tXCJcXG4nICtcbi8vICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk1vZGlmaWVyXCI+PGkgY2xhc3M9XCJmYSBmYS1lZGl0XCI+PC9pPjwvYT5cXG4nICtcbi8vICAgICAgICAgICAnPGEgaHJlZj1cIicgKyBSb3V0aW5nLmdlbmVyYXRlKCdzYV9yaF9kZWxldGVfcGVyc29ubmVsJywge2lkOiBkYXRhfSkgKyAnXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlciBidG4tb3V0bGluZSBidG4tc3F1YXJlIHN1cHByaW1lclwiIGRhdGEtaWQ9XCJpZFwiJyArXG4vLyAgICAgICAgICAgJyAgICAgICAgICAgIGRhdGEtcHJvdmlkZT1cInRvb2x0aXBcIiBkYXRhLXBsYWNlbWVudD1cImJvdHRvbVwiXFxuJyArXG4vLyAgICAgICAgICAgJyAgICAgICAgICAgIHRpdGxlPVwiU3VwcHJpbWVyXCI+PGkgY2xhc3M9XCJmYSBmYS10cmFzaFwiPjwvaT48L2E+J1xuLy8gICAgICAgfVxuLy8gICAgIH1dXG4vLyAgIC8vdG9kbzogZ8OpcmVyIHNjcmYgc3VyIGxlIGRlbGV0ZVxuLy8gfSlcblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcuY2hhbmdlX2Ryb2l0X3BmJywgZnVuY3Rpb24gKCkge1xuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnc2FfcGVyc29ubmVsX2RlcGFydGVtZW50X21vZGlmaWVyX2Ryb2l0Jywge3BmOiAkKHRoaXMpLmRhdGEoJ3BmJyl9KSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBkYXRhOiB7J2Ryb2l0JzogJCh0aGlzKS52YWwoKX0sXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIGFkZENhbGxvdXQoJ0Ryb2l0cyBtb2RpZmnDqXMgIScsICdzdWNjZXNzJylcblxuICAgIH1cbiAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjc2VhcmNoTGRhcCcsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnbGRhcF9zZWFyY2gnKSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBkYXRhOiB7XG4gICAgICAnbnVtZXJvJzogJCgnI3BlcnNvbm5lbF9udW1lcm9faGFycGVnZScpLnZhbCgpXG4gICAgfSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgJCgnI3BlcnNvbm5lbF9tYWlsX3VuaXYnKS52YWwoZGF0YS5tYWlsKVxuICAgICAgJCgnI3BlcnNvbm5lbF91c2VybmFtZScpLnZhbChkYXRhLmxvZ2luKVxuICAgICAgJCgnI3BlcnNvbm5lbF9ub20nKS52YWwoZGF0YS5ub20pXG4gICAgICAkKCcjcGVyc29ubmVsX3ByZW5vbScpLnZhbChkYXRhLnByZW5vbSlcbiAgICAgICQoJyNwZXJzb25uZWxfZGF0ZV9uYWlzc2FuY2UnKS52YWwoZGF0YS5kYXRlTmFpc3NhbmNlKVxuICAgIH1cbiAgfSlcbn0pXG4iXSwic291cmNlUm9vdCI6IiJ9