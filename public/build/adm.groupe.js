(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adm.groupe"],{

/***/ "./assets/js/pages/adm.groupe.js":
/*!***************************************!*\
  !*** ./assets/js/pages/adm.groupe.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./assets/js/util.js");
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
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCallout"])('Mise à jour du parent', 'success');
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
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCallout"])('Mise à jour du type de groupe', 'success');
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
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCallout"])('Mise à jour du parcours associé au groupe', 'success');
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
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCallout"])('Mise à jour du type de type de groupe', 'success');
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
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCallout"])('Groupe dupliqué', 'success');
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
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCallout"])('Type de groupe dupliqué', 'success');
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
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCallout"])('Mise à jour du parcours associé au groupe', 'success');
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
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCallout"])('Ajout d\'un type de groupe', 'success');
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
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCallout"])('Type de groupe par défaut enregistrée', 'success');
    },
    error: function error() {
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCallout"])('Erreur lors de l\'enregistrement', 'danger');
    }
  });
});
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

/***/ })

},[["./assets/js/pages/adm.groupe.js","runtime","vendors~absences~adm.absences~adm.alternances~adm.articles~adm.bornes~adm.configuration~adm.edt~adm.~d677a9f6","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~6af3b135","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~3a8cbb67","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~7452d955","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.groupe~adm.justificat~0d230585"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvYWRtLmdyb3VwZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdXRpbC5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJzZW1lc3RyZSIsImRhdGEiLCJlbXB0eSIsImxvYWQiLCJSb3V0aW5nIiwiZ2VuZXJhdGUiLCJhdHRyIiwiYWpheCIsInVybCIsImdyb3VwZSIsInBhcmVudCIsInZhbCIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJhZGRDYWxsb3V0IiwidHlwZWdyb3VwZSIsInBhcmNvdXJzIiwidHlwZUdyb3VwZSIsInR5cGUiLCJGb3JtRGF0YSIsInByb2Nlc3NEYXRhIiwiY29udGVudFR5cGUiLCJsaWJlbGxlIiwiZGVmYXV0Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJvcCIsImVycm9yIiwiJHN0b3BDYXRjaEVudGVyIiwicmVhZFVybE1lbnUiLCIkdXJsIiwiJGVsdCIsInNwbGl0IiwiJGZpcnN0RWx0IiwibGVuZ3RoIiwicG9wIiwibG9jYXRpb24iLCJTd2FsIiwibWl4aW4iLCJjdXN0b21DbGFzcyIsImNvbmZpcm1CdXR0b24iLCJjYW5jZWxCdXR0b24iLCJidXR0b25zU3R5bGluZyIsImNzcmYiLCJmaXJlIiwidGl0bGUiLCJ0ZXh0IiwiaWNvbiIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsInRoZW4iLCJyZXN1bHQiLCJ2YWx1ZSIsIl90b2tlbiIsImlkIiwiaGFzT3duUHJvcGVydHkiLCJocmVmIiwiY2xvc2VzdCIsInJlbW92ZSIsInhociIsImFqYXhPcHRpb25zIiwidGhyb3duRXJyb3IiLCJkaXNtaXNzIiwibWVzc2FnZSIsImxhYmVsIiwiY29uc29sZSIsImxvZyIsInRyYW5zbGF0ZSIsIkFycmF5IiwiaHRtbCIsInByZXBlbmQiLCJzbGlkZURvd24iLCJkZWxheSIsInNsaWRlVXAiLCJteUVkaXRJbml0aWFsQ29udGVudCIsIkVkaXRPbkxpbmUiLCJnZW5lcmVUZXh0QXJlYSIsImdlbmVyZUlucHV0IiwicmVwbGFjZVdpdGgiLCJmb2N1cyIsImtleUNvZGUiLCJ1cGRhdGVEYXRhIiwid2hpY2giLCJmaWVsZCIsIiRvYmoiLCJ0cmltIiwialF1ZXJ5IiwiZm4iLCJkYXRhQXR0ciIsIm5hbWUiLCJkZWYiLCJnZXRBdHRyaWJ1dGUiLCJoYXNEYXRhQXR0ciIsImhhc0F0dHJpYnV0ZSIsImRhdGFUb09wdGlvbiIsInJlcGxhY2UiLCJ4IiwidG9VcHBlckNhc2UiLCJnZXREYXRhT3B0aW9ucyIsImVsIiwiY2FzdExpc3QiLCJvcHRpb25zIiwiZWFjaCIsImtleSIsInVuZGVmaW5lZCIsIkJvb2xlYW4iLCJOdW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUFBLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEVBQVosQ0FBZSxPQUFmLEVBQXdCLGtCQUF4QixFQUE0QyxVQUFVQyxDQUFWLEVBQWE7QUFDdkRBLEdBQUMsQ0FBQ0MsY0FBRjtBQUNBSixHQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQkssV0FBdEIsQ0FBa0MsYUFBbEM7QUFDQUwsR0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRTSxRQUFSLENBQWlCLGFBQWpCO0FBQ0EsTUFBSUMsUUFBUSxHQUFHUCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFRLElBQVIsQ0FBYSxVQUFiLENBQWY7QUFFQVIsR0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJTLEtBQXJCLEdBQTZCQyxJQUE3QixDQUFrQ0MsT0FBTyxDQUFDQyxRQUFSLENBQWlCLHNDQUFqQixFQUF5RDtBQUFDTCxZQUFRLEVBQUVBO0FBQVgsR0FBekQsRUFBK0UsWUFBWTtB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RCxDIiwiZmlsZSI6ImFkbS5ncm91cGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvcGFnZXMvYWRtLmdyb3VwZS5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDAxLzA5LzIwMjAgMjE6MzFcblxuaW1wb3J0IHthZGRDYWxsb3V0fSBmcm9tICcuLi91dGlsJ1xuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNoYW5nZS1zZW1lc3RyZScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICAkKCcuY2hhbmdlLXNlbWVzdHJlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZSBzaG93JylcbiAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlIHNob3cnKVxuICBsZXQgc2VtZXN0cmUgPSAkKHRoaXMpLmRhdGEoJ3NlbWVzdHJlJylcblxuICAkKCcjbGlzdGVfc2VtZXN0cmUnKS5lbXB0eSgpLmxvYWQoUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fZ3JvdXBlX2xpc3RlX3NlbWVzdHJlJywge3NlbWVzdHJlOiBzZW1lc3RyZX0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICQoJyNleHBvcnRfY3N2JykuYXR0cignaHJlZicsIFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX2dyb3VwZV9leHBvcnQnLCB7XG4gICAgICAgIHNlbWVzdHJlOiBzZW1lc3RyZSxcbiAgICAgICAgJ19mb3JtYXQnOiAnY3N2J1xuICAgICAgfSkpXG4gICAgICAkKCcjZXhwb3J0X3hsc3gnKS5hdHRyKCdocmVmJywgUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fZ3JvdXBlX2V4cG9ydCcsIHtcbiAgICAgICAgc2VtZXN0cmU6IHNlbWVzdHJlLFxuICAgICAgICAnX2Zvcm1hdCc6ICd4bHN4J1xuICAgICAgfSkpXG4gICAgICAkKCcjZXhwb3J0X3BkZicpLmF0dHIoJ2hyZWYnLCBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9ncm91cGVfZXhwb3J0Jywge1xuICAgICAgICBzZW1lc3RyZTogc2VtZXN0cmUsXG4gICAgICAgICdfZm9ybWF0JzogJ3BkZidcbiAgICAgIH0pKVxuICAgIH0pXG4gIClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnLmNoYW5nZS1wYXJlbnQnLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHNlbWVzdHJlID0gJCh0aGlzKS5kYXRhKCdzZW1lc3RyZScpXG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9ncm91cGVfY2hhbmdlX3BhcmVudCcpLFxuICAgIGRhdGE6IHtcbiAgICAgIGdyb3VwZTogJCh0aGlzKS5kYXRhKCdncm91cGUnKSxcbiAgICAgIHBhcmVudDogJCh0aGlzKS52YWwoKVxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgJCgnI2dyb3VwZXNfc2VtZXN0cmUnKS5lbXB0eSgpLmxvYWQoUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fZ3JvdXBlX2xpc3RlX3NlbWVzdHJlJywge3NlbWVzdHJlOiBzZW1lc3RyZX0pKVxuICAgICAgYWRkQ2FsbG91dCgnTWlzZSDDoCBqb3VyIGR1IHBhcmVudCcsICdzdWNjZXNzJylcbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy5jaGFuZ2UtdHlwZWdyb3VwZScsIGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgc2VtZXN0cmUgPSAkKHRoaXMpLmRhdGEoJ3NlbWVzdHJlJylcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX2dyb3VwZV9jaGFuZ2VfdHlwZWdyb3VwZScpLFxuICAgIGRhdGE6IHtcbiAgICAgIGdyb3VwZTogJCh0aGlzKS5kYXRhKCdncm91cGUnKSxcbiAgICAgIHR5cGVncm91cGU6ICQodGhpcykudmFsKClcbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICQoJyNncm91cGVzX3NlbWVzdHJlJykuZW1wdHkoKS5sb2FkKFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX2dyb3VwZV9saXN0ZV9zZW1lc3RyZScsIHtzZW1lc3RyZTogc2VtZXN0cmV9KSlcbiAgICAgIGFkZENhbGxvdXQoJ01pc2Ugw6Agam91ciBkdSB0eXBlIGRlIGdyb3VwZScsICdzdWNjZXNzJylcbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy5jaGFuZ2UtcGFyY291cnMnLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHNlbWVzdHJlID0gJCh0aGlzKS5kYXRhKCdzZW1lc3RyZScpXG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9ncm91cGVfY2hhbmdlX3BhcmNvdXJzJyksXG4gICAgZGF0YToge1xuICAgICAgZ3JvdXBlOiAkKHRoaXMpLmRhdGEoJ2dyb3VwZScpLFxuICAgICAgcGFyY291cnM6ICQodGhpcykudmFsKClcbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICQoJyNncm91cGVzX3NlbWVzdHJlJykuZW1wdHkoKS5sb2FkKFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX2dyb3VwZV9saXN0ZV9zZW1lc3RyZScsIHtzZW1lc3RyZTogc2VtZXN0cmV9KSlcbiAgICAgIGFkZENhbGxvdXQoJ01pc2Ugw6Agam91ciBkdSBwYXJjb3VycyBhc3NvY2nDqSBhdSBncm91cGUnLCAnc3VjY2VzcycpXG4gICAgfVxuICB9KVxufSlcblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcuY2hhbmdlLXR5cGVfdHlwZWdyb3VwZScsIGZ1bmN0aW9uICgpIHtcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX3R5cGVncm91cGVfY2hhbmdlX3R5cGUnLCB7dHlwZUdyb3VwZTogJCh0aGlzKS5kYXRhKCd0eXBlZ3JvdXBlJyl9KSxcbiAgICBkYXRhOiB7XG4gICAgICB0eXBlOiAkKHRoaXMpLnZhbCgpXG4gICAgfSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICBhZGRDYWxsb3V0KCdNaXNlIMOgIGpvdXIgZHUgdHlwZSBkZSB0eXBlIGRlIGdyb3VwZScsICdzdWNjZXNzJylcbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmR1cGxpY2F0ZS1ncm91cGUnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgY29uc3Qgc2VtZXN0cmUgPSAkKHRoaXMpLmRhdGEoJ3NlbWVzdHJlJylcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX2dyb3VwZV9kdXBsaWNhdGUnLCB7Z3JvdXBlOiAkKHRoaXMpLmRhdGEoJ2dyb3VwZScpfSksXG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAkKCcjZ3JvdXBlc19zZW1lc3RyZScpLmVtcHR5KCkubG9hZChSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9ncm91cGVfbGlzdGVfc2VtZXN0cmUnLCB7c2VtZXN0cmU6IHNlbWVzdHJlfSkpXG4gICAgICBhZGRDYWxsb3V0KCdHcm91cGUgZHVwbGlxdcOpJywgJ3N1Y2Nlc3MnKVxuICAgIH1cbiAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuZHVwbGljYXRlLXR5cGVfZ3JvdXBlJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IHNlbWVzdHJlID0gJCh0aGlzKS5kYXRhKCdzZW1lc3RyZScpXG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl90eXBlX2dyb3VwZV9kdXBsaWNhdGUnLCB7dHlwZWdyb3VwZTogJCh0aGlzKS5kYXRhKCd0eXBlZ3JvdXBlJyl9KSxcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICQoJyNncm91cGVzX3NlbWVzdHJlJykuZW1wdHkoKS5sb2FkKFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX2dyb3VwZV9saXN0ZV9zZW1lc3RyZScsIHtzZW1lc3RyZTogc2VtZXN0cmV9KSlcbiAgICAgICQoJyN0eXBlX2dyb3VwZXNfc2VtZXN0cmUnKS5lbXB0eSgpLmxvYWQoUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fdHlwZV9ncm91cGVfbGlzdGVfc2VtZXN0cmUnLCB7c2VtZXN0cmU6IHNlbWVzdHJlfSkpXG4gICAgICBhZGRDYWxsb3V0KCdUeXBlIGRlIGdyb3VwZSBkdXBsaXF1w6knLCAnc3VjY2VzcycpXG4gICAgfVxuICB9KVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNhZGRHcm91cGUnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgY29uc3Qgc2VtZXN0cmUgPSAkKHRoaXMpLmRhdGEoJ3NlbWVzdHJlJylcbiAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoJCgnI2Zvcm1fZ3JvdXBlJylbMF0pXG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9ncm91cGVfbmV3Jywge3NlbWVzdHJlOiBzZW1lc3RyZX0pLFxuICAgIGRhdGE6IGRhdGEsXG4gICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxuICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAkKCcjZ3JvdXBlc19zZW1lc3RyZScpLmVtcHR5KCkubG9hZChSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9ncm91cGVfbGlzdGVfc2VtZXN0cmUnLCB7c2VtZXN0cmU6IHNlbWVzdHJlfSkpXG4gICAgICBhZGRDYWxsb3V0KCdNaXNlIMOgIGpvdXIgZHUgcGFyY291cnMgYXNzb2Npw6kgYXUgZ3JvdXBlJywgJ3N1Y2Nlc3MnKVxuICAgIH1cbiAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjYWRkVHlwZUdyb3VwZScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBjb25zdCBzZW1lc3RyZSA9ICQodGhpcykuZGF0YSgnc2VtZXN0cmUnKVxuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fdHlwZV9ncm91cGVfbmV3Jywge3NlbWVzdHJlOiBzZW1lc3RyZX0pLFxuICAgIGRhdGE6IHtcbiAgICAgIGxpYmVsbGU6ICQoJyN0eXBlZ3JvdXBlX2xpYmVsbGUnKS52YWwoKSxcbiAgICAgIHR5cGU6ICQoJyN0eXBlZ3JvdXBlX3R5cGUnKS52YWwoKSxcbiAgICAgIGRlZmF1dDogJCgnI3R5cGVncm91cGVfZGVmYXV0JykudmFsKClcbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICQoJyNncm91cGVzX3NlbWVzdHJlJykuZW1wdHkoKS5sb2FkKFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX2dyb3VwZV9saXN0ZV9zZW1lc3RyZScsIHtzZW1lc3RyZTogc2VtZXN0cmV9KSlcbiAgICAgICQoJyN0eXBlX2dyb3VwZXNfc2VtZXN0cmUnKS5lbXB0eSgpLmxvYWQoUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fdHlwZV9ncm91cGVfbGlzdGVfc2VtZXN0cmUnLCB7c2VtZXN0cmU6IHNlbWVzdHJlfSkpXG4gICAgICBhZGRDYWxsb3V0KCdBam91dCBkXFwndW4gdHlwZSBkZSBncm91cGUnLCAnc3VjY2VzcycpXG5cbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy5jaGFuZ2VEZWZhdXQnLCBmdW5jdGlvbiAoZSkge1xuICBjb25zdCBzZW1lc3RyZSA9ICQodGhpcykuZGF0YSgnc2VtZXN0cmUnKVxuICBlLnByZXZlbnREZWZhdWx0KClcbiAgZS5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl90eXBlX2dyb3VwZV9kZWZhdXQnLCB7XG4gICAgICBzZW1lc3RyZTogc2VtZXN0cmUsXG4gICAgICB0eXBlZ3JvdXBlOiAkKHRoaXMpLmRhdGEoJ3R5cGUtZ3JvdXBlJylcbiAgICB9KSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBkYXRhOiB7XG4gICAgICBkZWZhdXQ6ICQodGhpcykucHJvcCgnY2hlY2tlZCcpXG4gICAgfSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAkKCcjdHlwZV9ncm91cGVzX3NlbWVzdHJlJykuZW1wdHkoKS5sb2FkKFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX3R5cGVfZ3JvdXBlX2xpc3RlX3NlbWVzdHJlJywge3NlbWVzdHJlOiBzZW1lc3RyZX0pKVxuICAgICAgYWRkQ2FsbG91dCgnVHlwZSBkZSBncm91cGUgcGFyIGTDqWZhdXQgZW5yZWdpc3Ryw6llJywgJ3N1Y2Nlc3MnKVxuICAgIH0sIGVycm9yOiBmdW5jdGlvbiAoKSB7XG4gICAgICBhZGRDYWxsb3V0KCdFcnJldXIgbG9ycyBkZSBsXFwnZW5yZWdpc3RyZW1lbnQnLCAnZGFuZ2VyJylcbiAgICB9XG4gIH0pXG5cbn0pXG5cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy91dGlsLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMTYvMTAvMjAyMCAxNDo1NFxuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0MidcblxubGV0ICRzdG9wQ2F0Y2hFbnRlciA9IGZhbHNlXG5cbmZ1bmN0aW9uIHJlYWRVcmxNZW51ICgkdXJsKSB7XG4gIGNvbnN0ICRlbHQgPSAkdXJsLnNwbGl0KCcvJylcbiAgbGV0ICRmaXJzdEVsdCA9IDJcbiAgaWYgKCRlbHRbMV0gPT09ICdpbmRleC5waHAnKSB7XG4gICAgaWYgKCRlbHQubGVuZ3RoID4gMSkge1xuICAgICAgJGZpcnN0RWx0ID0gM1xuICAgIH1cbiAgfVxuXG4gIGlmICgkZWx0WyRmaXJzdEVsdF0gPT09ICdzdXBlci1hZG1pbmlzdHJhdGlvbicpIHtcbiAgICAkZmlyc3RFbHQgPSAkZmlyc3RFbHQgKyAxXG4gIH1cblxuICBpZiAoJGVsdFskZWx0Lmxlbmd0aCAtIDFdID09PSAnJykge1xuICAgICRlbHQucG9wKClcbiAgfVxuXG4gICQoJy5tZW51LWl0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgJCgnI21lbnUtJyArICRlbHRbJGZpcnN0RWx0XSkuYWRkQ2xhc3MoJ2FjdGl2ZScpXG59XG5cbi8vY29sb3Jpc2UgbGUgYm9uIG1lbnVcbnJlYWRVcmxNZW51KCQobG9jYXRpb24pLmF0dHIoJ3BhdGhuYW1lJykpXG5cblN3YWwubWl4aW4oe1xuICBjdXN0b21DbGFzczoge1xuICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICB9LFxuICBidXR0b25zU3R5bGluZzogZmFsc2Vcbn0pXG4vL3BvcCB1cCBkZSBjb25maXJtYXRpb24gZGUgc3VwcHJlc3Npb25cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuc3VwcHJpbWVyJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IHVybCA9ICQodGhpcykuYXR0cignaHJlZicpXG4gIGNvbnN0IGNzcmYgPSAkKHRoaXMpLmRhdGEoJ2NzcmYnKVxuICBTd2FsLmZpcmUoe1xuICAgIHRpdGxlOiAnQ29uZmlybWVyIGxhIHN1cHByZXNzaW9uID8nLFxuICAgIHRleHQ6ICdMXFwnb3DDqXJhdGlvbiBuZSBwb3VycmEgcGFzIMOqdHJlIGFubnVsw6llLicsXG4gICAgaWNvbjogJ3dhcm5pbmcnLFxuICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgY29uZmlybUJ1dHRvbkNvbG9yOiAnIzMwODVkNicsXG4gICAgY2FuY2VsQnV0dG9uQ29sb3I6ICcjZDMzJyxcbiAgICBjb25maXJtQnV0dG9uVGV4dDogJ091aSwgamUgY29uZmlybWUnLFxuICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdOb24sIEFubnVsZXInLFxuICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgIH0sXG4gICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICAgICQuYWpheCh7XG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICB0eXBlOiAnREVMRVRFJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIF90b2tlbjogY3NyZlxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICBpZiAoaWQuaGFzT3duUHJvcGVydHkoJ3JlZGlyZWN0JykgJiYgaWQuaGFzT3duUHJvcGVydHkoJ3VybCcpKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gaWQudXJsXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vdC5yb3coXCIjbGlnbmVfXCIraWQpLnJlbW92ZSgpLmRyYXcoKTsgPTwgZGF0YXR0YWJsZSB0b2RvOiByZW1vdmUgbGlnbmUgc2kgZGF0YXRhYmxlID8/IHByb2Jsw6htZSBkYW5zIGFkbT5wZXJzb25uZWxcbiAgICAgICAgICAgICQoJyNsaWduZV8nICsgaWQpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKClcbiAgICAgICAgICAgIGFkZENhbGxvdXQoJ1N1cHByZXNzaW9uIGVmZmVjdHXDqWUgYXZlYyBzdWNjw6hzJywgJ3N1Y2Nlc3MnKVxuICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdTdXBwcmltw6khJyxcbiAgICAgICAgICAgICAgdGV4dDogJ0xcXCdlbnJlZ2lzdHJlbWVudCBhIMOpdMOpIHN1cHByaW3DqS4nLFxuICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgYWpheE9wdGlvbnMsIHRocm93bkVycm9yKSB7XG4gICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgIHRpdGxlOiAnRXJyZXVyIGxvcnMgZGUgbGEgc3VwcHJlc3Npb24hJyxcbiAgICAgICAgICAgIHRleHQ6ICdNZXJjaSBkZSByZW5vdXZlbGVyIGxcXCdvcMOpcmF0aW9uJyxcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgICAgICB9KVxuICAgICAgICAgIGFkZENhbGxvdXQoJ0VycmV1ciBsb3JzIGRlIGxhIHRlbnRhdGl2ZSBkZSBzdXBwcmVzc2lvbicsICdkYW5nZXInKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgfSBlbHNlIGlmIChcbiAgICAgIC8vIFJlYWQgbW9yZSBhYm91dCBoYW5kbGluZyBkaXNtaXNzYWxzXG4gICAgICByZXN1bHQuZGlzbWlzcyA9PT0gJ2NhbmNlbCdcbiAgICApIHtcbiAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgIHRpdGxlOiAnQ2FuY2VsbGVkJyxcbiAgICAgICAgdGV4dDogJ09LISBUb3V0IGVzdCBjb21tZSBhdmFudCAhJyxcbiAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgIH0sXG4gICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG59KVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2FsbG91dCAobWVzc2FnZSwgbGFiZWwpIHtcbiAgY29uc29sZS5sb2coJ2NhbGxvdXQnKVxuICB2YXIgdHJhbnNsYXRlID0gbmV3IEFycmF5KClcbiAgdHJhbnNsYXRlWydzdWNjZXNzJ10gPSAnU3VjY8OocydcbiAgdHJhbnNsYXRlWydkYW5nZXInXSA9ICdFcnJldXInXG4gIHRyYW5zbGF0ZVsnd2FybmluZyddID0gJ0F0dGVudGlvbidcblxuICBjb25zdCBodG1sID0gJzxkaXYgY2xhc3M9XCJjYWxsb3V0IGNhbGxvdXQtJyArIGxhYmVsICsgJ1wiIHJvbGU9XCJhbGVydFwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJjYWxsb3V0XCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiZ0aW1lczs8L3NwYW4+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPGg1PicgKyB0cmFuc2xhdGVbbGFiZWxdICsgJzwvaDU+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPHA+JyArIG1lc3NhZ2UgKyAnPC9wPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgPC9kaXY+J1xuXG4gICQoJyNtYWluQ29udGVudCcpLnByZXBlbmQoaHRtbCkuc2xpZGVEb3duKCdzbG93JylcbiAgJCgnLmNhbGxvdXQnKS5kZWxheSg1MDAwKS5zbGlkZVVwKCdzbG93Jylcbn1cblxuLy9FZGl0YWJsZVxubGV0IG15RWRpdEluaXRpYWxDb250ZW50ID0gJydcbmxldCB0eXBlID0gJ3RleHQnXG5sZXQgRWRpdE9uTGluZSA9IGZhbHNlXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubXllZGl0JywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIG15RWRpdEluaXRpYWxDb250ZW50ID0gJCh0aGlzKVxuICBsZXQgaHRtbCA9ICcnXG4gIEVkaXRPbkxpbmUgPSB0cnVlXG4gIGlmICh0eXBlb2YgKCQodGhpcykuZGF0YSgndHlwZScpKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0eXBlID0gJCh0aGlzKS5kYXRhKCd0eXBlJylcbiAgfVxuXG4gIGlmICgkKHRoaXMpLmRhdGEoJ3R5cGUnKSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAvL3RvZG86IEEgZmluYWxpc2VyXG4gIH0gZWxzZSBpZiAoJCh0aGlzKS5kYXRhKCd0eXBlJykgPT09ICd0ZXh0YXJlYScpIHtcbiAgICBodG1sID0gZ2VuZXJlVGV4dEFyZWEoJCh0aGlzKSlcbiAgfSBlbHNlIHtcbiAgICBodG1sID0gZ2VuZXJlSW5wdXQoJCh0aGlzKSlcbiAgfVxuICAkKHRoaXMpLnJlcGxhY2VXaXRoKGh0bWwpXG4gICQoJyNteWVkaXQtaW5wdXQnKS5mb2N1cygpXG59KVxuXG4kKGRvY3VtZW50KS5vbigna2V5dXAnLCAnI215ZWRpdC1pbnB1dCcsIGZ1bmN0aW9uIChlKSB7XG4gIGlmIChlLmtleUNvZGUgPT09IDEzICYmICRzdG9wQ2F0Y2hFbnRlciA9PT0gZmFsc2UpIHtcbiAgICB1cGRhdGVEYXRhKClcbiAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XG4gICAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG4gIH1cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbXllZGl0LXZhbGlkZScsIGZ1bmN0aW9uIChlKSB7XG4gICRzdG9wQ2F0Y2hFbnRlciA9IGZhbHNlXG4gIGUucHJldmVudERlZmF1bHQoKVxuICB1cGRhdGVEYXRhKClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdrZXlwcmVzcycsIGZ1bmN0aW9uIChlKSB7XG4gIGlmIChFZGl0T25MaW5lID09PSB0cnVlICYmICRzdG9wQ2F0Y2hFbnRlciA9PT0gZmFsc2UgJiYgZS53aGljaCA9PT0gMTMpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB1cGRhdGVEYXRhKClcbiAgfVxuXG4gIGlmIChFZGl0T25MaW5lID09PSB0cnVlICYmICRzdG9wQ2F0Y2hFbnRlciA9PT0gZmFsc2UgJiYgZS53aGljaCA9PT0gMjcpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbiAgfVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNteWVkaXQtYW5udWxlJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxufSlcblxuZnVuY3Rpb24gdXBkYXRlRGF0YSAoKSB7XG4gIGxldCB2YWwgPSAkKCcjbXllZGl0LWlucHV0JykudmFsKClcbiAgJC5hamF4KHtcbiAgICB1cmw6IG15RWRpdEluaXRpYWxDb250ZW50LmF0dHIoJ2hyZWYnKSxcbiAgICBkYXRhOiB7XG4gICAgICBmaWVsZDogbXlFZGl0SW5pdGlhbENvbnRlbnQuZGF0YSgnZmllbGQnKSxcbiAgICAgIHZhbHVlOiB2YWwsXG4gICAgICB0eXBlOiB0eXBlXG4gICAgfSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICBteUVkaXRJbml0aWFsQ29udGVudC5odG1sKHZhbClcbiAgICAgICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxuICAgICAgRWRpdE9uTGluZSA9IGZhbHNlXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBnZW5lcmVUZXh0QXJlYSAoJG9iaikge1xuICAkc3RvcENhdGNoRW50ZXIgPSB0cnVlXG4gIHJldHVybiAnPGRpdiBpZD1cIm15RWRpdC16b25lXCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgcm93cz1cIjVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwibXllZGl0LWlucHV0XCI+JyArICRvYmouaHRtbCgpLnRyaW0oKSArICc8L3RleHRhcmVhPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cXG4nICtcbiAgICAnIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3Mtb3V0bGluZVwiIGlkPVwibXllZGl0LXZhbGlkZVwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZWNrXCI+PC9pPjwvYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXItb3V0bGluZVwiIGlkPVwibXllZGl0LWFubnVsZVwiPjxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPjwvYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDwvZGl2Pidcbn1cblxuZnVuY3Rpb24gZ2VuZXJlSW5wdXQgKCRvYmopIHtcblxuICByZXR1cm4gJzxkaXYgaWQ9XCJteUVkaXQtem9uZVwiIGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJteWVkaXQtaW5wdXRcIiB2YWx1ZT1cIicgKyAkb2JqLmh0bWwoKS50cmltKCkgKyAnXCIgPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cXG4nICtcbiAgICAnIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3Mtb3V0bGluZVwiIGlkPVwibXllZGl0LXZhbGlkZVwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZWNrXCI+PC9pPjwvYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXItb3V0bGluZVwiIGlkPVwibXllZGl0LWFubnVsZVwiPjxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPjwvYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDwvZGl2Pidcbn1cblxualF1ZXJ5LmZuLmRhdGFBdHRyID0gZnVuY3Rpb24gKG5hbWUsIGRlZikge1xuICByZXR1cm4gJCh0aGlzKVswXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtJyArIG5hbWUpIHx8IGRlZlxufVxuXG5qUXVlcnkuZm4uaGFzRGF0YUF0dHIgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gJCh0aGlzKVswXS5oYXNBdHRyaWJ1dGUoJ2RhdGEtJyArIG5hbWUpXG59XG5cbmZ1bmN0aW9uIGRhdGFUb09wdGlvbiAobmFtZSkge1xuICByZXR1cm4gbmFtZS5yZXBsYWNlKC8tKFthLXpdKS9nLCBmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiB4WzFdLnRvVXBwZXJDYXNlKClcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGFPcHRpb25zIChlbCwgY2FzdExpc3QpIHtcbiAgdmFyIG9wdGlvbnMgPSB7fVxuICAkLmVhY2goJChlbCkuZGF0YSgpLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuXG4gICAga2V5ID0gZGF0YVRvT3B0aW9uKGtleSlcblxuICAgIC8vIEVzY2FwZSBkYXRhLXByb3ZpZGVcbiAgICBpZiAoa2V5ID09ICdwcm92aWRlJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGNhc3RMaXN0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHR5cGUgPSBjYXN0TGlzdFtrZXldXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYm9vbCc6XG4gICAgICAgICAgdmFsdWUgPSBCb29sZWFuKHZhbHVlKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAnbnVtJzpcbiAgICAgICAgICB2YWx1ZSA9IE51bWJlcih2YWx1ZSlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnNwbGl0KCcsJylcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGRlZmF1bHQ6XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBvcHRpb25zW2tleV0gPSB2YWx1ZVxuICB9KVxuXG4gIHJldHVybiBvcHRpb25zXG59XG4iXSwic291cmNlUm9vdCI6IiJ9