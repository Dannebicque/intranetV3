// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/public/build/adm.scolarite.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 04/12/2020 13:44

(window['webpackJsonp'] = window['webpackJsonp'] || []).push([['adm.scolarite'], {

  /***/ './assets/js/pages/adm.scolarite.js':
  /*!******************************************!*\
    !*** ./assets/js/pages/adm.scolarite.js ***!
    \******************************************/
  /*! no exports provided */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    'use strict'
    __webpack_require__.r(__webpack_exports__);
    /* WEBPACK VAR INJECTION */
    (function ($) {/* harmony import */
      var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ './assets/js/util.js')
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.scolarite.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 01/12/2020 22:04

      $(document).on('click', '#afficheEtudiants', function (e) {
        e.preventDefault()
        e.stopPropagation()
        var semestre = $('#semestre')
        var anneeUniversitaire = $('#anneeUniversitaire')

        if (semestre.val() !== '' && anneeUniversitaire.val() !== '') {
          Object(_util__WEBPACK_IMPORTED_MODULE_0__['validChamps'])(anneeUniversitaire)
          Object(_util__WEBPACK_IMPORTED_MODULE_0__['validChamps'])(semestre)
          $('#zone').empty().load(Routing.generate('administration_scolarite_saisie_promo_ajax', {
            semestre: semestre.val(),
            anneeUniversitaire: anneeUniversitaire.val()
          }))
        } else {
          Object(_util__WEBPACK_IMPORTED_MODULE_0__['invalidChamps'])(anneeUniversitaire)
          Object(_util__WEBPACK_IMPORTED_MODULE_0__['invalidChamps'])(semestre)
        }
      })
      $(document).on('click', '#importEtudiants', function (e) {
        e.preventDefault()
        e.stopPropagation()
        var semestre = $('#semestre')
        var anneeUniversitaire = $('#anneeUniversitaire')

        if (semestre.val() !== '' && anneeUniversitaire.val() !== '') {
          Object(_util__WEBPACK_IMPORTED_MODULE_0__['validChamps'])(anneeUniversitaire)
          Object(_util__WEBPACK_IMPORTED_MODULE_0__['validChamps'])(semestre)
          $('#zone').empty().load(Routing.generate('administration_scolarite_saisie_promo_import_ajax', {
            semestre: semestre.val(),
            anneeUniversitaire: anneeUniversitaire.val()
          }))
        } else {
          Object(_util__WEBPACK_IMPORTED_MODULE_0__['invalidChamps'])(anneeUniversitaire)
          Object(_util__WEBPACK_IMPORTED_MODULE_0__['invalidChamps'])(semestre)
        }
      })
      $(document).on('change', '#semestre', function () {
        Object(_util__WEBPACK_IMPORTED_MODULE_0__['completeChamps'])($(this))
      })
      $(document).on('change', '#anneeUniversitaire', function () {
        Object(_util__WEBPACK_IMPORTED_MODULE_0__['completeChamps'])($(this))
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

}, [['./assets/js/pages/adm.scolarite.js', 'runtime', 'vendors~absences~adm.absences~adm.alternances~adm.articles~adm.bornes~adm.configuration~adm.edt~adm.~b8aa102b', 'vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~b8fda26e', 'vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~92da351e', 'vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~14b603b0', 'vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.groupe~adm.justificat~2f9ea679']]])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvYWRtLnNjb2xhcml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdXRpbC5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInNlbWVzdHJlIiwiYW5uZWVVbml2ZXJzaXRhaXJlIiwidmFsIiwidmFsaWRDaGFtcHMiLCJlbXB0eSIsImxvYWQiLCJSb3V0aW5nIiwiZ2VuZXJhdGUiLCJpbnZhbGlkQ2hhbXBzIiwiY29tcGxldGVDaGFtcHMiLCIkc3RvcENhdGNoRW50ZXIiLCJyZWFkVXJsTWVudSIsIiR1cmwiLCIkZWx0Iiwic3BsaXQiLCIkZmlyc3RFbHQiLCJsZW5ndGgiLCJwb3AiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwibG9jYXRpb24iLCJhdHRyIiwiU3dhbCIsIm1peGluIiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwiYnV0dG9uc1N0eWxpbmciLCJ1cmwiLCJjc3JmIiwiZGF0YSIsImZpcmUiLCJ0aXRsZSIsInRleHQiLCJpY29uIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25Db2xvciIsImNhbmNlbEJ1dHRvbkNvbG9yIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwidGhlbiIsInJlc3VsdCIsInZhbHVlIiwiYWpheCIsInR5cGUiLCJfdG9rZW4iLCJzdWNjZXNzIiwiaWQiLCJoYXNPd25Qcm9wZXJ0eSIsImhyZWYiLCJjbG9zZXN0IiwicmVtb3ZlIiwiYWRkQ2FsbG91dCIsImVycm9yIiwieGhyIiwiYWpheE9wdGlvbnMiLCJ0aHJvd25FcnJvciIsImRpc21pc3MiLCJtZXNzYWdlIiwibGFiZWwiLCJjb25zb2xlIiwibG9nIiwidHJhbnNsYXRlIiwiQXJyYXkiLCJodG1sIiwicHJlcGVuZCIsInNsaWRlRG93biIsImRlbGF5Iiwic2xpZGVVcCIsIm15RWRpdEluaXRpYWxDb250ZW50IiwiRWRpdE9uTGluZSIsImdlbmVyZVRleHRBcmVhIiwiZ2VuZXJlSW5wdXQiLCJyZXBsYWNlV2l0aCIsImZvY3VzIiwia2V5Q29kZSIsInVwZGF0ZURhdGEiLCJ3aGljaCIsImZpZWxkIiwibWV0aG9kIiwiJG9iaiIsInRyaW0iLCJqUXVlcnkiLCJmbiIsImRhdGFBdHRyIiwibmFtZSIsImRlZiIsImdldEF0dHJpYnV0ZSIsImhhc0RhdGFBdHRyIiwiaGFzQXR0cmlidXRlIiwiZGF0YVRvT3B0aW9uIiwicmVwbGFjZSIsIngiLCJ0b1VwcGVyQ2FzZSIsImdldERhdGFPcHRpb25zIiwiZWwiLCJjYXN0TGlzdCIsIm9wdGlvbnMiLCJlYWNoIiwia2V5IiwidW5kZWZpbmVkIiwiQm9vbGVhbiIsIk51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsRUFBWixDQUFlLE9BQWYsRUFBd0IsbUJBQXhCLEVBQTZDLFVBQVVDLENBQVYsRUFBYTtBQUN4REEsR0FBQyxDQUFDQyxjQUFGO0FBQ0FELEdBQUMsQ0FBQ0UsZUFBRjtBQUNBLE1BQU1DLFFBQVEsR0FBR04sQ0FBQyxDQUFDLFdBQUQsQ0FBbEI7QUFDQSxNQUFNTyxrQkFBa0IsR0FBR1AsQ0FBQyxDQUFDLHFCQUFELENBQTVCOztBQUVBLE1BQUlNLFFBQVEsQ0FBQ0UsR0FBVCxPQUFtQixFQUFuQixJQUF5QkQsa0JBQWtCLENBQUNDLEdBQW5CLE9BQTZCLEVBQTFELEVBQThEO0FBQzVEQyw2REFBVyxDQUFDRixrQkFBRCxDQUFYO0FBQ0FFLDZEQUFXLENBQUNILFFBQUQsQ0FBWDtBQUNBTixLQUFDLENBQUMsT0FBRCxDQUFELENBQVdVLEtBQVgsR0FBbUJDLElBQW5CLENBQXdCQyxPQUFPLENBQUNDLFFBQVIsQ0FBaUIsNENBQWpCLEVBQStEO0FBQ3JGUCxj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LEdBQUc0RCxNQUFNLENBQUM1RCxLQUFELENBQWQ7QUFDQTs7QUFFRixhQUFLLE9BQUw7QUFDRUEsZUFBSyxHQUFHQSxLQUFLLENBQUM1QixLQUFOLENBQVksR0FBWixDQUFSO0FBQ0E7O0FBRUY7QUFiRjtBQWdCRDs7QUFFRG1GLFdBQU8sQ0FBQ0UsR0FBRCxDQUFQLEdBQWV6RCxLQUFmO0FBQ0QsR0E5QkQ7QUFnQ0EsU0FBT3VELE9BQVA7QUFDRDtBQUVNLFNBQVN6RixhQUFULENBQXdCd0UsSUFBeEIsRUFBOEI7QUFDbkNBLE1BQUksQ0FBQzlELFdBQUwsQ0FBaUIsVUFBakIsRUFBNkJDLFFBQTdCLENBQXNDLFlBQXRDO0FBQ0Q7QUFFTSxTQUFTaEIsV0FBVCxDQUFzQjZFLElBQXRCLEVBQTRCO0FBQ2pDQSxNQUFJLENBQUM5RCxXQUFMLENBQWlCLFlBQWpCLEVBQStCQyxRQUEvQixDQUF3QyxVQUF4QztBQUNEO0FBRU0sU0FBU1YsY0FBVCxDQUF5QnVFLElBQXpCLEVBQStCO0FBQ3BDQSxNQUFJLENBQUM5RCxXQUFMLENBQWlCLFlBQWpCLEVBQStCQSxXQUEvQixDQUEyQyxVQUEzQztBQUNELEMiLCJmaWxlIjoiYWRtLnNjb2xhcml0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9wYWdlcy9hZG0uc2NvbGFyaXRlLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMDEvMTIvMjAyMCAyMjowNFxuaW1wb3J0IHtpbnZhbGlkQ2hhbXBzLCB2YWxpZENoYW1wcywgY29tcGxldGVDaGFtcHN9IGZyb20gJy4uL3V0aWwnXG5cblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNhZmZpY2hlRXR1ZGlhbnRzJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgY29uc3Qgc2VtZXN0cmUgPSAkKCcjc2VtZXN0cmUnKVxuICBjb25zdCBhbm5lZVVuaXZlcnNpdGFpcmUgPSAkKCcjYW5uZWVVbml2ZXJzaXRhaXJlJylcblxuICBpZiAoc2VtZXN0cmUudmFsKCkgIT09ICcnICYmIGFubmVlVW5pdmVyc2l0YWlyZS52YWwoKSAhPT0gJycpIHtcbiAgICB2YWxpZENoYW1wcyhhbm5lZVVuaXZlcnNpdGFpcmUpXG4gICAgdmFsaWRDaGFtcHMoc2VtZXN0cmUpXG4gICAgJCgnI3pvbmUnKS5lbXB0eSgpLmxvYWQoUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fc2NvbGFyaXRlX3NhaXNpZV9wcm9tb19hamF4Jywge1xuICAgICAgc2VtZXN0cmU6IHNlbWVzdHJlLnZhbCgpLFxuICAgICAgYW5uZWVVbml2ZXJzaXRhaXJlOiBhbm5lZVVuaXZlcnNpdGFpcmUudmFsKClcbiAgICB9KSlcbiAgfSBlbHNlIHtcbiAgICBpbnZhbGlkQ2hhbXBzKGFubmVlVW5pdmVyc2l0YWlyZSlcbiAgICBpbnZhbGlkQ2hhbXBzKHNlbWVzdHJlKVxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2ltcG9ydEV0dWRpYW50cycsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gIGNvbnN0IHNlbWVzdHJlID0gJCgnI3NlbWVzdHJlJylcbiAgY29uc3QgYW5uZWVVbml2ZXJzaXRhaXJlID0gJCgnI2FubmVlVW5pdmVyc2l0YWlyZScpXG5cbiAgaWYgKHNlbWVzdHJlLnZhbCgpICE9PSAnJyAmJiBhbm5lZVVuaXZlcnNpdGFpcmUudmFsKCkgIT09ICcnKSB7XG4gICAgdmFsaWRDaGFtcHMoYW5uZWVVbml2ZXJzaXRhaXJlKVxuICAgIHZhbGlkQ2hhbXBzKHNlbWVzdHJlKVxuICAgICQoJyN6b25lJykuZW1wdHkoKS5sb2FkKFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX3Njb2xhcml0ZV9zYWlzaWVfcHJvbW9faW1wb3J0X2FqYXgnLCB7XG4gICAgICBzZW1lc3RyZTogc2VtZXN0cmUudmFsKCksXG4gICAgICBhbm5lZVVuaXZlcnNpdGFpcmU6IGFubmVlVW5pdmVyc2l0YWlyZS52YWwoKVxuICAgIH0pKVxuICB9IGVsc2Uge1xuICAgIGludmFsaWRDaGFtcHMoYW5uZWVVbml2ZXJzaXRhaXJlKVxuICAgIGludmFsaWRDaGFtcHMoc2VtZXN0cmUpXG4gIH1cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnI3NlbWVzdHJlJywgZnVuY3Rpb24gKCkge1xuICBjb21wbGV0ZUNoYW1wcygkKHRoaXMpKVxufSlcblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcjYW5uZWVVbml2ZXJzaXRhaXJlJywgZnVuY3Rpb24gKCkge1xuICBjb21wbGV0ZUNoYW1wcygkKHRoaXMpKVxufSlcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy91dGlsLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMDEvMTIvMjAyMCAyMjowNFxuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0MidcblxubGV0ICRzdG9wQ2F0Y2hFbnRlciA9IGZhbHNlXG5cbmZ1bmN0aW9uIHJlYWRVcmxNZW51ICgkdXJsKSB7XG4gIGNvbnN0ICRlbHQgPSAkdXJsLnNwbGl0KCcvJylcbiAgbGV0ICRmaXJzdEVsdCA9IDJcbiAgaWYgKCRlbHRbMV0gPT09ICdpbmRleC5waHAnKSB7XG4gICAgaWYgKCRlbHQubGVuZ3RoID4gMSkge1xuICAgICAgJGZpcnN0RWx0ID0gM1xuICAgIH1cbiAgfVxuXG4gIGlmICgkZWx0WyRmaXJzdEVsdF0gPT09ICdzdXBlci1hZG1pbmlzdHJhdGlvbicpIHtcbiAgICAkZmlyc3RFbHQgPSAkZmlyc3RFbHQgKyAxXG4gIH1cblxuICBpZiAoJGVsdFskZWx0Lmxlbmd0aCAtIDFdID09PSAnJykge1xuICAgICRlbHQucG9wKClcbiAgfVxuXG4gICQoJy5tZW51LWl0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgJCgnI21lbnUtJyArICRlbHRbJGZpcnN0RWx0XSkuYWRkQ2xhc3MoJ2FjdGl2ZScpXG59XG5cbi8vY29sb3Jpc2UgbGUgYm9uIG1lbnVcbnJlYWRVcmxNZW51KCQobG9jYXRpb24pLmF0dHIoJ3BhdGhuYW1lJykpXG5cblN3YWwubWl4aW4oe1xuICBjdXN0b21DbGFzczoge1xuICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICB9LFxuICBidXR0b25zU3R5bGluZzogZmFsc2Vcbn0pXG4vL3BvcCB1cCBkZSBjb25maXJtYXRpb24gZGUgc3VwcHJlc3Npb25cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuc3VwcHJpbWVyJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IHVybCA9ICQodGhpcykuYXR0cignaHJlZicpXG4gIGNvbnN0IGNzcmYgPSAkKHRoaXMpLmRhdGEoJ2NzcmYnKVxuICBTd2FsLmZpcmUoe1xuICAgIHRpdGxlOiAnQ29uZmlybWVyIGxhIHN1cHByZXNzaW9uID8nLFxuICAgIHRleHQ6ICdMXFwnb3DDqXJhdGlvbiBuZSBwb3VycmEgcGFzIMOqdHJlIGFubnVsw6llLicsXG4gICAgaWNvbjogJ3dhcm5pbmcnLFxuICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgY29uZmlybUJ1dHRvbkNvbG9yOiAnIzMwODVkNicsXG4gICAgY2FuY2VsQnV0dG9uQ29sb3I6ICcjZDMzJyxcbiAgICBjb25maXJtQnV0dG9uVGV4dDogJ091aSwgamUgY29uZmlybWUnLFxuICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdOb24sIEFubnVsZXInLFxuICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgIH0sXG4gICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICAgICQuYWpheCh7XG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICB0eXBlOiAnREVMRVRFJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIF90b2tlbjogY3NyZlxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICBpZiAoaWQuaGFzT3duUHJvcGVydHkoJ3JlZGlyZWN0JykgJiYgaWQuaGFzT3duUHJvcGVydHkoJ3VybCcpKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gaWQudXJsXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vdC5yb3coXCIjbGlnbmVfXCIraWQpLnJlbW92ZSgpLmRyYXcoKTsgPTwgZGF0YXR0YWJsZSB0b2RvOiByZW1vdmUgbGlnbmUgc2kgZGF0YXRhYmxlID8/IHByb2Jsw6htZSBkYW5zIGFkbT5wZXJzb25uZWxcbiAgICAgICAgICAgICQoJyNsaWduZV8nICsgaWQpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKClcbiAgICAgICAgICAgIGFkZENhbGxvdXQoJ1N1cHByZXNzaW9uIGVmZmVjdHXDqWUgYXZlYyBzdWNjw6hzJywgJ3N1Y2Nlc3MnKVxuICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdTdXBwcmltw6khJyxcbiAgICAgICAgICAgICAgdGV4dDogJ0xcXCdlbnJlZ2lzdHJlbWVudCBhIMOpdMOpIHN1cHByaW3DqS4nLFxuICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgYWpheE9wdGlvbnMsIHRocm93bkVycm9yKSB7XG4gICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgIHRpdGxlOiAnRXJyZXVyIGxvcnMgZGUgbGEgc3VwcHJlc3Npb24hJyxcbiAgICAgICAgICAgIHRleHQ6ICdNZXJjaSBkZSByZW5vdXZlbGVyIGxcXCdvcMOpcmF0aW9uJyxcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgICAgICB9KVxuICAgICAgICAgIGFkZENhbGxvdXQoJ0VycmV1ciBsb3JzIGRlIGxhIHRlbnRhdGl2ZSBkZSBzdXBwcmVzc2lvbicsICdkYW5nZXInKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgfSBlbHNlIGlmIChcbiAgICAgIC8vIFJlYWQgbW9yZSBhYm91dCBoYW5kbGluZyBkaXNtaXNzYWxzXG4gICAgICByZXN1bHQuZGlzbWlzcyA9PT0gJ2NhbmNlbCdcbiAgICApIHtcbiAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgIHRpdGxlOiAnQ2FuY2VsbGVkJyxcbiAgICAgICAgdGV4dDogJ09LISBUb3V0IGVzdCBjb21tZSBhdmFudCAhJyxcbiAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgIH0sXG4gICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG59KVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2FsbG91dCAobWVzc2FnZSwgbGFiZWwpIHtcbiAgY29uc29sZS5sb2coJ2NhbGxvdXQnKVxuICB2YXIgdHJhbnNsYXRlID0gbmV3IEFycmF5KClcbiAgdHJhbnNsYXRlWydzdWNjZXNzJ10gPSAnU3VjY8OocydcbiAgdHJhbnNsYXRlWydkYW5nZXInXSA9ICdFcnJldXInXG4gIHRyYW5zbGF0ZVsnd2FybmluZyddID0gJ0F0dGVudGlvbidcblxuICBjb25zdCBodG1sID0gJzxkaXYgY2xhc3M9XCJjYWxsb3V0IGNhbGxvdXQtJyArIGxhYmVsICsgJ1wiIHJvbGU9XCJhbGVydFwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJjYWxsb3V0XCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiZ0aW1lczs8L3NwYW4+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPGg1PicgKyB0cmFuc2xhdGVbbGFiZWxdICsgJzwvaDU+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPHA+JyArIG1lc3NhZ2UgKyAnPC9wPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgPC9kaXY+J1xuXG4gICQoJyNtYWluQ29udGVudCcpLnByZXBlbmQoaHRtbCkuc2xpZGVEb3duKCdzbG93JylcbiAgJCgnLmNhbGxvdXQnKS5kZWxheSg1MDAwKS5zbGlkZVVwKCdzbG93Jylcbn1cblxuLy9FZGl0YWJsZVxubGV0IG15RWRpdEluaXRpYWxDb250ZW50ID0gJydcbmxldCB0eXBlID0gJ3RleHQnXG5sZXQgRWRpdE9uTGluZSA9IGZhbHNlXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubXllZGl0JywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIG15RWRpdEluaXRpYWxDb250ZW50ID0gJCh0aGlzKVxuICBsZXQgaHRtbCA9ICcnXG4gIEVkaXRPbkxpbmUgPSB0cnVlXG4gIGlmICh0eXBlb2YgKCQodGhpcykuZGF0YSgndHlwZScpKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0eXBlID0gJCh0aGlzKS5kYXRhKCd0eXBlJylcbiAgfVxuXG4gIGlmICgkKHRoaXMpLmRhdGEoJ3R5cGUnKSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAvL3RvZG86IEEgZmluYWxpc2VyXG4gIH0gZWxzZSBpZiAoJCh0aGlzKS5kYXRhKCd0eXBlJykgPT09ICd0ZXh0YXJlYScpIHtcbiAgICBodG1sID0gZ2VuZXJlVGV4dEFyZWEoJCh0aGlzKSlcbiAgfSBlbHNlIHtcbiAgICBodG1sID0gZ2VuZXJlSW5wdXQoJCh0aGlzKSlcbiAgfVxuICAkKHRoaXMpLnJlcGxhY2VXaXRoKGh0bWwpXG4gICQoJyNteWVkaXQtaW5wdXQnKS5mb2N1cygpXG59KVxuXG4kKGRvY3VtZW50KS5vbigna2V5dXAnLCAnI215ZWRpdC1pbnB1dCcsIGZ1bmN0aW9uIChlKSB7XG4gIGlmIChlLmtleUNvZGUgPT09IDEzICYmICRzdG9wQ2F0Y2hFbnRlciA9PT0gZmFsc2UpIHtcbiAgICB1cGRhdGVEYXRhKClcbiAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XG4gICAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG4gIH1cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbXllZGl0LXZhbGlkZScsIGZ1bmN0aW9uIChlKSB7XG4gICRzdG9wQ2F0Y2hFbnRlciA9IGZhbHNlXG4gIGUucHJldmVudERlZmF1bHQoKVxuICB1cGRhdGVEYXRhKClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdrZXlwcmVzcycsIGZ1bmN0aW9uIChlKSB7XG4gIGlmIChFZGl0T25MaW5lID09PSB0cnVlICYmICRzdG9wQ2F0Y2hFbnRlciA9PT0gZmFsc2UgJiYgZS53aGljaCA9PT0gMTMpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB1cGRhdGVEYXRhKClcbiAgfVxuXG4gIGlmIChFZGl0T25MaW5lID09PSB0cnVlICYmICRzdG9wQ2F0Y2hFbnRlciA9PT0gZmFsc2UgJiYgZS53aGljaCA9PT0gMjcpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbiAgfVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNteWVkaXQtYW5udWxlJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxufSlcblxuZnVuY3Rpb24gdXBkYXRlRGF0YSAoKSB7XG4gIGxldCB2YWwgPSAkKCcjbXllZGl0LWlucHV0JykudmFsKClcbiAgJC5hamF4KHtcbiAgICB1cmw6IG15RWRpdEluaXRpYWxDb250ZW50LmF0dHIoJ2hyZWYnKSxcbiAgICBkYXRhOiB7XG4gICAgICBmaWVsZDogbXlFZGl0SW5pdGlhbENvbnRlbnQuZGF0YSgnZmllbGQnKSxcbiAgICAgIHZhbHVlOiB2YWwsXG4gICAgICB0eXBlOiB0eXBlXG4gICAgfSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICBteUVkaXRJbml0aWFsQ29udGVudC5odG1sKHZhbClcbiAgICAgICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxuICAgICAgRWRpdE9uTGluZSA9IGZhbHNlXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBnZW5lcmVUZXh0QXJlYSAoJG9iaikge1xuICAkc3RvcENhdGNoRW50ZXIgPSB0cnVlXG4gIHJldHVybiAnPGRpdiBpZD1cIm15RWRpdC16b25lXCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgcm93cz1cIjVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwibXllZGl0LWlucHV0XCI+JyArICRvYmouaHRtbCgpLnRyaW0oKSArICc8L3RleHRhcmVhPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cXG4nICtcbiAgICAnIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3Mtb3V0bGluZVwiIGlkPVwibXllZGl0LXZhbGlkZVwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZWNrXCI+PC9pPjwvYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXItb3V0bGluZVwiIGlkPVwibXllZGl0LWFubnVsZVwiPjxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPjwvYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDwvZGl2Pidcbn1cblxuZnVuY3Rpb24gZ2VuZXJlSW5wdXQgKCRvYmopIHtcblxuICByZXR1cm4gJzxkaXYgaWQ9XCJteUVkaXQtem9uZVwiIGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJteWVkaXQtaW5wdXRcIiB2YWx1ZT1cIicgKyAkb2JqLmh0bWwoKS50cmltKCkgKyAnXCIgPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cXG4nICtcbiAgICAnIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3Mtb3V0bGluZVwiIGlkPVwibXllZGl0LXZhbGlkZVwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZWNrXCI+PC9pPjwvYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXItb3V0bGluZVwiIGlkPVwibXllZGl0LWFubnVsZVwiPjxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPjwvYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDwvZGl2Pidcbn1cblxualF1ZXJ5LmZuLmRhdGFBdHRyID0gZnVuY3Rpb24gKG5hbWUsIGRlZikge1xuICByZXR1cm4gJCh0aGlzKVswXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtJyArIG5hbWUpIHx8IGRlZlxufVxuXG5qUXVlcnkuZm4uaGFzRGF0YUF0dHIgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gJCh0aGlzKVswXS5oYXNBdHRyaWJ1dGUoJ2RhdGEtJyArIG5hbWUpXG59XG5cbmZ1bmN0aW9uIGRhdGFUb09wdGlvbiAobmFtZSkge1xuICByZXR1cm4gbmFtZS5yZXBsYWNlKC8tKFthLXpdKS9nLCBmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiB4WzFdLnRvVXBwZXJDYXNlKClcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGFPcHRpb25zIChlbCwgY2FzdExpc3QpIHtcbiAgdmFyIG9wdGlvbnMgPSB7fVxuICAkLmVhY2goJChlbCkuZGF0YSgpLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuXG4gICAga2V5ID0gZGF0YVRvT3B0aW9uKGtleSlcblxuICAgIC8vIEVzY2FwZSBkYXRhLXByb3ZpZGVcbiAgICBpZiAoa2V5ID09ICdwcm92aWRlJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGNhc3RMaXN0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHR5cGUgPSBjYXN0TGlzdFtrZXldXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYm9vbCc6XG4gICAgICAgICAgdmFsdWUgPSBCb29sZWFuKHZhbHVlKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAnbnVtJzpcbiAgICAgICAgICB2YWx1ZSA9IE51bWJlcih2YWx1ZSlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnNwbGl0KCcsJylcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGRlZmF1bHQ6XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBvcHRpb25zW2tleV0gPSB2YWx1ZVxuICB9KVxuXG4gIHJldHVybiBvcHRpb25zXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZhbGlkQ2hhbXBzICgkb2JqKSB7XG4gICRvYmoucmVtb3ZlQ2xhc3MoJ2lzLXZhbGlkJykuYWRkQ2xhc3MoJ2lzLWludmFsaWQnKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRDaGFtcHMgKCRvYmopIHtcbiAgJG9iai5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpLmFkZENsYXNzKCdpcy12YWxpZCcpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wbGV0ZUNoYW1wcyAoJG9iaikge1xuICAkb2JqLnJlbW92ZUNsYXNzKCdpcy1pbnZhbGlkJykucmVtb3ZlQ2xhc3MoJ2lzLXZhbGlkJylcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
