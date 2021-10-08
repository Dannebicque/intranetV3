(self["webpackChunkintranetv3"] = self["webpackChunkintranetv3"] || []).push([["documents"],{

/***/ "./assets/js/pages/documents.js":
/*!**************************************!*\
  !*** ./assets/js/pages/documents.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/documents.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 30/07/2020 13:04
$(document).on('click', '.afficheDocuments', function () {
  var $type = $(this).data('type');

  if ($type === 'favori') {
    $('#zone_document').empty().load(Routing.generate('document_ajax_favori'));
  } else {
    $('#zone_document').empty().load(Routing.generate('document_ajax', {
      typedocument: $type
    }));
  }

  $('#boutonBack').show();
});
$(document).on('click', '#boutonBack', function () {
  $('#zone_document').empty().load(Routing.generate('typedocument_ajax'));
  $('#boutonBack').hide();
});
$(document).on('click', '.addFavori', function () {
  $.ajax({
    url: Routing.generate('document_add_favori', {
      document: $(this).data('document')
    }),
    method: 'post',
    success: function success(data) {
      if (data === 'add') {
        addCallout('Document ajouté à vos favoris', 'success');
      } else {
        addCallout('Document retiré de vos favoris', 'success');
      }
    },
    error: function error() {
      addCallout('Erreur lors de la gestion de vos documents favoris', 'danger');
    }
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js"], () => (__webpack_exec__("./assets/js/pages/documents.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vYXNzZXRzL2pzL3BhZ2VzL2RvY3VtZW50cy5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJvbiIsIiR0eXBlIiwiZGF0YSIsImVtcHR5IiwibG9hZCIsIlJvdXRpbmciLCJnZW5lcmF0ZSIsInR5cGVkb2N1bWVudCIsInNob3ciLCJoaWRlIiwiYWpheCIsInVybCIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJhZGRDYWxsb3V0IiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsRUFBWixDQUFlLE9BQWYsRUFBd0IsbUJBQXhCLEVBQTZDLFlBQVc7QUFDdEQsTUFBSUMsS0FBSyxHQUFHSCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFJLElBQVIsQ0FBYSxNQUFiLENBQVo7O0FBQ0EsTUFBSUQsS0FBSyxLQUFLLFFBQWQsRUFBd0I7QUFDdEJILEtBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CSyxLQUFwQixHQUE0QkMsSUFBNUIsQ0FBaUNDLE9BQU8sQ0FBQ0MsUUFBUixDQUFpQixzQkFBakIsQ0FBakM7QUFDRCxHQUZELE1BRU87QUFDTFIsS0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JLLEtBQXBCLEdBQTRCQyxJQUE1QixDQUFpQ0MsT0FBTyxDQUFDQyxRQUFSLENBQWlCLGVBQWpCLEVBQWtDO0FBQUNDLGtCQUFZLEVBQUVOO0FBQWYsS0FBbEMsQ0FBakM7QUFDRDs7QUFDREgsR0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQlUsSUFBakI7QUFDRCxDQVJEO0FBVUFWLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEVBQVosQ0FBZSxPQUFmLEVBQXdCLGFBQXhCLEVBQXVDLFlBQVk7QUFDakRGLEdBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CSyxLQUFwQixHQUE0QkMsSUFBNUIsQ0FBaUNDLE9BQU8sQ0FBQ0MsUUFBUixDQUFpQixtQkFBakIsQ0FBakM7QUFDQVIsR0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQlcsSUFBakI7QUFDRCxDQUhEO0FBS0FYLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEVBQVosQ0FBZSxPQUFmLEVBQXdCLFlBQXhCLEVBQXNDLFlBQVk7QUFDaERGLEdBQUMsQ0FBQ1ksSUFBRixDQUFPO0FBQ0xDLE9BQUcsRUFBRU4sT0FBTyxDQUFDQyxRQUFSLENBQWlCLHFCQUFqQixFQUF3QztBQUFDUCxjQUFRLEVBQUVELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUksSUFBUixDQUFhLFVBQWI7QUFBWCxLQUF4QyxDQURBO0FBRUxVLFVBQU0sRUFBRSxNQUZIO0FBR0xDLFdBQU8sRUFBRSxpQkFBVVgsSUFBVixFQUFnQjtBQUN2QixVQUFJQSxJQUFJLEtBQUssS0FBYixFQUFvQjtBQUNsQlksa0JBQVUsQ0FBQywrQkFBRCxFQUFrQyxTQUFsQyxDQUFWO0FBQ0QsT0FGRCxNQUVPO0FBQ0xBLGtCQUFVLENBQUMsZ0NBQUQsRUFBbUMsU0FBbkMsQ0FBVjtBQUNEO0FBQ0YsS0FUSTtBQVVMQyxTQUFLLEVBQUUsaUJBQVk7QUFDakJELGdCQUFVLENBQUMsb0RBQUQsRUFBdUQsUUFBdkQsQ0FBVjtBQUNEO0FBWkksR0FBUDtBQWNELENBZkQsRSIsImZpbGUiOiJkb2N1bWVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvcGFnZXMvZG9jdW1lbnRzLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMzAvMDcvMjAyMCAxMzowNFxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmFmZmljaGVEb2N1bWVudHMnLCBmdW5jdGlvbigpIHtcbiAgbGV0ICR0eXBlID0gJCh0aGlzKS5kYXRhKCd0eXBlJylcbiAgaWYgKCR0eXBlID09PSAnZmF2b3JpJykge1xuICAgICQoJyN6b25lX2RvY3VtZW50JykuZW1wdHkoKS5sb2FkKFJvdXRpbmcuZ2VuZXJhdGUoJ2RvY3VtZW50X2FqYXhfZmF2b3JpJykpXG4gIH0gZWxzZSB7XG4gICAgJCgnI3pvbmVfZG9jdW1lbnQnKS5lbXB0eSgpLmxvYWQoUm91dGluZy5nZW5lcmF0ZSgnZG9jdW1lbnRfYWpheCcsIHt0eXBlZG9jdW1lbnQ6ICR0eXBlfSkpXG4gIH1cbiAgJCgnI2JvdXRvbkJhY2snKS5zaG93KClcbn0pO1xuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2JvdXRvbkJhY2snLCBmdW5jdGlvbiAoKSB7XG4gICQoJyN6b25lX2RvY3VtZW50JykuZW1wdHkoKS5sb2FkKFJvdXRpbmcuZ2VuZXJhdGUoJ3R5cGVkb2N1bWVudF9hamF4JykpXG4gICQoJyNib3V0b25CYWNrJykuaGlkZSgpXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmFkZEZhdm9yaScsIGZ1bmN0aW9uICgpIHtcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2RvY3VtZW50X2FkZF9mYXZvcmknLCB7ZG9jdW1lbnQ6ICQodGhpcykuZGF0YSgnZG9jdW1lbnQnKX0pLFxuICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBpZiAoZGF0YSA9PT0gJ2FkZCcpIHtcbiAgICAgICAgYWRkQ2FsbG91dCgnRG9jdW1lbnQgYWpvdXTDqSDDoCB2b3MgZmF2b3JpcycsICdzdWNjZXNzJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZENhbGxvdXQoJ0RvY3VtZW50IHJldGlyw6kgZGUgdm9zIGZhdm9yaXMnLCAnc3VjY2VzcycpXG4gICAgICB9XG4gICAgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24gKCkge1xuICAgICAgYWRkQ2FsbG91dCgnRXJyZXVyIGxvcnMgZGUgbGEgZ2VzdGlvbiBkZSB2b3MgZG9jdW1lbnRzIGZhdm9yaXMnLCAnZGFuZ2VyJylcbiAgICB9XG4gIH0pXG59KVxuIl0sInNvdXJjZVJvb3QiOiIifQ==