// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/public/build/creneaux.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 04/12/2020 13:44

(window['webpackJsonp'] = window['webpackJsonp'] || []).push([['creneaux'], {

  /***/ './assets/js/pages/creneaux.js':
  /*!*************************************!*\
    !*** ./assets/js/pages/creneaux.js ***!
    \*************************************/
  /*! no exports provided */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    'use strict'
    __webpack_require__.r(__webpack_exports__);
    /* WEBPACK VAR INJECTION */
    (function ($) {/* harmony import */
      var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.parse-int */ './node_modules/core-js/modules/es.parse-int.js')
      /* harmony import */
      var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_0__)
      /* harmony import */
      var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ './assets/js/util.js')

// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/creneaux.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 06/09/2020 16:14

      $(document).on('click', '#btn_creneau_add', function () {
        var $annee = $('#change_annee_universitiare_temp').val()
        $.ajax({
          method: 'POST',
          data: {
            anneeUniversitaire: $annee,
            jour: $('#creneau_jour').val(),
            debut: $('#creneau_debut').val(),
            fin: $('#creneau_fin').val()
          },
          url: Routing.generate('administration_creneau_cours_new'),
          success: function success () {
            $('#liste_creneaux').empty().load(Routing.generate('administration_creneau_cours_liste', {
              annee_universitaire: $annee
            }))
            Object(_util__WEBPACK_IMPORTED_MODULE_1__['addCallout'])('Créneau ajouté avec succès', 'success')
          },
          error: function error () {
            Object(_util__WEBPACK_IMPORTED_MODULE_1__['addCallout'])('Erreur lors de l\'ajout du créneau', 'danger')
          }
        })
      })
      $(document).on('click', '.bloquercreneau', function () {
        var $cr = $(this)

        if ($cr.hasClass('bloquercreneau_eviter')) {
          updateCreneau('dispo', $cr.data('creneau'), $cr.data('semaine'))
          $cr.removeClass('bloquercreneau_eviter')
        } else if ($cr.hasClass('bloquercreneau_interdit')) {
          $cr.removeClass('bloquercreneau_interdit')
          $cr.addClass('bloquercreneau_eviter')
          updateCreneau('au', $cr.data('creneau'), $cr.data('semaine'))
        } else {
          $cr.addClass('bloquercreneau_interdit')
          updateCreneau('va', $cr.data('creneau'), $cr.data('semaine'))
        }
      })
      $(document).on('click', '.creneau', function () {
        var interdit = $('#nb_interdit')
        var eviter = $('#nb_eviter')
        var dispo = $('#nb_dispo')
        var heure = $(this).data('heure')
        var jour = $(this).dataAttr('jour')
        var nb_interdit = parseInt(interdit.text())
        var nb_eviter = parseInt(eviter.text())
        var nb_dispo = parseInt(dispo.text())

        if ($(this).hasClass('bloquercreneau_interdit')) {
          $(this).removeClass('bloquercreneau_interdit')
          $(this).addClass('bloquercreneau_eviter')
          nb_interdit--
          nb_eviter++
          updateDisponibilite(jour, heure, 'E')
        } else if ($(this).hasClass('bloquercreneau_eviter')) {
          $(this).removeClass('bloquercreneau_eviter')
          nb_eviter--
          nb_dispo++
          updateDisponibilite(jour, heure, 'D')
        } else {
          $(this).addClass('bloquercreneau_interdit')
          nb_interdit++
          nb_dispo--
          updateDisponibilite(jour, heure, 'I')
        }

        interdit.text(nb_interdit)
        eviter.text(nb_eviter)
        dispo.text(nb_dispo)
      })

      function updateDisponibilite ($jour, $heure, $etat) {
        $.ajax({
          url: Routing.generate('application_personnel_disponibilite_update'),
          data: {
            jour: $jour,
            heure: $heure,
            etat: $etat
          },
          method: 'POST'
        })
      }

      function updateCreneau ($type, $cr, $semaine) {
        $.ajax({
          url: Routing.generate('administration_creneau_bloque_modifie_etat'),
          data: {
            creneau: $cr,
            type: $type,
            semaine: $semaine
          },
          method: 'POST'
        })
      }

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
  }),

  /***/ './node_modules/core-js/internals/number-parse-int.js':
  /*!************************************************************!*\
    !*** ./node_modules/core-js/internals/number-parse-int.js ***!
    \************************************************************/
  /*! no static exports found */
  /***/ (function (module, exports, __webpack_require__) {

    var global = __webpack_require__(/*! ../internals/global */ './node_modules/core-js/internals/global.js')
    var trim = __webpack_require__(/*! ../internals/string-trim */ './node_modules/core-js/internals/string-trim.js').trim
    var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ './node_modules/core-js/internals/whitespaces.js')

    var $parseInt = global.parseInt
    var hex = /^[+-]?0[Xx]/
    var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
    module.exports = FORCED ? function parseInt (string, radix) {
      var S = trim(String(string))
      return $parseInt(S, (radix >>> 0) || (hex.test(S) ? 16 : 10))
    } : $parseInt


    /***/
  }),

  /***/ './node_modules/core-js/modules/es.parse-int.js':
  /*!******************************************************!*\
    !*** ./node_modules/core-js/modules/es.parse-int.js ***!
    \******************************************************/
  /*! no static exports found */
  /***/ (function (module, exports, __webpack_require__) {

    var $ = __webpack_require__(/*! ../internals/export */ './node_modules/core-js/internals/export.js')
    var parseIntImplementation = __webpack_require__(/*! ../internals/number-parse-int */ './node_modules/core-js/internals/number-parse-int.js')

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
    $({global: true, forced: parseInt != parseIntImplementation}, {
      parseInt: parseIntImplementation
    })


    /***/
  })

}, [['./assets/js/pages/creneaux.js', 'runtime', 'vendors~absences~adm.absences~adm.alternances~adm.articles~adm.bornes~adm.configuration~adm.edt~adm.~b8aa102b', 'vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~b8fda26e', 'vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~92da351e', 'vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~14b603b0', 'vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.groupe~adm.justificat~2f9ea679']]])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvY3JlbmVhdXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL251bWJlci1wYXJzZS1pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5wYXJzZS1pbnQuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50Iiwib24iLCIkYW5uZWUiLCJ2YWwiLCJhamF4IiwibWV0aG9kIiwiZGF0YSIsImFubmVlVW5pdmVyc2l0YWlyZSIsImpvdXIiLCJkZWJ1dCIsImZpbiIsInVybCIsIlJvdXRpbmciLCJnZW5lcmF0ZSIsInN1Y2Nlc3MiLCJlbXB0eSIsImxvYWQiLCJhbm5lZV91bml2ZXJzaXRhaXJlIiwiYWRkQ2FsbG91dCIsImVycm9yIiwiJGNyIiwiaGFzQ2xhc3MiLCJ1cGRhdGVDcmVuZWF1IiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImludGVyZGl0IiwiZXZpdGVyIiwiZGlzcG8iLCJoZXVyZSIsImRhdGFBdHRyIiwibmJfaW50ZXJkaXQiLCJwYXJzZUludCIsInRleHQiLCJuYl9ldml0ZXIiLCJuYl9kaXNwbyIsInVwZGF0ZURpc3BvbmliaWxpdGUiLCIkam91ciIsIiRoZXVyZSIsIiRldGF0IiwiZXRhdCIsIiR0eXBlIiwiJHNlbWFpbmUiLCJjcmVuZWF1IiwidHlwZSIsInNlbWFpbmUiLCIkc3RvcENhdGNoRW50ZXIiLCJyZWFkVXJsTWVudSIsIiR1cmwiLCIkZWx0Iiwic3BsaXQiLCIkZmlyc3RFbHQiLCJsZW5ndGgiLCJwb3AiLCJsb2NhdGlvbiIsImF0dHIiLCJTd2FsIiwibWl4aW4iLCJjdXN0b21DbGFzcyIsImNvbmZpcm1CdXR0b24iLCJjYW5jZWxCdXR0b24iLCJidXR0b25zU3R5bGluZyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNzcmYiLCJmaXJlIiwidGl0bGUiLCJpY29uIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25Db2xvciIsImNhbmNlbEJ1dHRvbkNvbG9yIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwidGhlbiIsInJlc3VsdCIsInZhbHVlIiwiX3Rva2VuIiwiaWQiLCJoYXNPd25Qcm9wZXJ0eSIsImhyZWYiLCJjbG9zZXN0IiwicmVtb3ZlIiwieGhyIiwiYWpheE9wdGlvbnMiLCJ0aHJvd25FcnJvciIsImRpc21pc3MiLCJtZXNzYWdlIiwibGFiZWwiLCJjb25zb2xlIiwibG9nIiwidHJhbnNsYXRlIiwiQXJyYXkiLCJodG1sIiwicHJlcGVuZCIsInNsaWRlRG93biIsImRlbGF5Iiwic2xpZGVVcCIsIm15RWRpdEluaXRpYWxDb250ZW50IiwiRWRpdE9uTGluZSIsImdlbmVyZVRleHRBcmVhIiwiZ2VuZXJlSW5wdXQiLCJyZXBsYWNlV2l0aCIsImZvY3VzIiwia2V5Q29kZSIsInVwZGF0ZURhdGEiLCJ3aGljaCIsImZpZWxkIiwiJG9iaiIsInRyaW0iLCJqUXVlcnkiLCJmbiIsIm5hbWUiLCJkZWYiLCJnZXRBdHRyaWJ1dGUiLCJoYXNEYXRhQXR0ciIsImhhc0F0dHJpYnV0ZSIsImRhdGFUb09wdGlvbiIsInJlcGxhY2UiLCJ4IiwidG9VcHBlckNhc2UiLCJnZXREYXRhT3B0aW9ucyIsImVsIiwiY2FzdExpc3QiLCJvcHRpb25zIiwiZWFjaCIsImtleSIsInVuZGVmaW5lZCIsIkJvb2xlYW4iLCJOdW1iZXIiLCJpbnZhbGlkQ2hhbXBzIiwidmFsaWRDaGFtcHMiLCJjb21wbGV0ZUNoYW1wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEVBQVosQ0FBZSxPQUFmLEVBQXdCLGtCQUF4QixFQUE0QyxZQUFVO0FBQ3BELE1BQU1DLE1BQU0sR0FBR0gsQ0FBQyxDQUFDLGtDQUFE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QUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ2JELFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsNkJBQTZCLG1CQUFPLENBQUMsMkZBQStCOztBQUVwRTtBQUNBO0FBQ0EsR0FBRywyREFBMkQ7QUFDOUQ7QUFDQSxDQUFDIiwiZmlsZSI6ImNyZW5lYXV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3BhZ2VzL2NyZW5lYXV4LmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMDYvMDkvMjAyMCAxNjoxNFxuaW1wb3J0IHthZGRDYWxsb3V0fSBmcm9tICcuLi91dGlsJ1xuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2J0bl9jcmVuZWF1X2FkZCcsIGZ1bmN0aW9uKCl7XG4gIGNvbnN0ICRhbm5lZSA9ICQoJyNjaGFuZ2VfYW5uZWVfdW5pdmVyc2l0aWFyZV90ZW1wJykudmFsKClcbiAgJC5hamF4KHtcbiAgICBtZXRob2Q6J1BPU1QnLFxuICAgIGRhdGE6IHtcbiAgICAgIGFubmVlVW5pdmVyc2l0YWlyZTogJGFubmVlLFxuICAgICAgam91cjokKCcjY3JlbmVhdV9qb3VyJykudmFsKCksXG4gICAgICBkZWJ1dDokKCcjY3JlbmVhdV9kZWJ1dCcpLnZhbCgpLFxuICAgICAgZmluOiQoJyNjcmVuZWF1X2ZpbicpLnZhbCgpXG4gICAgfSxcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX2NyZW5lYXVfY291cnNfbmV3JyksXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgJCgnI2xpc3RlX2NyZW5lYXV4JykuZW1wdHkoKS5sb2FkKFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX2NyZW5lYXVfY291cnNfbGlzdGUnLCB7YW5uZWVfdW5pdmVyc2l0YWlyZTogJGFubmVlfSkpXG4gICAgICBhZGRDYWxsb3V0KCdDcsOpbmVhdSBham91dMOpIGF2ZWMgc3VjY8OocycsICdzdWNjZXNzJylcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbiAoKSB7XG4gICAgICBhZGRDYWxsb3V0KCdFcnJldXIgbG9ycyBkZSBsXFwnYWpvdXQgZHUgY3LDqW5lYXUnLCAnZGFuZ2VyJylcbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmJsb3F1ZXJjcmVuZWF1JywgZnVuY3Rpb24oKXtcbiAgY29uc3QgJGNyID0gJCh0aGlzKVxuICBpZiAoJGNyLmhhc0NsYXNzKCdibG9xdWVyY3JlbmVhdV9ldml0ZXInKSkge1xuICAgIHVwZGF0ZUNyZW5lYXUoJ2Rpc3BvJywgJGNyLmRhdGEoJ2NyZW5lYXUnKSwgJGNyLmRhdGEoJ3NlbWFpbmUnKSlcbiAgICAkY3IucmVtb3ZlQ2xhc3MoJ2Jsb3F1ZXJjcmVuZWF1X2V2aXRlcicpXG4gIH0gZWxzZSBpZigkY3IuaGFzQ2xhc3MoJ2Jsb3F1ZXJjcmVuZWF1X2ludGVyZGl0JykpIHtcbiAgICAkY3IucmVtb3ZlQ2xhc3MoJ2Jsb3F1ZXJjcmVuZWF1X2ludGVyZGl0JylcbiAgICAkY3IuYWRkQ2xhc3MoJ2Jsb3F1ZXJjcmVuZWF1X2V2aXRlcicpXG4gICAgdXBkYXRlQ3JlbmVhdSgnYXUnLCAkY3IuZGF0YSgnY3JlbmVhdScpLCAkY3IuZGF0YSgnc2VtYWluZScpKVxuICB9IGVsc2Uge1xuICAgICRjci5hZGRDbGFzcygnYmxvcXVlcmNyZW5lYXVfaW50ZXJkaXQnKVxuICAgIHVwZGF0ZUNyZW5lYXUoJ3ZhJywgJGNyLmRhdGEoJ2NyZW5lYXUnKSwgJGNyLmRhdGEoJ3NlbWFpbmUnKSlcbiAgfVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5jcmVuZWF1JywgZnVuY3Rpb24gKCkge1xuICBjb25zdCBpbnRlcmRpdCA9ICQoJyNuYl9pbnRlcmRpdCcpXG4gIGNvbnN0IGV2aXRlciA9ICQoJyNuYl9ldml0ZXInKVxuICBjb25zdCBkaXNwbyA9ICQoJyNuYl9kaXNwbycpXG4gIGNvbnN0IGhldXJlID0gJCh0aGlzKS5kYXRhKCdoZXVyZScpXG4gIGNvbnN0IGpvdXIgPSAkKHRoaXMpLmRhdGFBdHRyKCdqb3VyJylcblxuICBsZXQgbmJfaW50ZXJkaXQgPSBwYXJzZUludChpbnRlcmRpdC50ZXh0KCkpXG4gIGxldCBuYl9ldml0ZXIgPSBwYXJzZUludChldml0ZXIudGV4dCgpKVxuICBsZXQgbmJfZGlzcG8gPSBwYXJzZUludChkaXNwby50ZXh0KCkpXG5cbiAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2Jsb3F1ZXJjcmVuZWF1X2ludGVyZGl0JykpIHtcbiAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdibG9xdWVyY3JlbmVhdV9pbnRlcmRpdCcpXG4gICAgJCh0aGlzKS5hZGRDbGFzcygnYmxvcXVlcmNyZW5lYXVfZXZpdGVyJylcbiAgICBuYl9pbnRlcmRpdC0tXG4gICAgbmJfZXZpdGVyKytcbiAgICB1cGRhdGVEaXNwb25pYmlsaXRlKGpvdXIsIGhldXJlLCdFJylcbiAgfSBlbHNlIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdibG9xdWVyY3JlbmVhdV9ldml0ZXInKSkge1xuICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2Jsb3F1ZXJjcmVuZWF1X2V2aXRlcicpXG4gICAgbmJfZXZpdGVyLS1cbiAgICBuYl9kaXNwbysrXG4gICAgdXBkYXRlRGlzcG9uaWJpbGl0ZShqb3VyLCBoZXVyZSwnRCcpXG4gIH0gZWxzZSB7XG5cbiAgICAkKHRoaXMpLmFkZENsYXNzKCdibG9xdWVyY3JlbmVhdV9pbnRlcmRpdCcpXG4gICAgbmJfaW50ZXJkaXQrK1xuICAgIG5iX2Rpc3BvLS1cbiAgICB1cGRhdGVEaXNwb25pYmlsaXRlKGpvdXIsIGhldXJlLCdJJylcbiAgfVxuXG4gIGludGVyZGl0LnRleHQobmJfaW50ZXJkaXQpXG4gIGV2aXRlci50ZXh0KG5iX2V2aXRlcilcbiAgZGlzcG8udGV4dChuYl9kaXNwbylcbn0pXG5cbmZ1bmN0aW9uIHVwZGF0ZURpc3BvbmliaWxpdGUoJGpvdXIsICRoZXVyZSwgJGV0YXQpe1xuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYXBwbGljYXRpb25fcGVyc29ubmVsX2Rpc3BvbmliaWxpdGVfdXBkYXRlJyksXG4gICAgZGF0YTp7XG4gICAgICBqb3VyOiAkam91cixcbiAgICAgIGhldXJlOiAkaGV1cmUsXG4gICAgICBldGF0OiAkZXRhdFxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCdcbiAgfSlcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ3JlbmVhdSgkdHlwZSwgJGNyLCAkc2VtYWluZSl7XG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9jcmVuZWF1X2Jsb3F1ZV9tb2RpZmllX2V0YXQnKSxcbiAgICBkYXRhOntcbiAgICAgIGNyZW5lYXU6ICRjcixcbiAgICAgIHR5cGU6ICR0eXBlLFxuICAgICAgc2VtYWluZTogJHNlbWFpbmVcbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnXG4gIH0pXG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvdXRpbC5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDAxLzEyLzIwMjAgMjI6MDRcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXG5cbmxldCAkc3RvcENhdGNoRW50ZXIgPSBmYWxzZVxuXG5mdW5jdGlvbiByZWFkVXJsTWVudSAoJHVybCkge1xuICBjb25zdCAkZWx0ID0gJHVybC5zcGxpdCgnLycpXG4gIGxldCAkZmlyc3RFbHQgPSAyXG4gIGlmICgkZWx0WzFdID09PSAnaW5kZXgucGhwJykge1xuICAgIGlmICgkZWx0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICRmaXJzdEVsdCA9IDNcbiAgICB9XG4gIH1cblxuICBpZiAoJGVsdFskZmlyc3RFbHRdID09PSAnc3VwZXItYWRtaW5pc3RyYXRpb24nKSB7XG4gICAgJGZpcnN0RWx0ID0gJGZpcnN0RWx0ICsgMVxuICB9XG5cbiAgaWYgKCRlbHRbJGVsdC5sZW5ndGggLSAxXSA9PT0gJycpIHtcbiAgICAkZWx0LnBvcCgpXG4gIH1cblxuICAkKCcubWVudS1pdGVtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICQoJyNtZW51LScgKyAkZWx0WyRmaXJzdEVsdF0pLmFkZENsYXNzKCdhY3RpdmUnKVxufVxuXG4vL2NvbG9yaXNlIGxlIGJvbiBtZW51XG5yZWFkVXJsTWVudSgkKGxvY2F0aW9uKS5hdHRyKCdwYXRobmFtZScpKVxuXG5Td2FsLm1peGluKHtcbiAgY3VzdG9tQ2xhc3M6IHtcbiAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgfSxcbiAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG59KVxuLy9wb3AgdXAgZGUgY29uZmlybWF0aW9uIGRlIHN1cHByZXNzaW9uXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnN1cHByaW1lcicsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBjb25zdCB1cmwgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKVxuICBjb25zdCBjc3JmID0gJCh0aGlzKS5kYXRhKCdjc3JmJylcbiAgU3dhbC5maXJlKHtcbiAgICB0aXRsZTogJ0NvbmZpcm1lciBsYSBzdXBwcmVzc2lvbiA/JyxcbiAgICB0ZXh0OiAnTFxcJ29ww6lyYXRpb24gbmUgcG91cnJhIHBhcyDDqnRyZSBhbm51bMOpZS4nLFxuICAgIGljb246ICd3YXJuaW5nJyxcbiAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyMzMDg1ZDYnLFxuICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiAnI2QzMycsXG4gICAgY29uZmlybUJ1dHRvblRleHQ6ICdPdWksIGplIGNvbmZpcm1lJyxcbiAgICBjYW5jZWxCdXR0b25UZXh0OiAnTm9uLCBBbm51bGVyJyxcbiAgICBjdXN0b21DbGFzczoge1xuICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICB9LFxuICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICBpZiAocmVzdWx0LnZhbHVlKSB7XG4gICAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgdHlwZTogJ0RFTEVURScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBfdG9rZW46IGNzcmZcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgaWYgKGlkLmhhc093blByb3BlcnR5KCdyZWRpcmVjdCcpICYmIGlkLmhhc093blByb3BlcnR5KCd1cmwnKSkge1xuICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGlkLnVybFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL3Qucm93KFwiI2xpZ25lX1wiK2lkKS5yZW1vdmUoKS5kcmF3KCk7ID08IGRhdGF0dGFibGUgdG9kbzogcmVtb3ZlIGxpZ25lIHNpIGRhdGF0YWJsZSA/PyBwcm9ibMOobWUgZGFucyBhZG0+cGVyc29ubmVsXG4gICAgICAgICAgICAkKCcjbGlnbmVfJyArIGlkKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpXG4gICAgICAgICAgICBhZGRDYWxsb3V0KCdTdXBwcmVzc2lvbiBlZmZlY3R1w6llIGF2ZWMgc3VjY8OocycsICdzdWNjZXNzJylcbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgIHRpdGxlOiAnU3VwcHJpbcOpIScsXG4gICAgICAgICAgICAgIHRleHQ6ICdMXFwnZW5yZWdpc3RyZW1lbnQgYSDDqXTDqSBzdXBwcmltw6kuJyxcbiAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIGFqYXhPcHRpb25zLCB0aHJvd25FcnJvcikge1xuICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICB0aXRsZTogJ0VycmV1ciBsb3JzIGRlIGxhIHN1cHByZXNzaW9uIScsXG4gICAgICAgICAgICB0ZXh0OiAnTWVyY2kgZGUgcmVub3V2ZWxlciBsXFwnb3DDqXJhdGlvbicsXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgICAgfSlcbiAgICAgICAgICBhZGRDYWxsb3V0KCdFcnJldXIgbG9ycyBkZSBsYSB0ZW50YXRpdmUgZGUgc3VwcHJlc3Npb24nLCAnZGFuZ2VyJylcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgIH0gZWxzZSBpZiAoXG4gICAgICAvLyBSZWFkIG1vcmUgYWJvdXQgaGFuZGxpbmcgZGlzbWlzc2Fsc1xuICAgICAgcmVzdWx0LmRpc21pc3MgPT09ICdjYW5jZWwnXG4gICAgKSB7XG4gICAgICBTd2FsLmZpcmUoe1xuICAgICAgICB0aXRsZTogJ0NhbmNlbGxlZCcsXG4gICAgICAgIHRleHQ6ICdPSyEgVG91dCBlc3QgY29tbWUgYXZhbnQgIScsXG4gICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICB9LFxuICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuICB9KVxufSlcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENhbGxvdXQgKG1lc3NhZ2UsIGxhYmVsKSB7XG4gIGNvbnNvbGUubG9nKCdjYWxsb3V0JylcbiAgdmFyIHRyYW5zbGF0ZSA9IG5ldyBBcnJheSgpXG4gIHRyYW5zbGF0ZVsnc3VjY2VzcyddID0gJ1N1Y2PDqHMnXG4gIHRyYW5zbGF0ZVsnZGFuZ2VyJ10gPSAnRXJyZXVyJ1xuICB0cmFuc2xhdGVbJ3dhcm5pbmcnXSA9ICdBdHRlbnRpb24nXG5cbiAgY29uc3QgaHRtbCA9ICc8ZGl2IGNsYXNzPVwiY2FsbG91dCBjYWxsb3V0LScgKyBsYWJlbCArICdcIiByb2xlPVwiYWxlcnRcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiY2FsbG91dFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4mdGltZXM7PC9zcGFuPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxoNT4nICsgdHJhbnNsYXRlW2xhYmVsXSArICc8L2g1PlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxwPicgKyBtZXNzYWdlICsgJzwvcD5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgIDwvZGl2PidcblxuICAkKCcjbWFpbkNvbnRlbnQnKS5wcmVwZW5kKGh0bWwpLnNsaWRlRG93bignc2xvdycpXG4gICQoJy5jYWxsb3V0JykuZGVsYXkoNTAwMCkuc2xpZGVVcCgnc2xvdycpXG59XG5cbi8vRWRpdGFibGVcbmxldCBteUVkaXRJbml0aWFsQ29udGVudCA9ICcnXG5sZXQgdHlwZSA9ICd0ZXh0J1xubGV0IEVkaXRPbkxpbmUgPSBmYWxzZVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm15ZWRpdCcsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBteUVkaXRJbml0aWFsQ29udGVudCA9ICQodGhpcylcbiAgbGV0IGh0bWwgPSAnJ1xuICBFZGl0T25MaW5lID0gdHJ1ZVxuICBpZiAodHlwZW9mICgkKHRoaXMpLmRhdGEoJ3R5cGUnKSkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdHlwZSA9ICQodGhpcykuZGF0YSgndHlwZScpXG4gIH1cblxuICBpZiAoJCh0aGlzKS5kYXRhKCd0eXBlJykgPT09ICdzZWxlY3QnKSB7XG4gICAgLy90b2RvOiBBIGZpbmFsaXNlclxuICB9IGVsc2UgaWYgKCQodGhpcykuZGF0YSgndHlwZScpID09PSAndGV4dGFyZWEnKSB7XG4gICAgaHRtbCA9IGdlbmVyZVRleHRBcmVhKCQodGhpcykpXG4gIH0gZWxzZSB7XG4gICAgaHRtbCA9IGdlbmVyZUlucHV0KCQodGhpcykpXG4gIH1cbiAgJCh0aGlzKS5yZXBsYWNlV2l0aChodG1sKVxuICAkKCcjbXllZGl0LWlucHV0JykuZm9jdXMoKVxufSlcblxuJChkb2N1bWVudCkub24oJ2tleXVwJywgJyNteWVkaXQtaW5wdXQnLCBmdW5jdGlvbiAoZSkge1xuICBpZiAoZS5rZXlDb2RlID09PSAxMyAmJiAkc3RvcENhdGNoRW50ZXIgPT09IGZhbHNlKSB7XG4gICAgdXBkYXRlRGF0YSgpXG4gIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI215ZWRpdC12YWxpZGUnLCBmdW5jdGlvbiAoZSkge1xuICAkc3RvcENhdGNoRW50ZXIgPSBmYWxzZVxuICBlLnByZXZlbnREZWZhdWx0KClcbiAgdXBkYXRlRGF0YSgpXG59KVxuXG4kKGRvY3VtZW50KS5vbigna2V5cHJlc3MnLCBmdW5jdGlvbiAoZSkge1xuICBpZiAoRWRpdE9uTGluZSA9PT0gdHJ1ZSAmJiAkc3RvcENhdGNoRW50ZXIgPT09IGZhbHNlICYmIGUud2hpY2ggPT09IDEzKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdXBkYXRlRGF0YSgpXG4gIH1cblxuICBpZiAoRWRpdE9uTGluZSA9PT0gdHJ1ZSAmJiAkc3RvcENhdGNoRW50ZXIgPT09IGZhbHNlICYmIGUud2hpY2ggPT09IDI3KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG4gIH1cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbXllZGl0LWFubnVsZScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbn0pXG5cbmZ1bmN0aW9uIHVwZGF0ZURhdGEgKCkge1xuICBsZXQgdmFsID0gJCgnI215ZWRpdC1pbnB1dCcpLnZhbCgpXG4gICQuYWpheCh7XG4gICAgdXJsOiBteUVkaXRJbml0aWFsQ29udGVudC5hdHRyKCdocmVmJyksXG4gICAgZGF0YToge1xuICAgICAgZmllbGQ6IG15RWRpdEluaXRpYWxDb250ZW50LmRhdGEoJ2ZpZWxkJyksXG4gICAgICB2YWx1ZTogdmFsLFxuICAgICAgdHlwZTogdHlwZVxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgbXlFZGl0SW5pdGlhbENvbnRlbnQuaHRtbCh2YWwpXG4gICAgICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbiAgICAgIEVkaXRPbkxpbmUgPSBmYWxzZVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gZ2VuZXJlVGV4dEFyZWEgKCRvYmopIHtcbiAgJHN0b3BDYXRjaEVudGVyID0gdHJ1ZVxuICByZXR1cm4gJzxkaXYgaWQ9XCJteUVkaXQtem9uZVwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHJvd3M9XCI1XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIm15ZWRpdC1pbnB1dFwiPicgKyAkb2JqLmh0bWwoKS50cmltKCkgKyAnPC90ZXh0YXJlYT5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XFxuJyArXG4gICAgJyA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzLW91dGxpbmVcIiBpZD1cIm15ZWRpdC12YWxpZGVcIj48aSBjbGFzcz1cImZhcyBmYS1jaGVja1wiPjwvaT48L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyLW91dGxpbmVcIiBpZD1cIm15ZWRpdC1hbm51bGVcIj48aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT48L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nXG59XG5cbmZ1bmN0aW9uIGdlbmVyZUlucHV0ICgkb2JqKSB7XG5cbiAgcmV0dXJuICc8ZGl2IGlkPVwibXlFZGl0LXpvbmVcIiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwibXllZGl0LWlucHV0XCIgdmFsdWU9XCInICsgJG9iai5odG1sKCkudHJpbSgpICsgJ1wiID5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XFxuJyArXG4gICAgJyA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzLW91dGxpbmVcIiBpZD1cIm15ZWRpdC12YWxpZGVcIj48aSBjbGFzcz1cImZhcyBmYS1jaGVja1wiPjwvaT48L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyLW91dGxpbmVcIiBpZD1cIm15ZWRpdC1hbm51bGVcIj48aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT48L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nXG59XG5cbmpRdWVyeS5mbi5kYXRhQXR0ciA9IGZ1bmN0aW9uIChuYW1lLCBkZWYpIHtcbiAgcmV0dXJuICQodGhpcylbMF0uZ2V0QXR0cmlidXRlKCdkYXRhLScgKyBuYW1lKSB8fCBkZWZcbn1cblxualF1ZXJ5LmZuLmhhc0RhdGFBdHRyID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuICQodGhpcylbMF0uaGFzQXR0cmlidXRlKCdkYXRhLScgKyBuYW1lKVxufVxuXG5mdW5jdGlvbiBkYXRhVG9PcHRpb24gKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUucmVwbGFjZSgvLShbYS16XSkvZywgZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4geFsxXS50b1VwcGVyQ2FzZSgpXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhT3B0aW9ucyAoZWwsIGNhc3RMaXN0KSB7XG4gIHZhciBvcHRpb25zID0ge31cbiAgJC5lYWNoKCQoZWwpLmRhdGEoKSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcblxuICAgIGtleSA9IGRhdGFUb09wdGlvbihrZXkpXG5cbiAgICAvLyBFc2NhcGUgZGF0YS1wcm92aWRlXG4gICAgaWYgKGtleSA9PSAncHJvdmlkZScpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChjYXN0TGlzdCAhPSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciB0eXBlID0gY2FzdExpc3Rba2V5XVxuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2Jvb2wnOlxuICAgICAgICAgIHZhbHVlID0gQm9vbGVhbih2YWx1ZSlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ251bSc6XG4gICAgICAgICAgdmFsdWUgPSBOdW1iZXIodmFsdWUpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnLCcpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBkZWZhdWx0OlxuXG4gICAgICB9XG4gICAgfVxuXG4gICAgb3B0aW9uc1trZXldID0gdmFsdWVcbiAgfSlcblxuICByZXR1cm4gb3B0aW9uc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52YWxpZENoYW1wcyAoJG9iaikge1xuICAkb2JqLnJlbW92ZUNsYXNzKCdpcy12YWxpZCcpLmFkZENsYXNzKCdpcy1pbnZhbGlkJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkQ2hhbXBzICgkb2JqKSB7XG4gICRvYmoucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKS5hZGRDbGFzcygnaXMtdmFsaWQnKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGxldGVDaGFtcHMgKCRvYmopIHtcbiAgJG9iai5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpLnJlbW92ZUNsYXNzKCdpcy12YWxpZCcpXG59XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHRyaW0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0nKS50cmltO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciAkcGFyc2VJbnQgPSBnbG9iYWwucGFyc2VJbnQ7XG52YXIgaGV4ID0gL15bKy1dPzBbWHhdLztcbnZhciBGT1JDRUQgPSAkcGFyc2VJbnQod2hpdGVzcGFjZXMgKyAnMDgnKSAhPT0gOCB8fCAkcGFyc2VJbnQod2hpdGVzcGFjZXMgKyAnMHgxNicpICE9PSAyMjtcblxuLy8gYHBhcnNlSW50YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXBhcnNlaW50LXN0cmluZy1yYWRpeFxubW9kdWxlLmV4cG9ydHMgPSBGT1JDRUQgPyBmdW5jdGlvbiBwYXJzZUludChzdHJpbmcsIHJhZGl4KSB7XG4gIHZhciBTID0gdHJpbShTdHJpbmcoc3RyaW5nKSk7XG4gIHJldHVybiAkcGFyc2VJbnQoUywgKHJhZGl4ID4+PiAwKSB8fCAoaGV4LnRlc3QoUykgPyAxNiA6IDEwKSk7XG59IDogJHBhcnNlSW50O1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgcGFyc2VJbnRJbXBsZW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9udW1iZXItcGFyc2UtaW50Jyk7XG5cbi8vIGBwYXJzZUludGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1wYXJzZWludC1zdHJpbmctcmFkaXhcbiQoeyBnbG9iYWw6IHRydWUsIGZvcmNlZDogcGFyc2VJbnQgIT0gcGFyc2VJbnRJbXBsZW1lbnRhdGlvbiB9LCB7XG4gIHBhcnNlSW50OiBwYXJzZUludEltcGxlbWVudGF0aW9uXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
