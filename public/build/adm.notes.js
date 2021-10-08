(self["webpackChunkintranetv3"] = self["webpackChunkintranetv3"] || []).push([["adm.notes"],{

/***/ "./assets/js/pages/adm.notes.js":
/*!**************************************!*\
  !*** ./assets/js/pages/adm.notes.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./assets/js/util.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.notes.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 12/09/2021 09:01

$(document).on('click', '.optAfficher', function () {
  var evaluation = $(this).data('id');
  var $child = $(this).children('i');
  var $a = $(this);
  $.ajax({
    url: Routing.generate('administration_evaluation_visibilite', {
      uuid: evaluation
    }),
    success: function success() {
      if ($child.hasClass('fa-eye')) {
        $a.addClass('btn-danger');
        $a.removeClass('btn-info').removeClass('btn-outline');
        $child.removeClass('fa-eye');
        $child.addClass('fa-eye-slash');
        $a.attr('title', 'Evaluation masquée. Rendre visible l\'évaluation');
      } else {
        $a.removeClass('btn-danger');
        $a.addClass('btn-info').addClass('btn-outline');
        $child.removeClass('fa-eye-slash');
        $child.addClass('fa-eye');
        $a.attr('title', 'Evaluation visible. Masquer l\'évaluation');
      }

      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Visibilité de l\'évaluation modifiée !', 'success');
    },
    error: function error() {
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Une erreur est survenue !', 'danger');
    }
  });
});
$(document).on('click', '.optVerrouiller', function () {
  var evaluation = $(this).data('id');
  var $child = $(this).children('i');
  var $a = $(this);
  $.ajax({
    url: Routing.generate('administration_evaluation_modifiable', {
      uuid: evaluation
    }),
    success: function success() {
      if ($child.hasClass('fa-lock-open')) {
        $a.addClass('btn-danger');
        $a.removeClass('btn-warning').removeClass('btn-outline');
        $child.removeClass('fa-lock-open');
        $child.addClass('fa-lock');
        $a.attr('data-original-title', 'Modification interdite. Autoriser la modificaiton');
      } else {
        $a.removeClass('btn-danger');
        $a.addClass('btn-warning').addClass('btn-outline');
        $child.removeClass('fa-lock');
        $child.addClass('fa-lock-open');
        $a.attr('data-original-title', 'Modification autorisée. Interdire la modification');
      }

      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Vérouillage de l\'évaluation modifiée !', 'success');
    },
    error: function error() {
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Une erreur est survenue !', 'danger');
    }
  });
});
$(document).on('click', '#voirDetailAbsent', function (e) {
  e.preventDefault();
  $('#detailIncoherent').hide();
  $('#detailAbsent').toggle();
});
$(document).on('click', '#voirDetailIncoherent', function (e) {
  e.preventDefault();
  $('#detailIncoherent').toggle();
  $('#detailAbsent').hide();
});
$(document).on('click', '#remplacerParZero', function (e) {
  e.preventDefault();
  updateNote($(this).data('note'), 'zero').then(function (data) {
    $('#note_' + data).text(0);
  });
});
$(document).on('click', '#marquerAbsent', function (e) {
  e.preventDefault();
  updateNote($(this).data('note'), 'absent').then(function (data) {
    $('#note_' + data).text('Absence justifiée');
  });
});
$(document).on('click', '#supprAbsent', function (e) {
  e.preventDefault();
  updateNote($(this).data('note'), 'suppr-absence');
});

function updateNote(id, action) {
  return $.ajax({
    url: Routing.generate('administration_note_corrige_ajax', {
      note: id,
      action: action
    }),
    method: 'POST',
    success: function success(data) {
      return data;
    }
  });
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_arra-a68b23","vendors-node_modules_core-js_modules_es_string_split_js","vendors-node_modules_core-js_internals_array-method-is-strict_js-node_modules_core-js_interna-81f81c","vendors-node_modules_core-js_internals_dom-iterables_js-node_modules_core-js_modules_es_symbol_js","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_dat-47334b","assets_js_util_js"], () => (__webpack_exec__("./assets/js/pages/adm.notes.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vYXNzZXRzL2pzL3BhZ2VzL2FkbS5ub3Rlcy5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJvbiIsImV2YWx1YXRpb24iLCJkYXRhIiwiJGNoaWxkIiwiY2hpbGRyZW4iLCIkYSIsImFqYXgiLCJ1cmwiLCJSb3V0aW5nIiwiZ2VuZXJhdGUiLCJ1dWlkIiwic3VjY2VzcyIsImhhc0NsYXNzIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImF0dHIiLCJhZGRDYWxsb3V0IiwiZXJyb3IiLCJlIiwicHJldmVudERlZmF1bHQiLCJoaWRlIiwidG9nZ2xlIiwidXBkYXRlTm90ZSIsInRoZW4iLCJ0ZXh0IiwiaWQiLCJhY3Rpb24iLCJub3RlIiwibWV0aG9kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsRUFBWixDQUFlLE9BQWYsRUFBd0IsY0FBeEIsRUFBd0MsWUFBWTtBQUNsRCxNQUFNQyxVQUFVLEdBQUdILENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUksSUFBUixDQUFhLElBQWIsQ0FBbkI7QUFDQSxNQUFNQyxNQUFNLEdBQUdMLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUU0sUUFBUixDQUFpQixHQUFqQixDQUFmO0FBQ0EsTUFBTUMsRUFBRSxHQUFHUCxDQUFDLENBQUMsSUFBRCxDQUFaO0FBQ0FBLEdBQUMsQ0FBQ1EsSUFBRixDQUFPO0FBQ0xDLE9BQUcsRUFBRUMsT0FBTyxDQUFDQyxRQUFSLENBQWlCLHNDQUFqQixFQUF5RDtBQUFDQyxVQUFJLEVBQUVUO0FBQVAsS0FBekQsQ0FEQTtBQUVMVSxXQUFPLEVBQUUsbUJBQVk7QUFDbkIsVUFBSVIsTUFBTSxDQUFDUyxRQUFQLENBQWdCLFFBQWhCLENBQUosRUFBK0I7QUFDN0JQLFVBQUUsQ0FBQ1EsUUFBSCxDQUFZLFlBQVo7QUFDQVIsVUFBRSxD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UixDQUFhLE1BQWIsQ0FBRCxFQUF1QixlQUF2QixDQUFWO0FBQ0QsQ0FIRDs7QUFLQSxTQUFTb0IsVUFBVCxDQUFxQkcsRUFBckIsRUFBeUJDLE1BQXpCLEVBQWlDO0FBQy9CLFNBQU81QixDQUFDLENBQUNRLElBQUYsQ0FBTztBQUNaQyxPQUFHLEVBQUVDLE9BQU8sQ0FBQ0MsUUFBUixDQUFpQixrQ0FBakIsRUFBcUQ7QUFBQ2tCLFVBQUksRUFBRUYsRUFBUDtBQUFXQyxZQUFNLEVBQUVBO0FBQW5CLEtBQXJELENBRE87QUFFWkUsVUFBTSxFQUFFLE1BRkk7QUFHWmpCLFdBQU8sRUFBRSxpQkFBVVQsSUFBVixFQUFnQjtBQUN2QixhQUFPQSxJQUFQO0FBQ0Q7QUFMVyxHQUFQLENBQVA7QUFPRCxDIiwiZmlsZSI6ImFkbS5ub3Rlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMS4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9wYWdlcy9hZG0ubm90ZXMuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAxMi8wOS8yMDIxIDA5OjAxXG5pbXBvcnQge2FkZENhbGxvdXR9IGZyb20gJy4uL3V0aWwnXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcub3B0QWZmaWNoZXInLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGV2YWx1YXRpb24gPSAkKHRoaXMpLmRhdGEoJ2lkJylcbiAgY29uc3QgJGNoaWxkID0gJCh0aGlzKS5jaGlsZHJlbignaScpXG4gIGNvbnN0ICRhID0gJCh0aGlzKVxuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fZXZhbHVhdGlvbl92aXNpYmlsaXRlJywge3V1aWQ6IGV2YWx1YXRpb259KSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoJGNoaWxkLmhhc0NsYXNzKCdmYS1leWUnKSkge1xuICAgICAgICAkYS5hZGRDbGFzcygnYnRuLWRhbmdlcicpXG4gICAgICAgICRhLnJlbW92ZUNsYXNzKCdidG4taW5mbycpLnJlbW92ZUNsYXNzKCdidG4tb3V0bGluZScpXG5cbiAgICAgICAgJGNoaWxkLnJlbW92ZUNsYXNzKCdmYS1leWUnKVxuICAgICAgICAkY2hpbGQuYWRkQ2xhc3MoJ2ZhLWV5ZS1zbGFzaCcpXG4gICAgICAgICRhLmF0dHIoJ3RpdGxlJywgJ0V2YWx1YXRpb24gbWFzcXXDqWUuIFJlbmRyZSB2aXNpYmxlIGxcXCfDqXZhbHVhdGlvbicpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkYS5yZW1vdmVDbGFzcygnYnRuLWRhbmdlcicpXG4gICAgICAgICRhLmFkZENsYXNzKCdidG4taW5mbycpLmFkZENsYXNzKCdidG4tb3V0bGluZScpXG4gICAgICAgICRjaGlsZC5yZW1vdmVDbGFzcygnZmEtZXllLXNsYXNoJylcbiAgICAgICAgJGNoaWxkLmFkZENsYXNzKCdmYS1leWUnKVxuICAgICAgICAkYS5hdHRyKCd0aXRsZScsICdFdmFsdWF0aW9uIHZpc2libGUuIE1hc3F1ZXIgbFxcJ8OpdmFsdWF0aW9uJylcbiAgICAgIH1cbiAgICAgIGFkZENhbGxvdXQoJ1Zpc2liaWxpdMOpIGRlIGxcXCfDqXZhbHVhdGlvbiBtb2RpZmnDqWUgIScsICdzdWNjZXNzJylcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbiAoKSB7XG4gICAgICBhZGRDYWxsb3V0KCdVbmUgZXJyZXVyIGVzdCBzdXJ2ZW51ZSAhJywgJ2RhbmdlcicpXG4gICAgfVxuICB9KVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5vcHRWZXJyb3VpbGxlcicsIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZXZhbHVhdGlvbiA9ICQodGhpcykuZGF0YSgnaWQnKVxuICBjb25zdCAkY2hpbGQgPSAkKHRoaXMpLmNoaWxkcmVuKCdpJylcbiAgY29uc3QgJGEgPSAkKHRoaXMpXG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9ldmFsdWF0aW9uX21vZGlmaWFibGUnLCB7dXVpZDogZXZhbHVhdGlvbn0pLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICgkY2hpbGQuaGFzQ2xhc3MoJ2ZhLWxvY2stb3BlbicpKSB7XG4gICAgICAgICRhLmFkZENsYXNzKCdidG4tZGFuZ2VyJylcbiAgICAgICAgJGEucmVtb3ZlQ2xhc3MoJ2J0bi13YXJuaW5nJykucmVtb3ZlQ2xhc3MoJ2J0bi1vdXRsaW5lJylcbiAgICAgICAgJGNoaWxkLnJlbW92ZUNsYXNzKCdmYS1sb2NrLW9wZW4nKVxuICAgICAgICAkY2hpbGQuYWRkQ2xhc3MoJ2ZhLWxvY2snKVxuICAgICAgICAkYS5hdHRyKCdkYXRhLW9yaWdpbmFsLXRpdGxlJywgJ01vZGlmaWNhdGlvbiBpbnRlcmRpdGUuIEF1dG9yaXNlciBsYSBtb2RpZmljYWl0b24nKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGEucmVtb3ZlQ2xhc3MoJ2J0bi1kYW5nZXInKVxuICAgICAgICAkYS5hZGRDbGFzcygnYnRuLXdhcm5pbmcnKS5hZGRDbGFzcygnYnRuLW91dGxpbmUnKVxuICAgICAgICAkY2hpbGQucmVtb3ZlQ2xhc3MoJ2ZhLWxvY2snKVxuICAgICAgICAkY2hpbGQuYWRkQ2xhc3MoJ2ZhLWxvY2stb3BlbicpXG4gICAgICAgICRhLmF0dHIoJ2RhdGEtb3JpZ2luYWwtdGl0bGUnLCAnTW9kaWZpY2F0aW9uIGF1dG9yaXPDqWUuIEludGVyZGlyZSBsYSBtb2RpZmljYXRpb24nKVxuICAgICAgfVxuICAgICAgYWRkQ2FsbG91dCgnVsOpcm91aWxsYWdlIGRlIGxcXCfDqXZhbHVhdGlvbiBtb2RpZmnDqWUgIScsICdzdWNjZXNzJylcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbiAoKSB7XG4gICAgICBhZGRDYWxsb3V0KCdVbmUgZXJyZXVyIGVzdCBzdXJ2ZW51ZSAhJywgJ2RhbmdlcicpXG4gICAgfVxuICB9KVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyN2b2lyRGV0YWlsQWJzZW50JywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICQoJyNkZXRhaWxJbmNvaGVyZW50JykuaGlkZSgpXG4gICQoJyNkZXRhaWxBYnNlbnQnKS50b2dnbGUoKVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyN2b2lyRGV0YWlsSW5jb2hlcmVudCcsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICAkKCcjZGV0YWlsSW5jb2hlcmVudCcpLnRvZ2dsZSgpXG4gICQoJyNkZXRhaWxBYnNlbnQnKS5oaWRlKClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjcmVtcGxhY2VyUGFyWmVybycsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICB1cGRhdGVOb3RlKCQodGhpcykuZGF0YSgnbm90ZScpLCAnemVybycpLnRoZW4oXG4gICAgZGF0YSA9PiB7XG4gICAgICAkKCcjbm90ZV8nICsgZGF0YSkudGV4dCgwKVxuICAgIH1cbiAgKVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNtYXJxdWVyQWJzZW50JywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIHVwZGF0ZU5vdGUoJCh0aGlzKS5kYXRhKCdub3RlJyksICdhYnNlbnQnKS50aGVuKFxuICAgIGRhdGEgPT4ge1xuICAgICAgJCgnI25vdGVfJyArIGRhdGEpLnRleHQoJ0Fic2VuY2UganVzdGlmacOpZScpXG4gICAgfVxuICApXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI3N1cHByQWJzZW50JywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIHVwZGF0ZU5vdGUoJCh0aGlzKS5kYXRhKCdub3RlJyksICdzdXBwci1hYnNlbmNlJylcbn0pXG5cbmZ1bmN0aW9uIHVwZGF0ZU5vdGUgKGlkLCBhY3Rpb24pIHtcbiAgcmV0dXJuICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9ub3RlX2NvcnJpZ2VfYWpheCcsIHtub3RlOiBpZCwgYWN0aW9uOiBhY3Rpb259KSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9XG4gIH0pXG59XG4iXSwic291cmNlUm9vdCI6IiJ9