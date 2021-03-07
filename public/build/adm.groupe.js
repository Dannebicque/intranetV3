(self["webpackChunk"] = self["webpackChunk"] || []).push([["adm.groupe"],{

/***/ "./assets/js/pages/adm.groupe.js":
/*!***************************************!*\
  !*** ./assets/js/pages/adm.groupe.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./assets/js/util.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.groupe.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 01/09/2020 21:31

$(document).on('click', '.change-semestre', function (e) {
  e.preventDefault();
  $('.change-semestre').removeClass('active show');
  $(this).addClass('active show');
  var semestre = $(this).data('semestre');
  $('#liste_semestre').empty().load(Routing.generate('administration_groupe_liste_semestre', {
    semestre: semestre
  }, function () {
    $('#export_csv').attr('href', Routing.generate('administration_groupe_export', {
      semestre: semestre,
      '_format': 'csv'
    }));
    $('#export_xlsx').attr('href', Routing.generate('administration_groupe_export', {
      semestre: semestre,
      '_format': 'xlsx'
    }));
    $('#export_pdf').attr('href', Routing.generate('administration_groupe_export', {
      semestre: semestre,
      '_format': 'pdf'
    }));
  }));
});
$(document).on('change', '.change-parent', function () {
  var semestre = $(this).data('semestre');
  $.ajax({
    url: Routing.generate('administration_groupe_change_parent'),
    data: {
      groupe: $(this).data('groupe'),
      parent: $(this).val()
    },
    method: 'POST',
    success: function success() {
      $('#groupes_semestre').empty().load(Routing.generate('administration_groupe_liste_semestre', {
        semestre: semestre
      }));
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Mise à jour du parent', 'success');
    }
  });
});
$(document).on('change', '.change-typegroupe', function () {
  var semestre = $(this).data('semestre');
  $.ajax({
    url: Routing.generate('administration_groupe_change_typegroupe'),
    data: {
      groupe: $(this).data('groupe'),
      typegroupe: $(this).val()
    },
    method: 'POST',
    success: function success() {
      $('#groupes_semestre').empty().load(Routing.generate('administration_groupe_liste_semestre', {
        semestre: semestre
      }));
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Mise à jour du type de groupe', 'success');
    }
  });
});
$(document).on('change', '.change-parcours', function () {
  var semestre = $(this).data('semestre');
  $.ajax({
    url: Routing.generate('administration_groupe_change_parcours'),
    data: {
      groupe: $(this).data('groupe'),
      parcours: $(this).val()
    },
    method: 'POST',
    success: function success() {
      $('#groupes_semestre').empty().load(Routing.generate('administration_groupe_liste_semestre', {
        semestre: semestre
      }));
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Mise à jour du parcours associé au groupe', 'success');
    }
  });
});
$(document).on('change', '.change-type_typegroupe', function () {
  $.ajax({
    url: Routing.generate('administration_typegroupe_change_type', {
      typeGroupe: $(this).data('typegroupe')
    }),
    data: {
      type: $(this).val()
    },
    method: 'POST',
    success: function success() {
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Mise à jour du type de type de groupe', 'success');
    }
  });
});
$(document).on('click', '.duplicate-groupe', function (e) {
  e.preventDefault();
  var semestre = $(this).data('semestre');
  $.ajax({
    url: Routing.generate('administration_groupe_duplicate', {
      groupe: $(this).data('groupe')
    }),
    method: 'GET',
    success: function success() {
      $('#groupes_semestre').empty().load(Routing.generate('administration_groupe_liste_semestre', {
        semestre: semestre
      }));
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Groupe dupliqué', 'success');
    }
  });
});
$(document).on('click', '.duplicate-type_groupe', function (e) {
  e.preventDefault();
  var semestre = $(this).data('semestre');
  $.ajax({
    url: Routing.generate('administration_type_groupe_duplicate', {
      typegroupe: $(this).data('typegroupe')
    }),
    method: 'GET',
    success: function success() {
      $('#groupes_semestre').empty().load(Routing.generate('administration_groupe_liste_semestre', {
        semestre: semestre
      }));
      $('#type_groupes_semestre').empty().load(Routing.generate('administration_type_groupe_liste_semestre', {
        semestre: semestre
      }));
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Type de groupe dupliqué', 'success');
    }
  });
});
$(document).on('click', '#addGroupe', function (e) {
  e.preventDefault();
  var semestre = $(this).data('semestre');
  var data = new FormData($('#form_groupe')[0]);
  $.ajax({
    url: Routing.generate('administration_groupe_new', {
      semestre: semestre
    }),
    data: data,
    processData: false,
    contentType: false,
    method: 'POST',
    success: function success() {
      $('#groupes_semestre').empty().load(Routing.generate('administration_groupe_liste_semestre', {
        semestre: semestre
      }));
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Mise à jour du parcours associé au groupe', 'success');
    }
  });
});
$(document).on('click', '#addTypeGroupe', function (e) {
  e.preventDefault();
  var semestre = $(this).data('semestre');
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
    success: function success() {
      $('#groupes_semestre').empty().load(Routing.generate('administration_groupe_liste_semestre', {
        semestre: semestre
      }));
      $('#type_groupes_semestre').empty().load(Routing.generate('administration_type_groupe_liste_semestre', {
        semestre: semestre
      }));
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Ajout d\'un type de groupe', 'success');
    }
  });
});
$(document).on('change', '.changeDefaut', function (e) {
  var semestre = $(this).data('semestre');
  e.preventDefault();
  e.stopPropagation();
  $.ajax({
    url: Routing.generate('administration_type_groupe_defaut', {
      semestre: semestre,
      typegroupe: $(this).data('type-groupe')
    }),
    method: 'POST',
    data: {
      defaut: $(this).prop('checked')
    },
    success: function success() {
      $('#type_groupes_semestre').empty().load(Routing.generate('administration_type_groupe_liste_semestre', {
        semestre: semestre
      }));
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Type de groupe par défaut enregistrée', 'success');
    },
    error: function error() {
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Erreur lors de l\'enregistrement', 'danger');
    }
  });
});

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
0,[["./assets/js/pages/adm.groupe.js","runtime","vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_modules_es_string_split_js","vendors-node_modules_core-js_internals_inherit-if-required_js-node_modules_core-js_internals_-f30b81","vendors-node_modules_core-js_modules_es_number_constructor_js-node_modules_core-js_modules_es-13932d"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvYWRtLmdyb3VwZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdXRpbC5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJzZW1lc3RyZSIsImRhdGEiLCJlbXB0eSIsImxvYWQiLCJSb3V0aW5nIiwiZ2VuZXJhdGUiLCJhdHRyIiwiYWpheCIsInVybCIsImdyb3VwZSIsInBhcmVudCIsInZhbCIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJhZGRDYWxsb3V0IiwidHlwZWdyb3VwZSIsInBhcmNvdXJzIiwidHlwZUdyb3VwZSIsInR5cGUiLCJGb3JtRGF0YSIsInByb2Nlc3NEYXRhIiwiY29udGVudFR5cGUiLCJsaWJlbGxlIiwiZGVmYXV0Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJvcCIsImVycm9yIiwiJHN0b3BDYXRjaEVudGVyIiwicmVhZFVybE1lbnUiLCIkdXJsIiwiJGVsdCIsInNwbGl0IiwiJGZpcnN0RWx0IiwibGVuZ3RoIiwicG9wIiwibG9jYXRpb24iLCJTd2FsIiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwiYnV0dG9uc1N0eWxpbmciLCJjc3JmIiwidGl0bGUiLCJ0ZXh0IiwiaWNvbiIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsInRoZW4iLCJyZXN1bHQiLCJ2YWx1ZSIsIl90b2tlbiIsImlkIiwiaGFzT3duUHJvcGVydHkiLCJocmVmIiwiY2xvc2VzdCIsInJlbW92ZSIsInhociIsImFqYXhPcHRpb25zIiwidGhyb3duRXJyb3IiLCJkaXNtaXNzIiwibWVzc2FnZSIsImxhYmVsIiwiY29uc29sZSIsImxvZyIsInRyYW5zbGF0ZSIsIkFycmF5IiwiaHRtbCIsInByZXBlbmQiLCJzbGlkZURvd24iLCJkZWxheSIsInNsaWRlVXAiLCJteUVkaXRJbml0aWFsQ29udGVudCIsIkVkaXRPbkxpbmUiLCJnZW5lcmVUZXh0QXJlYSIsImdlbmVyZUlucHV0IiwicmVwbGFjZVdpdGgiLCJmb2N1cyIsImtleUNvZGUiLCJ1cGRhdGVEYXRhIiwid2hpY2giLCJmaWVsZCIsIiRvYmoiLCJ0cmltIiwialF1ZXJ5IiwiZm4iLCJkYXRhQXR0ciIsIm5hbWUiLCJkZWYiLCJnZXRBdHRyaWJ1dGUiLCJoYXNEYXRhQXR0ciIsImhhc0F0dHJpYnV0ZSIsImRhdGFUb09wdGlvbiIsInJlcGxhY2UiLCJ4IiwidG9VcHBlckNhc2UiLCJnZXREYXRhT3B0aW9ucyIsImVsIiwiY2FzdExpc3QiLCJvcHRpb25zIiwia2V5IiwidW5kZWZpbmVkIiwiQm9vbGVhbiIsIk51bWJlciIsImludmFsaWRDaGFtcHMiLCJ2YWxpZENoYW1wcyIsImNvbXBsZXRlQ2hhbXBzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsRUFBWixDQUFlLE9BQWYsRUFBd0Isa0JBQXhCLEVBQTRDLFVBQVVDLENBQVYsRUFBYTtBQUN2REEsR0FBQyxDQUFDQyxjQUFGO0FBQ0FKLEdBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCSyxXQUF0QixDQUFrQyxhQUFsQztBQUNBTCxHQUFDLENBQUMsSUFBRCxDQUFELENBQVFNLFFBQVIsQ0FBaUIsYUFBakI7QUFDQSxNQUFJQyxRQUFRLEdBQUdQLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVEsSUFBUixDQUFhLFVBQWIsQ0FBZjtBQUVBUixHQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQlMsS0FBckIsR0FBNkJDLElBQTdCLENBQWtDQyxPQUFPLENBQUNDLFFBQVIsQ0FBaUIsc0NBQWpCLEVBQXlEO0FBQUNMLFlBQVEsRUFBRUE7QUFBWCxH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QUFqQixFQUE2QkMsUUFBN0IsQ0FBc0MsWUFBdEM7QUFDRDtBQUVNLFNBQVM0RyxXQUFULENBQXNCdkIsSUFBdEIsRUFBNEI7QUFDakNBLE1BQUksQ0FBQ3RGLFdBQUwsQ0FBaUIsWUFBakIsRUFBK0JDLFFBQS9CLENBQXdDLFVBQXhDO0FBQ0Q7QUFFTSxTQUFTNkcsY0FBVCxDQUF5QnhCLElBQXpCLEVBQStCO0FBQ3BDQSxNQUFJLENBQUN0RixXQUFMLENBQWlCLFlBQWpCLEVBQStCQSxXQUEvQixDQUEyQyxVQUEzQztBQUNELEMiLCJmaWxlIjoiYWRtLmdyb3VwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9wYWdlcy9hZG0uZ3JvdXBlLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMDEvMDkvMjAyMCAyMTozMVxuXG5pbXBvcnQge2FkZENhbGxvdXR9IGZyb20gJy4uL3V0aWwnXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY2hhbmdlLXNlbWVzdHJlJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICQoJy5jaGFuZ2Utc2VtZXN0cmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlIHNob3cnKVxuICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUgc2hvdycpXG4gIGxldCBzZW1lc3RyZSA9ICQodGhpcykuZGF0YSgnc2VtZXN0cmUnKVxuXG4gICQoJyNsaXN0ZV9zZW1lc3RyZScpLmVtcHR5KCkubG9hZChSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9ncm91cGVfbGlzdGVfc2VtZXN0cmUnLCB7c2VtZXN0cmU6IHNlbWVzdHJlfSwgZnVuY3Rpb24gKCkge1xuICAgICAgJCgnI2V4cG9ydF9jc3YnKS5hdHRyKCdocmVmJywgUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fZ3JvdXBlX2V4cG9ydCcsIHtcbiAgICAgICAgc2VtZXN0cmU6IHNlbWVzdHJlLFxuICAgICAgICAnX2Zvcm1hdCc6ICdjc3YnXG4gICAgICB9KSlcbiAgICAgICQoJyNleHBvcnRfeGxzeCcpLmF0dHIoJ2hyZWYnLCBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9ncm91cGVfZXhwb3J0Jywge1xuICAgICAgICBzZW1lc3RyZTogc2VtZXN0cmUsXG4gICAgICAgICdfZm9ybWF0JzogJ3hsc3gnXG4gICAgICB9KSlcbiAgICAgICQoJyNleHBvcnRfcGRmJykuYXR0cignaHJlZicsIFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX2dyb3VwZV9leHBvcnQnLCB7XG4gICAgICAgIHNlbWVzdHJlOiBzZW1lc3RyZSxcbiAgICAgICAgJ19mb3JtYXQnOiAncGRmJ1xuICAgICAgfSkpXG4gICAgfSlcbiAgKVxufSlcblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcuY2hhbmdlLXBhcmVudCcsIGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgc2VtZXN0cmUgPSAkKHRoaXMpLmRhdGEoJ3NlbWVzdHJlJylcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX2dyb3VwZV9jaGFuZ2VfcGFyZW50JyksXG4gICAgZGF0YToge1xuICAgICAgZ3JvdXBlOiAkKHRoaXMpLmRhdGEoJ2dyb3VwZScpLFxuICAgICAgcGFyZW50OiAkKHRoaXMpLnZhbCgpXG4gICAgfSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAkKCcjZ3JvdXBlc19zZW1lc3RyZScpLmVtcHR5KCkubG9hZChSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9ncm91cGVfbGlzdGVfc2VtZXN0cmUnLCB7c2VtZXN0cmU6IHNlbWVzdHJlfSkpXG4gICAgICBhZGRDYWxsb3V0KCdNaXNlIMOgIGpvdXIgZHUgcGFyZW50JywgJ3N1Y2Nlc3MnKVxuICAgIH1cbiAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnLmNoYW5nZS10eXBlZ3JvdXBlJywgZnVuY3Rpb24gKCkge1xuICBjb25zdCBzZW1lc3RyZSA9ICQodGhpcykuZGF0YSgnc2VtZXN0cmUnKVxuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fZ3JvdXBlX2NoYW5nZV90eXBlZ3JvdXBlJyksXG4gICAgZGF0YToge1xuICAgICAgZ3JvdXBlOiAkKHRoaXMpLmRhdGEoJ2dyb3VwZScpLFxuICAgICAgdHlwZWdyb3VwZTogJCh0aGlzKS52YWwoKVxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgJCgnI2dyb3VwZXNfc2VtZXN0cmUnKS5lbXB0eSgpLmxvYWQoUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fZ3JvdXBlX2xpc3RlX3NlbWVzdHJlJywge3NlbWVzdHJlOiBzZW1lc3RyZX0pKVxuICAgICAgYWRkQ2FsbG91dCgnTWlzZSDDoCBqb3VyIGR1IHR5cGUgZGUgZ3JvdXBlJywgJ3N1Y2Nlc3MnKVxuICAgIH1cbiAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnLmNoYW5nZS1wYXJjb3VycycsIGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgc2VtZXN0cmUgPSAkKHRoaXMpLmRhdGEoJ3NlbWVzdHJlJylcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX2dyb3VwZV9jaGFuZ2VfcGFyY291cnMnKSxcbiAgICBkYXRhOiB7XG4gICAgICBncm91cGU6ICQodGhpcykuZGF0YSgnZ3JvdXBlJyksXG4gICAgICBwYXJjb3VyczogJCh0aGlzKS52YWwoKVxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgJCgnI2dyb3VwZXNfc2VtZXN0cmUnKS5lbXB0eSgpLmxvYWQoUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fZ3JvdXBlX2xpc3RlX3NlbWVzdHJlJywge3NlbWVzdHJlOiBzZW1lc3RyZX0pKVxuICAgICAgYWRkQ2FsbG91dCgnTWlzZSDDoCBqb3VyIGR1IHBhcmNvdXJzIGFzc29jacOpIGF1IGdyb3VwZScsICdzdWNjZXNzJylcbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy5jaGFuZ2UtdHlwZV90eXBlZ3JvdXBlJywgZnVuY3Rpb24gKCkge1xuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fdHlwZWdyb3VwZV9jaGFuZ2VfdHlwZScsIHt0eXBlR3JvdXBlOiAkKHRoaXMpLmRhdGEoJ3R5cGVncm91cGUnKX0pLFxuICAgIGRhdGE6IHtcbiAgICAgIHR5cGU6ICQodGhpcykudmFsKClcbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGFkZENhbGxvdXQoJ01pc2Ugw6Agam91ciBkdSB0eXBlIGRlIHR5cGUgZGUgZ3JvdXBlJywgJ3N1Y2Nlc3MnKVxuICAgIH1cbiAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuZHVwbGljYXRlLWdyb3VwZScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBjb25zdCBzZW1lc3RyZSA9ICQodGhpcykuZGF0YSgnc2VtZXN0cmUnKVxuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fZ3JvdXBlX2R1cGxpY2F0ZScsIHtncm91cGU6ICQodGhpcykuZGF0YSgnZ3JvdXBlJyl9KSxcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICQoJyNncm91cGVzX3NlbWVzdHJlJykuZW1wdHkoKS5sb2FkKFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX2dyb3VwZV9saXN0ZV9zZW1lc3RyZScsIHtzZW1lc3RyZTogc2VtZXN0cmV9KSlcbiAgICAgIGFkZENhbGxvdXQoJ0dyb3VwZSBkdXBsaXF1w6knLCAnc3VjY2VzcycpXG4gICAgfVxuICB9KVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5kdXBsaWNhdGUtdHlwZV9ncm91cGUnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgY29uc3Qgc2VtZXN0cmUgPSAkKHRoaXMpLmRhdGEoJ3NlbWVzdHJlJylcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX3R5cGVfZ3JvdXBlX2R1cGxpY2F0ZScsIHt0eXBlZ3JvdXBlOiAkKHRoaXMpLmRhdGEoJ3R5cGVncm91cGUnKX0pLFxuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgJCgnI2dyb3VwZXNfc2VtZXN0cmUnKS5lbXB0eSgpLmxvYWQoUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fZ3JvdXBlX2xpc3RlX3NlbWVzdHJlJywge3NlbWVzdHJlOiBzZW1lc3RyZX0pKVxuICAgICAgJCgnI3R5cGVfZ3JvdXBlc19zZW1lc3RyZScpLmVtcHR5KCkubG9hZChSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl90eXBlX2dyb3VwZV9saXN0ZV9zZW1lc3RyZScsIHtzZW1lc3RyZTogc2VtZXN0cmV9KSlcbiAgICAgIGFkZENhbGxvdXQoJ1R5cGUgZGUgZ3JvdXBlIGR1cGxpcXXDqScsICdzdWNjZXNzJylcbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2FkZEdyb3VwZScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBjb25zdCBzZW1lc3RyZSA9ICQodGhpcykuZGF0YSgnc2VtZXN0cmUnKVxuICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YSgkKCcjZm9ybV9ncm91cGUnKVswXSlcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX2dyb3VwZV9uZXcnLCB7c2VtZXN0cmU6IHNlbWVzdHJlfSksXG4gICAgZGF0YTogZGF0YSxcbiAgICBwcm9jZXNzRGF0YTogZmFsc2UsXG4gICAgY29udGVudFR5cGU6IGZhbHNlLFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICQoJyNncm91cGVzX3NlbWVzdHJlJykuZW1wdHkoKS5sb2FkKFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX2dyb3VwZV9saXN0ZV9zZW1lc3RyZScsIHtzZW1lc3RyZTogc2VtZXN0cmV9KSlcbiAgICAgIGFkZENhbGxvdXQoJ01pc2Ugw6Agam91ciBkdSBwYXJjb3VycyBhc3NvY2nDqSBhdSBncm91cGUnLCAnc3VjY2VzcycpXG4gICAgfVxuICB9KVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNhZGRUeXBlR3JvdXBlJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IHNlbWVzdHJlID0gJCh0aGlzKS5kYXRhKCdzZW1lc3RyZScpXG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl90eXBlX2dyb3VwZV9uZXcnLCB7c2VtZXN0cmU6IHNlbWVzdHJlfSksXG4gICAgZGF0YToge1xuICAgICAgbGliZWxsZTogJCgnI3R5cGVncm91cGVfbGliZWxsZScpLnZhbCgpLFxuICAgICAgdHlwZTogJCgnI3R5cGVncm91cGVfdHlwZScpLnZhbCgpLFxuICAgICAgZGVmYXV0OiAkKCcjdHlwZWdyb3VwZV9kZWZhdXQnKS52YWwoKVxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgJCgnI2dyb3VwZXNfc2VtZXN0cmUnKS5lbXB0eSgpLmxvYWQoUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fZ3JvdXBlX2xpc3RlX3NlbWVzdHJlJywge3NlbWVzdHJlOiBzZW1lc3RyZX0pKVxuICAgICAgJCgnI3R5cGVfZ3JvdXBlc19zZW1lc3RyZScpLmVtcHR5KCkubG9hZChSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl90eXBlX2dyb3VwZV9saXN0ZV9zZW1lc3RyZScsIHtzZW1lc3RyZTogc2VtZXN0cmV9KSlcbiAgICAgIGFkZENhbGxvdXQoJ0Fqb3V0IGRcXCd1biB0eXBlIGRlIGdyb3VwZScsICdzdWNjZXNzJylcblxuICAgIH1cbiAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnLmNoYW5nZURlZmF1dCcsIGZ1bmN0aW9uIChlKSB7XG4gIGNvbnN0IHNlbWVzdHJlID0gJCh0aGlzKS5kYXRhKCdzZW1lc3RyZScpXG4gIGUucHJldmVudERlZmF1bHQoKVxuICBlLnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX3R5cGVfZ3JvdXBlX2RlZmF1dCcsIHtcbiAgICAgIHNlbWVzdHJlOiBzZW1lc3RyZSxcbiAgICAgIHR5cGVncm91cGU6ICQodGhpcykuZGF0YSgndHlwZS1ncm91cGUnKVxuICAgIH0pLFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGRhdGE6IHtcbiAgICAgIGRlZmF1dDogJCh0aGlzKS5wcm9wKCdjaGVja2VkJylcbiAgICB9LFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICQoJyN0eXBlX2dyb3VwZXNfc2VtZXN0cmUnKS5lbXB0eSgpLmxvYWQoUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fdHlwZV9ncm91cGVfbGlzdGVfc2VtZXN0cmUnLCB7c2VtZXN0cmU6IHNlbWVzdHJlfSkpXG4gICAgICBhZGRDYWxsb3V0KCdUeXBlIGRlIGdyb3VwZSBwYXIgZMOpZmF1dCBlbnJlZ2lzdHLDqWUnLCAnc3VjY2VzcycpXG4gICAgfSwgZXJyb3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGFkZENhbGxvdXQoJ0VycmV1ciBsb3JzIGRlIGxcXCdlbnJlZ2lzdHJlbWVudCcsICdkYW5nZXInKVxuICAgIH1cbiAgfSlcblxufSlcblxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3V0aWwuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAwMS8xMi8yMDIwIDIyOjA0XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJ1xuXG5sZXQgJHN0b3BDYXRjaEVudGVyID0gZmFsc2VcblxuZnVuY3Rpb24gcmVhZFVybE1lbnUgKCR1cmwpIHtcbiAgY29uc3QgJGVsdCA9ICR1cmwuc3BsaXQoJy8nKVxuICBsZXQgJGZpcnN0RWx0ID0gMlxuICBpZiAoJGVsdFsxXSA9PT0gJ2luZGV4LnBocCcpIHtcbiAgICBpZiAoJGVsdC5sZW5ndGggPiAxKSB7XG4gICAgICAkZmlyc3RFbHQgPSAzXG4gICAgfVxuICB9XG5cbiAgaWYgKCRlbHRbJGZpcnN0RWx0XSA9PT0gJ3N1cGVyLWFkbWluaXN0cmF0aW9uJykge1xuICAgICRmaXJzdEVsdCA9ICRmaXJzdEVsdCArIDFcbiAgfVxuXG4gIGlmICgkZWx0WyRlbHQubGVuZ3RoIC0gMV0gPT09ICcnKSB7XG4gICAgJGVsdC5wb3AoKVxuICB9XG5cbiAgJCgnLm1lbnUtaXRlbScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAkKCcjbWVudS0nICsgJGVsdFskZmlyc3RFbHRdKS5hZGRDbGFzcygnYWN0aXZlJylcbn1cblxuLy9jb2xvcmlzZSBsZSBib24gbWVudVxucmVhZFVybE1lbnUoJChsb2NhdGlvbikuYXR0cigncGF0aG5hbWUnKSlcblxuU3dhbC5taXhpbih7XG4gIGN1c3RvbUNsYXNzOiB7XG4gICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gIH0sXG4gIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxufSlcbi8vcG9wIHVwIGRlIGNvbmZpcm1hdGlvbiBkZSBzdXBwcmVzc2lvblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5zdXBwcmltZXInLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgY29uc3QgdXJsID0gJCh0aGlzKS5hdHRyKCdocmVmJylcbiAgY29uc3QgY3NyZiA9ICQodGhpcykuZGF0YSgnY3NyZicpXG4gIFN3YWwuZmlyZSh7XG4gICAgdGl0bGU6ICdDb25maXJtZXIgbGEgc3VwcHJlc3Npb24gPycsXG4gICAgdGV4dDogJ0xcXCdvcMOpcmF0aW9uIG5lIHBvdXJyYSBwYXMgw6p0cmUgYW5udWzDqWUuJyxcbiAgICBpY29uOiAnd2FybmluZycsXG4gICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICBjb25maXJtQnV0dG9uQ29sb3I6ICcjMzA4NWQ2JyxcbiAgICBjYW5jZWxCdXR0b25Db2xvcjogJyNkMzMnLFxuICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT3VpLCBqZSBjb25maXJtZScsXG4gICAgY2FuY2VsQnV0dG9uVGV4dDogJ05vbiwgQW5udWxlcicsXG4gICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgfSxcbiAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgaWYgKHJlc3VsdC52YWx1ZSkge1xuICAgICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIHR5cGU6ICdERUxFVEUnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgX3Rva2VuOiBjc3JmXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgIGlmIChpZC5oYXNPd25Qcm9wZXJ0eSgncmVkaXJlY3QnKSAmJiBpZC5oYXNPd25Qcm9wZXJ0eSgndXJsJykpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBpZC51cmxcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy90LnJvdyhcIiNsaWduZV9cIitpZCkucmVtb3ZlKCkuZHJhdygpOyA9PCBkYXRhdHRhYmxlIHRvZG86IHJlbW92ZSBsaWduZSBzaSBkYXRhdGFibGUgPz8gcHJvYmzDqG1lIGRhbnMgYWRtPnBlcnNvbm5lbFxuICAgICAgICAgICAgJCgnI2xpZ25lXycgKyBpZCkuY2xvc2VzdCgndHInKS5yZW1vdmUoKVxuICAgICAgICAgICAgYWRkQ2FsbG91dCgnU3VwcHJlc3Npb24gZWZmZWN0dcOpZSBhdmVjIHN1Y2PDqHMnLCAnc3VjY2VzcycpXG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICB0aXRsZTogJ1N1cHByaW3DqSEnLFxuICAgICAgICAgICAgICB0ZXh0OiAnTFxcJ2VucmVnaXN0cmVtZW50IGEgw6l0w6kgc3VwcHJpbcOpLicsXG4gICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBhamF4T3B0aW9ucywgdGhyb3duRXJyb3IpIHtcbiAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgdGl0bGU6ICdFcnJldXIgbG9ycyBkZSBsYSBzdXBwcmVzc2lvbiEnLFxuICAgICAgICAgICAgdGV4dDogJ01lcmNpIGRlIHJlbm91dmVsZXIgbFxcJ29ww6lyYXRpb24nLFxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgICAgIH0pXG4gICAgICAgICAgYWRkQ2FsbG91dCgnRXJyZXVyIGxvcnMgZGUgbGEgdGVudGF0aXZlIGRlIHN1cHByZXNzaW9uJywgJ2RhbmdlcicpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICB9IGVsc2UgaWYgKFxuICAgICAgLy8gUmVhZCBtb3JlIGFib3V0IGhhbmRsaW5nIGRpc21pc3NhbHNcbiAgICAgIHJlc3VsdC5kaXNtaXNzID09PSAnY2FuY2VsJ1xuICAgICkge1xuICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgdGl0bGU6ICdDYW5jZWxsZWQnLFxuICAgICAgICB0ZXh0OiAnT0shIFRvdXQgZXN0IGNvbW1lIGF2YW50ICEnLFxuICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgfSxcbiAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICB9KVxuICAgIH1cbiAgfSlcbn0pXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDYWxsb3V0IChtZXNzYWdlLCBsYWJlbCkge1xuICBjb25zb2xlLmxvZygnY2FsbG91dCcpXG4gIHZhciB0cmFuc2xhdGUgPSBuZXcgQXJyYXkoKVxuICB0cmFuc2xhdGVbJ3N1Y2Nlc3MnXSA9ICdTdWNjw6hzJ1xuICB0cmFuc2xhdGVbJ2RhbmdlciddID0gJ0VycmV1cidcbiAgdHJhbnNsYXRlWyd3YXJuaW5nJ10gPSAnQXR0ZW50aW9uJ1xuXG4gIGNvbnN0IGh0bWwgPSAnPGRpdiBjbGFzcz1cImNhbGxvdXQgY2FsbG91dC0nICsgbGFiZWwgKyAnXCIgcm9sZT1cImFsZXJ0XCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cImNhbGxvdXRcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JnRpbWVzOzwvc3Bhbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8aDU+JyArIHRyYW5zbGF0ZVtsYWJlbF0gKyAnPC9oNT5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8cD4nICsgbWVzc2FnZSArICc8L3A+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICA8L2Rpdj4nXG5cbiAgJCgnI21haW5Db250ZW50JykucHJlcGVuZChodG1sKS5zbGlkZURvd24oJ3Nsb3cnKVxuICAkKCcuY2FsbG91dCcpLmRlbGF5KDUwMDApLnNsaWRlVXAoJ3Nsb3cnKVxufVxuXG4vL0VkaXRhYmxlXG5sZXQgbXlFZGl0SW5pdGlhbENvbnRlbnQgPSAnJ1xubGV0IHR5cGUgPSAndGV4dCdcbmxldCBFZGl0T25MaW5lID0gZmFsc2VcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5teWVkaXQnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgbXlFZGl0SW5pdGlhbENvbnRlbnQgPSAkKHRoaXMpXG4gIGxldCBodG1sID0gJydcbiAgRWRpdE9uTGluZSA9IHRydWVcbiAgaWYgKHR5cGVvZiAoJCh0aGlzKS5kYXRhKCd0eXBlJykpICE9PSAndW5kZWZpbmVkJykge1xuICAgIHR5cGUgPSAkKHRoaXMpLmRhdGEoJ3R5cGUnKVxuICB9XG5cbiAgaWYgKCQodGhpcykuZGF0YSgndHlwZScpID09PSAnc2VsZWN0Jykge1xuICAgIC8vdG9kbzogQSBmaW5hbGlzZXJcbiAgfSBlbHNlIGlmICgkKHRoaXMpLmRhdGEoJ3R5cGUnKSA9PT0gJ3RleHRhcmVhJykge1xuICAgIGh0bWwgPSBnZW5lcmVUZXh0QXJlYSgkKHRoaXMpKVxuICB9IGVsc2Uge1xuICAgIGh0bWwgPSBnZW5lcmVJbnB1dCgkKHRoaXMpKVxuICB9XG4gICQodGhpcykucmVwbGFjZVdpdGgoaHRtbClcbiAgJCgnI215ZWRpdC1pbnB1dCcpLmZvY3VzKClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdrZXl1cCcsICcjbXllZGl0LWlucHV0JywgZnVuY3Rpb24gKGUpIHtcbiAgaWYgKGUua2V5Q29kZSA9PT0gMTMgJiYgJHN0b3BDYXRjaEVudGVyID09PSBmYWxzZSkge1xuICAgIHVwZGF0ZURhdGEoKVxuICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbiAgfVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNteWVkaXQtdmFsaWRlJywgZnVuY3Rpb24gKGUpIHtcbiAgJHN0b3BDYXRjaEVudGVyID0gZmFsc2VcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIHVwZGF0ZURhdGEoKVxufSlcblxuJChkb2N1bWVudCkub24oJ2tleXByZXNzJywgZnVuY3Rpb24gKGUpIHtcbiAgaWYgKEVkaXRPbkxpbmUgPT09IHRydWUgJiYgJHN0b3BDYXRjaEVudGVyID09PSBmYWxzZSAmJiBlLndoaWNoID09PSAxMykge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHVwZGF0ZURhdGEoKVxuICB9XG5cbiAgaWYgKEVkaXRPbkxpbmUgPT09IHRydWUgJiYgJHN0b3BDYXRjaEVudGVyID09PSBmYWxzZSAmJiBlLndoaWNoID09PSAyNykge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI215ZWRpdC1hbm51bGUnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG59KVxuXG5mdW5jdGlvbiB1cGRhdGVEYXRhICgpIHtcbiAgbGV0IHZhbCA9ICQoJyNteWVkaXQtaW5wdXQnKS52YWwoKVxuICAkLmFqYXgoe1xuICAgIHVybDogbXlFZGl0SW5pdGlhbENvbnRlbnQuYXR0cignaHJlZicpLFxuICAgIGRhdGE6IHtcbiAgICAgIGZpZWxkOiBteUVkaXRJbml0aWFsQ29udGVudC5kYXRhKCdmaWVsZCcpLFxuICAgICAgdmFsdWU6IHZhbCxcbiAgICAgIHR5cGU6IHR5cGVcbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgIG15RWRpdEluaXRpYWxDb250ZW50Lmh0bWwodmFsKVxuICAgICAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG4gICAgICBFZGl0T25MaW5lID0gZmFsc2VcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGdlbmVyZVRleHRBcmVhICgkb2JqKSB7XG4gICRzdG9wQ2F0Y2hFbnRlciA9IHRydWVcbiAgcmV0dXJuICc8ZGl2IGlkPVwibXlFZGl0LXpvbmVcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSByb3dzPVwiNVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJteWVkaXQtaW5wdXRcIj4nICsgJG9iai5odG1sKCkudHJpbSgpICsgJzwvdGV4dGFyZWE+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxcbicgK1xuICAgICcgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzcy1vdXRsaW5lXCIgaWQ9XCJteWVkaXQtdmFsaWRlXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hlY2tcIj48L2k+PC9idXR0b24+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlci1vdXRsaW5lXCIgaWQ9XCJteWVkaXQtYW5udWxlXCI+PGkgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+PC9idXR0b24+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPC9kaXY+J1xufVxuXG5mdW5jdGlvbiBnZW5lcmVJbnB1dCAoJG9iaikge1xuXG4gIHJldHVybiAnPGRpdiBpZD1cIm15RWRpdC16b25lXCIgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIm15ZWRpdC1pbnB1dFwiIHZhbHVlPVwiJyArICRvYmouaHRtbCgpLnRyaW0oKSArICdcIiA+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxcbicgK1xuICAgICcgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzcy1vdXRsaW5lXCIgaWQ9XCJteWVkaXQtdmFsaWRlXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hlY2tcIj48L2k+PC9idXR0b24+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlci1vdXRsaW5lXCIgaWQ9XCJteWVkaXQtYW5udWxlXCI+PGkgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+PC9idXR0b24+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPC9kaXY+J1xufVxuXG5qUXVlcnkuZm4uZGF0YUF0dHIgPSBmdW5jdGlvbiAobmFtZSwgZGVmKSB7XG4gIHJldHVybiAkKHRoaXMpWzBdLmdldEF0dHJpYnV0ZSgnZGF0YS0nICsgbmFtZSkgfHwgZGVmXG59XG5cbmpRdWVyeS5mbi5oYXNEYXRhQXR0ciA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiAkKHRoaXMpWzBdLmhhc0F0dHJpYnV0ZSgnZGF0YS0nICsgbmFtZSlcbn1cblxuZnVuY3Rpb24gZGF0YVRvT3B0aW9uIChuYW1lKSB7XG4gIHJldHVybiBuYW1lLnJlcGxhY2UoLy0oW2Etel0pL2csIGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIHhbMV0udG9VcHBlckNhc2UoKVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YU9wdGlvbnMgKGVsLCBjYXN0TGlzdCkge1xuICB2YXIgb3B0aW9ucyA9IHt9XG4gICQuZWFjaCgkKGVsKS5kYXRhKCksIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG5cbiAgICBrZXkgPSBkYXRhVG9PcHRpb24oa2V5KVxuXG4gICAgLy8gRXNjYXBlIGRhdGEtcHJvdmlkZVxuICAgIGlmIChrZXkgPT0gJ3Byb3ZpZGUnKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoY2FzdExpc3QgIT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgdHlwZSA9IGNhc3RMaXN0W2tleV1cbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdib29sJzpcbiAgICAgICAgICB2YWx1ZSA9IEJvb2xlYW4odmFsdWUpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdudW0nOlxuICAgICAgICAgIHZhbHVlID0gTnVtYmVyKHZhbHVlKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgIHZhbHVlID0gdmFsdWUuc3BsaXQoJywnKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgZGVmYXVsdDpcblxuICAgICAgfVxuICAgIH1cblxuICAgIG9wdGlvbnNba2V5XSA9IHZhbHVlXG4gIH0pXG5cbiAgcmV0dXJuIG9wdGlvbnNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGludmFsaWRDaGFtcHMgKCRvYmopIHtcbiAgJG9iai5yZW1vdmVDbGFzcygnaXMtdmFsaWQnKS5hZGRDbGFzcygnaXMtaW52YWxpZCcpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZENoYW1wcyAoJG9iaikge1xuICAkb2JqLnJlbW92ZUNsYXNzKCdpcy1pbnZhbGlkJykuYWRkQ2xhc3MoJ2lzLXZhbGlkJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBsZXRlQ2hhbXBzICgkb2JqKSB7XG4gICRvYmoucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKS5yZW1vdmVDbGFzcygnaXMtdmFsaWQnKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==