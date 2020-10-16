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

/* WEBPACK VAR INJECTION */(function($) {__webpack_require__(/*! core-js/modules/es.number.to-fixed */ "./node_modules/core-js/modules/es.number.to-fixed.js");

__webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");

// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/messagerie.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 06/10/2020 15:26
$(document).on('click', '.messagerie-filtre', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $('.messagerie-filtre').parent().removeClass('active');
  $(this).parent().addClass('active');
  $('#messages-liste').empty().load(Routing.generate('messagerie_filtre', {
    'filtre': $(this).data('filtre')
  }));
});
$(document).on('click', '#modalPj', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $('#blocPj').toggle();
});
$(document).on('click', '.addFile', function (e) {
  e.preventDefault();
  e.stopPropagation();
  var $id = parseInt($(this).data('file')) + 1;
  var html = '<div class="row" id="file' + $id + '">\n' + '            <div class="col-10">\n' + '                <input type="file" name="pj' + $id + '" id="pj' + $id + '" class="form-control pjFile" placeholder="Ajouter une pièce jointe">\n' + '            </div>\n' + '            <div class="col-1">\n' + '                <button class="btn btn-block btn-success-outline addFile" data-file="' + $id + '"><i class="fa fa-plus-circle"></i></button>\n' + '            </div>\n' + '            <div class="col-1">\n' + '                <button class="btn btn-block btn-danger-outline removeFile" data-file="' + $id + '"><i class="fa\n' + '            fa-minus-circle"></i></button>\n' + '            </div>\n' + '        </div>';
  $('#blocPj').append(html);
});
$(document).on('click', '.removeFile', function (e) {
  e.preventDefault();
  e.stopPropagation();
  var $id = $(this).data('file');
  $('#file' + $id).remove();
});
$(document).on('click', '#saveDraft', function (e) {
  e.preventDefault();
  e.stopPropagation();
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
$(document).on('change', '.pjFile', function () {
  var tailleTotale = 0;
  $('input[type="file"]').each(function (file, element) {
    console.log(element.files[0]);

    if (typeof element.files[0] !== 'undefined') {
      tailleTotale += element.files[0].size;
    }
  });
  tailleTotale = tailleTotale / 1024;
  tailleTotale = tailleTotale / 1024;
  $('#poidPj').show().html('Le poid des pièces jointes est de ' + tailleTotale.toFixed(3) + ' Mo');
});
$(document).on('click', '#messageSent', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $(this).attr('disabled', true);
  $(this).text('Envoi en cours...');
  var formData = new FormData($('form')[0]);
  formData.append('message', $('.ql-editor').html());
  $.ajax({
    url: Routing.generate('messagerie_sent'),
    data: formData,
    async: false,
    cache: false,
    contentType: false,
    enctype: 'multipart/form-data',
    processData: false,
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
$(document).on('click', '.send_draft', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $('#messages-liste').empty().load(Routing.generate('messagerie_nouveau', {
    message: $(this).data('message')
  }));
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
// @lastUpdate 11/10/2020 08:04



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
  } else {
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
jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('keypress', function (e) {
  if (EditOnLine === true && e.which === 13) {
    e.preventDefault();
    updateData();
  }

  if (EditOnLine === true && e.which === 27) {
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

/***/ "./node_modules/core-js/internals/string-repeat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/string-repeat.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `String.prototype.repeat` method implementation
// https://tc39.github.io/ecma262/#sec-string.prototype.repeat
module.exports = ''.repeat || function repeat(count) {
  var str = String(requireObjectCoercible(this));
  var result = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/this-number-value.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/this-number-value.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `thisNumberValue` abstract operation
// https://tc39.github.io/ecma262/#sec-thisnumbervalue
module.exports = function (value) {
  if (typeof value != 'number' && classof(value) != 'Number') {
    throw TypeError('Incorrect invocation');
  }
  return +value;
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.number.to-fixed.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.to-fixed.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var thisNumberValue = __webpack_require__(/*! ../internals/this-number-value */ "./node_modules/core-js/internals/this-number-value.js");
var repeat = __webpack_require__(/*! ../internals/string-repeat */ "./node_modules/core-js/internals/string-repeat.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var nativeToFixed = 1.0.toFixed;
var floor = Math.floor;

var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};

var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

var FORCED = nativeToFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !fails(function () {
  // V8 ~ Android 4.3-
  nativeToFixed.call({});
});

// `Number.prototype.toFixed` method
// https://tc39.github.io/ecma262/#sec-number.prototype.tofixed
$({ target: 'Number', proto: true, forced: FORCED }, {
  // eslint-disable-next-line max-statements
  toFixed: function toFixed(fractionDigits) {
    var number = thisNumberValue(this);
    var fractDigits = toInteger(fractionDigits);
    var data = [0, 0, 0, 0, 0, 0];
    var sign = '';
    var result = '0';
    var e, z, j, k;

    var multiply = function (n, c) {
      var index = -1;
      var c2 = c;
      while (++index < 6) {
        c2 += n * data[index];
        data[index] = c2 % 1e7;
        c2 = floor(c2 / 1e7);
      }
    };

    var divide = function (n) {
      var index = 6;
      var c = 0;
      while (--index >= 0) {
        c += data[index];
        data[index] = floor(c / n);
        c = (c % n) * 1e7;
      }
    };

    var dataToString = function () {
      var index = 6;
      var s = '';
      while (--index >= 0) {
        if (s !== '' || index === 0 || data[index] !== 0) {
          var t = String(data[index]);
          s = s === '' ? t : s + repeat.call('0', 7 - t.length) + t;
        }
      } return s;
    };

    if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits');
    // eslint-disable-next-line no-self-compare
    if (number != number) return 'NaN';
    if (number <= -1e21 || number >= 1e21) return String(number);
    if (number < 0) {
      sign = '-';
      number = -number;
    }
    if (number > 1e-21) {
      e = log(number * pow(2, 69, 1)) - 69;
      z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = fractDigits;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        result = dataToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        result = dataToString() + repeat.call('0', fractDigits);
      }
    }
    if (fractDigits > 0) {
      k = result.length;
      result = sign + (k <= fractDigits
        ? '0.' + repeat.call('0', fractDigits - k) + result
        : result.slice(0, k - fractDigits) + '.' + result.slice(k - fractDigits));
    } else {
      result = sign + result;
    } return result;
  }
});


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

},[["./assets/js/pages/applications.js","runtime","vendors~absences~adm.absences~adm.alternances~adm.articles~adm.bornes~adm.configuration~adm.edt~adm.~d677a9f6","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~6af3b135","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~3a8cbb67","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~7452d955","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.groupe~adm.justificat~0d230585"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvYXBwbGljYXRpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy9tZXNzYWdlcmllLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9udW1iZXItcGFyc2UtaW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctcmVwZWF0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90aGlzLW51bWJlci12YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm51bWJlci50by1maXhlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnBhcnNlLWludC5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJlbXB0eSIsImxvYWQiLCJhdHRyIiwic2VsZWN0TWF0aWVyZSIsInNlbGVjdEdyb3VwZXMiLCJhamF4IiwidXJsIiwiUm91dGluZyIsImdlbmVyYXRlIiwic2VtZXN0cmUiLCJ2YWwiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJkYXRhIiwiYXBwZW5kIiwidGV4dCIsImpRdWVyeSIsImVhY2giLCJpbmRleCIsIm1hdGllcmUiLCJpZCIsImRpc3BsYXkiLCJlcnJvciIsImFkZENhbGxvdXQiLCJ0eXBlR3JvdXBlIiwibGliZWxsZSIsIiRsZ3IiLCIkaHRtbCIsImdyb3VwZSIsImh0bWwiLCJ0b2dnbGUiLCJwYXJlbnQiLCIkaWQiLCJwYXJzZUludCIsInJlbW92ZSIsIm1lc3NhZ2VUb1NlbWVzdHJlIiwibWVzc2FnZVRvR3JvdXBlIiwibWVzc2FnZVRvTGlicmVFdHVkaWFudCIsIm1lc3NhZ2VUb0xpYnJlUGVyc29ubmVsIiwidHlwZURlc3RpbmF0YWlyZSIsImNvcGllIiwibWVzc2FnZSIsInN1amV0IiwibWV0aG9kIiwidGFpbGxlVG90YWxlIiwiZmlsZSIsImVsZW1lbnQiLCJjb25zb2xlIiwibG9nIiwiZmlsZXMiLCJzaXplIiwic2hvdyIsInRvRml4ZWQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXN5bmMiLCJjYWNoZSIsImNvbnRlbnRUeXBlIiwiZW5jdHlwZSIsInByb2Nlc3NEYXRhIiwidmFsZXVyIiwicHJvcCIsImV0YXQiLCJ0eXBlIiwiYmxvY0Rlc3RMaWJyZUV0dWRpYW50IiwiYmxvY0Rlc3RMaWJyZVBlcnNvbm5lbCIsImJsb2NEZXN0TWVzc2dhZUluZm8iLCJibG9jRGVzdEdyb3VwZSIsImJsb2NEZXN0U2VtZXN0cmUiLCJoaWRlIiwicmVhZFVybE1lbnUiLCIkdXJsIiwiJGVsdCIsInNwbGl0IiwiJGZpcnN0RWx0IiwibGVuZ3RoIiwicG9wIiwibG9jYXRpb24iLCJTd2FsIiwibWl4aW4iLCJjdXN0b21DbGFzcyIsImNvbmZpcm1CdXR0b24iLCJjYW5jZWxCdXR0b24iLCJidXR0b25zU3R5bGluZyIsImNzcmYiLCJmaXJlIiwidGl0bGUiLCJpY29uIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25Db2xvciIsImNhbmNlbEJ1dHRvbkNvbG9yIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwidGhlbiIsInJlc3VsdCIsInZhbHVlIiwiX3Rva2VuIiwiaGFzT3duUHJvcGVydHkiLCJocmVmIiwiY2xvc2VzdCIsInhociIsImFqYXhPcHRpb25zIiwidGhyb3duRXJyb3IiLCJkaXNtaXNzIiwibGFiZWwiLCJ0cmFuc2xhdGUiLCJBcnJheSIsInByZXBlbmQiLCJzbGlkZURvd24iLCJkZWxheSIsInNsaWRlVXAiLCJteUVkaXRJbml0aWFsQ29udGVudCIsIkVkaXRPbkxpbmUiLCJnZW5lcmVJbnB1dCIsInJlcGxhY2VXaXRoIiwiZm9jdXMiLCJrZXlDb2RlIiwidXBkYXRlRGF0YSIsIndoaWNoIiwiZmllbGQiLCIkb2JqIiwidHJpbSIsImZuIiwiZGF0YUF0dHIiLCJuYW1lIiwiZGVmIiwiZ2V0QXR0cmlidXRlIiwiaGFzRGF0YUF0dHIiLCJoYXNBdHRyaWJ1dGUiLCJkYXRhVG9PcHRpb24iLCJyZXBsYWNlIiwieCIsInRvVXBwZXJDYXNlIiwiZ2V0RGF0YU9wdGlvbnMiLCJlbCIsImNhc3RMaXN0Iiwib3B0aW9ucyIsImtleSIsInVuZGVmaW5lZCIsIkJvb2xlYW4iLCJOdW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEVBQVosQ0FBZSxPQUFmLEVBQXdCLG9CQUF4QixFQUE4QyxVQUFVQyxDQUFWLEVBQWE7QUFDekRBLEdBQUMsQ0FBQ0MsY0FBRjtBQUNBRCxHQUFDLENBQUNFLGVBQUY7QUFFQUwsR0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0JNLFdBQXhCLENBQW9DLGFBQXBDO0FBQ0FOLEdBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUU8sUUFBUixDQUFpQixhQUFqQjtBQUNBUCxHQUFDLENBQUMsY0FBRCxDQUFELENBQWtCUSxLQUFsQixHQUEwQkMsSUFBMUIsQ0FBK0JULENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVUsSUFBUixDQUFhLE1BQWIsQ0FBL0I7QUFDRCxDQVBEO0FBU0FWLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEVBQVosQ0FBZSxRQUFmLEVBQXlCLGlCQUF6QixFQUE0QyxZQUFZO0FBQ3REO0FBQ0FGLEdBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JRLEtBQWxCO0FBQ0EsTUFBTUcsYUFBYSxHQUFHWCxDQUFDLENBQUMsZ0JBQUQsQ0FBdkI7QUFDQSxNQUFNWSxh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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QixDQUFDOztBQUVEO0FBQ0E7QUFDQSxHQUFHLGdEQUFnRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUM3SEQsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyw2QkFBNkIsbUJBQU8sQ0FBQywyRkFBK0I7O0FBRXBFO0FBQ0E7QUFDQSxHQUFHLDJEQUEyRDtBQUM5RDtBQUNBLENBQUMiLCJmaWxlIjoiYXBwbGljYXRpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3BhZ2VzL2FwcGxpY2F0aW9ucy5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDA2LzA5LzIwMjAgMTY6MTRcbmltcG9ydCB7YWRkQ2FsbG91dH0gZnJvbSAnLi4vdXRpbCdcbmltcG9ydCAnLi9tZXNzYWdlcmllJ1xuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNoYW5nZWFwcGxpY2F0aW9uJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGUuc3RvcFByb3BhZ2F0aW9uKClcblxuICAkKCcuY2hhbmdlYXBwbGljYXRpb24nKS5yZW1vdmVDbGFzcygnYWN0aXZlIHNob3cnKVxuICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUgc2hvdycpXG4gICQoJyNtYWluQ29udGVudCcpLmVtcHR5KCkubG9hZCgkKHRoaXMpLmF0dHIoJ2hyZWYnKSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnI3NlbGVjdHNlbWVzdHJlJywgZnVuY3Rpb24gKCkge1xuICAvL21hdGllcmVzXG4gICQoJyNsaXN0ZWdyb3VwZScpLmVtcHR5KClcbiAgY29uc3Qgc2VsZWN0TWF0aWVyZSA9ICQoJyNzZWxlY3RtYXRpZXJlJylcbiAgY29uc3Qgc2VsZWN0R3JvdXBlcyA9ICQoJyNzZWxlY3Rncm91cGVzJylcbiAgJC5hamF4KFxuICAgIHtcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYXBpX21hdGllcmVzX3NlbWVzdHJlJywge3NlbWVzdHJlOiAkKHRoaXMpLnZhbCgpfSksXG4gICAgICBkYXRhVHlwZTogXCJqc29uXCIsIC8vUmV0dXJuIGRhdGEgdHlwZSAod2hhdCB3ZSBleHBlY3QpLlxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgc2VsZWN0TWF0aWVyZS5lbXB0eSgpXG4gICAgICAgIHNlbGVjdE1hdGllcmUuYXBwZW5kKCQoJzxvcHRpb24+PC9vcHRpb24+JylcbiAgICAgICAgICAuYXR0cigndmFsdWUnLCAnJylcbiAgICAgICAgICAudGV4dCgnQ2hvaXNpciB1bmUgbWF0acOocmUnKSlcbiAgICAgICAgalF1ZXJ5LmVhY2goZGF0YSwgZnVuY3Rpb24gKGluZGV4LCBtYXRpZXJlKSB7XG4gICAgICAgICAgc2VsZWN0TWF0aWVyZS5hcHBlbmQoJCgnPG9wdGlvbj48L29wdGlvbj4nKVxuICAgICAgICAgICAgLmF0dHIoJ3ZhbHVlJywgbWF0aWVyZS5pZClcbiAgICAgICAgICAgIC50ZXh0KG1hdGllcmUuZGlzcGxheSkpXG4gICAgICAgIH0pXG4gICAgICAgIHNlbGVjdE1hdGllcmUuYXR0cignZGF0YS1wcm92aWRlJywgJ3NlbGVjdHBpY2tlcicpXG4gICAgICAgIHNlbGVjdE1hdGllcmUuYXR0cignZGF0YS1saXZlLXNlYXJjaCcsICd0cnVlJylcbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBhZGRDYWxsb3V0KCdFcnJldXIgbG9ycyBkZSBsYSB0ZW50YXRpdmUgZFxcJ2FmZmljaGFnZSBkZXMgbWF0acOocmVzIGR1IHNlbWVzdHJlcy4gVmV1aWxsZXogY29udGFjdGVyIGxlIHJlc3BvbnNhYmxlIGRlIGxcXCdpbnRyYW5ldCBzaSBsZSBwcm9ibMOobWUgcGVyc2lzdGUgIScsICdkYW5nZXInKVxuICAgICAgfVxuICAgIH0pXG4gIC8vZ3JvdXBlc1xuICAkLmFqYXgoXG4gICAge1xuICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcGlfdHlwZV9ncm91cGVfc2VtZXN0cmUnLCB7c2VtZXN0cmU6ICQodGhpcykudmFsKCl9KSxcblxuICAgICAgZGF0YVR5cGU6IFwianNvblwiLCAvL1JldHVybiBkYXRhIHR5cGUgKHdoYXQgd2UgZXhwZWN0KS5cbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHNlbGVjdEdyb3VwZXMuZW1wdHkoKVxuICAgICAgICBzZWxlY3RHcm91cGVzLmFwcGVuZCgkKCc8b3B0aW9uPjwvb3B0aW9uPicpXG4gICAgICAgICAgLmF0dHIoJ3ZhbHVlJywgJycpXG4gICAgICAgICAgLnRleHQoJ0Nob2lzaXIgdW4gdHlwZSBkZSBncm91cGUnKSlcbiAgICAgICAgalF1ZXJ5LmVhY2goZGF0YSwgZnVuY3Rpb24gKGluZGV4LCB0eXBlR3JvdXBlKSB7XG5cbiAgICAgICAgICBzZWxlY3RHcm91cGVzLmFwcGVuZCgkKCc8b3B0aW9uPjwvb3B0aW9uPicpXG4gICAgICAgICAgICAuYXR0cigndmFsdWUnLCB0eXBlR3JvdXBlLmlkKVxuICAgICAgICAgICAgLnRleHQodHlwZUdyb3VwZS5saWJlbGxlKSlcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBhZGRDYWxsb3V0KCdFcnJldXIgbG9ycyBkZSBsYSB0ZW50YXRpdmUgZFxcJ2FmZmljaGFnZSBkZXMgZ3JvdXBlcyBkdSBzZW1lc3RyZXMuIFZldWlsbGV6IGNvbnRhY3RlciBsZSByZXNwb25zYWJsZSBkZSBsXFwnaW50cmFuZXQgc2kgbGUgcHJvYmzDqG1lIHBlcnNpc3RlICEnLCAnZGFuZ2VyJylcbiAgICAgIH1cbiAgICB9KVxufSlcblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcjc2VsZWN0Z3JvdXBlcycsIGZ1bmN0aW9uICgpIHtcblxuICBjb25zdCAkbGdyID0gJCgnI2xpc3RlZ3JvdXBlJylcbiAgLy9tYXRpZXJlc1xuICAkLmFqYXgoXG4gICAge1xuICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcGlfZ3JvdXBlX3R5cGVfZ3JvdXBlJywge3R5cGVHcm91cGU6ICQodGhpcykudmFsKCl9KSxcbiAgICAgIGRhdGFUeXBlOiBcImpzb25cIiwgLy9SZXR1cm4gZGF0YSB0eXBlICh3aGF0IHdlIGV4cGVjdCkuXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAkbGdyLmVtcHR5KClcbiAgICAgICAgbGV0ICRodG1sID0gJydcbiAgICAgICAgalF1ZXJ5LmVhY2goZGF0YSwgZnVuY3Rpb24gKGluZGV4LCBncm91cGUpIHtcbiAgICAgICAgICAkaHRtbCArPSAnPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQgbmFtZT1cImRldGFpbF9ncm91cGVzW11cIiB2YWx1ZT1cIicgKyBncm91cGUuaWQgKyAnXCI+ICcgKyBncm91cGUubGliZWxsZSArICcgfCAnXG4gICAgICAgIH0pXG4gICAgICAgICRsZ3IuaHRtbCgkaHRtbClcbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBhZGRDYWxsb3V0KCdFcnJldXIgbG9ycyBkZSBsYSB0ZW50YXRpdmUgZFxcJ2FmZmljaGFnZSBkZXMgZ3JvdXBlcyBkdSBzZW1lc3RyZXMuIFZldWlsbGV6IGNvbnRhY3RlciBsZSByZXNwb25zYWJsZSBkZSBsXFwnaW50cmFuZXQgc2kgbGUgcHJvYmzDqG1lIHBlcnNpc3RlICEnLCAnZGFuZ2VyJylcbiAgICAgIH1cbiAgICB9KVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywnI2FkZF9yYXR0cmFwYWdlJywgZnVuY3Rpb24oKXtcbiAgJCgnI2Jsb2NfYWRkX3JhdHRyYXBhZ2UnKS50b2dnbGUoKVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywnI2FkZF9jYXJuZXQnLCBmdW5jdGlvbigpe1xuICAkKCcjYmxvY19hZGRfY2FybmV0JykudG9nZ2xlKClcbn0pXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvcGFnZXMvbWVzc2FnZXJpZS5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDA2LzEwLzIwMjAgMTU6MjZcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5tZXNzYWdlcmllLWZpbHRyZScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICQoJy5tZXNzYWdlcmllLWZpbHRyZScpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdhY3RpdmUnKVxuICAkKCcjbWVzc2FnZXMtbGlzdGUnKS5lbXB0eSgpLmxvYWQoUm91dGluZy5nZW5lcmF0ZSgnbWVzc2FnZXJpZV9maWx0cmUnLCB7J2ZpbHRyZSc6ICQodGhpcykuZGF0YSgnZmlsdHJlJyl9KSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbW9kYWxQaicsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICQoJyNibG9jUGonKS50b2dnbGUoKVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5hZGRGaWxlJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgbGV0ICRpZCA9IHBhcnNlSW50KCQodGhpcykuZGF0YSgnZmlsZScpKSArIDFcbiAgbGV0IGh0bWwgPSAnPGRpdiBjbGFzcz1cInJvd1wiIGlkPVwiZmlsZScgKyAkaWQgKyAnXCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTBcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJwaicgKyAkaWQgKyAnXCIgaWQ9XCJwaicgKyAkaWQgKyAnXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgcGpGaWxlXCIgcGxhY2Vob2xkZXI9XCJBam91dGVyIHVuZSBwacOoY2Ugam9pbnRlXCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgIDwvZGl2PlxcbicgK1xuICAgICcgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWJsb2NrIGJ0bi1zdWNjZXNzLW91dGxpbmUgYWRkRmlsZVwiIGRhdGEtZmlsZT1cIicgKyAkaWQgKyAnXCI+PGkgY2xhc3M9XCJmYSBmYS1wbHVzLWNpcmNsZVwiPjwvaT48L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tYmxvY2sgYnRuLWRhbmdlci1vdXRsaW5lIHJlbW92ZUZpbGVcIiBkYXRhLWZpbGU9XCInICsgJGlkICsgJ1wiPjxpIGNsYXNzPVwiZmFcXG4nICtcbiAgICAnICAgICAgICAgICAgZmEtbWludXMtY2lyY2xlXCI+PC9pPjwvYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgICAgICA8L2Rpdj5cXG4nICtcbiAgICAnICAgICAgICA8L2Rpdj4nXG5cbiAgJCgnI2Jsb2NQaicpLmFwcGVuZChodG1sKVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5yZW1vdmVGaWxlJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgbGV0ICRpZCA9ICQodGhpcykuZGF0YSgnZmlsZScpXG4gICQoJyNmaWxlJyArICRpZCkucmVtb3ZlKClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjc2F2ZURyYWZ0JywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ21lc3NhZ2VyaWVfZHJhZnQnKSxcbiAgICBkYXRhOiB7XG4gICAgICBtZXNzYWdlVG9TZW1lc3RyZTogJCgnI21lc3NhZ2VUb1NlbWVzdHJlJykudmFsKCksXG4gICAgICBtZXNzYWdlVG9Hcm91cGU6ICQoJyNtZXNzYWdlVG9Hcm91cGUnKS52YWwoKSxcbiAgICAgIG1lc3NhZ2VUb0xpYnJlRXR1ZGlhbnQ6ICQoJyNtZXNzYWdlVG9MaWJyZUV0dWRpYW50JykudmFsKCksXG4gICAgICBtZXNzYWdlVG9MaWJyZVBlcnNvbm5lbDogJCgnI21lc3NhZ2VUb0xpYnJlUGVyc29ubmVsJykudmFsKCksXG4gICAgICB0eXBlRGVzdGluYXRhaXJlOiAkKCdpbnB1dFt0eXBlPXJhZGlvXVtuYW1lPW1lc3NhZ2VEZXN0aW5hdGFpcmVUeXBlXTpjaGVja2VkJykudmFsKCksXG4gICAgICBjb3BpZTogJCgnI21lc3NhZ2VDb3B5JykudmFsKCksXG4gICAgICBtZXNzYWdlOiAkKCcucWwtZWRpdG9yJykuaHRtbCgpLFxuICAgICAgc3VqZXQ6ICQoJyNtZXNzYWdlU3ViamVjdCcpLnZhbCgpXG4gICAgfSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgJCgnI21lc3NhZ2VzLWxpc3RlJykuZW1wdHkoKS5sb2FkKFJvdXRpbmcuZ2VuZXJhdGUoJ21lc3NhZ2VyaWVfZmlsdHJlJywgeydmaWx0cmUnOiAnZHJhZnQnfSkpXG4gICAgfVxuICB9KVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5tZXNzYWdlLXJlYWQnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgZS5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICQoJyNtZXNzYWdlcy1saXN0ZScpLmVtcHR5KCkubG9hZChSb3V0aW5nLmdlbmVyYXRlKCdtZXNzYWdlcmllX21lc3NhZ2UnLCB7bWVzc2FnZTogJCh0aGlzKS5kYXRhKCdtZXNzYWdlJyl9KSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubWVzc2FnZS1yZWFkLWF1dGV1cicsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBlLnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgJCgnI21lc3NhZ2VzLWxpc3RlJykuZW1wdHkoKS5sb2FkKFJvdXRpbmcuZ2VuZXJhdGUoJ21lc3NhZ2VyaWVfbWVzc2FnZV9lbnZveWUnLCB7bWVzc2FnZTogJCh0aGlzKS5kYXRhKCdtZXNzYWdlJyl9KSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbmV3LW1lc3NhZ2UnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgZS5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICQoJyNtZXNzYWdlcy1saXN0ZScpLmVtcHR5KCkubG9hZChSb3V0aW5nLmdlbmVyYXRlKCdtZXNzYWdlcmllX25vdXZlYXUnKSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbWFycXVlck5vdGlmaWNhdGlvbnNSZWFkJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGUuc3RvcFByb3BhZ2F0aW9uKClcblxuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnbm90aWZpY2F0aW9uX21hcnF1ZXJfbHUnKSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZSkge1xuXG4gICAgICAkKCcubm90aWZpY2F0aW9uJykucmVtb3ZlQ2xhc3MoJ21lZGlhLW5ldycpXG4gICAgfVxuICB9KVxufSlcblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcucGpGaWxlJywgZnVuY3Rpb24gKCkge1xuICBsZXQgdGFpbGxlVG90YWxlID0gMFxuICAkKCdpbnB1dFt0eXBlPVwiZmlsZVwiXScpLmVhY2goZnVuY3Rpb24gKGZpbGUsIGVsZW1lbnQpIHtcbiAgICBjb25zb2xlLmxvZyhlbGVtZW50LmZpbGVzWzBdKVxuICAgIGlmICh0eXBlb2YgZWxlbWVudC5maWxlc1swXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRhaWxsZVRvdGFsZSArPSBlbGVtZW50LmZpbGVzWzBdLnNpemVcbiAgICB9XG4gIH0pXG4gIHRhaWxsZVRvdGFsZSA9IHRhaWxsZVRvdGFsZSAvIDEwMjRcbiAgdGFpbGxlVG90YWxlID0gdGFpbGxlVG90YWxlIC8gMTAyNFxuICAkKCcjcG9pZFBqJykuc2hvdygpLmh0bWwoJ0xlIHBvaWQgZGVzIHBpw6hjZXMgam9pbnRlcyBlc3QgZGUgJyArIHRhaWxsZVRvdGFsZS50b0ZpeGVkKDMpICsgJyBNbycpXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI21lc3NhZ2VTZW50JywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgJCh0aGlzKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpXG4gICQodGhpcykudGV4dCgnRW52b2kgZW4gY291cnMuLi4nKVxuXG4gIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkKCdmb3JtJylbMF0pXG4gIGZvcm1EYXRhLmFwcGVuZCgnbWVzc2FnZScsICQoJy5xbC1lZGl0b3InKS5odG1sKCkpXG5cbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ21lc3NhZ2VyaWVfc2VudCcpLFxuICAgIGRhdGE6IGZvcm1EYXRhLFxuICAgIGFzeW5jOiBmYWxzZSxcbiAgICBjYWNoZTogZmFsc2UsXG4gICAgY29udGVudFR5cGU6IGZhbHNlLFxuICAgIGVuY3R5cGU6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyxcbiAgICBwcm9jZXNzRGF0YTogZmFsc2UsXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICQoJyNtZXNzYWdlcy1saXN0ZScpLmVtcHR5KCkubG9hZChSb3V0aW5nLmdlbmVyYXRlKCdtZXNzYWdlcmllX21lc3NhZ2VfZW52b3llJywge21lc3NhZ2U6IGRhdGEubWVzc2FnZX0pKVxuICAgICAgJCgnI21lc3NhZ2VTZW50JykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSlcbiAgICAgICQodGhpcykudGV4dCgnRW52b3llcicpXG4gICAgfVxuICB9KVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5zZW5kX2RyYWZ0JywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgJCgnI21lc3NhZ2VzLWxpc3RlJykuZW1wdHkoKS5sb2FkKFJvdXRpbmcuZ2VuZXJhdGUoJ21lc3NhZ2VyaWVfbm91dmVhdScsIHttZXNzYWdlOiAkKHRoaXMpLmRhdGEoJ21lc3NhZ2UnKX0pKVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5zdGFycmVkJywgZnVuY3Rpb24gKCkge1xuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnbWVzc2FnZXJpZV9jaGFuZ2VfZXRhdCcpLFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGRhdGE6IHtcbiAgICAgIHZhbGV1cjogJ1MnLFxuICAgICAgbWVzc2FnZTogJCh0aGlzKS5kYXRhKCdtZXNzYWdlJylcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbiAoKSB7XG4gICAgICAkKHRoaXMpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSlcbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2RlbGV0ZU1lc3NhZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdtZXNzYWdlcmllX2NoYW5nZV9ldGF0JyksXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgZGF0YToge1xuICAgICAgZXRhdDogJ0QnLFxuICAgICAgbWVzc2FnZTogJCh0aGlzKS5kYXRhKCdtZXNzYWdlJylcbiAgICB9LFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICQoJyNtZXNzYWdlcy1saXN0ZScpLmVtcHR5KCkubG9hZChSb3V0aW5nLmdlbmVyYXRlKCdtZXNzYWdlcmllX2ZpbHRyZScsIHsnZmlsdHJlJzogJ2FsbCd9KSlcbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm1lc3NhZ2VEZXN0aW5hdGFpcmVUeXBlJywgZnVuY3Rpb24gKCkge1xuICBjb25zdCB0eXBlID0gJCh0aGlzKS52YWwoKVxuICBjb25zdCBibG9jRGVzdExpYnJlRXR1ZGlhbnQgPSAkKCcjYmxvY0Rlc3RMaWJyZUV0dWRpYW50JylcbiAgY29uc3QgYmxvY0Rlc3RMaWJyZVBlcnNvbm5lbCA9ICQoJyNibG9jRGVzdExpYnJlUGVyc29ubmVsJylcbiAgY29uc3QgYmxvY0Rlc3RNZXNzZ2FlSW5mbyA9ICQoJyNibG9jRGVzdE1lc3NnYWVJbmZvJylcbiAgY29uc3QgYmxvY0Rlc3RHcm91cGUgPSAkKCcjYmxvY0Rlc3RHcm91cGUnKVxuICBjb25zdCBibG9jRGVzdFNlbWVzdHJlID0gJCgnI2Jsb2NEZXN0U2VtZXN0cmUnKVxuXG4gIGlmICh0eXBlID09PSAnZScpe1xuICAgIGJsb2NEZXN0TGlicmVFdHVkaWFudC5zaG93KClcbiAgICBibG9jRGVzdExpYnJlUGVyc29ubmVsLmhpZGUoKVxuICAgIGJsb2NEZXN0TWVzc2dhZUluZm8uaGlkZSgpXG4gICAgYmxvY0Rlc3RHcm91cGUuaGlkZSgpXG4gICAgYmxvY0Rlc3RTZW1lc3RyZS5oaWRlKClcbiAgfSBlbHNlIGlmICh0eXBlID09PSAncycpe1xuICAgIGJsb2NEZXN0TGlicmVFdHVkaWFudC5oaWRlKClcbiAgICBibG9jRGVzdExpYnJlUGVyc29ubmVsLmhpZGUoKVxuICAgIGJsb2NEZXN0TWVzc2dhZUluZm8uaGlkZSgpXG4gICAgYmxvY0Rlc3RHcm91cGUuaGlkZSgpXG4gICAgYmxvY0Rlc3RTZW1lc3RyZS5zaG93KClcbiAgfWVsc2UgaWYgKHR5cGUgPT09ICdnJyl7XG4gICAgYmxvY0Rlc3RMaWJyZUV0dWRpYW50LmhpZGUoKVxuICAgIGJsb2NEZXN0TGlicmVQZXJzb25uZWwuaGlkZSgpXG4gICAgYmxvY0Rlc3RNZXNzZ2FlSW5mby5oaWRlKClcbiAgICBibG9jRGVzdEdyb3VwZS5zaG93KClcbiAgICBibG9jRGVzdFNlbWVzdHJlLmhpZGUoKVxuICB9ZWxzZSBpZiAodHlwZSA9PT0gJ3AnKXtcbiAgICBibG9jRGVzdExpYnJlRXR1ZGlhbnQuaGlkZSgpXG4gICAgYmxvY0Rlc3RMaWJyZVBlcnNvbm5lbC5zaG93KClcbiAgICBibG9jRGVzdE1lc3NnYWVJbmZvLmhpZGUoKVxuICAgIGJsb2NEZXN0R3JvdXBlLmhpZGUoKVxuICAgIGJsb2NEZXN0U2VtZXN0cmUuaGlkZSgpXG4gIH1cbn0pXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvdXRpbC5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDExLzEwLzIwMjAgMDg6MDRcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXG5cbmZ1bmN0aW9uIHJlYWRVcmxNZW51ICgkdXJsKSB7XG4gIGNvbnN0ICRlbHQgPSAkdXJsLnNwbGl0KCcvJylcbiAgbGV0ICRmaXJzdEVsdCA9IDJcbiAgaWYgKCRlbHRbMV0gPT09ICdpbmRleC5waHAnKSB7XG4gICAgaWYgKCRlbHQubGVuZ3RoID4gMSkge1xuICAgICAgJGZpcnN0RWx0ID0gM1xuICAgIH1cbiAgfVxuXG4gIGlmICgkZWx0WyRmaXJzdEVsdF0gPT09ICdzdXBlci1hZG1pbmlzdHJhdGlvbicpIHtcbiAgICAkZmlyc3RFbHQgPSAkZmlyc3RFbHQgKyAxXG4gIH1cblxuICBpZiAoJGVsdFskZWx0Lmxlbmd0aCAtIDFdID09PSAnJykge1xuICAgICRlbHQucG9wKClcbiAgfVxuXG4gICQoJy5tZW51LWl0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgJCgnI21lbnUtJyArICRlbHRbJGZpcnN0RWx0XSkuYWRkQ2xhc3MoJ2FjdGl2ZScpXG59XG5cbi8vY29sb3Jpc2UgbGUgYm9uIG1lbnVcbnJlYWRVcmxNZW51KCQobG9jYXRpb24pLmF0dHIoJ3BhdGhuYW1lJykpXG5cblN3YWwubWl4aW4oe1xuICBjdXN0b21DbGFzczoge1xuICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICB9LFxuICBidXR0b25zU3R5bGluZzogZmFsc2Vcbn0pXG4vL3BvcCB1cCBkZSBjb25maXJtYXRpb24gZGUgc3VwcHJlc3Npb25cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuc3VwcHJpbWVyJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IHVybCA9ICQodGhpcykuYXR0cignaHJlZicpXG4gIGNvbnN0IGNzcmYgPSAkKHRoaXMpLmRhdGEoJ2NzcmYnKVxuICBTd2FsLmZpcmUoe1xuICAgIHRpdGxlOiAnQ29uZmlybWVyIGxhIHN1cHByZXNzaW9uID8nLFxuICAgIHRleHQ6ICdMXFwnb3DDqXJhdGlvbiBuZSBwb3VycmEgcGFzIMOqdHJlIGFubnVsw6llLicsXG4gICAgaWNvbjogJ3dhcm5pbmcnLFxuICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgY29uZmlybUJ1dHRvbkNvbG9yOiAnIzMwODVkNicsXG4gICAgY2FuY2VsQnV0dG9uQ29sb3I6ICcjZDMzJyxcbiAgICBjb25maXJtQnV0dG9uVGV4dDogJ091aSwgamUgY29uZmlybWUnLFxuICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdOb24sIEFubnVsZXInLFxuICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgIH0sXG4gICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICAgICQuYWpheCh7XG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICB0eXBlOiAnREVMRVRFJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIF90b2tlbjogY3NyZlxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICBpZiAoaWQuaGFzT3duUHJvcGVydHkoJ3JlZGlyZWN0JykgJiYgaWQuaGFzT3duUHJvcGVydHkoJ3VybCcpKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gaWQudXJsXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vdC5yb3coXCIjbGlnbmVfXCIraWQpLnJlbW92ZSgpLmRyYXcoKTsgPTwgZGF0YXR0YWJsZSB0b2RvOiByZW1vdmUgbGlnbmUgc2kgZGF0YXRhYmxlID8/IHByb2Jsw6htZSBkYW5zIGFkbT5wZXJzb25uZWxcbiAgICAgICAgICAgICQoJyNsaWduZV8nICsgaWQpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKClcbiAgICAgICAgICAgIGFkZENhbGxvdXQoJ1N1cHByZXNzaW9uIGVmZmVjdHXDqWUgYXZlYyBzdWNjw6hzJywgJ3N1Y2Nlc3MnKVxuICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdTdXBwcmltw6khJyxcbiAgICAgICAgICAgICAgdGV4dDogJ0xcXCdlbnJlZ2lzdHJlbWVudCBhIMOpdMOpIHN1cHByaW3DqS4nLFxuICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgYWpheE9wdGlvbnMsIHRocm93bkVycm9yKSB7XG4gICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgIHRpdGxlOiAnRXJyZXVyIGxvcnMgZGUgbGEgc3VwcHJlc3Npb24hJyxcbiAgICAgICAgICAgIHRleHQ6ICdNZXJjaSBkZSByZW5vdXZlbGVyIGxcXCdvcMOpcmF0aW9uJyxcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgICAgICB9KVxuICAgICAgICAgIGFkZENhbGxvdXQoJ0VycmV1ciBsb3JzIGRlIGxhIHRlbnRhdGl2ZSBkZSBzdXBwcmVzc2lvbicsICdkYW5nZXInKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgfSBlbHNlIGlmIChcbiAgICAgIC8vIFJlYWQgbW9yZSBhYm91dCBoYW5kbGluZyBkaXNtaXNzYWxzXG4gICAgICByZXN1bHQuZGlzbWlzcyA9PT0gJ2NhbmNlbCdcbiAgICApIHtcbiAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgIHRpdGxlOiAnQ2FuY2VsbGVkJyxcbiAgICAgICAgdGV4dDogJ09LISBUb3V0IGVzdCBjb21tZSBhdmFudCAhJyxcbiAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgIH0sXG4gICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG59KVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2FsbG91dCAobWVzc2FnZSwgbGFiZWwpIHtcbiAgY29uc29sZS5sb2coJ2NhbGxvdXQnKVxuICB2YXIgdHJhbnNsYXRlID0gbmV3IEFycmF5KClcbiAgdHJhbnNsYXRlWydzdWNjZXNzJ10gPSAnU3VjY8OocydcbiAgdHJhbnNsYXRlWydkYW5nZXInXSA9ICdFcnJldXInXG4gIHRyYW5zbGF0ZVsnd2FybmluZyddID0gJ0F0dGVudGlvbidcblxuICBjb25zdCBodG1sID0gJzxkaXYgY2xhc3M9XCJjYWxsb3V0IGNhbGxvdXQtJyArIGxhYmVsICsgJ1wiIHJvbGU9XCJhbGVydFwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJjYWxsb3V0XCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiZ0aW1lczs8L3NwYW4+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPGg1PicgKyB0cmFuc2xhdGVbbGFiZWxdICsgJzwvaDU+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPHA+JyArIG1lc3NhZ2UgKyAnPC9wPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgPC9kaXY+J1xuXG4gICQoJyNtYWluQ29udGVudCcpLnByZXBlbmQoaHRtbCkuc2xpZGVEb3duKCdzbG93JylcbiAgJCgnLmNhbGxvdXQnKS5kZWxheSg1MDAwKS5zbGlkZVVwKCdzbG93Jylcbn1cblxuLy9FZGl0YWJsZVxubGV0IG15RWRpdEluaXRpYWxDb250ZW50ID0gJydcbmxldCB0eXBlID0gJ3RleHQnXG5sZXQgRWRpdE9uTGluZSA9IGZhbHNlXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubXllZGl0JywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIG15RWRpdEluaXRpYWxDb250ZW50ID0gJCh0aGlzKVxuICBsZXQgaHRtbCA9ICcnXG4gIEVkaXRPbkxpbmUgPSB0cnVlXG4gIGlmICh0eXBlb2YgKCQodGhpcykuZGF0YSgndHlwZScpKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0eXBlID0gJCh0aGlzKS5kYXRhKCd0eXBlJylcbiAgfVxuXG4gIGlmICgkKHRoaXMpLmRhdGEoJ3R5cGUnKSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAvL3RvZG86IEEgZmluYWxpc2VyXG4gIH0gZWxzZSB7XG4gICAgaHRtbCA9IGdlbmVyZUlucHV0KCQodGhpcykpXG4gIH1cbiAgJCh0aGlzKS5yZXBsYWNlV2l0aChodG1sKVxuICAkKCcjbXllZGl0LWlucHV0JykuZm9jdXMoKVxufSlcblxuJChkb2N1bWVudCkub24oJ2tleXVwJywgJyNteWVkaXQtaW5wdXQnLCBmdW5jdGlvbiAoZSkge1xuICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgIHVwZGF0ZURhdGEoKVxuICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbiAgfVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNteWVkaXQtdmFsaWRlJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIHVwZGF0ZURhdGEoKVxufSlcblxuJChkb2N1bWVudCkub24oJ2tleXByZXNzJywgZnVuY3Rpb24gKGUpIHtcbiAgaWYgKEVkaXRPbkxpbmUgPT09IHRydWUgJiYgZS53aGljaCA9PT0gMTMpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB1cGRhdGVEYXRhKClcbiAgfVxuXG4gIGlmIChFZGl0T25MaW5lID09PSB0cnVlICYmIGUud2hpY2ggPT09IDI3KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG4gIH1cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbXllZGl0LWFubnVsZScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbn0pXG5cbmZ1bmN0aW9uIHVwZGF0ZURhdGEgKCkge1xuICBsZXQgdmFsID0gJCgnI215ZWRpdC1pbnB1dCcpLnZhbCgpXG4gICQuYWpheCh7XG4gICAgdXJsOiBteUVkaXRJbml0aWFsQ29udGVudC5hdHRyKCdocmVmJyksXG4gICAgZGF0YToge1xuICAgICAgZmllbGQ6IG15RWRpdEluaXRpYWxDb250ZW50LmRhdGEoJ2ZpZWxkJyksXG4gICAgICB2YWx1ZTogdmFsLFxuICAgICAgdHlwZTogdHlwZVxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgbXlFZGl0SW5pdGlhbENvbnRlbnQuaHRtbCh2YWwpXG4gICAgICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbiAgICAgIEVkaXRPbkxpbmUgPSBmYWxzZVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gZ2VuZXJlSW5wdXQgKCRvYmopIHtcbiAgbGV0ICRodG1sID0gJzxkaXYgaWQ9XCJteUVkaXQtem9uZVwiPjxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPVwiJyArICRvYmouaHRtbCgpLnRyaW0oKSArICdcIiBpZD1cIm15ZWRpdC1pbnB1dFwiIC8+J1xuICAkaHRtbCA9ICRodG1sICsgJzxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNxdWFyZSBidG4tc20gYnRuLXN1Y2Nlc3MgYnRuLW91dGxpbmVcIiBpZD1cIm15ZWRpdC12YWxpZGVcIj48aSBjbGFzcz1cImZhcyBmYS1jaGVja1wiPjwvaT48L2J1dHRvbj4nXG4gICRodG1sID0gJGh0bWwgKyAnPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3F1YXJlIGJ0bi1zbSBidG4tZGFuZ2VyIGJ0bi1vdXRsaW5lXCIgaWQ9XCJteWVkaXQtYW5udWxlXCI+PGkgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+PC9idXR0b24+PC9kaXY+J1xuICByZXR1cm4gJGh0bWxcbn1cblxualF1ZXJ5LmZuLmRhdGFBdHRyID0gZnVuY3Rpb24gKG5hbWUsIGRlZikge1xuICByZXR1cm4gJCh0aGlzKVswXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtJyArIG5hbWUpIHx8IGRlZlxufVxuXG5qUXVlcnkuZm4uaGFzRGF0YUF0dHIgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gJCh0aGlzKVswXS5oYXNBdHRyaWJ1dGUoJ2RhdGEtJyArIG5hbWUpXG59XG5cbmZ1bmN0aW9uIGRhdGFUb09wdGlvbiAobmFtZSkge1xuICByZXR1cm4gbmFtZS5yZXBsYWNlKC8tKFthLXpdKS9nLCBmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiB4WzFdLnRvVXBwZXJDYXNlKClcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGFPcHRpb25zIChlbCwgY2FzdExpc3QpIHtcbiAgdmFyIG9wdGlvbnMgPSB7fVxuICAkLmVhY2goJChlbCkuZGF0YSgpLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuXG4gICAga2V5ID0gZGF0YVRvT3B0aW9uKGtleSlcblxuICAgIC8vIEVzY2FwZSBkYXRhLXByb3ZpZGVcbiAgICBpZiAoa2V5ID09ICdwcm92aWRlJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGNhc3RMaXN0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHR5cGUgPSBjYXN0TGlzdFtrZXldXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYm9vbCc6XG4gICAgICAgICAgdmFsdWUgPSBCb29sZWFuKHZhbHVlKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAnbnVtJzpcbiAgICAgICAgICB2YWx1ZSA9IE51bWJlcih2YWx1ZSlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnNwbGl0KCcsJylcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGRlZmF1bHQ6XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBvcHRpb25zW2tleV0gPSB2YWx1ZVxuICB9KVxuXG4gIHJldHVybiBvcHRpb25zXG59XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHRyaW0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0nKS50cmltO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciAkcGFyc2VJbnQgPSBnbG9iYWwucGFyc2VJbnQ7XG52YXIgaGV4ID0gL15bKy1dPzBbWHhdLztcbnZhciBGT1JDRUQgPSAkcGFyc2VJbnQod2hpdGVzcGFjZXMgKyAnMDgnKSAhPT0gOCB8fCAkcGFyc2VJbnQod2hpdGVzcGFjZXMgKyAnMHgxNicpICE9PSAyMjtcblxuLy8gYHBhcnNlSW50YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXBhcnNlaW50LXN0cmluZy1yYWRpeFxubW9kdWxlLmV4cG9ydHMgPSBGT1JDRUQgPyBmdW5jdGlvbiBwYXJzZUludChzdHJpbmcsIHJhZGl4KSB7XG4gIHZhciBTID0gdHJpbShTdHJpbmcoc3RyaW5nKSk7XG4gIHJldHVybiAkcGFyc2VJbnQoUywgKHJhZGl4ID4+PiAwKSB8fCAoaGV4LnRlc3QoUykgPyAxNiA6IDEwKSk7XG59IDogJHBhcnNlSW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyJyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUucmVwZWF0YCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUucmVwZWF0XG5tb2R1bGUuZXhwb3J0cyA9ICcnLnJlcGVhdCB8fCBmdW5jdGlvbiByZXBlYXQoY291bnQpIHtcbiAgdmFyIHN0ciA9IFN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpKTtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuICB2YXIgbiA9IHRvSW50ZWdlcihjb3VudCk7XG4gIGlmIChuIDwgMCB8fCBuID09IEluZmluaXR5KSB0aHJvdyBSYW5nZUVycm9yKCdXcm9uZyBudW1iZXIgb2YgcmVwZXRpdGlvbnMnKTtcbiAgZm9yICg7biA+IDA7IChuID4+Pj0gMSkgJiYgKHN0ciArPSBzdHIpKSBpZiAobiAmIDEpIHJlc3VsdCArPSBzdHI7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxuLy8gYHRoaXNOdW1iZXJWYWx1ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10aGlzbnVtYmVydmFsdWVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ251bWJlcicgJiYgY2xhc3NvZih2YWx1ZSkgIT0gJ051bWJlcicpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ0luY29ycmVjdCBpbnZvY2F0aW9uJyk7XG4gIH1cbiAgcmV0dXJuICt2YWx1ZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlcicpO1xudmFyIHRoaXNOdW1iZXJWYWx1ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90aGlzLW51bWJlci12YWx1ZScpO1xudmFyIHJlcGVhdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctcmVwZWF0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxudmFyIG5hdGl2ZVRvRml4ZWQgPSAxLjAudG9GaXhlZDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5cbnZhciBwb3cgPSBmdW5jdGlvbiAoeCwgbiwgYWNjKSB7XG4gIHJldHVybiBuID09PSAwID8gYWNjIDogbiAlIDIgPT09IDEgPyBwb3coeCwgbiAtIDEsIGFjYyAqIHgpIDogcG93KHggKiB4LCBuIC8gMiwgYWNjKTtcbn07XG5cbnZhciBsb2cgPSBmdW5jdGlvbiAoeCkge1xuICB2YXIgbiA9IDA7XG4gIHZhciB4MiA9IHg7XG4gIHdoaWxlICh4MiA+PSA0MDk2KSB7XG4gICAgbiArPSAxMjtcbiAgICB4MiAvPSA0MDk2O1xuICB9XG4gIHdoaWxlICh4MiA+PSAyKSB7XG4gICAgbiArPSAxO1xuICAgIHgyIC89IDI7XG4gIH0gcmV0dXJuIG47XG59O1xuXG52YXIgRk9SQ0VEID0gbmF0aXZlVG9GaXhlZCAmJiAoXG4gIDAuMDAwMDgudG9GaXhlZCgzKSAhPT0gJzAuMDAwJyB8fFxuICAwLjkudG9GaXhlZCgwKSAhPT0gJzEnIHx8XG4gIDEuMjU1LnRvRml4ZWQoMikgIT09ICcxLjI1JyB8fFxuICAxMDAwMDAwMDAwMDAwMDAwMTI4LjAudG9GaXhlZCgwKSAhPT0gJzEwMDAwMDAwMDAwMDAwMDAxMjgnXG4pIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIFY4IH4gQW5kcm9pZCA0LjMtXG4gIG5hdGl2ZVRvRml4ZWQuY2FsbCh7fSk7XG59KTtcblxuLy8gYE51bWJlci5wcm90b3R5cGUudG9GaXhlZGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1udW1iZXIucHJvdG90eXBlLnRvZml4ZWRcbiQoeyB0YXJnZXQ6ICdOdW1iZXInLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LXN0YXRlbWVudHNcbiAgdG9GaXhlZDogZnVuY3Rpb24gdG9GaXhlZChmcmFjdGlvbkRpZ2l0cykge1xuICAgIHZhciBudW1iZXIgPSB0aGlzTnVtYmVyVmFsdWUodGhpcyk7XG4gICAgdmFyIGZyYWN0RGlnaXRzID0gdG9JbnRlZ2VyKGZyYWN0aW9uRGlnaXRzKTtcbiAgICB2YXIgZGF0YSA9IFswLCAwLCAwLCAwLCAwLCAwXTtcbiAgICB2YXIgc2lnbiA9ICcnO1xuICAgIHZhciByZXN1bHQgPSAnMCc7XG4gICAgdmFyIGUsIHosIGosIGs7XG5cbiAgICB2YXIgbXVsdGlwbHkgPSBmdW5jdGlvbiAobiwgYykge1xuICAgICAgdmFyIGluZGV4ID0gLTE7XG4gICAgICB2YXIgYzIgPSBjO1xuICAgICAgd2hpbGUgKCsraW5kZXggPCA2KSB7XG4gICAgICAgIGMyICs9IG4gKiBkYXRhW2luZGV4XTtcbiAgICAgICAgZGF0YVtpbmRleF0gPSBjMiAlIDFlNztcbiAgICAgICAgYzIgPSBmbG9vcihjMiAvIDFlNyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBkaXZpZGUgPSBmdW5jdGlvbiAobikge1xuICAgICAgdmFyIGluZGV4ID0gNjtcbiAgICAgIHZhciBjID0gMDtcbiAgICAgIHdoaWxlICgtLWluZGV4ID49IDApIHtcbiAgICAgICAgYyArPSBkYXRhW2luZGV4XTtcbiAgICAgICAgZGF0YVtpbmRleF0gPSBmbG9vcihjIC8gbik7XG4gICAgICAgIGMgPSAoYyAlIG4pICogMWU3O1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgZGF0YVRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGluZGV4ID0gNjtcbiAgICAgIHZhciBzID0gJyc7XG4gICAgICB3aGlsZSAoLS1pbmRleCA+PSAwKSB7XG4gICAgICAgIGlmIChzICE9PSAnJyB8fCBpbmRleCA9PT0gMCB8fCBkYXRhW2luZGV4XSAhPT0gMCkge1xuICAgICAgICAgIHZhciB0ID0gU3RyaW5nKGRhdGFbaW5kZXhdKTtcbiAgICAgICAgICBzID0gcyA9PT0gJycgPyB0IDogcyArIHJlcGVhdC5jYWxsKCcwJywgNyAtIHQubGVuZ3RoKSArIHQ7XG4gICAgICAgIH1cbiAgICAgIH0gcmV0dXJuIHM7XG4gICAgfTtcblxuICAgIGlmIChmcmFjdERpZ2l0cyA8IDAgfHwgZnJhY3REaWdpdHMgPiAyMCkgdGhyb3cgUmFuZ2VFcnJvcignSW5jb3JyZWN0IGZyYWN0aW9uIGRpZ2l0cycpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAobnVtYmVyICE9IG51bWJlcikgcmV0dXJuICdOYU4nO1xuICAgIGlmIChudW1iZXIgPD0gLTFlMjEgfHwgbnVtYmVyID49IDFlMjEpIHJldHVybiBTdHJpbmcobnVtYmVyKTtcbiAgICBpZiAobnVtYmVyIDwgMCkge1xuICAgICAgc2lnbiA9ICctJztcbiAgICAgIG51bWJlciA9IC1udW1iZXI7XG4gICAgfVxuICAgIGlmIChudW1iZXIgPiAxZS0yMSkge1xuICAgICAgZSA9IGxvZyhudW1iZXIgKiBwb3coMiwgNjksIDEpKSAtIDY5O1xuICAgICAgeiA9IGUgPCAwID8gbnVtYmVyICogcG93KDIsIC1lLCAxKSA6IG51bWJlciAvIHBvdygyLCBlLCAxKTtcbiAgICAgIHogKj0gMHgxMDAwMDAwMDAwMDAwMDtcbiAgICAgIGUgPSA1MiAtIGU7XG4gICAgICBpZiAoZSA+IDApIHtcbiAgICAgICAgbXVsdGlwbHkoMCwgeik7XG4gICAgICAgIGogPSBmcmFjdERpZ2l0cztcbiAgICAgICAgd2hpbGUgKGogPj0gNykge1xuICAgICAgICAgIG11bHRpcGx5KDFlNywgMCk7XG4gICAgICAgICAgaiAtPSA3O1xuICAgICAgICB9XG4gICAgICAgIG11bHRpcGx5KHBvdygxMCwgaiwgMSksIDApO1xuICAgICAgICBqID0gZSAtIDE7XG4gICAgICAgIHdoaWxlIChqID49IDIzKSB7XG4gICAgICAgICAgZGl2aWRlKDEgPDwgMjMpO1xuICAgICAgICAgIGogLT0gMjM7XG4gICAgICAgIH1cbiAgICAgICAgZGl2aWRlKDEgPDwgaik7XG4gICAgICAgIG11bHRpcGx5KDEsIDEpO1xuICAgICAgICBkaXZpZGUoMik7XG4gICAgICAgIHJlc3VsdCA9IGRhdGFUb1N0cmluZygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbXVsdGlwbHkoMCwgeik7XG4gICAgICAgIG11bHRpcGx5KDEgPDwgLWUsIDApO1xuICAgICAgICByZXN1bHQgPSBkYXRhVG9TdHJpbmcoKSArIHJlcGVhdC5jYWxsKCcwJywgZnJhY3REaWdpdHMpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZnJhY3REaWdpdHMgPiAwKSB7XG4gICAgICBrID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgIHJlc3VsdCA9IHNpZ24gKyAoayA8PSBmcmFjdERpZ2l0c1xuICAgICAgICA/ICcwLicgKyByZXBlYXQuY2FsbCgnMCcsIGZyYWN0RGlnaXRzIC0gaykgKyByZXN1bHRcbiAgICAgICAgOiByZXN1bHQuc2xpY2UoMCwgayAtIGZyYWN0RGlnaXRzKSArICcuJyArIHJlc3VsdC5zbGljZShrIC0gZnJhY3REaWdpdHMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gc2lnbiArIHJlc3VsdDtcbiAgICB9IHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgcGFyc2VJbnRJbXBsZW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9udW1iZXItcGFyc2UtaW50Jyk7XG5cbi8vIGBwYXJzZUludGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1wYXJzZWludC1zdHJpbmctcmFkaXhcbiQoeyBnbG9iYWw6IHRydWUsIGZvcmNlZDogcGFyc2VJbnQgIT0gcGFyc2VJbnRJbXBsZW1lbnRhdGlvbiB9LCB7XG4gIHBhcnNlSW50OiBwYXJzZUludEltcGxlbWVudGF0aW9uXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=