(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["applications"],{

/***/ "./assets/js/pages/applications.js":
/*!*****************************************!*\
  !*** ./assets/js/pages/applications.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, jQuery) {/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./assets/js/util.js");
/* harmony import */ var _messagerie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messagerie */ "./assets/js/pages/messagerie.js");
/* harmony import */ var _messagerie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_messagerie__WEBPACK_IMPORTED_MODULE_1__);
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/applications.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 06/09/2020 16:14


$(document).on('click', '.changeapplication', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $('.changeapplication').removeClass('active show');
  $(this).addClass('active show');
  $('#mainContent').empty().load($(this).attr('href'));
});
$(document).on('change', '#selectsemestre', function () {
  //matieres
  $('#listegroupe').empty();
  var selectMatiere = $('#selectmatiere');
  var selectGroupes = $('#selectgroupes');
  $.ajax({
    url: Routing.generate('api_matieres_semestre', {
      semestre: $(this).val()
    }),
    dataType: "json",
    //Return data type (what we expect).
    success: function success(data) {
      selectMatiere.empty();
      selectMatiere.append($('<option></option>').attr('value', '').text('Choisir une matière'));
      jQuery.each(data, function (index, matiere) {
        selectMatiere.append($('<option></option>').attr('value', matiere.id).text(matiere.display));
      });
      selectMatiere.attr('data-provide', 'selectpicker');
      selectMatiere.attr('data-live-search', 'true');
    },
    error: function error() {
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCallout"])('Erreur lors de la tentative d\'affichage des matières du semestres. Veuillez contacter le responsable de l\'intranet si le problème persiste !', 'danger');
    }
  }); //groupes

  $.ajax({
    url: Routing.generate('api_type_groupe_semestre', {
      semestre: $(this).val()
    }),
    dataType: "json",
    //Return data type (what we expect).
    success: function success(data) {
      selectGroupes.empty();
      selectGroupes.append($('<option></option>').attr('value', '').text('Choisir un type de groupe'));
      jQuery.each(data, function (index, typeGroupe) {
        selectGroupes.append($('<option></option>').attr('value', typeGroupe.id).text(typeGroupe.libelle));
      });
    },
    error: function error() {
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCallout"])('Erreur lors de la tentative d\'affichage des groupes du semestres. Veuillez contacter le responsable de l\'intranet si le problème persiste !', 'danger');
    }
  });
});
$(document).on('change', '#selectgroupes', function () {
  var $lgr = $('#listegroupe'); //matieres

  $.ajax({
    url: Routing.generate('api_groupe_type_groupe', {
      typeGroupe: $(this).val()
    }),
    dataType: "json",
    //Return data type (what we expect).
    success: function success(data) {
      $lgr.empty();
      var $html = '';
      jQuery.each(data, function (index, groupe) {
        $html += '<input type="checkbox" checked name="detail_groupes[]" value="' + groupe.id + '"> ' + groupe.libelle + ' | ';
      });
      $lgr.html($html);
    },
    error: function error() {
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCallout"])('Erreur lors de la tentative d\'affichage des groupes du semestres. Veuillez contacter le responsable de l\'intranet si le problème persiste !', 'danger');
    }
  });
});
$(document).on('click', '#add_rattrapage', function () {
  $('#bloc_add_rattrapage').toggle();
});
$(document).on('click', '#add_carnet', function () {
  $('#bloc_add_carnet').toggle();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/pages/messagerie.js":
/*!***************************************!*\
  !*** ./assets/js/pages/messagerie.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/messagerie.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 08/09/2020 20:03
$(document).on('click', '.messagerie-filtre', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $('.messagerie-filtre').parent().removeClass('active');
  $(this).parent().addClass('active');
  $('#messages-liste').empty().load(Routing.generate('messagerie_filtre', {
    'filtre': $(this).data('filtre')
  }));
});
$(document).on('click', '#saveDraft', function (e) {
  $.ajax({
    url: Routing.generate('messagerie_draft'),
    data: {
      messageToSemestre: $('#messageToSemestre').val(),
      messageToGroupe: $('#messageToGroupe').val(),
      messageToLibreEtudiant: $('#messageToLibreEtudiant').val(),
      messageToLibrePersonnel: $('#messageToLibrePersonnel').val(),
      typeDestinataire: $('input[type=radio][name=messageDestinataireType]:checked').val(),
      copie: $('#messageCopy').val(),
      message: $('.ql-editor').html(),
      sujet: $('#messageSubject').val()
    },
    method: 'POST',
    success: function success(data) {
      $('#messages-liste').empty().load(Routing.generate('messagerie_filtre', {
        'filtre': 'draft'
      }));
    }
  });
});
$(document).on('click', '.message-read', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $('#messages-liste').empty().load(Routing.generate('messagerie_message', {
    message: $(this).data('message')
  }));
});
$(document).on('click', '.message-read-auteur', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $('#messages-liste').empty().load(Routing.generate('messagerie_message_envoye', {
    message: $(this).data('message')
  }));
});
$(document).on('click', '#new-message', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $('#messages-liste').empty().load(Routing.generate('messagerie_nouveau'));
});
$(document).on('click', '#marquerNotificationsRead', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $.ajax({
    url: Routing.generate('notification_marquer_lu'),
    success: function success(e) {
      $('.notification').removeClass('media-new');
    }
  });
});
$(document).on('click', '#messageSent', function (e) {
  $(this).attr('disabled', true);
  $(this).text('Envoi en cours...');
  e.preventDefault();
  e.stopPropagation();
  $.ajax({
    url: Routing.generate('messagerie_sent'),
    data: {
      messageToSemestre: $('#messageToSemestre').val(),
      messageToGroupe: $('#messageToGroupe').val(),
      messageToLibreEtudiant: $('#messageToLibreEtudiant').val(),
      messageToLibrePersonnel: $('#messageToLibrePersonnel').val(),
      typeDestinataire: $('input[type=radio][name=messageDestinataireType]:checked').val(),
      copie: $('#messageCopy').val(),
      message: $('.ql-editor').html(),
      sujet: $('#messageSubject').val()
    },
    method: 'POST',
    success: function success(data) {
      $('#messages-liste').empty().load(Routing.generate('messagerie_message_envoye', {
        message: data.message
      }));
      $('#messageSent').attr('disabled', false);
      $(this).text('Envoyer');
    }
  });
});
$(document).on('click', '.starred', function () {
  $.ajax({
    url: Routing.generate('messagerie_change_etat'),
    method: 'POST',
    data: {
      valeur: 'S',
      message: $(this).data('message')
    },
    error: function error() {
      $(this).prop('checked', false);
    }
  });
});
$(document).on('click', '#deleteMessage', function () {
  $.ajax({
    url: Routing.generate('messagerie_change_etat'),
    method: 'POST',
    data: {
      etat: 'D',
      message: $(this).data('message')
    },
    success: function success() {
      $('#messages-liste').empty().load(Routing.generate('messagerie_filtre', {
        'filtre': 'all'
      }));
    }
  });
});
$(document).on('click', '.messageDestinataireType', function () {
  var type = $(this).val();
  var blocDestLibreEtudiant = $('#blocDestLibreEtudiant');
  var blocDestLibrePersonnel = $('#blocDestLibrePersonnel');
  var blocDestMessgaeInfo = $('#blocDestMessgaeInfo');
  var blocDestGroupe = $('#blocDestGroupe');
  var blocDestSemestre = $('#blocDestSemestre');

  if (type === 'e') {
    blocDestLibreEtudiant.show();
    blocDestLibrePersonnel.hide();
    blocDestMessgaeInfo.hide();
    blocDestGroupe.hide();
    blocDestSemestre.hide();
  } else if (type === 's') {
    blocDestLibreEtudiant.hide();
    blocDestLibrePersonnel.hide();
    blocDestMessgaeInfo.hide();
    blocDestGroupe.hide();
    blocDestSemestre.show();
  } else if (type === 'g') {
    blocDestLibreEtudiant.hide();
    blocDestLibrePersonnel.hide();
    blocDestMessgaeInfo.hide();
    blocDestGroupe.show();
    blocDestSemestre.hide();
  } else if (type === 'p') {
    blocDestLibreEtudiant.hide();
    blocDestLibrePersonnel.show();
    blocDestMessgaeInfo.hide();
    blocDestGroupe.hide();
    blocDestSemestre.hide();
  }
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
// @lastUpdate 30/07/2020 11:18



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
jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('click', '.myedit', function (e) {
  e.preventDefault();
  myEditInitialContent = jquery__WEBPACK_IMPORTED_MODULE_5___default()(this);
  var html = '';

  if (jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).data('type') === 'select') {//todo: A finaliser
  } else {
    console.log('toto');
    html = genereInput(jquery__WEBPACK_IMPORTED_MODULE_5___default()(this));
  }

  jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).replaceWith(html);
  jquery__WEBPACK_IMPORTED_MODULE_5___default()('#myedit-input').focus();
});
jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('keyup', '#myedit-input', function (e) {
  if (e.keyCode === 13) {
    updateData();
  } else if (e.keyCode === 27) {
    jquery__WEBPACK_IMPORTED_MODULE_5___default()('#myEdit-zone').replaceWith(myEditInitialContent);
  }
});
jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('click', '#myedit-valide', function (e) {
  e.preventDefault();
  updateData();
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
      value: val
    },
    method: 'POST',
    success: function success() {
      myEditInitialContent.html(val);
      jquery__WEBPACK_IMPORTED_MODULE_5___default()('#myEdit-zone').replaceWith(myEditInitialContent);
    }
  });
}

function genereInput($obj) {
  var $html = '<div id="myEdit-zone"><input type="text" value="' + $obj.html().trim() + '" id="myedit-input" />';
  $html = $html + '<button class="btn btn-square btn-sm btn-success btn-outline" id="myedit-valide"><i class="fas fa-check"></i></button>';
  $html = $html + '<button class="btn btn-square btn-sm btn-danger btn-outline" id="myedit-annule"><i class="fas fa-times"></i></button></div>';
  return $html;
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

},[["./assets/js/pages/applications.js","runtime","vendors~absences~adm.absences~adm.alternances~adm.articles~adm.bornes~adm.configuration~adm.edt~adm.~cf684355","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~865432e1","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~86470384","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~2e82efb8","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.groupe~adm.justificat~6edbcb60"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvYXBwbGljYXRpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy9tZXNzYWdlcmllLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlsLmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImVtcHR5IiwibG9hZCIsImF0dHIiLCJzZWxlY3RNYXRpZXJlIiwic2VsZWN0R3JvdXBlcyIsImFqYXgiLCJ1cmwiLCJSb3V0aW5nIiwiZ2VuZXJhdGUiLCJzZW1lc3RyZSIsInZhbCIsImRhdGFUeXBlIiwic3VjY2VzcyIsImRhdGEiLCJhcHBlbmQiLCJ0ZXh0IiwialF1ZXJ5IiwiZWFjaCIsImluZGV4IiwibWF0aWVyZSIsImlkIiwiZGlzcGxheSIsImVycm9yIiwiYWRkQ2FsbG91dCIsInR5cGVHcm91cGUiLCJsaWJlbGxlIiwiJGxnciIsIiRodG1sIiwiZ3JvdXBlIiwiaHRtbCIsInRvZ2dsZSIsInBhcmVudCIsIm1lc3NhZ2VUb1NlbWVzdHJlIiwibWVzc2FnZVRvR3JvdXBlIiwibWVzc2FnZVRvTGlicmVFdHVkaWFudCIsIm1lc3NhZ2VUb0xpYnJlUGVyc29ubmVsIiwidHlwZURlc3RpbmF0YWlyZSIsImNvcGllIiwibWVzc2FnZSIsInN1amV0IiwibWV0aG9kIiwidmFsZXVyIiwicHJvcCIsImV0YXQiLCJ0eXBlIiwiYmxvY0Rlc3RMaWJyZUV0dWRpYW50IiwiYmxvY0Rlc3RMaWJyZVBlcnNvbm5lbCIsImJsb2NEZXN0TWVzc2dhZUluZm8iLCJibG9jRGVzdEdyb3VwZSIsImJsb2NEZXN0U2VtZXN0cmUiLCJzaG93IiwiaGlkZSIsInJlYWRVcmxNZW51IiwiJHVybCIsIiRlbHQiLCJzcGxpdCIsIiRmaXJzdEVsdCIsImxlbmd0aCIsInBvcCIsImxvY2F0aW9uIiwiU3dhbCIsIm1peGluIiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwiYnV0dG9uc1N0eWxpbmciLCJjc3JmIiwiZmlyZSIsInRpdGxlIiwiaWNvbiIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsInRoZW4iLCJyZXN1bHQiLCJ2YWx1ZSIsIl90b2tlbiIsImhhc093blByb3BlcnR5IiwiaHJlZiIsImNsb3Nlc3QiLCJyZW1vdmUiLCJ4aHIiLCJhamF4T3B0aW9ucyIsInRocm93bkVycm9yIiwiZGlzbWlzcyIsImxhYmVsIiwiY29uc29sZSIsImxvZyIsInRyYW5zbGF0ZSIsIkFycmF5IiwicHJlcGVuZCIsInNsaWRlRG93biIsImRlbGF5Iiwic2xpZGVVcCIsIm15RWRpdEluaXRpYWxDb250ZW50IiwiZ2VuZXJlSW5wdXQiLCJyZXBsYWNlV2l0aCIsImZvY3VzIiwia2V5Q29kZSIsInVwZGF0ZURhdGEiLCJmaWVsZCIsIiRvYmoiLCJ0cmltIiwiZm4iLCJkYXRhQXR0ciIsIm5hbWUiLCJkZWYiLCJnZXRBdHRyaWJ1dGUiLCJoYXNEYXRhQXR0ciIsImhhc0F0dHJpYnV0ZSIsImRhdGFUb09wdGlvbiIsInJlcGxhY2UiLCJ4IiwidG9VcHBlckNhc2UiLCJnZXREYXRhT3B0aW9ucyIsImVsIiwiY2FzdExpc3QiLCJvcHRpb25zIiwia2V5IiwidW5kZWZpbmVkIiwiQm9vbGVhbiIsIk51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsRUFBWixDQUFlLE9BQWYsRUFBd0Isb0JBQXhCLEVBQThDLFVBQVVDLENBQVYsRUFBYTtBQUN6REEsR0FBQyxDQUFDQyxjQUFGO0FBQ0FE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OztBQUVGLGFBQUssS0FBTDtBQUNFQSxlQUFLLEdBQUc4QyxNQUFNLENBQUM5QyxLQUFELENBQWQ7QUFDQTs7QUFFRixhQUFLLE9BQUw7QUFDRUEsZUFBSyxHQUFHQSxLQUFLLENBQUN0QixLQUFOLENBQVksR0FBWixDQUFSO0FBQ0E7O0FBRUY7QUFiRjtBQWdCRDs7QUFFRGdFLFdBQU8sQ0FBQ0MsR0FBRCxDQUFQLEdBQWUzQyxLQUFmO0FBQ0QsR0E5QkQ7QUFnQ0EsU0FBTzBDLE9BQVA7QUFDRCxDIiwiZmlsZSI6ImFwcGxpY2F0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9wYWdlcy9hcHBsaWNhdGlvbnMuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAwNi8wOS8yMDIwIDE2OjE0XG5pbXBvcnQge2FkZENhbGxvdXR9IGZyb20gJy4uL3V0aWwnXG5pbXBvcnQgJy4vbWVzc2FnZXJpZSdcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5jaGFuZ2VhcHBsaWNhdGlvbicsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBlLnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgJCgnLmNoYW5nZWFwcGxpY2F0aW9uJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZSBzaG93JylcbiAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlIHNob3cnKVxuICAkKCcjbWFpbkNvbnRlbnQnKS5lbXB0eSgpLmxvYWQoJCh0aGlzKS5hdHRyKCdocmVmJykpXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJyNzZWxlY3RzZW1lc3RyZScsIGZ1bmN0aW9uICgpIHtcbiAgLy9tYXRpZXJlc1xuICAkKCcjbGlzdGVncm91cGUnKS5lbXB0eSgpXG4gIGNvbnN0IHNlbGVjdE1hdGllcmUgPSAkKCcjc2VsZWN0bWF0aWVyZScpXG4gIGNvbnN0IHNlbGVjdEdyb3VwZXMgPSAkKCcjc2VsZWN0Z3JvdXBlcycpXG4gICQuYWpheChcbiAgICB7XG4gICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwaV9tYXRpZXJlc19zZW1lc3RyZScsIHtzZW1lc3RyZTogJCh0aGlzKS52YWwoKX0pLFxuICAgICAgZGF0YVR5cGU6IFwianNvblwiLCAvL1JldHVybiBkYXRhIHR5cGUgKHdoYXQgd2UgZXhwZWN0KS5cbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHNlbGVjdE1hdGllcmUuZW1wdHkoKVxuICAgICAgICBzZWxlY3RNYXRpZXJlLmFwcGVuZCgkKCc8b3B0aW9uPjwvb3B0aW9uPicpXG4gICAgICAgICAgLmF0dHIoJ3ZhbHVlJywgJycpXG4gICAgICAgICAgLnRleHQoJ0Nob2lzaXIgdW5lIG1hdGnDqHJlJykpXG4gICAgICAgIGpRdWVyeS5lYWNoKGRhdGEsIGZ1bmN0aW9uIChpbmRleCwgbWF0aWVyZSkge1xuICAgICAgICAgIHNlbGVjdE1hdGllcmUuYXBwZW5kKCQoJzxvcHRpb24+PC9vcHRpb24+JylcbiAgICAgICAgICAgIC5hdHRyKCd2YWx1ZScsIG1hdGllcmUuaWQpXG4gICAgICAgICAgICAudGV4dChtYXRpZXJlLmRpc3BsYXkpKVxuICAgICAgICB9KVxuICAgICAgICBzZWxlY3RNYXRpZXJlLmF0dHIoJ2RhdGEtcHJvdmlkZScsICdzZWxlY3RwaWNrZXInKVxuICAgICAgICBzZWxlY3RNYXRpZXJlLmF0dHIoJ2RhdGEtbGl2ZS1zZWFyY2gnLCAndHJ1ZScpXG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYWRkQ2FsbG91dCgnRXJyZXVyIGxvcnMgZGUgbGEgdGVudGF0aXZlIGRcXCdhZmZpY2hhZ2UgZGVzIG1hdGnDqHJlcyBkdSBzZW1lc3RyZXMuIFZldWlsbGV6IGNvbnRhY3RlciBsZSByZXNwb25zYWJsZSBkZSBsXFwnaW50cmFuZXQgc2kgbGUgcHJvYmzDqG1lIHBlcnNpc3RlICEnLCAnZGFuZ2VyJylcbiAgICAgIH1cbiAgICB9KVxuICAvL2dyb3VwZXNcbiAgJC5hamF4KFxuICAgIHtcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYXBpX3R5cGVfZ3JvdXBlX3NlbWVzdHJlJywge3NlbWVzdHJlOiAkKHRoaXMpLnZhbCgpfSksXG5cbiAgICAgIGRhdGFUeXBlOiBcImpzb25cIiwgLy9SZXR1cm4gZGF0YSB0eXBlICh3aGF0IHdlIGV4cGVjdCkuXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBzZWxlY3RHcm91cGVzLmVtcHR5KClcbiAgICAgICAgc2VsZWN0R3JvdXBlcy5hcHBlbmQoJCgnPG9wdGlvbj48L29wdGlvbj4nKVxuICAgICAgICAgIC5hdHRyKCd2YWx1ZScsICcnKVxuICAgICAgICAgIC50ZXh0KCdDaG9pc2lyIHVuIHR5cGUgZGUgZ3JvdXBlJykpXG4gICAgICAgIGpRdWVyeS5lYWNoKGRhdGEsIGZ1bmN0aW9uIChpbmRleCwgdHlwZUdyb3VwZSkge1xuXG4gICAgICAgICAgc2VsZWN0R3JvdXBlcy5hcHBlbmQoJCgnPG9wdGlvbj48L29wdGlvbj4nKVxuICAgICAgICAgICAgLmF0dHIoJ3ZhbHVlJywgdHlwZUdyb3VwZS5pZClcbiAgICAgICAgICAgIC50ZXh0KHR5cGVHcm91cGUubGliZWxsZSkpXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYWRkQ2FsbG91dCgnRXJyZXVyIGxvcnMgZGUgbGEgdGVudGF0aXZlIGRcXCdhZmZpY2hhZ2UgZGVzIGdyb3VwZXMgZHUgc2VtZXN0cmVzLiBWZXVpbGxleiBjb250YWN0ZXIgbGUgcmVzcG9uc2FibGUgZGUgbFxcJ2ludHJhbmV0IHNpIGxlIHByb2Jsw6htZSBwZXJzaXN0ZSAhJywgJ2RhbmdlcicpXG4gICAgICB9XG4gICAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnI3NlbGVjdGdyb3VwZXMnLCBmdW5jdGlvbiAoKSB7XG5cbiAgY29uc3QgJGxnciA9ICQoJyNsaXN0ZWdyb3VwZScpXG4gIC8vbWF0aWVyZXNcbiAgJC5hamF4KFxuICAgIHtcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYXBpX2dyb3VwZV90eXBlX2dyb3VwZScsIHt0eXBlR3JvdXBlOiAkKHRoaXMpLnZhbCgpfSksXG4gICAgICBkYXRhVHlwZTogXCJqc29uXCIsIC8vUmV0dXJuIGRhdGEgdHlwZSAod2hhdCB3ZSBleHBlY3QpLlxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgJGxnci5lbXB0eSgpXG4gICAgICAgIGxldCAkaHRtbCA9ICcnXG4gICAgICAgIGpRdWVyeS5lYWNoKGRhdGEsIGZ1bmN0aW9uIChpbmRleCwgZ3JvdXBlKSB7XG4gICAgICAgICAgJGh0bWwgKz0gJzxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkIG5hbWU9XCJkZXRhaWxfZ3JvdXBlc1tdXCIgdmFsdWU9XCInICsgZ3JvdXBlLmlkICsgJ1wiPiAnICsgZ3JvdXBlLmxpYmVsbGUgKyAnIHwgJ1xuICAgICAgICB9KVxuICAgICAgICAkbGdyLmh0bWwoJGh0bWwpXG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYWRkQ2FsbG91dCgnRXJyZXVyIGxvcnMgZGUgbGEgdGVudGF0aXZlIGRcXCdhZmZpY2hhZ2UgZGVzIGdyb3VwZXMgZHUgc2VtZXN0cmVzLiBWZXVpbGxleiBjb250YWN0ZXIgbGUgcmVzcG9uc2FibGUgZGUgbFxcJ2ludHJhbmV0IHNpIGxlIHByb2Jsw6htZSBwZXJzaXN0ZSAhJywgJ2RhbmdlcicpXG4gICAgICB9XG4gICAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsJyNhZGRfcmF0dHJhcGFnZScsIGZ1bmN0aW9uKCl7XG4gICQoJyNibG9jX2FkZF9yYXR0cmFwYWdlJykudG9nZ2xlKClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsJyNhZGRfY2FybmV0JywgZnVuY3Rpb24oKXtcbiAgJCgnI2Jsb2NfYWRkX2Nhcm5ldCcpLnRvZ2dsZSgpXG59KVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3BhZ2VzL21lc3NhZ2VyaWUuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAwOC8wOS8yMDIwIDIwOjAzXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubWVzc2FnZXJpZS1maWx0cmUnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAkKCcubWVzc2FnZXJpZS1maWx0cmUnKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnYWN0aXZlJylcbiAgJCgnI21lc3NhZ2VzLWxpc3RlJykuZW1wdHkoKS5sb2FkKFJvdXRpbmcuZ2VuZXJhdGUoJ21lc3NhZ2VyaWVfZmlsdHJlJywgeydmaWx0cmUnOiAkKHRoaXMpLmRhdGEoJ2ZpbHRyZScpfSkpXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI3NhdmVEcmFmdCcsIGZ1bmN0aW9uIChlKSB7XG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdtZXNzYWdlcmllX2RyYWZ0JyksXG4gICAgZGF0YToge1xuICAgICAgbWVzc2FnZVRvU2VtZXN0cmU6ICQoJyNtZXNzYWdlVG9TZW1lc3RyZScpLnZhbCgpLFxuICAgICAgbWVzc2FnZVRvR3JvdXBlOiAkKCcjbWVzc2FnZVRvR3JvdXBlJykudmFsKCksXG4gICAgICBtZXNzYWdlVG9MaWJyZUV0dWRpYW50OiAkKCcjbWVzc2FnZVRvTGlicmVFdHVkaWFudCcpLnZhbCgpLFxuICAgICAgbWVzc2FnZVRvTGlicmVQZXJzb25uZWw6ICQoJyNtZXNzYWdlVG9MaWJyZVBlcnNvbm5lbCcpLnZhbCgpLFxuICAgICAgdHlwZURlc3RpbmF0YWlyZTogJCgnaW5wdXRbdHlwZT1yYWRpb11bbmFtZT1tZXNzYWdlRGVzdGluYXRhaXJlVHlwZV06Y2hlY2tlZCcpLnZhbCgpLFxuICAgICAgY29waWU6ICQoJyNtZXNzYWdlQ29weScpLnZhbCgpLFxuICAgICAgbWVzc2FnZTogJCgnLnFsLWVkaXRvcicpLmh0bWwoKSxcbiAgICAgIHN1amV0OiAkKCcjbWVzc2FnZVN1YmplY3QnKS52YWwoKVxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICQoJyNtZXNzYWdlcy1saXN0ZScpLmVtcHR5KCkubG9hZChSb3V0aW5nLmdlbmVyYXRlKCdtZXNzYWdlcmllX2ZpbHRyZScsIHsnZmlsdHJlJzogJ2RyYWZ0J30pKVxuICAgIH1cbiAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubWVzc2FnZS1yZWFkJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGUuc3RvcFByb3BhZ2F0aW9uKClcblxuICAkKCcjbWVzc2FnZXMtbGlzdGUnKS5lbXB0eSgpLmxvYWQoUm91dGluZy5nZW5lcmF0ZSgnbWVzc2FnZXJpZV9tZXNzYWdlJywge21lc3NhZ2U6ICQodGhpcykuZGF0YSgnbWVzc2FnZScpfSkpXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm1lc3NhZ2UtcmVhZC1hdXRldXInLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgZS5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICQoJyNtZXNzYWdlcy1saXN0ZScpLmVtcHR5KCkubG9hZChSb3V0aW5nLmdlbmVyYXRlKCdtZXNzYWdlcmllX21lc3NhZ2VfZW52b3llJywge21lc3NhZ2U6ICQodGhpcykuZGF0YSgnbWVzc2FnZScpfSkpXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI25ldy1tZXNzYWdlJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGUuc3RvcFByb3BhZ2F0aW9uKClcblxuICAkKCcjbWVzc2FnZXMtbGlzdGUnKS5lbXB0eSgpLmxvYWQoUm91dGluZy5nZW5lcmF0ZSgnbWVzc2FnZXJpZV9ub3V2ZWF1JykpXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI21hcnF1ZXJOb3RpZmljYXRpb25zUmVhZCcsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdub3RpZmljYXRpb25fbWFycXVlcl9sdScpLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XG5cbiAgICAgICQoJy5ub3RpZmljYXRpb24nKS5yZW1vdmVDbGFzcygnbWVkaWEtbmV3JylcbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI21lc3NhZ2VTZW50JywgZnVuY3Rpb24gKGUpIHtcbiAgJCh0aGlzKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpXG4gICQodGhpcykudGV4dCgnRW52b2kgZW4gY291cnMuLi4nKVxuICBlLnByZXZlbnREZWZhdWx0KClcbiAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnbWVzc2FnZXJpZV9zZW50JyksXG4gICAgZGF0YToge1xuICAgICAgbWVzc2FnZVRvU2VtZXN0cmU6ICQoJyNtZXNzYWdlVG9TZW1lc3RyZScpLnZhbCgpLFxuICAgICAgbWVzc2FnZVRvR3JvdXBlOiAkKCcjbWVzc2FnZVRvR3JvdXBlJykudmFsKCksXG4gICAgICBtZXNzYWdlVG9MaWJyZUV0dWRpYW50OiAkKCcjbWVzc2FnZVRvTGlicmVFdHVkaWFudCcpLnZhbCgpLFxuICAgICAgbWVzc2FnZVRvTGlicmVQZXJzb25uZWw6ICQoJyNtZXNzYWdlVG9MaWJyZVBlcnNvbm5lbCcpLnZhbCgpLFxuICAgICAgdHlwZURlc3RpbmF0YWlyZTogJCgnaW5wdXRbdHlwZT1yYWRpb11bbmFtZT1tZXNzYWdlRGVzdGluYXRhaXJlVHlwZV06Y2hlY2tlZCcpLnZhbCgpLFxuICAgICAgY29waWU6ICQoJyNtZXNzYWdlQ29weScpLnZhbCgpLFxuICAgICAgbWVzc2FnZTogJCgnLnFsLWVkaXRvcicpLmh0bWwoKSxcbiAgICAgIHN1amV0OiAkKCcjbWVzc2FnZVN1YmplY3QnKS52YWwoKVxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICQoJyNtZXNzYWdlcy1saXN0ZScpLmVtcHR5KCkubG9hZChSb3V0aW5nLmdlbmVyYXRlKCdtZXNzYWdlcmllX21lc3NhZ2VfZW52b3llJywge21lc3NhZ2U6IGRhdGEubWVzc2FnZX0pKVxuICAgICAgJCgnI21lc3NhZ2VTZW50JykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSlcbiAgICAgICQodGhpcykudGV4dCgnRW52b3llcicpXG4gICAgfVxuICB9KVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5zdGFycmVkJywgZnVuY3Rpb24gKCkge1xuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnbWVzc2FnZXJpZV9jaGFuZ2VfZXRhdCcpLFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGRhdGE6IHtcbiAgICAgIHZhbGV1cjogJ1MnLFxuICAgICAgbWVzc2FnZTogJCh0aGlzKS5kYXRhKCdtZXNzYWdlJylcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbiAoKSB7XG4gICAgICAkKHRoaXMpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSlcbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2RlbGV0ZU1lc3NhZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdtZXNzYWdlcmllX2NoYW5nZV9ldGF0JyksXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgZGF0YToge1xuICAgICAgZXRhdDogJ0QnLFxuICAgICAgbWVzc2FnZTogJCh0aGlzKS5kYXRhKCdtZXNzYWdlJylcbiAgICB9LFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICQoJyNtZXNzYWdlcy1saXN0ZScpLmVtcHR5KCkubG9hZChSb3V0aW5nLmdlbmVyYXRlKCdtZXNzYWdlcmllX2ZpbHRyZScsIHsnZmlsdHJlJzogJ2FsbCd9KSlcbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm1lc3NhZ2VEZXN0aW5hdGFpcmVUeXBlJywgZnVuY3Rpb24gKCkge1xuICBjb25zdCB0eXBlID0gJCh0aGlzKS52YWwoKVxuICBjb25zdCBibG9jRGVzdExpYnJlRXR1ZGlhbnQgPSAkKCcjYmxvY0Rlc3RMaWJyZUV0dWRpYW50JylcbiAgY29uc3QgYmxvY0Rlc3RMaWJyZVBlcnNvbm5lbCA9ICQoJyNibG9jRGVzdExpYnJlUGVyc29ubmVsJylcbiAgY29uc3QgYmxvY0Rlc3RNZXNzZ2FlSW5mbyA9ICQoJyNibG9jRGVzdE1lc3NnYWVJbmZvJylcbiAgY29uc3QgYmxvY0Rlc3RHcm91cGUgPSAkKCcjYmxvY0Rlc3RHcm91cGUnKVxuICBjb25zdCBibG9jRGVzdFNlbWVzdHJlID0gJCgnI2Jsb2NEZXN0U2VtZXN0cmUnKVxuXG4gIGlmICh0eXBlID09PSAnZScpe1xuICAgIGJsb2NEZXN0TGlicmVFdHVkaWFudC5zaG93KClcbiAgICBibG9jRGVzdExpYnJlUGVyc29ubmVsLmhpZGUoKVxuICAgIGJsb2NEZXN0TWVzc2dhZUluZm8uaGlkZSgpXG4gICAgYmxvY0Rlc3RHcm91cGUuaGlkZSgpXG4gICAgYmxvY0Rlc3RTZW1lc3RyZS5oaWRlKClcbiAgfSBlbHNlIGlmICh0eXBlID09PSAncycpe1xuICAgIGJsb2NEZXN0TGlicmVFdHVkaWFudC5oaWRlKClcbiAgICBibG9jRGVzdExpYnJlUGVyc29ubmVsLmhpZGUoKVxuICAgIGJsb2NEZXN0TWVzc2dhZUluZm8uaGlkZSgpXG4gICAgYmxvY0Rlc3RHcm91cGUuaGlkZSgpXG4gICAgYmxvY0Rlc3RTZW1lc3RyZS5zaG93KClcbiAgfWVsc2UgaWYgKHR5cGUgPT09ICdnJyl7XG4gICAgYmxvY0Rlc3RMaWJyZUV0dWRpYW50LmhpZGUoKVxuICAgIGJsb2NEZXN0TGlicmVQZXJzb25uZWwuaGlkZSgpXG4gICAgYmxvY0Rlc3RNZXNzZ2FlSW5mby5oaWRlKClcbiAgICBibG9jRGVzdEdyb3VwZS5zaG93KClcbiAgICBibG9jRGVzdFNlbWVzdHJlLmhpZGUoKVxuICB9ZWxzZSBpZiAodHlwZSA9PT0gJ3AnKXtcbiAgICBibG9jRGVzdExpYnJlRXR1ZGlhbnQuaGlkZSgpXG4gICAgYmxvY0Rlc3RMaWJyZVBlcnNvbm5lbC5zaG93KClcbiAgICBibG9jRGVzdE1lc3NnYWVJbmZvLmhpZGUoKVxuICAgIGJsb2NEZXN0R3JvdXBlLmhpZGUoKVxuICAgIGJsb2NEZXN0U2VtZXN0cmUuaGlkZSgpXG4gIH1cbn0pXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvdXRpbC5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDMwLzA3LzIwMjAgMTE6MThcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXG5cbmZ1bmN0aW9uIHJlYWRVcmxNZW51ICgkdXJsKSB7XG4gIGNvbnN0ICRlbHQgPSAkdXJsLnNwbGl0KCcvJylcbiAgbGV0ICRmaXJzdEVsdCA9IDJcbiAgaWYgKCRlbHRbMV0gPT09ICdpbmRleC5waHAnKSB7XG4gICAgaWYgKCRlbHQubGVuZ3RoID4gMSkge1xuICAgICAgJGZpcnN0RWx0ID0gM1xuICAgIH1cbiAgfVxuXG4gIGlmICgkZWx0WyRmaXJzdEVsdF0gPT09ICdzdXBlci1hZG1pbmlzdHJhdGlvbicpIHtcbiAgICAkZmlyc3RFbHQgPSAkZmlyc3RFbHQgKyAxXG4gIH1cblxuICBpZiAoJGVsdFskZWx0Lmxlbmd0aCAtIDFdID09PSAnJykge1xuICAgICRlbHQucG9wKClcbiAgfVxuXG4gICQoJy5tZW51LWl0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgJCgnI21lbnUtJyArICRlbHRbJGZpcnN0RWx0XSkuYWRkQ2xhc3MoJ2FjdGl2ZScpXG59XG5cbi8vY29sb3Jpc2UgbGUgYm9uIG1lbnVcbnJlYWRVcmxNZW51KCQobG9jYXRpb24pLmF0dHIoJ3BhdGhuYW1lJykpXG5cblN3YWwubWl4aW4oe1xuICBjdXN0b21DbGFzczoge1xuICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICB9LFxuICBidXR0b25zU3R5bGluZzogZmFsc2Vcbn0pXG4vL3BvcCB1cCBkZSBjb25maXJtYXRpb24gZGUgc3VwcHJlc3Npb25cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuc3VwcHJpbWVyJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IHVybCA9ICQodGhpcykuYXR0cignaHJlZicpXG4gIGNvbnN0IGNzcmYgPSAkKHRoaXMpLmRhdGEoJ2NzcmYnKVxuICBTd2FsLmZpcmUoe1xuICAgIHRpdGxlOiAnQ29uZmlybWVyIGxhIHN1cHByZXNzaW9uID8nLFxuICAgIHRleHQ6ICdMXFwnb3DDqXJhdGlvbiBuZSBwb3VycmEgcGFzIMOqdHJlIGFubnVsw6llLicsXG4gICAgaWNvbjogJ3dhcm5pbmcnLFxuICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgY29uZmlybUJ1dHRvbkNvbG9yOiAnIzMwODVkNicsXG4gICAgY2FuY2VsQnV0dG9uQ29sb3I6ICcjZDMzJyxcbiAgICBjb25maXJtQnV0dG9uVGV4dDogJ091aSwgamUgY29uZmlybWUnLFxuICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdOb24sIEFubnVsZXInLFxuICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgIH0sXG4gICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICAgICQuYWpheCh7XG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICB0eXBlOiAnREVMRVRFJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIF90b2tlbjogY3NyZlxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICBpZiAoaWQuaGFzT3duUHJvcGVydHkoJ3JlZGlyZWN0JykgJiYgaWQuaGFzT3duUHJvcGVydHkoJ3VybCcpKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gaWQudXJsXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJyNsaWduZV8nICsgaWQpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKClcbiAgICAgICAgICAgIGFkZENhbGxvdXQoJ1N1cHByZXNzaW9uIGVmZmVjdHXDqWUgYXZlYyBzdWNjw6hzJywgJ3N1Y2Nlc3MnKVxuICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdTdXBwcmltw6khJyxcbiAgICAgICAgICAgICAgdGV4dDogJ0xcXCdlbnJlZ2lzdHJlbWVudCBhIMOpdMOpIHN1cHByaW3DqS4nLFxuICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgYWpheE9wdGlvbnMsIHRocm93bkVycm9yKSB7XG4gICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgIHRpdGxlOiAnRXJyZXVyIGxvcnMgZGUgbGEgc3VwcHJlc3Npb24hJyxcbiAgICAgICAgICAgIHRleHQ6ICdNZXJjaSBkZSByZW5vdXZlbGVyIGxcXCdvcMOpcmF0aW9uJyxcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgICAgICB9KVxuICAgICAgICAgIGFkZENhbGxvdXQoJ0VycmV1ciBsb3JzIGRlIGxhIHRlbnRhdGl2ZSBkZSBzdXBwcmVzc2lvbicsICdkYW5nZXInKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgfSBlbHNlIGlmIChcbiAgICAgIC8vIFJlYWQgbW9yZSBhYm91dCBoYW5kbGluZyBkaXNtaXNzYWxzXG4gICAgICByZXN1bHQuZGlzbWlzcyA9PT0gJ2NhbmNlbCdcbiAgICApIHtcbiAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgIHRpdGxlOiAnQ2FuY2VsbGVkJyxcbiAgICAgICAgdGV4dDogJ09LISBUb3V0IGVzdCBjb21tZSBhdmFudCAhJyxcbiAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgIH0sXG4gICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG59KVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2FsbG91dCAobWVzc2FnZSwgbGFiZWwpIHtcbiAgY29uc29sZS5sb2coJ2NhbGxvdXQnKVxuICB2YXIgdHJhbnNsYXRlID0gbmV3IEFycmF5KClcbiAgdHJhbnNsYXRlWydzdWNjZXNzJ10gPSAnU3VjY8OocydcbiAgdHJhbnNsYXRlWydkYW5nZXInXSA9ICdFcnJldXInXG4gIHRyYW5zbGF0ZVsnd2FybmluZyddID0gJ0F0dGVudGlvbidcblxuICBjb25zdCBodG1sID0gJzxkaXYgY2xhc3M9XCJjYWxsb3V0IGNhbGxvdXQtJyArIGxhYmVsICsgJ1wiIHJvbGU9XCJhbGVydFwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJjYWxsb3V0XCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiZ0aW1lczs8L3NwYW4+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPGg1PicgKyB0cmFuc2xhdGVbbGFiZWxdICsgJzwvaDU+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPHA+JyArIG1lc3NhZ2UgKyAnPC9wPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgPC9kaXY+J1xuXG4gICQoJyNtYWluQ29udGVudCcpLnByZXBlbmQoaHRtbCkuc2xpZGVEb3duKCdzbG93JylcbiAgJCgnLmNhbGxvdXQnKS5kZWxheSg1MDAwKS5zbGlkZVVwKCdzbG93Jylcbn1cblxuLy9FZGl0YWJsZVxubGV0IG15RWRpdEluaXRpYWxDb250ZW50ID0gJydcblxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm15ZWRpdCcsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBteUVkaXRJbml0aWFsQ29udGVudCA9ICQodGhpcylcbiAgbGV0IGh0bWwgPSAnJ1xuICBpZiAoJCh0aGlzKS5kYXRhKCd0eXBlJykgPT09ICdzZWxlY3QnKSB7XG4gICAgLy90b2RvOiBBIGZpbmFsaXNlclxuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKCd0b3RvJylcbiAgICBodG1sID0gZ2VuZXJlSW5wdXQoJCh0aGlzKSlcbiAgfVxuICAkKHRoaXMpLnJlcGxhY2VXaXRoKGh0bWwpXG4gICQoJyNteWVkaXQtaW5wdXQnKS5mb2N1cygpXG59KVxuXG4kKGRvY3VtZW50KS5vbigna2V5dXAnLCAnI215ZWRpdC1pbnB1dCcsIGZ1bmN0aW9uIChlKSB7XG4gIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgdXBkYXRlRGF0YSgpXG4gIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI215ZWRpdC12YWxpZGUnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgdXBkYXRlRGF0YSgpXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI215ZWRpdC1hbm51bGUnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG59KVxuXG5mdW5jdGlvbiB1cGRhdGVEYXRhICgpIHtcbiAgbGV0IHZhbCA9ICQoJyNteWVkaXQtaW5wdXQnKS52YWwoKVxuICAkLmFqYXgoe1xuICAgIHVybDogbXlFZGl0SW5pdGlhbENvbnRlbnQuYXR0cignaHJlZicpLFxuICAgIGRhdGE6IHtcbiAgICAgIGZpZWxkOiBteUVkaXRJbml0aWFsQ29udGVudC5kYXRhKCdmaWVsZCcpLFxuICAgICAgdmFsdWU6IHZhbFxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgbXlFZGl0SW5pdGlhbENvbnRlbnQuaHRtbCh2YWwpXG4gICAgICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGdlbmVyZUlucHV0ICgkb2JqKSB7XG4gIGxldCAkaHRtbCA9ICc8ZGl2IGlkPVwibXlFZGl0LXpvbmVcIj48aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT1cIicgKyAkb2JqLmh0bWwoKS50cmltKCkgKyAnXCIgaWQ9XCJteWVkaXQtaW5wdXRcIiAvPidcbiAgJGh0bWwgPSAkaHRtbCArICc8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zcXVhcmUgYnRuLXNtIGJ0bi1zdWNjZXNzIGJ0bi1vdXRsaW5lXCIgaWQ9XCJteWVkaXQtdmFsaWRlXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hlY2tcIj48L2k+PC9idXR0b24+J1xuICAkaHRtbCA9ICRodG1sICsgJzxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNxdWFyZSBidG4tc20gYnRuLWRhbmdlciBidG4tb3V0bGluZVwiIGlkPVwibXllZGl0LWFubnVsZVwiPjxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPjwvYnV0dG9uPjwvZGl2PidcbiAgcmV0dXJuICRodG1sXG59XG5cbmpRdWVyeS5mbi5kYXRhQXR0ciA9IGZ1bmN0aW9uIChuYW1lLCBkZWYpIHtcbiAgcmV0dXJuICQodGhpcylbMF0uZ2V0QXR0cmlidXRlKCdkYXRhLScgKyBuYW1lKSB8fCBkZWZcbn1cblxualF1ZXJ5LmZuLmhhc0RhdGFBdHRyID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuICQodGhpcylbMF0uaGFzQXR0cmlidXRlKCdkYXRhLScgKyBuYW1lKVxufVxuXG5mdW5jdGlvbiBkYXRhVG9PcHRpb24gKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUucmVwbGFjZSgvLShbYS16XSkvZywgZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4geFsxXS50b1VwcGVyQ2FzZSgpXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhT3B0aW9ucyAoZWwsIGNhc3RMaXN0KSB7XG4gIHZhciBvcHRpb25zID0ge31cbiAgJC5lYWNoKCQoZWwpLmRhdGEoKSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcblxuICAgIGtleSA9IGRhdGFUb09wdGlvbihrZXkpXG5cbiAgICAvLyBFc2NhcGUgZGF0YS1wcm92aWRlXG4gICAgaWYgKGtleSA9PSAncHJvdmlkZScpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChjYXN0TGlzdCAhPSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciB0eXBlID0gY2FzdExpc3Rba2V5XVxuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2Jvb2wnOlxuICAgICAgICAgIHZhbHVlID0gQm9vbGVhbih2YWx1ZSlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ251bSc6XG4gICAgICAgICAgdmFsdWUgPSBOdW1iZXIodmFsdWUpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnLCcpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBkZWZhdWx0OlxuXG4gICAgICB9XG4gICAgfVxuXG4gICAgb3B0aW9uc1trZXldID0gdmFsdWVcbiAgfSlcblxuICByZXR1cm4gb3B0aW9uc1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==