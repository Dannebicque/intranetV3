(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["documents"],{

/***/ "./assets/js/pages/documents.js":
/*!**************************************!*\
  !*** ./assets/js/pages/documents.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},[["./assets/js/pages/documents.js","runtime","vendors~absences~adm.absences~adm.alternances~adm.articles~adm.bornes~adm.configuration~adm.edt~adm.~d677a9f6"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvZG9jdW1lbnRzLmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsIm9uIiwiJHR5cGUiLCJkYXRhIiwiZW1wdHkiLCJsb2FkIiwiUm91dGluZyIsImdlbmVyYXRlIiwidHlwZWRvY3VtZW50Iiwic2hvdyIsImhpZGUiLCJhamF4IiwidXJsIiwibWV0aG9kIiwic3VjY2VzcyIsImFkZENhbGxvdXQiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxFQUFaLENBQWUsT0FBZixFQUF3QixtQkFBeEIsRUFBNkMsWUFBVztBQUN0RCxNQUFJQyxLQUFLLEdBQUdILENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUksSUFBUixDQUFhLE1BQWIsQ0FBWjs7QUFDQSxNQUFJRCxLQUFLLEtBQUssUUFBZCxFQUF3QjtBQUN0QkgsS0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JLLEtBQXBCLEdBQTRCQyxJQUE1QixDQUFpQ0MsT0FBTyxDQUFDQyxRQUFSLENBQWlCLHNCQUFqQixDQUFqQztBQUNELEdBRkQsTUFFTztBQUNMUixLQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQkssS0FBcEIsR0FBNEJDLElBQTVCLENBQWlDQyxPQUFPLENBQUNDLFFBQVIsQ0FBaUIsZUFBakIsRUFBa0M7QUFBQ0Msa0JBQVksRUFBRU47QUFBZixLQUFsQyxDQUFqQztBQUNEOztBQUNESCxHQUFDLENBQUMsYUFBRCxDQUFELENBQWlCVSxJQUFqQjtBQUNELENBUkQ7QUFVQVYsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsRUFBWixDQUFlLE9BQWYsRUFBd0IsYUFBeEIsRUFBdUMsWUFBWTtBQUNqREYsR0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JLLEtBQXBCLEdBQTRCQyxJQUE1QixDQUFpQ0MsT0FBTyxDQUFDQyxRQUFSLENBQWlCLG1CQUFqQixDQUFqQztBQUNBUixHQUFDLENBQUMsYUFBRCxDQUFELENBQWlCVyxJQUFqQjtBQUNELENBSEQ7QUFLQVgsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsRUFBWixDQUFlLE9BQWYsRUFBd0IsWUFBeEIsRUFBc0MsWUFBWTtBQUNoREYsR0FBQyxDQUFDWSxJQUFGLENBQU87QUFDTEMsT0FBRyxFQUFFTixPQUFPLENBQUNDLFFBQVIsQ0FBaUIscUJBQWpCLEVBQXdDO0FBQUNQLGNBQVEsRUFBRUQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSSxJQUFSLENBQWEsVUFBYjtBQUFYLEtBQXhDLENBREE7QUFFTFUsVUFBTSxFQUFFLE1BRkg7QUFHTEMsV0FBTyxFQUFFLGlCQUFVWCxJQUFWLEVBQWdCO0FBQ3ZCLFVBQUlBLElBQUksS0FBSyxLQUFiLEVBQW9CO0FBQ2xCWSxrQkFBVSxDQUFDLCtCQUFELEVBQWtDLFNBQWxDLENBQVY7QUFDRCxPQUZELE1BRU87QUFDTEEsa0JBQVUsQ0FBQyxnQ0FBRCxFQUFtQyxTQUFuQyxDQUFWO0FBQ0Q7QUFDRixLQVRJO0FBVUxDLFNBQUssRUFBRSxpQkFBWTtBQUNqQkQsZ0JBQVUsQ0FBQyxvREFBRCxFQUF1RCxRQUF2RCxDQUFWO0FBQ0Q7QUFaSSxHQUFQO0FBY0QsQ0FmRCxFIiwiZmlsZSI6ImRvY3VtZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9wYWdlcy9kb2N1bWVudHMuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAzMC8wNy8yMDIwIDEzOjA0XG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuYWZmaWNoZURvY3VtZW50cycsIGZ1bmN0aW9uKCkge1xuICBsZXQgJHR5cGUgPSAkKHRoaXMpLmRhdGEoJ3R5cGUnKVxuICBpZiAoJHR5cGUgPT09ICdmYXZvcmknKSB7XG4gICAgJCgnI3pvbmVfZG9jdW1lbnQnKS5lbXB0eSgpLmxvYWQoUm91dGluZy5nZW5lcmF0ZSgnZG9jdW1lbnRfYWpheF9mYXZvcmknKSlcbiAgfSBlbHNlIHtcbiAgICAkKCcjem9uZV9kb2N1bWVudCcpLmVtcHR5KCkubG9hZChSb3V0aW5nLmdlbmVyYXRlKCdkb2N1bWVudF9hamF4Jywge3R5cGVkb2N1bWVudDogJHR5cGV9KSlcbiAgfVxuICAkKCcjYm91dG9uQmFjaycpLnNob3coKVxufSk7XG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjYm91dG9uQmFjaycsIGZ1bmN0aW9uICgpIHtcbiAgJCgnI3pvbmVfZG9jdW1lbnQnKS5lbXB0eSgpLmxvYWQoUm91dGluZy5nZW5lcmF0ZSgndHlwZWRvY3VtZW50X2FqYXgnKSlcbiAgJCgnI2JvdXRvbkJhY2snKS5oaWRlKClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuYWRkRmF2b3JpJywgZnVuY3Rpb24gKCkge1xuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnZG9jdW1lbnRfYWRkX2Zhdm9yaScsIHtkb2N1bWVudDogJCh0aGlzKS5kYXRhKCdkb2N1bWVudCcpfSksXG4gICAgbWV0aG9kOiAncG9zdCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIGlmIChkYXRhID09PSAnYWRkJykge1xuICAgICAgICBhZGRDYWxsb3V0KCdEb2N1bWVudCBham91dMOpIMOgIHZvcyBmYXZvcmlzJywgJ3N1Y2Nlc3MnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWRkQ2FsbG91dCgnRG9jdW1lbnQgcmV0aXLDqSBkZSB2b3MgZmF2b3JpcycsICdzdWNjZXNzJylcbiAgICAgIH1cbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbiAoKSB7XG4gICAgICBhZGRDYWxsb3V0KCdFcnJldXIgbG9ycyBkZSBsYSBnZXN0aW9uIGRlIHZvcyBkb2N1bWVudHMgZmF2b3JpcycsICdkYW5nZXInKVxuICAgIH1cbiAgfSlcbn0pXG4iXSwic291cmNlUm9vdCI6IiJ9