// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/public/build/sadm.personnels.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 04/12/2020 13:44

(window['webpackJsonp'] = window['webpackJsonp'] || []).push([['sadm.personnels'], {

  /***/ './assets/js/lang/fr.js':
  /*!******************************!*\
    !*** ./assets/js/lang/fr.js ***!
    \******************************/
  /*! exports provided: dataTableLangueFr */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    'use strict'
    __webpack_require__.r(__webpack_exports__)
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, 'dataTableLangueFr', function () {
      return dataTableLangueFr
    })
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/lang/fr.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 22/07/2020 15:10
    var dataTableLangueFr = {
      'decimal': '',
      'emptyTable': 'Aucune donn&eacute;e disponible dans le tableau',
      'info': 'Affichage de l\'&eacute;l&eacute;ment _START_ &agrave; _END_ sur _TOTAL_ &eacute;l&eacute;ments',
      'infoEmpty': 'Affichage de l\'&eacute;l&eacute;ment 0 &agrave; 0 sur 0 &eacute;l&eacute;ment',
      'infoFiltered': '(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)',
      'infoPostFix': '',
      'thousands': ',',
      'lengthMenu': 'Afficher _MENU_ &eacute;l&eacute;ments',
      'loadingRecords': 'Chargement en cours...',
      'processing': 'Traitement en cours...',
      'search': 'Rechercher&nbsp;:',
      'zeroRecords': 'Aucun &eacute;l&eacute;ment &agrave; afficher',
      'paginate': {
        'first': 'Premier',
        'last': 'Dernier',
        'next': 'Suivant',
        'previous': 'Pr&eacute;c&eacute;dent'
      },
      'aria': {
        'sortAscending': ': activer pour trier la colonne par ordre croissant',
        'sortDescending': ': activer pour trier la colonne par ordre d&eacute;croissant'
      }
    }

    /***/
  }),

  /***/ './assets/js/pages/sadm.personnels.js':
  /*!********************************************!*\
    !*** ./assets/js/pages/sadm.personnels.js ***!
    \********************************************/
  /*! no exports provided */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    'use strict'
    __webpack_require__.r(__webpack_exports__);
    /* WEBPACK VAR INJECTION */
    (function ($, jQuery) {/* harmony import */
      var _vendor_datatables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../vendor/datatables */ './assets/vendor/datatables/index.js')
      /* harmony import */
      var _lang_fr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lang/fr */ './assets/js/lang/fr.js')
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/sadm.personnels.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 06/09/2020 13:13


      $(document).on('keyup', '#sa_login_urca', function () {
        var departement = $(this).data('departement')
        var $val = $(this).val()

        if ($val.length > 2) {
          $.ajax({
            url: Routing.generate('api_personnel_recherche', {
              needle: $val
            }),
            dataType: 'json',
            success: function success (data) {
              $('#result').empty()
              jQuery.each(data, function (index, pers) {
                var html = '<tr>' + '<td>' + pers.nom + '</td>' + '<td>' + pers.prenom + '</td>' + '<td>' + pers.numeroHarpege + '</td>' + '<td>' + pers.username + '</td>' + '<td>' + pers.mail_univ + '</td>' + '<td><a href="#" class="btn btn-success btn-outline btn-square sa_addpersonnel" data-provide="tooltip" data-placement="bottom" title="Ajouter au departement" data-slug="' + pers.slug + '" data-departement="' + departement + '"><i class="fas fa-plus"></i></a></td>' + '</tr>'
                $('#result').append(html)
              })
            }
          })
        }
      })
      $(document).on('click', '.sa_addpersonnel', function () {
        $.ajax({
          url: Routing.generate('api_personnel_add_to_departement', {
            slug: $(this).data('slug'),
            departement: $(this).data('departement')
          }),
          dataType: 'json',
          success: function success (data) {
            addCallout('Personnel ajouté au departement !', 'success')
          }
        })
      })
      $('#datatableRh').DataTable({
        'processing': true,
        'serverSide': true,
        'language': _lang_fr__WEBPACK_IMPORTED_MODULE_1__['dataTableLangueFr'],
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
          'mRender': function mRender (data, type, full) {
            return '<a href="' + Routing.generate('sa_rh_personnel_show', {
              id: data
            }) + '" class="btn btn-info btn-outline btn-square" data-provide="tooltip"\n' + '   data-placement="bottom" title="Détails"><i class="fa fa-info"></i></a>\n' + '<a href="' + Routing.generate('sa_rh_personnel_edit', {
              id: data
            }) + '"\n' + '   class="btn btn-warning btn-outline btn-square"\n' + '                                                     data-provide="tooltip"\n' + '                                                     data-placement="bottom"\n' + '                                                     title="Modifier"><i class="fa fa-edit"></i></a>\n' + '<a href="' + Routing.generate('sa_rh_delete_personnel', {
              id: data
            }) + '" class="btn btn-danger btn-outline btn-square supprimer" data-id="id"' + '            data-provide="tooltip" data-placement="bottom"\n' + '            title="Supprimer"><i class="fa fa-trash"></i></a>'
          }
        }] //todo: gérer scrf sur le delete

      })
      $(document).on('change', '.change_droit_pf', function () {
        $.ajax({
          url: Routing.generate('sa_personnel_departement_modifier_droit', {
            pf: $(this).data('pf')
          }),
          method: 'POST',
          data: {
            'droit': $(this).val()
          },
          success: function success (data) {
            addCallout('Droits modifiés !', 'success')
          }
        })
      })
      $(document).on('click', '#searchLdap', function (e) {
        e.preventDefault()
        $.ajax({
          url: Routing.generate('sa_rh_ldap_search'),
          method: 'POST',
          data: {
            'numero': $('#personnel_numero_harpege').val()
          },
          success: function success (data) {
            $('#personnel_mail_univ').val(data.mail)
            $('#personnel_username').val(data.login)
          }
        })
      })
      /* WEBPACK VAR INJECTION */
    }.call(this, __webpack_require__(/*! jquery */ './node_modules/jquery/dist/jquery.js'), __webpack_require__(/*! jquery */ './node_modules/jquery/dist/jquery.js')))

    /***/
  }),

  /***/ './node_modules/core-js/internals/string-trim-forced.js':
  /*!**************************************************************!*\
    !*** ./node_modules/core-js/internals/string-trim-forced.js ***!
    \**************************************************************/
  /*! no static exports found */
  /***/ (function (module, exports, __webpack_require__) {

    var fails = __webpack_require__(/*! ../internals/fails */ './node_modules/core-js/internals/fails.js')
    var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ './node_modules/core-js/internals/whitespaces.js')

    var non = '\u200B\u0085\u180E'

// check that a method works with the correct list
// of whitespaces and has a correct name
    module.exports = function (METHOD_NAME) {
      return fails(function () {
        return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME
      })
    }


    /***/
  }),

  /***/ './node_modules/core-js/modules/es.string.trim.js':
  /*!********************************************************!*\
    !*** ./node_modules/core-js/modules/es.string.trim.js ***!
    \********************************************************/
  /*! no static exports found */
  /***/ (function (module, exports, __webpack_require__) {

    'use strict'

    var $ = __webpack_require__(/*! ../internals/export */ './node_modules/core-js/internals/export.js')
    var $trim = __webpack_require__(/*! ../internals/string-trim */ './node_modules/core-js/internals/string-trim.js').trim
    var forcedStringTrimMethod = __webpack_require__(/*! ../internals/string-trim-forced */ './node_modules/core-js/internals/string-trim-forced.js')

// `String.prototype.trim` method
// https://tc39.github.io/ecma262/#sec-string.prototype.trim
    $({target: 'String', proto: true, forced: forcedStringTrimMethod('trim')}, {
      trim: function trim () {
        return $trim(this)
      }
    })


    /***/
  })

}, [['./assets/js/pages/sadm.personnels.js', 'runtime', 'vendors~absences~adm.absences~adm.alternances~adm.articles~adm.bornes~adm.configuration~adm.edt~adm.~b8aa102b', 'vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~b8fda26e', 'vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~92da351e', 'vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~14b603b0', 'vendors~absences~adm.absences~adm.edt~adm.etudiants~adm.personnels~adm.stage~agenda~app~covid~datata~8156d9a8', 'vendors~absences~adm.absences~adm.edt~adm.etudiants~adm.personnels~adm.stage~agenda~app~covid~datata~b17950a4', 'vendors~absences~adm.absences~adm.edt~adm.etudiants~adm.personnels~agenda~app~datatable~sadm.personn~4a6dcf60', 'vendors~absences~adm.absences~adm.etudiants~adm.personnels~agenda~datatable~sadm.personnels~sadmCovid', 'absences~adm.absences~adm.etudiants~adm.personnels~agenda~datatable~sadm.personnels~sadmCovid']]])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbGFuZy9mci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvc2FkbS5wZXJzb25uZWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctdHJpbS1mb3JjZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcudHJpbS5qcyJdLCJuYW1lcyI6WyJkYXRhVGFibGVMYW5ndWVGciIsIiQiLCJkb2N1bWVudCIsIm9uIiwiZGVwYXJ0ZW1lbnQiLCJkYXRhIiwiJHZhbCIsInZhbCIsImxlbmd0aCIsImFqYXgiLCJ1cmwiLCJSb3V0aW5nIiwiZ2VuZXJhdGUiLCJuZWVkbGUiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJlbXB0eSIsImpRdWVyeSIsImVhY2giLCJpbmRleCIsInBlcnMiLCJodG1sIiwibm9tIiwicHJlbm9tIiwibnVtZXJvSGFycGVnZSIsInVzZXJuYW1lIiwibWFpbF91bml2Iiwic2x1ZyIsImFwcGVuZCIsImFkZENhbGxvdXQiLCJEYXRhVGFibGUiLCJ0eXBlIiwiZnVsbCIsImlkIiwicGYiLCJtZXRob2QiLCJlIiwicHJldmVudERlZmF1bHQiLCJtYWlsIiwibG9naW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLGlCQUFpQixHQUFHO0FBQy9CLGFBQVcsRUFEb0I7QUFFL0IsZ0JBQWMsaURBRmlCO0FBRy9CLFVBQVEsaUdBSHVCO0FBSS9CLGVBQWEsZ0ZBSmtCO0FBSy9CLGtCQUFnQiwwREFMZTtBQU0vQixpQkFBZSxFQU5nQjtBQU8vQixlQUFhLEdBUGtCO0FBUS9CLGdCQUFjLHdDQVJpQjtBQVMvQixvQkFBa0Isd0JBVGE7QUFVL0IsZ0JBQWMsd0JBVmlCO0FBVy9CLFlBQVUsbUJBWHFCO0FBWS9CLGlCQUFl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RUFBd0U7QUFDM0U7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJzYWRtLnBlcnNvbm5lbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvbGFuZy9mci5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDIyLzA3LzIwMjAgMTU6MTBcblxuZXhwb3J0IGNvbnN0IGRhdGFUYWJsZUxhbmd1ZUZyID0ge1xuICAnZGVjaW1hbCc6ICcnLFxuICAnZW1wdHlUYWJsZSc6ICdBdWN1bmUgZG9ubiZlYWN1dGU7ZSBkaXNwb25pYmxlIGRhbnMgbGUgdGFibGVhdScsXG4gICdpbmZvJzogJ0FmZmljaGFnZSBkZSBsXFwnJmVhY3V0ZTtsJmVhY3V0ZTttZW50IF9TVEFSVF8gJmFncmF2ZTsgX0VORF8gc3VyIF9UT1RBTF8gJmVhY3V0ZTtsJmVhY3V0ZTttZW50cycsXG4gICdpbmZvRW1wdHknOiAnQWZmaWNoYWdlIGRlIGxcXCcmZWFjdXRlO2wmZWFjdXRlO21lbnQgMCAmYWdyYXZlOyAwIHN1ciAwICZlYWN1dGU7bCZlYWN1dGU7bWVudCcsXG4gICdpbmZvRmlsdGVyZWQnOiAnKGZpbHRyJmVhY3V0ZTsgZGUgX01BWF8gJmVhY3V0ZTtsJmVhY3V0ZTttZW50cyBhdSB0b3RhbCknLFxuICAnaW5mb1Bvc3RGaXgnOiAnJyxcbiAgJ3Rob3VzYW5kcyc6ICcsJyxcbiAgJ2xlbmd0aE1lbnUnOiAnQWZmaWNoZXIgX01FTlVfICZlYWN1dGU7bCZlYWN1dGU7bWVudHMnLFxuICAnbG9hZGluZ1JlY29yZHMnOiAnQ2hhcmdlbWVudCBlbiBjb3Vycy4uLicsXG4gICdwcm9jZXNzaW5nJzogJ1RyYWl0ZW1lbnQgZW4gY291cnMuLi4nLFxuICAnc2VhcmNoJzogJ1JlY2hlcmNoZXImbmJzcDs6JyxcbiAgJ3plcm9SZWNvcmRzJzogJ0F1Y3VuICZlYWN1dGU7bCZlYWN1dGU7bWVudCAmYWdyYXZlOyBhZmZpY2hlcicsXG4gICdwYWdpbmF0ZSc6IHtcbiAgICAnZmlyc3QnOiAnUHJlbWllcicsXG4gICAgJ2xhc3QnOiAnRGVybmllcicsXG4gICAgJ25leHQnOiAnU3VpdmFudCcsXG4gICAgJ3ByZXZpb3VzJzogJ1ByJmVhY3V0ZTtjJmVhY3V0ZTtkZW50J1xuICB9LFxuICAnYXJpYSc6IHtcbiAgICAnc29ydEFzY2VuZGluZyc6ICc6IGFjdGl2ZXIgcG91ciB0cmllciBsYSBjb2xvbm5lIHBhciBvcmRyZSBjcm9pc3NhbnQnLFxuICAgICdzb3J0RGVzY2VuZGluZyc6ICc6IGFjdGl2ZXIgcG91ciB0cmllciBsYSBjb2xvbm5lIHBhciBvcmRyZSBkJmVhY3V0ZTtjcm9pc3NhbnQnXG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9wYWdlcy9zYWRtLnBlcnNvbm5lbHMuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAwNi8wOS8yMDIwIDEzOjEzXG5pbXBvcnQgJy4uLy4uL3ZlbmRvci9kYXRhdGFibGVzJ1xuaW1wb3J0IHtkYXRhVGFibGVMYW5ndWVGcn0gZnJvbSAnLi4vbGFuZy9mcidcblxuJChkb2N1bWVudCkub24oJ2tleXVwJywgJyNzYV9sb2dpbl91cmNhJywgZnVuY3Rpb24gKCkge1xuICBjb25zdCBkZXBhcnRlbWVudCA9ICQodGhpcykuZGF0YSgnZGVwYXJ0ZW1lbnQnKVxuICBjb25zdCAkdmFsID0gJCh0aGlzKS52YWwoKVxuICBpZiAoJHZhbC5sZW5ndGggPiAyKSB7XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYXBpX3BlcnNvbm5lbF9yZWNoZXJjaGUnLCB7bmVlZGxlOiAkdmFsfSksXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgJCgnI3Jlc3VsdCcpLmVtcHR5KClcbiAgICAgICAgalF1ZXJ5LmVhY2goZGF0YSwgZnVuY3Rpb24gKGluZGV4LCBwZXJzKSB7XG4gICAgICAgICAgY29uc3QgaHRtbCA9ICc8dHI+JyArXG4gICAgICAgICAgICAnPHRkPicgKyBwZXJzLm5vbSArICc8L3RkPicgK1xuICAgICAgICAgICAgJzx0ZD4nICsgcGVycy5wcmVub20gKyAnPC90ZD4nICtcbiAgICAgICAgICAgICc8dGQ+JyArIHBlcnMubnVtZXJvSGFycGVnZSArICc8L3RkPicgK1xuICAgICAgICAgICAgJzx0ZD4nICsgcGVycy51c2VybmFtZSArICc8L3RkPicgK1xuICAgICAgICAgICAgJzx0ZD4nICsgcGVycy5tYWlsX3VuaXYgKyAnPC90ZD4nICtcbiAgICAgICAgICAgICc8dGQ+PGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBidG4tb3V0bGluZSBidG4tc3F1YXJlIHNhX2FkZHBlcnNvbm5lbFwiIGRhdGEtcHJvdmlkZT1cInRvb2x0aXBcIiBkYXRhLXBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPVwiQWpvdXRlciBhdSBkZXBhcnRlbWVudFwiIGRhdGEtc2x1Zz1cIicgKyBwZXJzLnNsdWcgKyAnXCIgZGF0YS1kZXBhcnRlbWVudD1cIicgKyBkZXBhcnRlbWVudCArICdcIj48aSBjbGFzcz1cImZhcyBmYS1wbHVzXCI+PC9pPjwvYT48L3RkPicgK1xuICAgICAgICAgICAgJzwvdHI+J1xuICAgICAgICAgICQoJyNyZXN1bHQnKS5hcHBlbmQoaHRtbClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnNhX2FkZHBlcnNvbm5lbCcsIGZ1bmN0aW9uICgpIHtcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwaV9wZXJzb25uZWxfYWRkX3RvX2RlcGFydGVtZW50Jywge1xuICAgICAgc2x1ZzogJCh0aGlzKS5kYXRhKCdzbHVnJyksXG4gICAgICBkZXBhcnRlbWVudDogJCh0aGlzKS5kYXRhKCdkZXBhcnRlbWVudCcpXG4gICAgfSksXG4gICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgYWRkQ2FsbG91dCgnUGVyc29ubmVsIGFqb3V0w6kgYXUgZGVwYXJ0ZW1lbnQgIScsICdzdWNjZXNzJylcblxuICAgIH1cbiAgfSlcbn0pXG5cbiQoJyNkYXRhdGFibGVSaCcpLkRhdGFUYWJsZSh7XG4gICdwcm9jZXNzaW5nJzogdHJ1ZSxcbiAgJ3NlcnZlclNpZGUnOiB0cnVlLFxuICAnbGFuZ3VhZ2UnOiBkYXRhVGFibGVMYW5ndWVGcixcbiAgJ2FqYXgnOiBSb3V0aW5nLmdlbmVyYXRlKCdhcGlfYWxsX3BlcnNvbm5lbCcpLFxuICAnc0FqYXhEYXRhUHJvcCc6ICdkYXRhJyxcbiAgJ3BhZ2VMZW5ndGgnOiAyNSxcbiAgJ29yZGVyJzogW1sxLCAnYXNjJ11dLFxuICAnY29sdW1ucyc6IFtcbiAgICB7J2RhdGEnOiAnbnVtZXJvX2hhcnBlZ2UnfSxcbiAgICB7J2RhdGEnOiAnbm9tJ30sXG4gICAgeydkYXRhJzogJ3ByZW5vbSd9LFxuICAgIHsnZGF0YSc6ICdsb2dpbid9LFxuICAgIHsnZGF0YSc6ICdkZXBhcnRlbWVudHMnfSxcbiAgICB7J2RhdGEnOiAnZGVsZXRlZCd9LFxuICAgIHtcbiAgICAgICdkYXRhJzogJ2lkJyxcbiAgICAgICdzb3J0YWJsZSc6IGZhbHNlLFxuICAgICAgJ21SZW5kZXInOiBmdW5jdGlvbiAoZGF0YSwgdHlwZSwgZnVsbCkge1xuICAgICAgICByZXR1cm4gJzxhIGhyZWY9XCInICsgUm91dGluZy5nZW5lcmF0ZSgnc2FfcmhfcGVyc29ubmVsX3Nob3cnLCB7aWQ6IGRhdGF9KSArICdcIiBjbGFzcz1cImJ0biBidG4taW5mbyBidG4tb3V0bGluZSBidG4tc3F1YXJlXCIgZGF0YS1wcm92aWRlPVwidG9vbHRpcFwiXFxuJyArXG4gICAgICAgICAgJyAgIGRhdGEtcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9XCJEw6l0YWlsc1wiPjxpIGNsYXNzPVwiZmEgZmEtaW5mb1wiPjwvaT48L2E+XFxuJyArXG4gICAgICAgICAgJzxhIGhyZWY9XCInICsgUm91dGluZy5nZW5lcmF0ZSgnc2FfcmhfcGVyc29ubmVsX2VkaXQnLCB7aWQ6IGRhdGF9KSArICdcIlxcbicgK1xuICAgICAgICAgICcgICBjbGFzcz1cImJ0biBidG4td2FybmluZyBidG4tb3V0bGluZSBidG4tc3F1YXJlXCJcXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXByb3ZpZGU9XCJ0b29sdGlwXCJcXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXBsYWNlbWVudD1cImJvdHRvbVwiXFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJNb2RpZmllclwiPjxpIGNsYXNzPVwiZmEgZmEtZWRpdFwiPjwvaT48L2E+XFxuJyArXG4gICAgICAgICAgJzxhIGhyZWY9XCInICsgUm91dGluZy5nZW5lcmF0ZSgnc2FfcmhfZGVsZXRlX3BlcnNvbm5lbCcsIHtpZDogZGF0YX0pICsgJ1wiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLW91dGxpbmUgYnRuLXNxdWFyZSBzdXBwcmltZXJcIiBkYXRhLWlkPVwiaWRcIicgK1xuICAgICAgICAgICcgICAgICAgICAgICBkYXRhLXByb3ZpZGU9XCJ0b29sdGlwXCIgZGF0YS1wbGFjZW1lbnQ9XCJib3R0b21cIlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICB0aXRsZT1cIlN1cHByaW1lclwiPjxpIGNsYXNzPVwiZmEgZmEtdHJhc2hcIj48L2k+PC9hPidcbiAgICAgIH1cbiAgICB9XVxuICAvL3RvZG86IGfDqXJlciBzY3JmIHN1ciBsZSBkZWxldGVcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnLmNoYW5nZV9kcm9pdF9wZicsIGZ1bmN0aW9uICgpIHtcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3NhX3BlcnNvbm5lbF9kZXBhcnRlbWVudF9tb2RpZmllcl9kcm9pdCcsIHtwZjogJCh0aGlzKS5kYXRhKCdwZicpfSksXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgZGF0YTogeydkcm9pdCc6ICQodGhpcykudmFsKCl9LFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBhZGRDYWxsb3V0KCdEcm9pdHMgbW9kaWZpw6lzICEnLCAnc3VjY2VzcycpXG5cbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI3NlYXJjaExkYXAnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3NhX3JoX2xkYXBfc2VhcmNoJyksXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgZGF0YToge1xuICAgICAgJ251bWVybyc6ICQoJyNwZXJzb25uZWxfbnVtZXJvX2hhcnBlZ2UnKS52YWwoKVxuICAgIH0sXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICQoJyNwZXJzb25uZWxfbWFpbF91bml2JykudmFsKGRhdGEubWFpbClcbiAgICAgICQoJyNwZXJzb25uZWxfdXNlcm5hbWUnKS52YWwoZGF0YS5sb2dpbilcbiAgICB9XG4gIH0pXG59KVxuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgd2hpdGVzcGFjZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2hpdGVzcGFjZXMnKTtcblxudmFyIG5vbiA9ICdcXHUyMDBCXFx1MDA4NVxcdTE4MEUnO1xuXG4vLyBjaGVjayB0aGF0IGEgbWV0aG9kIHdvcmtzIHdpdGggdGhlIGNvcnJlY3QgbGlzdFxuLy8gb2Ygd2hpdGVzcGFjZXMgYW5kIGhhcyBhIGNvcnJlY3QgbmFtZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUpIHtcbiAgcmV0dXJuIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gISF3aGl0ZXNwYWNlc1tNRVRIT0RfTkFNRV0oKSB8fCBub25bTUVUSE9EX05BTUVdKCkgIT0gbm9uIHx8IHdoaXRlc3BhY2VzW01FVEhPRF9OQU1FXS5uYW1lICE9PSBNRVRIT0RfTkFNRTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJHRyaW0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0nKS50cmltO1xudmFyIGZvcmNlZFN0cmluZ1RyaW1NZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0tZm9yY2VkJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLnRyaW1gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltXG4kKHsgdGFyZ2V0OiAnU3RyaW5nJywgcHJvdG86IHRydWUsIGZvcmNlZDogZm9yY2VkU3RyaW5nVHJpbU1ldGhvZCgndHJpbScpIH0sIHtcbiAgdHJpbTogZnVuY3Rpb24gdHJpbSgpIHtcbiAgICByZXR1cm4gJHRyaW0odGhpcyk7XG4gIH1cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
