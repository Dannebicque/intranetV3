(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adm.etudiant_groupe"],{

/***/ "./assets/js/pages/adm.etudiant_groupe.js":
/*!************************************************!*\
  !*** ./assets/js/pages/adm.etudiant_groupe.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.etudiant_groupe.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 24/08/2020 14:47
$(document).on('click', '.admChangeTypeGroupe', function () {
  $('.admChangeTypeGroupe').removeClass('btn-primary');
  $(this).addClass('btn-primary');
  $('#listeEtudiantsGroupes').empty().load(Routing.generate('administration_etudiant_groupe_affecte', {
    typeGroupe: $(this).data('typegroupe')
  }));
});
$(document).on('click', '.changegroupe', function () {
  if ($(this).is(':checked')) {
    var newgroupe = $(this).val();
    var oldgroupe = '#' + $(this).attr('name') + '_old';
    $.ajax({
      url: Routing.generate('administration_etudiant_groupe_change'),
      type: 'POST',
      data: {
        id: $(this).attr('name') + '-' + $(this).val(),
        typegroupe: $('#autocom').val(),
        oldgroupe: $(oldgroupe).val()
      },
      success: function success(data) {
        $(oldgroupe).val(newgroupe);
      }
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},[["./assets/js/pages/adm.etudiant_groupe.js","runtime","vendors~absences~adm.absences~adm.alternances~adm.articles~adm.bornes~adm.configuration~adm.edt~adm.~d677a9f6"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvYWRtLmV0dWRpYW50X2dyb3VwZS5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJvbiIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJlbXB0eSIsImxvYWQiLCJSb3V0aW5nIiwiZ2VuZXJhdGUiLCJ0eXBlR3JvdXBlIiwiZGF0YSIsImlzIiwibmV3Z3JvdXBlIiwidmFsIiwib2xkZ3JvdXBlIiwiYXR0ciIsImFqYXgiLCJ1cmwiLCJ0eXBlIiwiaWQiLCJ0eXBlZ3JvdXBlIiwic3VjY2VzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxFQUFaLENBQWUsT0FBZixFQUF3QixzQkFBeEIsRUFBZ0QsWUFBWTtBQUMxREYsR0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEJHLFdBQTFCLENBQXNDLGFBQXRDO0FBQ0FILEdBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUksUUFBUixDQUFpQixhQUFqQjtBQUNBSixHQUFDLENBQUMsd0JBQUQsQ0FBRCxDQUE0QkssS0FBNUIsR0FBb0NDLElBQXBDLENBQXlDQyxPQUFPLENBQUNDLFFBQVIsQ0FBaUIsd0NBQWpCLEVBQTJEO0FBQUNDLGNBQVUsRUFBRVQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRVSxJQUFSLENBQWEsWUFBYjtBQUFiLEdBQTNELENBQXpDO0FBQ0QsQ0FKRDtBQU1BVixDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxFQUFaLENBQWUsT0FBZixFQUF3QixlQUF4QixFQUF5QyxZQUFZO0FBQ25ELE1BQUlGLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVcsRUFBUixDQUFXLFVBQVgsQ0FBSixFQUE0QjtBQUMxQixRQUFNQyxTQUFTLEdBQUdaLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWEsR0FBUixFQUFsQjtBQUNBLFFBQU1DLFNBQVMsR0FBRyxNQUFNZCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFlLElBQVIsQ0FBYSxNQUFiLENBQU4sR0FBNkIsTUFBL0M7QUFFQWYsS0FBQyxDQUFDZ0IsSUFBRixDQUNFO0FBQ0VDLFNBQUcsRUFBRVYsT0FBTyxDQUFDQyxRQUFSLENBQWlCLHVDQUFqQixDQURQO0FBRUVVLFVBQUksRUFBRSxNQUZSO0FBR0VSLFVBQUksRUFBRTtBQUNKUyxVQUFFLEVBQUVuQixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFlLElBQVIsQ0FBYSxNQUFiLElBQXVCLEdBQXZCLEdBQTZCZixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFhLEdBQVIsRUFEN0I7QUFFSk8sa0JBQVUsRUFBRXBCLENBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY2EsR0FBZCxFQUZSO0FBR0pDLGlCQUFTLEVBQUVkLENBQUMsQ0FBQ2MsU0FBRCxDQUFELENBQWFELEdBQWI7QUFIUCxPQUhSO0FBUUVRLGFBQU8sRUFBRSxpQkFBVVgsSUFBVixFQUFnQjtBQUN2QlYsU0FBQyxDQUFDYyxTQUFELENBQUQsQ0FBYUQsR0FBYixDQUFpQkQsU0FBakI7QUFDRDtBQVZILEtBREY7QUFhRDtBQUNGLENBbkJELEUiLCJmaWxlIjoiYWRtLmV0dWRpYW50X2dyb3VwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9wYWdlcy9hZG0uZXR1ZGlhbnRfZ3JvdXBlLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMjQvMDgvMjAyMCAxNDo0N1xuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmFkbUNoYW5nZVR5cGVHcm91cGUnLCBmdW5jdGlvbiAoKSB7XG4gICQoJy5hZG1DaGFuZ2VUeXBlR3JvdXBlJykucmVtb3ZlQ2xhc3MoJ2J0bi1wcmltYXJ5JylcbiAgJCh0aGlzKS5hZGRDbGFzcygnYnRuLXByaW1hcnknKVxuICAkKCcjbGlzdGVFdHVkaWFudHNHcm91cGVzJykuZW1wdHkoKS5sb2FkKFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX2V0dWRpYW50X2dyb3VwZV9hZmZlY3RlJywge3R5cGVHcm91cGU6ICQodGhpcykuZGF0YSgndHlwZWdyb3VwZScpfSkpXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNoYW5nZWdyb3VwZScsIGZ1bmN0aW9uICgpIHtcbiAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICBjb25zdCBuZXdncm91cGUgPSAkKHRoaXMpLnZhbCgpXG4gICAgY29uc3Qgb2xkZ3JvdXBlID0gJyMnICsgJCh0aGlzKS5hdHRyKCduYW1lJykgKyAnX29sZCdcblxuICAgICQuYWpheChcbiAgICAgIHtcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9ldHVkaWFudF9ncm91cGVfY2hhbmdlJyksXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGlkOiAkKHRoaXMpLmF0dHIoJ25hbWUnKSArICctJyArICQodGhpcykudmFsKCksXG4gICAgICAgICAgdHlwZWdyb3VwZTogJCgnI2F1dG9jb20nKS52YWwoKSxcbiAgICAgICAgICBvbGRncm91cGU6ICQob2xkZ3JvdXBlKS52YWwoKVxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICQob2xkZ3JvdXBlKS52YWwobmV3Z3JvdXBlKVxuICAgICAgICB9XG4gICAgICB9KVxuICB9XG59KVxuIl0sInNvdXJjZVJvb3QiOiIifQ==