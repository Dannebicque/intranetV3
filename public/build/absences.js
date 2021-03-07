(self["webpackChunk"] = self["webpackChunk"] || []).push([["absences"],{

/***/ "./assets/js/lang/fr.js":
/*!******************************!*\
  !*** ./assets/js/lang/fr.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataTableLangueFr": () => (/* binding */ dataTableLangueFr)
/* harmony export */ });
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
};

/***/ }),

/***/ "./assets/js/pages/absences.js":
/*!*************************************!*\
  !*** ./assets/js/pages/absences.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ "./assets/js/util.js");
/* harmony import */ var _vendor_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../vendor/datatables */ "./assets/vendor/datatables/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lang_fr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lang/fr */ "./assets/js/lang/fr.js");



// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/absences.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 15/09/2020 06:17




var tabsences = []; //Saisie des absences

jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('click', '.absChangeTypeGroupe', function (e) {
  e.preventDefault();
  e.stopPropagation();
  jquery__WEBPACK_IMPORTED_MODULE_5___default()('.absChangeTypeGroupe').removeClass('btn-primary');
  jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).addClass('btn-primary');
  jquery__WEBPACK_IMPORTED_MODULE_5___default()('#listeEtudiantsAbsences').load(Routing.generate('api_absence_liste_etudiant', {
    typegroupe: jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).data('typegroupe')
  }), function () {
    console.log('then...');
    var date = jquery__WEBPACK_IMPORTED_MODULE_5___default()('#absence-date');
    var heure = jquery__WEBPACK_IMPORTED_MODULE_5___default()('#absence-heure');
    updateAffichage(date.val(), heure.val());
  });
});
jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('change', '#absence-matiere', function () {
  var etudiants = jquery__WEBPACK_IMPORTED_MODULE_5___default()('.etudiant');
  var date = jquery__WEBPACK_IMPORTED_MODULE_5___default()('#absence-date');
  var heure = jquery__WEBPACK_IMPORTED_MODULE_5___default()('#absence-heure');
  etudiants.removeClass('absent');
  updateAffichage(date.val(), heure.val());
});
jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('change', '#absence-date', function () {
  var etudiants = jquery__WEBPACK_IMPORTED_MODULE_5___default()('.etudiant');
  var date = jquery__WEBPACK_IMPORTED_MODULE_5___default()('#absence-date');
  var heure = jquery__WEBPACK_IMPORTED_MODULE_5___default()('#absence-heure');
  etudiants.removeClass('absent');
  updateAffichage(date.val(), heure.val());
});
jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('change', '#absence-heure', function () {
  var etudiants = jquery__WEBPACK_IMPORTED_MODULE_5___default()('.etudiant');
  var date = jquery__WEBPACK_IMPORTED_MODULE_5___default()('#absence-date');
  var heure = jquery__WEBPACK_IMPORTED_MODULE_5___default()('#absence-heure');
  etudiants.removeClass('absent');
  updateAffichage(date.val(), heure.val());
}); //marquage et enregistrement des absents

jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('click', '.etudiant', function () {
  var $split = jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).attr('id').split('_');

  if (jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).hasClass('absent')) {
    //supprimer absence
    jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).removeClass('absent');
    jquery__WEBPACK_IMPORTED_MODULE_5___default().ajax({
      type: 'POST',
      url: Routing.generate('application_personnel_absence_saisie_ajax', {
        matiere: jquery__WEBPACK_IMPORTED_MODULE_5___default()('#absence-matiere').val(),
        etudiant: $split[1]
      }),
      dataType: 'json',
      data: {
        date: jquery__WEBPACK_IMPORTED_MODULE_5___default()('#absence-date').val(),
        heure: jquery__WEBPACK_IMPORTED_MODULE_5___default()('#absence-heure').val(),
        action: 'suppr'
      },
      //affichage de l'erreur en cas de problème
      error: function error() {
        (0,_util__WEBPACK_IMPORTED_MODULE_3__.addCallout)('Erreur lors de la tentative de suppression de l\'absence !', 'danger');
      },
      success: function success(data) {
        tabsences = data;
        (0,_util__WEBPACK_IMPORTED_MODULE_3__.addCallout)('La suppression a été effectuée avec succés !', 'success');
      }
    });
  } else {
    //marquer comme absent
    jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).addClass('absent');
    jquery__WEBPACK_IMPORTED_MODULE_5___default().ajax({
      type: 'POST',
      url: Routing.generate('application_personnel_absence_saisie_ajax', {
        matiere: jquery__WEBPACK_IMPORTED_MODULE_5___default()('#absence-matiere').val(),
        etudiant: $split[1]
      }),
      dataType: 'json',
      data: {
        date: jquery__WEBPACK_IMPORTED_MODULE_5___default()('#absence-date').val(),
        heure: jquery__WEBPACK_IMPORTED_MODULE_5___default()('#absence-heure').val(),
        action: 'saisie'
      },
      //affichage de l'erreur en cas de problème
      error: function error(msg) {
        if (msg.responseText === 'out') {
          (0,_util__WEBPACK_IMPORTED_MODULE_3__.addCallout)('Le délai pour l\'enregistrement est dépassé. Contactez le responsable de la departement', 'danger');
        } else {
          (0,_util__WEBPACK_IMPORTED_MODULE_3__.addCallout)('Erreur lors de l\'enregistrement.', 'danger');
        }
      },
      success: function success(data) {
        (0,_util__WEBPACK_IMPORTED_MODULE_3__.addCallout)('Absence enregistrée avec succés !', 'success');
      }
    });
  }
});
jquery__WEBPACK_IMPORTED_MODULE_5___default()('#liste-absences').dataTable({
  'language': _lang_fr__WEBPACK_IMPORTED_MODULE_6__.dataTableLangueFr,
  'fnRowCallback': function fnRowCallback(nRow, aData, iDisplayIndex, iDisplayIndexFull) {
    if (aData[5] === 'non' || aData[5] === 'no' || aData[5] === 'No' || aData[5] === 'Non') {
      jquery__WEBPACK_IMPORTED_MODULE_5___default()('td', nRow).css('background-color', '#fce3e3');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_5___default()('td', nRow).css('background-color', '#e3fcf2');
    }
  }
});

function updateAffichage(date, heure) {
  jquery__WEBPACK_IMPORTED_MODULE_5___default().ajax({
    type: 'GET',
    url: Routing.generate('application_personnel_absence_get_ajax', {
      matiere: jquery__WEBPACK_IMPORTED_MODULE_5___default()('#absence-matiere').val()
    }),
    dataType: 'json',
    success: function success(data) {
      var t = date.split('/');
      var ddate = t[2].trim() + '-' + t[1].trim() + '-' + t[0].trim();

      if (heure.length === 4) {
        heure = '0' + heure;
      }

      for (var d in data) {
        if (d == ddate) {
          if (typeof data[d][heure] !== 'undefined') {
            for (var i = 0; i < data[d][heure].length; i++) {
              jquery__WEBPACK_IMPORTED_MODULE_5___default()('#etu_' + data[d][heure][i]).addClass('absent');
            }
          }
        }
      }
    }
  });
}

/***/ }),

/***/ "./assets/js/util.js":
/*!***************************!*\
  !*** ./assets/js/util.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addCallout": () => (/* binding */ addCallout),
/* harmony export */   "getDataOptions": () => (/* binding */ getDataOptions),
/* harmony export */   "invalidChamps": () => (/* binding */ invalidChamps),
/* harmony export */   "validChamps": () => (/* binding */ validChamps),
/* harmony export */   "completeChamps": () => (/* binding */ completeChamps)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");





// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/util.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 01/12/2020 22:04


var $stopCatchEnter = false;

function readUrlMenu($url) {
  var $elt = $url.split('/');
  var $firstElt = 2;

  if ($elt[1] === 'index.php') {
    if ($elt.length > 1) {
      $firstElt = 3;
    }
  }

  if ($elt[$firstElt] === 'super-administration') {
    $firstElt = $firstElt + 1;
  }

  if ($elt[$elt.length - 1] === '') {
    $elt.pop();
  }

  jquery__WEBPACK_IMPORTED_MODULE_5___default()('.menu-item').removeClass('active');
  jquery__WEBPACK_IMPORTED_MODULE_5___default()('#menu-' + $elt[$firstElt]).addClass('active');
} //colorise le bon menu


readUrlMenu(jquery__WEBPACK_IMPORTED_MODULE_5___default()(location).attr('pathname'));
sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().mixin({
  customClass: {
    confirmButton: 'btn btn-primary',
    cancelButton: 'btn btn-secondary'
  },
  buttonsStyling: false
}); //pop up de confirmation de suppression

jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('click', '.supprimer', function (e) {
  e.preventDefault();
  var url = jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).attr('href');
  var csrf = jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).data('csrf');
  sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
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
      jquery__WEBPACK_IMPORTED_MODULE_5___default().ajax({
        url: url,
        type: 'DELETE',
        data: {
          _token: csrf
        },
        success: function success(id) {
          if (id.hasOwnProperty('redirect') && id.hasOwnProperty('url')) {
            document.location.href = id.url;
          } else {
            //t.row("#ligne_"+id).remove().draw(); =< datattable todo: remove ligne si datatable ?? problème dans adm>personnel
            jquery__WEBPACK_IMPORTED_MODULE_5___default()('#ligne_' + id).closest('tr').remove();
            addCallout('Suppression effectuée avec succès', 'success');
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
              title: 'Supprimé!',
              text: 'L\'enregistrement a été supprimé.',
              icon: 'success',
              confirmButtonText: 'OK',
              customClass: {
                confirmButton: 'btn btn-primary',
                cancelButton: 'btn btn-secondary'
              },
              buttonsStyling: false
            });
          }
        },
        error: function error(xhr, ajaxOptions, thrownError) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
            title: 'Erreur lors de la suppression!',
            text: 'Merci de renouveler l\'opération',
            icon: 'error',
            confirmButtonText: 'OK',
            customClass: {
              confirmButton: 'btn btn-primary',
              cancelButton: 'btn btn-secondary'
            },
            buttonsStyling: false
          });
          addCallout('Erreur lors de la tentative de suppression', 'danger');
        }
      });
    } else if ( // Read more about handling dismissals
    result.dismiss === 'cancel') {
      sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
        title: 'Cancelled',
        text: 'OK! Tout est comme avant !',
        icon: 'error',
        confirmButtonText: 'OK',
        customClass: {
          confirmButton: 'btn btn-primary',
          cancelButton: 'btn btn-secondary'
        },
        buttonsStyling: false
      });
    }
  });
});
function addCallout(message, label) {
  console.log('callout');
  var translate = new Array();
  translate['success'] = 'Succès';
  translate['danger'] = 'Erreur';
  translate['warning'] = 'Attention';
  var html = '<div class="callout callout-' + label + '" role="alert">\n' + '                    <button type="button" class="close" data-dismiss="callout" aria-label="Close">\n' + '                        <span>&times;</span>\n' + '                    </button>\n' + '                    <h5>' + translate[label] + '</h5>\n' + '                    <p>' + message + '</p>\n' + '                </div>';
  jquery__WEBPACK_IMPORTED_MODULE_5___default()('#mainContent').prepend(html).slideDown('slow');
  jquery__WEBPACK_IMPORTED_MODULE_5___default()('.callout').delay(5000).slideUp('slow');
} //Editable

var myEditInitialContent = '';
var type = 'text';
var EditOnLine = false;
jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('click', '.myedit', function (e) {
  e.preventDefault();
  myEditInitialContent = jquery__WEBPACK_IMPORTED_MODULE_5___default()(this);
  var html = '';
  EditOnLine = true;

  if (typeof jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).data('type') !== 'undefined') {
    type = jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).data('type');
  }

  if (jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).data('type') === 'select') {//todo: A finaliser
  } else if (jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).data('type') === 'textarea') {
    html = genereTextArea(jquery__WEBPACK_IMPORTED_MODULE_5___default()(this));
  } else {
    html = genereInput(jquery__WEBPACK_IMPORTED_MODULE_5___default()(this));
  }

  jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).replaceWith(html);
  jquery__WEBPACK_IMPORTED_MODULE_5___default()('#myedit-input').focus();
});
jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('keyup', '#myedit-input', function (e) {
  if (e.keyCode === 13 && $stopCatchEnter === false) {
    updateData();
  } else if (e.keyCode === 27) {
    jquery__WEBPACK_IMPORTED_MODULE_5___default()('#myEdit-zone').replaceWith(myEditInitialContent);
  }
});
jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('click', '#myedit-valide', function (e) {
  $stopCatchEnter = false;
  e.preventDefault();
  updateData();
});
jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('keypress', function (e) {
  if (EditOnLine === true && $stopCatchEnter === false && e.which === 13) {
    e.preventDefault();
    updateData();
  }

  if (EditOnLine === true && $stopCatchEnter === false && e.which === 27) {
    e.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_5___default()('#myEdit-zone').replaceWith(myEditInitialContent);
  }
});
jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('click', '#myedit-annule', function (e) {
  e.preventDefault();
  jquery__WEBPACK_IMPORTED_MODULE_5___default()('#myEdit-zone').replaceWith(myEditInitialContent);
});

function updateData() {
  var val = jquery__WEBPACK_IMPORTED_MODULE_5___default()('#myedit-input').val();
  jquery__WEBPACK_IMPORTED_MODULE_5___default().ajax({
    url: myEditInitialContent.attr('href'),
    data: {
      field: myEditInitialContent.data('field'),
      value: val,
      type: type
    },
    method: 'POST',
    success: function success() {
      myEditInitialContent.html(val);
      jquery__WEBPACK_IMPORTED_MODULE_5___default()('#myEdit-zone').replaceWith(myEditInitialContent);
      EditOnLine = false;
    }
  });
}

function genereTextArea($obj) {
  $stopCatchEnter = true;
  return '<div id="myEdit-zone">\n' + '                      <textarea rows="5" class="form-control" id="myedit-input">' + $obj.html().trim() + '</textarea>\n' + '                      <span class="input-group-append">\n' + ' <button class="btn btn-success-outline" id="myedit-valide"><i class="fas fa-check"></i></button>\n' + '                        <button class="btn btn-danger-outline" id="myedit-annule"><i class="fas fa-times"></i></button>\n' + '                      </span>\n' + '                    </div>';
}

function genereInput($obj) {
  return '<div id="myEdit-zone" class="input-group">\n' + '                      <input type="text" class="form-control" id="myedit-input" value="' + $obj.html().trim() + '" >\n' + '                      <span class="input-group-append">\n' + ' <button class="btn btn-success-outline" id="myedit-valide"><i class="fas fa-check"></i></button>\n' + '                        <button class="btn btn-danger-outline" id="myedit-annule"><i class="fas fa-times"></i></button>\n' + '                      </span>\n' + '                    </div>';
}

jQuery.fn.dataAttr = function (name, def) {
  return jquery__WEBPACK_IMPORTED_MODULE_5___default()(this)[0].getAttribute('data-' + name) || def;
};

jQuery.fn.hasDataAttr = function (name) {
  return jquery__WEBPACK_IMPORTED_MODULE_5___default()(this)[0].hasAttribute('data-' + name);
};

function dataToOption(name) {
  return name.replace(/-([a-z])/g, function (x) {
    return x[1].toUpperCase();
  });
}

function getDataOptions(el, castList) {
  var options = {};
  jquery__WEBPACK_IMPORTED_MODULE_5___default().each(jquery__WEBPACK_IMPORTED_MODULE_5___default()(el).data(), function (key, value) {
    key = dataToOption(key); // Escape data-provide

    if (key == 'provide') {
      return;
    }

    if (castList != undefined) {
      var type = castList[key];

      switch (type) {
        case 'bool':
          value = Boolean(value);
          break;

        case 'num':
          value = Number(value);
          break;

        case 'array':
          value = value.split(',');
          break;

        default:
      }
    }

    options[key] = value;
  });
  return options;
}
function invalidChamps($obj) {
  $obj.removeClass('is-valid').addClass('is-invalid');
}
function validChamps($obj) {
  $obj.removeClass('is-invalid').addClass('is-valid');
}
function completeChamps($obj) {
  $obj.removeClass('is-invalid').removeClass('is-valid');
}

/***/ })

},
0,[["./assets/js/pages/absences.js","runtime","vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_modules_es_string_split_js","vendors-node_modules_core-js_internals_inherit-if-required_js-node_modules_core-js_internals_-f30b81","vendors-node_modules_core-js_modules_es_number_constructor_js-node_modules_core-js_modules_es-13932d","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_s-c0b602","vendors-node_modules_core-js_modules_es_array_filter_js-node_modules_core-js_modules_es_array-3f7266","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-2411fb","vendors-node_modules_core-js_modules_es_array_last-index-of_js-node_modules_core-js_modules_e-f7d21d","assets_vendor_datatables_index_js"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbGFuZy9mci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvYWJzZW5jZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWwuanMiXSwibmFtZXMiOlsiZGF0YVRhYmxlTGFuZ3VlRnIiLCJ0YWJzZW5jZXMiLCIkIiwiZG9jdW1lbnQiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJsb2FkIiwiUm91dGluZyIsImdlbmVyYXRlIiwidHlwZWdyb3VwZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZGF0ZSIsImhldXJlIiwidXBkYXRlQWZmaWNoYWdlIiwidmFsIiwiZXR1ZGlhbnRzIiwiJHNwbGl0IiwiYXR0ciIsInNwbGl0IiwiaGFzQ2xhc3MiLCJ0eXBlIiwidXJsIiwibWF0aWVyZSIsImV0dWRpYW50IiwiZGF0YVR5cGUiLCJhY3Rpb24iLCJlcnJvciIsImFkZENhbGxvdXQiLCJzdWNjZXNzIiwibXNnIiwicmVzcG9uc2VUZXh0IiwiZGF0YVRhYmxlIiwiblJvdyIsImFEYXRhIiwiaURpc3BsYXlJbmRleCIsImlEaXNwbGF5SW5kZXhGdWxsIiwiY3NzIiwidCIsImRkYXRlIiwidHJpbSIsImxlbmd0aCIsImQiLCJpIiwiJHN0b3BDYXRjaEVudGVyIiwicmVhZFVybE1lbnUiLCIkdXJsIiwiJGVsdCIsIiRmaXJzdEVsdCIsInBvcCIsImxvY2F0aW9uIiwiU3dhbCIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsImJ1dHRvbnNTdHlsaW5nIiwiY3NyZiIsInRpdGxlIiwidGV4dCIsImljb24iLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvbkNvbG9yIiwiY2FuY2VsQnV0dG9uQ29sb3IiLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJ0aGVuIiwicmVzdWx0IiwidmFsdWUiLCJfdG9rZW4iLCJpZCIsImhhc093blByb3BlcnR5IiwiaHJlZiIsImNsb3Nlc3QiLCJyZW1vdmUiLCJ4aHIiLCJhamF4T3B0aW9ucyIsInRocm93bkVycm9yIiwiZGlzbWlzcyIsIm1lc3NhZ2UiLCJsYWJlbCIsInRyYW5zbGF0ZSIsIkFycmF5IiwiaHRtbCIsInByZXBlbmQiLCJzbGlkZURvd24iLCJkZWxheSIsInNsaWRlVXAiLCJteUVkaXRJbml0aWFsQ29udGVudCIsIkVkaXRPbkxpbmUiLCJnZW5lcmVUZXh0QXJlYSIsImdlbmVyZUlucHV0IiwicmVwbGFjZVdpdGgiLCJmb2N1cyIsImtleUNvZGUiLCJ1cGRhdGVEYXRhIiwid2hpY2giLCJmaWVsZCIsIm1ldGhvZCIsIiRvYmoiLCJqUXVlcnkiLCJmbiIsImRhdGFBdHRyIiwibmFtZSIsImRlZiIsImdldEF0dHJpYnV0ZSIsImhhc0RhdGFBdHRyIiwiaGFzQXR0cmlidXRlIiwiZGF0YVRvT3B0aW9uIiwicmVwbGFjZSIsIngiLCJ0b1VwcGVyQ2FzZSIsImdldERhdGFPcHRpb25zIiwiZWwiLCJjYXN0TGlzdCIsIm9wdGlvbnMiLCJrZXkiLCJ1bmRlZmluZWQiLCJCb29sZWFuIiwiTnVtYmVyIiwiaW52YWxpZENoYW1wcyIsInZhbGlkQ2hhbXBzIiwiY29tcGxldGVDaGFtcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsaUJBQWlCLEdBQUc7QUFDL0IsYUFBVyxFQURvQjtBQUUvQixnQkFBYyxpREFGaUI7QUFHL0IsVUFBUSxpR0FIdUI7QUFJL0IsZUFBYSxnRkFKa0I7QUFLL0Isa0JBQWdCLDBEQUxlO0FBTS9CLGlCQUFlLEVBTmdCO0FBTy9CLGVBQWEsR0FQa0I7QUFRL0IsZ0JBQWMsd0NBUmlCO0FBUy9CLG9CQUFrQix3QkFUYTtBQVUvQixnQkFBYyx3QkFWaUI7QUFXL0IsWUFBVSxtQkFYcUI7QUFZL0IsaUJBQWUsK0NBWmdCO0FBYS9C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Qzs7QUFDQSxRQUFJQSxHQUFHLElBQUksU0FBWCxFQUFzQjtBQUNwQjtBQUNEOztBQUVELFFBQUlGLFFBQVEsSUFBSUcsU0FBaEIsRUFBMkI7QUFDekIsVUFBSS9GLElBQUksR0FBRzRGLFFBQVEsQ0FBQ0UsR0FBRCxDQUFuQjs7QUFDQSxjQUFROUYsSUFBUjtBQUNFLGFBQUssTUFBTDtBQUNFOEMsZUFBSyxHQUFHa0QsT0FBTyxDQUFDbEQsS0FBRCxDQUFmO0FBQ0E7O0FBRUYsYUFBSyxLQUFMO0FBQ0VBLGVBQUssR0FBR21ELE1BQU0sQ0FBQ25ELEtBQUQsQ0FBZDtBQUNBOztBQUVGLGFBQUssT0FBTDtBQUNFQSxlQUFLLEdBQUdBLEtBQUssQ0FBQ2hELEtBQU4sQ0FBWSxHQUFaLENBQVI7QUFDQTs7QUFFRjtBQWJGO0FBZ0JEOztBQUVEK0YsV0FBTyxDQUFDQyxHQUFELENBQVAsR0FBZWhELEtBQWY7QUFDRCxHQTlCRDtBQWdDQSxTQUFPK0MsT0FBUDtBQUNEO0FBRU0sU0FBU0ssYUFBVCxDQUF3QnJCLElBQXhCLEVBQThCO0FBQ25DQSxNQUFJLENBQUMvRixXQUFMLENBQWlCLFVBQWpCLEVBQTZCQyxRQUE3QixDQUFzQyxZQUF0QztBQUNEO0FBRU0sU0FBU29ILFdBQVQsQ0FBc0J0QixJQUF0QixFQUE0QjtBQUNqQ0EsTUFBSSxDQUFDL0YsV0FBTCxDQUFpQixZQUFqQixFQUErQkMsUUFBL0IsQ0FBd0MsVUFBeEM7QUFDRDtBQUVNLFNBQVNxSCxjQUFULENBQXlCdkIsSUFBekIsRUFBK0I7QUFDcENBLE1BQUksQ0FBQy9GLFdBQUwsQ0FBaUIsWUFBakIsRUFBK0JBLFdBQS9CLENBQTJDLFVBQTNDO0FBQ0QsQyIsImZpbGUiOiJhYnNlbmNlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9sYW5nL2ZyLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMjIvMDcvMjAyMCAxNToxMFxuXG5leHBvcnQgY29uc3QgZGF0YVRhYmxlTGFuZ3VlRnIgPSB7XG4gICdkZWNpbWFsJzogJycsXG4gICdlbXB0eVRhYmxlJzogJ0F1Y3VuZSBkb25uJmVhY3V0ZTtlIGRpc3BvbmlibGUgZGFucyBsZSB0YWJsZWF1JyxcbiAgJ2luZm8nOiAnQWZmaWNoYWdlIGRlIGxcXCcmZWFjdXRlO2wmZWFjdXRlO21lbnQgX1NUQVJUXyAmYWdyYXZlOyBfRU5EXyBzdXIgX1RPVEFMXyAmZWFjdXRlO2wmZWFjdXRlO21lbnRzJyxcbiAgJ2luZm9FbXB0eSc6ICdBZmZpY2hhZ2UgZGUgbFxcJyZlYWN1dGU7bCZlYWN1dGU7bWVudCAwICZhZ3JhdmU7IDAgc3VyIDAgJmVhY3V0ZTtsJmVhY3V0ZTttZW50JyxcbiAgJ2luZm9GaWx0ZXJlZCc6ICcoZmlsdHImZWFjdXRlOyBkZSBfTUFYXyAmZWFjdXRlO2wmZWFjdXRlO21lbnRzIGF1IHRvdGFsKScsXG4gICdpbmZvUG9zdEZpeCc6ICcnLFxuICAndGhvdXNhbmRzJzogJywnLFxuICAnbGVuZ3RoTWVudSc6ICdBZmZpY2hlciBfTUVOVV8gJmVhY3V0ZTtsJmVhY3V0ZTttZW50cycsXG4gICdsb2FkaW5nUmVjb3Jkcyc6ICdDaGFyZ2VtZW50IGVuIGNvdXJzLi4uJyxcbiAgJ3Byb2Nlc3NpbmcnOiAnVHJhaXRlbWVudCBlbiBjb3Vycy4uLicsXG4gICdzZWFyY2gnOiAnUmVjaGVyY2hlciZuYnNwOzonLFxuICAnemVyb1JlY29yZHMnOiAnQXVjdW4gJmVhY3V0ZTtsJmVhY3V0ZTttZW50ICZhZ3JhdmU7IGFmZmljaGVyJyxcbiAgJ3BhZ2luYXRlJzoge1xuICAgICdmaXJzdCc6ICdQcmVtaWVyJyxcbiAgICAnbGFzdCc6ICdEZXJuaWVyJyxcbiAgICAnbmV4dCc6ICdTdWl2YW50JyxcbiAgICAncHJldmlvdXMnOiAnUHImZWFjdXRlO2MmZWFjdXRlO2RlbnQnXG4gIH0sXG4gICdhcmlhJzoge1xuICAgICdzb3J0QXNjZW5kaW5nJzogJzogYWN0aXZlciBwb3VyIHRyaWVyIGxhIGNvbG9ubmUgcGFyIG9yZHJlIGNyb2lzc2FudCcsXG4gICAgJ3NvcnREZXNjZW5kaW5nJzogJzogYWN0aXZlciBwb3VyIHRyaWVyIGxhIGNvbG9ubmUgcGFyIG9yZHJlIGQmZWFjdXRlO2Nyb2lzc2FudCdcbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3BhZ2VzL2Fic2VuY2VzLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMTUvMDkvMjAyMCAwNjoxN1xuaW1wb3J0IHthZGRDYWxsb3V0fSBmcm9tICcuLi91dGlsJ1xuaW1wb3J0ICcuLi8uLi92ZW5kb3IvZGF0YXRhYmxlcydcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCB7ZGF0YVRhYmxlTGFuZ3VlRnJ9IGZyb20gJy4uL2xhbmcvZnInXG5cbmxldCB0YWJzZW5jZXMgPSBbXVxuXG4vL1NhaXNpZSBkZXMgYWJzZW5jZXNcbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuYWJzQ2hhbmdlVHlwZUdyb3VwZScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICQoJy5hYnNDaGFuZ2VUeXBlR3JvdXBlJykucmVtb3ZlQ2xhc3MoJ2J0bi1wcmltYXJ5JylcbiAgJCh0aGlzKS5hZGRDbGFzcygnYnRuLXByaW1hcnknKVxuICAkKCcjbGlzdGVFdHVkaWFudHNBYnNlbmNlcycpLmxvYWQoUm91dGluZy5nZW5lcmF0ZSgnYXBpX2Fic2VuY2VfbGlzdGVfZXR1ZGlhbnQnLCB7dHlwZWdyb3VwZTogJCh0aGlzKS5kYXRhKCd0eXBlZ3JvdXBlJyl9KSwgKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZygndGhlbi4uLicpXG4gICAgbGV0IGRhdGUgPSAkKCcjYWJzZW5jZS1kYXRlJylcbiAgICBsZXQgaGV1cmUgPSAkKCcjYWJzZW5jZS1oZXVyZScpXG4gICAgdXBkYXRlQWZmaWNoYWdlKGRhdGUudmFsKCksIGhldXJlLnZhbCgpKVxuICB9KSlcblxufSlcblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcjYWJzZW5jZS1tYXRpZXJlJywgZnVuY3Rpb24gKCkge1xuICBsZXQgZXR1ZGlhbnRzID0gJCgnLmV0dWRpYW50JylcbiAgbGV0IGRhdGUgPSAkKCcjYWJzZW5jZS1kYXRlJylcbiAgbGV0IGhldXJlID0gJCgnI2Fic2VuY2UtaGV1cmUnKVxuICBldHVkaWFudHMucmVtb3ZlQ2xhc3MoJ2Fic2VudCcpXG4gIHVwZGF0ZUFmZmljaGFnZShkYXRlLnZhbCgpLCBoZXVyZS52YWwoKSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnI2Fic2VuY2UtZGF0ZScsIGZ1bmN0aW9uICgpIHtcbiAgbGV0IGV0dWRpYW50cyA9ICQoJy5ldHVkaWFudCcpXG4gIGxldCBkYXRlID0gJCgnI2Fic2VuY2UtZGF0ZScpXG4gIGxldCBoZXVyZSA9ICQoJyNhYnNlbmNlLWhldXJlJylcbiAgZXR1ZGlhbnRzLnJlbW92ZUNsYXNzKCdhYnNlbnQnKVxuICB1cGRhdGVBZmZpY2hhZ2UoZGF0ZS52YWwoKSwgaGV1cmUudmFsKCkpXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJyNhYnNlbmNlLWhldXJlJywgZnVuY3Rpb24gKCkge1xuICBjb25zdCBldHVkaWFudHMgPSAkKCcuZXR1ZGlhbnQnKVxuICBjb25zdCBkYXRlID0gJCgnI2Fic2VuY2UtZGF0ZScpXG4gIGNvbnN0IGhldXJlID0gJCgnI2Fic2VuY2UtaGV1cmUnKVxuICBldHVkaWFudHMucmVtb3ZlQ2xhc3MoJ2Fic2VudCcpXG4gIHVwZGF0ZUFmZmljaGFnZShkYXRlLnZhbCgpLCBoZXVyZS52YWwoKSlcbn0pXG5cbi8vbWFycXVhZ2UgZXQgZW5yZWdpc3RyZW1lbnQgZGVzIGFic2VudHNcbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuZXR1ZGlhbnQnLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0ICRzcGxpdCA9ICQodGhpcykuYXR0cignaWQnKS5zcGxpdCgnXycpXG4gIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhYnNlbnQnKSkge1xuXG4gICAgLy9zdXBwcmltZXIgYWJzZW5jZVxuICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2Fic2VudCcpXG5cbiAgICAkLmFqYXgoe1xuICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcHBsaWNhdGlvbl9wZXJzb25uZWxfYWJzZW5jZV9zYWlzaWVfYWpheCcsIHtcbiAgICAgICAgbWF0aWVyZTogJCgnI2Fic2VuY2UtbWF0aWVyZScpLnZhbCgpLFxuICAgICAgICBldHVkaWFudDogJHNwbGl0WzFdXG4gICAgICB9KSxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGRhdGU6ICQoJyNhYnNlbmNlLWRhdGUnKS52YWwoKSxcbiAgICAgICAgaGV1cmU6ICQoJyNhYnNlbmNlLWhldXJlJykudmFsKCksXG4gICAgICAgIGFjdGlvbjogJ3N1cHByJ1xuICAgICAgfSxcbiAgICAgIC8vYWZmaWNoYWdlIGRlIGwnZXJyZXVyIGVuIGNhcyBkZSBwcm9ibMOobWVcbiAgICAgIGVycm9yOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGFkZENhbGxvdXQoJ0VycmV1ciBsb3JzIGRlIGxhIHRlbnRhdGl2ZSBkZSBzdXBwcmVzc2lvbiBkZSBsXFwnYWJzZW5jZSAhJywgJ2RhbmdlcicpXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdGFic2VuY2VzID0gZGF0YVxuICAgICAgICBhZGRDYWxsb3V0KCdMYSBzdXBwcmVzc2lvbiBhIMOpdMOpIGVmZmVjdHXDqWUgYXZlYyBzdWNjw6lzICEnLCAnc3VjY2VzcycpXG4gICAgICB9XG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICAvL21hcnF1ZXIgY29tbWUgYWJzZW50XG4gICAgJCh0aGlzKS5hZGRDbGFzcygnYWJzZW50JylcbiAgICAkLmFqYXgoe1xuICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcHBsaWNhdGlvbl9wZXJzb25uZWxfYWJzZW5jZV9zYWlzaWVfYWpheCcsIHtcbiAgICAgICAgbWF0aWVyZTogJCgnI2Fic2VuY2UtbWF0aWVyZScpLnZhbCgpLFxuICAgICAgICBldHVkaWFudDogJHNwbGl0WzFdXG4gICAgICB9KSxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGRhdGU6ICQoJyNhYnNlbmNlLWRhdGUnKS52YWwoKSxcbiAgICAgICAgaGV1cmU6ICQoJyNhYnNlbmNlLWhldXJlJykudmFsKCksXG4gICAgICAgIGFjdGlvbjogJ3NhaXNpZSdcbiAgICAgIH0sXG4gICAgICAvL2FmZmljaGFnZSBkZSBsJ2VycmV1ciBlbiBjYXMgZGUgcHJvYmzDqG1lXG4gICAgICBlcnJvcjogZnVuY3Rpb24gKG1zZykge1xuICAgICAgICBpZiAobXNnLnJlc3BvbnNlVGV4dCA9PT0gJ291dCcpIHtcbiAgICAgICAgICBhZGRDYWxsb3V0KCdMZSBkw6lsYWkgcG91ciBsXFwnZW5yZWdpc3RyZW1lbnQgZXN0IGTDqXBhc3PDqS4gQ29udGFjdGV6IGxlIHJlc3BvbnNhYmxlIGRlIGxhIGRlcGFydGVtZW50JywgJ2RhbmdlcicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWRkQ2FsbG91dCgnRXJyZXVyIGxvcnMgZGUgbFxcJ2VucmVnaXN0cmVtZW50LicsICdkYW5nZXInKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgYWRkQ2FsbG91dCgnQWJzZW5jZSBlbnJlZ2lzdHLDqWUgYXZlYyBzdWNjw6lzICEnLCAnc3VjY2VzcycpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufSlcblxuJCgnI2xpc3RlLWFic2VuY2VzJykuZGF0YVRhYmxlKHtcbiAgJ2xhbmd1YWdlJzogZGF0YVRhYmxlTGFuZ3VlRnIsXG4gICdmblJvd0NhbGxiYWNrJzogZnVuY3Rpb24gKG5Sb3csIGFEYXRhLCBpRGlzcGxheUluZGV4LCBpRGlzcGxheUluZGV4RnVsbCkge1xuXG4gICAgaWYgKGFEYXRhWzVdID09PSAnbm9uJyB8fCBhRGF0YVs1XSA9PT0gJ25vJyB8fCBhRGF0YVs1XSA9PT0gJ05vJyB8fCBhRGF0YVs1XSA9PT0gJ05vbicpIHtcbiAgICAgICQoJ3RkJywgblJvdykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgJyNmY2UzZTMnKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKCd0ZCcsIG5Sb3cpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsICcjZTNmY2YyJylcbiAgICB9XG4gIH1cbn0pXG5cbmZ1bmN0aW9uIHVwZGF0ZUFmZmljaGFnZSAoZGF0ZSwgaGV1cmUpIHtcbiAgJC5hamF4KHtcbiAgICB0eXBlOiAnR0VUJyxcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcGxpY2F0aW9uX3BlcnNvbm5lbF9hYnNlbmNlX2dldF9hamF4Jywge21hdGllcmU6ICQoJyNhYnNlbmNlLW1hdGllcmUnKS52YWwoKX0pLFxuICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIGNvbnN0IHQgPSBkYXRlLnNwbGl0KCcvJylcbiAgICAgIGNvbnN0IGRkYXRlID0gdFsyXS50cmltKCkgKyAnLScgKyB0WzFdLnRyaW0oKSArICctJyArIHRbMF0udHJpbSgpXG4gICAgICBpZiAoaGV1cmUubGVuZ3RoID09PSA0KSB7XG4gICAgICAgIGhldXJlID0gJzAnICsgaGV1cmVcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgZCBpbiBkYXRhKSB7XG4gICAgICAgIGlmIChkID09IGRkYXRlKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2RdW2hldXJlXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YVtkXVtoZXVyZV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgJCgnI2V0dV8nICsgZGF0YVtkXVtoZXVyZV1baV0pLmFkZENsYXNzKCdhYnNlbnQnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSlcbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy91dGlsLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMDEvMTIvMjAyMCAyMjowNFxuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0MidcblxubGV0ICRzdG9wQ2F0Y2hFbnRlciA9IGZhbHNlXG5cbmZ1bmN0aW9uIHJlYWRVcmxNZW51ICgkdXJsKSB7XG4gIGNvbnN0ICRlbHQgPSAkdXJsLnNwbGl0KCcvJylcbiAgbGV0ICRmaXJzdEVsdCA9IDJcbiAgaWYgKCRlbHRbMV0gPT09ICdpbmRleC5waHAnKSB7XG4gICAgaWYgKCRlbHQubGVuZ3RoID4gMSkge1xuICAgICAgJGZpcnN0RWx0ID0gM1xuICAgIH1cbiAgfVxuXG4gIGlmICgkZWx0WyRmaXJzdEVsdF0gPT09ICdzdXBlci1hZG1pbmlzdHJhdGlvbicpIHtcbiAgICAkZmlyc3RFbHQgPSAkZmlyc3RFbHQgKyAxXG4gIH1cblxuICBpZiAoJGVsdFskZWx0Lmxlbmd0aCAtIDFdID09PSAnJykge1xuICAgICRlbHQucG9wKClcbiAgfVxuXG4gICQoJy5tZW51LWl0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgJCgnI21lbnUtJyArICRlbHRbJGZpcnN0RWx0XSkuYWRkQ2xhc3MoJ2FjdGl2ZScpXG59XG5cbi8vY29sb3Jpc2UgbGUgYm9uIG1lbnVcbnJlYWRVcmxNZW51KCQobG9jYXRpb24pLmF0dHIoJ3BhdGhuYW1lJykpXG5cblN3YWwubWl4aW4oe1xuICBjdXN0b21DbGFzczoge1xuICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICB9LFxuICBidXR0b25zU3R5bGluZzogZmFsc2Vcbn0pXG4vL3BvcCB1cCBkZSBjb25maXJtYXRpb24gZGUgc3VwcHJlc3Npb25cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuc3VwcHJpbWVyJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IHVybCA9ICQodGhpcykuYXR0cignaHJlZicpXG4gIGNvbnN0IGNzcmYgPSAkKHRoaXMpLmRhdGEoJ2NzcmYnKVxuICBTd2FsLmZpcmUoe1xuICAgIHRpdGxlOiAnQ29uZmlybWVyIGxhIHN1cHByZXNzaW9uID8nLFxuICAgIHRleHQ6ICdMXFwnb3DDqXJhdGlvbiBuZSBwb3VycmEgcGFzIMOqdHJlIGFubnVsw6llLicsXG4gICAgaWNvbjogJ3dhcm5pbmcnLFxuICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgY29uZmlybUJ1dHRvbkNvbG9yOiAnIzMwODVkNicsXG4gICAgY2FuY2VsQnV0dG9uQ29sb3I6ICcjZDMzJyxcbiAgICBjb25maXJtQnV0dG9uVGV4dDogJ091aSwgamUgY29uZmlybWUnLFxuICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdOb24sIEFubnVsZXInLFxuICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgIH0sXG4gICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICAgICQuYWpheCh7XG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICB0eXBlOiAnREVMRVRFJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIF90b2tlbjogY3NyZlxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICBpZiAoaWQuaGFzT3duUHJvcGVydHkoJ3JlZGlyZWN0JykgJiYgaWQuaGFzT3duUHJvcGVydHkoJ3VybCcpKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gaWQudXJsXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vdC5yb3coXCIjbGlnbmVfXCIraWQpLnJlbW92ZSgpLmRyYXcoKTsgPTwgZGF0YXR0YWJsZSB0b2RvOiByZW1vdmUgbGlnbmUgc2kgZGF0YXRhYmxlID8/IHByb2Jsw6htZSBkYW5zIGFkbT5wZXJzb25uZWxcbiAgICAgICAgICAgICQoJyNsaWduZV8nICsgaWQpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKClcbiAgICAgICAgICAgIGFkZENhbGxvdXQoJ1N1cHByZXNzaW9uIGVmZmVjdHXDqWUgYXZlYyBzdWNjw6hzJywgJ3N1Y2Nlc3MnKVxuICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdTdXBwcmltw6khJyxcbiAgICAgICAgICAgICAgdGV4dDogJ0xcXCdlbnJlZ2lzdHJlbWVudCBhIMOpdMOpIHN1cHByaW3DqS4nLFxuICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgYWpheE9wdGlvbnMsIHRocm93bkVycm9yKSB7XG4gICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgIHRpdGxlOiAnRXJyZXVyIGxvcnMgZGUgbGEgc3VwcHJlc3Npb24hJyxcbiAgICAgICAgICAgIHRleHQ6ICdNZXJjaSBkZSByZW5vdXZlbGVyIGxcXCdvcMOpcmF0aW9uJyxcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgICAgICB9KVxuICAgICAgICAgIGFkZENhbGxvdXQoJ0VycmV1ciBsb3JzIGRlIGxhIHRlbnRhdGl2ZSBkZSBzdXBwcmVzc2lvbicsICdkYW5nZXInKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgfSBlbHNlIGlmIChcbiAgICAgIC8vIFJlYWQgbW9yZSBhYm91dCBoYW5kbGluZyBkaXNtaXNzYWxzXG4gICAgICByZXN1bHQuZGlzbWlzcyA9PT0gJ2NhbmNlbCdcbiAgICApIHtcbiAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgIHRpdGxlOiAnQ2FuY2VsbGVkJyxcbiAgICAgICAgdGV4dDogJ09LISBUb3V0IGVzdCBjb21tZSBhdmFudCAhJyxcbiAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgIH0sXG4gICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG59KVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2FsbG91dCAobWVzc2FnZSwgbGFiZWwpIHtcbiAgY29uc29sZS5sb2coJ2NhbGxvdXQnKVxuICB2YXIgdHJhbnNsYXRlID0gbmV3IEFycmF5KClcbiAgdHJhbnNsYXRlWydzdWNjZXNzJ10gPSAnU3VjY8OocydcbiAgdHJhbnNsYXRlWydkYW5nZXInXSA9ICdFcnJldXInXG4gIHRyYW5zbGF0ZVsnd2FybmluZyddID0gJ0F0dGVudGlvbidcblxuICBjb25zdCBodG1sID0gJzxkaXYgY2xhc3M9XCJjYWxsb3V0IGNhbGxvdXQtJyArIGxhYmVsICsgJ1wiIHJvbGU9XCJhbGVydFwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJjYWxsb3V0XCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiZ0aW1lczs8L3NwYW4+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPGg1PicgKyB0cmFuc2xhdGVbbGFiZWxdICsgJzwvaDU+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPHA+JyArIG1lc3NhZ2UgKyAnPC9wPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgPC9kaXY+J1xuXG4gICQoJyNtYWluQ29udGVudCcpLnByZXBlbmQoaHRtbCkuc2xpZGVEb3duKCdzbG93JylcbiAgJCgnLmNhbGxvdXQnKS5kZWxheSg1MDAwKS5zbGlkZVVwKCdzbG93Jylcbn1cblxuLy9FZGl0YWJsZVxubGV0IG15RWRpdEluaXRpYWxDb250ZW50ID0gJydcbmxldCB0eXBlID0gJ3RleHQnXG5sZXQgRWRpdE9uTGluZSA9IGZhbHNlXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubXllZGl0JywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIG15RWRpdEluaXRpYWxDb250ZW50ID0gJCh0aGlzKVxuICBsZXQgaHRtbCA9ICcnXG4gIEVkaXRPbkxpbmUgPSB0cnVlXG4gIGlmICh0eXBlb2YgKCQodGhpcykuZGF0YSgndHlwZScpKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0eXBlID0gJCh0aGlzKS5kYXRhKCd0eXBlJylcbiAgfVxuXG4gIGlmICgkKHRoaXMpLmRhdGEoJ3R5cGUnKSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAvL3RvZG86IEEgZmluYWxpc2VyXG4gIH0gZWxzZSBpZiAoJCh0aGlzKS5kYXRhKCd0eXBlJykgPT09ICd0ZXh0YXJlYScpIHtcbiAgICBodG1sID0gZ2VuZXJlVGV4dEFyZWEoJCh0aGlzKSlcbiAgfSBlbHNlIHtcbiAgICBodG1sID0gZ2VuZXJlSW5wdXQoJCh0aGlzKSlcbiAgfVxuICAkKHRoaXMpLnJlcGxhY2VXaXRoKGh0bWwpXG4gICQoJyNteWVkaXQtaW5wdXQnKS5mb2N1cygpXG59KVxuXG4kKGRvY3VtZW50KS5vbigna2V5dXAnLCAnI215ZWRpdC1pbnB1dCcsIGZ1bmN0aW9uIChlKSB7XG4gIGlmIChlLmtleUNvZGUgPT09IDEzICYmICRzdG9wQ2F0Y2hFbnRlciA9PT0gZmFsc2UpIHtcbiAgICB1cGRhdGVEYXRhKClcbiAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XG4gICAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG4gIH1cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbXllZGl0LXZhbGlkZScsIGZ1bmN0aW9uIChlKSB7XG4gICRzdG9wQ2F0Y2hFbnRlciA9IGZhbHNlXG4gIGUucHJldmVudERlZmF1bHQoKVxuICB1cGRhdGVEYXRhKClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdrZXlwcmVzcycsIGZ1bmN0aW9uIChlKSB7XG4gIGlmIChFZGl0T25MaW5lID09PSB0cnVlICYmICRzdG9wQ2F0Y2hFbnRlciA9PT0gZmFsc2UgJiYgZS53aGljaCA9PT0gMTMpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB1cGRhdGVEYXRhKClcbiAgfVxuXG4gIGlmIChFZGl0T25MaW5lID09PSB0cnVlICYmICRzdG9wQ2F0Y2hFbnRlciA9PT0gZmFsc2UgJiYgZS53aGljaCA9PT0gMjcpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbiAgfVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNteWVkaXQtYW5udWxlJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxufSlcblxuZnVuY3Rpb24gdXBkYXRlRGF0YSAoKSB7XG4gIGxldCB2YWwgPSAkKCcjbXllZGl0LWlucHV0JykudmFsKClcbiAgJC5hamF4KHtcbiAgICB1cmw6IG15RWRpdEluaXRpYWxDb250ZW50LmF0dHIoJ2hyZWYnKSxcbiAgICBkYXRhOiB7XG4gICAgICBmaWVsZDogbXlFZGl0SW5pdGlhbENvbnRlbnQuZGF0YSgnZmllbGQnKSxcbiAgICAgIHZhbHVlOiB2YWwsXG4gICAgICB0eXBlOiB0eXBlXG4gICAgfSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICBteUVkaXRJbml0aWFsQ29udGVudC5odG1sKHZhbClcbiAgICAgICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxuICAgICAgRWRpdE9uTGluZSA9IGZhbHNlXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBnZW5lcmVUZXh0QXJlYSAoJG9iaikge1xuICAkc3RvcENhdGNoRW50ZXIgPSB0cnVlXG4gIHJldHVybiAnPGRpdiBpZD1cIm15RWRpdC16b25lXCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgcm93cz1cIjVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwibXllZGl0LWlucHV0XCI+JyArICRvYmouaHRtbCgpLnRyaW0oKSArICc8L3RleHRhcmVhPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cXG4nICtcbiAgICAnIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3Mtb3V0bGluZVwiIGlkPVwibXllZGl0LXZhbGlkZVwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZWNrXCI+PC9pPjwvYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXItb3V0bGluZVwiIGlkPVwibXllZGl0LWFubnVsZVwiPjxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPjwvYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDwvZGl2Pidcbn1cblxuZnVuY3Rpb24gZ2VuZXJlSW5wdXQgKCRvYmopIHtcblxuICByZXR1cm4gJzxkaXYgaWQ9XCJteUVkaXQtem9uZVwiIGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJteWVkaXQtaW5wdXRcIiB2YWx1ZT1cIicgKyAkb2JqLmh0bWwoKS50cmltKCkgKyAnXCIgPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cXG4nICtcbiAgICAnIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3Mtb3V0bGluZVwiIGlkPVwibXllZGl0LXZhbGlkZVwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZWNrXCI+PC9pPjwvYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXItb3V0bGluZVwiIGlkPVwibXllZGl0LWFubnVsZVwiPjxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPjwvYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDwvZGl2Pidcbn1cblxualF1ZXJ5LmZuLmRhdGFBdHRyID0gZnVuY3Rpb24gKG5hbWUsIGRlZikge1xuICByZXR1cm4gJCh0aGlzKVswXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtJyArIG5hbWUpIHx8IGRlZlxufVxuXG5qUXVlcnkuZm4uaGFzRGF0YUF0dHIgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gJCh0aGlzKVswXS5oYXNBdHRyaWJ1dGUoJ2RhdGEtJyArIG5hbWUpXG59XG5cbmZ1bmN0aW9uIGRhdGFUb09wdGlvbiAobmFtZSkge1xuICByZXR1cm4gbmFtZS5yZXBsYWNlKC8tKFthLXpdKS9nLCBmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiB4WzFdLnRvVXBwZXJDYXNlKClcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGFPcHRpb25zIChlbCwgY2FzdExpc3QpIHtcbiAgdmFyIG9wdGlvbnMgPSB7fVxuICAkLmVhY2goJChlbCkuZGF0YSgpLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuXG4gICAga2V5ID0gZGF0YVRvT3B0aW9uKGtleSlcblxuICAgIC8vIEVzY2FwZSBkYXRhLXByb3ZpZGVcbiAgICBpZiAoa2V5ID09ICdwcm92aWRlJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGNhc3RMaXN0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHR5cGUgPSBjYXN0TGlzdFtrZXldXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYm9vbCc6XG4gICAgICAgICAgdmFsdWUgPSBCb29sZWFuKHZhbHVlKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAnbnVtJzpcbiAgICAgICAgICB2YWx1ZSA9IE51bWJlcih2YWx1ZSlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnNwbGl0KCcsJylcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGRlZmF1bHQ6XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBvcHRpb25zW2tleV0gPSB2YWx1ZVxuICB9KVxuXG4gIHJldHVybiBvcHRpb25zXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZhbGlkQ2hhbXBzICgkb2JqKSB7XG4gICRvYmoucmVtb3ZlQ2xhc3MoJ2lzLXZhbGlkJykuYWRkQ2xhc3MoJ2lzLWludmFsaWQnKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRDaGFtcHMgKCRvYmopIHtcbiAgJG9iai5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpLmFkZENsYXNzKCdpcy12YWxpZCcpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wbGV0ZUNoYW1wcyAoJG9iaikge1xuICAkb2JqLnJlbW92ZUNsYXNzKCdpcy1pbnZhbGlkJykucmVtb3ZlQ2xhc3MoJ2lzLXZhbGlkJylcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=