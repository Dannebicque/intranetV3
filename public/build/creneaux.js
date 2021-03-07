(self["webpackChunk"] = self["webpackChunk"] || []).push([["creneaux"],{

/***/ "./assets/js/pages/creneaux.js":
/*!*************************************!*\
  !*** ./assets/js/pages/creneaux.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./assets/js/util.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/creneaux.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 06/09/2020 16:14

$(document).on('click', '#btn_creneau_add', function () {
  var $annee = $('#change_annee_universitiare_temp').val();
  $.ajax({
    method: 'POST',
    data: {
      anneeUniversitaire: $annee,
      jour: $('#creneau_jour').val(),
      debut: $('#creneau_debut').val(),
      fin: $('#creneau_fin').val()
    },
    url: Routing.generate('administration_creneau_cours_new'),
    success: function success() {
      $('#liste_creneaux').empty().load(Routing.generate('administration_creneau_cours_liste', {
        annee_universitaire: $annee
      }));
      (0,_util__WEBPACK_IMPORTED_MODULE_1__.addCallout)('Créneau ajouté avec succès', 'success');
    },
    error: function error() {
      (0,_util__WEBPACK_IMPORTED_MODULE_1__.addCallout)('Erreur lors de l\'ajout du créneau', 'danger');
    }
  });
});
$(document).on('click', '.bloquercreneau', function () {
  var $cr = $(this);

  if ($cr.hasClass('bloquercreneau_eviter')) {
    updateCreneau('dispo', $cr.data('creneau'), $cr.data('semaine'));
    $cr.removeClass('bloquercreneau_eviter');
  } else if ($cr.hasClass('bloquercreneau_interdit')) {
    $cr.removeClass('bloquercreneau_interdit');
    $cr.addClass('bloquercreneau_eviter');
    updateCreneau('au', $cr.data('creneau'), $cr.data('semaine'));
  } else {
    $cr.addClass('bloquercreneau_interdit');
    updateCreneau('va', $cr.data('creneau'), $cr.data('semaine'));
  }
});
$(document).on('click', '.creneau', function () {
  var interdit = $('#nb_interdit');
  var eviter = $('#nb_eviter');
  var dispo = $('#nb_dispo');
  var heure = $(this).data('heure');
  var jour = $(this).dataAttr('jour');
  var nb_interdit = parseInt(interdit.text());
  var nb_eviter = parseInt(eviter.text());
  var nb_dispo = parseInt(dispo.text());

  if ($(this).hasClass('bloquercreneau_interdit')) {
    $(this).removeClass('bloquercreneau_interdit');
    $(this).addClass('bloquercreneau_eviter');
    nb_interdit--;
    nb_eviter++;
    updateDisponibilite(jour, heure, 'E');
  } else if ($(this).hasClass('bloquercreneau_eviter')) {
    $(this).removeClass('bloquercreneau_eviter');
    nb_eviter--;
    nb_dispo++;
    updateDisponibilite(jour, heure, 'D');
  } else {
    $(this).addClass('bloquercreneau_interdit');
    nb_interdit++;
    nb_dispo--;
    updateDisponibilite(jour, heure, 'I');
  }

  interdit.text(nb_interdit);
  eviter.text(nb_eviter);
  dispo.text(nb_dispo);
});

function updateDisponibilite($jour, $heure, $etat) {
  $.ajax({
    url: Routing.generate('application_personnel_disponibilite_update'),
    data: {
      jour: $jour,
      heure: $heure,
      etat: $etat
    },
    method: 'POST'
  });
}

function updateCreneau($type, $cr, $semaine) {
  $.ajax({
    url: Routing.generate('administration_creneau_bloque_modifie_etat'),
    data: {
      creneau: $cr,
      type: $type,
      semaine: $semaine
    },
    method: 'POST'
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

/***/ }),

/***/ "./node_modules/core-js/internals/number-parse-int.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/number-parse-int.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var $parseInt = global.parseInt;
var hex = /^[+-]?0[Xx]/;
var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22;

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(String(string));
  return $parseInt(S, (radix >>> 0) || (hex.test(S) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-int.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-int.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var parseIntImplementation = __webpack_require__(/*! ../internals/number-parse-int */ "./node_modules/core-js/internals/number-parse-int.js");

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt != parseIntImplementation }, {
  parseInt: parseIntImplementation
});


/***/ })

},
0,[["./assets/js/pages/creneaux.js","runtime","vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_modules_es_string_split_js","vendors-node_modules_core-js_internals_inherit-if-required_js-node_modules_core-js_internals_-f30b81","vendors-node_modules_core-js_modules_es_number_constructor_js-node_modules_core-js_modules_es-13932d"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvY3JlbmVhdXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL251bWJlci1wYXJzZS1pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5wYXJzZS1pbnQuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50Iiwib24iLCIkYW5uZWUiLCJ2YWwiLCJhamF4IiwibWV0aG9kIiwiZGF0YSIsImFubmVlVW5pdmVyc2l0YWlyZSIsImpvdXIiLCJkZWJ1dCIsImZpbiIsInVybCIsIlJvdXRpbmciLCJnZW5lcmF0ZSIsInN1Y2Nlc3MiLCJlbXB0eSIsImxvYWQiLCJhbm5lZV91bml2ZXJzaXRhaXJlIiwiYWRkQ2FsbG91dCIsImVycm9yIiwiJGNyIiwiaGFzQ2xhc3MiLCJ1cGRhdGVDcmVuZWF1IiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImludGVyZGl0IiwiZXZpdGVyIiwiZGlzcG8iLCJoZXVyZSIsImRhdGFBdHRyIiwibmJfaW50ZXJkaXQiLCJwYXJzZUludCIsInRleHQiLCJuYl9ldml0ZXIiLCJuYl9kaXNwbyIsInVwZGF0ZURpc3BvbmliaWxpdGUiLCIkam91ciIsIiRoZXVyZSIsIiRldGF0IiwiZXRhdCIsIiR0eXBlIiwiJHNlbWFpbmUiLCJjcmVuZWF1IiwidHlwZSIsInNlbWFpbmUiLCIkc3RvcENhdGNoRW50ZXIiLCJyZWFkVXJsTWVudSIsIiR1cmwiLCIkZWx0Iiwic3BsaXQiLCIkZmlyc3RFbHQiLCJsZW5ndGgiLCJwb3AiLCJsb2NhdGlvbiIsImF0dHIiLCJTd2FsIiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwiYnV0dG9uc1N0eWxpbmciLCJlIiwicHJldmVudERlZmF1bHQiLCJjc3JmIiwidGl0bGUiLCJpY29uIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25Db2xvciIsImNhbmNlbEJ1dHRvbkNvbG9yIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwidGhlbiIsInJlc3VsdCIsInZhbHVlIiwiX3Rva2VuIiwiaWQiLCJoYXNPd25Qcm9wZXJ0eSIsImhyZWYiLCJjbG9zZXN0IiwicmVtb3ZlIiwieGhyIiwiYWpheE9wdGlvbnMiLCJ0aHJvd25FcnJvciIsImRpc21pc3MiLCJtZXNzYWdlIiwibGFiZWwiLCJjb25zb2xlIiwibG9nIiwidHJhbnNsYXRlIiwiQXJyYXkiLCJodG1sIiwicHJlcGVuZCIsInNsaWRlRG93biIsImRlbGF5Iiwic2xpZGVVcCIsIm15RWRpdEluaXRpYWxDb250ZW50IiwiRWRpdE9uTGluZSIsImdlbmVyZVRleHRBcmVhIiwiZ2VuZXJlSW5wdXQiLCJyZXBsYWNlV2l0aCIsImZvY3VzIiwia2V5Q29kZSIsInVwZGF0ZURhdGEiLCJ3aGljaCIsImZpZWxkIiwiJG9iaiIsInRyaW0iLCJqUXVlcnkiLCJmbiIsIm5hbWUiLCJkZWYiLCJnZXRBdHRyaWJ1dGUiLCJoYXNEYXRhQXR0ciIsImhhc0F0dHJpYnV0ZSIsImRhdGFUb09wdGlvbiIsInJlcGxhY2UiLCJ4IiwidG9VcHBlckNhc2UiLCJnZXREYXRhT3B0aW9ucyIsImVsIiwiY2FzdExpc3QiLCJvcHRpb25zIiwia2V5IiwidW5kZWZpbmVkIiwiQm9vbGVhbiIsIk51bWJlciIsImludmFsaWRDaGFtcHMiLCJ2YWxpZENoYW1wcyIsImNvbXBsZXRlQ2hhbXBzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsRUFBWixDQUFlLE9BQWYsRUFBd0Isa0JBQXhCLEVBQTRDLFlBQVU7QUFDcEQsTUFBTUMsTUFBTSxHQUFHSCxDQUFDLENBQUMsa0NBQUQsQ0FBRCxDQUFzQ0ksR0FBdEMsRUFB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QUFDQSxDQUFDIiwiZmlsZSI6ImNyZW5lYXV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3BhZ2VzL2NyZW5lYXV4LmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMDYvMDkvMjAyMCAxNjoxNFxuaW1wb3J0IHthZGRDYWxsb3V0fSBmcm9tICcuLi91dGlsJ1xuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2J0bl9jcmVuZWF1X2FkZCcsIGZ1bmN0aW9uKCl7XG4gIGNvbnN0ICRhbm5lZSA9ICQoJyNjaGFuZ2VfYW5uZWVfdW5pdmVyc2l0aWFyZV90ZW1wJykudmFsKClcbiAgJC5hamF4KHtcbiAgICBtZXRob2Q6J1BPU1QnLFxuICAgIGRhdGE6IHtcbiAgICAgIGFubmVlVW5pdmVyc2l0YWlyZTogJGFubmVlLFxuICAgICAgam91cjokKCcjY3JlbmVhdV9qb3VyJykudmFsKCksXG4gICAgICBkZWJ1dDokKCcjY3JlbmVhdV9kZWJ1dCcpLnZhbCgpLFxuICAgICAgZmluOiQoJyNjcmVuZWF1X2ZpbicpLnZhbCgpXG4gICAgfSxcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX2NyZW5lYXVfY291cnNfbmV3JyksXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgJCgnI2xpc3RlX2NyZW5lYXV4JykuZW1wdHkoKS5sb2FkKFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX2NyZW5lYXVfY291cnNfbGlzdGUnLCB7YW5uZWVfdW5pdmVyc2l0YWlyZTogJGFubmVlfSkpXG4gICAgICBhZGRDYWxsb3V0KCdDcsOpbmVhdSBham91dMOpIGF2ZWMgc3VjY8OocycsICdzdWNjZXNzJylcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbiAoKSB7XG4gICAgICBhZGRDYWxsb3V0KCdFcnJldXIgbG9ycyBkZSBsXFwnYWpvdXQgZHUgY3LDqW5lYXUnLCAnZGFuZ2VyJylcbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmJsb3F1ZXJjcmVuZWF1JywgZnVuY3Rpb24oKXtcbiAgY29uc3QgJGNyID0gJCh0aGlzKVxuICBpZiAoJGNyLmhhc0NsYXNzKCdibG9xdWVyY3JlbmVhdV9ldml0ZXInKSkge1xuICAgIHVwZGF0ZUNyZW5lYXUoJ2Rpc3BvJywgJGNyLmRhdGEoJ2NyZW5lYXUnKSwgJGNyLmRhdGEoJ3NlbWFpbmUnKSlcbiAgICAkY3IucmVtb3ZlQ2xhc3MoJ2Jsb3F1ZXJjcmVuZWF1X2V2aXRlcicpXG4gIH0gZWxzZSBpZigkY3IuaGFzQ2xhc3MoJ2Jsb3F1ZXJjcmVuZWF1X2ludGVyZGl0JykpIHtcbiAgICAkY3IucmVtb3ZlQ2xhc3MoJ2Jsb3F1ZXJjcmVuZWF1X2ludGVyZGl0JylcbiAgICAkY3IuYWRkQ2xhc3MoJ2Jsb3F1ZXJjcmVuZWF1X2V2aXRlcicpXG4gICAgdXBkYXRlQ3JlbmVhdSgnYXUnLCAkY3IuZGF0YSgnY3JlbmVhdScpLCAkY3IuZGF0YSgnc2VtYWluZScpKVxuICB9IGVsc2Uge1xuICAgICRjci5hZGRDbGFzcygnYmxvcXVlcmNyZW5lYXVfaW50ZXJkaXQnKVxuICAgIHVwZGF0ZUNyZW5lYXUoJ3ZhJywgJGNyLmRhdGEoJ2NyZW5lYXUnKSwgJGNyLmRhdGEoJ3NlbWFpbmUnKSlcbiAgfVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5jcmVuZWF1JywgZnVuY3Rpb24gKCkge1xuICBjb25zdCBpbnRlcmRpdCA9ICQoJyNuYl9pbnRlcmRpdCcpXG4gIGNvbnN0IGV2aXRlciA9ICQoJyNuYl9ldml0ZXInKVxuICBjb25zdCBkaXNwbyA9ICQoJyNuYl9kaXNwbycpXG4gIGNvbnN0IGhldXJlID0gJCh0aGlzKS5kYXRhKCdoZXVyZScpXG4gIGNvbnN0IGpvdXIgPSAkKHRoaXMpLmRhdGFBdHRyKCdqb3VyJylcblxuICBsZXQgbmJfaW50ZXJkaXQgPSBwYXJzZUludChpbnRlcmRpdC50ZXh0KCkpXG4gIGxldCBuYl9ldml0ZXIgPSBwYXJzZUludChldml0ZXIudGV4dCgpKVxuICBsZXQgbmJfZGlzcG8gPSBwYXJzZUludChkaXNwby50ZXh0KCkpXG5cbiAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2Jsb3F1ZXJjcmVuZWF1X2ludGVyZGl0JykpIHtcbiAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdibG9xdWVyY3JlbmVhdV9pbnRlcmRpdCcpXG4gICAgJCh0aGlzKS5hZGRDbGFzcygnYmxvcXVlcmNyZW5lYXVfZXZpdGVyJylcbiAgICBuYl9pbnRlcmRpdC0tXG4gICAgbmJfZXZpdGVyKytcbiAgICB1cGRhdGVEaXNwb25pYmlsaXRlKGpvdXIsIGhldXJlLCdFJylcbiAgfSBlbHNlIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdibG9xdWVyY3JlbmVhdV9ldml0ZXInKSkge1xuICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2Jsb3F1ZXJjcmVuZWF1X2V2aXRlcicpXG4gICAgbmJfZXZpdGVyLS1cbiAgICBuYl9kaXNwbysrXG4gICAgdXBkYXRlRGlzcG9uaWJpbGl0ZShqb3VyLCBoZXVyZSwnRCcpXG4gIH0gZWxzZSB7XG5cbiAgICAkKHRoaXMpLmFkZENsYXNzKCdibG9xdWVyY3JlbmVhdV9pbnRlcmRpdCcpXG4gICAgbmJfaW50ZXJkaXQrK1xuICAgIG5iX2Rpc3BvLS1cbiAgICB1cGRhdGVEaXNwb25pYmlsaXRlKGpvdXIsIGhldXJlLCdJJylcbiAgfVxuXG4gIGludGVyZGl0LnRleHQobmJfaW50ZXJkaXQpXG4gIGV2aXRlci50ZXh0KG5iX2V2aXRlcilcbiAgZGlzcG8udGV4dChuYl9kaXNwbylcbn0pXG5cbmZ1bmN0aW9uIHVwZGF0ZURpc3BvbmliaWxpdGUoJGpvdXIsICRoZXVyZSwgJGV0YXQpe1xuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYXBwbGljYXRpb25fcGVyc29ubmVsX2Rpc3BvbmliaWxpdGVfdXBkYXRlJyksXG4gICAgZGF0YTp7XG4gICAgICBqb3VyOiAkam91cixcbiAgICAgIGhldXJlOiAkaGV1cmUsXG4gICAgICBldGF0OiAkZXRhdFxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCdcbiAgfSlcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ3JlbmVhdSgkdHlwZSwgJGNyLCAkc2VtYWluZSl7XG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9jcmVuZWF1X2Jsb3F1ZV9tb2RpZmllX2V0YXQnKSxcbiAgICBkYXRhOntcbiAgICAgIGNyZW5lYXU6ICRjcixcbiAgICAgIHR5cGU6ICR0eXBlLFxuICAgICAgc2VtYWluZTogJHNlbWFpbmVcbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnXG4gIH0pXG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvdXRpbC5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDAxLzEyLzIwMjAgMjI6MDRcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXG5cbmxldCAkc3RvcENhdGNoRW50ZXIgPSBmYWxzZVxuXG5mdW5jdGlvbiByZWFkVXJsTWVudSAoJHVybCkge1xuICBjb25zdCAkZWx0ID0gJHVybC5zcGxpdCgnLycpXG4gIGxldCAkZmlyc3RFbHQgPSAyXG4gIGlmICgkZWx0WzFdID09PSAnaW5kZXgucGhwJykge1xuICAgIGlmICgkZWx0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICRmaXJzdEVsdCA9IDNcbiAgICB9XG4gIH1cblxuICBpZiAoJGVsdFskZmlyc3RFbHRdID09PSAnc3VwZXItYWRtaW5pc3RyYXRpb24nKSB7XG4gICAgJGZpcnN0RWx0ID0gJGZpcnN0RWx0ICsgMVxuICB9XG5cbiAgaWYgKCRlbHRbJGVsdC5sZW5ndGggLSAxXSA9PT0gJycpIHtcbiAgICAkZWx0LnBvcCgpXG4gIH1cblxuICAkKCcubWVudS1pdGVtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICQoJyNtZW51LScgKyAkZWx0WyRmaXJzdEVsdF0pLmFkZENsYXNzKCdhY3RpdmUnKVxufVxuXG4vL2NvbG9yaXNlIGxlIGJvbiBtZW51XG5yZWFkVXJsTWVudSgkKGxvY2F0aW9uKS5hdHRyKCdwYXRobmFtZScpKVxuXG5Td2FsLm1peGluKHtcbiAgY3VzdG9tQ2xhc3M6IHtcbiAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgfSxcbiAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG59KVxuLy9wb3AgdXAgZGUgY29uZmlybWF0aW9uIGRlIHN1cHByZXNzaW9uXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnN1cHByaW1lcicsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBjb25zdCB1cmwgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKVxuICBjb25zdCBjc3JmID0gJCh0aGlzKS5kYXRhKCdjc3JmJylcbiAgU3dhbC5maXJlKHtcbiAgICB0aXRsZTogJ0NvbmZpcm1lciBsYSBzdXBwcmVzc2lvbiA/JyxcbiAgICB0ZXh0OiAnTFxcJ29ww6lyYXRpb24gbmUgcG91cnJhIHBhcyDDqnRyZSBhbm51bMOpZS4nLFxuICAgIGljb246ICd3YXJuaW5nJyxcbiAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyMzMDg1ZDYnLFxuICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiAnI2QzMycsXG4gICAgY29uZmlybUJ1dHRvblRleHQ6ICdPdWksIGplIGNvbmZpcm1lJyxcbiAgICBjYW5jZWxCdXR0b25UZXh0OiAnTm9uLCBBbm51bGVyJyxcbiAgICBjdXN0b21DbGFzczoge1xuICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICB9LFxuICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICBpZiAocmVzdWx0LnZhbHVlKSB7XG4gICAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgdHlwZTogJ0RFTEVURScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBfdG9rZW46IGNzcmZcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgaWYgKGlkLmhhc093blByb3BlcnR5KCdyZWRpcmVjdCcpICYmIGlkLmhhc093blByb3BlcnR5KCd1cmwnKSkge1xuICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGlkLnVybFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL3Qucm93KFwiI2xpZ25lX1wiK2lkKS5yZW1vdmUoKS5kcmF3KCk7ID08IGRhdGF0dGFibGUgdG9kbzogcmVtb3ZlIGxpZ25lIHNpIGRhdGF0YWJsZSA/PyBwcm9ibMOobWUgZGFucyBhZG0+cGVyc29ubmVsXG4gICAgICAgICAgICAkKCcjbGlnbmVfJyArIGlkKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpXG4gICAgICAgICAgICBhZGRDYWxsb3V0KCdTdXBwcmVzc2lvbiBlZmZlY3R1w6llIGF2ZWMgc3VjY8OocycsICdzdWNjZXNzJylcbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgIHRpdGxlOiAnU3VwcHJpbcOpIScsXG4gICAgICAgICAgICAgIHRleHQ6ICdMXFwnZW5yZWdpc3RyZW1lbnQgYSDDqXTDqSBzdXBwcmltw6kuJyxcbiAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIGFqYXhPcHRpb25zLCB0aHJvd25FcnJvcikge1xuICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICB0aXRsZTogJ0VycmV1ciBsb3JzIGRlIGxhIHN1cHByZXNzaW9uIScsXG4gICAgICAgICAgICB0ZXh0OiAnTWVyY2kgZGUgcmVub3V2ZWxlciBsXFwnb3DDqXJhdGlvbicsXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgICAgfSlcbiAgICAgICAgICBhZGRDYWxsb3V0KCdFcnJldXIgbG9ycyBkZSBsYSB0ZW50YXRpdmUgZGUgc3VwcHJlc3Npb24nLCAnZGFuZ2VyJylcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgIH0gZWxzZSBpZiAoXG4gICAgICAvLyBSZWFkIG1vcmUgYWJvdXQgaGFuZGxpbmcgZGlzbWlzc2Fsc1xuICAgICAgcmVzdWx0LmRpc21pc3MgPT09ICdjYW5jZWwnXG4gICAgKSB7XG4gICAgICBTd2FsLmZpcmUoe1xuICAgICAgICB0aXRsZTogJ0NhbmNlbGxlZCcsXG4gICAgICAgIHRleHQ6ICdPSyEgVG91dCBlc3QgY29tbWUgYXZhbnQgIScsXG4gICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICB9LFxuICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuICB9KVxufSlcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENhbGxvdXQgKG1lc3NhZ2UsIGxhYmVsKSB7XG4gIGNvbnNvbGUubG9nKCdjYWxsb3V0JylcbiAgdmFyIHRyYW5zbGF0ZSA9IG5ldyBBcnJheSgpXG4gIHRyYW5zbGF0ZVsnc3VjY2VzcyddID0gJ1N1Y2PDqHMnXG4gIHRyYW5zbGF0ZVsnZGFuZ2VyJ10gPSAnRXJyZXVyJ1xuICB0cmFuc2xhdGVbJ3dhcm5pbmcnXSA9ICdBdHRlbnRpb24nXG5cbiAgY29uc3QgaHRtbCA9ICc8ZGl2IGNsYXNzPVwiY2FsbG91dCBjYWxsb3V0LScgKyBsYWJlbCArICdcIiByb2xlPVwiYWxlcnRcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiY2FsbG91dFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4mdGltZXM7PC9zcGFuPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxoNT4nICsgdHJhbnNsYXRlW2xhYmVsXSArICc8L2g1PlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxwPicgKyBtZXNzYWdlICsgJzwvcD5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgIDwvZGl2PidcblxuICAkKCcjbWFpbkNvbnRlbnQnKS5wcmVwZW5kKGh0bWwpLnNsaWRlRG93bignc2xvdycpXG4gICQoJy5jYWxsb3V0JykuZGVsYXkoNTAwMCkuc2xpZGVVcCgnc2xvdycpXG59XG5cbi8vRWRpdGFibGVcbmxldCBteUVkaXRJbml0aWFsQ29udGVudCA9ICcnXG5sZXQgdHlwZSA9ICd0ZXh0J1xubGV0IEVkaXRPbkxpbmUgPSBmYWxzZVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm15ZWRpdCcsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBteUVkaXRJbml0aWFsQ29udGVudCA9ICQodGhpcylcbiAgbGV0IGh0bWwgPSAnJ1xuICBFZGl0T25MaW5lID0gdHJ1ZVxuICBpZiAodHlwZW9mICgkKHRoaXMpLmRhdGEoJ3R5cGUnKSkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdHlwZSA9ICQodGhpcykuZGF0YSgndHlwZScpXG4gIH1cblxuICBpZiAoJCh0aGlzKS5kYXRhKCd0eXBlJykgPT09ICdzZWxlY3QnKSB7XG4gICAgLy90b2RvOiBBIGZpbmFsaXNlclxuICB9IGVsc2UgaWYgKCQodGhpcykuZGF0YSgndHlwZScpID09PSAndGV4dGFyZWEnKSB7XG4gICAgaHRtbCA9IGdlbmVyZVRleHRBcmVhKCQodGhpcykpXG4gIH0gZWxzZSB7XG4gICAgaHRtbCA9IGdlbmVyZUlucHV0KCQodGhpcykpXG4gIH1cbiAgJCh0aGlzKS5yZXBsYWNlV2l0aChodG1sKVxuICAkKCcjbXllZGl0LWlucHV0JykuZm9jdXMoKVxufSlcblxuJChkb2N1bWVudCkub24oJ2tleXVwJywgJyNteWVkaXQtaW5wdXQnLCBmdW5jdGlvbiAoZSkge1xuICBpZiAoZS5rZXlDb2RlID09PSAxMyAmJiAkc3RvcENhdGNoRW50ZXIgPT09IGZhbHNlKSB7XG4gICAgdXBkYXRlRGF0YSgpXG4gIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI215ZWRpdC12YWxpZGUnLCBmdW5jdGlvbiAoZSkge1xuICAkc3RvcENhdGNoRW50ZXIgPSBmYWxzZVxuICBlLnByZXZlbnREZWZhdWx0KClcbiAgdXBkYXRlRGF0YSgpXG59KVxuXG4kKGRvY3VtZW50KS5vbigna2V5cHJlc3MnLCBmdW5jdGlvbiAoZSkge1xuICBpZiAoRWRpdE9uTGluZSA9PT0gdHJ1ZSAmJiAkc3RvcENhdGNoRW50ZXIgPT09IGZhbHNlICYmIGUud2hpY2ggPT09IDEzKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdXBkYXRlRGF0YSgpXG4gIH1cblxuICBpZiAoRWRpdE9uTGluZSA9PT0gdHJ1ZSAmJiAkc3RvcENhdGNoRW50ZXIgPT09IGZhbHNlICYmIGUud2hpY2ggPT09IDI3KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG4gIH1cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbXllZGl0LWFubnVsZScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbn0pXG5cbmZ1bmN0aW9uIHVwZGF0ZURhdGEgKCkge1xuICBsZXQgdmFsID0gJCgnI215ZWRpdC1pbnB1dCcpLnZhbCgpXG4gICQuYWpheCh7XG4gICAgdXJsOiBteUVkaXRJbml0aWFsQ29udGVudC5hdHRyKCdocmVmJyksXG4gICAgZGF0YToge1xuICAgICAgZmllbGQ6IG15RWRpdEluaXRpYWxDb250ZW50LmRhdGEoJ2ZpZWxkJyksXG4gICAgICB2YWx1ZTogdmFsLFxuICAgICAgdHlwZTogdHlwZVxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgbXlFZGl0SW5pdGlhbENvbnRlbnQuaHRtbCh2YWwpXG4gICAgICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbiAgICAgIEVkaXRPbkxpbmUgPSBmYWxzZVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gZ2VuZXJlVGV4dEFyZWEgKCRvYmopIHtcbiAgJHN0b3BDYXRjaEVudGVyID0gdHJ1ZVxuICByZXR1cm4gJzxkaXYgaWQ9XCJteUVkaXQtem9uZVwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHJvd3M9XCI1XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIm15ZWRpdC1pbnB1dFwiPicgKyAkb2JqLmh0bWwoKS50cmltKCkgKyAnPC90ZXh0YXJlYT5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XFxuJyArXG4gICAgJyA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzLW91dGxpbmVcIiBpZD1cIm15ZWRpdC12YWxpZGVcIj48aSBjbGFzcz1cImZhcyBmYS1jaGVja1wiPjwvaT48L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyLW91dGxpbmVcIiBpZD1cIm15ZWRpdC1hbm51bGVcIj48aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT48L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nXG59XG5cbmZ1bmN0aW9uIGdlbmVyZUlucHV0ICgkb2JqKSB7XG5cbiAgcmV0dXJuICc8ZGl2IGlkPVwibXlFZGl0LXpvbmVcIiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwibXllZGl0LWlucHV0XCIgdmFsdWU9XCInICsgJG9iai5odG1sKCkudHJpbSgpICsgJ1wiID5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XFxuJyArXG4gICAgJyA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzLW91dGxpbmVcIiBpZD1cIm15ZWRpdC12YWxpZGVcIj48aSBjbGFzcz1cImZhcyBmYS1jaGVja1wiPjwvaT48L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyLW91dGxpbmVcIiBpZD1cIm15ZWRpdC1hbm51bGVcIj48aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT48L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nXG59XG5cbmpRdWVyeS5mbi5kYXRhQXR0ciA9IGZ1bmN0aW9uIChuYW1lLCBkZWYpIHtcbiAgcmV0dXJuICQodGhpcylbMF0uZ2V0QXR0cmlidXRlKCdkYXRhLScgKyBuYW1lKSB8fCBkZWZcbn1cblxualF1ZXJ5LmZuLmhhc0RhdGFBdHRyID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuICQodGhpcylbMF0uaGFzQXR0cmlidXRlKCdkYXRhLScgKyBuYW1lKVxufVxuXG5mdW5jdGlvbiBkYXRhVG9PcHRpb24gKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUucmVwbGFjZSgvLShbYS16XSkvZywgZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4geFsxXS50b1VwcGVyQ2FzZSgpXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhT3B0aW9ucyAoZWwsIGNhc3RMaXN0KSB7XG4gIHZhciBvcHRpb25zID0ge31cbiAgJC5lYWNoKCQoZWwpLmRhdGEoKSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcblxuICAgIGtleSA9IGRhdGFUb09wdGlvbihrZXkpXG5cbiAgICAvLyBFc2NhcGUgZGF0YS1wcm92aWRlXG4gICAgaWYgKGtleSA9PSAncHJvdmlkZScpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChjYXN0TGlzdCAhPSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciB0eXBlID0gY2FzdExpc3Rba2V5XVxuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2Jvb2wnOlxuICAgICAgICAgIHZhbHVlID0gQm9vbGVhbih2YWx1ZSlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ251bSc6XG4gICAgICAgICAgdmFsdWUgPSBOdW1iZXIodmFsdWUpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnLCcpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBkZWZhdWx0OlxuXG4gICAgICB9XG4gICAgfVxuXG4gICAgb3B0aW9uc1trZXldID0gdmFsdWVcbiAgfSlcblxuICByZXR1cm4gb3B0aW9uc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52YWxpZENoYW1wcyAoJG9iaikge1xuICAkb2JqLnJlbW92ZUNsYXNzKCdpcy12YWxpZCcpLmFkZENsYXNzKCdpcy1pbnZhbGlkJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkQ2hhbXBzICgkb2JqKSB7XG4gICRvYmoucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKS5hZGRDbGFzcygnaXMtdmFsaWQnKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGxldGVDaGFtcHMgKCRvYmopIHtcbiAgJG9iai5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpLnJlbW92ZUNsYXNzKCdpcy12YWxpZCcpXG59XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHRyaW0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0nKS50cmltO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciAkcGFyc2VJbnQgPSBnbG9iYWwucGFyc2VJbnQ7XG52YXIgaGV4ID0gL15bKy1dPzBbWHhdLztcbnZhciBGT1JDRUQgPSAkcGFyc2VJbnQod2hpdGVzcGFjZXMgKyAnMDgnKSAhPT0gOCB8fCAkcGFyc2VJbnQod2hpdGVzcGFjZXMgKyAnMHgxNicpICE9PSAyMjtcblxuLy8gYHBhcnNlSW50YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcGFyc2VpbnQtc3RyaW5nLXJhZGl4XG5tb2R1bGUuZXhwb3J0cyA9IEZPUkNFRCA/IGZ1bmN0aW9uIHBhcnNlSW50KHN0cmluZywgcmFkaXgpIHtcbiAgdmFyIFMgPSB0cmltKFN0cmluZyhzdHJpbmcpKTtcbiAgcmV0dXJuICRwYXJzZUludChTLCAocmFkaXggPj4+IDApIHx8IChoZXgudGVzdChTKSA/IDE2IDogMTApKTtcbn0gOiAkcGFyc2VJbnQ7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBwYXJzZUludEltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL251bWJlci1wYXJzZS1pbnQnKTtcblxuLy8gYHBhcnNlSW50YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcGFyc2VpbnQtc3RyaW5nLXJhZGl4XG4kKHsgZ2xvYmFsOiB0cnVlLCBmb3JjZWQ6IHBhcnNlSW50ICE9IHBhcnNlSW50SW1wbGVtZW50YXRpb24gfSwge1xuICBwYXJzZUludDogcGFyc2VJbnRJbXBsZW1lbnRhdGlvblxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9