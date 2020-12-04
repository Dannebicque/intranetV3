// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/public/build/adm.matieres.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 04/12/2020 13:44

(window['webpackJsonp'] = window['webpackJsonp'] || []).push([['adm.matieres'], {

  /***/ './assets/js/pages/adm.matieres.js':
  /*!*****************************************!*\
    !*** ./assets/js/pages/adm.matieres.js ***!
    \*****************************************/
  /*! no static exports found */
  /***/ (function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function ($) {
      __webpack_require__(/*! core-js/modules/es.array.find */ './node_modules/core-js/modules/es.array.find.js')

// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.matieres.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 06/08/2020 09:15
      $('#matiere_semestre').change(function () {
        var semestreSelector = $(this) // Request the neighborhoods of the selected city.

        $.ajax({
          url: Routing.generate('api_liste_ue_by_semestre'),
          dataType: 'JSON',
          type: 'POST',
          data: {
            semestreid: semestreSelector.val()
          },
          success: function success (ues) {
            var matiereSelector = $('#matiere_ue') // Remove current options

            matiereSelector.html('') // Empty value ...

            matiereSelector.append('<option value> Choisir une UE dans le semestre ' + semestreSelector.find('option:selected').text() + ' ...</option>')
            $.each(ues, function (key, ue) {
              matiereSelector.append('<option value="' + ue.id + '">' + ue.numeroUe + ' ' + ue.libelle + '</option>')
            })
          },
          error: function error (err) {
            alert('An error ocurred while loading data ...')
          }
        })
        $.ajax({
          url: Routing.generate('api_liste_parcour_by_semestre'),
          dataType: 'JSON',
          type: 'POST',
          data: {
            semestreid: semestreSelector.val()
          },
          success: function success (parcours) {
            var parcourSelector = $('#matiere_parcours') // Remove current options

            parcourSelector.html('') // Empty value ...

            parcourSelector.append('<option value> Choisir (optionnel) un parcour pour le semestre ' + semestreSelector.find('option:selected').text() + ' ...</option>')
            $.each(parcours, function (key, parcour) {
              parcourSelector.append('<option value="' + parcour.id + '">' + parcour.libelle + '</option>')
            })
          },
          error: function error (err) {
            alert('An error ocurred while loading data ...')
          }
        })
        $.ajax({
          url: Routing.generate('api_matieres_semestre', {
            semestre: semestreSelector.val()
          }),
          dataType: 'JSON',
          type: 'GET',
          success: function success (matieres) {
            var parentSelector = $('#matiere_matiereParent') // Remove current options

            parentSelector.html('') // Empty value ...

            parentSelector.append('<option value> Choisir (optionnel) une matière parent pour ' + $('#matiere_libelle').val() + ' ...</option>')
            $.each(matieres, function (key, matiere) {
              parentSelector.append('<option value="' + matiere.id + '">' + matiere.display + '</option>')
            })
          },
          error: function error (err) {
            alert('An error ocurred while loading data ...')
          }
        })
      })
      $(document).on('click', '.change-diplome', function (e) {
        e.preventDefault()
        $('.change-diplome').removeClass('active show')
        $(this).addClass('active show')
        var $diplome = $(this).data('diplome')
        $.ajax({
          url: Routing.generate('administration_matiere_diplome', {
            diplome: $diplome
          }),
          dataType: 'HTML',
          type: 'GET',
          success: function success (data) {
            $('#content_diplome').slideUp().empty().append(data).slideDown()
            $('.datatable_matieres').dataTable({
              language: langueFr
            })
            $('#export_csv').attr('href', Routing.generate('administration_matiere_export', {
              diplome: $diplome,
              '_format': 'csv'
            }))
            $('#export_xlsx').attr('href', Routing.generate('administration_matiere_export', {
              diplome: $diplome,
              '_format': 'xlsx'
            }))
            $('#export_pdf').attr('href', Routing.generate('administration_matiere_export', {
              diplome: $diplome,
              '_format': 'pdf'
            }))
          }
        })
      })
      /* WEBPACK VAR INJECTION */
    }.call(this, __webpack_require__(/*! jquery */ './node_modules/jquery/dist/jquery.js')))

    /***/
  })

}, [['./assets/js/pages/adm.matieres.js', 'runtime', 'vendors~absences~adm.absences~adm.alternances~adm.articles~adm.bornes~adm.configuration~adm.edt~adm.~b8aa102b', 'vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~b8fda26e', 'vendors~adm.matieres']]])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvYWRtLm1hdGllcmVzLmpzIl0sIm5hbWVzIjpbIiQiLCJjaGFuZ2UiLCJzZW1lc3RyZVNlbGVjdG9yIiwiYWpheCIsInVybCIsIlJvdXRpbmciLCJnZW5lcmF0ZSIsImRhdGFUeXBlIiwidHlwZSIsImRhdGEiLCJzZW1lc3RyZWlkIiwidmFsIiwic3VjY2VzcyIsInVlcyIsIm1hdGllcmVTZWxlY3RvciIsImh0bWwiLCJhcHBlbmQiLCJmaW5kIiwidGV4dCIsImVhY2giLCJrZXkiLCJ1ZSIsImlkIiwibnVtZXJvVWUiLCJsaWJlbGxlIiwiZXJyb3IiLCJlcnIiLCJhbGVydCIsInBhcmNvdXJzIiwicGFyY291clNlbGVjdG9yIiwicGFyY291ciIsInNlbWVzdHJlIiwibWF0aWVyZXMiLCJwYXJlbnRTZWxlY3RvciIsIm1hdGllcmUiLCJkaXNwbGF5IiwiZG9jdW1lbnQiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCIkZGlwbG9tZSIsImRpcGxvbWUiLCJzbGlkZVVwIiwiZW1wdHkiLCJzbGlkZURvd24iLCJkYXRhVGFibGUiLCJsYW5ndWFnZSIsImxhbmd1ZUZyIiwiYXR0ciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLENBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCQyxNQUF2QixDQUE4QixZQUFZO0FBQ3hDLE1BQU1DLGdCQUFnQixHQUFHRixDQUFDLENBQUMsSUFBRCxDQUExQixDQUR3QyxDQUd4Qzs7QUFDQUEsR0FBQyxDQUFDRyxJQUFGLENBQU87QUFDTEMsT0FBRyxFQUFFQyxPQUFPLENBQUNDLFFBQVIsQ0FBaUIsMEJBQWpCLENBREE7QUFFTEMsWUFBUSxFQUFFLE1BRkw7QUFHTEMsUUFBSSxFQUFFLE1BSEQ7QUFJTEMsUUFBSSxFQUFFO0FBQ0pDLGdCQUFVLEVBQUVSLGdCQUFnQixDQUFDUyxH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RDtBQUM5RXFDLGVBQU8sRUFBRUQsUUFEcUU7QUFFOUUsbUJBQVc7QUFGbUUsT0FBbEQsQ0FBOUI7QUFJQTFDLE9BQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JrRCxJQUFsQixDQUF1QixNQUF2QixFQUErQjdDLE9BQU8sQ0FBQ0MsUUFBUixDQUFpQiwrQkFBakIsRUFBa0Q7QUFDL0VxQyxlQUFPLEVBQUVELFFBRHNFO0FBRS9FLG1CQUFXO0FBRm9FLE9BQWxELENBQS9CO0FBSUExQyxPQUFDLENBQUMsYUFBRCxDQUFELENBQWlCa0QsSUFBakIsQ0FBc0IsTUFBdEIsRUFBOEI3QyxPQUFPLENBQUNDLFFBQVIsQ0FBaUIsK0JBQWpCLEVBQWtEO0FBQzlFcUMsZUFBTyxFQUFFRCxRQURxRTtBQUU5RSxtQkFBVztBQUZtRSxPQUFsRCxDQUE5QjtBQUlEO0FBckJJLEdBQVA7QUF3QkQsQ0E3QkQsRSIsImZpbGUiOiJhZG0ubWF0aWVyZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvcGFnZXMvYWRtLm1hdGllcmVzLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMDYvMDgvMjAyMCAwOToxNVxuXG4kKCcjbWF0aWVyZV9zZW1lc3RyZScpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHNlbWVzdHJlU2VsZWN0b3IgPSAkKHRoaXMpXG5cbiAgLy8gUmVxdWVzdCB0aGUgbmVpZ2hib3Job29kcyBvZiB0aGUgc2VsZWN0ZWQgY2l0eS5cbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwaV9saXN0ZV91ZV9ieV9zZW1lc3RyZScpLFxuICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgdHlwZTogJ1BPU1QnLFxuICAgIGRhdGE6IHtcbiAgICAgIHNlbWVzdHJlaWQ6IHNlbWVzdHJlU2VsZWN0b3IudmFsKClcbiAgICB9LFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICh1ZXMpIHtcbiAgICAgIGNvbnN0IG1hdGllcmVTZWxlY3RvciA9ICQoJyNtYXRpZXJlX3VlJylcblxuICAgICAgLy8gUmVtb3ZlIGN1cnJlbnQgb3B0aW9uc1xuICAgICAgbWF0aWVyZVNlbGVjdG9yLmh0bWwoJycpXG5cbiAgICAgIC8vIEVtcHR5IHZhbHVlIC4uLlxuICAgICAgbWF0aWVyZVNlbGVjdG9yLmFwcGVuZCgnPG9wdGlvbiB2YWx1ZT4gQ2hvaXNpciB1bmUgVUUgZGFucyBsZSBzZW1lc3RyZSAnICsgc2VtZXN0cmVTZWxlY3Rvci5maW5kKCdvcHRpb246c2VsZWN0ZWQnKS50ZXh0KCkgKyAnIC4uLjwvb3B0aW9uPicpXG5cblxuICAgICAgJC5lYWNoKHVlcywgZnVuY3Rpb24gKGtleSwgdWUpIHtcbiAgICAgICAgbWF0aWVyZVNlbGVjdG9yLmFwcGVuZCgnPG9wdGlvbiB2YWx1ZT1cIicgKyB1ZS5pZCArICdcIj4nICsgdWUubnVtZXJvVWUgKyAnICcgKyB1ZS5saWJlbGxlICsgJzwvb3B0aW9uPicpXG4gICAgICB9KVxuICAgIH0sXG4gICAgZXJyb3I6IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIGFsZXJ0KCdBbiBlcnJvciBvY3VycmVkIHdoaWxlIGxvYWRpbmcgZGF0YSAuLi4nKVxuICAgIH1cbiAgfSlcblxuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYXBpX2xpc3RlX3BhcmNvdXJfYnlfc2VtZXN0cmUnKSxcbiAgICBkYXRhVHlwZTogJ0pTT04nLFxuICAgIHR5cGU6ICdQT1NUJyxcbiAgICBkYXRhOiB7XG4gICAgICBzZW1lc3RyZWlkOiBzZW1lc3RyZVNlbGVjdG9yLnZhbCgpXG4gICAgfSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocGFyY291cnMpIHtcbiAgICAgIGNvbnN0IHBhcmNvdXJTZWxlY3RvciA9ICQoJyNtYXRpZXJlX3BhcmNvdXJzJylcblxuICAgICAgLy8gUmVtb3ZlIGN1cnJlbnQgb3B0aW9uc1xuICAgICAgcGFyY291clNlbGVjdG9yLmh0bWwoJycpXG5cbiAgICAgIC8vIEVtcHR5IHZhbHVlIC4uLlxuICAgICAgcGFyY291clNlbGVjdG9yLmFwcGVuZCgnPG9wdGlvbiB2YWx1ZT4gQ2hvaXNpciAob3B0aW9ubmVsKSB1biBwYXJjb3VyIHBvdXIgbGUgc2VtZXN0cmUgJyArIHNlbWVzdHJlU2VsZWN0b3IuZmluZCgnb3B0aW9uOnNlbGVjdGVkJykudGV4dCgpICsgJyAuLi48L29wdGlvbj4nKVxuXG5cbiAgICAgICQuZWFjaChwYXJjb3VycywgZnVuY3Rpb24gKGtleSwgcGFyY291cikge1xuICAgICAgICBwYXJjb3VyU2VsZWN0b3IuYXBwZW5kKCc8b3B0aW9uIHZhbHVlPVwiJyArIHBhcmNvdXIuaWQgKyAnXCI+JyArIHBhcmNvdXIubGliZWxsZSArICc8L29wdGlvbj4nKVxuICAgICAgfSlcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICBhbGVydCgnQW4gZXJyb3Igb2N1cnJlZCB3aGlsZSBsb2FkaW5nIGRhdGEgLi4uJylcbiAgICB9XG4gIH0pXG5cbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwaV9tYXRpZXJlc19zZW1lc3RyZScsIHtzZW1lc3RyZTogc2VtZXN0cmVTZWxlY3Rvci52YWwoKX0pLFxuICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgdHlwZTogJ0dFVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKG1hdGllcmVzKSB7XG4gICAgICBjb25zdCBwYXJlbnRTZWxlY3RvciA9ICQoJyNtYXRpZXJlX21hdGllcmVQYXJlbnQnKVxuXG4gICAgICAvLyBSZW1vdmUgY3VycmVudCBvcHRpb25zXG4gICAgICBwYXJlbnRTZWxlY3Rvci5odG1sKCcnKVxuXG4gICAgICAvLyBFbXB0eSB2YWx1ZSAuLi5cbiAgICAgIHBhcmVudFNlbGVjdG9yLmFwcGVuZCgnPG9wdGlvbiB2YWx1ZT4gQ2hvaXNpciAob3B0aW9ubmVsKSB1bmUgbWF0acOocmUgcGFyZW50IHBvdXIgJyArICQoJyNtYXRpZXJlX2xpYmVsbGUnKS52YWwoKSArICcgLi4uPC9vcHRpb24+JylcblxuXG4gICAgICAkLmVhY2gobWF0aWVyZXMsIGZ1bmN0aW9uIChrZXksIG1hdGllcmUpIHtcbiAgICAgICAgcGFyZW50U2VsZWN0b3IuYXBwZW5kKCc8b3B0aW9uIHZhbHVlPVwiJyArIG1hdGllcmUuaWQgKyAnXCI+JyArIG1hdGllcmUuZGlzcGxheSArICc8L29wdGlvbj4nKVxuICAgICAgfSlcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICBhbGVydCgnQW4gZXJyb3Igb2N1cnJlZCB3aGlsZSBsb2FkaW5nIGRhdGEgLi4uJylcbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNoYW5nZS1kaXBsb21lJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICQoJy5jaGFuZ2UtZGlwbG9tZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUgc2hvdycpXG4gICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZSBzaG93JylcbiAgbGV0ICRkaXBsb21lID0gJCh0aGlzKS5kYXRhKCdkaXBsb21lJylcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX21hdGllcmVfZGlwbG9tZScsIHtkaXBsb21lOiAkZGlwbG9tZX0pLFxuICAgIGRhdGFUeXBlOiAnSFRNTCcsXG4gICAgdHlwZTogJ0dFVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICQoJyNjb250ZW50X2RpcGxvbWUnKS5zbGlkZVVwKCkuZW1wdHkoKS5hcHBlbmQoZGF0YSkuc2xpZGVEb3duKClcbiAgICAgICQoJy5kYXRhdGFibGVfbWF0aWVyZXMnKS5kYXRhVGFibGUoe1xuICAgICAgICBsYW5ndWFnZTogbGFuZ3VlRnJcbiAgICAgIH0pXG4gICAgICAkKCcjZXhwb3J0X2NzdicpLmF0dHIoJ2hyZWYnLCBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9tYXRpZXJlX2V4cG9ydCcsIHtcbiAgICAgICAgZGlwbG9tZTogJGRpcGxvbWUsXG4gICAgICAgICdfZm9ybWF0JzogJ2NzdidcbiAgICAgIH0pKVxuICAgICAgJCgnI2V4cG9ydF94bHN4JykuYXR0cignaHJlZicsIFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX21hdGllcmVfZXhwb3J0Jywge1xuICAgICAgICBkaXBsb21lOiAkZGlwbG9tZSxcbiAgICAgICAgJ19mb3JtYXQnOiAneGxzeCdcbiAgICAgIH0pKVxuICAgICAgJCgnI2V4cG9ydF9wZGYnKS5hdHRyKCdocmVmJywgUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fbWF0aWVyZV9leHBvcnQnLCB7XG4gICAgICAgIGRpcGxvbWU6ICRkaXBsb21lLFxuICAgICAgICAnX2Zvcm1hdCc6ICdwZGYnXG4gICAgICB9KSlcbiAgICB9XG4gIH0pXG5cbn0pXG4iXSwic291cmNlUm9vdCI6IiJ9
