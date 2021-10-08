(self["webpackChunkintranetv3"] = self["webpackChunkintranetv3"] || []).push([["adm.etudiant_groupe"],{

/***/ "./assets/js/pages/adm.etudiant_groupe.js":
/*!************************************************!*\
  !*** ./assets/js/pages/adm.etudiant_groupe.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js"], () => (__webpack_exec__("./assets/js/pages/adm.etudiant_groupe.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vYXNzZXRzL2pzL3BhZ2VzL2FkbS5ldHVkaWFudF9ncm91cGUuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50Iiwib24iLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiZW1wdHkiLCJsb2FkIiwiUm91dGluZyIsImdlbmVyYXRlIiwidHlwZUdyb3VwZSIsImRhdGEiLCJpcyIsIm5ld2dyb3VwZSIsInZhbCIsIm9sZGdyb3VwZSIsImF0dHIiLCJhamF4IiwidXJsIiwidHlwZSIsImlkIiwidHlwZWdyb3VwZSIsInN1Y2Nlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsRUFBWixDQUFlLE9BQWYsRUFBd0Isc0JBQXhCLEVBQWdELFlBQVk7QUFDMURGLEdBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCRyxXQUExQixDQUFzQyxhQUF0QztBQUNBSCxHQUFDLENBQUMsSUFBRCxDQUFELENBQVFJLFFBQVIsQ0FBaUIsYUFBakI7QUFDQUosR0FBQyxDQUFDLHdCQUFELENBQUQsQ0FBNEJLLEtBQTVCLEdBQW9DQyxJQUFwQyxDQUF5Q0MsT0FBTyxDQUFDQyxRQUFSLENBQWlCLHdDQUFqQixFQUEyRDtBQUFDQyxjQUFVLEVBQUVULENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVUsSUFBUixDQUFhLFlBQWI7QUFBYixHQUEzRCxDQUF6QztBQUNELENBSkQ7QUFNQVYsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsRUFBWixDQUFlLE9BQWYsRUFBd0IsZUFBeEIsRUFBeUMsWUFBWTtBQUNuRCxNQUFJRixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFXLEVBQVIsQ0FBVyxVQUFYLENBQUosRUFBNEI7QUFDMUIsUUFBTUMsU0FBUyxHQUFHWixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFhLEdBQVIsRUFBbEI7QUFDQSxRQUFNQyxTQUFTLEdBQUcsTUFBTWQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRZSxJQUFSLENBQWEsTUFBYixDQUFOLEdBQTZCLE1BQS9DO0FBRUFmLEtBQUMsQ0FBQ2dCLElBQUYsQ0FDRTtBQUNFQyxTQUFHLEVBQUVWLE9BQU8sQ0FBQ0MsUUFBUixDQUFpQix1Q0FBakIsQ0FEUDtBQUVFVSxVQUFJLEVBQUUsTUFGUjtBQUdFUixVQUFJLEVBQUU7QUFDSlMsVUFBRSxFQUFFbkIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRZSxJQUFSLENBQWEsTUFBYixJQUF1QixHQUF2QixHQUE2QmYsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRYSxHQUFSLEVBRDdCO0FBRUpPLGtCQUFVLEVBQUVwQixDQUFDLENBQUMsVUFBRCxDQUFELENBQWNhLEdBQWQsRUFGUjtBQUdKQyxpQkFBUyxFQUFFZCxDQUFDLENBQUNjLFNBQUQsQ0FBRCxDQUFhRCxHQUFiO0FBSFAsT0FIUjtBQVFFUSxhQUFPLEVBQUUsaUJBQVVYLElBQVYsRUFBZ0I7QUFDdkJWLFNBQUMsQ0FBQ2MsU0FBRCxDQUFELENBQWFELEdBQWIsQ0FBaUJELFNBQWpCO0FBQ0Q7QUFWSCxLQURGO0FBYUQ7QUFDRixDQW5CRCxFIiwiZmlsZSI6ImFkbS5ldHVkaWFudF9ncm91cGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvcGFnZXMvYWRtLmV0dWRpYW50X2dyb3VwZS5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDI0LzA4LzIwMjAgMTQ6NDdcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5hZG1DaGFuZ2VUeXBlR3JvdXBlJywgZnVuY3Rpb24gKCkge1xuICAkKCcuYWRtQ2hhbmdlVHlwZUdyb3VwZScpLnJlbW92ZUNsYXNzKCdidG4tcHJpbWFyeScpXG4gICQodGhpcykuYWRkQ2xhc3MoJ2J0bi1wcmltYXJ5JylcbiAgJCgnI2xpc3RlRXR1ZGlhbnRzR3JvdXBlcycpLmVtcHR5KCkubG9hZChSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9ldHVkaWFudF9ncm91cGVfYWZmZWN0ZScsIHt0eXBlR3JvdXBlOiAkKHRoaXMpLmRhdGEoJ3R5cGVncm91cGUnKX0pKVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5jaGFuZ2Vncm91cGUnLCBmdW5jdGlvbiAoKSB7XG4gIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgY29uc3QgbmV3Z3JvdXBlID0gJCh0aGlzKS52YWwoKVxuICAgIGNvbnN0IG9sZGdyb3VwZSA9ICcjJyArICQodGhpcykuYXR0cignbmFtZScpICsgJ19vbGQnXG5cbiAgICAkLmFqYXgoXG4gICAgICB7XG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fZXR1ZGlhbnRfZ3JvdXBlX2NoYW5nZScpLFxuICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBpZDogJCh0aGlzKS5hdHRyKCduYW1lJykgKyAnLScgKyAkKHRoaXMpLnZhbCgpLFxuICAgICAgICAgIHR5cGVncm91cGU6ICQoJyNhdXRvY29tJykudmFsKCksXG4gICAgICAgICAgb2xkZ3JvdXBlOiAkKG9sZGdyb3VwZSkudmFsKClcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAkKG9sZGdyb3VwZSkudmFsKG5ld2dyb3VwZSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxufSlcbiJdLCJzb3VyY2VSb290IjoiIn0=