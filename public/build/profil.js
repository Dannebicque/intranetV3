(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profil"],{

/***/ "./assets/js/pages/profil.js":
/*!***********************************!*\
  !*** ./assets/js/pages/profil.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./assets/js/util.js");
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/profil.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 07/12/2020 19:19

$(document).on('change', '#chgt_etudiant_departement', function () {
  $.ajax({
    url: Routing.generate('user_change_departement', {
      etudiant: $(this).data('etudiant'),
      departement: $(this).val()
    }),
    method: 'POST',
    success: function success(e) {
      $('#liste_groupes').empty().append('<tr><td colspan="3">Aucun groupe</td></tr>');
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCallout"])('Mofification enregistrée !', 'success');
    },
    error: function error(e) {
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCallout"])('Erreur lors de la sauvegarde de la modification !', 'danger');
    }
  });
});
$(document).on('change', '#chgt_etudiant_fin', function () {
  $.ajax({
    url: Routing.generate('user_change_annee_sortie', {
      etudiant: $(this).data('etudiant'),
      annee: $(this).val()
    }),
    method: 'POST',
    success: function success(e) {
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCallout"])('Mofification enregistrée !', 'success');
    },
    error: function error(e) {
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCallout"])('Erreur lors de la sauvegarde de la modification !', 'danger');
    }
  });
});
$(document).on('click', '.changeprofil', function (e) {
  e.preventDefault();
  e.stopPropagation();
  var $onglet = $(this);
  $('.changeprofil').removeClass('active show');
  $(this).addClass('active show');
  $('#profilContent').empty().load($(this).attr('href'), function () {
    if ($onglet.attr('id') === 'profil-notes') {// console.log('graph')
      // const graph = $('#chart-radar')
      // $.get(Routing.generate('profil_etudiant_ajax_notes_graph', {slug: $(graph).data('etudiant')}), function (datasets) {
      //   console.log(datasets)
      //   let labels = []
      //   new Chart(graph, {
      //     type: 'radar',
      //
      //     // Data
      //     //
      //     data: {
      //       labels: ['Mx101', 'Mx102', 'Mx201', 'Mx203', 'Mx202', 'Mx204', 'Moyenne'],
      //       datasets: datasets
      //     },
      //
      //     // Options
      //     //
      //     options: {
      //       responsive: false,
      //       legend: {
      //         display: true
      //       }
      //     }
      //   })
      // })
    }
  });
});
$(document).on('change', '.addfavori', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $.ajax({
    url: Routing.generate('user_add_favori'),
    method: 'POST',
    data: {
      'user': $(this).val(),
      'etat': $(this).prop('checked')
    }
  });
});
$(document).on('click', '#btnabs', function (e) {
  $.ajax({
    url: Routing.generate('administration_absences_ajax_add'),
    data: {
      'etudiant': $(this).data('etudiant'),
      'date': $('#jourabs').val(),
      'matiere': $('#moduleabs').val(),
      'heure': $('#heureabs').val(),
      'justif': $('input[type=radio][name=justifabs]:checked').val()
    },
    method: 'POST',
    success: function success(data) {
      //ajout de la ligne
      var classe = '';
      var texte = '';
      var checked = '';

      if (data.justifie === true) {
        classe = 'bg-pale-success';
        texte = 'Oui';
        checked = 'checked';
      } else {
        classe = 'bg-pale-warning';
        texte = 'Non';
        checked = '';
      }

      var html = '<tr class="' + classe + '" id="ligne_' + data.id + '">\n' + '                    <td>' + data.date + ' à ' + data.heure + '</td>\n' + '                    <td>' + data.codeMatiere + '</td>\n' + '                    <td>' + texte + '</td>\n' + '                    <td class="hide">' + data.personnel + '</td>\n' + '                    <td>\n' + '                        <button data-provide="modaler tooltip"\n' + '                                data-url="' + Routing.generate('app_etudiant_absence_detail', {
        'uuid': data.uuidString
      }) + '"\n' + '                                class="btn btn-info btn-outline btn-square btn-xs"\n' + '                                data-placement="bottom"\n' + '                                title="Détails"\n' + '                                data-title="Détails de l\'absence"\n' + '                        >\n' + '                            <i class="fas fa-info"></i>\n' + '                        </button>\n' + '                    </td>\n' + '                        <td>\n' + '                            <div class="custom-control custom-control-lg custom-checkbox">\n' + '                                <input type="checkbox" class="custom-control-input checkAbsence" id="check_' + data.id + '"\n' + '                                       data-absence="' + data.id + '" ' + checked + '>\n' + '                                <label class="custom-control-label" for="check_' + data.id + '">Justifiée*</label>\n' + '                            </div>\n' + '                        </td>\n' + '                </tr>';
      console.log(html);
      $('#tableAbsence > tbody:last').append(html);
    }
  });
});
$(document).on('click', '.checkAbsence', function (e) {
  var absence = $(this).data('absence');
  var etat = 0;

  if ($(this).is(':checked')) {
    etat = 1;
  }

  $.ajax({
    url: Routing.generate('administration_absences_justifie', {
      'absence': absence,
      'etat': etat
    }),
    type: 'GET',
    success: function success(data) {
      if (data) {
        $('#ligne_' + absence).removeClass('bg-pale-warning').addClass('bg-pale-success');
      } else {
        $('#ligne_' + absence).removeClass('bg-pale-success').addClass('bg-pale-warning');
      }
    }
  });
});
$(document).on('change', '#btnInit', function () {
  $.ajax({
    url: Routing.generate('security_password_init', {
      user: $(this).data('personnel')
    }),
    method: 'POST',
    success: function success(e) {
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCallout"])('Mot de passe initialisé !', 'success');
    },
    error: function error(e) {
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCallout"])('Erreur lors l\'initialisation du mot de passe !', 'danger');
    }
  });
});
$(document).on('change', '#chgt_etudiant_semestre', function () {
  $.ajax({
    url: Routing.generate('user_change_semestre', {
      etudiant: $(this).data('etudiant'),
      semestre: $(this).val()
    }),
    method: 'POST',
    success: function success(e) {
      $('#liste_groupes').empty().append('<tr><td colspan="3">Aucun groupe</td></tr>');
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCallout"])('Mofification enregistrée !', 'success');
    },
    error: function error(e) {
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCallout"])('Erreur lors de la sauvegarde de la modification !', 'danger');
    }
  });
});
/*        {% for semestre in semestres %}
  {
    label: "S1",
      backgroundColor: "rgba(51,202,185,0.7)",
    borderColor: "rgba(0,0,0,0)",
    pointBackgroundColor: "rgba(51,202,185,0.7)",
    pointBorderColor: "#fff",
    pointHoverBackgroundColor: "#fff",
    pointHoverBorderColor: "rgba(51,202,185,0.7)",
    data: [10, 9, 19, 8, 15, 16, 8.5]
  }{% if not loop.last %},{% endif %}
  {% endfor %}

 */
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/util.js":
/*!***************************!*\
  !*** ./assets/js/util.js ***!
  \***************************/
/*! exports provided: addCallout, getDataOptions, invalidChamps, validChamps, completeChamps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCallout", function() { return addCallout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataOptions", function() { return getDataOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invalidChamps", function() { return invalidChamps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validChamps", function() { return validChamps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "completeChamps", function() { return completeChamps; });
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
function invalidChamps($obj) {
  $obj.removeClass('is-valid').addClass('is-invalid');
}
function validChamps($obj) {
  $obj.removeClass('is-invalid').addClass('is-valid');
}
function completeChamps($obj) {
  $obj.removeClass('is-invalid').removeClass('is-valid');
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},[["./assets/js/pages/profil.js","runtime","vendors~absences~adm.absences~adm.alternances~adm.articles~adm.bornes~adm.configuration~adm.edt~adm.~b8aa102b","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~b8fda26e","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~92da351e","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~14b603b0","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.groupe~adm.justificat~2f9ea679"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvcHJvZmlsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlsLmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsIm9uIiwiYWpheCIsInVybCIsIlJvdXRpbmciLCJnZW5lcmF0ZSIsImV0dWRpYW50IiwiZGF0YSIsImRlcGFydGVtZW50IiwidmFsIiwibWV0aG9kIiwic3VjY2VzcyIsImUiLCJlbXB0eSIsImFwcGVuZCIsImFkZENhbGxvdXQiLCJlcnJvciIsImFubmVlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCIkb25nbGV0IiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImxvYWQiLCJhdHRyIiwicHJvcCIsImNsYXNzZSIsInRleHRlIiwiY2hlY2tlZCIsImp1c3RpZmllIiwiaHRtbCIsImlkIiwiZGF0ZSIsImhldXJlIiwiY29kZU1hdGllcmUiLCJwZXJzb25uZWwiLCJ1dWlkU3RyaW5nIiwiY29uc29sZSIsImxvZyIsImFic2VuY2UiLCJldGF0IiwiaXMiLCJ0eXBlIiwidXNlciIsInNlbWVzdHJlIiwiJHN0b3BDYXRjaEVudGVyIiwicmVhZFVybE1lbnUiLCIkdXJsIiwiJGVsdCIsInNwbGl0IiwiJGZpcnN0RWx0IiwibGVuZ3RoIiwicG9wIiwibG9jYXRpb24iLCJTd2FsIiwibWl4aW4iLCJjdXN0b21DbGFzcyIsImNvbmZpcm1CdXR0b24iLCJjYW5jZWxCdXR0b24iLCJidXR0b25zU3R5bGluZyIsImNzcmYiLCJmaXJlIiwidGl0bGUiLCJ0ZXh0IiwiaWNvbiIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsInRoZW4iLCJyZXN1bHQiLCJ2YWx1ZSIsIl90b2tlbiIsImhhc093blByb3BlcnR5IiwiaHJlZiIsImNsb3Nlc3QiLCJyZW1vdmUiLCJ4aHIiLCJhamF4T3B0aW9ucyIsInRocm93bkVycm9yIiwiZGlzbWlzcyIsIm1lc3NhZ2UiLCJsYWJlbCIsInRyYW5zbGF0ZSIsIkFycmF5IiwicHJlcGVuZCIsInNsaWRlRG93biIsImRlbGF5Iiwic2xpZGVVcCIsIm15RWRpdEluaXRpYWxDb250ZW50IiwiRWRpdE9uTGluZSIsImdlbmVyZVRleHRBcmVhIiwiZ2VuZXJlSW5wdXQiLCJyZXBsYWNlV2l0aCIsImZvY3VzIiwia2V5Q29kZSIsInVwZGF0ZURhdGEiLCJ3aGljaCIsImZpZWxkIiwiJG9iaiIsInRyaW0iLCJqUXVlcnkiLCJmbiIsImRhdGFBdHRyIiwibmFtZSIsImRlZiIsImdldEF0dHJpYnV0ZSIsImhhc0RhdGFBdHRyIiwiaGFzQXR0cmlidXRlIiwiZGF0YVRvT3B0aW9uIiwicmVwbGFjZSIsIngiLCJ0b1VwcGVyQ2FzZSIsImdldERhdGFPcHRpb25zIiwiZWwiLCJjYXN0TGlzdCIsIm9wdGlvbnMiLCJlYWNoIiwia2V5IiwidW5kZWZpbmVkIiwiQm9vbGVhbiIsIk51bWJlciIsImludmFsaWRDaGFtcHMiLCJ2YWxpZENoYW1wcyIsImNvbXBsZXRlQ2hhbXBzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxFQUFaLENBQWUsUUFBZixFQUF5Qiw0QkFBekIsRUFBdUQsWUFBWTtBQUNqRUYsR0FBQyxDQUFDRyxJQUFGLENBQU87QUFDTEMsT0FBRyxFQUFFQyxPQUFPLENBQUNDLFFBQVIsQ0FBaUIseUJBQWpCLEVBQTRDO0FBQUNDLGNBQVEsRUFBRVAsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRUSxJQUFSLENBQWEsVUFBYixDQUFYO0FBQXFDQyxpQkFBVyxFQUFFVCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFVLEdBQVI7QUFBbEQsS0FBNUMsQ0FEQTtBQUVMQyxVQUFNLEVBQUUsTUFGSDtBQUdM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TCxDQUFpQixZQUFqQixFQUErQkEsV0FBL0IsQ0FBMkMsVUFBM0M7QUFDRCxDIiwiZmlsZSI6InByb2ZpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9wYWdlcy9wcm9maWwuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAwNy8xMi8yMDIwIDE5OjE5XG5pbXBvcnQge2FkZENhbGxvdXR9IGZyb20gJy4uL3V0aWwnXG5cbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnI2NoZ3RfZXR1ZGlhbnRfZGVwYXJ0ZW1lbnQnLCBmdW5jdGlvbiAoKSB7XG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCd1c2VyX2NoYW5nZV9kZXBhcnRlbWVudCcsIHtldHVkaWFudDogJCh0aGlzKS5kYXRhKCdldHVkaWFudCcpLCBkZXBhcnRlbWVudDogJCh0aGlzKS52YWwoKX0pLFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAkKCcjbGlzdGVfZ3JvdXBlcycpLmVtcHR5KCkuYXBwZW5kKCc8dHI+PHRkIGNvbHNwYW49XCIzXCI+QXVjdW4gZ3JvdXBlPC90ZD48L3RyPicpXG4gICAgICBhZGRDYWxsb3V0KCdNb2ZpZmljYXRpb24gZW5yZWdpc3Ryw6llICEnLCAnc3VjY2VzcycpXG4gICAgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGFkZENhbGxvdXQoJ0VycmV1ciBsb3JzIGRlIGxhIHNhdXZlZ2FyZGUgZGUgbGEgbW9kaWZpY2F0aW9uICEnLCAnZGFuZ2VyJylcbiAgICB9XG5cbiAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnI2NoZ3RfZXR1ZGlhbnRfZmluJywgZnVuY3Rpb24gKCkge1xuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgndXNlcl9jaGFuZ2VfYW5uZWVfc29ydGllJywge2V0dWRpYW50OiAkKHRoaXMpLmRhdGEoJ2V0dWRpYW50JyksIGFubmVlOiAkKHRoaXMpLnZhbCgpfSksXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGFkZENhbGxvdXQoJ01vZmlmaWNhdGlvbiBlbnJlZ2lzdHLDqWUgIScsICdzdWNjZXNzJylcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbiAoZSkge1xuICAgICAgYWRkQ2FsbG91dCgnRXJyZXVyIGxvcnMgZGUgbGEgc2F1dmVnYXJkZSBkZSBsYSBtb2RpZmljYXRpb24gIScsICdkYW5nZXInKVxuICAgIH1cblxuICB9KVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5jaGFuZ2Vwcm9maWwnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICBsZXQgJG9uZ2xldCA9ICQodGhpcylcbiAgJCgnLmNoYW5nZXByb2ZpbCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUgc2hvdycpXG4gICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZSBzaG93JylcbiAgJCgnI3Byb2ZpbENvbnRlbnQnKS5lbXB0eSgpLmxvYWQoJCh0aGlzKS5hdHRyKCdocmVmJyksIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJG9uZ2xldC5hdHRyKCdpZCcpID09PSAncHJvZmlsLW5vdGVzJykge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2dyYXBoJylcbiAgICAgIC8vIGNvbnN0IGdyYXBoID0gJCgnI2NoYXJ0LXJhZGFyJylcbiAgICAgIC8vICQuZ2V0KFJvdXRpbmcuZ2VuZXJhdGUoJ3Byb2ZpbF9ldHVkaWFudF9hamF4X25vdGVzX2dyYXBoJywge3NsdWc6ICQoZ3JhcGgpLmRhdGEoJ2V0dWRpYW50Jyl9KSwgZnVuY3Rpb24gKGRhdGFzZXRzKSB7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKGRhdGFzZXRzKVxuICAgICAgLy8gICBsZXQgbGFiZWxzID0gW11cbiAgICAgIC8vICAgbmV3IENoYXJ0KGdyYXBoLCB7XG4gICAgICAvLyAgICAgdHlwZTogJ3JhZGFyJyxcbiAgICAgIC8vXG4gICAgICAvLyAgICAgLy8gRGF0YVxuICAgICAgLy8gICAgIC8vXG4gICAgICAvLyAgICAgZGF0YToge1xuICAgICAgLy8gICAgICAgbGFiZWxzOiBbJ014MTAxJywgJ014MTAyJywgJ014MjAxJywgJ014MjAzJywgJ014MjAyJywgJ014MjA0JywgJ01veWVubmUnXSxcbiAgICAgIC8vICAgICAgIGRhdGFzZXRzOiBkYXRhc2V0c1xuICAgICAgLy8gICAgIH0sXG4gICAgICAvL1xuICAgICAgLy8gICAgIC8vIE9wdGlvbnNcbiAgICAgIC8vICAgICAvL1xuICAgICAgLy8gICAgIG9wdGlvbnM6IHtcbiAgICAgIC8vICAgICAgIHJlc3BvbnNpdmU6IGZhbHNlLFxuICAgICAgLy8gICAgICAgbGVnZW5kOiB7XG4gICAgICAvLyAgICAgICAgIGRpc3BsYXk6IHRydWVcbiAgICAgIC8vICAgICAgIH1cbiAgICAgIC8vICAgICB9XG4gICAgICAvLyAgIH0pXG4gICAgICAvLyB9KVxuXG4gICAgfVxuICB9KVxuXG5cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnLmFkZGZhdm9yaScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBlLnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3VzZXJfYWRkX2Zhdm9yaScpLFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGRhdGE6IHtcbiAgICAgICd1c2VyJzogJCh0aGlzKS52YWwoKSxcbiAgICAgICdldGF0JzogJCh0aGlzKS5wcm9wKCdjaGVja2VkJylcbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2J0bmFicycsIGZ1bmN0aW9uIChlKSB7XG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9hYnNlbmNlc19hamF4X2FkZCcpLFxuICAgIGRhdGE6IHtcbiAgICAgICdldHVkaWFudCc6ICQodGhpcykuZGF0YSgnZXR1ZGlhbnQnKSxcbiAgICAgICdkYXRlJzogJCgnI2pvdXJhYnMnKS52YWwoKSxcbiAgICAgICdtYXRpZXJlJzogJCgnI21vZHVsZWFicycpLnZhbCgpLFxuICAgICAgJ2hldXJlJzogJCgnI2hldXJlYWJzJykudmFsKCksXG4gICAgICAnanVzdGlmJzogJCgnaW5wdXRbdHlwZT1yYWRpb11bbmFtZT1qdXN0aWZhYnNdOmNoZWNrZWQnKS52YWwoKVxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIC8vYWpvdXQgZGUgbGEgbGlnbmVcbiAgICAgIGxldCBjbGFzc2UgPSAnJ1xuICAgICAgbGV0IHRleHRlID0gJydcbiAgICAgIGxldCBjaGVja2VkID0gJydcbiAgICAgIGlmIChkYXRhLmp1c3RpZmllID09PSB0cnVlKSB7XG4gICAgICAgIGNsYXNzZSA9ICdiZy1wYWxlLXN1Y2Nlc3MnXG4gICAgICAgIHRleHRlID0gJ091aSdcbiAgICAgICAgY2hlY2tlZCA9ICdjaGVja2VkJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xhc3NlID0gJ2JnLXBhbGUtd2FybmluZydcbiAgICAgICAgdGV4dGUgPSAnTm9uJ1xuICAgICAgICBjaGVja2VkID0gJydcbiAgICAgIH1cblxuICAgICAgbGV0IGh0bWwgPSAnPHRyIGNsYXNzPVwiJyArIGNsYXNzZSArICdcIiBpZD1cImxpZ25lXycgKyBkYXRhLmlkICsgJ1wiPlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8dGQ+JyArIGRhdGEuZGF0ZSArICcgw6AgJyArIGRhdGEuaGV1cmUgKyAnPC90ZD5cXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgPHRkPicgKyBkYXRhLmNvZGVNYXRpZXJlICsgJzwvdGQ+XFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgIDx0ZD4nICsgdGV4dGUgKyAnPC90ZD5cXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiaGlkZVwiPicgKyBkYXRhLnBlcnNvbm5lbCArICc8L3RkPlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8dGQ+XFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtcHJvdmlkZT1cIm1vZGFsZXIgdG9vbHRpcFwiXFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdXJsPVwiJyArIFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcF9ldHVkaWFudF9hYnNlbmNlX2RldGFpbCcsIHsndXVpZCc6IGRhdGEudXVpZFN0cmluZ30pICsgJ1wiXFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1pbmZvIGJ0bi1vdXRsaW5lIGJ0bi1zcXVhcmUgYnRuLXhzXCJcXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1wbGFjZW1lbnQ9XCJib3R0b21cIlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkTDqXRhaWxzXCJcXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10aXRsZT1cIkTDqXRhaWxzIGRlIGxcXCdhYnNlbmNlXCJcXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgID5cXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1pbmZvXCI+PC9pPlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImN1c3RvbS1jb250cm9sIGN1c3RvbS1jb250cm9sLWxnIGN1c3RvbS1jaGVja2JveFwiPlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjdXN0b20tY29udHJvbC1pbnB1dCBjaGVja0Fic2VuY2VcIiBpZD1cImNoZWNrXycgKyBkYXRhLmlkICsgJ1wiXFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFic2VuY2U9XCInICsgZGF0YS5pZCArICdcIiAnICsgY2hlY2tlZCArICc+XFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImN1c3RvbS1jb250cm9sLWxhYmVsXCIgZm9yPVwiY2hlY2tfJyArIGRhdGEuaWQgKyAnXCI+SnVzdGlmacOpZSo8L2xhYmVsPlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICA8L3RyPidcblxuICAgICAgY29uc29sZS5sb2coaHRtbClcbiAgICAgICQoJyN0YWJsZUFic2VuY2UgPiB0Ym9keTpsYXN0JykuYXBwZW5kKGh0bWwpXG4gICAgfVxuICB9KVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5jaGVja0Fic2VuY2UnLCBmdW5jdGlvbiAoZSkge1xuICBsZXQgYWJzZW5jZSA9ICQodGhpcykuZGF0YSgnYWJzZW5jZScpXG4gIGxldCBldGF0ID0gMFxuXG4gIGlmICgoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkpIHtcbiAgICBldGF0ID0gMVxuICB9XG5cbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX2Fic2VuY2VzX2p1c3RpZmllJywgeydhYnNlbmNlJzogYWJzZW5jZSwgJ2V0YXQnOiBldGF0fSksXG4gICAgdHlwZTogJ0dFVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICQoJyNsaWduZV8nICsgYWJzZW5jZSkucmVtb3ZlQ2xhc3MoJ2JnLXBhbGUtd2FybmluZycpLmFkZENsYXNzKCdiZy1wYWxlLXN1Y2Nlc3MnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCgnI2xpZ25lXycgKyBhYnNlbmNlKS5yZW1vdmVDbGFzcygnYmctcGFsZS1zdWNjZXNzJykuYWRkQ2xhc3MoJ2JnLXBhbGUtd2FybmluZycpXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJyNidG5Jbml0JywgZnVuY3Rpb24gKCkge1xuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnc2VjdXJpdHlfcGFzc3dvcmRfaW5pdCcsIHt1c2VyOiAkKHRoaXMpLmRhdGEoJ3BlcnNvbm5lbCcpfSksXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGFkZENhbGxvdXQoJ01vdCBkZSBwYXNzZSBpbml0aWFsaXPDqSAhJywgJ3N1Y2Nlc3MnKVxuICAgIH0sXG4gICAgZXJyb3I6IGZ1bmN0aW9uIChlKSB7XG4gICAgICBhZGRDYWxsb3V0KCdFcnJldXIgbG9ycyBsXFwnaW5pdGlhbGlzYXRpb24gZHUgbW90IGRlIHBhc3NlICEnLCAnZGFuZ2VyJylcbiAgICB9XG5cbiAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnI2NoZ3RfZXR1ZGlhbnRfc2VtZXN0cmUnLCBmdW5jdGlvbiAoKSB7XG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCd1c2VyX2NoYW5nZV9zZW1lc3RyZScsIHtldHVkaWFudDogJCh0aGlzKS5kYXRhKCdldHVkaWFudCcpLCBzZW1lc3RyZTogJCh0aGlzKS52YWwoKX0pLFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAkKCcjbGlzdGVfZ3JvdXBlcycpLmVtcHR5KCkuYXBwZW5kKCc8dHI+PHRkIGNvbHNwYW49XCIzXCI+QXVjdW4gZ3JvdXBlPC90ZD48L3RyPicpXG4gICAgICBhZGRDYWxsb3V0KCdNb2ZpZmljYXRpb24gZW5yZWdpc3Ryw6llICEnLCAnc3VjY2VzcycpXG4gICAgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGFkZENhbGxvdXQoJ0VycmV1ciBsb3JzIGRlIGxhIHNhdXZlZ2FyZGUgZGUgbGEgbW9kaWZpY2F0aW9uICEnLCAnZGFuZ2VyJylcbiAgICB9XG5cbiAgfSlcbn0pXG5cblxuXG4vKiAgICAgICAgeyUgZm9yIHNlbWVzdHJlIGluIHNlbWVzdHJlcyAlfVxuICB7XG4gICAgbGFiZWw6IFwiUzFcIixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDUxLDIwMiwxODUsMC43KVwiLFxuICAgIGJvcmRlckNvbG9yOiBcInJnYmEoMCwwLDAsMClcIixcbiAgICBwb2ludEJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDUxLDIwMiwxODUsMC43KVwiLFxuICAgIHBvaW50Qm9yZGVyQ29sb3I6IFwiI2ZmZlwiLFxuICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxuICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogXCJyZ2JhKDUxLDIwMiwxODUsMC43KVwiLFxuICAgIGRhdGE6IFsxMCwgOSwgMTksIDgsIDE1LCAxNiwgOC41XVxuICB9eyUgaWYgbm90IGxvb3AubGFzdCAlfSx7JSBlbmRpZiAlfVxuICB7JSBlbmRmb3IgJX1cblxuICovXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvdXRpbC5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDAxLzEyLzIwMjAgMjI6MDRcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXG5cbmxldCAkc3RvcENhdGNoRW50ZXIgPSBmYWxzZVxuXG5mdW5jdGlvbiByZWFkVXJsTWVudSAoJHVybCkge1xuICBjb25zdCAkZWx0ID0gJHVybC5zcGxpdCgnLycpXG4gIGxldCAkZmlyc3RFbHQgPSAyXG4gIGlmICgkZWx0WzFdID09PSAnaW5kZXgucGhwJykge1xuICAgIGlmICgkZWx0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICRmaXJzdEVsdCA9IDNcbiAgICB9XG4gIH1cblxuICBpZiAoJGVsdFskZmlyc3RFbHRdID09PSAnc3VwZXItYWRtaW5pc3RyYXRpb24nKSB7XG4gICAgJGZpcnN0RWx0ID0gJGZpcnN0RWx0ICsgMVxuICB9XG5cbiAgaWYgKCRlbHRbJGVsdC5sZW5ndGggLSAxXSA9PT0gJycpIHtcbiAgICAkZWx0LnBvcCgpXG4gIH1cblxuICAkKCcubWVudS1pdGVtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICQoJyNtZW51LScgKyAkZWx0WyRmaXJzdEVsdF0pLmFkZENsYXNzKCdhY3RpdmUnKVxufVxuXG4vL2NvbG9yaXNlIGxlIGJvbiBtZW51XG5yZWFkVXJsTWVudSgkKGxvY2F0aW9uKS5hdHRyKCdwYXRobmFtZScpKVxuXG5Td2FsLm1peGluKHtcbiAgY3VzdG9tQ2xhc3M6IHtcbiAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgfSxcbiAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG59KVxuLy9wb3AgdXAgZGUgY29uZmlybWF0aW9uIGRlIHN1cHByZXNzaW9uXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnN1cHByaW1lcicsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBjb25zdCB1cmwgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKVxuICBjb25zdCBjc3JmID0gJCh0aGlzKS5kYXRhKCdjc3JmJylcbiAgU3dhbC5maXJlKHtcbiAgICB0aXRsZTogJ0NvbmZpcm1lciBsYSBzdXBwcmVzc2lvbiA/JyxcbiAgICB0ZXh0OiAnTFxcJ29ww6lyYXRpb24gbmUgcG91cnJhIHBhcyDDqnRyZSBhbm51bMOpZS4nLFxuICAgIGljb246ICd3YXJuaW5nJyxcbiAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyMzMDg1ZDYnLFxuICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiAnI2QzMycsXG4gICAgY29uZmlybUJ1dHRvblRleHQ6ICdPdWksIGplIGNvbmZpcm1lJyxcbiAgICBjYW5jZWxCdXR0b25UZXh0OiAnTm9uLCBBbm51bGVyJyxcbiAgICBjdXN0b21DbGFzczoge1xuICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICB9LFxuICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICBpZiAocmVzdWx0LnZhbHVlKSB7XG4gICAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgdHlwZTogJ0RFTEVURScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBfdG9rZW46IGNzcmZcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgaWYgKGlkLmhhc093blByb3BlcnR5KCdyZWRpcmVjdCcpICYmIGlkLmhhc093blByb3BlcnR5KCd1cmwnKSkge1xuICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGlkLnVybFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL3Qucm93KFwiI2xpZ25lX1wiK2lkKS5yZW1vdmUoKS5kcmF3KCk7ID08IGRhdGF0dGFibGUgdG9kbzogcmVtb3ZlIGxpZ25lIHNpIGRhdGF0YWJsZSA/PyBwcm9ibMOobWUgZGFucyBhZG0+cGVyc29ubmVsXG4gICAgICAgICAgICAkKCcjbGlnbmVfJyArIGlkKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpXG4gICAgICAgICAgICBhZGRDYWxsb3V0KCdTdXBwcmVzc2lvbiBlZmZlY3R1w6llIGF2ZWMgc3VjY8OocycsICdzdWNjZXNzJylcbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgIHRpdGxlOiAnU3VwcHJpbcOpIScsXG4gICAgICAgICAgICAgIHRleHQ6ICdMXFwnZW5yZWdpc3RyZW1lbnQgYSDDqXTDqSBzdXBwcmltw6kuJyxcbiAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIGFqYXhPcHRpb25zLCB0aHJvd25FcnJvcikge1xuICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICB0aXRsZTogJ0VycmV1ciBsb3JzIGRlIGxhIHN1cHByZXNzaW9uIScsXG4gICAgICAgICAgICB0ZXh0OiAnTWVyY2kgZGUgcmVub3V2ZWxlciBsXFwnb3DDqXJhdGlvbicsXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgICAgfSlcbiAgICAgICAgICBhZGRDYWxsb3V0KCdFcnJldXIgbG9ycyBkZSBsYSB0ZW50YXRpdmUgZGUgc3VwcHJlc3Npb24nLCAnZGFuZ2VyJylcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgIH0gZWxzZSBpZiAoXG4gICAgICAvLyBSZWFkIG1vcmUgYWJvdXQgaGFuZGxpbmcgZGlzbWlzc2Fsc1xuICAgICAgcmVzdWx0LmRpc21pc3MgPT09ICdjYW5jZWwnXG4gICAgKSB7XG4gICAgICBTd2FsLmZpcmUoe1xuICAgICAgICB0aXRsZTogJ0NhbmNlbGxlZCcsXG4gICAgICAgIHRleHQ6ICdPSyEgVG91dCBlc3QgY29tbWUgYXZhbnQgIScsXG4gICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICB9LFxuICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuICB9KVxufSlcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENhbGxvdXQgKG1lc3NhZ2UsIGxhYmVsKSB7XG4gIGNvbnNvbGUubG9nKCdjYWxsb3V0JylcbiAgdmFyIHRyYW5zbGF0ZSA9IG5ldyBBcnJheSgpXG4gIHRyYW5zbGF0ZVsnc3VjY2VzcyddID0gJ1N1Y2PDqHMnXG4gIHRyYW5zbGF0ZVsnZGFuZ2VyJ10gPSAnRXJyZXVyJ1xuICB0cmFuc2xhdGVbJ3dhcm5pbmcnXSA9ICdBdHRlbnRpb24nXG5cbiAgY29uc3QgaHRtbCA9ICc8ZGl2IGNsYXNzPVwiY2FsbG91dCBjYWxsb3V0LScgKyBsYWJlbCArICdcIiByb2xlPVwiYWxlcnRcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiY2FsbG91dFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4mdGltZXM7PC9zcGFuPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxoNT4nICsgdHJhbnNsYXRlW2xhYmVsXSArICc8L2g1PlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxwPicgKyBtZXNzYWdlICsgJzwvcD5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgIDwvZGl2PidcblxuICAkKCcjbWFpbkNvbnRlbnQnKS5wcmVwZW5kKGh0bWwpLnNsaWRlRG93bignc2xvdycpXG4gICQoJy5jYWxsb3V0JykuZGVsYXkoNTAwMCkuc2xpZGVVcCgnc2xvdycpXG59XG5cbi8vRWRpdGFibGVcbmxldCBteUVkaXRJbml0aWFsQ29udGVudCA9ICcnXG5sZXQgdHlwZSA9ICd0ZXh0J1xubGV0IEVkaXRPbkxpbmUgPSBmYWxzZVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm15ZWRpdCcsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBteUVkaXRJbml0aWFsQ29udGVudCA9ICQodGhpcylcbiAgbGV0IGh0bWwgPSAnJ1xuICBFZGl0T25MaW5lID0gdHJ1ZVxuICBpZiAodHlwZW9mICgkKHRoaXMpLmRhdGEoJ3R5cGUnKSkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdHlwZSA9ICQodGhpcykuZGF0YSgndHlwZScpXG4gIH1cblxuICBpZiAoJCh0aGlzKS5kYXRhKCd0eXBlJykgPT09ICdzZWxlY3QnKSB7XG4gICAgLy90b2RvOiBBIGZpbmFsaXNlclxuICB9IGVsc2UgaWYgKCQodGhpcykuZGF0YSgndHlwZScpID09PSAndGV4dGFyZWEnKSB7XG4gICAgaHRtbCA9IGdlbmVyZVRleHRBcmVhKCQodGhpcykpXG4gIH0gZWxzZSB7XG4gICAgaHRtbCA9IGdlbmVyZUlucHV0KCQodGhpcykpXG4gIH1cbiAgJCh0aGlzKS5yZXBsYWNlV2l0aChodG1sKVxuICAkKCcjbXllZGl0LWlucHV0JykuZm9jdXMoKVxufSlcblxuJChkb2N1bWVudCkub24oJ2tleXVwJywgJyNteWVkaXQtaW5wdXQnLCBmdW5jdGlvbiAoZSkge1xuICBpZiAoZS5rZXlDb2RlID09PSAxMyAmJiAkc3RvcENhdGNoRW50ZXIgPT09IGZhbHNlKSB7XG4gICAgdXBkYXRlRGF0YSgpXG4gIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI215ZWRpdC12YWxpZGUnLCBmdW5jdGlvbiAoZSkge1xuICAkc3RvcENhdGNoRW50ZXIgPSBmYWxzZVxuICBlLnByZXZlbnREZWZhdWx0KClcbiAgdXBkYXRlRGF0YSgpXG59KVxuXG4kKGRvY3VtZW50KS5vbigna2V5cHJlc3MnLCBmdW5jdGlvbiAoZSkge1xuICBpZiAoRWRpdE9uTGluZSA9PT0gdHJ1ZSAmJiAkc3RvcENhdGNoRW50ZXIgPT09IGZhbHNlICYmIGUud2hpY2ggPT09IDEzKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdXBkYXRlRGF0YSgpXG4gIH1cblxuICBpZiAoRWRpdE9uTGluZSA9PT0gdHJ1ZSAmJiAkc3RvcENhdGNoRW50ZXIgPT09IGZhbHNlICYmIGUud2hpY2ggPT09IDI3KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG4gIH1cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbXllZGl0LWFubnVsZScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbn0pXG5cbmZ1bmN0aW9uIHVwZGF0ZURhdGEgKCkge1xuICBsZXQgdmFsID0gJCgnI215ZWRpdC1pbnB1dCcpLnZhbCgpXG4gICQuYWpheCh7XG4gICAgdXJsOiBteUVkaXRJbml0aWFsQ29udGVudC5hdHRyKCdocmVmJyksXG4gICAgZGF0YToge1xuICAgICAgZmllbGQ6IG15RWRpdEluaXRpYWxDb250ZW50LmRhdGEoJ2ZpZWxkJyksXG4gICAgICB2YWx1ZTogdmFsLFxuICAgICAgdHlwZTogdHlwZVxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgbXlFZGl0SW5pdGlhbENvbnRlbnQuaHRtbCh2YWwpXG4gICAgICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbiAgICAgIEVkaXRPbkxpbmUgPSBmYWxzZVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gZ2VuZXJlVGV4dEFyZWEgKCRvYmopIHtcbiAgJHN0b3BDYXRjaEVudGVyID0gdHJ1ZVxuICByZXR1cm4gJzxkaXYgaWQ9XCJteUVkaXQtem9uZVwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHJvd3M9XCI1XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIm15ZWRpdC1pbnB1dFwiPicgKyAkb2JqLmh0bWwoKS50cmltKCkgKyAnPC90ZXh0YXJlYT5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XFxuJyArXG4gICAgJyA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzLW91dGxpbmVcIiBpZD1cIm15ZWRpdC12YWxpZGVcIj48aSBjbGFzcz1cImZhcyBmYS1jaGVja1wiPjwvaT48L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyLW91dGxpbmVcIiBpZD1cIm15ZWRpdC1hbm51bGVcIj48aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT48L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nXG59XG5cbmZ1bmN0aW9uIGdlbmVyZUlucHV0ICgkb2JqKSB7XG5cbiAgcmV0dXJuICc8ZGl2IGlkPVwibXlFZGl0LXpvbmVcIiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwibXllZGl0LWlucHV0XCIgdmFsdWU9XCInICsgJG9iai5odG1sKCkudHJpbSgpICsgJ1wiID5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XFxuJyArXG4gICAgJyA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzLW91dGxpbmVcIiBpZD1cIm15ZWRpdC12YWxpZGVcIj48aSBjbGFzcz1cImZhcyBmYS1jaGVja1wiPjwvaT48L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyLW91dGxpbmVcIiBpZD1cIm15ZWRpdC1hbm51bGVcIj48aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT48L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nXG59XG5cbmpRdWVyeS5mbi5kYXRhQXR0ciA9IGZ1bmN0aW9uIChuYW1lLCBkZWYpIHtcbiAgcmV0dXJuICQodGhpcylbMF0uZ2V0QXR0cmlidXRlKCdkYXRhLScgKyBuYW1lKSB8fCBkZWZcbn1cblxualF1ZXJ5LmZuLmhhc0RhdGFBdHRyID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuICQodGhpcylbMF0uaGFzQXR0cmlidXRlKCdkYXRhLScgKyBuYW1lKVxufVxuXG5mdW5jdGlvbiBkYXRhVG9PcHRpb24gKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUucmVwbGFjZSgvLShbYS16XSkvZywgZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4geFsxXS50b1VwcGVyQ2FzZSgpXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhT3B0aW9ucyAoZWwsIGNhc3RMaXN0KSB7XG4gIHZhciBvcHRpb25zID0ge31cbiAgJC5lYWNoKCQoZWwpLmRhdGEoKSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcblxuICAgIGtleSA9IGRhdGFUb09wdGlvbihrZXkpXG5cbiAgICAvLyBFc2NhcGUgZGF0YS1wcm92aWRlXG4gICAgaWYgKGtleSA9PSAncHJvdmlkZScpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChjYXN0TGlzdCAhPSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciB0eXBlID0gY2FzdExpc3Rba2V5XVxuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2Jvb2wnOlxuICAgICAgICAgIHZhbHVlID0gQm9vbGVhbih2YWx1ZSlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ251bSc6XG4gICAgICAgICAgdmFsdWUgPSBOdW1iZXIodmFsdWUpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnLCcpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBkZWZhdWx0OlxuXG4gICAgICB9XG4gICAgfVxuXG4gICAgb3B0aW9uc1trZXldID0gdmFsdWVcbiAgfSlcblxuICByZXR1cm4gb3B0aW9uc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52YWxpZENoYW1wcyAoJG9iaikge1xuICAkb2JqLnJlbW92ZUNsYXNzKCdpcy12YWxpZCcpLmFkZENsYXNzKCdpcy1pbnZhbGlkJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkQ2hhbXBzICgkb2JqKSB7XG4gICRvYmoucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKS5hZGRDbGFzcygnaXMtdmFsaWQnKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGxldGVDaGFtcHMgKCRvYmopIHtcbiAgJG9iai5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpLnJlbW92ZUNsYXNzKCdpcy12YWxpZCcpXG59XG4iXSwic291cmNlUm9vdCI6IiJ9