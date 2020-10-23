(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["creneaux"],{

/***/ "./assets/js/pages/creneaux.js":
/*!*************************************!*\
  !*** ./assets/js/pages/creneaux.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./assets/js/util.js");

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
      Object(_util__WEBPACK_IMPORTED_MODULE_1__["addCallout"])('Créneau ajouté avec succès', 'success');
    },
    error: function error() {
      Object(_util__WEBPACK_IMPORTED_MODULE_1__["addCallout"])('Erreur lors de l\'ajout du créneau', 'danger');
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/util.js":
/*!***************************!*\
  !*** ./assets/js/util.js ***!
  \***************************/
/*! exports provided: addCallout, getDataOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCallout", function() { return addCallout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataOptions", function() { return getDataOptions; });
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);





// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/util.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 16/10/2020 14:54


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
sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.mixin({
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
        success: function success(id) {
          if (id.hasOwnProperty('redirect') && id.hasOwnProperty('url')) {
            document.location.href = id.url;
          } else {
            //t.row("#ligne_"+id).remove().draw(); =< datattable todo: remove ligne si datatable ?? problème dans adm>personnel
            jquery__WEBPACK_IMPORTED_MODULE_5___default()('#ligne_' + id).closest('tr').remove();
            addCallout('Suppression effectuée avec succès', 'success');
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
            });
          }
        },
        error: function error(xhr, ajaxOptions, thrownError) {
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
          });
          addCallout('Erreur lors de la tentative de suppression', 'danger');
        }
      });
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
  jquery__WEBPACK_IMPORTED_MODULE_5___default.a.ajax({
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
  jquery__WEBPACK_IMPORTED_MODULE_5___default.a.each(jquery__WEBPACK_IMPORTED_MODULE_5___default()(el).data(), function (key, value) {
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/number-parse-int.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/number-parse-int.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var $parseInt = global.parseInt;
var hex = /^[+-]?0[Xx]/;
var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22;

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(String(string));
  return $parseInt(S, (radix >>> 0) || (hex.test(S) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-int.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-int.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var parseIntImplementation = __webpack_require__(/*! ../internals/number-parse-int */ "./node_modules/core-js/internals/number-parse-int.js");

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt != parseIntImplementation }, {
  parseInt: parseIntImplementation
});


/***/ })

},[["./assets/js/pages/creneaux.js","runtime","vendors~absences~adm.absences~adm.alternances~adm.articles~adm.bornes~adm.configuration~adm.edt~adm.~d677a9f6","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~6af3b135","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~3a8cbb67","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~7452d955","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.groupe~adm.justificat~0d230585"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvY3JlbmVhdXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL251bWJlci1wYXJzZS1pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5wYXJzZS1pbnQuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50Iiwib24iLCIkYW5uZWUiLCJ2YWwiLCJhamF4IiwibWV0aG9kIiwiZGF0YSIsImFubmVlVW5pdmVyc2l0YWlyZSIsImpvdXIiLCJkZWJ1dCIsImZpbiIsInVybCIsIlJvdXRpbmciLCJnZW5lcmF0ZSIsInN1Y2Nlc3MiLCJlbXB0eSIsImxvYWQiLCJhbm5lZV91bml2ZXJzaXRhaXJlIiwiYWRkQ2FsbG91dCIsImVycm9yIiwiJGNyIiwiaGFzQ2xhc3MiLCJ1cGRhdGVDcmVuZWF1IiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImludGVyZGl0IiwiZXZpdGVyIiwiZGlzcG8iLCJoZXVyZSIsImRhdGFBdHRyIiwibmJfaW50ZXJkaXQiLCJwYXJzZUludCIsInRleHQiLCJuYl9ldml0ZXIiLCJuYl9kaXNwbyIsInVwZGF0ZURpc3BvbmliaWxpdGUiLCIkam91ciIsIiRoZXVyZSIsIiRldGF0IiwiZXRhdCIsIiR0eXBlIiwiJHNlbWFpbmUiLCJjcmVuZWF1IiwidHlwZSIsInNlbWFpbmUiLCIkc3RvcENhdGNoRW50ZXIiLCJyZWFkVXJsTWVudSIsIiR1cmwiLCIkZWx0Iiwic3BsaXQiLCIkZmlyc3RFbHQiLCJsZW5ndGgiLCJwb3AiLCJsb2NhdGlvbiIsImF0dHIiLCJTd2FsIiwibWl4aW4iLCJjdXN0b21DbGFzcyIsImNvbmZpcm1CdXR0b24iLCJjYW5jZWxCdXR0b24iLCJidXR0b25zU3R5bGluZyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNzcmYiLCJmaXJlIiwidGl0bGUiLCJpY29uIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25Db2xvciIsImNhbmNlbEJ1dHRvbkNvbG9yIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwidGhlbiIsInJlc3VsdCIsInZhbHVlIiwiX3Rva2VuIiwiaWQiLCJoYXNPd25Qcm9wZXJ0eSIsImhyZWYiLCJjbG9zZXN0IiwicmVtb3ZlIiwieGhyIiwiYWpheE9wdGlvbnMiLCJ0aHJvd25FcnJvciIsImRpc21pc3MiLCJtZXNzYWdlIiwibGFiZWwiLCJjb25zb2xlIiwibG9nIiwidHJhbnNsYXRlIiwiQXJyYXkiLCJodG1sIiwicHJlcGVuZCIsInNsaWRlRG93biIsImRlbGF5Iiwic2xpZGVVcCIsIm15RWRpdEluaXRpYWxDb250ZW50IiwiRWRpdE9uTGluZSIsImdlbmVyZVRleHRBcmVhIiwiZ2VuZXJlSW5wdXQiLCJyZXBsYWNlV2l0aCIsImZvY3VzIiwia2V5Q29kZSIsInVwZGF0ZURhdGEiLCJ3aGljaCIsImZpZWxkIiwiJG9iaiIsInRyaW0iLCJqUXVlcnkiLCJmbiIsIm5hbWUiLCJkZWYiLCJnZXRBdHRyaWJ1dGUiLCJoYXNEYXRhQXR0ciIsImhhc0F0dHJpYnV0ZSIsImRhdGFUb09wdGlvbiIsInJlcGxhY2UiLCJ4IiwidG9VcHBlckNhc2UiLCJnZXREYXRhT3B0aW9ucyIsImVsIiwiY2FzdExpc3QiLCJvcHRpb25zIiwiZWFjaCIsImtleSIsInVuZGVmaW5lZCIsIkJvb2xlYW4iLCJOdW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxFQUFaLENBQWUsT0FBZixFQUF3QixrQkFBeEIsRUFBNEMsWUFBVTtBQUNwRCxNQUFNQyxNQUFNLEdBQUdILENBQUMsQ0FBQyxrQ0FBRCxDQUFELENBQXNDSSxHQUF0QyxFQUFmO0FBQ0FKLEdBQUMsQ0FBQ0ssSUFBRixD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SUFBSSxTQUFYLEVBQXNCO0FBQ3BCO0FBQ0Q7O0FBRUQsUUFBSUgsUUFBUSxJQUFJSSxTQUFoQixFQUEyQjtBQUN6QixVQUFJbEYsSUFBSSxHQUFHOEUsUUFBUSxDQUFDRyxHQUFELENBQW5COztBQUNBLGNBQVFqRixJQUFSO0FBQ0UsYUFBSyxNQUFMO0FBQ0UrQixlQUFLLEdBQUdvRCxPQUFPLENBQUNwRCxLQUFELENBQWY7QUFDQTs7QUFFRixhQUFLLEtBQUw7QUFDRUEsZUFBSyxHQUFHcUQsTUFBTSxDQUFDckQsS0FBRCxDQUFkO0FBQ0E7O0FBRUYsYUFBSyxPQUFMO0FBQ0VBLGVBQUssR0FBR0EsS0FBSyxDQUFDekIsS0FBTixDQUFZLEdBQVosQ0FBUjtBQUNBOztBQUVGO0FBYkY7QUFnQkQ7O0FBRUR5RSxXQUFPLENBQUNFLEdBQUQsQ0FBUCxHQUFlbEQsS0FBZjtBQUNELEdBOUJEO0FBZ0NBLFNBQU9nRCxPQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7O0FDaFNELGFBQWEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDMUMsV0FBVyxtQkFBTyxDQUFDLGlGQUEwQjtBQUM3QyxrQkFBa0IsbUJBQU8sQ0FBQyxpRkFBMEI7O0FBRXBEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDYkQsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyw2QkFBNkIsbUJBQU8sQ0FBQywyRkFBK0I7O0FBRXBFO0FBQ0E7QUFDQSxHQUFHLDJEQUEyRDtBQUM5RDtBQUNBLENBQUMiLCJmaWxlIjoiY3JlbmVhdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvcGFnZXMvY3JlbmVhdXguanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAwNi8wOS8yMDIwIDE2OjE0XG5pbXBvcnQge2FkZENhbGxvdXR9IGZyb20gJy4uL3V0aWwnXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjYnRuX2NyZW5lYXVfYWRkJywgZnVuY3Rpb24oKXtcbiAgY29uc3QgJGFubmVlID0gJCgnI2NoYW5nZV9hbm5lZV91bml2ZXJzaXRpYXJlX3RlbXAnKS52YWwoKVxuICAkLmFqYXgoe1xuICAgIG1ldGhvZDonUE9TVCcsXG4gICAgZGF0YToge1xuICAgICAgYW5uZWVVbml2ZXJzaXRhaXJlOiAkYW5uZWUsXG4gICAgICBqb3VyOiQoJyNjcmVuZWF1X2pvdXInKS52YWwoKSxcbiAgICAgIGRlYnV0OiQoJyNjcmVuZWF1X2RlYnV0JykudmFsKCksXG4gICAgICBmaW46JCgnI2NyZW5lYXVfZmluJykudmFsKClcbiAgICB9LFxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fY3JlbmVhdV9jb3Vyc19uZXcnKSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAkKCcjbGlzdGVfY3JlbmVhdXgnKS5lbXB0eSgpLmxvYWQoUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fY3JlbmVhdV9jb3Vyc19saXN0ZScsIHthbm5lZV91bml2ZXJzaXRhaXJlOiAkYW5uZWV9KSlcbiAgICAgIGFkZENhbGxvdXQoJ0Nyw6luZWF1IGFqb3V0w6kgYXZlYyBzdWNjw6hzJywgJ3N1Y2Nlc3MnKVxuICAgIH0sXG4gICAgZXJyb3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGFkZENhbGxvdXQoJ0VycmV1ciBsb3JzIGRlIGxcXCdham91dCBkdSBjcsOpbmVhdScsICdkYW5nZXInKVxuICAgIH1cbiAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuYmxvcXVlcmNyZW5lYXUnLCBmdW5jdGlvbigpe1xuICBjb25zdCAkY3IgPSAkKHRoaXMpXG4gIGlmICgkY3IuaGFzQ2xhc3MoJ2Jsb3F1ZXJjcmVuZWF1X2V2aXRlcicpKSB7XG4gICAgdXBkYXRlQ3JlbmVhdSgnZGlzcG8nLCAkY3IuZGF0YSgnY3JlbmVhdScpLCAkY3IuZGF0YSgnc2VtYWluZScpKVxuICAgICRjci5yZW1vdmVDbGFzcygnYmxvcXVlcmNyZW5lYXVfZXZpdGVyJylcbiAgfSBlbHNlIGlmKCRjci5oYXNDbGFzcygnYmxvcXVlcmNyZW5lYXVfaW50ZXJkaXQnKSkge1xuICAgICRjci5yZW1vdmVDbGFzcygnYmxvcXVlcmNyZW5lYXVfaW50ZXJkaXQnKVxuICAgICRjci5hZGRDbGFzcygnYmxvcXVlcmNyZW5lYXVfZXZpdGVyJylcbiAgICB1cGRhdGVDcmVuZWF1KCdhdScsICRjci5kYXRhKCdjcmVuZWF1JyksICRjci5kYXRhKCdzZW1haW5lJykpXG4gIH0gZWxzZSB7XG4gICAgJGNyLmFkZENsYXNzKCdibG9xdWVyY3JlbmVhdV9pbnRlcmRpdCcpXG4gICAgdXBkYXRlQ3JlbmVhdSgndmEnLCAkY3IuZGF0YSgnY3JlbmVhdScpLCAkY3IuZGF0YSgnc2VtYWluZScpKVxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNyZW5lYXUnLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGludGVyZGl0ID0gJCgnI25iX2ludGVyZGl0JylcbiAgY29uc3QgZXZpdGVyID0gJCgnI25iX2V2aXRlcicpXG4gIGNvbnN0IGRpc3BvID0gJCgnI25iX2Rpc3BvJylcbiAgY29uc3QgaGV1cmUgPSAkKHRoaXMpLmRhdGEoJ2hldXJlJylcbiAgY29uc3Qgam91ciA9ICQodGhpcykuZGF0YUF0dHIoJ2pvdXInKVxuXG4gIGxldCBuYl9pbnRlcmRpdCA9IHBhcnNlSW50KGludGVyZGl0LnRleHQoKSlcbiAgbGV0IG5iX2V2aXRlciA9IHBhcnNlSW50KGV2aXRlci50ZXh0KCkpXG4gIGxldCBuYl9kaXNwbyA9IHBhcnNlSW50KGRpc3BvLnRleHQoKSlcblxuICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnYmxvcXVlcmNyZW5lYXVfaW50ZXJkaXQnKSkge1xuICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2Jsb3F1ZXJjcmVuZWF1X2ludGVyZGl0JylcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdibG9xdWVyY3JlbmVhdV9ldml0ZXInKVxuICAgIG5iX2ludGVyZGl0LS1cbiAgICBuYl9ldml0ZXIrK1xuICAgIHVwZGF0ZURpc3BvbmliaWxpdGUoam91ciwgaGV1cmUsJ0UnKVxuICB9IGVsc2UgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2Jsb3F1ZXJjcmVuZWF1X2V2aXRlcicpKSB7XG4gICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYmxvcXVlcmNyZW5lYXVfZXZpdGVyJylcbiAgICBuYl9ldml0ZXItLVxuICAgIG5iX2Rpc3BvKytcbiAgICB1cGRhdGVEaXNwb25pYmlsaXRlKGpvdXIsIGhldXJlLCdEJylcbiAgfSBlbHNlIHtcblxuICAgICQodGhpcykuYWRkQ2xhc3MoJ2Jsb3F1ZXJjcmVuZWF1X2ludGVyZGl0JylcbiAgICBuYl9pbnRlcmRpdCsrXG4gICAgbmJfZGlzcG8tLVxuICAgIHVwZGF0ZURpc3BvbmliaWxpdGUoam91ciwgaGV1cmUsJ0knKVxuICB9XG5cbiAgaW50ZXJkaXQudGV4dChuYl9pbnRlcmRpdClcbiAgZXZpdGVyLnRleHQobmJfZXZpdGVyKVxuICBkaXNwby50ZXh0KG5iX2Rpc3BvKVxufSlcblxuZnVuY3Rpb24gdXBkYXRlRGlzcG9uaWJpbGl0ZSgkam91ciwgJGhldXJlLCAkZXRhdCl7XG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcHBsaWNhdGlvbl9wZXJzb25uZWxfZGlzcG9uaWJpbGl0ZV91cGRhdGUnKSxcbiAgICBkYXRhOntcbiAgICAgIGpvdXI6ICRqb3VyLFxuICAgICAgaGV1cmU6ICRoZXVyZSxcbiAgICAgIGV0YXQ6ICRldGF0XG4gICAgfSxcbiAgICBtZXRob2Q6ICdQT1NUJ1xuICB9KVxufVxuXG5mdW5jdGlvbiB1cGRhdGVDcmVuZWF1KCR0eXBlLCAkY3IsICRzZW1haW5lKXtcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX2NyZW5lYXVfYmxvcXVlX21vZGlmaWVfZXRhdCcpLFxuICAgIGRhdGE6e1xuICAgICAgY3JlbmVhdTogJGNyLFxuICAgICAgdHlwZTogJHR5cGUsXG4gICAgICBzZW1haW5lOiAkc2VtYWluZVxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCdcbiAgfSlcbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy91dGlsLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMTYvMTAvMjAyMCAxNDo1NFxuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0MidcblxubGV0ICRzdG9wQ2F0Y2hFbnRlciA9IGZhbHNlXG5cbmZ1bmN0aW9uIHJlYWRVcmxNZW51ICgkdXJsKSB7XG4gIGNvbnN0ICRlbHQgPSAkdXJsLnNwbGl0KCcvJylcbiAgbGV0ICRmaXJzdEVsdCA9IDJcbiAgaWYgKCRlbHRbMV0gPT09ICdpbmRleC5waHAnKSB7XG4gICAgaWYgKCRlbHQubGVuZ3RoID4gMSkge1xuICAgICAgJGZpcnN0RWx0ID0gM1xuICAgIH1cbiAgfVxuXG4gIGlmICgkZWx0WyRmaXJzdEVsdF0gPT09ICdzdXBlci1hZG1pbmlzdHJhdGlvbicpIHtcbiAgICAkZmlyc3RFbHQgPSAkZmlyc3RFbHQgKyAxXG4gIH1cblxuICBpZiAoJGVsdFskZWx0Lmxlbmd0aCAtIDFdID09PSAnJykge1xuICAgICRlbHQucG9wKClcbiAgfVxuXG4gICQoJy5tZW51LWl0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgJCgnI21lbnUtJyArICRlbHRbJGZpcnN0RWx0XSkuYWRkQ2xhc3MoJ2FjdGl2ZScpXG59XG5cbi8vY29sb3Jpc2UgbGUgYm9uIG1lbnVcbnJlYWRVcmxNZW51KCQobG9jYXRpb24pLmF0dHIoJ3BhdGhuYW1lJykpXG5cblN3YWwubWl4aW4oe1xuICBjdXN0b21DbGFzczoge1xuICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICB9LFxuICBidXR0b25zU3R5bGluZzogZmFsc2Vcbn0pXG4vL3BvcCB1cCBkZSBjb25maXJtYXRpb24gZGUgc3VwcHJlc3Npb25cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuc3VwcHJpbWVyJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IHVybCA9ICQodGhpcykuYXR0cignaHJlZicpXG4gIGNvbnN0IGNzcmYgPSAkKHRoaXMpLmRhdGEoJ2NzcmYnKVxuICBTd2FsLmZpcmUoe1xuICAgIHRpdGxlOiAnQ29uZmlybWVyIGxhIHN1cHByZXNzaW9uID8nLFxuICAgIHRleHQ6ICdMXFwnb3DDqXJhdGlvbiBuZSBwb3VycmEgcGFzIMOqdHJlIGFubnVsw6llLicsXG4gICAgaWNvbjogJ3dhcm5pbmcnLFxuICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgY29uZmlybUJ1dHRvbkNvbG9yOiAnIzMwODVkNicsXG4gICAgY2FuY2VsQnV0dG9uQ29sb3I6ICcjZDMzJyxcbiAgICBjb25maXJtQnV0dG9uVGV4dDogJ091aSwgamUgY29uZmlybWUnLFxuICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdOb24sIEFubnVsZXInLFxuICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgIH0sXG4gICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICAgICQuYWpheCh7XG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICB0eXBlOiAnREVMRVRFJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIF90b2tlbjogY3NyZlxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICBpZiAoaWQuaGFzT3duUHJvcGVydHkoJ3JlZGlyZWN0JykgJiYgaWQuaGFzT3duUHJvcGVydHkoJ3VybCcpKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gaWQudXJsXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vdC5yb3coXCIjbGlnbmVfXCIraWQpLnJlbW92ZSgpLmRyYXcoKTsgPTwgZGF0YXR0YWJsZSB0b2RvOiByZW1vdmUgbGlnbmUgc2kgZGF0YXRhYmxlID8/IHByb2Jsw6htZSBkYW5zIGFkbT5wZXJzb25uZWxcbiAgICAgICAgICAgICQoJyNsaWduZV8nICsgaWQpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKClcbiAgICAgICAgICAgIGFkZENhbGxvdXQoJ1N1cHByZXNzaW9uIGVmZmVjdHXDqWUgYXZlYyBzdWNjw6hzJywgJ3N1Y2Nlc3MnKVxuICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdTdXBwcmltw6khJyxcbiAgICAgICAgICAgICAgdGV4dDogJ0xcXCdlbnJlZ2lzdHJlbWVudCBhIMOpdMOpIHN1cHByaW3DqS4nLFxuICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgYWpheE9wdGlvbnMsIHRocm93bkVycm9yKSB7XG4gICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgIHRpdGxlOiAnRXJyZXVyIGxvcnMgZGUgbGEgc3VwcHJlc3Npb24hJyxcbiAgICAgICAgICAgIHRleHQ6ICdNZXJjaSBkZSByZW5vdXZlbGVyIGxcXCdvcMOpcmF0aW9uJyxcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgICAgICB9KVxuICAgICAgICAgIGFkZENhbGxvdXQoJ0VycmV1ciBsb3JzIGRlIGxhIHRlbnRhdGl2ZSBkZSBzdXBwcmVzc2lvbicsICdkYW5nZXInKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgfSBlbHNlIGlmIChcbiAgICAgIC8vIFJlYWQgbW9yZSBhYm91dCBoYW5kbGluZyBkaXNtaXNzYWxzXG4gICAgICByZXN1bHQuZGlzbWlzcyA9PT0gJ2NhbmNlbCdcbiAgICApIHtcbiAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgIHRpdGxlOiAnQ2FuY2VsbGVkJyxcbiAgICAgICAgdGV4dDogJ09LISBUb3V0IGVzdCBjb21tZSBhdmFudCAhJyxcbiAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgIH0sXG4gICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG59KVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2FsbG91dCAobWVzc2FnZSwgbGFiZWwpIHtcbiAgY29uc29sZS5sb2coJ2NhbGxvdXQnKVxuICB2YXIgdHJhbnNsYXRlID0gbmV3IEFycmF5KClcbiAgdHJhbnNsYXRlWydzdWNjZXNzJ10gPSAnU3VjY8OocydcbiAgdHJhbnNsYXRlWydkYW5nZXInXSA9ICdFcnJldXInXG4gIHRyYW5zbGF0ZVsnd2FybmluZyddID0gJ0F0dGVudGlvbidcblxuICBjb25zdCBodG1sID0gJzxkaXYgY2xhc3M9XCJjYWxsb3V0IGNhbGxvdXQtJyArIGxhYmVsICsgJ1wiIHJvbGU9XCJhbGVydFwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJjYWxsb3V0XCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiZ0aW1lczs8L3NwYW4+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPGg1PicgKyB0cmFuc2xhdGVbbGFiZWxdICsgJzwvaDU+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPHA+JyArIG1lc3NhZ2UgKyAnPC9wPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgPC9kaXY+J1xuXG4gICQoJyNtYWluQ29udGVudCcpLnByZXBlbmQoaHRtbCkuc2xpZGVEb3duKCdzbG93JylcbiAgJCgnLmNhbGxvdXQnKS5kZWxheSg1MDAwKS5zbGlkZVVwKCdzbG93Jylcbn1cblxuLy9FZGl0YWJsZVxubGV0IG15RWRpdEluaXRpYWxDb250ZW50ID0gJydcbmxldCB0eXBlID0gJ3RleHQnXG5sZXQgRWRpdE9uTGluZSA9IGZhbHNlXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubXllZGl0JywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIG15RWRpdEluaXRpYWxDb250ZW50ID0gJCh0aGlzKVxuICBsZXQgaHRtbCA9ICcnXG4gIEVkaXRPbkxpbmUgPSB0cnVlXG4gIGlmICh0eXBlb2YgKCQodGhpcykuZGF0YSgndHlwZScpKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0eXBlID0gJCh0aGlzKS5kYXRhKCd0eXBlJylcbiAgfVxuXG4gIGlmICgkKHRoaXMpLmRhdGEoJ3R5cGUnKSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAvL3RvZG86IEEgZmluYWxpc2VyXG4gIH0gZWxzZSBpZiAoJCh0aGlzKS5kYXRhKCd0eXBlJykgPT09ICd0ZXh0YXJlYScpIHtcbiAgICBodG1sID0gZ2VuZXJlVGV4dEFyZWEoJCh0aGlzKSlcbiAgfSBlbHNlIHtcbiAgICBodG1sID0gZ2VuZXJlSW5wdXQoJCh0aGlzKSlcbiAgfVxuICAkKHRoaXMpLnJlcGxhY2VXaXRoKGh0bWwpXG4gICQoJyNteWVkaXQtaW5wdXQnKS5mb2N1cygpXG59KVxuXG4kKGRvY3VtZW50KS5vbigna2V5dXAnLCAnI215ZWRpdC1pbnB1dCcsIGZ1bmN0aW9uIChlKSB7XG4gIGlmIChlLmtleUNvZGUgPT09IDEzICYmICRzdG9wQ2F0Y2hFbnRlciA9PT0gZmFsc2UpIHtcbiAgICB1cGRhdGVEYXRhKClcbiAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XG4gICAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG4gIH1cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbXllZGl0LXZhbGlkZScsIGZ1bmN0aW9uIChlKSB7XG4gICRzdG9wQ2F0Y2hFbnRlciA9IGZhbHNlXG4gIGUucHJldmVudERlZmF1bHQoKVxuICB1cGRhdGVEYXRhKClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdrZXlwcmVzcycsIGZ1bmN0aW9uIChlKSB7XG4gIGlmIChFZGl0T25MaW5lID09PSB0cnVlICYmICRzdG9wQ2F0Y2hFbnRlciA9PT0gZmFsc2UgJiYgZS53aGljaCA9PT0gMTMpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB1cGRhdGVEYXRhKClcbiAgfVxuXG4gIGlmIChFZGl0T25MaW5lID09PSB0cnVlICYmICRzdG9wQ2F0Y2hFbnRlciA9PT0gZmFsc2UgJiYgZS53aGljaCA9PT0gMjcpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbiAgfVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNteWVkaXQtYW5udWxlJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxufSlcblxuZnVuY3Rpb24gdXBkYXRlRGF0YSAoKSB7XG4gIGxldCB2YWwgPSAkKCcjbXllZGl0LWlucHV0JykudmFsKClcbiAgJC5hamF4KHtcbiAgICB1cmw6IG15RWRpdEluaXRpYWxDb250ZW50LmF0dHIoJ2hyZWYnKSxcbiAgICBkYXRhOiB7XG4gICAgICBmaWVsZDogbXlFZGl0SW5pdGlhbENvbnRlbnQuZGF0YSgnZmllbGQnKSxcbiAgICAgIHZhbHVlOiB2YWwsXG4gICAgICB0eXBlOiB0eXBlXG4gICAgfSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICBteUVkaXRJbml0aWFsQ29udGVudC5odG1sKHZhbClcbiAgICAgICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxuICAgICAgRWRpdE9uTGluZSA9IGZhbHNlXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBnZW5lcmVUZXh0QXJlYSAoJG9iaikge1xuICAkc3RvcENhdGNoRW50ZXIgPSB0cnVlXG4gIHJldHVybiAnPGRpdiBpZD1cIm15RWRpdC16b25lXCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgcm93cz1cIjVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwibXllZGl0LWlucHV0XCI+JyArICRvYmouaHRtbCgpLnRyaW0oKSArICc8L3RleHRhcmVhPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cXG4nICtcbiAgICAnIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3Mtb3V0bGluZVwiIGlkPVwibXllZGl0LXZhbGlkZVwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZWNrXCI+PC9pPjwvYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXItb3V0bGluZVwiIGlkPVwibXllZGl0LWFubnVsZVwiPjxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPjwvYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDwvZGl2Pidcbn1cblxuZnVuY3Rpb24gZ2VuZXJlSW5wdXQgKCRvYmopIHtcblxuICByZXR1cm4gJzxkaXYgaWQ9XCJteUVkaXQtem9uZVwiIGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJteWVkaXQtaW5wdXRcIiB2YWx1ZT1cIicgKyAkb2JqLmh0bWwoKS50cmltKCkgKyAnXCIgPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cXG4nICtcbiAgICAnIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3Mtb3V0bGluZVwiIGlkPVwibXllZGl0LXZhbGlkZVwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZWNrXCI+PC9pPjwvYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXItb3V0bGluZVwiIGlkPVwibXllZGl0LWFubnVsZVwiPjxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPjwvYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDwvZGl2Pidcbn1cblxualF1ZXJ5LmZuLmRhdGFBdHRyID0gZnVuY3Rpb24gKG5hbWUsIGRlZikge1xuICByZXR1cm4gJCh0aGlzKVswXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtJyArIG5hbWUpIHx8IGRlZlxufVxuXG5qUXVlcnkuZm4uaGFzRGF0YUF0dHIgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gJCh0aGlzKVswXS5oYXNBdHRyaWJ1dGUoJ2RhdGEtJyArIG5hbWUpXG59XG5cbmZ1bmN0aW9uIGRhdGFUb09wdGlvbiAobmFtZSkge1xuICByZXR1cm4gbmFtZS5yZXBsYWNlKC8tKFthLXpdKS9nLCBmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiB4WzFdLnRvVXBwZXJDYXNlKClcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGFPcHRpb25zIChlbCwgY2FzdExpc3QpIHtcbiAgdmFyIG9wdGlvbnMgPSB7fVxuICAkLmVhY2goJChlbCkuZGF0YSgpLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuXG4gICAga2V5ID0gZGF0YVRvT3B0aW9uKGtleSlcblxuICAgIC8vIEVzY2FwZSBkYXRhLXByb3ZpZGVcbiAgICBpZiAoa2V5ID09ICdwcm92aWRlJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGNhc3RMaXN0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHR5cGUgPSBjYXN0TGlzdFtrZXldXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYm9vbCc6XG4gICAgICAgICAgdmFsdWUgPSBCb29sZWFuKHZhbHVlKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAnbnVtJzpcbiAgICAgICAgICB2YWx1ZSA9IE51bWJlcih2YWx1ZSlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnNwbGl0KCcsJylcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGRlZmF1bHQ6XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBvcHRpb25zW2tleV0gPSB2YWx1ZVxuICB9KVxuXG4gIHJldHVybiBvcHRpb25zXG59XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHRyaW0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0nKS50cmltO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciAkcGFyc2VJbnQgPSBnbG9iYWwucGFyc2VJbnQ7XG52YXIgaGV4ID0gL15bKy1dPzBbWHhdLztcbnZhciBGT1JDRUQgPSAkcGFyc2VJbnQod2hpdGVzcGFjZXMgKyAnMDgnKSAhPT0gOCB8fCAkcGFyc2VJbnQod2hpdGVzcGFjZXMgKyAnMHgxNicpICE9PSAyMjtcblxuLy8gYHBhcnNlSW50YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXBhcnNlaW50LXN0cmluZy1yYWRpeFxubW9kdWxlLmV4cG9ydHMgPSBGT1JDRUQgPyBmdW5jdGlvbiBwYXJzZUludChzdHJpbmcsIHJhZGl4KSB7XG4gIHZhciBTID0gdHJpbShTdHJpbmcoc3RyaW5nKSk7XG4gIHJldHVybiAkcGFyc2VJbnQoUywgKHJhZGl4ID4+PiAwKSB8fCAoaGV4LnRlc3QoUykgPyAxNiA6IDEwKSk7XG59IDogJHBhcnNlSW50O1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgcGFyc2VJbnRJbXBsZW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9udW1iZXItcGFyc2UtaW50Jyk7XG5cbi8vIGBwYXJzZUludGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1wYXJzZWludC1zdHJpbmctcmFkaXhcbiQoeyBnbG9iYWw6IHRydWUsIGZvcmNlZDogcGFyc2VJbnQgIT0gcGFyc2VJbnRJbXBsZW1lbnRhdGlvbiB9LCB7XG4gIHBhcnNlSW50OiBwYXJzZUludEltcGxlbWVudGF0aW9uXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=