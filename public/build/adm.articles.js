(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adm.articles"],{

/***/ "./assets/js/pages/adm.articles.js":
/*!*****************************************!*\
  !*** ./assets/js/pages/adm.articles.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($, jQuery) {// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.articles.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 09/02/2020 18:05
$(document).on('click', '#addCategorie', function () {
  if ($('#listeCategories').hasDataAttr('data-checkbox')) {
    var table = $('#listeCategories').DataTable();
    table.clear(); //effacer le datatable

    table.destroy(); //supprimer le datatable
  }

  $.ajax({
    url: Routing.generate('administration_article_categorie_add'),
    //dataType: 'json',
    data: {
      libelle: $('#libelle').val()
    },
    method: 'POST',
    success: function success(data) {
      var table = $('#listeCategories').empty();
      table.append('<thead>\n' + '<tr>\n' + '<th>Libellé</th>\n' + '<th>Nb Article</th>\n' + '<th>Actions</th>\n' + '</tr>\n' + '</thead>' + '<tbody>');
      jQuery.each(data, function (index, categorie) {
        var html = '<tr>\n' + '                        <td>' + categorie.libelle + '</td>\n' + '                        <td>' + categorie.nbArticles + '</td>\n' + '                        <td><a href="\n' + '                               data-csrf=""\n' + '                               class="btn btn-danger btn-outline btn-square supprimer"\n' + '                               data-provide="tooltip"\n' + '                               data-placement="bottom"\n' + '                               title="Supprimer la catégorie">\n' + '                                <i class="' + iconDelete + '"></i>\n' + '                                <span class="sr-only">Supprimer la catégorie</span>\n' + '                            </a></td>\n' + '                    </tr>';
        table.append(html);
      });
      table.append('</tbody>');
      table.append('<tfoot>\n' + '                <tr>\n' + '                    <td><label for="libelle" class="sr-only">Libelle</label>\n' + '                        <input type="text" placeholder="Libellé de la catégorie" id="libelle" class="form-control"></td>\n' + '                    <td>&nbsp;</td>\n' + '                    <td>\n' + '                        <button class="btn btn-success btn-block" id="addCategorie">Ajouter catégorie</button>\n' + '                    </td>\n' + '                </tr>\n' + '                </tfoot>');
      table.dataTable({
        'language': langueFr
      });
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},[["./assets/js/pages/adm.articles.js","runtime","vendors~absences~adm.absences~adm.alternances~adm.articles~adm.bornes~adm.configuration~adm.edt~adm.~08e24351"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvYWRtLmFydGljbGVzLmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsIm9uIiwiaGFzRGF0YUF0dHIiLCJ0YWJsZSIsIkRhdGFUYWJsZSIsImNsZWFyIiwiZGVzdHJveSIsImFqYXgiLCJ1cmwiLCJSb3V0aW5nIiwiZ2VuZXJhdGUiLCJkYXRhIiwibGliZWxsZSIsInZhbCIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJlbXB0eSIsImFwcGVuZCIsImpRdWVyeSIsImVhY2giLCJpbmRleCIsImNhdGVnb3JpZSIsImh0bWwiLCJuYkFydGljbGVzIiwiaWNvbkRlbGV0ZSIsImRhdGFUYWJsZSIsImxhbmd1ZUZyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEVBQVosQ0FBZSxPQUFmLEVBQXdCLGVBQXhCLEVBQXlDLFlBQVk7QUFDbkQsTUFBSUYsQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JHLFdBQXRCLENBQWtDLGVBQWxDLENBQUosRUFBd0Q7QUFDdEQsUUFBTUMsS0FBSyxHQUFHSixDQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQkssU0FBdEIsRUFBZDtBQUNBRCxTQUFLLENBQUNFLEtBQU4sR0FGc0QsQ0FFeEM7O0FBQ2RGLFNBQUssQ0FBQ0csT0FBTixHQUhzRCxDQUd0QztBQUNqQjs7QUFHRFAsR0FBQyxDQUFDUSxJQUFGLENBQU87QUFDTEMsT0FBRyxFQUFFQyxPQUFPLENBQUNDLFFBQVIsQ0FBaUIsc0NBQWpCLENBREE7QUFFTDtBQUNBQyxRQUFJLEVBQUU7QUFDSkMsYUFBTyxFQUFFYixDQUFDLENBQUMsVUFBRCxDQUFELENBQWNjLEdBQWQ7QUFETCxLQUhEO0FBTUxDLFVBQU0sRUFBRSxNQU5IO0FBT0xDLFdBQU8sRUFBRSxpQkFBVUosSUFBVixFQUFnQjtBQUN2QixVQUFNUixLQUFLLEdBQUdKLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCaUIsS0FBdEIsRUFBZDtBQUNBYixXQUFLLENBQUNjLE1BQU4sQ0FBYSxjQUNaLFFBRFksR0FFWCxvQkFGVyxHQUdiLHVCQUhhLEdBSWIsb0JBSmEsR0FLYixTQUxhLEdBTWIsVUFOYSxHQU9YLFNBUEY7QUFTQUMsWUFBTSxDQUFDQyxJQUFQLENBQVlSLElBQVosRUFBa0IsVUFBVVMsS0FBVixFQUFpQkMsU0FBakIsRUFBNEI7QUFDNUMsWUFBTUMsSUFBSSxHQUFHLFdBQ1gsOEJBRFcsR0FDc0JELFNBQVMsQ0FBQ1QsT0FEaEMsR0FDMEMsU0FEMUMsR0FFWCw4QkFGVyxHQUVzQlMsU0FBUyxDQUFDRSxVQUZoQyxHQUU2QyxTQUY3QyxHQUdYLHlDQUhXLEdBSVgsK0NBSlcsR0FLWCwwRkFMVyxHQU1YLHlEQU5XLEdBT1gsMERBUFcsR0FRWCxrRUFSVyxHQVNYLDRDQVRXLEdBU29DQyxVQVRwQyxHQVNpRCxVQVRqRCxHQVVYLHVGQVZXLEdBV1gseUNBWFcsR0FZWCwyQkFaRjtBQWFBckIsYUFBSyxDQUFDYyxNQUFOLENBQWFLLElBQWI7QUFDRCxPQWZEO0FBZ0JBbkIsV0FBSyxDQUFDYyxNQUFOLENBQWEsVUFBYjtBQUNBZCxXQUFLLENBQUNjLE1BQU4sQ0FBYSxjQUNYLHdCQURXLEdBRVgsZ0ZBRlcsR0FHWCw0SEFIVyxHQUlYLHVDQUpXLEdBS1gsNEJBTFcsR0FNWCxrSEFOVyxHQU9YLDZCQVBXLEdBUVgseUJBUlcsR0FTWCwwQkFURjtBQVVBZCxXQUFLLENBQUNzQixTQUFOLENBQWdCO0FBQ2Qsb0JBQVlDO0FBREUsT0FBaEI7QUFHRDtBQWhESSxHQUFQO0FBa0RELENBMURELEUiLCJmaWxlIjoiYWRtLmFydGljbGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9wYWdlcy9hZG0uYXJ0aWNsZXMuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAwOS8wMi8yMDIwIDE4OjA1XG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjYWRkQ2F0ZWdvcmllJywgZnVuY3Rpb24gKCkge1xuICBpZiAoJCgnI2xpc3RlQ2F0ZWdvcmllcycpLmhhc0RhdGFBdHRyKCdkYXRhLWNoZWNrYm94JykpIHtcbiAgICBjb25zdCB0YWJsZSA9ICQoJyNsaXN0ZUNhdGVnb3JpZXMnKS5EYXRhVGFibGUoKVxuICAgIHRhYmxlLmNsZWFyKCkgLy9lZmZhY2VyIGxlIGRhdGF0YWJsZVxuICAgIHRhYmxlLmRlc3Ryb3koKSAvL3N1cHByaW1lciBsZSBkYXRhdGFibGVcbiAgfVxuXG5cbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX2FydGljbGVfY2F0ZWdvcmllX2FkZCcpLFxuICAgIC8vZGF0YVR5cGU6ICdqc29uJyxcbiAgICBkYXRhOiB7XG4gICAgICBsaWJlbGxlOiAkKCcjbGliZWxsZScpLnZhbCgpXG4gICAgfSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgY29uc3QgdGFibGUgPSAkKCcjbGlzdGVDYXRlZ29yaWVzJykuZW1wdHkoKVxuICAgICAgdGFibGUuYXBwZW5kKCc8dGhlYWQ+XFxuJyArXG4gICAgICAgJzx0cj5cXG4nICtcbiAgICAgICAgJzx0aD5MaWJlbGzDqTwvdGg+XFxuJyArXG4gICAgICAnPHRoPk5iIEFydGljbGU8L3RoPlxcbicgK1xuICAgICAgJzx0aD5BY3Rpb25zPC90aD5cXG4nICtcbiAgICAgICc8L3RyPlxcbicgK1xuICAgICAgJzwvdGhlYWQ+JyArXG4gICAgICAgICc8dGJvZHk+JylcblxuICAgICAgalF1ZXJ5LmVhY2goZGF0YSwgZnVuY3Rpb24gKGluZGV4LCBjYXRlZ29yaWUpIHtcbiAgICAgICAgY29uc3QgaHRtbCA9ICc8dHI+XFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4nICsgY2F0ZWdvcmllLmxpYmVsbGUgKyAnPC90ZD5cXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPHRkPicgKyBjYXRlZ29yaWUubmJBcnRpY2xlcyArICc8L3RkPlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGEgaHJlZj1cIlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1jc3JmPVwiXCJcXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLW91dGxpbmUgYnRuLXNxdWFyZSBzdXBwcmltZXJcIlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1wcm92aWRlPVwidG9vbHRpcFwiXFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXBsYWNlbWVudD1cImJvdHRvbVwiXFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlN1cHByaW1lciBsYSBjYXTDqWdvcmllXCI+XFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCInICsgaWNvbkRlbGV0ZSArICdcIj48L2k+XFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+U3VwcHJpbWVyIGxhIGNhdMOpZ29yaWU8L3NwYW4+XFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+PC90ZD5cXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8L3RyPidcbiAgICAgICAgdGFibGUuYXBwZW5kKGh0bWwpXG4gICAgICB9KVxuICAgICAgdGFibGUuYXBwZW5kKCc8L3Rib2R5PicpXG4gICAgICB0YWJsZS5hcHBlbmQoJzx0Zm9vdD5cXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICA8dHI+XFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgIDx0ZD48bGFiZWwgZm9yPVwibGliZWxsZVwiIGNsYXNzPVwic3Itb25seVwiPkxpYmVsbGU8L2xhYmVsPlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJMaWJlbGzDqSBkZSBsYSBjYXTDqWdvcmllXCIgaWQ9XCJsaWJlbGxlXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj48L3RkPlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8dGQ+Jm5ic3A7PC90ZD5cXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgPHRkPlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBidG4tYmxvY2tcIiBpZD1cImFkZENhdGVnb3JpZVwiPkFqb3V0ZXIgY2F0w6lnb3JpZTwvYnV0dG9uPlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8L3RkPlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgIDwvdHI+XFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgPC90Zm9vdD4nKVxuICAgICAgdGFibGUuZGF0YVRhYmxlKHtcbiAgICAgICAgJ2xhbmd1YWdlJzogbGFuZ3VlRnJcbiAgICAgIH0pXG4gICAgfVxuICB9KVxufSlcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==