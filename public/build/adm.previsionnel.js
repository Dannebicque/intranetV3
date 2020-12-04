// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/public/build/adm.previsionnel.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 04/12/2020 13:44

(window['webpackJsonp'] = window['webpackJsonp'] || []).push([['adm.previsionnel'], {

  /***/ './assets/js/pages/adm.previsionnel.js':
  /*!*********************************************!*\
    !*** ./assets/js/pages/adm.previsionnel.js ***!
    \*********************************************/
  /*! no exports provided */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    'use strict'
    __webpack_require__.r(__webpack_exports__);
    /* WEBPACK VAR INJECTION */
    (function ($, jQuery) {/* harmony import */
      var core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed */ './node_modules/core-js/modules/es.number.to-fixed.js')
      /* harmony import */
      var core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_0__)
      /* harmony import */
      var core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.parse-float */ './node_modules/core-js/modules/es.parse-float.js')
      /* harmony import */
      var core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_1__)
      /* harmony import */
      var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.parse-int */ './node_modules/core-js/modules/es.parse-int.js')
      /* harmony import */
      var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_2__)
      /* harmony import */
      var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ './assets/js/util.js')


// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.previsionnel.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 30/07/2020 11:18

      var nbLignePrevisionnel = 1
      $(document).on('change', '.changeIntervenantPrevi', function (e) {
        e.preventDefault()
        e.stopPropagation()
        $.ajax({
          url: Routing.generate('administration_previsionnel_ajax_edit', {
            id: $(this).data('previ')
          }),
          method: 'POST',
          data: {
            value: $(this).val(),
            field: 'personnel'
          },
          success: function success () {
            Object(_util__WEBPACK_IMPORTED_MODULE_3__['addCallout'])('Modification de prévisionnel enregistrée !', 'success')
          },
          error: function error () {
            Object(_util__WEBPACK_IMPORTED_MODULE_3__['addCallout'])('Erreur lors de la modification du prévisionnel !', 'danger')
          }
        })
      })
      $(document).on('change', '#previSemestre', function (e) {
        e.preventDefault()
        e.stopPropagation()
        $('#blocPrevisionnel').empty().load(Routing.generate('administration_previsionnel_semestre', {
          semestre: $(this).val(),
          annee: $(this).data('annee')
        }))
      })
      $(document).on('click', '#reloadPreviSemestre', function (e) {
        e.preventDefault()
        e.stopPropagation()
        $('#blocPrevisionnel').empty().load(Routing.generate('administration_previsionnel_semestre', {
          semestre: $(this).data('semestre'),
          annee: $(this).data('annee')
        }))
      })
      $(document).on('change', '#previMatiere', function (e) {
        e.preventDefault()
        e.stopPropagation()
        $('#blocPrevisionnel').empty().load(Routing.generate('administration_previsionnel_matiere', {
          matiere: $(this).val(),
          annee: $(this).data('annee')
        }))
      })
      $(document).on('click', '#reloadPreviMatiere', function (e) {
        e.preventDefault()
        e.stopPropagation()
        $('#blocPrevisionnel').empty().load(Routing.generate('administration_previsionnel_matiere', {
          matiere: $(this).data('matiere'),
          annee: $(this).data('annee')
        }))
      })
      $(document).on('change', '#previPersonnel', function (e) {
        e.preventDefault()
        e.stopPropagation()
        $('#blocPrevisionnel').empty().load(Routing.generate('administration_previsionnel_personnel', {
          personnel: $(this).val(),
          annee: $(this).data('annee')
        }))
      })
      $(document).on('click', '#reloadPreviPersonnel', function (e) {
        e.preventDefault()
        e.stopPropagation()
        $('#blocPrevisionnel').empty().load(Routing.generate('administration_previsionnel_personnel', {
          personnel: $(this).data('personnel'),
          annee: $(this).data('annee')
        }))
      })
      $(document).on('click', '.previsionnel_add_change', function (e) {
        e.preventDefault()
        e.stopPropagation()
        $('.previsionnel_add_change').removeClass('active show')
        $(this).addClass('active show')
        $('#mainContent').empty().load($(this).attr('href'))
      })
      $(document).on('click', '#addIntervenantPrevisionnel', function (e) {
        e.preventDefault()
        e.stopPropagation()
        nbLignePrevisionnel++
        $.ajax({
          url: Routing.generate('api_enseignants_departement'),
          method: 'POST',
          success: function success (data) {
            var html = '<tr>\n' + '                        <td>\n' + '                            <select class="form-control" data-live-search="true" name="intervenant_' + nbLignePrevisionnel + '" id="intervenant_' + nbLignePrevisionnel + '">\n' + '                                <option value="">Choisir l\'intervenant</option>\n'
            jQuery.each(data, function (index, pers) {
              html = html + '<option value="' + pers.id + '">' + pers.display + '</option>\n'
            })
            html = html + '                            </select>\n' + '                        </td>\n' + '                        <td><input type="text" name="cm_' + nbLignePrevisionnel + '" id="cm_' + nbLignePrevisionnel + '" data-ligne="' + nbLignePrevisionnel + '" class="form-control chgcm" value="0"></td>\n' + '                        <td><input type="number" name="gr_cm_' + nbLignePrevisionnel + '" id="gr_cm_' + nbLignePrevisionnel + '" value="0" data-ligne="' + nbLignePrevisionnel + '" class="form-control chgcm">\n' + '                        </td>\n' + '                        <td id="ind_cm_' + nbLignePrevisionnel + '">0</td>\n' + '                        <td style="background-color: #68C39F"><input type="text" value="0" name="td_' + nbLignePrevisionnel + '" id="td_' + nbLignePrevisionnel + '" data-ligne="' + nbLignePrevisionnel + '"\n' + '                                                                     class="form-control chgtd"></td>\n' + '                        <td style="background-color: #68C39F"><input type="number" value="0" name="gr_td_' + nbLignePrevisionnel + '" id="gr_td_' + nbLignePrevisionnel + '"\n' + '                                                                     data-ligne="' + nbLignePrevisionnel + '" class="form-control chgtd"></td>\n' + '                        <td style="background-color: #68C39F" id="ind_td_' + nbLignePrevisionnel + '">0</td>\n' + '                        <td style="background-color: #FFC052"><input type="text" value="0" name="tp_' + nbLignePrevisionnel + '" id="tp_' + nbLignePrevisionnel + '" data-ligne="' + nbLignePrevisionnel + '"\n' + '                                                                     class="form-control chgtp"></td>\n' + '                        <td style="background-color: #FFC052"><input type="number" value="0" name="gr_tp_' + nbLignePrevisionnel + '" id="gr_tp_' + nbLignePrevisionnel + '"\n' + '                                                                     data-ligne="' + nbLignePrevisionnel + '" class="form-control chgtp"></td>\n' + '                        <td style="background-color: #FFC052" id="ind_tp_' + nbLignePrevisionnel + '">0</td>\n' + '                    </tr>'
            $('#nbLigne').val(nbLignePrevisionnel)
            $('#ligneAdd').before(html)
            $('#intervenant_' + nbLignePrevisionnel).selectpicker()
          }
        })
      })
      $(document).on('change', '.chgcm', function (e) {
        var ligne = $(this).data('ligne')
        var nbSeance = parseFloat($('#cm_' + ligne).val()) / 1.5
        $('#ind_cm_' + ligne).html(nbSeance.toFixed(2))
        updateSynthesePrevisionnel()
      })
      $(document).on('change', '.chgtd', function (e) {
        var ligne = $(this).data('ligne')
        var nbSeance = parseFloat($('#td_' + ligne).val()) / 1.5
        $('#ind_td_' + ligne).html(nbSeance.toFixed(2))
        updateSynthesePrevisionnel()
      })
      $(document).on('change', '.chgtp', function (e) {
        var ligne = $(this).data('ligne')
        var nbSeance = parseFloat($('#tp_' + ligne).val()) / 1.5
        $('#ind_tp_' + ligne).html(nbSeance.toFixed(2))
        updateSynthesePrevisionnel()
      })

      function updateSynthesePrevisionnel () {
        var totalCm = 0
        var totalTd = 0
        var totalTp = 0
        var totalEqTd = 0
        var totalEtu = 0
        var totalHeuresCm = 0
        var totalHeuresTd = 0
        var totalHeuresTp = 0 //let totalMatiere = 0

        for (var i = 1; i <= nbLignePrevisionnel; i++) {
          var $cm = $('#cm_' + i)
          var $td = $('#td_' + i)
          var $tp = $('#tp_' + i)
          totalCm = totalCm + parseFloat($cm.val()) * parseInt($('#gr_cm_' + i).val())
          totalTd = totalTd + parseFloat($td.val()) * parseInt($('#gr_td_' + i).val())
          totalTp = totalTp + parseFloat($tp.val()) * parseInt($('#gr_tp_' + i).val())
          totalHeuresCm = totalHeuresCm + parseFloat($cm.val())
          totalHeuresTd = totalHeuresTd + parseFloat($td.val())
          totalHeuresTp = totalHeuresTp + parseFloat($tp.val())
          totalEtu = totalEtu + parseFloat($cm.val()) + parseFloat($td.val()) + parseFloat($tp.val())
        }

        totalEqTd = totalCm + totalTd + totalTp
        $('#totalCm').html(totalCm.toFixed(2))
        $('#totalTd').html(totalTd.toFixed(2))
        $('#totalTp').html(totalTp.toFixed(2))
        $('#totalEqTd').html(totalEqTd.toFixed(2))
        $('#totalEtu').html(totalEtu.toFixed(2))
        /** vérificiation */

        /* todo: ne fonctionne par, car doit prendre en compte le nombre de groupe et les possibles autres données déjà saisies. */

        $('#totalHeuresCm').html(totalHeuresCm.toFixed(2))
        $('#totalHeuresTd').html(totalHeuresTd.toFixed(2))
        $('#totalHeuresTp').html(totalHeuresTp.toFixed(2))
        var diffCm = parseFloat($('#cmMaquette').html()) - totalHeuresCm
        var diffTd = parseFloat($('#tdMaquette').html()) - totalHeuresTd
        var diffTp = parseFloat($('#tpMaquette').html()) - totalHeuresTp
        $('#diffCm').html(diffCm.toFixed(2))
        $('#diffTd').html(diffTd.toFixed(2))
        $('#diffTp').html(diffTp.toFixed(2))

        if (diffCm < 0) {
          $('#diffCm').addClass('erreurPrevi').removeClass('validePrevi')
        } else {
          $('#diffCm').addClass('validePrevi').removeClass('erreurPrevi')
        }

        if (diffTd < 0) {
          $('#diffTd').addClass('erreurPrevi').removeClass('validePrevi')
        } else {
          $('#diffTd').addClass('validePrevi').removeClass('erreurPrevi')
        }

        if (diffTp < 0) {
          $('#diffTp').addClass('erreurPrevi').removeClass('validePrevi')
        } else {
          $('#diffTp').addClass('validePrevi').removeClass('erreurPrevi')
        }
      }

      $(document).on('change', '#previsionnel_matiere', function () {
        var volumeMatiere = $('#volumeMatiere')

        if ($(this).val() === '') {
          volumeMatiere.html('Choisir d\'abord une matière')
        } else {
          $.ajax({
            url: Routing.generate('api_matiere', {
              'matiere': $(this).val()
            }),
            success: function success (data) {
              var html = 'PPN Officiel => CM ' + data.cmFormation + ' heure(s); TD ' + data.tdFormation + ' heure(s); TP ' + data.tpFormation + ' heure(s); PPN Réalisé/departement => CM ' + data.cmPpn + ' heure(s); TD ' + data.tdPpn + ' heure(s); TP ' + data.tpPpn + ' heure(s);'
              volumeMatiere.html(html)
              $('#cmMaquette').html(data.cmFormation)
              $('#totalHeuresCm').html(0)
              $('#diffCm').html(0)
              $('#tdMaquette').html(data.tdFormation)
              $('#totalHeuresTd').html(0)
              $('#diffTd').html(0)
              $('#tpMaquette').html(data.tpFormation)
              $('#totalHeuresTp').html(0)
              $('#diffTp').html(0)
              $('#tabheures').show()
            }
          })
        }
      })
      $(document).on('click', '#btnGenereFichier', function (e) {
        e.preventDefault()
        e.stopPropagation()
        var selectedChamps = []
        $('input:checkbox[name=exportChamps]:checked').each(function () {
          selectedChamps.push($(this).val())
        })
        $.ajax({
          url: Routing.generate('export_listing.fr'),
          method: 'POST',
          data: {
            'matiere': $(this).data('matiere'),
            'exportTypeDocument': $('input[type=radio][name=exportTypeDocument]:checked').val(),
            'exportChamps': selectedChamps,
            'exportFormat': $('input[type=radio][name=exportFormat]:checked').val(),
            'exportFiltre': $('input[type=radio][name=exportFiltre]:checked').val()
          },
          success: function success (fichier) {
          }
        })
      }) //reload si changement d'année

      $(document).on('change', '#change_annee_temp_hrs', function (e) {
        window.location = Routing.generate('administration_hrs_index', {
          annee: $(this).val()
        })
      })
      $(document).on('change', '#change_annee_temp_previsionnel', function (e) {
        window.location = Routing.generate('administration_previsionnel_index', {
          annee: $(this).val()
        })
      })
      /* WEBPACK VAR INJECTION */
    }.call(this, __webpack_require__(/*! jquery */ './node_modules/jquery/dist/jquery.js'), __webpack_require__(/*! jquery */ './node_modules/jquery/dist/jquery.js')))

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

  /***/ './node_modules/core-js/internals/number-parse-float.js':
  /*!**************************************************************!*\
    !*** ./node_modules/core-js/internals/number-parse-float.js ***!
    \**************************************************************/
  /*! no static exports found */
  /***/ (function (module, exports, __webpack_require__) {

    var global = __webpack_require__(/*! ../internals/global */ './node_modules/core-js/internals/global.js')
    var trim = __webpack_require__(/*! ../internals/string-trim */ './node_modules/core-js/internals/string-trim.js').trim
    var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ './node_modules/core-js/internals/whitespaces.js')

    var $parseFloat = global.parseFloat
    var FORCED = 1 / $parseFloat(whitespaces + '-0') !== -Infinity

// `parseFloat` method
// https://tc39.github.io/ecma262/#sec-parsefloat-string
    module.exports = FORCED ? function parseFloat (string) {
      var trimmedString = trim(String(string))
      var result = $parseFloat(trimmedString)
      return result === 0 && trimmedString.charAt(0) == '-' ? -0 : result
    } : $parseFloat


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

  /***/ './node_modules/core-js/internals/string-repeat.js':
  /*!*********************************************************!*\
    !*** ./node_modules/core-js/internals/string-repeat.js ***!
    \*********************************************************/
  /*! no static exports found */
  /***/ (function (module, exports, __webpack_require__) {

    'use strict'

    var toInteger = __webpack_require__(/*! ../internals/to-integer */ './node_modules/core-js/internals/to-integer.js')
    var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ './node_modules/core-js/internals/require-object-coercible.js')

// `String.prototype.repeat` method implementation
// https://tc39.github.io/ecma262/#sec-string.prototype.repeat
    module.exports = ''.repeat || function repeat (count) {
      var str = String(requireObjectCoercible(this))
      var result = ''
      var n = toInteger(count)
      if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions')
      for (; n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str
      return result
    }


    /***/
  }),

  /***/ './node_modules/core-js/internals/this-number-value.js':
  /*!*************************************************************!*\
    !*** ./node_modules/core-js/internals/this-number-value.js ***!
    \*************************************************************/
  /*! no static exports found */
  /***/ (function (module, exports, __webpack_require__) {

    var classof = __webpack_require__(/*! ../internals/classof-raw */ './node_modules/core-js/internals/classof-raw.js')

// `thisNumberValue` abstract operation
// https://tc39.github.io/ecma262/#sec-thisnumbervalue
    module.exports = function (value) {
      if (typeof value != 'number' && classof(value) != 'Number') {
        throw TypeError('Incorrect invocation')
      }
      return +value
    }


    /***/
  }),

  /***/ './node_modules/core-js/modules/es.number.to-fixed.js':
  /*!************************************************************!*\
    !*** ./node_modules/core-js/modules/es.number.to-fixed.js ***!
    \************************************************************/
  /*! no static exports found */
  /***/ (function (module, exports, __webpack_require__) {

    'use strict'

    var $ = __webpack_require__(/*! ../internals/export */ './node_modules/core-js/internals/export.js')
    var toInteger = __webpack_require__(/*! ../internals/to-integer */ './node_modules/core-js/internals/to-integer.js')
    var thisNumberValue = __webpack_require__(/*! ../internals/this-number-value */ './node_modules/core-js/internals/this-number-value.js')
    var repeat = __webpack_require__(/*! ../internals/string-repeat */ './node_modules/core-js/internals/string-repeat.js')
    var fails = __webpack_require__(/*! ../internals/fails */ './node_modules/core-js/internals/fails.js')

    var nativeToFixed = 1.0.toFixed
    var floor = Math.floor

    var pow = function (x, n, acc) {
      return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc)
    }

    var log = function (x) {
      var n = 0
      var x2 = x
      while (x2 >= 4096) {
        n += 12
        x2 /= 4096
      }
      while (x2 >= 2) {
        n += 1
        x2 /= 2
      }
      return n
    }

    var FORCED = nativeToFixed && (
      0.00008.toFixed(3) !== '0.000' ||
      0.9.toFixed(0) !== '1' ||
      1.255.toFixed(2) !== '1.25' ||
      1000000000000000128.0.toFixed(0) !== '1000000000000000128'
    ) || !fails(function () {
      // V8 ~ Android 4.3-
      nativeToFixed.call({})
    })

// `Number.prototype.toFixed` method
// https://tc39.github.io/ecma262/#sec-number.prototype.tofixed
    $({target: 'Number', proto: true, forced: FORCED}, {
      // eslint-disable-next-line max-statements
      toFixed: function toFixed (fractionDigits) {
        var number = thisNumberValue(this)
        var fractDigits = toInteger(fractionDigits)
        var data = [0, 0, 0, 0, 0, 0]
        var sign = ''
        var result = '0'
        var e, z, j, k

        var multiply = function (n, c) {
          var index = -1
          var c2 = c
          while (++index < 6) {
            c2 += n * data[index]
            data[index] = c2 % 1e7
            c2 = floor(c2 / 1e7)
          }
        }

        var divide = function (n) {
          var index = 6
          var c = 0
          while (--index >= 0) {
            c += data[index]
            data[index] = floor(c / n)
            c = (c % n) * 1e7
          }
        }

        var dataToString = function () {
          var index = 6
          var s = ''
          while (--index >= 0) {
            if (s !== '' || index === 0 || data[index] !== 0) {
              var t = String(data[index])
              s = s === '' ? t : s + repeat.call('0', 7 - t.length) + t
            }
          }
          return s
        }

        if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits')
        // eslint-disable-next-line no-self-compare
        if (number != number) return 'NaN'
        if (number <= -1e21 || number >= 1e21) return String(number)
        if (number < 0) {
          sign = '-'
          number = -number
        }
        if (number > 1e-21) {
          e = log(number * pow(2, 69, 1)) - 69
          z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1)
          z *= 0x10000000000000
          e = 52 - e
          if (e > 0) {
            multiply(0, z)
            j = fractDigits
            while (j >= 7) {
              multiply(1e7, 0)
              j -= 7
            }
            multiply(pow(10, j, 1), 0)
            j = e - 1
            while (j >= 23) {
              divide(1 << 23)
              j -= 23
            }
            divide(1 << j)
            multiply(1, 1)
            divide(2)
            result = dataToString()
          } else {
            multiply(0, z)
            multiply(1 << -e, 0)
            result = dataToString() + repeat.call('0', fractDigits)
          }
        }
        if (fractDigits > 0) {
          k = result.length
          result = sign + (k <= fractDigits
            ? '0.' + repeat.call('0', fractDigits - k) + result
            : result.slice(0, k - fractDigits) + '.' + result.slice(k - fractDigits))
        } else {
          result = sign + result
        }
        return result
      }
    })


    /***/
  }),

  /***/ './node_modules/core-js/modules/es.parse-float.js':
  /*!********************************************************!*\
    !*** ./node_modules/core-js/modules/es.parse-float.js ***!
    \********************************************************/
  /*! no static exports found */
  /***/ (function (module, exports, __webpack_require__) {

    var $ = __webpack_require__(/*! ../internals/export */ './node_modules/core-js/internals/export.js')
    var parseFloatImplementation = __webpack_require__(/*! ../internals/number-parse-float */ './node_modules/core-js/internals/number-parse-float.js')

// `parseFloat` method
// https://tc39.github.io/ecma262/#sec-parsefloat-string
    $({global: true, forced: parseFloat != parseFloatImplementation}, {
      parseFloat: parseFloatImplementation
    })


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

}, [['./assets/js/pages/adm.previsionnel.js', 'runtime', 'vendors~absences~adm.absences~adm.alternances~adm.articles~adm.bornes~adm.configuration~adm.edt~adm.~b8aa102b', 'vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~b8fda26e', 'vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~92da351e', 'vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~14b603b0', 'vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.groupe~adm.justificat~2f9ea679']]])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvYWRtLnByZXZpc2lvbm5lbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbnVtYmVyLXBhcnNlLWZsb2F0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9udW1iZXItcGFyc2UtaW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctcmVwZWF0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90aGlzLW51bWJlci12YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm51bWJlci50by1maXhlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnBhcnNlLWZsb2F0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMucGFyc2UtaW50LmpzIl0sIm5hbWVzIjpbIm5iTGlnbmVQcmV2aXNpb25uZWwiLCIkIiwiZG9jdW1lbnQiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImFqYXgiLCJ1cmwiLCJSb3V0aW5nIiwiZ2VuZXJhdGUiLCJpZCIsImRhdGEiLCJtZXRob2QiLCJ2YWx1ZSIsInZhbCIsImZpZWxkIiwic3VjY2VzcyIsImFkZENhbGxvdXQiLCJlcnJvciIsImVtcHR5IiwibG9hZCIsInNlbWVzdHJlIiwiYW5uZWUiLCJtYXRpZXJlIiwicGVyc29ubmVsIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImF0dHIiLCJodG1sIiwialF1ZXJ5IiwiZWFjaCIsImluZGV4IiwicGVycyIsImRpc3BsYXkiLCJiZWZvcmUiLCJzZWxlY3RwaWNrZXIiLCJsaWduZSIsIm5iU2VhbmNlIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJ1cGRhdGVTeW50aGVzZVByZXZpc2lvbm5lbCIsInRvdGFsQ20iLCJ0b3RhbFRkIiwidG90YWxUcCIsInRvdGFsRXFUZCIsInRvdGFsRXR1IiwidG90YWxIZXVyZXNDbSIsInRvdGFsSGV1cmVzVGQiLCJ0b3RhbEhldXJlc1RwIiwiaSIsIiRjbSIsIiR0ZCIsIiR0cCIsInBhcnNlSW50IiwiZGlmZkNtIiwiZGlmZlRkIiwiZGlmZlRwIiwidm9sdW1lTWF0aWVyZSIsImNtRm9ybWF0aW9uIiwidGRGb3JtYXRpb24iLCJ0cEZvcm1hdGlvbiIsImNtUHBuIiwidGRQcG4iLCJ0cFBwbiIsInNob3ciLCJzZWxlY3RlZENoYW1wcyIsInB1c2giLCJmaWNoaWVyIiwid2luZG93IiwibG9jYXRpb24iLCIkc3RvcENhdGNoRW50ZXIiLCJyZWFkVXJsTWVudSIsIiR1cmwiLCIkZWx0Iiwic3BsaXQiLCIkZmlyc3RFbHQiLCJsZW5ndGgiLCJwb3AiLCJTd2FsIiwibWl4aW4iLCJjdXN0b21DbGFzcyIsImNvbmZpcm1CdXR0b24iLCJjYW5jZWxCdXR0b24iLCJidXR0b25zU3R5bGluZyIsImNzcmYiLCJmaXJlIiwidGl0bGUiLCJ0ZXh0IiwiaWNvbiIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsInRoZW4iLCJyZXN1bHQiLCJ0eXBlIiwiX3Rva2VuIiwiaGFzT3duUHJvcGVydHkiLCJocmVmIiwiY2xvc2VzdCIsInJlbW92ZSIsInhociIsImFqYXhPcHRpb25zIiwidGhyb3duRXJyb3IiLCJkaXNtaXNzIiwibWVzc2FnZSIsImxhYmVsIiwiY29uc29sZSIsImxvZyIsInRyYW5zbGF0ZSIsIkFycmF5IiwicHJlcGVuZCIsInNsaWRlRG93biIsImRlbGF5Iiwic2xpZGVVcCIsIm15RWRpdEluaXRpYWxDb250ZW50IiwiRWRpdE9uTGluZSIsImdlbmVyZVRleHRBcmVhIiwiZ2VuZXJlSW5wdXQiLCJyZXBsYWNlV2l0aCIsImZvY3VzIiwia2V5Q29kZSIsInVwZGF0ZURhdGEiLCJ3aGljaCIsIiRvYmoiLCJ0cmltIiwiZm4iLCJkYXRhQXR0ciIsIm5hbWUiLCJkZWYiLCJnZXRBdHRyaWJ1dGUiLCJoYXNEYXRhQXR0ciIsImhhc0F0dHJpYnV0ZSIsImRhdGFUb09wdGlvbiIsInJlcGxhY2UiLCJ4IiwidG9VcHBlckNhc2UiLCJnZXREYXRhT3B0aW9ucyIsImVsIiwiY2FzdExpc3QiLCJvcHRpb25zIiwia2V5IiwidW5kZWZpbmVkIiwiQm9vbGVhbiIsIk51bWJlciIsImludmFsaWRDaGFtcHMiLCJ2YWxpZENoYW1wcyIsImNvbXBsZXRlQ2hhbXBzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxtQkFBbUIsR0FBRyxDQUExQjtBQUVBQyxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxFQUFaLENBQWUsUUFBZixFQUF5Qix5QkFBekIsRUFBb0QsVUFBVUMsQ0FBVixFQUFhO0FBQy9EQSxHQUFDLENBQUNDLGNBQUY7QUFDQUQsR0FBQyxDQUFDRSxlQUFGO0FBQ0FMLEdBQUMsQ0FBQ00sSUFBRixDQUFPO0FBQ0xDLE9BQUcsRUFBRUMsT0FBTyxDQUFDQyxRQUFSLENBQWlCLHVDQUFqQixFQUEwRDtBQUFDQyxRQUFFLEVBQUVWLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVcsSUFBUixDQUFhLE9BQWI7QUFBTCxLQUExRCxDQURBO0FBRUxDLFVBQU0sRUFBRSxNQUZIO0FBR0xELFFBQUksRUFBRTtBQUNKRSxXQUFLLEVBQUViLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWMsR0FBUixFQURIO0FBRUpDLFdBQUssRUFBRTtBQUZILEtBSEQ7QUFPTEMsV0FBTyxFQUFFLG1CQUFZO0FBQ25CQyw4REFB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Ozs7Ozs7QUM3SEQsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQywrQkFBK0IsbUJBQU8sQ0FBQywrRkFBaUM7O0FBRXhFO0FBQ0E7QUFDQSxHQUFHLCtEQUErRDtBQUNsRTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ1BELFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsNkJBQTZCLG1CQUFPLENBQUMsMkZBQStCOztBQUVwRTtBQUNBO0FBQ0EsR0FBRywyREFBMkQ7QUFDOUQ7QUFDQSxDQUFDIiwiZmlsZSI6ImFkbS5wcmV2aXNpb25uZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvcGFnZXMvYWRtLnByZXZpc2lvbm5lbC5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDMwLzA3LzIwMjAgMTE6MThcbmltcG9ydCB7YWRkQ2FsbG91dH0gZnJvbSAnLi4vdXRpbCdcblxubGV0IG5iTGlnbmVQcmV2aXNpb25uZWwgPSAxXG5cbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnLmNoYW5nZUludGVydmVuYW50UHJldmknLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fcHJldmlzaW9ubmVsX2FqYXhfZWRpdCcsIHtpZDogJCh0aGlzKS5kYXRhKCdwcmV2aScpfSksXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgZGF0YToge1xuICAgICAgdmFsdWU6ICQodGhpcykudmFsKCksXG4gICAgICBmaWVsZDogJ3BlcnNvbm5lbCdcbiAgICB9LFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGFkZENhbGxvdXQoJ01vZGlmaWNhdGlvbiBkZSBwcsOpdmlzaW9ubmVsIGVucmVnaXN0csOpZSAhJywgJ3N1Y2Nlc3MnKVxuICAgIH0sXG4gICAgZXJyb3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGFkZENhbGxvdXQoJ0VycmV1ciBsb3JzIGRlIGxhIG1vZGlmaWNhdGlvbiBkdSBwcsOpdmlzaW9ubmVsICEnLCAnZGFuZ2VyJylcbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJyNwcmV2aVNlbWVzdHJlJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgJCgnI2Jsb2NQcmV2aXNpb25uZWwnKS5lbXB0eSgpLmxvYWQoUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fcHJldmlzaW9ubmVsX3NlbWVzdHJlJywge1xuICAgIHNlbWVzdHJlOiAkKHRoaXMpLnZhbCgpLFxuICAgIGFubmVlOiAkKHRoaXMpLmRhdGEoJ2FubmVlJylcbiAgfSkpXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI3JlbG9hZFByZXZpU2VtZXN0cmUnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAkKCcjYmxvY1ByZXZpc2lvbm5lbCcpLmVtcHR5KCkubG9hZChSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9wcmV2aXNpb25uZWxfc2VtZXN0cmUnLCB7XG4gICAgc2VtZXN0cmU6ICQodGhpcykuZGF0YSgnc2VtZXN0cmUnKSxcbiAgICBhbm5lZTogJCh0aGlzKS5kYXRhKCdhbm5lZScpXG4gIH0pKVxufSlcblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcjcHJldmlNYXRpZXJlJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgJCgnI2Jsb2NQcmV2aXNpb25uZWwnKS5lbXB0eSgpLmxvYWQoUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fcHJldmlzaW9ubmVsX21hdGllcmUnLCB7XG4gICAgbWF0aWVyZTogJCh0aGlzKS52YWwoKSxcbiAgICBhbm5lZTogJCh0aGlzKS5kYXRhKCdhbm5lZScpXG4gIH0pKVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNyZWxvYWRQcmV2aU1hdGllcmUnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAkKCcjYmxvY1ByZXZpc2lvbm5lbCcpLmVtcHR5KCkubG9hZChSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9wcmV2aXNpb25uZWxfbWF0aWVyZScsIHtcbiAgICBtYXRpZXJlOiAkKHRoaXMpLmRhdGEoJ21hdGllcmUnKSxcbiAgICBhbm5lZTogJCh0aGlzKS5kYXRhKCdhbm5lZScpXG4gIH0pKVxufSlcblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcjcHJldmlQZXJzb25uZWwnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAkKCcjYmxvY1ByZXZpc2lvbm5lbCcpLmVtcHR5KCkubG9hZChSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9wcmV2aXNpb25uZWxfcGVyc29ubmVsJywge1xuICAgIHBlcnNvbm5lbDogJCh0aGlzKS52YWwoKSxcbiAgICBhbm5lZTogJCh0aGlzKS5kYXRhKCdhbm5lZScpXG4gIH0pKVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNyZWxvYWRQcmV2aVBlcnNvbm5lbCcsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICQoJyNibG9jUHJldmlzaW9ubmVsJykuZW1wdHkoKS5sb2FkKFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX3ByZXZpc2lvbm5lbF9wZXJzb25uZWwnLCB7XG4gICAgcGVyc29ubmVsOiAkKHRoaXMpLmRhdGEoJ3BlcnNvbm5lbCcpLFxuICAgIGFubmVlOiAkKHRoaXMpLmRhdGEoJ2FubmVlJylcbiAgfSkpXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnByZXZpc2lvbm5lbF9hZGRfY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgJCgnLnByZXZpc2lvbm5lbF9hZGRfY2hhbmdlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZSBzaG93JylcbiAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlIHNob3cnKVxuICAkKCcjbWFpbkNvbnRlbnQnKS5lbXB0eSgpLmxvYWQoJCh0aGlzKS5hdHRyKCdocmVmJykpXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2FkZEludGVydmVuYW50UHJldmlzaW9ubmVsJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgbmJMaWduZVByZXZpc2lvbm5lbCsrXG5cblxuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYXBpX2Vuc2VpZ25hbnRzX2RlcGFydGVtZW50JyksXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIGxldCBodG1sID0gJzx0cj5cXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgZGF0YS1saXZlLXNlYXJjaD1cInRydWVcIiBuYW1lPVwiaW50ZXJ2ZW5hbnRfJyArIG5iTGlnbmVQcmV2aXNpb25uZWwgKyAnXCIgaWQ9XCJpbnRlcnZlbmFudF8nICsgbmJMaWduZVByZXZpc2lvbm5lbCArICdcIj5cXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkNob2lzaXIgbFxcJ2ludGVydmVuYW50PC9vcHRpb24+XFxuJ1xuICAgICAgalF1ZXJ5LmVhY2goZGF0YSwgZnVuY3Rpb24gKGluZGV4LCBwZXJzKSB7XG4gICAgICAgIGh0bWwgPSBodG1sICsgJzxvcHRpb24gdmFsdWU9XCInICsgcGVycy5pZCArICdcIj4nICsgcGVycy5kaXNwbGF5ICsgJzwvb3B0aW9uPlxcbidcbiAgICAgIH0pXG4gICAgICBodG1sID0gaHRtbCArICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjbV8nICsgbmJMaWduZVByZXZpc2lvbm5lbCArICdcIiBpZD1cImNtXycgKyBuYkxpZ25lUHJldmlzaW9ubmVsICsgJ1wiIGRhdGEtbGlnbmU9XCInICsgbmJMaWduZVByZXZpc2lvbm5lbCArICdcIiBjbGFzcz1cImZvcm0tY29udHJvbCBjaGdjbVwiIHZhbHVlPVwiMFwiPjwvdGQ+XFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiZ3JfY21fJyArIG5iTGlnbmVQcmV2aXNpb25uZWwgKyAnXCIgaWQ9XCJncl9jbV8nICsgbmJMaWduZVByZXZpc2lvbm5lbCArICdcIiB2YWx1ZT1cIjBcIiBkYXRhLWxpZ25lPVwiJyArIG5iTGlnbmVQcmV2aXNpb25uZWwgKyAnXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgY2hnY21cIj5cXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8dGQgaWQ9XCJpbmRfY21fJyArIG5iTGlnbmVQcmV2aXNpb25uZWwgKyAnXCI+MDwvdGQ+XFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjNjhDMzlGXCI+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCIwXCIgbmFtZT1cInRkXycgKyBuYkxpZ25lUHJldmlzaW9ubmVsICsgJ1wiIGlkPVwidGRfJyArIG5iTGlnbmVQcmV2aXNpb25uZWwgKyAnXCIgZGF0YS1saWduZT1cIicgKyBuYkxpZ25lUHJldmlzaW9ubmVsICsgJ1wiXFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCBjaGd0ZFwiPjwvdGQ+XFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjNjhDMzlGXCI+PGlucHV0IHR5cGU9XCJudW1iZXJcIiB2YWx1ZT1cIjBcIiBuYW1lPVwiZ3JfdGRfJyArIG5iTGlnbmVQcmV2aXNpb25uZWwgKyAnXCIgaWQ9XCJncl90ZF8nICsgbmJMaWduZVByZXZpc2lvbm5lbCArICdcIlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1saWduZT1cIicgKyBuYkxpZ25lUHJldmlzaW9ubmVsICsgJ1wiIGNsYXNzPVwiZm9ybS1jb250cm9sIGNoZ3RkXCI+PC90ZD5cXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICM2OEMzOUZcIiBpZD1cImluZF90ZF8nICsgbmJMaWduZVByZXZpc2lvbm5lbCArICdcIj4wPC90ZD5cXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICNGRkMwNTJcIj48aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT1cIjBcIiBuYW1lPVwidHBfJyArIG5iTGlnbmVQcmV2aXNpb25uZWwgKyAnXCIgaWQ9XCJ0cF8nICsgbmJMaWduZVByZXZpc2lvbm5lbCArICdcIiBkYXRhLWxpZ25lPVwiJyArIG5iTGlnbmVQcmV2aXNpb25uZWwgKyAnXCJcXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIGNoZ3RwXCI+PC90ZD5cXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICNGRkMwNTJcIj48aW5wdXQgdHlwZT1cIm51bWJlclwiIHZhbHVlPVwiMFwiIG5hbWU9XCJncl90cF8nICsgbmJMaWduZVByZXZpc2lvbm5lbCArICdcIiBpZD1cImdyX3RwXycgKyBuYkxpZ25lUHJldmlzaW9ubmVsICsgJ1wiXFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWxpZ25lPVwiJyArIG5iTGlnbmVQcmV2aXNpb25uZWwgKyAnXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgY2hndHBcIj48L3RkPlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogI0ZGQzA1MlwiIGlkPVwiaW5kX3RwXycgKyBuYkxpZ25lUHJldmlzaW9ubmVsICsgJ1wiPjA8L3RkPlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8L3RyPidcblxuICAgICAgJCgnI25iTGlnbmUnKS52YWwobmJMaWduZVByZXZpc2lvbm5lbClcbiAgICAgICQoJyNsaWduZUFkZCcpLmJlZm9yZShodG1sKVxuICAgICAgJCgnI2ludGVydmVuYW50XycgKyBuYkxpZ25lUHJldmlzaW9ubmVsKS5zZWxlY3RwaWNrZXIoKVxuICAgIH1cbiAgfSlcblxuXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy5jaGdjbScsIGZ1bmN0aW9uIChlKSB7XG4gIGNvbnN0IGxpZ25lID0gJCh0aGlzKS5kYXRhKCdsaWduZScpXG4gIGNvbnN0IG5iU2VhbmNlID0gcGFyc2VGbG9hdCgkKCcjY21fJyArIGxpZ25lKS52YWwoKSkgLyAxLjVcbiAgJCgnI2luZF9jbV8nICsgbGlnbmUpLmh0bWwobmJTZWFuY2UudG9GaXhlZCgyKSlcblxuICB1cGRhdGVTeW50aGVzZVByZXZpc2lvbm5lbCgpXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy5jaGd0ZCcsIGZ1bmN0aW9uIChlKSB7XG4gIGNvbnN0IGxpZ25lID0gJCh0aGlzKS5kYXRhKCdsaWduZScpXG4gIGNvbnN0IG5iU2VhbmNlID0gcGFyc2VGbG9hdCgkKCcjdGRfJyArIGxpZ25lKS52YWwoKSkgLyAxLjVcbiAgJCgnI2luZF90ZF8nICsgbGlnbmUpLmh0bWwobmJTZWFuY2UudG9GaXhlZCgyKSlcblxuICB1cGRhdGVTeW50aGVzZVByZXZpc2lvbm5lbCgpXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy5jaGd0cCcsIGZ1bmN0aW9uIChlKSB7XG4gIGNvbnN0IGxpZ25lID0gJCh0aGlzKS5kYXRhKCdsaWduZScpXG4gIGNvbnN0IG5iU2VhbmNlID0gcGFyc2VGbG9hdCgkKCcjdHBfJyArIGxpZ25lKS52YWwoKSkgLyAxLjVcbiAgJCgnI2luZF90cF8nICsgbGlnbmUpLmh0bWwobmJTZWFuY2UudG9GaXhlZCgyKSlcblxuICB1cGRhdGVTeW50aGVzZVByZXZpc2lvbm5lbCgpXG59KVxuXG5mdW5jdGlvbiB1cGRhdGVTeW50aGVzZVByZXZpc2lvbm5lbCAoKSB7XG4gIGxldCB0b3RhbENtID0gMFxuICBsZXQgdG90YWxUZCA9IDBcbiAgbGV0IHRvdGFsVHAgPSAwXG4gIGxldCB0b3RhbEVxVGQgPSAwXG4gIGxldCB0b3RhbEV0dSA9IDBcblxuICBsZXQgdG90YWxIZXVyZXNDbSA9IDBcbiAgbGV0IHRvdGFsSGV1cmVzVGQgPSAwXG4gIGxldCB0b3RhbEhldXJlc1RwID0gMFxuICAvL2xldCB0b3RhbE1hdGllcmUgPSAwXG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbmJMaWduZVByZXZpc2lvbm5lbDsgaSsrKSB7XG4gICAgbGV0ICRjbSA9ICQoJyNjbV8nICsgaSlcbiAgICBsZXQgJHRkID0gJCgnI3RkXycgKyBpKVxuICAgIGxldCAkdHAgPSAkKCcjdHBfJyArIGkpXG5cbiAgICB0b3RhbENtID0gdG90YWxDbSArIHBhcnNlRmxvYXQoJGNtLnZhbCgpKSAqIHBhcnNlSW50KCQoJyNncl9jbV8nICsgaSkudmFsKCkpXG4gICAgdG90YWxUZCA9IHRvdGFsVGQgKyBwYXJzZUZsb2F0KCR0ZC52YWwoKSkgKiBwYXJzZUludCgkKCcjZ3JfdGRfJyArIGkpLnZhbCgpKVxuICAgIHRvdGFsVHAgPSB0b3RhbFRwICsgcGFyc2VGbG9hdCgkdHAudmFsKCkpICogcGFyc2VJbnQoJCgnI2dyX3RwXycgKyBpKS52YWwoKSlcblxuICAgIHRvdGFsSGV1cmVzQ20gPSB0b3RhbEhldXJlc0NtICsgcGFyc2VGbG9hdCgkY20udmFsKCkpXG4gICAgdG90YWxIZXVyZXNUZCA9IHRvdGFsSGV1cmVzVGQgKyBwYXJzZUZsb2F0KCR0ZC52YWwoKSlcbiAgICB0b3RhbEhldXJlc1RwID0gdG90YWxIZXVyZXNUcCArIHBhcnNlRmxvYXQoJHRwLnZhbCgpKVxuXG4gICAgdG90YWxFdHUgPSB0b3RhbEV0dSArIHBhcnNlRmxvYXQoJGNtLnZhbCgpKSArIHBhcnNlRmxvYXQoJHRkLnZhbCgpKSArIHBhcnNlRmxvYXQoJHRwLnZhbCgpKVxuICB9XG4gIHRvdGFsRXFUZCA9IHRvdGFsQ20gKyB0b3RhbFRkICsgdG90YWxUcFxuXG4gICQoJyN0b3RhbENtJykuaHRtbCh0b3RhbENtLnRvRml4ZWQoMikpXG4gICQoJyN0b3RhbFRkJykuaHRtbCh0b3RhbFRkLnRvRml4ZWQoMikpXG4gICQoJyN0b3RhbFRwJykuaHRtbCh0b3RhbFRwLnRvRml4ZWQoMikpXG4gICQoJyN0b3RhbEVxVGQnKS5odG1sKHRvdGFsRXFUZC50b0ZpeGVkKDIpKVxuICAkKCcjdG90YWxFdHUnKS5odG1sKHRvdGFsRXR1LnRvRml4ZWQoMikpXG5cbiAgLyoqIHbDqXJpZmljaWF0aW9uICovXG4gIC8qIHRvZG86IG5lIGZvbmN0aW9ubmUgcGFyLCBjYXIgZG9pdCBwcmVuZHJlIGVuIGNvbXB0ZSBsZSBub21icmUgZGUgZ3JvdXBlIGV0IGxlcyBwb3NzaWJsZXMgYXV0cmVzIGRvbm7DqWVzIGTDqWrDoCBzYWlzaWVzLiAqL1xuICAkKCcjdG90YWxIZXVyZXNDbScpLmh0bWwodG90YWxIZXVyZXNDbS50b0ZpeGVkKDIpKVxuICAkKCcjdG90YWxIZXVyZXNUZCcpLmh0bWwodG90YWxIZXVyZXNUZC50b0ZpeGVkKDIpKVxuICAkKCcjdG90YWxIZXVyZXNUcCcpLmh0bWwodG90YWxIZXVyZXNUcC50b0ZpeGVkKDIpKVxuXG4gIGxldCBkaWZmQ20gPSBwYXJzZUZsb2F0KCQoJyNjbU1hcXVldHRlJykuaHRtbCgpKSAtIHRvdGFsSGV1cmVzQ21cbiAgbGV0IGRpZmZUZCA9IHBhcnNlRmxvYXQoJCgnI3RkTWFxdWV0dGUnKS5odG1sKCkpIC0gdG90YWxIZXVyZXNUZFxuICBsZXQgZGlmZlRwID0gcGFyc2VGbG9hdCgkKCcjdHBNYXF1ZXR0ZScpLmh0bWwoKSkgLSB0b3RhbEhldXJlc1RwXG4gICQoJyNkaWZmQ20nKS5odG1sKGRpZmZDbS50b0ZpeGVkKDIpKVxuICAkKCcjZGlmZlRkJykuaHRtbChkaWZmVGQudG9GaXhlZCgyKSlcbiAgJCgnI2RpZmZUcCcpLmh0bWwoZGlmZlRwLnRvRml4ZWQoMikpXG5cbiAgaWYgKGRpZmZDbSA8IDApIHtcbiAgICAkKCcjZGlmZkNtJykuYWRkQ2xhc3MoJ2VycmV1clByZXZpJykucmVtb3ZlQ2xhc3MoJ3ZhbGlkZVByZXZpJylcbiAgfSBlbHNlIHtcbiAgICAkKCcjZGlmZkNtJykuYWRkQ2xhc3MoJ3ZhbGlkZVByZXZpJykucmVtb3ZlQ2xhc3MoJ2VycmV1clByZXZpJylcbiAgfVxuXG4gIGlmIChkaWZmVGQgPCAwKSB7XG4gICAgJCgnI2RpZmZUZCcpLmFkZENsYXNzKCdlcnJldXJQcmV2aScpLnJlbW92ZUNsYXNzKCd2YWxpZGVQcmV2aScpXG4gIH0gZWxzZSB7XG4gICAgJCgnI2RpZmZUZCcpLmFkZENsYXNzKCd2YWxpZGVQcmV2aScpLnJlbW92ZUNsYXNzKCdlcnJldXJQcmV2aScpXG4gIH1cblxuICBpZiAoZGlmZlRwIDwgMCkge1xuICAgICQoJyNkaWZmVHAnKS5hZGRDbGFzcygnZXJyZXVyUHJldmknKS5yZW1vdmVDbGFzcygndmFsaWRlUHJldmknKVxuICB9IGVsc2Uge1xuICAgICQoJyNkaWZmVHAnKS5hZGRDbGFzcygndmFsaWRlUHJldmknKS5yZW1vdmVDbGFzcygnZXJyZXVyUHJldmknKVxuICB9XG59XG5cbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnI3ByZXZpc2lvbm5lbF9tYXRpZXJlJywgZnVuY3Rpb24gKCkge1xuICBjb25zdCB2b2x1bWVNYXRpZXJlID0gJCgnI3ZvbHVtZU1hdGllcmUnKVxuICBpZiAoJCh0aGlzKS52YWwoKSA9PT0gJycpIHtcbiAgICB2b2x1bWVNYXRpZXJlLmh0bWwoJ0Nob2lzaXIgZFxcJ2Fib3JkIHVuZSBtYXRpw6hyZScpXG4gIH0gZWxzZSB7XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYXBpX21hdGllcmUnLCB7J21hdGllcmUnOiAkKHRoaXMpLnZhbCgpfSksXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBjb25zdCBodG1sID0gJ1BQTiBPZmZpY2llbCA9PiBDTSAnICsgZGF0YS5jbUZvcm1hdGlvbiArICcgaGV1cmUocyk7IFREICcgKyBkYXRhLnRkRm9ybWF0aW9uICsgJyBoZXVyZShzKTsgVFAgJyArIGRhdGEudHBGb3JtYXRpb24gKyAnIGhldXJlKHMpOyBQUE4gUsOpYWxpc8OpL2RlcGFydGVtZW50ID0+IENNICcgKyBkYXRhLmNtUHBuICsgJyBoZXVyZShzKTsgVEQgJyArIGRhdGEudGRQcG4gKyAnIGhldXJlKHMpOyBUUCAnICsgZGF0YS50cFBwbiArICcgaGV1cmUocyk7J1xuICAgICAgICB2b2x1bWVNYXRpZXJlLmh0bWwoaHRtbClcbiAgICAgICAgJCgnI2NtTWFxdWV0dGUnKS5odG1sKGRhdGEuY21Gb3JtYXRpb24pXG4gICAgICAgICQoJyN0b3RhbEhldXJlc0NtJykuaHRtbCgwKVxuICAgICAgICAkKCcjZGlmZkNtJykuaHRtbCgwKVxuICAgICAgICAkKCcjdGRNYXF1ZXR0ZScpLmh0bWwoZGF0YS50ZEZvcm1hdGlvbilcbiAgICAgICAgJCgnI3RvdGFsSGV1cmVzVGQnKS5odG1sKDApXG4gICAgICAgICQoJyNkaWZmVGQnKS5odG1sKDApXG4gICAgICAgICQoJyN0cE1hcXVldHRlJykuaHRtbChkYXRhLnRwRm9ybWF0aW9uKVxuICAgICAgICAkKCcjdG90YWxIZXVyZXNUcCcpLmh0bWwoMClcbiAgICAgICAgJCgnI2RpZmZUcCcpLmh0bWwoMClcbiAgICAgICAgJCgnI3RhYmhldXJlcycpLnNob3coKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn0pXG5cblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNidG5HZW5lcmVGaWNoaWVyJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGUuc3RvcFByb3BhZ2F0aW9uKClcblxuICBjb25zdCBzZWxlY3RlZENoYW1wcyA9IFtdXG4gICQoJ2lucHV0OmNoZWNrYm94W25hbWU9ZXhwb3J0Q2hhbXBzXTpjaGVja2VkJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgc2VsZWN0ZWRDaGFtcHMucHVzaCgkKHRoaXMpLnZhbCgpKVxuICB9KVxuXG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdleHBvcnRfbGlzdGluZy5mcicpLFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGRhdGE6IHtcbiAgICAgICdtYXRpZXJlJzogJCh0aGlzKS5kYXRhKCdtYXRpZXJlJyksXG4gICAgICAnZXhwb3J0VHlwZURvY3VtZW50JzogJCgnaW5wdXRbdHlwZT1yYWRpb11bbmFtZT1leHBvcnRUeXBlRG9jdW1lbnRdOmNoZWNrZWQnKS52YWwoKSxcbiAgICAgICdleHBvcnRDaGFtcHMnOiBzZWxlY3RlZENoYW1wcyxcbiAgICAgICdleHBvcnRGb3JtYXQnOiAkKCdpbnB1dFt0eXBlPXJhZGlvXVtuYW1lPWV4cG9ydEZvcm1hdF06Y2hlY2tlZCcpLnZhbCgpLFxuICAgICAgJ2V4cG9ydEZpbHRyZSc6ICQoJ2lucHV0W3R5cGU9cmFkaW9dW25hbWU9ZXhwb3J0RmlsdHJlXTpjaGVja2VkJykudmFsKClcbiAgICB9LFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChmaWNoaWVyKSB7XG5cbiAgICB9XG4gIH0pXG59KVxuXG5cbi8vcmVsb2FkIHNpIGNoYW5nZW1lbnQgZCdhbm7DqWVcbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnI2NoYW5nZV9hbm5lZV90ZW1wX2hycycsIGZ1bmN0aW9uIChlKSB7XG5cbiAgd2luZG93LmxvY2F0aW9uID0gUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25faHJzX2luZGV4Jywge2FubmVlOiAkKHRoaXMpLnZhbCgpfSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnI2NoYW5nZV9hbm5lZV90ZW1wX3ByZXZpc2lvbm5lbCcsIGZ1bmN0aW9uIChlKSB7XG4gIHdpbmRvdy5sb2NhdGlvbiA9IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX3ByZXZpc2lvbm5lbF9pbmRleCcsIHthbm5lZTogJCh0aGlzKS52YWwoKX0pXG59KVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3V0aWwuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAwMS8xMi8yMDIwIDIyOjA0XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJ1xuXG5sZXQgJHN0b3BDYXRjaEVudGVyID0gZmFsc2VcblxuZnVuY3Rpb24gcmVhZFVybE1lbnUgKCR1cmwpIHtcbiAgY29uc3QgJGVsdCA9ICR1cmwuc3BsaXQoJy8nKVxuICBsZXQgJGZpcnN0RWx0ID0gMlxuICBpZiAoJGVsdFsxXSA9PT0gJ2luZGV4LnBocCcpIHtcbiAgICBpZiAoJGVsdC5sZW5ndGggPiAxKSB7XG4gICAgICAkZmlyc3RFbHQgPSAzXG4gICAgfVxuICB9XG5cbiAgaWYgKCRlbHRbJGZpcnN0RWx0XSA9PT0gJ3N1cGVyLWFkbWluaXN0cmF0aW9uJykge1xuICAgICRmaXJzdEVsdCA9ICRmaXJzdEVsdCArIDFcbiAgfVxuXG4gIGlmICgkZWx0WyRlbHQubGVuZ3RoIC0gMV0gPT09ICcnKSB7XG4gICAgJGVsdC5wb3AoKVxuICB9XG5cbiAgJCgnLm1lbnUtaXRlbScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAkKCcjbWVudS0nICsgJGVsdFskZmlyc3RFbHRdKS5hZGRDbGFzcygnYWN0aXZlJylcbn1cblxuLy9jb2xvcmlzZSBsZSBib24gbWVudVxucmVhZFVybE1lbnUoJChsb2NhdGlvbikuYXR0cigncGF0aG5hbWUnKSlcblxuU3dhbC5taXhpbih7XG4gIGN1c3RvbUNsYXNzOiB7XG4gICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gIH0sXG4gIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxufSlcbi8vcG9wIHVwIGRlIGNvbmZpcm1hdGlvbiBkZSBzdXBwcmVzc2lvblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5zdXBwcmltZXInLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgY29uc3QgdXJsID0gJCh0aGlzKS5hdHRyKCdocmVmJylcbiAgY29uc3QgY3NyZiA9ICQodGhpcykuZGF0YSgnY3NyZicpXG4gIFN3YWwuZmlyZSh7XG4gICAgdGl0bGU6ICdDb25maXJtZXIgbGEgc3VwcHJlc3Npb24gPycsXG4gICAgdGV4dDogJ0xcXCdvcMOpcmF0aW9uIG5lIHBvdXJyYSBwYXMgw6p0cmUgYW5udWzDqWUuJyxcbiAgICBpY29uOiAnd2FybmluZycsXG4gICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICBjb25maXJtQnV0dG9uQ29sb3I6ICcjMzA4NWQ2JyxcbiAgICBjYW5jZWxCdXR0b25Db2xvcjogJyNkMzMnLFxuICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT3VpLCBqZSBjb25maXJtZScsXG4gICAgY2FuY2VsQnV0dG9uVGV4dDogJ05vbiwgQW5udWxlcicsXG4gICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgfSxcbiAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgaWYgKHJlc3VsdC52YWx1ZSkge1xuICAgICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIHR5cGU6ICdERUxFVEUnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgX3Rva2VuOiBjc3JmXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgIGlmIChpZC5oYXNPd25Qcm9wZXJ0eSgncmVkaXJlY3QnKSAmJiBpZC5oYXNPd25Qcm9wZXJ0eSgndXJsJykpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBpZC51cmxcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy90LnJvdyhcIiNsaWduZV9cIitpZCkucmVtb3ZlKCkuZHJhdygpOyA9PCBkYXRhdHRhYmxlIHRvZG86IHJlbW92ZSBsaWduZSBzaSBkYXRhdGFibGUgPz8gcHJvYmzDqG1lIGRhbnMgYWRtPnBlcnNvbm5lbFxuICAgICAgICAgICAgJCgnI2xpZ25lXycgKyBpZCkuY2xvc2VzdCgndHInKS5yZW1vdmUoKVxuICAgICAgICAgICAgYWRkQ2FsbG91dCgnU3VwcHJlc3Npb24gZWZmZWN0dcOpZSBhdmVjIHN1Y2PDqHMnLCAnc3VjY2VzcycpXG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICB0aXRsZTogJ1N1cHByaW3DqSEnLFxuICAgICAgICAgICAgICB0ZXh0OiAnTFxcJ2VucmVnaXN0cmVtZW50IGEgw6l0w6kgc3VwcHJpbcOpLicsXG4gICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBhamF4T3B0aW9ucywgdGhyb3duRXJyb3IpIHtcbiAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgdGl0bGU6ICdFcnJldXIgbG9ycyBkZSBsYSBzdXBwcmVzc2lvbiEnLFxuICAgICAgICAgICAgdGV4dDogJ01lcmNpIGRlIHJlbm91dmVsZXIgbFxcJ29ww6lyYXRpb24nLFxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgICAgIH0pXG4gICAgICAgICAgYWRkQ2FsbG91dCgnRXJyZXVyIGxvcnMgZGUgbGEgdGVudGF0aXZlIGRlIHN1cHByZXNzaW9uJywgJ2RhbmdlcicpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICB9IGVsc2UgaWYgKFxuICAgICAgLy8gUmVhZCBtb3JlIGFib3V0IGhhbmRsaW5nIGRpc21pc3NhbHNcbiAgICAgIHJlc3VsdC5kaXNtaXNzID09PSAnY2FuY2VsJ1xuICAgICkge1xuICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgdGl0bGU6ICdDYW5jZWxsZWQnLFxuICAgICAgICB0ZXh0OiAnT0shIFRvdXQgZXN0IGNvbW1lIGF2YW50ICEnLFxuICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgfSxcbiAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICB9KVxuICAgIH1cbiAgfSlcbn0pXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDYWxsb3V0IChtZXNzYWdlLCBsYWJlbCkge1xuICBjb25zb2xlLmxvZygnY2FsbG91dCcpXG4gIHZhciB0cmFuc2xhdGUgPSBuZXcgQXJyYXkoKVxuICB0cmFuc2xhdGVbJ3N1Y2Nlc3MnXSA9ICdTdWNjw6hzJ1xuICB0cmFuc2xhdGVbJ2RhbmdlciddID0gJ0VycmV1cidcbiAgdHJhbnNsYXRlWyd3YXJuaW5nJ10gPSAnQXR0ZW50aW9uJ1xuXG4gIGNvbnN0IGh0bWwgPSAnPGRpdiBjbGFzcz1cImNhbGxvdXQgY2FsbG91dC0nICsgbGFiZWwgKyAnXCIgcm9sZT1cImFsZXJ0XCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cImNhbGxvdXRcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JnRpbWVzOzwvc3Bhbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8aDU+JyArIHRyYW5zbGF0ZVtsYWJlbF0gKyAnPC9oNT5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8cD4nICsgbWVzc2FnZSArICc8L3A+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICA8L2Rpdj4nXG5cbiAgJCgnI21haW5Db250ZW50JykucHJlcGVuZChodG1sKS5zbGlkZURvd24oJ3Nsb3cnKVxuICAkKCcuY2FsbG91dCcpLmRlbGF5KDUwMDApLnNsaWRlVXAoJ3Nsb3cnKVxufVxuXG4vL0VkaXRhYmxlXG5sZXQgbXlFZGl0SW5pdGlhbENvbnRlbnQgPSAnJ1xubGV0IHR5cGUgPSAndGV4dCdcbmxldCBFZGl0T25MaW5lID0gZmFsc2VcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5teWVkaXQnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgbXlFZGl0SW5pdGlhbENvbnRlbnQgPSAkKHRoaXMpXG4gIGxldCBodG1sID0gJydcbiAgRWRpdE9uTGluZSA9IHRydWVcbiAgaWYgKHR5cGVvZiAoJCh0aGlzKS5kYXRhKCd0eXBlJykpICE9PSAndW5kZWZpbmVkJykge1xuICAgIHR5cGUgPSAkKHRoaXMpLmRhdGEoJ3R5cGUnKVxuICB9XG5cbiAgaWYgKCQodGhpcykuZGF0YSgndHlwZScpID09PSAnc2VsZWN0Jykge1xuICAgIC8vdG9kbzogQSBmaW5hbGlzZXJcbiAgfSBlbHNlIGlmICgkKHRoaXMpLmRhdGEoJ3R5cGUnKSA9PT0gJ3RleHRhcmVhJykge1xuICAgIGh0bWwgPSBnZW5lcmVUZXh0QXJlYSgkKHRoaXMpKVxuICB9IGVsc2Uge1xuICAgIGh0bWwgPSBnZW5lcmVJbnB1dCgkKHRoaXMpKVxuICB9XG4gICQodGhpcykucmVwbGFjZVdpdGgoaHRtbClcbiAgJCgnI215ZWRpdC1pbnB1dCcpLmZvY3VzKClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdrZXl1cCcsICcjbXllZGl0LWlucHV0JywgZnVuY3Rpb24gKGUpIHtcbiAgaWYgKGUua2V5Q29kZSA9PT0gMTMgJiYgJHN0b3BDYXRjaEVudGVyID09PSBmYWxzZSkge1xuICAgIHVwZGF0ZURhdGEoKVxuICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbiAgfVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNteWVkaXQtdmFsaWRlJywgZnVuY3Rpb24gKGUpIHtcbiAgJHN0b3BDYXRjaEVudGVyID0gZmFsc2VcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIHVwZGF0ZURhdGEoKVxufSlcblxuJChkb2N1bWVudCkub24oJ2tleXByZXNzJywgZnVuY3Rpb24gKGUpIHtcbiAgaWYgKEVkaXRPbkxpbmUgPT09IHRydWUgJiYgJHN0b3BDYXRjaEVudGVyID09PSBmYWxzZSAmJiBlLndoaWNoID09PSAxMykge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHVwZGF0ZURhdGEoKVxuICB9XG5cbiAgaWYgKEVkaXRPbkxpbmUgPT09IHRydWUgJiYgJHN0b3BDYXRjaEVudGVyID09PSBmYWxzZSAmJiBlLndoaWNoID09PSAyNykge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI215ZWRpdC1hbm51bGUnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG59KVxuXG5mdW5jdGlvbiB1cGRhdGVEYXRhICgpIHtcbiAgbGV0IHZhbCA9ICQoJyNteWVkaXQtaW5wdXQnKS52YWwoKVxuICAkLmFqYXgoe1xuICAgIHVybDogbXlFZGl0SW5pdGlhbENvbnRlbnQuYXR0cignaHJlZicpLFxuICAgIGRhdGE6IHtcbiAgICAgIGZpZWxkOiBteUVkaXRJbml0aWFsQ29udGVudC5kYXRhKCdmaWVsZCcpLFxuICAgICAgdmFsdWU6IHZhbCxcbiAgICAgIHR5cGU6IHR5cGVcbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgIG15RWRpdEluaXRpYWxDb250ZW50Lmh0bWwodmFsKVxuICAgICAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG4gICAgICBFZGl0T25MaW5lID0gZmFsc2VcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGdlbmVyZVRleHRBcmVhICgkb2JqKSB7XG4gICRzdG9wQ2F0Y2hFbnRlciA9IHRydWVcbiAgcmV0dXJuICc8ZGl2IGlkPVwibXlFZGl0LXpvbmVcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSByb3dzPVwiNVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJteWVkaXQtaW5wdXRcIj4nICsgJG9iai5odG1sKCkudHJpbSgpICsgJzwvdGV4dGFyZWE+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxcbicgK1xuICAgICcgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzcy1vdXRsaW5lXCIgaWQ9XCJteWVkaXQtdmFsaWRlXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hlY2tcIj48L2k+PC9idXR0b24+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlci1vdXRsaW5lXCIgaWQ9XCJteWVkaXQtYW5udWxlXCI+PGkgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+PC9idXR0b24+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPC9kaXY+J1xufVxuXG5mdW5jdGlvbiBnZW5lcmVJbnB1dCAoJG9iaikge1xuXG4gIHJldHVybiAnPGRpdiBpZD1cIm15RWRpdC16b25lXCIgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIm15ZWRpdC1pbnB1dFwiIHZhbHVlPVwiJyArICRvYmouaHRtbCgpLnRyaW0oKSArICdcIiA+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxcbicgK1xuICAgICcgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzcy1vdXRsaW5lXCIgaWQ9XCJteWVkaXQtdmFsaWRlXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hlY2tcIj48L2k+PC9idXR0b24+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlci1vdXRsaW5lXCIgaWQ9XCJteWVkaXQtYW5udWxlXCI+PGkgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+PC9idXR0b24+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPC9kaXY+J1xufVxuXG5qUXVlcnkuZm4uZGF0YUF0dHIgPSBmdW5jdGlvbiAobmFtZSwgZGVmKSB7XG4gIHJldHVybiAkKHRoaXMpWzBdLmdldEF0dHJpYnV0ZSgnZGF0YS0nICsgbmFtZSkgfHwgZGVmXG59XG5cbmpRdWVyeS5mbi5oYXNEYXRhQXR0ciA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiAkKHRoaXMpWzBdLmhhc0F0dHJpYnV0ZSgnZGF0YS0nICsgbmFtZSlcbn1cblxuZnVuY3Rpb24gZGF0YVRvT3B0aW9uIChuYW1lKSB7XG4gIHJldHVybiBuYW1lLnJlcGxhY2UoLy0oW2Etel0pL2csIGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIHhbMV0udG9VcHBlckNhc2UoKVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YU9wdGlvbnMgKGVsLCBjYXN0TGlzdCkge1xuICB2YXIgb3B0aW9ucyA9IHt9XG4gICQuZWFjaCgkKGVsKS5kYXRhKCksIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG5cbiAgICBrZXkgPSBkYXRhVG9PcHRpb24oa2V5KVxuXG4gICAgLy8gRXNjYXBlIGRhdGEtcHJvdmlkZVxuICAgIGlmIChrZXkgPT0gJ3Byb3ZpZGUnKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoY2FzdExpc3QgIT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgdHlwZSA9IGNhc3RMaXN0W2tleV1cbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdib29sJzpcbiAgICAgICAgICB2YWx1ZSA9IEJvb2xlYW4odmFsdWUpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdudW0nOlxuICAgICAgICAgIHZhbHVlID0gTnVtYmVyKHZhbHVlKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgIHZhbHVlID0gdmFsdWUuc3BsaXQoJywnKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgZGVmYXVsdDpcblxuICAgICAgfVxuICAgIH1cblxuICAgIG9wdGlvbnNba2V5XSA9IHZhbHVlXG4gIH0pXG5cbiAgcmV0dXJuIG9wdGlvbnNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGludmFsaWRDaGFtcHMgKCRvYmopIHtcbiAgJG9iai5yZW1vdmVDbGFzcygnaXMtdmFsaWQnKS5hZGRDbGFzcygnaXMtaW52YWxpZCcpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZENoYW1wcyAoJG9iaikge1xuICAkb2JqLnJlbW92ZUNsYXNzKCdpcy1pbnZhbGlkJykuYWRkQ2xhc3MoJ2lzLXZhbGlkJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBsZXRlQ2hhbXBzICgkb2JqKSB7XG4gICRvYmoucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKS5yZW1vdmVDbGFzcygnaXMtdmFsaWQnKVxufVxuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciB0cmltID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy10cmltJykudHJpbTtcbnZhciB3aGl0ZXNwYWNlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93aGl0ZXNwYWNlcycpO1xuXG52YXIgJHBhcnNlRmxvYXQgPSBnbG9iYWwucGFyc2VGbG9hdDtcbnZhciBGT1JDRUQgPSAxIC8gJHBhcnNlRmxvYXQod2hpdGVzcGFjZXMgKyAnLTAnKSAhPT0gLUluZmluaXR5O1xuXG4vLyBgcGFyc2VGbG9hdGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1wYXJzZWZsb2F0LXN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBGT1JDRUQgPyBmdW5jdGlvbiBwYXJzZUZsb2F0KHN0cmluZykge1xuICB2YXIgdHJpbW1lZFN0cmluZyA9IHRyaW0oU3RyaW5nKHN0cmluZykpO1xuICB2YXIgcmVzdWx0ID0gJHBhcnNlRmxvYXQodHJpbW1lZFN0cmluZyk7XG4gIHJldHVybiByZXN1bHQgPT09IDAgJiYgdHJpbW1lZFN0cmluZy5jaGFyQXQoMCkgPT0gJy0nID8gLTAgOiByZXN1bHQ7XG59IDogJHBhcnNlRmxvYXQ7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHRyaW0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0nKS50cmltO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciAkcGFyc2VJbnQgPSBnbG9iYWwucGFyc2VJbnQ7XG52YXIgaGV4ID0gL15bKy1dPzBbWHhdLztcbnZhciBGT1JDRUQgPSAkcGFyc2VJbnQod2hpdGVzcGFjZXMgKyAnMDgnKSAhPT0gOCB8fCAkcGFyc2VJbnQod2hpdGVzcGFjZXMgKyAnMHgxNicpICE9PSAyMjtcblxuLy8gYHBhcnNlSW50YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXBhcnNlaW50LXN0cmluZy1yYWRpeFxubW9kdWxlLmV4cG9ydHMgPSBGT1JDRUQgPyBmdW5jdGlvbiBwYXJzZUludChzdHJpbmcsIHJhZGl4KSB7XG4gIHZhciBTID0gdHJpbShTdHJpbmcoc3RyaW5nKSk7XG4gIHJldHVybiAkcGFyc2VJbnQoUywgKHJhZGl4ID4+PiAwKSB8fCAoaGV4LnRlc3QoUykgPyAxNiA6IDEwKSk7XG59IDogJHBhcnNlSW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyJyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUucmVwZWF0YCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUucmVwZWF0XG5tb2R1bGUuZXhwb3J0cyA9ICcnLnJlcGVhdCB8fCBmdW5jdGlvbiByZXBlYXQoY291bnQpIHtcbiAgdmFyIHN0ciA9IFN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpKTtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuICB2YXIgbiA9IHRvSW50ZWdlcihjb3VudCk7XG4gIGlmIChuIDwgMCB8fCBuID09IEluZmluaXR5KSB0aHJvdyBSYW5nZUVycm9yKCdXcm9uZyBudW1iZXIgb2YgcmVwZXRpdGlvbnMnKTtcbiAgZm9yICg7biA+IDA7IChuID4+Pj0gMSkgJiYgKHN0ciArPSBzdHIpKSBpZiAobiAmIDEpIHJlc3VsdCArPSBzdHI7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxuLy8gYHRoaXNOdW1iZXJWYWx1ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10aGlzbnVtYmVydmFsdWVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ251bWJlcicgJiYgY2xhc3NvZih2YWx1ZSkgIT0gJ051bWJlcicpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ0luY29ycmVjdCBpbnZvY2F0aW9uJyk7XG4gIH1cbiAgcmV0dXJuICt2YWx1ZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlcicpO1xudmFyIHRoaXNOdW1iZXJWYWx1ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90aGlzLW51bWJlci12YWx1ZScpO1xudmFyIHJlcGVhdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctcmVwZWF0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxudmFyIG5hdGl2ZVRvRml4ZWQgPSAxLjAudG9GaXhlZDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5cbnZhciBwb3cgPSBmdW5jdGlvbiAoeCwgbiwgYWNjKSB7XG4gIHJldHVybiBuID09PSAwID8gYWNjIDogbiAlIDIgPT09IDEgPyBwb3coeCwgbiAtIDEsIGFjYyAqIHgpIDogcG93KHggKiB4LCBuIC8gMiwgYWNjKTtcbn07XG5cbnZhciBsb2cgPSBmdW5jdGlvbiAoeCkge1xuICB2YXIgbiA9IDA7XG4gIHZhciB4MiA9IHg7XG4gIHdoaWxlICh4MiA+PSA0MDk2KSB7XG4gICAgbiArPSAxMjtcbiAgICB4MiAvPSA0MDk2O1xuICB9XG4gIHdoaWxlICh4MiA+PSAyKSB7XG4gICAgbiArPSAxO1xuICAgIHgyIC89IDI7XG4gIH0gcmV0dXJuIG47XG59O1xuXG52YXIgRk9SQ0VEID0gbmF0aXZlVG9GaXhlZCAmJiAoXG4gIDAuMDAwMDgudG9GaXhlZCgzKSAhPT0gJzAuMDAwJyB8fFxuICAwLjkudG9GaXhlZCgwKSAhPT0gJzEnIHx8XG4gIDEuMjU1LnRvRml4ZWQoMikgIT09ICcxLjI1JyB8fFxuICAxMDAwMDAwMDAwMDAwMDAwMTI4LjAudG9GaXhlZCgwKSAhPT0gJzEwMDAwMDAwMDAwMDAwMDAxMjgnXG4pIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIFY4IH4gQW5kcm9pZCA0LjMtXG4gIG5hdGl2ZVRvRml4ZWQuY2FsbCh7fSk7XG59KTtcblxuLy8gYE51bWJlci5wcm90b3R5cGUudG9GaXhlZGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1udW1iZXIucHJvdG90eXBlLnRvZml4ZWRcbiQoeyB0YXJnZXQ6ICdOdW1iZXInLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LXN0YXRlbWVudHNcbiAgdG9GaXhlZDogZnVuY3Rpb24gdG9GaXhlZChmcmFjdGlvbkRpZ2l0cykge1xuICAgIHZhciBudW1iZXIgPSB0aGlzTnVtYmVyVmFsdWUodGhpcyk7XG4gICAgdmFyIGZyYWN0RGlnaXRzID0gdG9JbnRlZ2VyKGZyYWN0aW9uRGlnaXRzKTtcbiAgICB2YXIgZGF0YSA9IFswLCAwLCAwLCAwLCAwLCAwXTtcbiAgICB2YXIgc2lnbiA9ICcnO1xuICAgIHZhciByZXN1bHQgPSAnMCc7XG4gICAgdmFyIGUsIHosIGosIGs7XG5cbiAgICB2YXIgbXVsdGlwbHkgPSBmdW5jdGlvbiAobiwgYykge1xuICAgICAgdmFyIGluZGV4ID0gLTE7XG4gICAgICB2YXIgYzIgPSBjO1xuICAgICAgd2hpbGUgKCsraW5kZXggPCA2KSB7XG4gICAgICAgIGMyICs9IG4gKiBkYXRhW2luZGV4XTtcbiAgICAgICAgZGF0YVtpbmRleF0gPSBjMiAlIDFlNztcbiAgICAgICAgYzIgPSBmbG9vcihjMiAvIDFlNyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBkaXZpZGUgPSBmdW5jdGlvbiAobikge1xuICAgICAgdmFyIGluZGV4ID0gNjtcbiAgICAgIHZhciBjID0gMDtcbiAgICAgIHdoaWxlICgtLWluZGV4ID49IDApIHtcbiAgICAgICAgYyArPSBkYXRhW2luZGV4XTtcbiAgICAgICAgZGF0YVtpbmRleF0gPSBmbG9vcihjIC8gbik7XG4gICAgICAgIGMgPSAoYyAlIG4pICogMWU3O1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgZGF0YVRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGluZGV4ID0gNjtcbiAgICAgIHZhciBzID0gJyc7XG4gICAgICB3aGlsZSAoLS1pbmRleCA+PSAwKSB7XG4gICAgICAgIGlmIChzICE9PSAnJyB8fCBpbmRleCA9PT0gMCB8fCBkYXRhW2luZGV4XSAhPT0gMCkge1xuICAgICAgICAgIHZhciB0ID0gU3RyaW5nKGRhdGFbaW5kZXhdKTtcbiAgICAgICAgICBzID0gcyA9PT0gJycgPyB0IDogcyArIHJlcGVhdC5jYWxsKCcwJywgNyAtIHQubGVuZ3RoKSArIHQ7XG4gICAgICAgIH1cbiAgICAgIH0gcmV0dXJuIHM7XG4gICAgfTtcblxuICAgIGlmIChmcmFjdERpZ2l0cyA8IDAgfHwgZnJhY3REaWdpdHMgPiAyMCkgdGhyb3cgUmFuZ2VFcnJvcignSW5jb3JyZWN0IGZyYWN0aW9uIGRpZ2l0cycpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAobnVtYmVyICE9IG51bWJlcikgcmV0dXJuICdOYU4nO1xuICAgIGlmIChudW1iZXIgPD0gLTFlMjEgfHwgbnVtYmVyID49IDFlMjEpIHJldHVybiBTdHJpbmcobnVtYmVyKTtcbiAgICBpZiAobnVtYmVyIDwgMCkge1xuICAgICAgc2lnbiA9ICctJztcbiAgICAgIG51bWJlciA9IC1udW1iZXI7XG4gICAgfVxuICAgIGlmIChudW1iZXIgPiAxZS0yMSkge1xuICAgICAgZSA9IGxvZyhudW1iZXIgKiBwb3coMiwgNjksIDEpKSAtIDY5O1xuICAgICAgeiA9IGUgPCAwID8gbnVtYmVyICogcG93KDIsIC1lLCAxKSA6IG51bWJlciAvIHBvdygyLCBlLCAxKTtcbiAgICAgIHogKj0gMHgxMDAwMDAwMDAwMDAwMDtcbiAgICAgIGUgPSA1MiAtIGU7XG4gICAgICBpZiAoZSA+IDApIHtcbiAgICAgICAgbXVsdGlwbHkoMCwgeik7XG4gICAgICAgIGogPSBmcmFjdERpZ2l0cztcbiAgICAgICAgd2hpbGUgKGogPj0gNykge1xuICAgICAgICAgIG11bHRpcGx5KDFlNywgMCk7XG4gICAgICAgICAgaiAtPSA3O1xuICAgICAgICB9XG4gICAgICAgIG11bHRpcGx5KHBvdygxMCwgaiwgMSksIDApO1xuICAgICAgICBqID0gZSAtIDE7XG4gICAgICAgIHdoaWxlIChqID49IDIzKSB7XG4gICAgICAgICAgZGl2aWRlKDEgPDwgMjMpO1xuICAgICAgICAgIGogLT0gMjM7XG4gICAgICAgIH1cbiAgICAgICAgZGl2aWRlKDEgPDwgaik7XG4gICAgICAgIG11bHRpcGx5KDEsIDEpO1xuICAgICAgICBkaXZpZGUoMik7XG4gICAgICAgIHJlc3VsdCA9IGRhdGFUb1N0cmluZygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbXVsdGlwbHkoMCwgeik7XG4gICAgICAgIG11bHRpcGx5KDEgPDwgLWUsIDApO1xuICAgICAgICByZXN1bHQgPSBkYXRhVG9TdHJpbmcoKSArIHJlcGVhdC5jYWxsKCcwJywgZnJhY3REaWdpdHMpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZnJhY3REaWdpdHMgPiAwKSB7XG4gICAgICBrID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgIHJlc3VsdCA9IHNpZ24gKyAoayA8PSBmcmFjdERpZ2l0c1xuICAgICAgICA/ICcwLicgKyByZXBlYXQuY2FsbCgnMCcsIGZyYWN0RGlnaXRzIC0gaykgKyByZXN1bHRcbiAgICAgICAgOiByZXN1bHQuc2xpY2UoMCwgayAtIGZyYWN0RGlnaXRzKSArICcuJyArIHJlc3VsdC5zbGljZShrIC0gZnJhY3REaWdpdHMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gc2lnbiArIHJlc3VsdDtcbiAgICB9IHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgcGFyc2VGbG9hdEltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL251bWJlci1wYXJzZS1mbG9hdCcpO1xuXG4vLyBgcGFyc2VGbG9hdGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1wYXJzZWZsb2F0LXN0cmluZ1xuJCh7IGdsb2JhbDogdHJ1ZSwgZm9yY2VkOiBwYXJzZUZsb2F0ICE9IHBhcnNlRmxvYXRJbXBsZW1lbnRhdGlvbiB9LCB7XG4gIHBhcnNlRmxvYXQ6IHBhcnNlRmxvYXRJbXBsZW1lbnRhdGlvblxufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBwYXJzZUludEltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL251bWJlci1wYXJzZS1pbnQnKTtcblxuLy8gYHBhcnNlSW50YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXBhcnNlaW50LXN0cmluZy1yYWRpeFxuJCh7IGdsb2JhbDogdHJ1ZSwgZm9yY2VkOiBwYXJzZUludCAhPSBwYXJzZUludEltcGxlbWVudGF0aW9uIH0sIHtcbiAgcGFyc2VJbnQ6IHBhcnNlSW50SW1wbGVtZW50YXRpb25cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
