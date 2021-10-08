(self["webpackChunkintranetv3"] = self["webpackChunkintranetv3"] || []).push([["adm.etudiants"],{

/***/ "./assets/js/pages/adm.etudiants.js":
/*!******************************************!*\
  !*** ./assets/js/pages/adm.etudiants.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.etudiants.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 12/09/2021 18:06
$(document).on('change', '.changeEtat', function () {
  $.ajax({
    url: Routing.generate('adm_etudiant_change_etat', {
      uuid: $(this).data('etudiant'),
      etat: $(this).val()
    }),
    method: 'POST',
    success: function success() {}
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js"], () => (__webpack_exec__("./assets/js/pages/adm.etudiants.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vYXNzZXRzL2pzL3BhZ2VzL2FkbS5ldHVkaWFudHMuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50Iiwib24iLCJhamF4IiwidXJsIiwiUm91dGluZyIsImdlbmVyYXRlIiwidXVpZCIsImRhdGEiLCJldGF0IiwidmFsIiwibWV0aG9kIiwic3VjY2VzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBQSxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxFQUFaLENBQWUsUUFBZixFQUF5QixhQUF6QixFQUF3QyxZQUFZO0FBQ2xERixHQUFDLENBQUNHLElBQUYsQ0FBTztBQUNMQyxPQUFHLEVBQUVDLE9BQU8sQ0FBQ0MsUUFBUixDQUFpQiwwQkFBakIsRUFBNkM7QUFBQ0MsVUFBSSxFQUFFUCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFRLElBQVIsQ0FBYSxVQUFiLENBQVA7QUFBaUNDLFVBQUksRUFBRVQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRVSxHQUFSO0FBQXZDLEtBQTdDLENBREE7QUFFTEMsVUFBTSxFQUFFLE1BRkg7QUFHTEMsV0FBTyxFQUFFLG1CQUFZLENBRXBCO0FBTEksR0FBUDtBQU9ELENBUkQsRSIsImZpbGUiOiJhZG0uZXR1ZGlhbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3BhZ2VzL2FkbS5ldHVkaWFudHMuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAxMi8wOS8yMDIxIDE4OjA2XG5cblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcuY2hhbmdlRXRhdCcsIGZ1bmN0aW9uICgpIHtcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbV9ldHVkaWFudF9jaGFuZ2VfZXRhdCcsIHt1dWlkOiAkKHRoaXMpLmRhdGEoJ2V0dWRpYW50JyksIGV0YXQ6ICQodGhpcykudmFsKCl9KSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG5cbiAgICB9XG4gIH0pXG59KVxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=