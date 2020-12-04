// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/public/build/adm.stage_courrier.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 04/12/2020 13:44

(window['webpackJsonp'] = window['webpackJsonp'] || []).push([['adm.stage_courrier'], {

  /***/ './assets/css/quill.css':
  /*!******************************!*\
    !*** ./assets/css/quill.css ***!
    \******************************/
  /*! no static exports found */
  /***/ (function (module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

    /***/
  }),

  /***/ './assets/js/pages/adm.stage_courrier.js':
  /*!***********************************************!*\
    !*** ./assets/js/pages/adm.stage_courrier.js ***!
    \***********************************************/
  /*! no exports provided */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    'use strict'
    __webpack_require__.r(__webpack_exports__)
    /* harmony import */
    var _quill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../quill */ './assets/js/quill.js')
    /* harmony import */
    var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ './assets/js/util.js')
    /* harmony import */
    var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ './node_modules/jquery/dist/jquery.js')
    /* harmony import */
    var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__)
    /* harmony import */
    var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ './node_modules/sweetalert2/dist/sweetalert2.all.js')
    /* harmony import */
    var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__)
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.stage_courrier.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 19/10/2020 18:03


    var ed_courrier, ed_ETAT_STAGE_AUTORISE, ed_ETAT_STAGE_DEPOSE, ed_ETAT_STAGE_VALIDE, ed_ETAT_STAGE_REFUS,
      ed_ETAT_STAGE_INCOMPLET, ed_ETAT_STAGE_CONVENTION_IMPRIMEE, ed_ETAT_STAGE_CONVENTION_ENVOYEE,
      ed_ETAT_STAGE_CONVENTION_RECUE
    var tabEd = {}

    function loadQuill ($id) {
      var options = {
        modules: {
          toolbar: {
            container: '#toolbar_' + $id,
            handlers: {
              'customsfields': function customsfields (value) {
                if (value) {
                  var cursorPosition = this.quill.getSelection().index
                  this.quill.insertText(cursorPosition, value)
                  this.quill.setSelection(cursorPosition + value.length)
                }
              }
            }
          }
        },
        placeholder: 'Composez le corps du message... Laisser vide pour utiliser le mail par défaut.',
        theme: 'snow'
      }
      return new _quill__WEBPACK_IMPORTED_MODULE_0__['default']('#text_' + $id, options)
    }

    jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).ready(function () {
      ed_ETAT_STAGE_AUTORISE = loadQuill('ETAT_STAGE_AUTORISE')
      ed_ETAT_STAGE_DEPOSE = loadQuill('ETAT_STAGE_DEPOSE')
      ed_ETAT_STAGE_VALIDE = loadQuill('ETAT_STAGE_VALIDE')
      ed_ETAT_STAGE_REFUS = loadQuill('ETAT_STAGE_REFUS')
      ed_ETAT_STAGE_INCOMPLET = loadQuill('ETAT_STAGE_INCOMPLET')
      ed_ETAT_STAGE_CONVENTION_IMPRIMEE = loadQuill('ETAT_STAGE_CONVENTION_IMPRIMEE')
      ed_ETAT_STAGE_CONVENTION_ENVOYEE = loadQuill('ETAT_STAGE_CONVENTION_ENVOYEE')
      ed_ETAT_STAGE_CONVENTION_RECUE = loadQuill('ETAT_STAGE_CONVENTION_RECUE')
      ed_courrier = loadQuill('courrier')
      tabEd = {
        'ed_ETAT_STAGE_AUTORISE': ed_ETAT_STAGE_AUTORISE,
        'ed_ETAT_STAGE_DEPOSE': ed_ETAT_STAGE_DEPOSE,
        'ed_ETAT_STAGE_VALIDE': ed_ETAT_STAGE_VALIDE,
        'ed_ETAT_STAGE_REFUS': ed_ETAT_STAGE_REFUS,
        'ed_ETAT_STAGE_INCOMPLET': ed_ETAT_STAGE_INCOMPLET,
        'ed_ETAT_STAGE_CONVENTION_IMPRIMEE': ed_ETAT_STAGE_CONVENTION_IMPRIMEE,
        'ed_ETAT_STAGE_CONVENTION_ENVOYEE': ed_ETAT_STAGE_CONVENTION_ENVOYEE,
        'ed_ETAT_STAGE_CONVENTION_RECUE': ed_ETAT_STAGE_CONVENTION_RECUE,
        'ed_courrier': ed_courrier
      }
    })
    jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).on('click', '.enregistreModeleMail', function () {
      var etat = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).data('type')
      var onglet = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).data('ed')
      jquery__WEBPACK_IMPORTED_MODULE_2___default.a.ajax({
        url: Routing.generate('administration_stage_periode_courrier_sauvegarde_modele', {
          uuid: jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).data('periode'),
          mail: etat
        }),
        method: 'POST',
        data: {
          message: tabEd['ed_' + onglet].root.innerHTML,
          sujet: jquery__WEBPACK_IMPORTED_MODULE_2___default()('#sujet_' + etat).val()
        },
        success: function success () {
          Object(_util__WEBPACK_IMPORTED_MODULE_1__['addCallout'])('Modèle enregistré !', 'success')
        }
      })
    })
    jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).on('click', '.resetDefaut', function (e) {
      e.preventDefault()
      var etat = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).data('type')
      var periode = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).data('periode')
      sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
        title: 'Confirmer le retour au message par défaut ?',
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
          jquery__WEBPACK_IMPORTED_MODULE_2___default.a.ajax({
            url: Routing.generate('administration_stage_periode_courrier_reset', {
              id: periode,
              etat: etat
            }),
            type: 'POST',
            success: function success () {
              tabEd['ed_' + etat].setText('')
              Object(_util__WEBPACK_IMPORTED_MODULE_1__['addCallout'])('Suppression effectuée avec succès, retour au message par défaut', 'success')
              sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Message réinitialisé!',
                text: 'Le message par défaut sera maintenant utilisé.',
                icon: 'success',
                confirmButtonText: 'OK',
                customClass: {
                  confirmButton: 'btn btn-primary',
                  cancelButton: 'btn btn-secondary'
                },
                buttonsStyling: false
              })
            },
            error: function error (xhr, ajaxOptions, thrownError) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
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
              Object(_util__WEBPACK_IMPORTED_MODULE_1__['addCallout'])('Erreur lors de la tentative de suppression', 'danger')
            }
          })
        } else if ( // Read more about handling dismissals
          result.dismiss === 'cancel') {
          sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
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

    /***/
  }),

  /***/ './assets/js/quill.js':
  /*!****************************!*\
    !*** ./assets/js/quill.js ***!
    \****************************/
  /*! exports provided: default */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    'use strict'
    __webpack_require__.r(__webpack_exports__)
    /* harmony import */
    var _css_quill_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/quill.css */ './assets/css/quill.css')
    /* harmony import */
    var _css_quill_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_quill_css__WEBPACK_IMPORTED_MODULE_0__)
    /* harmony import */
    var quill_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! quill/core */ './node_modules/quill/core.js')
    /* harmony import */
    var quill_modules_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! quill/modules/toolbar */ './node_modules/quill/modules/toolbar.js')
    /* harmony import */
    var quill_themes_snow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! quill/themes/snow */ './node_modules/quill/themes/snow.js')
    /* harmony import */
    var quill_formats_bold__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! quill/formats/bold */ './node_modules/quill/formats/bold.js')
    /* harmony import */
    var quill_formats_italic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! quill/formats/italic */ './node_modules/quill/formats/italic.js')
    /* harmony import */
    var quill_formats_underline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! quill/formats/underline */ './node_modules/quill/formats/underline.js')
    /* harmony import */
    var quill_formats_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! quill/formats/header */ './node_modules/quill/formats/header.js')
    /* harmony import */
    var quill_formats_align__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! quill/formats/align */ './node_modules/quill/formats/align.js')
    /* harmony import */
    var jquery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jquery */ './node_modules/jquery/dist/jquery.js')
    /* harmony import */
    var jquery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_9__)
    /* harmony import */
    var quill_formats_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! quill/formats/list */ './node_modules/quill/formats/list.js')
    /* harmony import */
    var quill_formats_size__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! quill/formats/size */ './node_modules/quill/formats/size.js')
    /* harmony import */
    var quill_formats_color__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! quill/formats/color */ './node_modules/quill/formats/color.js')
    /* harmony import */
    var quill_formats_background__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! quill/formats/background */ './node_modules/quill/formats/background.js')
    /* harmony import */
    var quill_formats_blockquote__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! quill/formats/blockquote */ './node_modules/quill/formats/blockquote.js')
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/quill.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 04/10/2020 06:58


    quill_core__WEBPACK_IMPORTED_MODULE_1__['default'].register({
      'modules/toolbar': quill_modules_toolbar__WEBPACK_IMPORTED_MODULE_2__['default'],
      'themes/snow': quill_themes_snow__WEBPACK_IMPORTED_MODULE_3__['default'],
      'formats/bold': quill_formats_bold__WEBPACK_IMPORTED_MODULE_4__['default'],
      'formats/italic': quill_formats_italic__WEBPACK_IMPORTED_MODULE_5__['default'],
      'formats/size': quill_formats_size__WEBPACK_IMPORTED_MODULE_11__['SizeStyle'],
      'formats/color': quill_formats_color__WEBPACK_IMPORTED_MODULE_12__['ColorStyle'],
      'formats/background': quill_formats_background__WEBPACK_IMPORTED_MODULE_13__['BackgroundStyle'],
      'formats/underline': quill_formats_underline__WEBPACK_IMPORTED_MODULE_6__['default'],
      'formats/header': quill_formats_header__WEBPACK_IMPORTED_MODULE_7__['default'],
      'formats/list': quill_formats_list__WEBPACK_IMPORTED_MODULE_10__['default'],
      'formats/list-item': quill_formats_list__WEBPACK_IMPORTED_MODULE_10__['ListItem'],
      'formats/align': quill_formats_align__WEBPACK_IMPORTED_MODULE_8__['AlignStyle']
    })
    /* harmony default export */
    __webpack_exports__['default'] = (quill_core__WEBPACK_IMPORTED_MODULE_1__['default'])
    var options = {
      theme: 'snow',
      toolbar: 'full'
    }
    var toolbarFullOptions = [[{
      'header': [1, 2, 3, 4, 5, 6, false]
    }, {
      'size': ['small', false, 'large', 'huge']
    }], ['bold', 'italic', 'underline'], // toggled buttons
      [{
        'color': []
      }, {
        'background': []
      }], // dropdown with defaults from theme
      [{
        'header': 1
      }, {
        'header': 2
      }], [{
        'list': 'ordered'
      }, {
        'list': 'bullet'
      }, {
        'indent': '-1'
      }, {
        'indent': '+1'
      }], ['link'], ['clean'] // remove formatting button
    ]

    if (options.toolbar !== undefined) {
      var toolbar = options.toolbar.toLowerCase()

      if (toolbar == 'full') {
        options.modules = {
          //syntax: 'true',
          toolbar: toolbarFullOptions
        }
      }
    }

    jquery__WEBPACK_IMPORTED_MODULE_9___default()(document).ready(function () {
      initQuill()
    })
    jquery__WEBPACK_IMPORTED_MODULE_9___default()(document).ajaxComplete(function () {
      initQuill()
    })

    function initQuill () {
      var obj = jquery__WEBPACK_IMPORTED_MODULE_9___default()('[data-provide="quill"]')

      if (obj.length === 1) {
        new quill_core__WEBPACK_IMPORTED_MODULE_1__['default'](jquery__WEBPACK_IMPORTED_MODULE_9___default()('[data-provide="quill"]')[0], options)
      }
    }

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

}, [['./assets/js/pages/adm.stage_courrier.js', 'runtime', 'vendors~absences~adm.absences~adm.alternances~adm.articles~adm.bornes~adm.configuration~adm.edt~adm.~b8aa102b', 'vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~b8fda26e', 'vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~92da351e', 'vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~14b603b0', 'vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.groupe~adm.justificat~2f9ea679', 'vendors~adm.stage_courrier~quill']]])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL3F1aWxsLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvYWRtLnN0YWdlX2NvdXJyaWVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9xdWlsbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdXRpbC5qcyJdLCJuYW1lcyI6WyJlZF9jb3VycmllciIsImVkX0VUQVRfU1RBR0VfQVVUT1JJU0UiLCJlZF9FVEFUX1NUQUdFX0RFUE9TRSIsImVkX0VUQVRfU1RBR0VfVkFMSURFIiwiZWRfRVRBVF9TVEFHRV9SRUZVUyIsImVkX0VUQVRfU1RBR0VfSU5DT01QTEVUIiwiZWRfRVRBVF9TVEFHRV9DT05WRU5USU9OX0lNUFJJTUVFIiwiZWRfRVRBVF9TVEFHRV9DT05WRU5USU9OX0VOVk9ZRUUiLCJlZF9FVEFUX1NUQUdFX0NPTlZFTlRJT05fUkVDVUUiLCJ0YWJFZCIsImxvYWRRdWlsbCIsIiRpZCIsIm9wdGlvbnMiLCJtb2R1bGVzIiwidG9vbGJhciIsImNvbnRhaW5lciIsImhhbmRsZXJzIiwidmFsdWUiLCJjdXJzb3JQb3NpdGlvbiIsInF1aWxsIiwiZ2V0U2VsZWN0aW9uIiwiaW5kZXgiLCJpbnNlcnRUZXh0Iiwic2V0U2VsZWN0aW9uIiwibGVuZ3RoIiwicGxhY2Vob2xkZXIiLCJ0aGVtZSIsIlF1aWxsIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJvbiIsImV0YXQiLCJkYXRhIiwib25nbGV0IiwiYWpheCIsInVybCIsIlJvdXRpbmciLCJnZW5lcmF0ZSIsInV1aWQiLCJtYWlsIiwibWV0aG9kIiwibWVzc2FnZSIsInJvb3QiLCJpbm5lckhUTUwiLCJzdWpldCIsInZhbCIsInN1Y2Nlc3MiLCJhZGRDYWxsb3V0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicGVyaW9kZSIsIlN3YWwiLCJmaXJlIiwidGl0bGUiLCJ0ZXh0IiwiaWNvbiIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsImJ1dHRvbnNTdHlsaW5nIiwidGhlbiIsInJlc3VsdCIsImlkIiwidHlwZSIsInNldFRleHQiLCJlcnJvciIsInhociIsImFqYXhPcHRpb25zIiwidGhyb3duRXJyb3IiLCJkaXNtaXNzIiwicmVnaXN0ZXIiLCJUb29sYmFyIiwiU25vdyIsIkJvbGQiLCJJdGFsaWMiLCJTaXplU3R5bGUiLCJDb2xvclN0eWxlIiwiQmFja2dyb3VuZFN0eWxlIiwiVW5kZXJsaW5lIiwiSGVhZGVyIiwiTGlzdCIsIkxpc3RJdGVtIiwiQWxpZ25TdHlsZSIsInRvb2xiYXJGdWxsT3B0aW9ucyIsInVuZGVmaW5lZCIsInRvTG93ZXJDYXNlIiwiaW5pdFF1aWxsIiwiYWpheENvbXBsZXRlIiwib2JqIiwiJHN0b3BDYXRjaEVudGVyIiwicmVhZFVybE1lbnUiLCIkdXJsIiwiJGVsdCIsInNwbGl0IiwiJGZpcnN0RWx0IiwicG9wIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImxvY2F0aW9uIiwiYXR0ciIsIm1peGluIiwiY3NyZiIsIl90b2tlbiIsImhhc093blByb3BlcnR5IiwiaHJlZiIsImNsb3Nlc3QiLCJyZW1vdmUiLCJsYWJlbCIsImNvbnNvbGUiLCJsb2ciLCJ0cmFuc2xhdGUiLCJBcnJheSIsImh0bWwiLCJwcmVwZW5kIiwic2xpZGVEb3duIiwiZGVsYXkiLCJzbGlkZVVwIiwibXlFZGl0SW5pdGlhbENvbnRlbnQiLCJFZGl0T25MaW5lIiwiZ2VuZXJlVGV4dEFyZWEiLCJnZW5lcmVJbnB1dCIsInJlcGxhY2VXaXRoIiwiZm9jdXMiLCJrZXlDb2RlIiwidXBkYXRlRGF0YSIsIndoaWNoIiwiZmllbGQiLCIkb2JqIiwidHJpbSIsImpRdWVyeSIsImZuIiwiZGF0YUF0dHIiLCJuYW1lIiwiZGVmIiwiZ2V0QXR0cmlidXRlIiwiaGFzRGF0YUF0dHIiLCJoYXNBdHRyaWJ1dGUiLCJkYXRhVG9PcHRpb24iLCJyZXBsYWNlIiwieCIsInRvVXBwZXJDYXNlIiwiZ2V0RGF0YU9wdGlvbnMiLCJlbCIsImNhc3RMaXN0IiwiZWFjaCIsImtleSIsIkJvb2xlYW4iLCJOdW1iZXIiLCJpbnZhbGlkQ2hhbXBzIiwidmFsaWRDaGFtcHMiLCJjb21wbGV0ZUNoYW1wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsV0FBSixFQUFpQkMsc0JBQWpCLEVBQXlDQyxvQkFBekMsRUFBK0RDLG9CQUEvRCxFQUFxRkMsbUJBQXJGLEVBQ0VDLHVCQURGLEVBRUVDLGlDQUZGLEVBRXFDQyxnQ0FGckMsRUFFdUVDLDhCQUZ2RTtBQUlBLElBQUlDLEtBQUssR0FBRyxFQUFaOztBQUVBLFNBQVNDLFNBQVQsQ0FBb0JDLEdBQXBCLEVBQXlCO0FBQ3ZCLE1BQU1DLE9BQU8sR0FBRztBQUNkQyxXQUFPLEVBQUU7QUFDUEMsYUFBTyxFQUFFO0FBQ1BDLGlCQUFTLEVBQUUsY0FBY0osR0FEbEI7QUFFUEssZ0JBQVEsRUFBRTtBQUNSLDJCQUFpQix1QkFBVUMsS0FBVixFQUFpQjtBQUNoQyxnQkFBSUEsS0FBSixFQUFXO0FBQ1Qsa0JBQU1DLGNBQWMsR0FBRyxLQUFLQyxLQUFMLENBQVdDLFlBQVgsR0FBMEJDLEtBQWpEO0FBQ0EsbUJBQUtGLEtBQUwsQ0FBV0csVUFBWCxDQUFzQkosY0FBdEIsRUFBc0NELEtBQXRDO0FBQ0EsbUJBQUtFLEtBQUwsQ0FBV0ksWUFBWCxDQUF3QkwsY0FBYyxHQUFHRCxLQUFLLENBQUNPLE1BQS9DO0FBQ0Q7QUFDRjtBQVBPO0FBRkg7QUFERixLQURLO0FBZWRDLGVBQVcsRUFBRSxnRkFmQztBQWdCZEMsU0FBSyxFQUFFO0FBaEJP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M0QsU0FBaEIsRUFBMkI7QUFDekIsVUFBSXJCLElBQUksR0FBR2dGLFFBQVEsQ0FBQ0UsR0FBRCxDQUFuQjs7QUFDQSxjQUFRbEYsSUFBUjtBQUNFLGFBQUssTUFBTDtBQUNFcEQsZUFBSyxHQUFHdUksT0FBTyxDQUFDdkksS0FBRCxDQUFmO0FBQ0E7O0FBRUYsYUFBSyxLQUFMO0FBQ0VBLGVBQUssR0FBR3dJLE1BQU0sQ0FBQ3hJLEtBQUQsQ0FBZDtBQUNBOztBQUVGLGFBQUssT0FBTDtBQUNFQSxlQUFLLEdBQUdBLEtBQUssQ0FBQ2tGLEtBQU4sQ0FBWSxHQUFaLENBQVI7QUFDQTs7QUFFRjtBQWJGO0FBZ0JEOztBQUVEdkYsV0FBTyxDQUFDMkksR0FBRCxDQUFQLEdBQWV0SSxLQUFmO0FBQ0QsR0E5QkQ7QUFnQ0EsU0FBT0wsT0FBUDtBQUNEO0FBRU0sU0FBUzhJLGFBQVQsQ0FBd0JyQixJQUF4QixFQUE4QjtBQUNuQ0EsTUFBSSxDQUFDL0IsV0FBTCxDQUFpQixVQUFqQixFQUE2QkMsUUFBN0IsQ0FBc0MsWUFBdEM7QUFDRDtBQUVNLFNBQVNvRCxXQUFULENBQXNCdEIsSUFBdEIsRUFBNEI7QUFDakNBLE1BQUksQ0FBQy9CLFdBQUwsQ0FBaUIsWUFBakIsRUFBK0JDLFFBQS9CLENBQXdDLFVBQXhDO0FBQ0Q7QUFFTSxTQUFTcUQsY0FBVCxDQUF5QnZCLElBQXpCLEVBQStCO0FBQ3BDQSxNQUFJLENBQUMvQixXQUFMLENBQWlCLFlBQWpCLEVBQStCQSxXQUEvQixDQUEyQyxVQUEzQztBQUNELEMiLCJmaWxlIjoiYWRtLnN0YWdlX2NvdXJyaWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3BhZ2VzL2FkbS5zdGFnZV9jb3Vycmllci5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDE5LzEwLzIwMjAgMTg6MDNcblxuaW1wb3J0IFF1aWxsIGZyb20gJy4uL3F1aWxsJ1xuaW1wb3J0IHthZGRDYWxsb3V0fSBmcm9tICcuLi91dGlsJ1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXG5cbmxldCBlZF9jb3VycmllciwgZWRfRVRBVF9TVEFHRV9BVVRPUklTRSwgZWRfRVRBVF9TVEFHRV9ERVBPU0UsIGVkX0VUQVRfU1RBR0VfVkFMSURFLCBlZF9FVEFUX1NUQUdFX1JFRlVTLFxuICBlZF9FVEFUX1NUQUdFX0lOQ09NUExFVCxcbiAgZWRfRVRBVF9TVEFHRV9DT05WRU5USU9OX0lNUFJJTUVFLCBlZF9FVEFUX1NUQUdFX0NPTlZFTlRJT05fRU5WT1lFRSwgZWRfRVRBVF9TVEFHRV9DT05WRU5USU9OX1JFQ1VFXG5cbmxldCB0YWJFZCA9IHt9XG5cbmZ1bmN0aW9uIGxvYWRRdWlsbCAoJGlkKSB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgbW9kdWxlczoge1xuICAgICAgdG9vbGJhcjoge1xuICAgICAgICBjb250YWluZXI6ICcjdG9vbGJhcl8nICsgJGlkLFxuICAgICAgICBoYW5kbGVyczoge1xuICAgICAgICAgICdjdXN0b21zZmllbGRzJzogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgY29uc3QgY3Vyc29yUG9zaXRpb24gPSB0aGlzLnF1aWxsLmdldFNlbGVjdGlvbigpLmluZGV4XG4gICAgICAgICAgICAgIHRoaXMucXVpbGwuaW5zZXJ0VGV4dChjdXJzb3JQb3NpdGlvbiwgdmFsdWUpXG4gICAgICAgICAgICAgIHRoaXMucXVpbGwuc2V0U2VsZWN0aW9uKGN1cnNvclBvc2l0aW9uICsgdmFsdWUubGVuZ3RoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgcGxhY2Vob2xkZXI6ICdDb21wb3NleiBsZSBjb3JwcyBkdSBtZXNzYWdlLi4uIExhaXNzZXIgdmlkZSBwb3VyIHV0aWxpc2VyIGxlIG1haWwgcGFyIGTDqWZhdXQuJyxcbiAgICB0aGVtZTogJ3Nub3cnXG4gIH1cbiAgcmV0dXJuIG5ldyBRdWlsbCgnI3RleHRfJyArICRpZCwgb3B0aW9ucylcbn1cblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICBlZF9FVEFUX1NUQUdFX0FVVE9SSVNFID0gbG9hZFF1aWxsKCdFVEFUX1NUQUdFX0FVVE9SSVNFJylcbiAgZWRfRVRBVF9TVEFHRV9ERVBPU0UgPSBsb2FkUXVpbGwoJ0VUQVRfU1RBR0VfREVQT1NFJylcbiAgZWRfRVRBVF9TVEFHRV9WQUxJREUgPSBsb2FkUXVpbGwoJ0VUQVRfU1RBR0VfVkFMSURFJylcbiAgZWRfRVRBVF9TVEFHRV9SRUZVUyA9IGxvYWRRdWlsbCgnRVRBVF9TVEFHRV9SRUZVUycpXG4gIGVkX0VUQVRfU1RBR0VfSU5DT01QTEVUID0gbG9hZFF1aWxsKCdFVEFUX1NUQUdFX0lOQ09NUExFVCcpXG4gIGVkX0VUQVRfU1RBR0VfQ09OVkVOVElPTl9JTVBSSU1FRSA9IGxvYWRRdWlsbCgnRVRBVF9TVEFHRV9DT05WRU5USU9OX0lNUFJJTUVFJylcbiAgZWRfRVRBVF9TVEFHRV9DT05WRU5USU9OX0VOVk9ZRUUgPSBsb2FkUXVpbGwoJ0VUQVRfU1RBR0VfQ09OVkVOVElPTl9FTlZPWUVFJylcbiAgZWRfRVRBVF9TVEFHRV9DT05WRU5USU9OX1JFQ1VFID0gbG9hZFF1aWxsKCdFVEFUX1NUQUdFX0NPTlZFTlRJT05fUkVDVUUnKVxuICBlZF9jb3VycmllciA9IGxvYWRRdWlsbCgnY291cnJpZXInKVxuXG4gIHRhYkVkID0ge1xuICAgICdlZF9FVEFUX1NUQUdFX0FVVE9SSVNFJzogZWRfRVRBVF9TVEFHRV9BVVRPUklTRSxcbiAgICAnZWRfRVRBVF9TVEFHRV9ERVBPU0UnOiBlZF9FVEFUX1NUQUdFX0RFUE9TRSxcbiAgICAnZWRfRVRBVF9TVEFHRV9WQUxJREUnOiBlZF9FVEFUX1NUQUdFX1ZBTElERSxcbiAgICAnZWRfRVRBVF9TVEFHRV9SRUZVUyc6IGVkX0VUQVRfU1RBR0VfUkVGVVMsXG4gICAgJ2VkX0VUQVRfU1RBR0VfSU5DT01QTEVUJzogZWRfRVRBVF9TVEFHRV9JTkNPTVBMRVQsXG4gICAgJ2VkX0VUQVRfU1RBR0VfQ09OVkVOVElPTl9JTVBSSU1FRSc6IGVkX0VUQVRfU1RBR0VfQ09OVkVOVElPTl9JTVBSSU1FRSxcbiAgICAnZWRfRVRBVF9TVEFHRV9DT05WRU5USU9OX0VOVk9ZRUUnOiBlZF9FVEFUX1NUQUdFX0NPTlZFTlRJT05fRU5WT1lFRSxcbiAgICAnZWRfRVRBVF9TVEFHRV9DT05WRU5USU9OX1JFQ1VFJzogZWRfRVRBVF9TVEFHRV9DT05WRU5USU9OX1JFQ1VFLFxuICAgICdlZF9jb3Vycmllcic6IGVkX2NvdXJyaWVyXG4gIH1cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuZW5yZWdpc3RyZU1vZGVsZU1haWwnLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGV0YXQgPSAkKHRoaXMpLmRhdGEoJ3R5cGUnKVxuICBjb25zdCBvbmdsZXQgPSAkKHRoaXMpLmRhdGEoJ2VkJylcblxuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fc3RhZ2VfcGVyaW9kZV9jb3Vycmllcl9zYXV2ZWdhcmRlX21vZGVsZScsIHtcbiAgICAgIHV1aWQ6ICQodGhpcykuZGF0YSgncGVyaW9kZScpLFxuICAgICAgbWFpbDogZXRhdFxuICAgIH0pLFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGRhdGE6IHtcbiAgICAgIG1lc3NhZ2U6IHRhYkVkWydlZF8nICsgb25nbGV0XS5yb290LmlubmVySFRNTCxcbiAgICAgIHN1amV0OiAkKCcjc3VqZXRfJyArIGV0YXQpLnZhbCgpXG4gICAgfSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICBhZGRDYWxsb3V0KCdNb2TDqGxlIGVucmVnaXN0csOpICEnLCAnc3VjY2VzcycpXG4gICAgfVxuICB9KVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5yZXNldERlZmF1dCcsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBsZXQgZXRhdCA9ICQodGhpcykuZGF0YSgndHlwZScpXG4gIGxldCBwZXJpb2RlID0gJCh0aGlzKS5kYXRhKCdwZXJpb2RlJylcblxuICBTd2FsLmZpcmUoe1xuICAgIHRpdGxlOiAnQ29uZmlybWVyIGxlIHJldG91ciBhdSBtZXNzYWdlIHBhciBkw6lmYXV0ID8nLFxuICAgIHRleHQ6ICdMXFwnb3DDqXJhdGlvbiBuZSBwb3VycmEgcGFzIMOqdHJlIGFubnVsw6llLicsXG4gICAgaWNvbjogJ3dhcm5pbmcnLFxuICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgY29uZmlybUJ1dHRvbkNvbG9yOiAnIzMwODVkNicsXG4gICAgY2FuY2VsQnV0dG9uQ29sb3I6ICcjZDMzJyxcbiAgICBjb25maXJtQnV0dG9uVGV4dDogJ091aSwgamUgY29uZmlybWUnLFxuICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdOb24sIEFubnVsZXInLFxuICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgIH0sXG4gICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICAgICQuYWpheCh7XG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fc3RhZ2VfcGVyaW9kZV9jb3Vycmllcl9yZXNldCcsIHtpZDogcGVyaW9kZSwgZXRhdDogZXRhdH0pLFxuICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0YWJFZFsnZWRfJyArIGV0YXRdLnNldFRleHQoJycpXG4gICAgICAgICAgYWRkQ2FsbG91dCgnU3VwcHJlc3Npb24gZWZmZWN0dcOpZSBhdmVjIHN1Y2PDqHMsIHJldG91ciBhdSBtZXNzYWdlIHBhciBkw6lmYXV0JywgJ3N1Y2Nlc3MnKVxuICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICB0aXRsZTogJ01lc3NhZ2UgcsOpaW5pdGlhbGlzw6khJyxcbiAgICAgICAgICAgIHRleHQ6ICdMZSBtZXNzYWdlIHBhciBkw6lmYXV0IHNlcmEgbWFpbnRlbmFudCB1dGlsaXPDqS4nLFxuICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIGFqYXhPcHRpb25zLCB0aHJvd25FcnJvcikge1xuICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICB0aXRsZTogJ0VycmV1ciBsb3JzIGRlIGxhIHN1cHByZXNzaW9uIScsXG4gICAgICAgICAgICB0ZXh0OiAnTWVyY2kgZGUgcmVub3V2ZWxlciBsXFwnb3DDqXJhdGlvbicsXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgICAgfSlcbiAgICAgICAgICBhZGRDYWxsb3V0KCdFcnJldXIgbG9ycyBkZSBsYSB0ZW50YXRpdmUgZGUgc3VwcHJlc3Npb24nLCAnZGFuZ2VyJylcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgIH0gZWxzZSBpZiAoXG4gICAgICAvLyBSZWFkIG1vcmUgYWJvdXQgaGFuZGxpbmcgZGlzbWlzc2Fsc1xuICAgICAgcmVzdWx0LmRpc21pc3MgPT09ICdjYW5jZWwnXG4gICAgKSB7XG4gICAgICBTd2FsLmZpcmUoe1xuICAgICAgICB0aXRsZTogJ0NhbmNlbGxlZCcsXG4gICAgICAgIHRleHQ6ICdPSyEgVG91dCBlc3QgY29tbWUgYXZhbnQgIScsXG4gICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICB9LFxuICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuICB9KVxufSlcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9xdWlsbC5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDA0LzEwLzIwMjAgMDY6NThcblxuaW1wb3J0ICcuLi9jc3MvcXVpbGwuY3NzJ1xuXG5pbXBvcnQgUXVpbGwgZnJvbSAncXVpbGwvY29yZSdcblxuaW1wb3J0IFRvb2xiYXIgZnJvbSAncXVpbGwvbW9kdWxlcy90b29sYmFyJ1xuaW1wb3J0IFNub3cgZnJvbSAncXVpbGwvdGhlbWVzL3Nub3cnXG5cbmltcG9ydCBCb2xkIGZyb20gJ3F1aWxsL2Zvcm1hdHMvYm9sZCdcbmltcG9ydCBJdGFsaWMgZnJvbSAncXVpbGwvZm9ybWF0cy9pdGFsaWMnXG5pbXBvcnQgVW5kZXJsaW5lIGZyb20gJ3F1aWxsL2Zvcm1hdHMvdW5kZXJsaW5lJ1xuaW1wb3J0IEhlYWRlciBmcm9tICdxdWlsbC9mb3JtYXRzL2hlYWRlcidcbmltcG9ydCB7QWxpZ25TdHlsZX0gZnJvbSAncXVpbGwvZm9ybWF0cy9hbGlnbidcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBMaXN0LCB7TGlzdEl0ZW19IGZyb20gJ3F1aWxsL2Zvcm1hdHMvbGlzdCdcbmltcG9ydCB7U2l6ZVN0eWxlfSBmcm9tICdxdWlsbC9mb3JtYXRzL3NpemUnXG5pbXBvcnQge0NvbG9yU3R5bGV9IGZyb20gJ3F1aWxsL2Zvcm1hdHMvY29sb3InXG5pbXBvcnQge0JhY2tncm91bmRTdHlsZX0gZnJvbSAncXVpbGwvZm9ybWF0cy9iYWNrZ3JvdW5kJ1xuaW1wb3J0IEJsb2NrcXVvdGUgZnJvbSAncXVpbGwvZm9ybWF0cy9ibG9ja3F1b3RlJ1xuXG5RdWlsbC5yZWdpc3Rlcih7XG4gICdtb2R1bGVzL3Rvb2xiYXInOiBUb29sYmFyLFxuICAndGhlbWVzL3Nub3cnOiBTbm93LFxuICAnZm9ybWF0cy9ib2xkJzogQm9sZCxcbiAgJ2Zvcm1hdHMvaXRhbGljJzogSXRhbGljLFxuICAnZm9ybWF0cy9zaXplJzogU2l6ZVN0eWxlLFxuICAnZm9ybWF0cy9jb2xvcic6IENvbG9yU3R5bGUsXG4gICdmb3JtYXRzL2JhY2tncm91bmQnOiBCYWNrZ3JvdW5kU3R5bGUsXG4gICdmb3JtYXRzL3VuZGVybGluZSc6IFVuZGVybGluZSxcbiAgJ2Zvcm1hdHMvaGVhZGVyJzogSGVhZGVyLFxuICAnZm9ybWF0cy9saXN0JzogTGlzdCxcbiAgJ2Zvcm1hdHMvbGlzdC1pdGVtJzogTGlzdEl0ZW0sXG4gICdmb3JtYXRzL2FsaWduJzogQWxpZ25TdHlsZVxufSlcblxuXG5leHBvcnQgZGVmYXVsdCBRdWlsbFxuXG5sZXQgb3B0aW9ucyA9IHtcbiAgdGhlbWU6ICdzbm93JyxcbiAgdG9vbGJhcjogJ2Z1bGwnXG59XG5cbmxldCB0b29sYmFyRnVsbE9wdGlvbnMgPSBbXG4gIFtcbiAgICB7J2hlYWRlcic6IFsxLCAyLCAzLCA0LCA1LCA2LCBmYWxzZV19LFxuICAgIHsnc2l6ZSc6IFsnc21hbGwnLCBmYWxzZSwgJ2xhcmdlJywgJ2h1Z2UnXX1cbiAgXSxcbiAgWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnXSwgICAgICAgIC8vIHRvZ2dsZWQgYnV0dG9uc1xuICBbeydjb2xvcic6IFtdfSwgeydiYWNrZ3JvdW5kJzogW119XSwgICAgICAgICAgLy8gZHJvcGRvd24gd2l0aCBkZWZhdWx0cyBmcm9tIHRoZW1lXG4gIFt7J2hlYWRlcic6IDF9LCB7J2hlYWRlcic6IDJ9XSxcbiAgW3snbGlzdCc6ICdvcmRlcmVkJ30sIHsnbGlzdCc6ICdidWxsZXQnfSwgeydpbmRlbnQnOiAnLTEnfSwgeydpbmRlbnQnOiAnKzEnfV0sXG4gIFsnbGluayddLFxuICBbJ2NsZWFuJ10gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBmb3JtYXR0aW5nIGJ1dHRvblxuXVxuXG5pZiAob3B0aW9ucy50b29sYmFyICE9PSB1bmRlZmluZWQpIHtcbiAgdmFyIHRvb2xiYXIgPSBvcHRpb25zLnRvb2xiYXIudG9Mb3dlckNhc2UoKVxuICBpZiAodG9vbGJhciA9PSAnZnVsbCcpIHtcbiAgICBvcHRpb25zLm1vZHVsZXMgPSB7XG4gICAgICAvL3N5bnRheDogJ3RydWUnLFxuICAgICAgdG9vbGJhcjogdG9vbGJhckZ1bGxPcHRpb25zXG4gICAgfVxuICB9XG59XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgaW5pdFF1aWxsKClcbn0pXG5cbiQoZG9jdW1lbnQpLmFqYXhDb21wbGV0ZShmdW5jdGlvbiAoKSB7XG4gIGluaXRRdWlsbCgpXG59KVxuXG5mdW5jdGlvbiBpbml0UXVpbGwgKCkge1xuICBsZXQgb2JqID0gJCgnW2RhdGEtcHJvdmlkZT1cInF1aWxsXCJdJylcbiAgaWYgKG9iai5sZW5ndGggPT09IDEpIHtcbiAgICBuZXcgUXVpbGwoJCgnW2RhdGEtcHJvdmlkZT1cInF1aWxsXCJdJylbMF0sIG9wdGlvbnMpXG4gIH1cbn1cblxuXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvdXRpbC5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDAxLzEyLzIwMjAgMjI6MDRcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXG5cbmxldCAkc3RvcENhdGNoRW50ZXIgPSBmYWxzZVxuXG5mdW5jdGlvbiByZWFkVXJsTWVudSAoJHVybCkge1xuICBjb25zdCAkZWx0ID0gJHVybC5zcGxpdCgnLycpXG4gIGxldCAkZmlyc3RFbHQgPSAyXG4gIGlmICgkZWx0WzFdID09PSAnaW5kZXgucGhwJykge1xuICAgIGlmICgkZWx0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICRmaXJzdEVsdCA9IDNcbiAgICB9XG4gIH1cblxuICBpZiAoJGVsdFskZmlyc3RFbHRdID09PSAnc3VwZXItYWRtaW5pc3RyYXRpb24nKSB7XG4gICAgJGZpcnN0RWx0ID0gJGZpcnN0RWx0ICsgMVxuICB9XG5cbiAgaWYgKCRlbHRbJGVsdC5sZW5ndGggLSAxXSA9PT0gJycpIHtcbiAgICAkZWx0LnBvcCgpXG4gIH1cblxuICAkKCcubWVudS1pdGVtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICQoJyNtZW51LScgKyAkZWx0WyRmaXJzdEVsdF0pLmFkZENsYXNzKCdhY3RpdmUnKVxufVxuXG4vL2NvbG9yaXNlIGxlIGJvbiBtZW51XG5yZWFkVXJsTWVudSgkKGxvY2F0aW9uKS5hdHRyKCdwYXRobmFtZScpKVxuXG5Td2FsLm1peGluKHtcbiAgY3VzdG9tQ2xhc3M6IHtcbiAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgfSxcbiAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG59KVxuLy9wb3AgdXAgZGUgY29uZmlybWF0aW9uIGRlIHN1cHByZXNzaW9uXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnN1cHByaW1lcicsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBjb25zdCB1cmwgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKVxuICBjb25zdCBjc3JmID0gJCh0aGlzKS5kYXRhKCdjc3JmJylcbiAgU3dhbC5maXJlKHtcbiAgICB0aXRsZTogJ0NvbmZpcm1lciBsYSBzdXBwcmVzc2lvbiA/JyxcbiAgICB0ZXh0OiAnTFxcJ29ww6lyYXRpb24gbmUgcG91cnJhIHBhcyDDqnRyZSBhbm51bMOpZS4nLFxuICAgIGljb246ICd3YXJuaW5nJyxcbiAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyMzMDg1ZDYnLFxuICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiAnI2QzMycsXG4gICAgY29uZmlybUJ1dHRvblRleHQ6ICdPdWksIGplIGNvbmZpcm1lJyxcbiAgICBjYW5jZWxCdXR0b25UZXh0OiAnTm9uLCBBbm51bGVyJyxcbiAgICBjdXN0b21DbGFzczoge1xuICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICB9LFxuICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICBpZiAocmVzdWx0LnZhbHVlKSB7XG4gICAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgdHlwZTogJ0RFTEVURScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBfdG9rZW46IGNzcmZcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgaWYgKGlkLmhhc093blByb3BlcnR5KCdyZWRpcmVjdCcpICYmIGlkLmhhc093blByb3BlcnR5KCd1cmwnKSkge1xuICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGlkLnVybFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL3Qucm93KFwiI2xpZ25lX1wiK2lkKS5yZW1vdmUoKS5kcmF3KCk7ID08IGRhdGF0dGFibGUgdG9kbzogcmVtb3ZlIGxpZ25lIHNpIGRhdGF0YWJsZSA/PyBwcm9ibMOobWUgZGFucyBhZG0+cGVyc29ubmVsXG4gICAgICAgICAgICAkKCcjbGlnbmVfJyArIGlkKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpXG4gICAgICAgICAgICBhZGRDYWxsb3V0KCdTdXBwcmVzc2lvbiBlZmZlY3R1w6llIGF2ZWMgc3VjY8OocycsICdzdWNjZXNzJylcbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgIHRpdGxlOiAnU3VwcHJpbcOpIScsXG4gICAgICAgICAgICAgIHRleHQ6ICdMXFwnZW5yZWdpc3RyZW1lbnQgYSDDqXTDqSBzdXBwcmltw6kuJyxcbiAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIGFqYXhPcHRpb25zLCB0aHJvd25FcnJvcikge1xuICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICB0aXRsZTogJ0VycmV1ciBsb3JzIGRlIGxhIHN1cHByZXNzaW9uIScsXG4gICAgICAgICAgICB0ZXh0OiAnTWVyY2kgZGUgcmVub3V2ZWxlciBsXFwnb3DDqXJhdGlvbicsXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgICAgfSlcbiAgICAgICAgICBhZGRDYWxsb3V0KCdFcnJldXIgbG9ycyBkZSBsYSB0ZW50YXRpdmUgZGUgc3VwcHJlc3Npb24nLCAnZGFuZ2VyJylcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgIH0gZWxzZSBpZiAoXG4gICAgICAvLyBSZWFkIG1vcmUgYWJvdXQgaGFuZGxpbmcgZGlzbWlzc2Fsc1xuICAgICAgcmVzdWx0LmRpc21pc3MgPT09ICdjYW5jZWwnXG4gICAgKSB7XG4gICAgICBTd2FsLmZpcmUoe1xuICAgICAgICB0aXRsZTogJ0NhbmNlbGxlZCcsXG4gICAgICAgIHRleHQ6ICdPSyEgVG91dCBlc3QgY29tbWUgYXZhbnQgIScsXG4gICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICB9LFxuICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuICB9KVxufSlcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENhbGxvdXQgKG1lc3NhZ2UsIGxhYmVsKSB7XG4gIGNvbnNvbGUubG9nKCdjYWxsb3V0JylcbiAgdmFyIHRyYW5zbGF0ZSA9IG5ldyBBcnJheSgpXG4gIHRyYW5zbGF0ZVsnc3VjY2VzcyddID0gJ1N1Y2PDqHMnXG4gIHRyYW5zbGF0ZVsnZGFuZ2VyJ10gPSAnRXJyZXVyJ1xuICB0cmFuc2xhdGVbJ3dhcm5pbmcnXSA9ICdBdHRlbnRpb24nXG5cbiAgY29uc3QgaHRtbCA9ICc8ZGl2IGNsYXNzPVwiY2FsbG91dCBjYWxsb3V0LScgKyBsYWJlbCArICdcIiByb2xlPVwiYWxlcnRcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiY2FsbG91dFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4mdGltZXM7PC9zcGFuPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxoNT4nICsgdHJhbnNsYXRlW2xhYmVsXSArICc8L2g1PlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxwPicgKyBtZXNzYWdlICsgJzwvcD5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgIDwvZGl2PidcblxuICAkKCcjbWFpbkNvbnRlbnQnKS5wcmVwZW5kKGh0bWwpLnNsaWRlRG93bignc2xvdycpXG4gICQoJy5jYWxsb3V0JykuZGVsYXkoNTAwMCkuc2xpZGVVcCgnc2xvdycpXG59XG5cbi8vRWRpdGFibGVcbmxldCBteUVkaXRJbml0aWFsQ29udGVudCA9ICcnXG5sZXQgdHlwZSA9ICd0ZXh0J1xubGV0IEVkaXRPbkxpbmUgPSBmYWxzZVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm15ZWRpdCcsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBteUVkaXRJbml0aWFsQ29udGVudCA9ICQodGhpcylcbiAgbGV0IGh0bWwgPSAnJ1xuICBFZGl0T25MaW5lID0gdHJ1ZVxuICBpZiAodHlwZW9mICgkKHRoaXMpLmRhdGEoJ3R5cGUnKSkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdHlwZSA9ICQodGhpcykuZGF0YSgndHlwZScpXG4gIH1cblxuICBpZiAoJCh0aGlzKS5kYXRhKCd0eXBlJykgPT09ICdzZWxlY3QnKSB7XG4gICAgLy90b2RvOiBBIGZpbmFsaXNlclxuICB9IGVsc2UgaWYgKCQodGhpcykuZGF0YSgndHlwZScpID09PSAndGV4dGFyZWEnKSB7XG4gICAgaHRtbCA9IGdlbmVyZVRleHRBcmVhKCQodGhpcykpXG4gIH0gZWxzZSB7XG4gICAgaHRtbCA9IGdlbmVyZUlucHV0KCQodGhpcykpXG4gIH1cbiAgJCh0aGlzKS5yZXBsYWNlV2l0aChodG1sKVxuICAkKCcjbXllZGl0LWlucHV0JykuZm9jdXMoKVxufSlcblxuJChkb2N1bWVudCkub24oJ2tleXVwJywgJyNteWVkaXQtaW5wdXQnLCBmdW5jdGlvbiAoZSkge1xuICBpZiAoZS5rZXlDb2RlID09PSAxMyAmJiAkc3RvcENhdGNoRW50ZXIgPT09IGZhbHNlKSB7XG4gICAgdXBkYXRlRGF0YSgpXG4gIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI215ZWRpdC12YWxpZGUnLCBmdW5jdGlvbiAoZSkge1xuICAkc3RvcENhdGNoRW50ZXIgPSBmYWxzZVxuICBlLnByZXZlbnREZWZhdWx0KClcbiAgdXBkYXRlRGF0YSgpXG59KVxuXG4kKGRvY3VtZW50KS5vbigna2V5cHJlc3MnLCBmdW5jdGlvbiAoZSkge1xuICBpZiAoRWRpdE9uTGluZSA9PT0gdHJ1ZSAmJiAkc3RvcENhdGNoRW50ZXIgPT09IGZhbHNlICYmIGUud2hpY2ggPT09IDEzKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdXBkYXRlRGF0YSgpXG4gIH1cblxuICBpZiAoRWRpdE9uTGluZSA9PT0gdHJ1ZSAmJiAkc3RvcENhdGNoRW50ZXIgPT09IGZhbHNlICYmIGUud2hpY2ggPT09IDI3KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG4gIH1cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbXllZGl0LWFubnVsZScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbn0pXG5cbmZ1bmN0aW9uIHVwZGF0ZURhdGEgKCkge1xuICBsZXQgdmFsID0gJCgnI215ZWRpdC1pbnB1dCcpLnZhbCgpXG4gICQuYWpheCh7XG4gICAgdXJsOiBteUVkaXRJbml0aWFsQ29udGVudC5hdHRyKCdocmVmJyksXG4gICAgZGF0YToge1xuICAgICAgZmllbGQ6IG15RWRpdEluaXRpYWxDb250ZW50LmRhdGEoJ2ZpZWxkJyksXG4gICAgICB2YWx1ZTogdmFsLFxuICAgICAgdHlwZTogdHlwZVxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgbXlFZGl0SW5pdGlhbENvbnRlbnQuaHRtbCh2YWwpXG4gICAgICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbiAgICAgIEVkaXRPbkxpbmUgPSBmYWxzZVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gZ2VuZXJlVGV4dEFyZWEgKCRvYmopIHtcbiAgJHN0b3BDYXRjaEVudGVyID0gdHJ1ZVxuICByZXR1cm4gJzxkaXYgaWQ9XCJteUVkaXQtem9uZVwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHJvd3M9XCI1XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIm15ZWRpdC1pbnB1dFwiPicgKyAkb2JqLmh0bWwoKS50cmltKCkgKyAnPC90ZXh0YXJlYT5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XFxuJyArXG4gICAgJyA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzLW91dGxpbmVcIiBpZD1cIm15ZWRpdC12YWxpZGVcIj48aSBjbGFzcz1cImZhcyBmYS1jaGVja1wiPjwvaT48L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyLW91dGxpbmVcIiBpZD1cIm15ZWRpdC1hbm51bGVcIj48aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT48L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nXG59XG5cbmZ1bmN0aW9uIGdlbmVyZUlucHV0ICgkb2JqKSB7XG5cbiAgcmV0dXJuICc8ZGl2IGlkPVwibXlFZGl0LXpvbmVcIiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwibXllZGl0LWlucHV0XCIgdmFsdWU9XCInICsgJG9iai5odG1sKCkudHJpbSgpICsgJ1wiID5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XFxuJyArXG4gICAgJyA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzLW91dGxpbmVcIiBpZD1cIm15ZWRpdC12YWxpZGVcIj48aSBjbGFzcz1cImZhcyBmYS1jaGVja1wiPjwvaT48L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyLW91dGxpbmVcIiBpZD1cIm15ZWRpdC1hbm51bGVcIj48aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT48L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nXG59XG5cbmpRdWVyeS5mbi5kYXRhQXR0ciA9IGZ1bmN0aW9uIChuYW1lLCBkZWYpIHtcbiAgcmV0dXJuICQodGhpcylbMF0uZ2V0QXR0cmlidXRlKCdkYXRhLScgKyBuYW1lKSB8fCBkZWZcbn1cblxualF1ZXJ5LmZuLmhhc0RhdGFBdHRyID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuICQodGhpcylbMF0uaGFzQXR0cmlidXRlKCdkYXRhLScgKyBuYW1lKVxufVxuXG5mdW5jdGlvbiBkYXRhVG9PcHRpb24gKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUucmVwbGFjZSgvLShbYS16XSkvZywgZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4geFsxXS50b1VwcGVyQ2FzZSgpXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhT3B0aW9ucyAoZWwsIGNhc3RMaXN0KSB7XG4gIHZhciBvcHRpb25zID0ge31cbiAgJC5lYWNoKCQoZWwpLmRhdGEoKSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcblxuICAgIGtleSA9IGRhdGFUb09wdGlvbihrZXkpXG5cbiAgICAvLyBFc2NhcGUgZGF0YS1wcm92aWRlXG4gICAgaWYgKGtleSA9PSAncHJvdmlkZScpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChjYXN0TGlzdCAhPSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciB0eXBlID0gY2FzdExpc3Rba2V5XVxuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2Jvb2wnOlxuICAgICAgICAgIHZhbHVlID0gQm9vbGVhbih2YWx1ZSlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ251bSc6XG4gICAgICAgICAgdmFsdWUgPSBOdW1iZXIodmFsdWUpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnLCcpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBkZWZhdWx0OlxuXG4gICAgICB9XG4gICAgfVxuXG4gICAgb3B0aW9uc1trZXldID0gdmFsdWVcbiAgfSlcblxuICByZXR1cm4gb3B0aW9uc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52YWxpZENoYW1wcyAoJG9iaikge1xuICAkb2JqLnJlbW92ZUNsYXNzKCdpcy12YWxpZCcpLmFkZENsYXNzKCdpcy1pbnZhbGlkJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkQ2hhbXBzICgkb2JqKSB7XG4gICRvYmoucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKS5hZGRDbGFzcygnaXMtdmFsaWQnKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGxldGVDaGFtcHMgKCRvYmopIHtcbiAgJG9iai5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpLnJlbW92ZUNsYXNzKCdpcy12YWxpZCcpXG59XG4iXSwic291cmNlUm9vdCI6IiJ9
