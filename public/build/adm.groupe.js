// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/public/build/adm.groupe.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 04/12/2020 13:44

(window['webpackJsonp'] = window['webpackJsonp'] || []).push([['adm.groupe'], {

  /***/ './assets/js/pages/adm.groupe.js':
  /*!***************************************!*\
    !*** ./assets/js/pages/adm.groupe.js ***!
    \***************************************/
  /*! no exports provided */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    'use strict'
    __webpack_require__.r(__webpack_exports__);
    /* WEBPACK VAR INJECTION */
    (function ($) {/* harmony import */
      var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ './assets/js/util.js')
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.groupe.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 01/09/2020 21:31

      $(document).on('click', '.change-semestre', function (e) {
        e.preventDefault()
        $('.change-semestre').removeClass('active show')
        $(this).addClass('active show')
        var semestre = $(this).data('semestre')
        $('#liste_semestre').empty().load(Routing.generate('administration_groupe_liste_semestre', {
          semestre: semestre
        }, function () {
          $('#export_csv').attr('href', Routing.generate('administration_groupe_export', {
            semestre: semestre,
            '_format': 'csv'
          }))
          $('#export_xlsx').attr('href', Routing.generate('administration_groupe_export', {
            semestre: semestre,
            '_format': 'xlsx'
          }))
          $('#export_pdf').attr('href', Routing.generate('administration_groupe_export', {
            semestre: semestre,
            '_format': 'pdf'
          }))
        }))
      })
      $(document).on('change', '.change-parent', function () {
        var semestre = $(this).data('semestre')
        $.ajax({
          url: Routing.generate('administration_groupe_change_parent'),
          data: {
            groupe: $(this).data('groupe'),
            parent: $(this).val()
          },
          method: 'POST',
          success: function success () {
            $('#groupes_semestre').empty().load(Routing.generate('administration_groupe_liste_semestre', {
              semestre: semestre
            }))
            Object(_util__WEBPACK_IMPORTED_MODULE_0__['addCallout'])('Mise à jour du parent', 'success')
          }
        })
      })
      $(document).on('change', '.change-typegroupe', function () {
        var semestre = $(this).data('semestre')
        $.ajax({
          url: Routing.generate('administration_groupe_change_typegroupe'),
          data: {
            groupe: $(this).data('groupe'),
            typegroupe: $(this).val()
          },
          method: 'POST',
          success: function success () {
            $('#groupes_semestre').empty().load(Routing.generate('administration_groupe_liste_semestre', {
              semestre: semestre
            }))
            Object(_util__WEBPACK_IMPORTED_MODULE_0__['addCallout'])('Mise à jour du type de groupe', 'success')
          }
        })
      })
      $(document).on('change', '.change-parcours', function () {
        var semestre = $(this).data('semestre')
        $.ajax({
          url: Routing.generate('administration_groupe_change_parcours'),
          data: {
            groupe: $(this).data('groupe'),
            parcours: $(this).val()
          },
          method: 'POST',
          success: function success () {
            $('#groupes_semestre').empty().load(Routing.generate('administration_groupe_liste_semestre', {
              semestre: semestre
            }))
            Object(_util__WEBPACK_IMPORTED_MODULE_0__['addCallout'])('Mise à jour du parcours associé au groupe', 'success')
          }
        })
      })
      $(document).on('change', '.change-type_typegroupe', function () {
        $.ajax({
          url: Routing.generate('administration_typegroupe_change_type', {
            typeGroupe: $(this).data('typegroupe')
          }),
          data: {
            type: $(this).val()
          },
          method: 'POST',
          success: function success () {
            Object(_util__WEBPACK_IMPORTED_MODULE_0__['addCallout'])('Mise à jour du type de type de groupe', 'success')
          }
        })
      })
      $(document).on('click', '.duplicate-groupe', function (e) {
        e.preventDefault()
        var semestre = $(this).data('semestre')
        $.ajax({
          url: Routing.generate('administration_groupe_duplicate', {
            groupe: $(this).data('groupe')
          }),
          method: 'GET',
          success: function success () {
            $('#groupes_semestre').empty().load(Routing.generate('administration_groupe_liste_semestre', {
              semestre: semestre
            }))
            Object(_util__WEBPACK_IMPORTED_MODULE_0__['addCallout'])('Groupe dupliqué', 'success')
          }
        })
      })
      $(document).on('click', '.duplicate-type_groupe', function (e) {
        e.preventDefault()
        var semestre = $(this).data('semestre')
        $.ajax({
          url: Routing.generate('administration_type_groupe_duplicate', {
            typegroupe: $(this).data('typegroupe')
          }),
          method: 'GET',
          success: function success () {
            $('#groupes_semestre').empty().load(Routing.generate('administration_groupe_liste_semestre', {
              semestre: semestre
            }))
            $('#type_groupes_semestre').empty().load(Routing.generate('administration_type_groupe_liste_semestre', {
              semestre: semestre
            }))
            Object(_util__WEBPACK_IMPORTED_MODULE_0__['addCallout'])('Type de groupe dupliqué', 'success')
          }
        })
      })
      $(document).on('click', '#addGroupe', function (e) {
        e.preventDefault()
        var semestre = $(this).data('semestre')
        var data = new FormData($('#form_groupe')[0])
        $.ajax({
          url: Routing.generate('administration_groupe_new', {
            semestre: semestre
          }),
          data: data,
          processData: false,
          contentType: false,
          method: 'POST',
          success: function success () {
            $('#groupes_semestre').empty().load(Routing.generate('administration_groupe_liste_semestre', {
              semestre: semestre
            }))
            Object(_util__WEBPACK_IMPORTED_MODULE_0__['addCallout'])('Mise à jour du parcours associé au groupe', 'success')
          }
        })
      })
      $(document).on('click', '#addTypeGroupe', function (e) {
        e.preventDefault()
        var semestre = $(this).data('semestre')
        $.ajax({
          url: Routing.generate('administration_type_groupe_new', {
            semestre: semestre
          }),
          data: {
            libelle: $('#typegroupe_libelle').val(),
            type: $('#typegroupe_type').val(),
            defaut: $('#typegroupe_defaut').val()
          },
          method: 'POST',
          success: function success () {
            $('#groupes_semestre').empty().load(Routing.generate('administration_groupe_liste_semestre', {
              semestre: semestre
            }))
            $('#type_groupes_semestre').empty().load(Routing.generate('administration_type_groupe_liste_semestre', {
              semestre: semestre
            }))
            Object(_util__WEBPACK_IMPORTED_MODULE_0__['addCallout'])('Ajout d\'un type de groupe', 'success')
          }
        })
      })
      $(document).on('change', '.changeDefaut', function (e) {
        var semestre = $(this).data('semestre')
        e.preventDefault()
        e.stopPropagation()
        $.ajax({
          url: Routing.generate('administration_type_groupe_defaut', {
            semestre: semestre,
            typegroupe: $(this).data('type-groupe')
          }),
          method: 'POST',
          data: {
            defaut: $(this).prop('checked')
          },
          success: function success () {
            $('#type_groupes_semestre').empty().load(Routing.generate('administration_type_groupe_liste_semestre', {
              semestre: semestre
            }))
            Object(_util__WEBPACK_IMPORTED_MODULE_0__['addCallout'])('Type de groupe par défaut enregistrée', 'success')
          },
          error: function error () {
            Object(_util__WEBPACK_IMPORTED_MODULE_0__['addCallout'])('Erreur lors de l\'enregistrement', 'danger')
          }
        })
      })
      /* WEBPACK VAR INJECTION */
    }.call(this, __webpack_require__(/*! jquery */ './node_modules/jquery/dist/jquery.js')))

    /***/
  }),

  /***/ './assets/js/util.js':
  /*!***************************!*\
    !*** ./assets/js/util.js ***!
    \***************************/
  /*! exports provided: addCallout, getDataOptions, invalidChamps, validChamps, completeChamps */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    'use strict'
    __webpack_require__.r(__webpack_exports__);
    /* WEBPACK VAR INJECTION */
    (function (jQuery) {/* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, 'addCallout', function () {
        return addCallout
      })
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, 'getDataOptions', function () {
        return getDataOptions
      })
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, 'invalidChamps', function () {
        return invalidChamps
      })
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, 'validChamps', function () {
        return validChamps
      })
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, 'completeChamps', function () {
        return completeChamps
      })
      /* harmony import */
      var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ './node_modules/core-js/modules/es.number.constructor.js')
      /* harmony import */
      var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__)
      /* harmony import */
      var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ './node_modules/core-js/modules/es.regexp.exec.js')
      /* harmony import */
      var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__)
      /* harmony import */
      var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace */ './node_modules/core-js/modules/es.string.replace.js')
      /* harmony import */
      var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__)
      /* harmony import */
      var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.split */ './node_modules/core-js/modules/es.string.split.js')
      /* harmony import */
      var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_3__)
      /* harmony import */
      var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.trim */ './node_modules/core-js/modules/es.string.trim.js')
      /* harmony import */
      var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_4__)
      /* harmony import */
      var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ './node_modules/jquery/dist/jquery.js')
      /* harmony import */
      var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__)
      /* harmony import */
      var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ './node_modules/sweetalert2/dist/sweetalert2.all.js')
      /* harmony import */
      var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__)


// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/util.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 01/12/2020 22:04


      var $stopCatchEnter = false

      function readUrlMenu ($url) {
        var $elt = $url.split('/')
        var $firstElt = 2

        if ($elt[1] === 'index.php') {
          if ($elt.length > 1) {
            $firstElt = 3
          }
        }

        if ($elt[$firstElt] === 'super-administration') {
          $firstElt = $firstElt + 1
        }

        if ($elt[$elt.length - 1] === '') {
          $elt.pop()
        }

        jquery__WEBPACK_IMPORTED_MODULE_5___default()('.menu-item').removeClass('active')
        jquery__WEBPACK_IMPORTED_MODULE_5___default()('#menu-' + $elt[$firstElt]).addClass('active')
      } //colorise le bon menu


      readUrlMenu(jquery__WEBPACK_IMPORTED_MODULE_5___default()(location).attr('pathname'))
      sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.mixin({
        customClass: {
          confirmButton: 'btn btn-primary',
          cancelButton: 'btn btn-secondary'
        },
        buttonsStyling: false
      }) //pop up de confirmation de suppression

      jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('click', '.supprimer', function (e) {
        e.preventDefault()
        var url = jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).attr('href')
        var csrf = jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).data('csrf')
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
          title: 'Confirmer la suppression ?',
          text: 'L\'opération ne pourra pas être annulée.',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Oui, je confirme',
          cancelButtonText: 'Non, Annuler',
          customClass: {
            confirmButton: 'btn btn-primary',
            cancelButton: 'btn btn-secondary'
          },
          buttonsStyling: false
        }).then(function (result) {
          if (result.value) {
            jquery__WEBPACK_IMPORTED_MODULE_5___default.a.ajax({
              url: url,
              type: 'DELETE',
              data: {
                _token: csrf
              },
              success: function success (id) {
                if (id.hasOwnProperty('redirect') && id.hasOwnProperty('url')) {
                  document.location.href = id.url
                } else {
                  //t.row("#ligne_"+id).remove().draw(); =< datattable todo: remove ligne si datatable ?? problème dans adm>personnel
                  jquery__WEBPACK_IMPORTED_MODULE_5___default()('#ligne_' + id).closest('tr').remove()
                  addCallout('Suppression effectuée avec succès', 'success')
                  sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                    title: 'Supprimé!',
                    text: 'L\'enregistrement a été supprimé.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    customClass: {
                      confirmButton: 'btn btn-primary',
                      cancelButton: 'btn btn-secondary'
                    },
                    buttonsStyling: false
                  })
                }
              },
              error: function error (xhr, ajaxOptions, thrownError) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                  title: 'Erreur lors de la suppression!',
                  text: 'Merci de renouveler l\'opération',
                  icon: 'error',
                  confirmButtonText: 'OK',
                  customClass: {
                    confirmButton: 'btn btn-primary',
                    cancelButton: 'btn btn-secondary'
                  },
                  buttonsStyling: false
                })
                addCallout('Erreur lors de la tentative de suppression', 'danger')
              }
            })
          } else if ( // Read more about handling dismissals
            result.dismiss === 'cancel') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
              title: 'Cancelled',
              text: 'OK! Tout est comme avant !',
              icon: 'error',
              confirmButtonText: 'OK',
              customClass: {
                confirmButton: 'btn btn-primary',
                cancelButton: 'btn btn-secondary'
              },
              buttonsStyling: false
            })
          }
        })
      })

      function addCallout (message, label) {
        console.log('callout')
        var translate = new Array()
        translate['success'] = 'Succès'
        translate['danger'] = 'Erreur'
        translate['warning'] = 'Attention'
        var html = '<div class="callout callout-' + label + '" role="alert">\n' + '                    <button type="button" class="close" data-dismiss="callout" aria-label="Close">\n' + '                        <span>&times;</span>\n' + '                    </button>\n' + '                    <h5>' + translate[label] + '</h5>\n' + '                    <p>' + message + '</p>\n' + '                </div>'
        jquery__WEBPACK_IMPORTED_MODULE_5___default()('#mainContent').prepend(html).slideDown('slow')
        jquery__WEBPACK_IMPORTED_MODULE_5___default()('.callout').delay(5000).slideUp('slow')
      } //Editable

      var myEditInitialContent = ''
      var type = 'text'
      var EditOnLine = false
      jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('click', '.myedit', function (e) {
        e.preventDefault()
        myEditInitialContent = jquery__WEBPACK_IMPORTED_MODULE_5___default()(this)
        var html = ''
        EditOnLine = true

        if (typeof jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).data('type') !== 'undefined') {
          type = jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).data('type')
        }

        if (jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).data('type') === 'select') {//todo: A finaliser
        } else if (jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).data('type') === 'textarea') {
          html = genereTextArea(jquery__WEBPACK_IMPORTED_MODULE_5___default()(this))
        } else {
          html = genereInput(jquery__WEBPACK_IMPORTED_MODULE_5___default()(this))
        }

        jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).replaceWith(html)
        jquery__WEBPACK_IMPORTED_MODULE_5___default()('#myedit-input').focus()
      })
      jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('keyup', '#myedit-input', function (e) {
        if (e.keyCode === 13 && $stopCatchEnter === false) {
          updateData()
        } else if (e.keyCode === 27) {
          jquery__WEBPACK_IMPORTED_MODULE_5___default()('#myEdit-zone').replaceWith(myEditInitialContent)
        }
      })
      jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('click', '#myedit-valide', function (e) {
        $stopCatchEnter = false
        e.preventDefault()
        updateData()
      })
      jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('keypress', function (e) {
        if (EditOnLine === true && $stopCatchEnter === false && e.which === 13) {
          e.preventDefault()
          updateData()
        }

        if (EditOnLine === true && $stopCatchEnter === false && e.which === 27) {
          e.preventDefault()
          jquery__WEBPACK_IMPORTED_MODULE_5___default()('#myEdit-zone').replaceWith(myEditInitialContent)
        }
      })
      jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('click', '#myedit-annule', function (e) {
        e.preventDefault()
        jquery__WEBPACK_IMPORTED_MODULE_5___default()('#myEdit-zone').replaceWith(myEditInitialContent)
      })

      function updateData () {
        var val = jquery__WEBPACK_IMPORTED_MODULE_5___default()('#myedit-input').val()
        jquery__WEBPACK_IMPORTED_MODULE_5___default.a.ajax({
          url: myEditInitialContent.attr('href'),
          data: {
            field: myEditInitialContent.data('field'),
            value: val,
            type: type
          },
          method: 'POST',
          success: function success () {
            myEditInitialContent.html(val)
            jquery__WEBPACK_IMPORTED_MODULE_5___default()('#myEdit-zone').replaceWith(myEditInitialContent)
            EditOnLine = false
          }
        })
      }

      function genereTextArea ($obj) {
        $stopCatchEnter = true
        return '<div id="myEdit-zone">\n' + '                      <textarea rows="5" class="form-control" id="myedit-input">' + $obj.html().trim() + '</textarea>\n' + '                      <span class="input-group-append">\n' + ' <button class="btn btn-success-outline" id="myedit-valide"><i class="fas fa-check"></i></button>\n' + '                        <button class="btn btn-danger-outline" id="myedit-annule"><i class="fas fa-times"></i></button>\n' + '                      </span>\n' + '                    </div>'
      }

      function genereInput ($obj) {
        return '<div id="myEdit-zone" class="input-group">\n' + '                      <input type="text" class="form-control" id="myedit-input" value="' + $obj.html().trim() + '" >\n' + '                      <span class="input-group-append">\n' + ' <button class="btn btn-success-outline" id="myedit-valide"><i class="fas fa-check"></i></button>\n' + '                        <button class="btn btn-danger-outline" id="myedit-annule"><i class="fas fa-times"></i></button>\n' + '                      </span>\n' + '                    </div>'
      }

      jQuery.fn.dataAttr = function (name, def) {
        return jquery__WEBPACK_IMPORTED_MODULE_5___default()(this)[0].getAttribute('data-' + name) || def
      }

      jQuery.fn.hasDataAttr = function (name) {
        return jquery__WEBPACK_IMPORTED_MODULE_5___default()(this)[0].hasAttribute('data-' + name)
      }

      function dataToOption (name) {
        return name.replace(/-([a-z])/g, function (x) {
          return x[1].toUpperCase()
        })
      }

      function getDataOptions (el, castList) {
        var options = {}
        jquery__WEBPACK_IMPORTED_MODULE_5___default.a.each(jquery__WEBPACK_IMPORTED_MODULE_5___default()(el).data(), function (key, value) {
          key = dataToOption(key) // Escape data-provide

          if (key == 'provide') {
            return
          }

          if (castList != undefined) {
            var type = castList[key]

            switch (type) {
              case 'bool':
                value = Boolean(value)
                break

              case 'num':
                value = Number(value)
                break

              case 'array':
                value = value.split(',')
                break

              default:
            }
          }

          options[key] = value
        })
        return options
      }

      function invalidChamps ($obj) {
        $obj.removeClass('is-valid').addClass('is-invalid')
      }

      function validChamps ($obj) {
        $obj.removeClass('is-invalid').addClass('is-valid')
      }

      function completeChamps ($obj) {
        $obj.removeClass('is-invalid').removeClass('is-valid')
      }

      /* WEBPACK VAR INJECTION */
    }.call(this, __webpack_require__(/*! jquery */ './node_modules/jquery/dist/jquery.js')))

    /***/
  })

}, [['./assets/js/pages/adm.groupe.js', 'runtime', 'vendors~absences~adm.absences~adm.alternances~adm.articles~adm.bornes~adm.configuration~adm.edt~adm.~b8aa102b', 'vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~b8fda26e', 'vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~92da351e', 'vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~14b603b0', 'vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.groupe~adm.justificat~2f9ea679']]])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvYWRtLmdyb3VwZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdXRpbC5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJzZW1lc3RyZSIsImRhdGEiLCJlbXB0eSIsImxvYWQiLCJSb3V0aW5nIiwiZ2VuZXJhdGUiLCJhdHRyIiwiYWpheCIsInVybCIsImdyb3VwZSIsInBhcmVudCIsInZhbCIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJhZGRDYWxsb3V0IiwidHlwZWdyb3VwZSIsInBhcmNvdXJzIiwidHlwZUdyb3VwZSIsInR5cGUiLCJGb3JtRGF0YSIsInByb2Nlc3NEYXRhIiwiY29udGVudFR5cGUiLCJsaWJlbGxlIiwiZGVmYXV0Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJvcCIsImVycm9yIiwiJHN0b3BDYXRjaEVudGVyIiwicmVhZFVybE1lbnUiLCIkdXJsIiwiJGVsdCIsInNwbGl0IiwiJGZpcnN0RWx0IiwibGVuZ3RoIiwicG9wIiwibG9jYXRpb24iLCJTd2FsIiwibWl4aW4iLCJjdXN0b21DbGFzcyIsImNvbmZpcm1CdXR0b24iLCJjYW5jZWxCdXR0b24iLCJidXR0b25zU3R5bGluZyIsImNzcmYiLCJmaXJlIiwidGl0bGUiLCJ0ZXh0IiwiaWNvbiIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsInRoZW4iLCJyZXN1bHQiLCJ2YWx1ZSIsIl90b2tlbiIsImlkIiwiaGFzT3duUHJvcGVydHkiLCJocmVmIiwiY2xvc2VzdCIsInJlbW92ZSIsInhociIsImFqYXhPcHRpb25zIiwidGhyb3duRXJyb3IiLCJkaXNtaXNzIiwibWVzc2FnZSIsImxhYmVsIiwiY29uc29sZSIsImxvZyIsInRyYW5zbGF0ZSIsIkFycmF5IiwiaHRtbCIsInByZXBlbmQiLCJzbGlkZURvd24iLCJkZWxheSIsInNsaWRlVXAiLCJteUVkaXRJbml0aWFsQ29udGVudCIsIkVkaXRPbkxpbmUiLCJnZW5lcmVUZXh0QXJlYSIsImdlbmVyZUlucHV0IiwicmVwbGFjZVdpdGgiLCJmb2N1cyIsImtleUNvZGUiLCJ1cGRhdGVEYXRhIiwid2hpY2giLCJmaWVsZCIsIiRvYmoiLCJ0cmltIiwialF1ZXJ5IiwiZm4iLCJkYXRhQXR0ciIsIm5hbWUiLCJkZWYiLCJnZXRBdHRyaWJ1dGUiLCJoYXNEYXRhQXR0ciIsImhhc0F0dHJpYnV0ZSIsImRhdGFUb09wdGlvbiIsInJlcGxhY2UiLCJ4IiwidG9VcHBlckNhc2UiLCJnZXREYXRhT3B0aW9ucyIsImVsIiwiY2FzdExpc3QiLCJvcHRpb25zIiwiZWFjaCIsImtleSIsInVuZGVmaW5lZCIsIkJvb2xlYW4iLCJOdW1iZXIiLCJpbnZhbGlkQ2hhbXBzIiwidmFsaWRDaGFtcHMiLCJjb21wbGV0ZUNoYW1wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsRUFBWixDQUFlLE9BQWYsRUFBd0Isa0JBQXhCLEVBQTRDLFVBQVVDLENBQVYsRUFBYTtBQUN2REEsR0FBQyxDQUFDQyxjQUFGO0FBQ0FKLEdBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCSyxXQUF0QixDQUFrQyxhQUFsQztBQUNBTCxHQUFDLENBQUMsSUFBRCxDQUFELENBQVFNLFFBQVIsQ0FBaUIsYUFBakI7QUFDQSxNQUFJQyxRQUFRLEdBQUdQLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVEsSUFBUixDQUFhLFVBQWIsQ0FBZjtBQUVBUixHQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQlMsS0FBckIsR0FBNkJDLElBQTdCLENBQWtDQyxPQUFPLENBQUNDLFFBQVIsQ0FBaUIsc0NBQWpC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LENBQVAsR0FBZW5ELEtBQWY7QUFDRCxHQTlCRDtBQWdDQSxTQUFPaUQsT0FBUDtBQUNEO0FBRU0sU0FBU00sYUFBVCxDQUF3QnZCLElBQXhCLEVBQThCO0FBQ25DQSxNQUFJLENBQUN4RixXQUFMLENBQWlCLFVBQWpCLEVBQTZCQyxRQUE3QixDQUFzQyxZQUF0QztBQUNEO0FBRU0sU0FBUytHLFdBQVQsQ0FBc0J4QixJQUF0QixFQUE0QjtBQUNqQ0EsTUFBSSxDQUFDeEYsV0FBTCxDQUFpQixZQUFqQixFQUErQkMsUUFBL0IsQ0FBd0MsVUFBeEM7QUFDRDtBQUVNLFNBQVNnSCxjQUFULENBQXlCekIsSUFBekIsRUFBK0I7QUFDcENBLE1BQUksQ0FBQ3hGLFdBQUwsQ0FBaUIsWUFBakIsRUFBK0JBLFdBQS9CLENBQTJDLFVBQTNDO0FBQ0QsQyIsImZpbGUiOiJhZG0uZ3JvdXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3BhZ2VzL2FkbS5ncm91cGUuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAwMS8wOS8yMDIwIDIxOjMxXG5cbmltcG9ydCB7YWRkQ2FsbG91dH0gZnJvbSAnLi4vdXRpbCdcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5jaGFuZ2Utc2VtZXN0cmUnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgJCgnLmNoYW5nZS1zZW1lc3RyZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUgc2hvdycpXG4gICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZSBzaG93JylcbiAgbGV0IHNlbWVzdHJlID0gJCh0aGlzKS5kYXRhKCdzZW1lc3RyZScpXG5cbiAgJCgnI2xpc3RlX3NlbWVzdHJlJykuZW1wdHkoKS5sb2FkKFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX2dyb3VwZV9saXN0ZV9zZW1lc3RyZScsIHtzZW1lc3RyZTogc2VtZXN0cmV9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAkKCcjZXhwb3J0X2NzdicpLmF0dHIoJ2hyZWYnLCBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9ncm91cGVfZXhwb3J0Jywge1xuICAgICAgICBzZW1lc3RyZTogc2VtZXN0cmUsXG4gICAgICAgICdfZm9ybWF0JzogJ2NzdidcbiAgICAgIH0pKVxuICAgICAgJCgnI2V4cG9ydF94bHN4JykuYXR0cignaHJlZicsIFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX2dyb3VwZV9leHBvcnQnLCB7XG4gICAgICAgIHNlbWVzdHJlOiBzZW1lc3RyZSxcbiAgICAgICAgJ19mb3JtYXQnOiAneGxzeCdcbiAgICAgIH0pKVxuICAgICAgJCgnI2V4cG9ydF9wZGYnKS5hdHRyKCdocmVmJywgUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fZ3JvdXBlX2V4cG9ydCcsIHtcbiAgICAgICAgc2VtZXN0cmU6IHNlbWVzdHJlLFxuICAgICAgICAnX2Zvcm1hdCc6ICdwZGYnXG4gICAgICB9KSlcbiAgICB9KVxuICApXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy5jaGFuZ2UtcGFyZW50JywgZnVuY3Rpb24gKCkge1xuICBjb25zdCBzZW1lc3RyZSA9ICQodGhpcykuZGF0YSgnc2VtZXN0cmUnKVxuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fZ3JvdXBlX2NoYW5nZV9wYXJlbnQnKSxcbiAgICBkYXRhOiB7XG4gICAgICBncm91cGU6ICQodGhpcykuZGF0YSgnZ3JvdXBlJyksXG4gICAgICBwYXJlbnQ6ICQodGhpcykudmFsKClcbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICQoJyNncm91cGVzX3NlbWVzdHJlJykuZW1wdHkoKS5sb2FkKFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX2dyb3VwZV9saXN0ZV9zZW1lc3RyZScsIHtzZW1lc3RyZTogc2VtZXN0cmV9KSlcbiAgICAgIGFkZENhbGxvdXQoJ01pc2Ugw6Agam91ciBkdSBwYXJlbnQnLCAnc3VjY2VzcycpXG4gICAgfVxuICB9KVxufSlcblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcuY2hhbmdlLXR5cGVncm91cGUnLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHNlbWVzdHJlID0gJCh0aGlzKS5kYXRhKCdzZW1lc3RyZScpXG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9ncm91cGVfY2hhbmdlX3R5cGVncm91cGUnKSxcbiAgICBkYXRhOiB7XG4gICAgICBncm91cGU6ICQodGhpcykuZGF0YSgnZ3JvdXBlJyksXG4gICAgICB0eXBlZ3JvdXBlOiAkKHRoaXMpLnZhbCgpXG4gICAgfSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAkKCcjZ3JvdXBlc19zZW1lc3RyZScpLmVtcHR5KCkubG9hZChSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9ncm91cGVfbGlzdGVfc2VtZXN0cmUnLCB7c2VtZXN0cmU6IHNlbWVzdHJlfSkpXG4gICAgICBhZGRDYWxsb3V0KCdNaXNlIMOgIGpvdXIgZHUgdHlwZSBkZSBncm91cGUnLCAnc3VjY2VzcycpXG4gICAgfVxuICB9KVxufSlcblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcuY2hhbmdlLXBhcmNvdXJzJywgZnVuY3Rpb24gKCkge1xuICBjb25zdCBzZW1lc3RyZSA9ICQodGhpcykuZGF0YSgnc2VtZXN0cmUnKVxuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fZ3JvdXBlX2NoYW5nZV9wYXJjb3VycycpLFxuICAgIGRhdGE6IHtcbiAgICAgIGdyb3VwZTogJCh0aGlzKS5kYXRhKCdncm91cGUnKSxcbiAgICAgIHBhcmNvdXJzOiAkKHRoaXMpLnZhbCgpXG4gICAgfSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAkKCcjZ3JvdXBlc19zZW1lc3RyZScpLmVtcHR5KCkubG9hZChSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9ncm91cGVfbGlzdGVfc2VtZXN0cmUnLCB7c2VtZXN0cmU6IHNlbWVzdHJlfSkpXG4gICAgICBhZGRDYWxsb3V0KCdNaXNlIMOgIGpvdXIgZHUgcGFyY291cnMgYXNzb2Npw6kgYXUgZ3JvdXBlJywgJ3N1Y2Nlc3MnKVxuICAgIH1cbiAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnLmNoYW5nZS10eXBlX3R5cGVncm91cGUnLCBmdW5jdGlvbiAoKSB7XG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl90eXBlZ3JvdXBlX2NoYW5nZV90eXBlJywge3R5cGVHcm91cGU6ICQodGhpcykuZGF0YSgndHlwZWdyb3VwZScpfSksXG4gICAgZGF0YToge1xuICAgICAgdHlwZTogJCh0aGlzKS52YWwoKVxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgYWRkQ2FsbG91dCgnTWlzZSDDoCBqb3VyIGR1IHR5cGUgZGUgdHlwZSBkZSBncm91cGUnLCAnc3VjY2VzcycpXG4gICAgfVxuICB9KVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5kdXBsaWNhdGUtZ3JvdXBlJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IHNlbWVzdHJlID0gJCh0aGlzKS5kYXRhKCdzZW1lc3RyZScpXG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9ncm91cGVfZHVwbGljYXRlJywge2dyb3VwZTogJCh0aGlzKS5kYXRhKCdncm91cGUnKX0pLFxuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgJCgnI2dyb3VwZXNfc2VtZXN0cmUnKS5lbXB0eSgpLmxvYWQoUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fZ3JvdXBlX2xpc3RlX3NlbWVzdHJlJywge3NlbWVzdHJlOiBzZW1lc3RyZX0pKVxuICAgICAgYWRkQ2FsbG91dCgnR3JvdXBlIGR1cGxpcXXDqScsICdzdWNjZXNzJylcbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmR1cGxpY2F0ZS10eXBlX2dyb3VwZScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBjb25zdCBzZW1lc3RyZSA9ICQodGhpcykuZGF0YSgnc2VtZXN0cmUnKVxuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fdHlwZV9ncm91cGVfZHVwbGljYXRlJywge3R5cGVncm91cGU6ICQodGhpcykuZGF0YSgndHlwZWdyb3VwZScpfSksXG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAkKCcjZ3JvdXBlc19zZW1lc3RyZScpLmVtcHR5KCkubG9hZChSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9ncm91cGVfbGlzdGVfc2VtZXN0cmUnLCB7c2VtZXN0cmU6IHNlbWVzdHJlfSkpXG4gICAgICAkKCcjdHlwZV9ncm91cGVzX3NlbWVzdHJlJykuZW1wdHkoKS5sb2FkKFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX3R5cGVfZ3JvdXBlX2xpc3RlX3NlbWVzdHJlJywge3NlbWVzdHJlOiBzZW1lc3RyZX0pKVxuICAgICAgYWRkQ2FsbG91dCgnVHlwZSBkZSBncm91cGUgZHVwbGlxdcOpJywgJ3N1Y2Nlc3MnKVxuICAgIH1cbiAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjYWRkR3JvdXBlJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IHNlbWVzdHJlID0gJCh0aGlzKS5kYXRhKCdzZW1lc3RyZScpXG4gIGxldCBkYXRhID0gbmV3IEZvcm1EYXRhKCQoJyNmb3JtX2dyb3VwZScpWzBdKVxuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fZ3JvdXBlX25ldycsIHtzZW1lc3RyZTogc2VtZXN0cmV9KSxcbiAgICBkYXRhOiBkYXRhLFxuICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICBjb250ZW50VHlwZTogZmFsc2UsXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgJCgnI2dyb3VwZXNfc2VtZXN0cmUnKS5lbXB0eSgpLmxvYWQoUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fZ3JvdXBlX2xpc3RlX3NlbWVzdHJlJywge3NlbWVzdHJlOiBzZW1lc3RyZX0pKVxuICAgICAgYWRkQ2FsbG91dCgnTWlzZSDDoCBqb3VyIGR1IHBhcmNvdXJzIGFzc29jacOpIGF1IGdyb3VwZScsICdzdWNjZXNzJylcbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2FkZFR5cGVHcm91cGUnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgY29uc3Qgc2VtZXN0cmUgPSAkKHRoaXMpLmRhdGEoJ3NlbWVzdHJlJylcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX3R5cGVfZ3JvdXBlX25ldycsIHtzZW1lc3RyZTogc2VtZXN0cmV9KSxcbiAgICBkYXRhOiB7XG4gICAgICBsaWJlbGxlOiAkKCcjdHlwZWdyb3VwZV9saWJlbGxlJykudmFsKCksXG4gICAgICB0eXBlOiAkKCcjdHlwZWdyb3VwZV90eXBlJykudmFsKCksXG4gICAgICBkZWZhdXQ6ICQoJyN0eXBlZ3JvdXBlX2RlZmF1dCcpLnZhbCgpXG4gICAgfSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAkKCcjZ3JvdXBlc19zZW1lc3RyZScpLmVtcHR5KCkubG9hZChSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9ncm91cGVfbGlzdGVfc2VtZXN0cmUnLCB7c2VtZXN0cmU6IHNlbWVzdHJlfSkpXG4gICAgICAkKCcjdHlwZV9ncm91cGVzX3NlbWVzdHJlJykuZW1wdHkoKS5sb2FkKFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX3R5cGVfZ3JvdXBlX2xpc3RlX3NlbWVzdHJlJywge3NlbWVzdHJlOiBzZW1lc3RyZX0pKVxuICAgICAgYWRkQ2FsbG91dCgnQWpvdXQgZFxcJ3VuIHR5cGUgZGUgZ3JvdXBlJywgJ3N1Y2Nlc3MnKVxuXG4gICAgfVxuICB9KVxufSlcblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcuY2hhbmdlRGVmYXV0JywgZnVuY3Rpb24gKGUpIHtcbiAgY29uc3Qgc2VtZXN0cmUgPSAkKHRoaXMpLmRhdGEoJ3NlbWVzdHJlJylcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGUuc3RvcFByb3BhZ2F0aW9uKClcblxuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fdHlwZV9ncm91cGVfZGVmYXV0Jywge1xuICAgICAgc2VtZXN0cmU6IHNlbWVzdHJlLFxuICAgICAgdHlwZWdyb3VwZTogJCh0aGlzKS5kYXRhKCd0eXBlLWdyb3VwZScpXG4gICAgfSksXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgZGF0YToge1xuICAgICAgZGVmYXV0OiAkKHRoaXMpLnByb3AoJ2NoZWNrZWQnKVxuICAgIH0sXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgJCgnI3R5cGVfZ3JvdXBlc19zZW1lc3RyZScpLmVtcHR5KCkubG9hZChSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl90eXBlX2dyb3VwZV9saXN0ZV9zZW1lc3RyZScsIHtzZW1lc3RyZTogc2VtZXN0cmV9KSlcbiAgICAgIGFkZENhbGxvdXQoJ1R5cGUgZGUgZ3JvdXBlIHBhciBkw6lmYXV0IGVucmVnaXN0csOpZScsICdzdWNjZXNzJylcbiAgICB9LCBlcnJvcjogZnVuY3Rpb24gKCkge1xuICAgICAgYWRkQ2FsbG91dCgnRXJyZXVyIGxvcnMgZGUgbFxcJ2VucmVnaXN0cmVtZW50JywgJ2RhbmdlcicpXG4gICAgfVxuICB9KVxuXG59KVxuXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvdXRpbC5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDAxLzEyLzIwMjAgMjI6MDRcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXG5cbmxldCAkc3RvcENhdGNoRW50ZXIgPSBmYWxzZVxuXG5mdW5jdGlvbiByZWFkVXJsTWVudSAoJHVybCkge1xuICBjb25zdCAkZWx0ID0gJHVybC5zcGxpdCgnLycpXG4gIGxldCAkZmlyc3RFbHQgPSAyXG4gIGlmICgkZWx0WzFdID09PSAnaW5kZXgucGhwJykge1xuICAgIGlmICgkZWx0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICRmaXJzdEVsdCA9IDNcbiAgICB9XG4gIH1cblxuICBpZiAoJGVsdFskZmlyc3RFbHRdID09PSAnc3VwZXItYWRtaW5pc3RyYXRpb24nKSB7XG4gICAgJGZpcnN0RWx0ID0gJGZpcnN0RWx0ICsgMVxuICB9XG5cbiAgaWYgKCRlbHRbJGVsdC5sZW5ndGggLSAxXSA9PT0gJycpIHtcbiAgICAkZWx0LnBvcCgpXG4gIH1cblxuICAkKCcubWVudS1pdGVtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICQoJyNtZW51LScgKyAkZWx0WyRmaXJzdEVsdF0pLmFkZENsYXNzKCdhY3RpdmUnKVxufVxuXG4vL2NvbG9yaXNlIGxlIGJvbiBtZW51XG5yZWFkVXJsTWVudSgkKGxvY2F0aW9uKS5hdHRyKCdwYXRobmFtZScpKVxuXG5Td2FsLm1peGluKHtcbiAgY3VzdG9tQ2xhc3M6IHtcbiAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgfSxcbiAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG59KVxuLy9wb3AgdXAgZGUgY29uZmlybWF0aW9uIGRlIHN1cHByZXNzaW9uXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnN1cHByaW1lcicsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBjb25zdCB1cmwgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKVxuICBjb25zdCBjc3JmID0gJCh0aGlzKS5kYXRhKCdjc3JmJylcbiAgU3dhbC5maXJlKHtcbiAgICB0aXRsZTogJ0NvbmZpcm1lciBsYSBzdXBwcmVzc2lvbiA/JyxcbiAgICB0ZXh0OiAnTFxcJ29ww6lyYXRpb24gbmUgcG91cnJhIHBhcyDDqnRyZSBhbm51bMOpZS4nLFxuICAgIGljb246ICd3YXJuaW5nJyxcbiAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyMzMDg1ZDYnLFxuICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiAnI2QzMycsXG4gICAgY29uZmlybUJ1dHRvblRleHQ6ICdPdWksIGplIGNvbmZpcm1lJyxcbiAgICBjYW5jZWxCdXR0b25UZXh0OiAnTm9uLCBBbm51bGVyJyxcbiAgICBjdXN0b21DbGFzczoge1xuICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICB9LFxuICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICBpZiAocmVzdWx0LnZhbHVlKSB7XG4gICAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgdHlwZTogJ0RFTEVURScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBfdG9rZW46IGNzcmZcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgaWYgKGlkLmhhc093blByb3BlcnR5KCdyZWRpcmVjdCcpICYmIGlkLmhhc093blByb3BlcnR5KCd1cmwnKSkge1xuICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGlkLnVybFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL3Qucm93KFwiI2xpZ25lX1wiK2lkKS5yZW1vdmUoKS5kcmF3KCk7ID08IGRhdGF0dGFibGUgdG9kbzogcmVtb3ZlIGxpZ25lIHNpIGRhdGF0YWJsZSA/PyBwcm9ibMOobWUgZGFucyBhZG0+cGVyc29ubmVsXG4gICAgICAgICAgICAkKCcjbGlnbmVfJyArIGlkKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpXG4gICAgICAgICAgICBhZGRDYWxsb3V0KCdTdXBwcmVzc2lvbiBlZmZlY3R1w6llIGF2ZWMgc3VjY8OocycsICdzdWNjZXNzJylcbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgIHRpdGxlOiAnU3VwcHJpbcOpIScsXG4gICAgICAgICAgICAgIHRleHQ6ICdMXFwnZW5yZWdpc3RyZW1lbnQgYSDDqXTDqSBzdXBwcmltw6kuJyxcbiAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIGFqYXhPcHRpb25zLCB0aHJvd25FcnJvcikge1xuICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICB0aXRsZTogJ0VycmV1ciBsb3JzIGRlIGxhIHN1cHByZXNzaW9uIScsXG4gICAgICAgICAgICB0ZXh0OiAnTWVyY2kgZGUgcmVub3V2ZWxlciBsXFwnb3DDqXJhdGlvbicsXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgICAgfSlcbiAgICAgICAgICBhZGRDYWxsb3V0KCdFcnJldXIgbG9ycyBkZSBsYSB0ZW50YXRpdmUgZGUgc3VwcHJlc3Npb24nLCAnZGFuZ2VyJylcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgIH0gZWxzZSBpZiAoXG4gICAgICAvLyBSZWFkIG1vcmUgYWJvdXQgaGFuZGxpbmcgZGlzbWlzc2Fsc1xuICAgICAgcmVzdWx0LmRpc21pc3MgPT09ICdjYW5jZWwnXG4gICAgKSB7XG4gICAgICBTd2FsLmZpcmUoe1xuICAgICAgICB0aXRsZTogJ0NhbmNlbGxlZCcsXG4gICAgICAgIHRleHQ6ICdPSyEgVG91dCBlc3QgY29tbWUgYXZhbnQgIScsXG4gICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICB9LFxuICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuICB9KVxufSlcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENhbGxvdXQgKG1lc3NhZ2UsIGxhYmVsKSB7XG4gIGNvbnNvbGUubG9nKCdjYWxsb3V0JylcbiAgdmFyIHRyYW5zbGF0ZSA9IG5ldyBBcnJheSgpXG4gIHRyYW5zbGF0ZVsnc3VjY2VzcyddID0gJ1N1Y2PDqHMnXG4gIHRyYW5zbGF0ZVsnZGFuZ2VyJ10gPSAnRXJyZXVyJ1xuICB0cmFuc2xhdGVbJ3dhcm5pbmcnXSA9ICdBdHRlbnRpb24nXG5cbiAgY29uc3QgaHRtbCA9ICc8ZGl2IGNsYXNzPVwiY2FsbG91dCBjYWxsb3V0LScgKyBsYWJlbCArICdcIiByb2xlPVwiYWxlcnRcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiY2FsbG91dFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4mdGltZXM7PC9zcGFuPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxoNT4nICsgdHJhbnNsYXRlW2xhYmVsXSArICc8L2g1PlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxwPicgKyBtZXNzYWdlICsgJzwvcD5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgIDwvZGl2PidcblxuICAkKCcjbWFpbkNvbnRlbnQnKS5wcmVwZW5kKGh0bWwpLnNsaWRlRG93bignc2xvdycpXG4gICQoJy5jYWxsb3V0JykuZGVsYXkoNTAwMCkuc2xpZGVVcCgnc2xvdycpXG59XG5cbi8vRWRpdGFibGVcbmxldCBteUVkaXRJbml0aWFsQ29udGVudCA9ICcnXG5sZXQgdHlwZSA9ICd0ZXh0J1xubGV0IEVkaXRPbkxpbmUgPSBmYWxzZVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm15ZWRpdCcsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBteUVkaXRJbml0aWFsQ29udGVudCA9ICQodGhpcylcbiAgbGV0IGh0bWwgPSAnJ1xuICBFZGl0T25MaW5lID0gdHJ1ZVxuICBpZiAodHlwZW9mICgkKHRoaXMpLmRhdGEoJ3R5cGUnKSkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdHlwZSA9ICQodGhpcykuZGF0YSgndHlwZScpXG4gIH1cblxuICBpZiAoJCh0aGlzKS5kYXRhKCd0eXBlJykgPT09ICdzZWxlY3QnKSB7XG4gICAgLy90b2RvOiBBIGZpbmFsaXNlclxuICB9IGVsc2UgaWYgKCQodGhpcykuZGF0YSgndHlwZScpID09PSAndGV4dGFyZWEnKSB7XG4gICAgaHRtbCA9IGdlbmVyZVRleHRBcmVhKCQodGhpcykpXG4gIH0gZWxzZSB7XG4gICAgaHRtbCA9IGdlbmVyZUlucHV0KCQodGhpcykpXG4gIH1cbiAgJCh0aGlzKS5yZXBsYWNlV2l0aChodG1sKVxuICAkKCcjbXllZGl0LWlucHV0JykuZm9jdXMoKVxufSlcblxuJChkb2N1bWVudCkub24oJ2tleXVwJywgJyNteWVkaXQtaW5wdXQnLCBmdW5jdGlvbiAoZSkge1xuICBpZiAoZS5rZXlDb2RlID09PSAxMyAmJiAkc3RvcENhdGNoRW50ZXIgPT09IGZhbHNlKSB7XG4gICAgdXBkYXRlRGF0YSgpXG4gIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI215ZWRpdC12YWxpZGUnLCBmdW5jdGlvbiAoZSkge1xuICAkc3RvcENhdGNoRW50ZXIgPSBmYWxzZVxuICBlLnByZXZlbnREZWZhdWx0KClcbiAgdXBkYXRlRGF0YSgpXG59KVxuXG4kKGRvY3VtZW50KS5vbigna2V5cHJlc3MnLCBmdW5jdGlvbiAoZSkge1xuICBpZiAoRWRpdE9uTGluZSA9PT0gdHJ1ZSAmJiAkc3RvcENhdGNoRW50ZXIgPT09IGZhbHNlICYmIGUud2hpY2ggPT09IDEzKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdXBkYXRlRGF0YSgpXG4gIH1cblxuICBpZiAoRWRpdE9uTGluZSA9PT0gdHJ1ZSAmJiAkc3RvcENhdGNoRW50ZXIgPT09IGZhbHNlICYmIGUud2hpY2ggPT09IDI3KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG4gIH1cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbXllZGl0LWFubnVsZScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbn0pXG5cbmZ1bmN0aW9uIHVwZGF0ZURhdGEgKCkge1xuICBsZXQgdmFsID0gJCgnI215ZWRpdC1pbnB1dCcpLnZhbCgpXG4gICQuYWpheCh7XG4gICAgdXJsOiBteUVkaXRJbml0aWFsQ29udGVudC5hdHRyKCdocmVmJyksXG4gICAgZGF0YToge1xuICAgICAgZmllbGQ6IG15RWRpdEluaXRpYWxDb250ZW50LmRhdGEoJ2ZpZWxkJyksXG4gICAgICB2YWx1ZTogdmFsLFxuICAgICAgdHlwZTogdHlwZVxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgbXlFZGl0SW5pdGlhbENvbnRlbnQuaHRtbCh2YWwpXG4gICAgICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbiAgICAgIEVkaXRPbkxpbmUgPSBmYWxzZVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gZ2VuZXJlVGV4dEFyZWEgKCRvYmopIHtcbiAgJHN0b3BDYXRjaEVudGVyID0gdHJ1ZVxuICByZXR1cm4gJzxkaXYgaWQ9XCJteUVkaXQtem9uZVwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHJvd3M9XCI1XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIm15ZWRpdC1pbnB1dFwiPicgKyAkb2JqLmh0bWwoKS50cmltKCkgKyAnPC90ZXh0YXJlYT5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XFxuJyArXG4gICAgJyA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzLW91dGxpbmVcIiBpZD1cIm15ZWRpdC12YWxpZGVcIj48aSBjbGFzcz1cImZhcyBmYS1jaGVja1wiPjwvaT48L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyLW91dGxpbmVcIiBpZD1cIm15ZWRpdC1hbm51bGVcIj48aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT48L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nXG59XG5cbmZ1bmN0aW9uIGdlbmVyZUlucHV0ICgkb2JqKSB7XG5cbiAgcmV0dXJuICc8ZGl2IGlkPVwibXlFZGl0LXpvbmVcIiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwibXllZGl0LWlucHV0XCIgdmFsdWU9XCInICsgJG9iai5odG1sKCkudHJpbSgpICsgJ1wiID5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XFxuJyArXG4gICAgJyA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzLW91dGxpbmVcIiBpZD1cIm15ZWRpdC12YWxpZGVcIj48aSBjbGFzcz1cImZhcyBmYS1jaGVja1wiPjwvaT48L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyLW91dGxpbmVcIiBpZD1cIm15ZWRpdC1hbm51bGVcIj48aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT48L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nXG59XG5cbmpRdWVyeS5mbi5kYXRhQXR0ciA9IGZ1bmN0aW9uIChuYW1lLCBkZWYpIHtcbiAgcmV0dXJuICQodGhpcylbMF0uZ2V0QXR0cmlidXRlKCdkYXRhLScgKyBuYW1lKSB8fCBkZWZcbn1cblxualF1ZXJ5LmZuLmhhc0RhdGFBdHRyID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuICQodGhpcylbMF0uaGFzQXR0cmlidXRlKCdkYXRhLScgKyBuYW1lKVxufVxuXG5mdW5jdGlvbiBkYXRhVG9PcHRpb24gKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUucmVwbGFjZSgvLShbYS16XSkvZywgZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4geFsxXS50b1VwcGVyQ2FzZSgpXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhT3B0aW9ucyAoZWwsIGNhc3RMaXN0KSB7XG4gIHZhciBvcHRpb25zID0ge31cbiAgJC5lYWNoKCQoZWwpLmRhdGEoKSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcblxuICAgIGtleSA9IGRhdGFUb09wdGlvbihrZXkpXG5cbiAgICAvLyBFc2NhcGUgZGF0YS1wcm92aWRlXG4gICAgaWYgKGtleSA9PSAncHJvdmlkZScpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChjYXN0TGlzdCAhPSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciB0eXBlID0gY2FzdExpc3Rba2V5XVxuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2Jvb2wnOlxuICAgICAgICAgIHZhbHVlID0gQm9vbGVhbih2YWx1ZSlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ251bSc6XG4gICAgICAgICAgdmFsdWUgPSBOdW1iZXIodmFsdWUpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnLCcpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBkZWZhdWx0OlxuXG4gICAgICB9XG4gICAgfVxuXG4gICAgb3B0aW9uc1trZXldID0gdmFsdWVcbiAgfSlcblxuICByZXR1cm4gb3B0aW9uc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52YWxpZENoYW1wcyAoJG9iaikge1xuICAkb2JqLnJlbW92ZUNsYXNzKCdpcy12YWxpZCcpLmFkZENsYXNzKCdpcy1pbnZhbGlkJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkQ2hhbXBzICgkb2JqKSB7XG4gICRvYmoucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKS5hZGRDbGFzcygnaXMtdmFsaWQnKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGxldGVDaGFtcHMgKCRvYmopIHtcbiAgJG9iai5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpLnJlbW92ZUNsYXNzKCdpcy12YWxpZCcpXG59XG4iXSwic291cmNlUm9vdCI6IiJ9
