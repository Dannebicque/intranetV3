(self["webpackChunk"] = self["webpackChunk"] || []).push([["profil"],{

/***/ "./assets/js/pages/profil.js":
/*!***********************************!*\
  !*** ./assets/js/pages/profil.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./assets/js/util.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/profil.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 01/03/2021 18:49

$(document).on('change', '#chgt_etudiant_departement', function () {
  $.ajax({
    url: Routing.generate('user_change_departement', {
      etudiant: $(this).data('etudiant'),
      departement: $(this).val()
    }),
    method: 'POST',
    success: function success(e) {
      $('#liste_groupes').empty().append('<tr><td colspan="3">Aucun groupe</td></tr>');
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Mofification enregistrée !', 'success');
    },
    error: function error(e) {
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Erreur lors de la sauvegarde de la modification !', 'danger');
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
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Mofification enregistrée !', 'success');
    },
    error: function error(e) {
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Erreur lors de la sauvegarde de la modification !', 'danger');
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
$(document).on('click', '#btnInit', function () {
  console.log('init');
  $.ajax({
    url: Routing.generate('security_password_init', {
      user: $(this).data('personnel')
    }),
    method: 'POST',
    success: function success(e) {
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Mot de passe initialisé !', 'success');
    },
    error: function error(e) {
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Erreur lors l\'initialisation du mot de passe !', 'danger');
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
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Mofification enregistrée !', 'success');
    },
    error: function error(e) {
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Erreur lors de la sauvegarde de la modification !', 'danger');
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
0,[["./assets/js/pages/profil.js","runtime","vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_modules_es_string_split_js","vendors-node_modules_core-js_internals_inherit-if-required_js-node_modules_core-js_internals_-f30b81","vendors-node_modules_core-js_modules_es_number_constructor_js-node_modules_core-js_modules_es-13932d"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvcHJvZmlsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlsLmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsIm9uIiwiYWpheCIsInVybCIsIlJvdXRpbmciLCJnZW5lcmF0ZSIsImV0dWRpYW50IiwiZGF0YSIsImRlcGFydGVtZW50IiwidmFsIiwibWV0aG9kIiwic3VjY2VzcyIsImUiLCJlbXB0eSIsImFwcGVuZCIsImFkZENhbGxvdXQiLCJlcnJvciIsImFubmVlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCIkb25nbGV0IiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImxvYWQiLCJhdHRyIiwicHJvcCIsImNsYXNzZSIsInRleHRlIiwiY2hlY2tlZCIsImp1c3RpZmllIiwiaHRtbCIsImlkIiwiZGF0ZSIsImhldXJlIiwiY29kZU1hdGllcmUiLCJwZXJzb25uZWwiLCJ1dWlkU3RyaW5nIiwiY29uc29sZSIsImxvZyIsImFic2VuY2UiLCJldGF0IiwiaXMiLCJ0eXBlIiwidXNlciIsInNlbWVzdHJlIiwiJHN0b3BDYXRjaEVudGVyIiwicmVhZFVybE1lbnUiLCIkdXJsIiwiJGVsdCIsInNwbGl0IiwiJGZpcnN0RWx0IiwibGVuZ3RoIiwicG9wIiwibG9jYXRpb24iLCJTd2FsIiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwiYnV0dG9uc1N0eWxpbmciLCJjc3JmIiwidGl0bGUiLCJ0ZXh0IiwiaWNvbiIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsInRoZW4iLCJyZXN1bHQiLCJ2YWx1ZSIsIl90b2tlbiIsImhhc093blByb3BlcnR5IiwiaHJlZiIsImNsb3Nlc3QiLCJyZW1vdmUiLCJ4aHIiLCJhamF4T3B0aW9ucyIsInRocm93bkVycm9yIiwiZGlzbWlzcyIsIm1lc3NhZ2UiLCJsYWJlbCIsInRyYW5zbGF0ZSIsIkFycmF5IiwicHJlcGVuZCIsInNsaWRlRG93biIsImRlbGF5Iiwic2xpZGVVcCIsIm15RWRpdEluaXRpYWxDb250ZW50IiwiRWRpdE9uTGluZSIsImdlbmVyZVRleHRBcmVhIiwiZ2VuZXJlSW5wdXQiLCJyZXBsYWNlV2l0aCIsImZvY3VzIiwia2V5Q29kZSIsInVwZGF0ZURhdGEiLCJ3aGljaCIsImZpZWxkIiwiJG9iaiIsInRyaW0iLCJqUXVlcnkiLCJmbiIsImRhdGFBdHRyIiwibmFtZSIsImRlZiIsImdldEF0dHJpYnV0ZSIsImhhc0RhdGFBdHRyIiwiaGFzQXR0cmlidXRlIiwiZGF0YVRvT3B0aW9uIiwicmVwbGFjZSIsIngiLCJ0b1VwcGVyQ2FzZSIsImdldERhdGFPcHRpb25zIiwiZWwiLCJjYXN0TGlzdCIsIm9wdGlvbnMiLCJrZXkiLCJ1bmRlZmluZWQiLCJCb29sZWFuIiwiTnVtYmVyIiwiaW52YWxpZENoYW1wcyIsInZhbGlkQ2hhbXBzIiwiY29tcGxldGVDaGFtcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxFQUFaLENBQWUsUUFBZixFQUF5Qiw0QkFBekIsRUFBdUQsWUFBWTtBQUNqRUYsR0FBQyxDQUFDRyxJQUFGLENBQU87QUFDTEMsT0FBRyxFQUFFQyxPQUFPLENBQUNDLFFBQVIsQ0FBaUIseUJBQWpCLEVBQTRDO0FBQUNDLGNBQVEsRUFBRVAsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRUSxJQUFSLENBQWEsVUFBYixDQUFYO0FBQXFDQyxpQkFBVyxFQUFFVCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFVLEdBQVI7QUFBbEQsS0FBNUMsQ0FEQTtBQUVMQyxVQUFNLEVBQUUsTUFGSDtBQUdMQyxXQUFPLEVBQUUsaUJBQVVDLENBQVYsRUFBYTtB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QyxVQUEzQztBQUNELEMiLCJmaWxlIjoicHJvZmlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3BhZ2VzL3Byb2ZpbC5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDAxLzAzLzIwMjEgMTg6NDlcbmltcG9ydCB7YWRkQ2FsbG91dH0gZnJvbSAnLi4vdXRpbCdcblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcjY2hndF9ldHVkaWFudF9kZXBhcnRlbWVudCcsIGZ1bmN0aW9uICgpIHtcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3VzZXJfY2hhbmdlX2RlcGFydGVtZW50Jywge2V0dWRpYW50OiAkKHRoaXMpLmRhdGEoJ2V0dWRpYW50JyksIGRlcGFydGVtZW50OiAkKHRoaXMpLnZhbCgpfSksXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGUpIHtcbiAgICAgICQoJyNsaXN0ZV9ncm91cGVzJykuZW1wdHkoKS5hcHBlbmQoJzx0cj48dGQgY29sc3Bhbj1cIjNcIj5BdWN1biBncm91cGU8L3RkPjwvdHI+JylcbiAgICAgIGFkZENhbGxvdXQoJ01vZmlmaWNhdGlvbiBlbnJlZ2lzdHLDqWUgIScsICdzdWNjZXNzJylcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbiAoZSkge1xuICAgICAgYWRkQ2FsbG91dCgnRXJyZXVyIGxvcnMgZGUgbGEgc2F1dmVnYXJkZSBkZSBsYSBtb2RpZmljYXRpb24gIScsICdkYW5nZXInKVxuICAgIH1cblxuICB9KVxufSlcblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcjY2hndF9ldHVkaWFudF9maW4nLCBmdW5jdGlvbiAoKSB7XG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCd1c2VyX2NoYW5nZV9hbm5lZV9zb3J0aWUnLCB7ZXR1ZGlhbnQ6ICQodGhpcykuZGF0YSgnZXR1ZGlhbnQnKSwgYW5uZWU6ICQodGhpcykudmFsKCl9KSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZSkge1xuICAgICAgYWRkQ2FsbG91dCgnTW9maWZpY2F0aW9uIGVucmVnaXN0csOpZSAhJywgJ3N1Y2Nlc3MnKVxuICAgIH0sXG4gICAgZXJyb3I6IGZ1bmN0aW9uIChlKSB7XG4gICAgICBhZGRDYWxsb3V0KCdFcnJldXIgbG9ycyBkZSBsYSBzYXV2ZWdhcmRlIGRlIGxhIG1vZGlmaWNhdGlvbiAhJywgJ2RhbmdlcicpXG4gICAgfVxuXG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNoYW5nZXByb2ZpbCcsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gIGxldCAkb25nbGV0ID0gJCh0aGlzKVxuICAkKCcuY2hhbmdlcHJvZmlsJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZSBzaG93JylcbiAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlIHNob3cnKVxuICAkKCcjcHJvZmlsQ29udGVudCcpLmVtcHR5KCkubG9hZCgkKHRoaXMpLmF0dHIoJ2hyZWYnKSwgZnVuY3Rpb24gKCkge1xuICAgIGlmICgkb25nbGV0LmF0dHIoJ2lkJykgPT09ICdwcm9maWwtbm90ZXMnKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnZ3JhcGgnKVxuICAgICAgLy8gY29uc3QgZ3JhcGggPSAkKCcjY2hhcnQtcmFkYXInKVxuICAgICAgLy8gJC5nZXQoUm91dGluZy5nZW5lcmF0ZSgncHJvZmlsX2V0dWRpYW50X2FqYXhfbm90ZXNfZ3JhcGgnLCB7c2x1ZzogJChncmFwaCkuZGF0YSgnZXR1ZGlhbnQnKX0pLCBmdW5jdGlvbiAoZGF0YXNldHMpIHtcbiAgICAgIC8vICAgY29uc29sZS5sb2coZGF0YXNldHMpXG4gICAgICAvLyAgIGxldCBsYWJlbHMgPSBbXVxuICAgICAgLy8gICBuZXcgQ2hhcnQoZ3JhcGgsIHtcbiAgICAgIC8vICAgICB0eXBlOiAncmFkYXInLFxuICAgICAgLy9cbiAgICAgIC8vICAgICAvLyBEYXRhXG4gICAgICAvLyAgICAgLy9cbiAgICAgIC8vICAgICBkYXRhOiB7XG4gICAgICAvLyAgICAgICBsYWJlbHM6IFsnTXgxMDEnLCAnTXgxMDInLCAnTXgyMDEnLCAnTXgyMDMnLCAnTXgyMDInLCAnTXgyMDQnLCAnTW95ZW5uZSddLFxuICAgICAgLy8gICAgICAgZGF0YXNldHM6IGRhdGFzZXRzXG4gICAgICAvLyAgICAgfSxcbiAgICAgIC8vXG4gICAgICAvLyAgICAgLy8gT3B0aW9uc1xuICAgICAgLy8gICAgIC8vXG4gICAgICAvLyAgICAgb3B0aW9uczoge1xuICAgICAgLy8gICAgICAgcmVzcG9uc2l2ZTogZmFsc2UsXG4gICAgICAvLyAgICAgICBsZWdlbmQ6IHtcbiAgICAgIC8vICAgICAgICAgZGlzcGxheTogdHJ1ZVxuICAgICAgLy8gICAgICAgfVxuICAgICAgLy8gICAgIH1cbiAgICAgIC8vICAgfSlcbiAgICAgIC8vIH0pXG5cbiAgICB9XG4gIH0pXG5cblxufSlcblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcuYWRkZmF2b3JpJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGUuc3RvcFByb3BhZ2F0aW9uKClcblxuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgndXNlcl9hZGRfZmF2b3JpJyksXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgZGF0YToge1xuICAgICAgJ3VzZXInOiAkKHRoaXMpLnZhbCgpLFxuICAgICAgJ2V0YXQnOiAkKHRoaXMpLnByb3AoJ2NoZWNrZWQnKVxuICAgIH1cbiAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjYnRuYWJzJywgZnVuY3Rpb24gKGUpIHtcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX2Fic2VuY2VzX2FqYXhfYWRkJyksXG4gICAgZGF0YToge1xuICAgICAgJ2V0dWRpYW50JzogJCh0aGlzKS5kYXRhKCdldHVkaWFudCcpLFxuICAgICAgJ2RhdGUnOiAkKCcjam91cmFicycpLnZhbCgpLFxuICAgICAgJ21hdGllcmUnOiAkKCcjbW9kdWxlYWJzJykudmFsKCksXG4gICAgICAnaGV1cmUnOiAkKCcjaGV1cmVhYnMnKS52YWwoKSxcbiAgICAgICdqdXN0aWYnOiAkKCdpbnB1dFt0eXBlPXJhZGlvXVtuYW1lPWp1c3RpZmFic106Y2hlY2tlZCcpLnZhbCgpXG4gICAgfSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgLy9ham91dCBkZSBsYSBsaWduZVxuICAgICAgbGV0IGNsYXNzZSA9ICcnXG4gICAgICBsZXQgdGV4dGUgPSAnJ1xuICAgICAgbGV0IGNoZWNrZWQgPSAnJ1xuICAgICAgaWYgKGRhdGEuanVzdGlmaWUgPT09IHRydWUpIHtcbiAgICAgICAgY2xhc3NlID0gJ2JnLXBhbGUtc3VjY2VzcydcbiAgICAgICAgdGV4dGUgPSAnT3VpJ1xuICAgICAgICBjaGVja2VkID0gJ2NoZWNrZWQnXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbGFzc2UgPSAnYmctcGFsZS13YXJuaW5nJ1xuICAgICAgICB0ZXh0ZSA9ICdOb24nXG4gICAgICAgIGNoZWNrZWQgPSAnJ1xuICAgICAgfVxuXG4gICAgICBsZXQgaHRtbCA9ICc8dHIgY2xhc3M9XCInICsgY2xhc3NlICsgJ1wiIGlkPVwibGlnbmVfJyArIGRhdGEuaWQgKyAnXCI+XFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgIDx0ZD4nICsgZGF0YS5kYXRlICsgJyDDoCAnICsgZGF0YS5oZXVyZSArICc8L3RkPlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8dGQ+JyArIGRhdGEuY29kZU1hdGllcmUgKyAnPC90ZD5cXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgPHRkPicgKyB0ZXh0ZSArICc8L3RkPlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJoaWRlXCI+JyArIGRhdGEucGVyc29ubmVsICsgJzwvdGQ+XFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgIDx0ZD5cXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1wcm92aWRlPVwibW9kYWxlciB0b29sdGlwXCJcXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS11cmw9XCInICsgUm91dGluZy5nZW5lcmF0ZSgnYXBwX2V0dWRpYW50X2Fic2VuY2VfZGV0YWlsJywgeyd1dWlkJzogZGF0YS51dWlkU3RyaW5nfSkgKyAnXCJcXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWluZm8gYnRuLW91dGxpbmUgYnRuLXNxdWFyZSBidG4teHNcIlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXBsYWNlbWVudD1cImJvdHRvbVwiXFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRMOpdGFpbHNcIlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRpdGxlPVwiRMOpdGFpbHMgZGUgbFxcJ2Fic2VuY2VcIlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWluZm9cIj48L2k+XFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNvbnRyb2wtbGcgY3VzdG9tLWNoZWNrYm94XCI+XFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImN1c3RvbS1jb250cm9sLWlucHV0IGNoZWNrQWJzZW5jZVwiIGlkPVwiY2hlY2tfJyArIGRhdGEuaWQgKyAnXCJcXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYWJzZW5jZT1cIicgKyBkYXRhLmlkICsgJ1wiICcgKyBjaGVja2VkICsgJz5cXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIiBmb3I9XCJjaGVja18nICsgZGF0YS5pZCArICdcIj5KdXN0aWZpw6llKjwvbGFiZWw+XFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgIDwvdHI+J1xuXG4gICAgICBjb25zb2xlLmxvZyhodG1sKVxuICAgICAgJCgnI3RhYmxlQWJzZW5jZSA+IHRib2R5Omxhc3QnKS5hcHBlbmQoaHRtbClcbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNoZWNrQWJzZW5jZScsIGZ1bmN0aW9uIChlKSB7XG4gIGxldCBhYnNlbmNlID0gJCh0aGlzKS5kYXRhKCdhYnNlbmNlJylcbiAgbGV0IGV0YXQgPSAwXG5cbiAgaWYgKCgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSkge1xuICAgIGV0YXQgPSAxXG4gIH1cblxuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fYWJzZW5jZXNfanVzdGlmaWUnLCB7J2Fic2VuY2UnOiBhYnNlbmNlLCAnZXRhdCc6IGV0YXR9KSxcbiAgICB0eXBlOiAnR0VUJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgJCgnI2xpZ25lXycgKyBhYnNlbmNlKS5yZW1vdmVDbGFzcygnYmctcGFsZS13YXJuaW5nJykuYWRkQ2xhc3MoJ2JnLXBhbGUtc3VjY2VzcycpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKCcjbGlnbmVfJyArIGFic2VuY2UpLnJlbW92ZUNsYXNzKCdiZy1wYWxlLXN1Y2Nlc3MnKS5hZGRDbGFzcygnYmctcGFsZS13YXJuaW5nJylcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2J0bkluaXQnLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnNvbGUubG9nKCdpbml0JylcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3NlY3VyaXR5X3Bhc3N3b3JkX2luaXQnLCB7dXNlcjogJCh0aGlzKS5kYXRhKCdwZXJzb25uZWwnKX0pLFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XG4gICAgICBhZGRDYWxsb3V0KCdNb3QgZGUgcGFzc2UgaW5pdGlhbGlzw6kgIScsICdzdWNjZXNzJylcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbiAoZSkge1xuICAgICAgYWRkQ2FsbG91dCgnRXJyZXVyIGxvcnMgbFxcJ2luaXRpYWxpc2F0aW9uIGR1IG1vdCBkZSBwYXNzZSAhJywgJ2RhbmdlcicpXG4gICAgfVxuXG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJyNjaGd0X2V0dWRpYW50X3NlbWVzdHJlJywgZnVuY3Rpb24gKCkge1xuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgndXNlcl9jaGFuZ2Vfc2VtZXN0cmUnLCB7ZXR1ZGlhbnQ6ICQodGhpcykuZGF0YSgnZXR1ZGlhbnQnKSwgc2VtZXN0cmU6ICQodGhpcykudmFsKCl9KSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZSkge1xuICAgICAgJCgnI2xpc3RlX2dyb3VwZXMnKS5lbXB0eSgpLmFwcGVuZCgnPHRyPjx0ZCBjb2xzcGFuPVwiM1wiPkF1Y3VuIGdyb3VwZTwvdGQ+PC90cj4nKVxuICAgICAgYWRkQ2FsbG91dCgnTW9maWZpY2F0aW9uIGVucmVnaXN0csOpZSAhJywgJ3N1Y2Nlc3MnKVxuICAgIH0sXG4gICAgZXJyb3I6IGZ1bmN0aW9uIChlKSB7XG4gICAgICBhZGRDYWxsb3V0KCdFcnJldXIgbG9ycyBkZSBsYSBzYXV2ZWdhcmRlIGRlIGxhIG1vZGlmaWNhdGlvbiAhJywgJ2RhbmdlcicpXG4gICAgfVxuXG4gIH0pXG59KVxuXG5cblxuLyogICAgICAgIHslIGZvciBzZW1lc3RyZSBpbiBzZW1lc3RyZXMgJX1cbiAge1xuICAgIGxhYmVsOiBcIlMxXCIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSg1MSwyMDIsMTg1LDAuNylcIixcbiAgICBib3JkZXJDb2xvcjogXCJyZ2JhKDAsMCwwLDApXCIsXG4gICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSg1MSwyMDIsMTg1LDAuNylcIixcbiAgICBwb2ludEJvcmRlckNvbG9yOiBcIiNmZmZcIixcbiAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIixcbiAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6IFwicmdiYSg1MSwyMDIsMTg1LDAuNylcIixcbiAgICBkYXRhOiBbMTAsIDksIDE5LCA4LCAxNSwgMTYsIDguNV1cbiAgfXslIGlmIG5vdCBsb29wLmxhc3QgJX0seyUgZW5kaWYgJX1cbiAgeyUgZW5kZm9yICV9XG5cbiAqL1xuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3V0aWwuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAwMS8xMi8yMDIwIDIyOjA0XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJ1xuXG5sZXQgJHN0b3BDYXRjaEVudGVyID0gZmFsc2VcblxuZnVuY3Rpb24gcmVhZFVybE1lbnUgKCR1cmwpIHtcbiAgY29uc3QgJGVsdCA9ICR1cmwuc3BsaXQoJy8nKVxuICBsZXQgJGZpcnN0RWx0ID0gMlxuICBpZiAoJGVsdFsxXSA9PT0gJ2luZGV4LnBocCcpIHtcbiAgICBpZiAoJGVsdC5sZW5ndGggPiAxKSB7XG4gICAgICAkZmlyc3RFbHQgPSAzXG4gICAgfVxuICB9XG5cbiAgaWYgKCRlbHRbJGZpcnN0RWx0XSA9PT0gJ3N1cGVyLWFkbWluaXN0cmF0aW9uJykge1xuICAgICRmaXJzdEVsdCA9ICRmaXJzdEVsdCArIDFcbiAgfVxuXG4gIGlmICgkZWx0WyRlbHQubGVuZ3RoIC0gMV0gPT09ICcnKSB7XG4gICAgJGVsdC5wb3AoKVxuICB9XG5cbiAgJCgnLm1lbnUtaXRlbScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAkKCcjbWVudS0nICsgJGVsdFskZmlyc3RFbHRdKS5hZGRDbGFzcygnYWN0aXZlJylcbn1cblxuLy9jb2xvcmlzZSBsZSBib24gbWVudVxucmVhZFVybE1lbnUoJChsb2NhdGlvbikuYXR0cigncGF0aG5hbWUnKSlcblxuU3dhbC5taXhpbih7XG4gIGN1c3RvbUNsYXNzOiB7XG4gICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gIH0sXG4gIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxufSlcbi8vcG9wIHVwIGRlIGNvbmZpcm1hdGlvbiBkZSBzdXBwcmVzc2lvblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5zdXBwcmltZXInLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgY29uc3QgdXJsID0gJCh0aGlzKS5hdHRyKCdocmVmJylcbiAgY29uc3QgY3NyZiA9ICQodGhpcykuZGF0YSgnY3NyZicpXG4gIFN3YWwuZmlyZSh7XG4gICAgdGl0bGU6ICdDb25maXJtZXIgbGEgc3VwcHJlc3Npb24gPycsXG4gICAgdGV4dDogJ0xcXCdvcMOpcmF0aW9uIG5lIHBvdXJyYSBwYXMgw6p0cmUgYW5udWzDqWUuJyxcbiAgICBpY29uOiAnd2FybmluZycsXG4gICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICBjb25maXJtQnV0dG9uQ29sb3I6ICcjMzA4NWQ2JyxcbiAgICBjYW5jZWxCdXR0b25Db2xvcjogJyNkMzMnLFxuICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT3VpLCBqZSBjb25maXJtZScsXG4gICAgY2FuY2VsQnV0dG9uVGV4dDogJ05vbiwgQW5udWxlcicsXG4gICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgfSxcbiAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgaWYgKHJlc3VsdC52YWx1ZSkge1xuICAgICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIHR5cGU6ICdERUxFVEUnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgX3Rva2VuOiBjc3JmXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgIGlmIChpZC5oYXNPd25Qcm9wZXJ0eSgncmVkaXJlY3QnKSAmJiBpZC5oYXNPd25Qcm9wZXJ0eSgndXJsJykpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBpZC51cmxcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy90LnJvdyhcIiNsaWduZV9cIitpZCkucmVtb3ZlKCkuZHJhdygpOyA9PCBkYXRhdHRhYmxlIHRvZG86IHJlbW92ZSBsaWduZSBzaSBkYXRhdGFibGUgPz8gcHJvYmzDqG1lIGRhbnMgYWRtPnBlcnNvbm5lbFxuICAgICAgICAgICAgJCgnI2xpZ25lXycgKyBpZCkuY2xvc2VzdCgndHInKS5yZW1vdmUoKVxuICAgICAgICAgICAgYWRkQ2FsbG91dCgnU3VwcHJlc3Npb24gZWZmZWN0dcOpZSBhdmVjIHN1Y2PDqHMnLCAnc3VjY2VzcycpXG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICB0aXRsZTogJ1N1cHByaW3DqSEnLFxuICAgICAgICAgICAgICB0ZXh0OiAnTFxcJ2VucmVnaXN0cmVtZW50IGEgw6l0w6kgc3VwcHJpbcOpLicsXG4gICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBhamF4T3B0aW9ucywgdGhyb3duRXJyb3IpIHtcbiAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgdGl0bGU6ICdFcnJldXIgbG9ycyBkZSBsYSBzdXBwcmVzc2lvbiEnLFxuICAgICAgICAgICAgdGV4dDogJ01lcmNpIGRlIHJlbm91dmVsZXIgbFxcJ29ww6lyYXRpb24nLFxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgICAgIH0pXG4gICAgICAgICAgYWRkQ2FsbG91dCgnRXJyZXVyIGxvcnMgZGUgbGEgdGVudGF0aXZlIGRlIHN1cHByZXNzaW9uJywgJ2RhbmdlcicpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICB9IGVsc2UgaWYgKFxuICAgICAgLy8gUmVhZCBtb3JlIGFib3V0IGhhbmRsaW5nIGRpc21pc3NhbHNcbiAgICAgIHJlc3VsdC5kaXNtaXNzID09PSAnY2FuY2VsJ1xuICAgICkge1xuICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgdGl0bGU6ICdDYW5jZWxsZWQnLFxuICAgICAgICB0ZXh0OiAnT0shIFRvdXQgZXN0IGNvbW1lIGF2YW50ICEnLFxuICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgfSxcbiAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICB9KVxuICAgIH1cbiAgfSlcbn0pXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDYWxsb3V0IChtZXNzYWdlLCBsYWJlbCkge1xuICBjb25zb2xlLmxvZygnY2FsbG91dCcpXG4gIHZhciB0cmFuc2xhdGUgPSBuZXcgQXJyYXkoKVxuICB0cmFuc2xhdGVbJ3N1Y2Nlc3MnXSA9ICdTdWNjw6hzJ1xuICB0cmFuc2xhdGVbJ2RhbmdlciddID0gJ0VycmV1cidcbiAgdHJhbnNsYXRlWyd3YXJuaW5nJ10gPSAnQXR0ZW50aW9uJ1xuXG4gIGNvbnN0IGh0bWwgPSAnPGRpdiBjbGFzcz1cImNhbGxvdXQgY2FsbG91dC0nICsgbGFiZWwgKyAnXCIgcm9sZT1cImFsZXJ0XCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cImNhbGxvdXRcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JnRpbWVzOzwvc3Bhbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8aDU+JyArIHRyYW5zbGF0ZVtsYWJlbF0gKyAnPC9oNT5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8cD4nICsgbWVzc2FnZSArICc8L3A+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICA8L2Rpdj4nXG5cbiAgJCgnI21haW5Db250ZW50JykucHJlcGVuZChodG1sKS5zbGlkZURvd24oJ3Nsb3cnKVxuICAkKCcuY2FsbG91dCcpLmRlbGF5KDUwMDApLnNsaWRlVXAoJ3Nsb3cnKVxufVxuXG4vL0VkaXRhYmxlXG5sZXQgbXlFZGl0SW5pdGlhbENvbnRlbnQgPSAnJ1xubGV0IHR5cGUgPSAndGV4dCdcbmxldCBFZGl0T25MaW5lID0gZmFsc2VcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5teWVkaXQnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgbXlFZGl0SW5pdGlhbENvbnRlbnQgPSAkKHRoaXMpXG4gIGxldCBodG1sID0gJydcbiAgRWRpdE9uTGluZSA9IHRydWVcbiAgaWYgKHR5cGVvZiAoJCh0aGlzKS5kYXRhKCd0eXBlJykpICE9PSAndW5kZWZpbmVkJykge1xuICAgIHR5cGUgPSAkKHRoaXMpLmRhdGEoJ3R5cGUnKVxuICB9XG5cbiAgaWYgKCQodGhpcykuZGF0YSgndHlwZScpID09PSAnc2VsZWN0Jykge1xuICAgIC8vdG9kbzogQSBmaW5hbGlzZXJcbiAgfSBlbHNlIGlmICgkKHRoaXMpLmRhdGEoJ3R5cGUnKSA9PT0gJ3RleHRhcmVhJykge1xuICAgIGh0bWwgPSBnZW5lcmVUZXh0QXJlYSgkKHRoaXMpKVxuICB9IGVsc2Uge1xuICAgIGh0bWwgPSBnZW5lcmVJbnB1dCgkKHRoaXMpKVxuICB9XG4gICQodGhpcykucmVwbGFjZVdpdGgoaHRtbClcbiAgJCgnI215ZWRpdC1pbnB1dCcpLmZvY3VzKClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdrZXl1cCcsICcjbXllZGl0LWlucHV0JywgZnVuY3Rpb24gKGUpIHtcbiAgaWYgKGUua2V5Q29kZSA9PT0gMTMgJiYgJHN0b3BDYXRjaEVudGVyID09PSBmYWxzZSkge1xuICAgIHVwZGF0ZURhdGEoKVxuICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbiAgfVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNteWVkaXQtdmFsaWRlJywgZnVuY3Rpb24gKGUpIHtcbiAgJHN0b3BDYXRjaEVudGVyID0gZmFsc2VcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIHVwZGF0ZURhdGEoKVxufSlcblxuJChkb2N1bWVudCkub24oJ2tleXByZXNzJywgZnVuY3Rpb24gKGUpIHtcbiAgaWYgKEVkaXRPbkxpbmUgPT09IHRydWUgJiYgJHN0b3BDYXRjaEVudGVyID09PSBmYWxzZSAmJiBlLndoaWNoID09PSAxMykge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHVwZGF0ZURhdGEoKVxuICB9XG5cbiAgaWYgKEVkaXRPbkxpbmUgPT09IHRydWUgJiYgJHN0b3BDYXRjaEVudGVyID09PSBmYWxzZSAmJiBlLndoaWNoID09PSAyNykge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI215ZWRpdC1hbm51bGUnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG59KVxuXG5mdW5jdGlvbiB1cGRhdGVEYXRhICgpIHtcbiAgbGV0IHZhbCA9ICQoJyNteWVkaXQtaW5wdXQnKS52YWwoKVxuICAkLmFqYXgoe1xuICAgIHVybDogbXlFZGl0SW5pdGlhbENvbnRlbnQuYXR0cignaHJlZicpLFxuICAgIGRhdGE6IHtcbiAgICAgIGZpZWxkOiBteUVkaXRJbml0aWFsQ29udGVudC5kYXRhKCdmaWVsZCcpLFxuICAgICAgdmFsdWU6IHZhbCxcbiAgICAgIHR5cGU6IHR5cGVcbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgIG15RWRpdEluaXRpYWxDb250ZW50Lmh0bWwodmFsKVxuICAgICAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG4gICAgICBFZGl0T25MaW5lID0gZmFsc2VcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGdlbmVyZVRleHRBcmVhICgkb2JqKSB7XG4gICRzdG9wQ2F0Y2hFbnRlciA9IHRydWVcbiAgcmV0dXJuICc8ZGl2IGlkPVwibXlFZGl0LXpvbmVcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSByb3dzPVwiNVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJteWVkaXQtaW5wdXRcIj4nICsgJG9iai5odG1sKCkudHJpbSgpICsgJzwvdGV4dGFyZWE+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxcbicgK1xuICAgICcgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzcy1vdXRsaW5lXCIgaWQ9XCJteWVkaXQtdmFsaWRlXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hlY2tcIj48L2k+PC9idXR0b24+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlci1vdXRsaW5lXCIgaWQ9XCJteWVkaXQtYW5udWxlXCI+PGkgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+PC9idXR0b24+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPC9kaXY+J1xufVxuXG5mdW5jdGlvbiBnZW5lcmVJbnB1dCAoJG9iaikge1xuXG4gIHJldHVybiAnPGRpdiBpZD1cIm15RWRpdC16b25lXCIgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIm15ZWRpdC1pbnB1dFwiIHZhbHVlPVwiJyArICRvYmouaHRtbCgpLnRyaW0oKSArICdcIiA+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxcbicgK1xuICAgICcgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzcy1vdXRsaW5lXCIgaWQ9XCJteWVkaXQtdmFsaWRlXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hlY2tcIj48L2k+PC9idXR0b24+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlci1vdXRsaW5lXCIgaWQ9XCJteWVkaXQtYW5udWxlXCI+PGkgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+PC9idXR0b24+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPC9kaXY+J1xufVxuXG5qUXVlcnkuZm4uZGF0YUF0dHIgPSBmdW5jdGlvbiAobmFtZSwgZGVmKSB7XG4gIHJldHVybiAkKHRoaXMpWzBdLmdldEF0dHJpYnV0ZSgnZGF0YS0nICsgbmFtZSkgfHwgZGVmXG59XG5cbmpRdWVyeS5mbi5oYXNEYXRhQXR0ciA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiAkKHRoaXMpWzBdLmhhc0F0dHJpYnV0ZSgnZGF0YS0nICsgbmFtZSlcbn1cblxuZnVuY3Rpb24gZGF0YVRvT3B0aW9uIChuYW1lKSB7XG4gIHJldHVybiBuYW1lLnJlcGxhY2UoLy0oW2Etel0pL2csIGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIHhbMV0udG9VcHBlckNhc2UoKVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YU9wdGlvbnMgKGVsLCBjYXN0TGlzdCkge1xuICB2YXIgb3B0aW9ucyA9IHt9XG4gICQuZWFjaCgkKGVsKS5kYXRhKCksIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG5cbiAgICBrZXkgPSBkYXRhVG9PcHRpb24oa2V5KVxuXG4gICAgLy8gRXNjYXBlIGRhdGEtcHJvdmlkZVxuICAgIGlmIChrZXkgPT0gJ3Byb3ZpZGUnKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoY2FzdExpc3QgIT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgdHlwZSA9IGNhc3RMaXN0W2tleV1cbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdib29sJzpcbiAgICAgICAgICB2YWx1ZSA9IEJvb2xlYW4odmFsdWUpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdudW0nOlxuICAgICAgICAgIHZhbHVlID0gTnVtYmVyKHZhbHVlKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgIHZhbHVlID0gdmFsdWUuc3BsaXQoJywnKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgZGVmYXVsdDpcblxuICAgICAgfVxuICAgIH1cblxuICAgIG9wdGlvbnNba2V5XSA9IHZhbHVlXG4gIH0pXG5cbiAgcmV0dXJuIG9wdGlvbnNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGludmFsaWRDaGFtcHMgKCRvYmopIHtcbiAgJG9iai5yZW1vdmVDbGFzcygnaXMtdmFsaWQnKS5hZGRDbGFzcygnaXMtaW52YWxpZCcpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZENoYW1wcyAoJG9iaikge1xuICAkb2JqLnJlbW92ZUNsYXNzKCdpcy1pbnZhbGlkJykuYWRkQ2xhc3MoJ2lzLXZhbGlkJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBsZXRlQ2hhbXBzICgkb2JqKSB7XG4gICRvYmoucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKS5yZW1vdmVDbGFzcygnaXMtdmFsaWQnKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==