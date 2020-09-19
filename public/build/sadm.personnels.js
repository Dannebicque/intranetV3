(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sadm.personnels"],{

/***/ "./assets/js/pages/sadm.personnels.js":
/*!********************************************!*\
  !*** ./assets/js/pages/sadm.personnels.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, jQuery) {/* harmony import */ var _vendor_datatables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../vendor/datatables */ "./assets/vendor/datatables/index.js");
/* harmony import */ var _lang_fr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lang/fr */ "./assets/js/lang/fr.js");
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/sadm.personnels.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 06/09/2020 13:13


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
});
$('#datatableRh').DataTable({
  'processing': true,
  'serverSide': true,
  'language': _lang_fr__WEBPACK_IMPORTED_MODULE_1__["dataTableLangueFr"],
  'ajax': Routing.generate('api_all_personnel'),
  'sAjaxDataProp': 'data',
  'pageLength': 25,
  'order': [[1, 'asc']],
  'columns': [{
    'data': 'numero_harpege'
  }, {
    'data': 'nom'
  }, {
    'data': 'prenom'
  }, {
    'data': 'login'
  }, {
    'data': 'departements'
  }, {
    'data': 'deleted'
  }, {
    'data': 'id',
    'sortable': false,
    'mRender': function mRender(data, type, full) {
      return '<a href="' + Routing.generate('sa_rh_personnel_show', {
        id: data
      }) + '" class="btn btn-info btn-outline btn-square" data-provide="tooltip"\n' + '   data-placement="bottom" title="Détails"><i class="fa fa-info"></i></a>\n' + '<a href="' + Routing.generate('sa_rh_personnel_edit', {
        id: data
      }) + '"\n' + '   class="btn btn-warning btn-outline btn-square"\n' + '                                                     data-provide="tooltip"\n' + '                                                     data-placement="bottom"\n' + '                                                     title="Modifier"><i class="fa fa-edit"></i></a>\n' + '<a href="' + Routing.generate('sa_rh_delete_personnel', {
        id: data
      }) + '" class="btn btn-danger btn-outline btn-square supprimer" data-id="id"' + '            data-provide="tooltip" data-placement="bottom"\n' + '            title="Supprimer"><i class="fa fa-trash"></i></a>';
    }
  }] //todo: gérer scrf sur le delete

});
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
    url: Routing.generate('sa_rh_ldap_search'),
    method: 'POST',
    data: {
      'numero': $('#personnel_numero_harpege').val()
    },
    success: function success(data) {
      $('#personnel_mail_univ').val(data.mail);
      $('#personnel_username').val(data.login);
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},[["./assets/js/pages/sadm.personnels.js","runtime","vendors~absences~adm.absences~adm.alternances~adm.articles~adm.bornes~adm.configuration~adm.edt~adm.~08e24351","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~7c3f1a6f","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~a14823c0","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~38bcb1f7","vendors~absences~adm.absences~adm.edt~adm.etudiants~adm.personnels~adm.stage~app~datatable~sadm.personnels","vendors~absences~adm.absences~adm.edt~adm.etudiants~adm.personnels~app~datatable~sadm.personnels","vendors~absences~adm.absences~adm.etudiants~adm.personnels~datatable~sadm.personnels","absences~adm.absences~adm.etudiants~adm.personnels~datatable~sadm.personnels"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvc2FkbS5wZXJzb25uZWxzLmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsIm9uIiwiZGVwYXJ0ZW1lbnQiLCJkYXRhIiwiJHZhbCIsInZhbCIsImxlbmd0aCIsImFqYXgiLCJ1cmwiLCJSb3V0aW5nIiwiZ2VuZXJhdGUiLCJuZWVkbGUiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJlbXB0eSIsImpRdWVyeSIsImVhY2giLCJpbmRleCIsInBlcnMiLCJodG1sIiwibm9tIiwicHJlbm9tIiwibnVtZXJvSGFycGVnZSIsInVzZXJuYW1lIiwibWFpbF91bml2Iiwic2x1ZyIsImFwcGVuZCIsImFkZENhbGxvdXQiLCJEYXRhVGFibGUiLCJkYXRhVGFibGVMYW5ndWVGciIsInR5cGUiLCJmdWxsIiwiaWQiLCJwZiIsIm1ldGhvZCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm1haWwiLCJsb2dpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEVBQVosQ0FBZSxPQUFmLEVBQXdCLGdCQUF4QixFQUEwQyxZQUFZO0FBQ3BELE1BQU1DLFdBQVcsR0FBR0gsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSSxJQUFSLENBQWEsYUFBYixDQUFwQjtBQUNBLE1BQU1DLElBQUksR0FBR0wsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRTSxHQUFSLEVBQWI7O0FBQ0EsTUFBSUQsSUFBSSxDQUFDRSxNQUFMLEdBQWMsQ0FBbEIsRUFBcUI7QUFDbkJQLEtBQUMsQ0FBQ1EsSUFBRixDQUFPO0FBQ0xDLFNBQUcsRUFBRUMsT0FBTyxDQUFDQyxRQUFSLENBQWlCLHlCQUFqQixFQUE0QztBQUFDQyxjQUFNLEVBQUVQO0FBQVQsT0FBNUMsQ0FEQTtBQUVMUSxjQUFRLEVBQUUsTUFGTDtBQUdMQyxh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R0FBekIsQ0FBNkJGLElBQUksQ0FBQ21DLEtBQWxDO0FBQ0Q7QUFUSSxHQUFQO0FBV0QsQ0FiRCxFIiwiZmlsZSI6InNhZG0ucGVyc29ubmVscy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9wYWdlcy9zYWRtLnBlcnNvbm5lbHMuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAwNi8wOS8yMDIwIDEzOjEzXG5pbXBvcnQgJy4uLy4uL3ZlbmRvci9kYXRhdGFibGVzJ1xuaW1wb3J0IHtkYXRhVGFibGVMYW5ndWVGcn0gZnJvbSAnLi4vbGFuZy9mcidcblxuJChkb2N1bWVudCkub24oJ2tleXVwJywgJyNzYV9sb2dpbl91cmNhJywgZnVuY3Rpb24gKCkge1xuICBjb25zdCBkZXBhcnRlbWVudCA9ICQodGhpcykuZGF0YSgnZGVwYXJ0ZW1lbnQnKVxuICBjb25zdCAkdmFsID0gJCh0aGlzKS52YWwoKVxuICBpZiAoJHZhbC5sZW5ndGggPiAyKSB7XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYXBpX3BlcnNvbm5lbF9yZWNoZXJjaGUnLCB7bmVlZGxlOiAkdmFsfSksXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgJCgnI3Jlc3VsdCcpLmVtcHR5KClcbiAgICAgICAgalF1ZXJ5LmVhY2goZGF0YSwgZnVuY3Rpb24gKGluZGV4LCBwZXJzKSB7XG4gICAgICAgICAgY29uc3QgaHRtbCA9ICc8dHI+JyArXG4gICAgICAgICAgICAnPHRkPicgKyBwZXJzLm5vbSArICc8L3RkPicgK1xuICAgICAgICAgICAgJzx0ZD4nICsgcGVycy5wcmVub20gKyAnPC90ZD4nICtcbiAgICAgICAgICAgICc8dGQ+JyArIHBlcnMubnVtZXJvSGFycGVnZSArICc8L3RkPicgK1xuICAgICAgICAgICAgJzx0ZD4nICsgcGVycy51c2VybmFtZSArICc8L3RkPicgK1xuICAgICAgICAgICAgJzx0ZD4nICsgcGVycy5tYWlsX3VuaXYgKyAnPC90ZD4nICtcbiAgICAgICAgICAgICc8dGQ+PGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBidG4tb3V0bGluZSBidG4tc3F1YXJlIHNhX2FkZHBlcnNvbm5lbFwiIGRhdGEtcHJvdmlkZT1cInRvb2x0aXBcIiBkYXRhLXBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPVwiQWpvdXRlciBhdSBkZXBhcnRlbWVudFwiIGRhdGEtc2x1Zz1cIicgKyBwZXJzLnNsdWcgKyAnXCIgZGF0YS1kZXBhcnRlbWVudD1cIicgKyBkZXBhcnRlbWVudCArICdcIj48aSBjbGFzcz1cImZhcyBmYS1wbHVzXCI+PC9pPjwvYT48L3RkPicgK1xuICAgICAgICAgICAgJzwvdHI+J1xuICAgICAgICAgICQoJyNyZXN1bHQnKS5hcHBlbmQoaHRtbClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnNhX2FkZHBlcnNvbm5lbCcsIGZ1bmN0aW9uICgpIHtcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwaV9wZXJzb25uZWxfYWRkX3RvX2RlcGFydGVtZW50Jywge1xuICAgICAgc2x1ZzogJCh0aGlzKS5kYXRhKCdzbHVnJyksXG4gICAgICBkZXBhcnRlbWVudDogJCh0aGlzKS5kYXRhKCdkZXBhcnRlbWVudCcpXG4gICAgfSksXG4gICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgYWRkQ2FsbG91dCgnUGVyc29ubmVsIGFqb3V0w6kgYXUgZGVwYXJ0ZW1lbnQgIScsICdzdWNjZXNzJylcblxuICAgIH1cbiAgfSlcbn0pXG5cbiQoJyNkYXRhdGFibGVSaCcpLkRhdGFUYWJsZSh7XG4gICdwcm9jZXNzaW5nJzogdHJ1ZSxcbiAgJ3NlcnZlclNpZGUnOiB0cnVlLFxuICAnbGFuZ3VhZ2UnOiBkYXRhVGFibGVMYW5ndWVGcixcbiAgJ2FqYXgnOiBSb3V0aW5nLmdlbmVyYXRlKCdhcGlfYWxsX3BlcnNvbm5lbCcpLFxuICAnc0FqYXhEYXRhUHJvcCc6ICdkYXRhJyxcbiAgJ3BhZ2VMZW5ndGgnOiAyNSxcbiAgJ29yZGVyJzogW1sxLCAnYXNjJ11dLFxuICAnY29sdW1ucyc6IFtcbiAgICB7J2RhdGEnOiAnbnVtZXJvX2hhcnBlZ2UnfSxcbiAgICB7J2RhdGEnOiAnbm9tJ30sXG4gICAgeydkYXRhJzogJ3ByZW5vbSd9LFxuICAgIHsnZGF0YSc6ICdsb2dpbid9LFxuICAgIHsnZGF0YSc6ICdkZXBhcnRlbWVudHMnfSxcbiAgICB7J2RhdGEnOiAnZGVsZXRlZCd9LFxuICAgIHtcbiAgICAgICdkYXRhJzogJ2lkJyxcbiAgICAgICdzb3J0YWJsZSc6IGZhbHNlLFxuICAgICAgJ21SZW5kZXInOiBmdW5jdGlvbiAoZGF0YSwgdHlwZSwgZnVsbCkge1xuICAgICAgICByZXR1cm4gJzxhIGhyZWY9XCInICsgUm91dGluZy5nZW5lcmF0ZSgnc2FfcmhfcGVyc29ubmVsX3Nob3cnLCB7aWQ6IGRhdGF9KSArICdcIiBjbGFzcz1cImJ0biBidG4taW5mbyBidG4tb3V0bGluZSBidG4tc3F1YXJlXCIgZGF0YS1wcm92aWRlPVwidG9vbHRpcFwiXFxuJyArXG4gICAgICAgICAgJyAgIGRhdGEtcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9XCJEw6l0YWlsc1wiPjxpIGNsYXNzPVwiZmEgZmEtaW5mb1wiPjwvaT48L2E+XFxuJyArXG4gICAgICAgICAgJzxhIGhyZWY9XCInICsgUm91dGluZy5nZW5lcmF0ZSgnc2FfcmhfcGVyc29ubmVsX2VkaXQnLCB7aWQ6IGRhdGF9KSArICdcIlxcbicgK1xuICAgICAgICAgICcgICBjbGFzcz1cImJ0biBidG4td2FybmluZyBidG4tb3V0bGluZSBidG4tc3F1YXJlXCJcXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXByb3ZpZGU9XCJ0b29sdGlwXCJcXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXBsYWNlbWVudD1cImJvdHRvbVwiXFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJNb2RpZmllclwiPjxpIGNsYXNzPVwiZmEgZmEtZWRpdFwiPjwvaT48L2E+XFxuJyArXG4gICAgICAgICAgJzxhIGhyZWY9XCInICsgUm91dGluZy5nZW5lcmF0ZSgnc2FfcmhfZGVsZXRlX3BlcnNvbm5lbCcsIHtpZDogZGF0YX0pICsgJ1wiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLW91dGxpbmUgYnRuLXNxdWFyZSBzdXBwcmltZXJcIiBkYXRhLWlkPVwiaWRcIicgK1xuICAgICAgICAgICcgICAgICAgICAgICBkYXRhLXByb3ZpZGU9XCJ0b29sdGlwXCIgZGF0YS1wbGFjZW1lbnQ9XCJib3R0b21cIlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICB0aXRsZT1cIlN1cHByaW1lclwiPjxpIGNsYXNzPVwiZmEgZmEtdHJhc2hcIj48L2k+PC9hPidcbiAgICAgIH1cbiAgICB9XVxuICAvL3RvZG86IGfDqXJlciBzY3JmIHN1ciBsZSBkZWxldGVcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnLmNoYW5nZV9kcm9pdF9wZicsIGZ1bmN0aW9uICgpIHtcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3NhX3BlcnNvbm5lbF9kZXBhcnRlbWVudF9tb2RpZmllcl9kcm9pdCcsIHtwZjogJCh0aGlzKS5kYXRhKCdwZicpfSksXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgZGF0YTogeydkcm9pdCc6ICQodGhpcykudmFsKCl9LFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBhZGRDYWxsb3V0KCdEcm9pdHMgbW9kaWZpw6lzICEnLCAnc3VjY2VzcycpXG5cbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI3NlYXJjaExkYXAnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3NhX3JoX2xkYXBfc2VhcmNoJyksXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgZGF0YToge1xuICAgICAgJ251bWVybyc6ICQoJyNwZXJzb25uZWxfbnVtZXJvX2hhcnBlZ2UnKS52YWwoKVxuICAgIH0sXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICQoJyNwZXJzb25uZWxfbWFpbF91bml2JykudmFsKGRhdGEubWFpbClcbiAgICAgICQoJyNwZXJzb25uZWxfdXNlcm5hbWUnKS52YWwoZGF0YS5sb2dpbilcbiAgICB9XG4gIH0pXG59KVxuIl0sInNvdXJjZVJvb3QiOiIifQ==