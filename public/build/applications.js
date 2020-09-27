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
// @lastUpdate 27/09/2020 10:42
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
  $('#blocPj').toggle();
});
$(document).on('click', '.addFile', function (e) {
  var $id = parseInt($(this).data('file')) + 1;
  var html = '<div class="row" id="file' + $id + '">\n' + '            <div class="col-10">\n' + '                <input type="file" name="pj' + $id + '" id="pj' + $id + '" class="form-control pjFile" placeholder="Ajouter une pièce jointe">\n' + '            </div>\n' + '            <div class="col-1">\n' + '                <button class="btn btn-block btn-success-outline addFile" data-file="' + $id + '"><i class="fa fa-plus-circle"></i></button>\n' + '            </div>\n' + '            <div class="col-1">\n' + '                <button class="btn btn-block btn-danger-outline removeFile" data-file="' + $id + '"><i class="fa\n' + '            fa-minus-circle"></i></button>\n' + '            </div>\n' + '        </div>';
  $('#blocPj').append(html);
});
$(document).on('click', '.removeFile', function (e) {
  var $id = $(this).data('file');
  $('#file' + $id).remove();
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
  $(this).text('Envoi en cours...'); // let messageToLibrePersonnel = []
  // $('input:checkbox[name=messageToLibrePersonnel]:checked').each(function () {
  //   messageToLibrePersonnel.push($(this).val())
  // })
  // let fichiers = []
  // $('input[type="file"]').each(function(file, element){
  //   if (typeof element.files[0] !== 'undefined') {
  //     fichiers.push(element.files[0])
  //   }
  // })

  var formData = new FormData($('form')[0]);
  formData.append('message', $('.ql-editor').html());
  $.ajax({
    url: Routing.generate('messagerie_sent'),
    data: formData //{
    // messageToSemestre: $('#messageToSemestre').val(),
    // messageToGroupe: $('#messageToGroupe').val(),
    // messageToLibreEtudiant: $('#messageToLibreEtudiant').val(),
    // messageToLibrePersonnel: messageToLibrePersonnel,
    // typeDestinataire: $('input[type=radio][name=messageDestinataireType]:checked').val(),
    // copie: $('#messageCopy').val(),
    // message: $('.ql-editor').html(),
    // sujet: $('#messageSubject').val(),
    // fichiers: fichiers
    //}
    ,
    async: false,
    cache: false,
    contentType: false,
    enctype: 'multipart/form-data',
    processData: false,
    method: 'POST' // success: function (data) {
    //   $('#messages-liste').empty().load(Routing.generate('messagerie_message_envoye', {message: data.message}))
    //   $('#messageSent').attr('disabled', false)
    //   $(this).text('Envoyer')
    // }

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

},[["./assets/js/pages/applications.js","runtime","vendors~absences~adm.absences~adm.alternances~adm.articles~adm.bornes~adm.configuration~adm.edt~adm.~08e24351","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~7c3f1a6f","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~a14823c0","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~38bcb1f7","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.groupe~adm.justificat~31cc1171"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvYXBwbGljYXRpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy9tZXNzYWdlcmllLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9udW1iZXItcGFyc2UtaW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctcmVwZWF0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90aGlzLW51bWJlci12YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm51bWJlci50by1maXhlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnBhcnNlLWludC5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJlbXB0eSIsImxvYWQiLCJhdHRyIiwic2VsZWN0TWF0aWVyZSIsInNlbGVjdEdyb3VwZXMiLCJhamF4IiwidXJsIiwiUm91dGluZyIsImdlbmVyYXRlIiwic2VtZXN0cmUiLCJ2YWwiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJkYXRhIiwiYXBwZW5kIiwidGV4dCIsImpRdWVyeSIsImVhY2giLCJpbmRleCIsIm1hdGllcmUiLCJpZCIsImRpc3BsYXkiLCJlcnJvciIsImFkZENhbGxvdXQiLCJ0eXBlR3JvdXBlIiwibGliZWxsZSIsIiRsZ3IiLCIkaHRtbCIsImdyb3VwZSIsImh0bWwiLCJ0b2dnbGUiLCJwYXJlbnQiLCIkaWQiLCJwYXJzZUludCIsInJlbW92ZSIsIm1lc3NhZ2VUb1NlbWVzdHJlIiwibWVzc2FnZVRvR3JvdXBlIiwibWVzc2FnZVRvTGlicmVFdHVkaWFudCIsIm1lc3NhZ2VUb0xpYnJlUGVyc29ubmVsIiwidHlwZURlc3RpbmF0YWlyZSIsImNvcGllIiwibWVzc2FnZSIsInN1amV0IiwibWV0aG9kIiwidGFpbGxlVG90YWxlIiwiZmlsZSIsImVsZW1lbnQiLCJjb25zb2xlIiwibG9nIiwiZmlsZXMiLCJzaXplIiwic2hvdyIsInRvRml4ZWQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXN5bmMiLCJjYWNoZSIsImNvbnRlbnRUeXBlIiwiZW5jdHlwZSIsInByb2Nlc3NEYXRhIiwidmFsZXVyIiwicHJvcCIsImV0YXQiLCJ0eXBlIiwiYmxvY0Rlc3RMaWJyZUV0dWRpYW50IiwiYmxvY0Rlc3RMaWJyZVBlcnNvbm5lbCIsImJsb2NEZXN0TWVzc2dhZUluZm8iLCJibG9jRGVzdEdyb3VwZSIsImJsb2NEZXN0U2VtZXN0cmUiLCJoaWRlIiwicmVhZFVybE1lbnUiLCIkdXJsIiwiJGVsdCIsInNwbGl0IiwiJGZpcnN0RWx0IiwibGVuZ3RoIiwicG9wIiwibG9jYXRpb24iLCJTd2FsIiwibWl4aW4iLCJjdXN0b21DbGFzcyIsImNvbmZpcm1CdXR0b24iLCJjYW5jZWxCdXR0b24iLCJidXR0b25zU3R5bGluZyIsImNzcmYiLCJmaXJlIiwidGl0bGUiLCJpY29uIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25Db2xvciIsImNhbmNlbEJ1dHRvbkNvbG9yIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwidGhlbiIsInJlc3VsdCIsInZhbHVlIiwiX3Rva2VuIiwiaGFzT3duUHJvcGVydHkiLCJocmVmIiwiY2xvc2VzdCIsInhociIsImFqYXhPcHRpb25zIiwidGhyb3duRXJyb3IiLCJkaXNtaXNzIiwibGFiZWwiLCJ0cmFuc2xhdGUiLCJBcnJheSIsInByZXBlbmQiLCJzbGlkZURvd24iLCJkZWxheSIsInNsaWRlVXAiLCJteUVkaXRJbml0aWFsQ29udGVudCIsImdlbmVyZUlucHV0IiwicmVwbGFjZVdpdGgiLCJmb2N1cyIsImtleUNvZGUiLCJ1cGRhdGVEYXRhIiwiZmllbGQiLCIkb2JqIiwidHJpbSIsImZuIiwiZGF0YUF0dHIiLCJuYW1lIiwiZGVmIiwiZ2V0QXR0cmlidXRlIiwiaGFzRGF0YUF0dHIiLCJoYXNBdHRyaWJ1dGUiLCJkYXRhVG9PcHRpb24iLCJyZXBsYWNlIiwieCIsInRvVXBwZXJDYXNlIiwiZ2V0RGF0YU9wdGlvbnMiLCJlbCIsImNhc3RMaXN0Iiwib3B0aW9ucyIsImtleSIsInVuZGVmaW5lZCIsIkJvb2xlYW4iLCJOdW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEVBQVosQ0FBZSxPQUFmLEVBQXdCLG9CQUF4QixFQUE4QyxVQUFVQyxDQUFWLEVBQWE7QUFDekRBLEdBQUMsQ0FBQ0MsY0FBRjtBQUNBRCxHQUFDLENBQUNFLGVBQUY7QUFFQUwsR0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0JNLFdBQXhCLENBQW9DLGFBQXBDO0FBQ0FOLEdBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUU8sUUFBUixDQUFpQixhQUFqQjtBQUNBUCxHQUFDLENBQUMsY0FBRCxDQUFELENBQWtCUSxLQUFsQixHQUEwQkMsSUFBMUIsQ0FBK0JULENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVUsSUFBUixDQUFhLE1BQWIsQ0FBL0I7QUFDRCxDQVBEO0FBU0FWLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEVBQVosQ0FBZSxRQUFmLEVBQXlCLGlCQUF6QixFQUE0QyxZQUFZO0FBQ3REO0FBQ0FGLEdBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JRLEtBQWxCO0FBQ0EsTUFBTUcsYUFBYSxHQUFHWCxDQUFDLENBQUMsZ0JBQUQsQ0FBdkI7QUFDQSxNQUFNWSxhQUFhLEdBQUdaLENBQUMsQ0FBQyxn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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDN0hELFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsNkJBQTZCLG1CQUFPLENBQUMsMkZBQStCOztBQUVwRTtBQUNBO0FBQ0EsR0FBRywyREFBMkQ7QUFDOUQ7QUFDQSxDQUFDIiwiZmlsZSI6ImFwcGxpY2F0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9wYWdlcy9hcHBsaWNhdGlvbnMuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAwNi8wOS8yMDIwIDE2OjE0XG5pbXBvcnQge2FkZENhbGxvdXR9IGZyb20gJy4uL3V0aWwnXG5pbXBvcnQgJy4vbWVzc2FnZXJpZSdcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5jaGFuZ2VhcHBsaWNhdGlvbicsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBlLnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgJCgnLmNoYW5nZWFwcGxpY2F0aW9uJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZSBzaG93JylcbiAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlIHNob3cnKVxuICAkKCcjbWFpbkNvbnRlbnQnKS5lbXB0eSgpLmxvYWQoJCh0aGlzKS5hdHRyKCdocmVmJykpXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJyNzZWxlY3RzZW1lc3RyZScsIGZ1bmN0aW9uICgpIHtcbiAgLy9tYXRpZXJlc1xuICAkKCcjbGlzdGVncm91cGUnKS5lbXB0eSgpXG4gIGNvbnN0IHNlbGVjdE1hdGllcmUgPSAkKCcjc2VsZWN0bWF0aWVyZScpXG4gIGNvbnN0IHNlbGVjdEdyb3VwZXMgPSAkKCcjc2VsZWN0Z3JvdXBlcycpXG4gICQuYWpheChcbiAgICB7XG4gICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwaV9tYXRpZXJlc19zZW1lc3RyZScsIHtzZW1lc3RyZTogJCh0aGlzKS52YWwoKX0pLFxuICAgICAgZGF0YVR5cGU6IFwianNvblwiLCAvL1JldHVybiBkYXRhIHR5cGUgKHdoYXQgd2UgZXhwZWN0KS5cbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHNlbGVjdE1hdGllcmUuZW1wdHkoKVxuICAgICAgICBzZWxlY3RNYXRpZXJlLmFwcGVuZCgkKCc8b3B0aW9uPjwvb3B0aW9uPicpXG4gICAgICAgICAgLmF0dHIoJ3ZhbHVlJywgJycpXG4gICAgICAgICAgLnRleHQoJ0Nob2lzaXIgdW5lIG1hdGnDqHJlJykpXG4gICAgICAgIGpRdWVyeS5lYWNoKGRhdGEsIGZ1bmN0aW9uIChpbmRleCwgbWF0aWVyZSkge1xuICAgICAgICAgIHNlbGVjdE1hdGllcmUuYXBwZW5kKCQoJzxvcHRpb24+PC9vcHRpb24+JylcbiAgICAgICAgICAgIC5hdHRyKCd2YWx1ZScsIG1hdGllcmUuaWQpXG4gICAgICAgICAgICAudGV4dChtYXRpZXJlLmRpc3BsYXkpKVxuICAgICAgICB9KVxuICAgICAgICBzZWxlY3RNYXRpZXJlLmF0dHIoJ2RhdGEtcHJvdmlkZScsICdzZWxlY3RwaWNrZXInKVxuICAgICAgICBzZWxlY3RNYXRpZXJlLmF0dHIoJ2RhdGEtbGl2ZS1zZWFyY2gnLCAndHJ1ZScpXG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYWRkQ2FsbG91dCgnRXJyZXVyIGxvcnMgZGUgbGEgdGVudGF0aXZlIGRcXCdhZmZpY2hhZ2UgZGVzIG1hdGnDqHJlcyBkdSBzZW1lc3RyZXMuIFZldWlsbGV6IGNvbnRhY3RlciBsZSByZXNwb25zYWJsZSBkZSBsXFwnaW50cmFuZXQgc2kgbGUgcHJvYmzDqG1lIHBlcnNpc3RlICEnLCAnZGFuZ2VyJylcbiAgICAgIH1cbiAgICB9KVxuICAvL2dyb3VwZXNcbiAgJC5hamF4KFxuICAgIHtcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYXBpX3R5cGVfZ3JvdXBlX3NlbWVzdHJlJywge3NlbWVzdHJlOiAkKHRoaXMpLnZhbCgpfSksXG5cbiAgICAgIGRhdGFUeXBlOiBcImpzb25cIiwgLy9SZXR1cm4gZGF0YSB0eXBlICh3aGF0IHdlIGV4cGVjdCkuXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBzZWxlY3RHcm91cGVzLmVtcHR5KClcbiAgICAgICAgc2VsZWN0R3JvdXBlcy5hcHBlbmQoJCgnPG9wdGlvbj48L29wdGlvbj4nKVxuICAgICAgICAgIC5hdHRyKCd2YWx1ZScsICcnKVxuICAgICAgICAgIC50ZXh0KCdDaG9pc2lyIHVuIHR5cGUgZGUgZ3JvdXBlJykpXG4gICAgICAgIGpRdWVyeS5lYWNoKGRhdGEsIGZ1bmN0aW9uIChpbmRleCwgdHlwZUdyb3VwZSkge1xuXG4gICAgICAgICAgc2VsZWN0R3JvdXBlcy5hcHBlbmQoJCgnPG9wdGlvbj48L29wdGlvbj4nKVxuICAgICAgICAgICAgLmF0dHIoJ3ZhbHVlJywgdHlwZUdyb3VwZS5pZClcbiAgICAgICAgICAgIC50ZXh0KHR5cGVHcm91cGUubGliZWxsZSkpXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYWRkQ2FsbG91dCgnRXJyZXVyIGxvcnMgZGUgbGEgdGVudGF0aXZlIGRcXCdhZmZpY2hhZ2UgZGVzIGdyb3VwZXMgZHUgc2VtZXN0cmVzLiBWZXVpbGxleiBjb250YWN0ZXIgbGUgcmVzcG9uc2FibGUgZGUgbFxcJ2ludHJhbmV0IHNpIGxlIHByb2Jsw6htZSBwZXJzaXN0ZSAhJywgJ2RhbmdlcicpXG4gICAgICB9XG4gICAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnI3NlbGVjdGdyb3VwZXMnLCBmdW5jdGlvbiAoKSB7XG5cbiAgY29uc3QgJGxnciA9ICQoJyNsaXN0ZWdyb3VwZScpXG4gIC8vbWF0aWVyZXNcbiAgJC5hamF4KFxuICAgIHtcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYXBpX2dyb3VwZV90eXBlX2dyb3VwZScsIHt0eXBlR3JvdXBlOiAkKHRoaXMpLnZhbCgpfSksXG4gICAgICBkYXRhVHlwZTogXCJqc29uXCIsIC8vUmV0dXJuIGRhdGEgdHlwZSAod2hhdCB3ZSBleHBlY3QpLlxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgJGxnci5lbXB0eSgpXG4gICAgICAgIGxldCAkaHRtbCA9ICcnXG4gICAgICAgIGpRdWVyeS5lYWNoKGRhdGEsIGZ1bmN0aW9uIChpbmRleCwgZ3JvdXBlKSB7XG4gICAgICAgICAgJGh0bWwgKz0gJzxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkIG5hbWU9XCJkZXRhaWxfZ3JvdXBlc1tdXCIgdmFsdWU9XCInICsgZ3JvdXBlLmlkICsgJ1wiPiAnICsgZ3JvdXBlLmxpYmVsbGUgKyAnIHwgJ1xuICAgICAgICB9KVxuICAgICAgICAkbGdyLmh0bWwoJGh0bWwpXG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYWRkQ2FsbG91dCgnRXJyZXVyIGxvcnMgZGUgbGEgdGVudGF0aXZlIGRcXCdhZmZpY2hhZ2UgZGVzIGdyb3VwZXMgZHUgc2VtZXN0cmVzLiBWZXVpbGxleiBjb250YWN0ZXIgbGUgcmVzcG9uc2FibGUgZGUgbFxcJ2ludHJhbmV0IHNpIGxlIHByb2Jsw6htZSBwZXJzaXN0ZSAhJywgJ2RhbmdlcicpXG4gICAgICB9XG4gICAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsJyNhZGRfcmF0dHJhcGFnZScsIGZ1bmN0aW9uKCl7XG4gICQoJyNibG9jX2FkZF9yYXR0cmFwYWdlJykudG9nZ2xlKClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsJyNhZGRfY2FybmV0JywgZnVuY3Rpb24oKXtcbiAgJCgnI2Jsb2NfYWRkX2Nhcm5ldCcpLnRvZ2dsZSgpXG59KVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3BhZ2VzL21lc3NhZ2VyaWUuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAyNy8wOS8yMDIwIDEwOjQyXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubWVzc2FnZXJpZS1maWx0cmUnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAkKCcubWVzc2FnZXJpZS1maWx0cmUnKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnYWN0aXZlJylcbiAgJCgnI21lc3NhZ2VzLWxpc3RlJykuZW1wdHkoKS5sb2FkKFJvdXRpbmcuZ2VuZXJhdGUoJ21lc3NhZ2VyaWVfZmlsdHJlJywgeydmaWx0cmUnOiAkKHRoaXMpLmRhdGEoJ2ZpbHRyZScpfSkpXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI21vZGFsUGonLCBmdW5jdGlvbiAoZSkge1xuICAkKCcjYmxvY1BqJykudG9nZ2xlKClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuYWRkRmlsZScsIGZ1bmN0aW9uIChlKSB7XG4gIGxldCAkaWQgPSBwYXJzZUludCgkKHRoaXMpLmRhdGEoJ2ZpbGUnKSkgKyAxXG4gIGxldCBodG1sID0gJzxkaXYgY2xhc3M9XCJyb3dcIiBpZD1cImZpbGUnICsgJGlkICsgJ1wiPlxcbicgK1xuICAgICcgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEwXCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwicGonICsgJGlkICsgJ1wiIGlkPVwicGonICsgJGlkICsgJ1wiIGNsYXNzPVwiZm9ybS1jb250cm9sIHBqRmlsZVwiIHBsYWNlaG9sZGVyPVwiQWpvdXRlciB1bmUgcGnDqGNlIGpvaW50ZVwiPlxcbicgK1xuICAgICcgICAgICAgICAgICA8L2Rpdj5cXG4nICtcbiAgICAnICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1ibG9jayBidG4tc3VjY2Vzcy1vdXRsaW5lIGFkZEZpbGVcIiBkYXRhLWZpbGU9XCInICsgJGlkICsgJ1wiPjxpIGNsYXNzPVwiZmEgZmEtcGx1cy1jaXJjbGVcIj48L2k+PC9idXR0b24+XFxuJyArXG4gICAgJyAgICAgICAgICAgIDwvZGl2PlxcbicgK1xuICAgICcgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWJsb2NrIGJ0bi1kYW5nZXItb3V0bGluZSByZW1vdmVGaWxlXCIgZGF0YS1maWxlPVwiJyArICRpZCArICdcIj48aSBjbGFzcz1cImZhXFxuJyArXG4gICAgJyAgICAgICAgICAgIGZhLW1pbnVzLWNpcmNsZVwiPjwvaT48L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgICAgICAgPC9kaXY+J1xuXG4gICQoJyNibG9jUGonKS5hcHBlbmQoaHRtbClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcucmVtb3ZlRmlsZScsIGZ1bmN0aW9uIChlKSB7XG4gIGxldCAkaWQgPSAkKHRoaXMpLmRhdGEoJ2ZpbGUnKVxuICAkKCcjZmlsZScgKyAkaWQpLnJlbW92ZSgpXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI3NhdmVEcmFmdCcsIGZ1bmN0aW9uIChlKSB7XG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdtZXNzYWdlcmllX2RyYWZ0JyksXG4gICAgZGF0YToge1xuICAgICAgbWVzc2FnZVRvU2VtZXN0cmU6ICQoJyNtZXNzYWdlVG9TZW1lc3RyZScpLnZhbCgpLFxuICAgICAgbWVzc2FnZVRvR3JvdXBlOiAkKCcjbWVzc2FnZVRvR3JvdXBlJykudmFsKCksXG4gICAgICBtZXNzYWdlVG9MaWJyZUV0dWRpYW50OiAkKCcjbWVzc2FnZVRvTGlicmVFdHVkaWFudCcpLnZhbCgpLFxuICAgICAgbWVzc2FnZVRvTGlicmVQZXJzb25uZWw6ICQoJyNtZXNzYWdlVG9MaWJyZVBlcnNvbm5lbCcpLnZhbCgpLFxuICAgICAgdHlwZURlc3RpbmF0YWlyZTogJCgnaW5wdXRbdHlwZT1yYWRpb11bbmFtZT1tZXNzYWdlRGVzdGluYXRhaXJlVHlwZV06Y2hlY2tlZCcpLnZhbCgpLFxuICAgICAgY29waWU6ICQoJyNtZXNzYWdlQ29weScpLnZhbCgpLFxuICAgICAgbWVzc2FnZTogJCgnLnFsLWVkaXRvcicpLmh0bWwoKSxcbiAgICAgIHN1amV0OiAkKCcjbWVzc2FnZVN1YmplY3QnKS52YWwoKVxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICQoJyNtZXNzYWdlcy1saXN0ZScpLmVtcHR5KCkubG9hZChSb3V0aW5nLmdlbmVyYXRlKCdtZXNzYWdlcmllX2ZpbHRyZScsIHsnZmlsdHJlJzogJ2RyYWZ0J30pKVxuICAgIH1cbiAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubWVzc2FnZS1yZWFkJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGUuc3RvcFByb3BhZ2F0aW9uKClcblxuICAkKCcjbWVzc2FnZXMtbGlzdGUnKS5lbXB0eSgpLmxvYWQoUm91dGluZy5nZW5lcmF0ZSgnbWVzc2FnZXJpZV9tZXNzYWdlJywge21lc3NhZ2U6ICQodGhpcykuZGF0YSgnbWVzc2FnZScpfSkpXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm1lc3NhZ2UtcmVhZC1hdXRldXInLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgZS5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICQoJyNtZXNzYWdlcy1saXN0ZScpLmVtcHR5KCkubG9hZChSb3V0aW5nLmdlbmVyYXRlKCdtZXNzYWdlcmllX21lc3NhZ2VfZW52b3llJywge21lc3NhZ2U6ICQodGhpcykuZGF0YSgnbWVzc2FnZScpfSkpXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI25ldy1tZXNzYWdlJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGUuc3RvcFByb3BhZ2F0aW9uKClcblxuICAkKCcjbWVzc2FnZXMtbGlzdGUnKS5lbXB0eSgpLmxvYWQoUm91dGluZy5nZW5lcmF0ZSgnbWVzc2FnZXJpZV9ub3V2ZWF1JykpXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI21hcnF1ZXJOb3RpZmljYXRpb25zUmVhZCcsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBlLnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ25vdGlmaWNhdGlvbl9tYXJxdWVyX2x1JyksXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGUpIHtcblxuICAgICAgJCgnLm5vdGlmaWNhdGlvbicpLnJlbW92ZUNsYXNzKCdtZWRpYS1uZXcnKVxuICAgIH1cbiAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnLnBqRmlsZScsIGZ1bmN0aW9uICgpIHtcbiAgbGV0IHRhaWxsZVRvdGFsZSA9IDBcbiAgJCgnaW5wdXRbdHlwZT1cImZpbGVcIl0nKS5lYWNoKGZ1bmN0aW9uIChmaWxlLCBlbGVtZW50KSB7XG4gICAgY29uc29sZS5sb2coZWxlbWVudC5maWxlc1swXSlcbiAgICBpZiAodHlwZW9mIGVsZW1lbnQuZmlsZXNbMF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0YWlsbGVUb3RhbGUgKz0gZWxlbWVudC5maWxlc1swXS5zaXplXG4gICAgfVxuICB9KVxuICB0YWlsbGVUb3RhbGUgPSB0YWlsbGVUb3RhbGUgLyAxMDI0XG4gIHRhaWxsZVRvdGFsZSA9IHRhaWxsZVRvdGFsZSAvIDEwMjRcbiAgJCgnI3BvaWRQaicpLnNob3coKS5odG1sKCdMZSBwb2lkIGRlcyBwacOoY2VzIGpvaW50ZXMgZXN0IGRlICcgKyB0YWlsbGVUb3RhbGUudG9GaXhlZCgzKSArICcgTW8nKVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNtZXNzYWdlU2VudCcsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICQodGhpcykuYXR0cignZGlzYWJsZWQnLCB0cnVlKVxuICAkKHRoaXMpLnRleHQoJ0Vudm9pIGVuIGNvdXJzLi4uJylcblxuICAvLyBsZXQgbWVzc2FnZVRvTGlicmVQZXJzb25uZWwgPSBbXVxuICAvLyAkKCdpbnB1dDpjaGVja2JveFtuYW1lPW1lc3NhZ2VUb0xpYnJlUGVyc29ubmVsXTpjaGVja2VkJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gIC8vICAgbWVzc2FnZVRvTGlicmVQZXJzb25uZWwucHVzaCgkKHRoaXMpLnZhbCgpKVxuICAvLyB9KVxuXG4gIC8vIGxldCBmaWNoaWVycyA9IFtdXG4gIC8vICQoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJykuZWFjaChmdW5jdGlvbihmaWxlLCBlbGVtZW50KXtcbiAgLy8gICBpZiAodHlwZW9mIGVsZW1lbnQuZmlsZXNbMF0gIT09ICd1bmRlZmluZWQnKSB7XG4gIC8vICAgICBmaWNoaWVycy5wdXNoKGVsZW1lbnQuZmlsZXNbMF0pXG4gIC8vICAgfVxuICAvLyB9KVxuICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJCgnZm9ybScpWzBdKVxuICBmb3JtRGF0YS5hcHBlbmQoJ21lc3NhZ2UnLCAkKCcucWwtZWRpdG9yJykuaHRtbCgpKVxuXG5cbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ21lc3NhZ2VyaWVfc2VudCcpLFxuICAgIGRhdGE6IGZvcm1EYXRhXG4gICAgLy97XG4gICAgLy8gbWVzc2FnZVRvU2VtZXN0cmU6ICQoJyNtZXNzYWdlVG9TZW1lc3RyZScpLnZhbCgpLFxuICAgIC8vIG1lc3NhZ2VUb0dyb3VwZTogJCgnI21lc3NhZ2VUb0dyb3VwZScpLnZhbCgpLFxuICAgIC8vIG1lc3NhZ2VUb0xpYnJlRXR1ZGlhbnQ6ICQoJyNtZXNzYWdlVG9MaWJyZUV0dWRpYW50JykudmFsKCksXG4gICAgLy8gbWVzc2FnZVRvTGlicmVQZXJzb25uZWw6IG1lc3NhZ2VUb0xpYnJlUGVyc29ubmVsLFxuICAgIC8vIHR5cGVEZXN0aW5hdGFpcmU6ICQoJ2lucHV0W3R5cGU9cmFkaW9dW25hbWU9bWVzc2FnZURlc3RpbmF0YWlyZVR5cGVdOmNoZWNrZWQnKS52YWwoKSxcbiAgICAvLyBjb3BpZTogJCgnI21lc3NhZ2VDb3B5JykudmFsKCksXG4gICAgLy8gbWVzc2FnZTogJCgnLnFsLWVkaXRvcicpLmh0bWwoKSxcbiAgICAvLyBzdWpldDogJCgnI21lc3NhZ2VTdWJqZWN0JykudmFsKCksXG4gICAgLy8gZmljaGllcnM6IGZpY2hpZXJzXG4gICAgLy99XG4gICAgLFxuICAgIGFzeW5jOiBmYWxzZSxcbiAgICBjYWNoZTogZmFsc2UsXG4gICAgY29udGVudFR5cGU6IGZhbHNlLFxuICAgIGVuY3R5cGU6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyxcbiAgICBwcm9jZXNzRGF0YTogZmFsc2UsXG4gICAgbWV0aG9kOiAnUE9TVCdcbiAgICAvLyBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgIC8vICAgJCgnI21lc3NhZ2VzLWxpc3RlJykuZW1wdHkoKS5sb2FkKFJvdXRpbmcuZ2VuZXJhdGUoJ21lc3NhZ2VyaWVfbWVzc2FnZV9lbnZveWUnLCB7bWVzc2FnZTogZGF0YS5tZXNzYWdlfSkpXG4gICAgLy8gICAkKCcjbWVzc2FnZVNlbnQnKS5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKVxuICAgIC8vICAgJCh0aGlzKS50ZXh0KCdFbnZveWVyJylcbiAgICAvLyB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnN0YXJyZWQnLCBmdW5jdGlvbiAoKSB7XG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdtZXNzYWdlcmllX2NoYW5nZV9ldGF0JyksXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgZGF0YToge1xuICAgICAgdmFsZXVyOiAnUycsXG4gICAgICBtZXNzYWdlOiAkKHRoaXMpLmRhdGEoJ21lc3NhZ2UnKVxuICAgIH0sXG4gICAgZXJyb3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgICQodGhpcykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKVxuICAgIH1cbiAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjZGVsZXRlTWVzc2FnZScsIGZ1bmN0aW9uICgpIHtcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ21lc3NhZ2VyaWVfY2hhbmdlX2V0YXQnKSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBkYXRhOiB7XG4gICAgICBldGF0OiAnRCcsXG4gICAgICBtZXNzYWdlOiAkKHRoaXMpLmRhdGEoJ21lc3NhZ2UnKVxuICAgIH0sXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgJCgnI21lc3NhZ2VzLWxpc3RlJykuZW1wdHkoKS5sb2FkKFJvdXRpbmcuZ2VuZXJhdGUoJ21lc3NhZ2VyaWVfZmlsdHJlJywgeydmaWx0cmUnOiAnYWxsJ30pKVxuICAgIH1cbiAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubWVzc2FnZURlc3RpbmF0YWlyZVR5cGUnLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHR5cGUgPSAkKHRoaXMpLnZhbCgpXG4gIGNvbnN0IGJsb2NEZXN0TGlicmVFdHVkaWFudCA9ICQoJyNibG9jRGVzdExpYnJlRXR1ZGlhbnQnKVxuICBjb25zdCBibG9jRGVzdExpYnJlUGVyc29ubmVsID0gJCgnI2Jsb2NEZXN0TGlicmVQZXJzb25uZWwnKVxuICBjb25zdCBibG9jRGVzdE1lc3NnYWVJbmZvID0gJCgnI2Jsb2NEZXN0TWVzc2dhZUluZm8nKVxuICBjb25zdCBibG9jRGVzdEdyb3VwZSA9ICQoJyNibG9jRGVzdEdyb3VwZScpXG4gIGNvbnN0IGJsb2NEZXN0U2VtZXN0cmUgPSAkKCcjYmxvY0Rlc3RTZW1lc3RyZScpXG5cbiAgaWYgKHR5cGUgPT09ICdlJyl7XG4gICAgYmxvY0Rlc3RMaWJyZUV0dWRpYW50LnNob3coKVxuICAgIGJsb2NEZXN0TGlicmVQZXJzb25uZWwuaGlkZSgpXG4gICAgYmxvY0Rlc3RNZXNzZ2FlSW5mby5oaWRlKClcbiAgICBibG9jRGVzdEdyb3VwZS5oaWRlKClcbiAgICBibG9jRGVzdFNlbWVzdHJlLmhpZGUoKVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzJyl7XG4gICAgYmxvY0Rlc3RMaWJyZUV0dWRpYW50LmhpZGUoKVxuICAgIGJsb2NEZXN0TGlicmVQZXJzb25uZWwuaGlkZSgpXG4gICAgYmxvY0Rlc3RNZXNzZ2FlSW5mby5oaWRlKClcbiAgICBibG9jRGVzdEdyb3VwZS5oaWRlKClcbiAgICBibG9jRGVzdFNlbWVzdHJlLnNob3coKVxuICB9ZWxzZSBpZiAodHlwZSA9PT0gJ2cnKXtcbiAgICBibG9jRGVzdExpYnJlRXR1ZGlhbnQuaGlkZSgpXG4gICAgYmxvY0Rlc3RMaWJyZVBlcnNvbm5lbC5oaWRlKClcbiAgICBibG9jRGVzdE1lc3NnYWVJbmZvLmhpZGUoKVxuICAgIGJsb2NEZXN0R3JvdXBlLnNob3coKVxuICAgIGJsb2NEZXN0U2VtZXN0cmUuaGlkZSgpXG4gIH1lbHNlIGlmICh0eXBlID09PSAncCcpe1xuICAgIGJsb2NEZXN0TGlicmVFdHVkaWFudC5oaWRlKClcbiAgICBibG9jRGVzdExpYnJlUGVyc29ubmVsLnNob3coKVxuICAgIGJsb2NEZXN0TWVzc2dhZUluZm8uaGlkZSgpXG4gICAgYmxvY0Rlc3RHcm91cGUuaGlkZSgpXG4gICAgYmxvY0Rlc3RTZW1lc3RyZS5oaWRlKClcbiAgfVxufSlcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy91dGlsLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMzAvMDcvMjAyMCAxMToxOFxuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0MidcblxuZnVuY3Rpb24gcmVhZFVybE1lbnUgKCR1cmwpIHtcbiAgY29uc3QgJGVsdCA9ICR1cmwuc3BsaXQoJy8nKVxuICBsZXQgJGZpcnN0RWx0ID0gMlxuICBpZiAoJGVsdFsxXSA9PT0gJ2luZGV4LnBocCcpIHtcbiAgICBpZiAoJGVsdC5sZW5ndGggPiAxKSB7XG4gICAgICAkZmlyc3RFbHQgPSAzXG4gICAgfVxuICB9XG5cbiAgaWYgKCRlbHRbJGZpcnN0RWx0XSA9PT0gJ3N1cGVyLWFkbWluaXN0cmF0aW9uJykge1xuICAgICRmaXJzdEVsdCA9ICRmaXJzdEVsdCArIDFcbiAgfVxuXG4gIGlmICgkZWx0WyRlbHQubGVuZ3RoIC0gMV0gPT09ICcnKSB7XG4gICAgJGVsdC5wb3AoKVxuICB9XG5cbiAgJCgnLm1lbnUtaXRlbScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAkKCcjbWVudS0nICsgJGVsdFskZmlyc3RFbHRdKS5hZGRDbGFzcygnYWN0aXZlJylcbn1cblxuLy9jb2xvcmlzZSBsZSBib24gbWVudVxucmVhZFVybE1lbnUoJChsb2NhdGlvbikuYXR0cigncGF0aG5hbWUnKSlcblxuU3dhbC5taXhpbih7XG4gIGN1c3RvbUNsYXNzOiB7XG4gICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gIH0sXG4gIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxufSlcbi8vcG9wIHVwIGRlIGNvbmZpcm1hdGlvbiBkZSBzdXBwcmVzc2lvblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5zdXBwcmltZXInLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgY29uc3QgdXJsID0gJCh0aGlzKS5hdHRyKCdocmVmJylcbiAgY29uc3QgY3NyZiA9ICQodGhpcykuZGF0YSgnY3NyZicpXG4gIFN3YWwuZmlyZSh7XG4gICAgdGl0bGU6ICdDb25maXJtZXIgbGEgc3VwcHJlc3Npb24gPycsXG4gICAgdGV4dDogJ0xcXCdvcMOpcmF0aW9uIG5lIHBvdXJyYSBwYXMgw6p0cmUgYW5udWzDqWUuJyxcbiAgICBpY29uOiAnd2FybmluZycsXG4gICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICBjb25maXJtQnV0dG9uQ29sb3I6ICcjMzA4NWQ2JyxcbiAgICBjYW5jZWxCdXR0b25Db2xvcjogJyNkMzMnLFxuICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT3VpLCBqZSBjb25maXJtZScsXG4gICAgY2FuY2VsQnV0dG9uVGV4dDogJ05vbiwgQW5udWxlcicsXG4gICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgfSxcbiAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgaWYgKHJlc3VsdC52YWx1ZSkge1xuICAgICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIHR5cGU6ICdERUxFVEUnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgX3Rva2VuOiBjc3JmXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgIGlmIChpZC5oYXNPd25Qcm9wZXJ0eSgncmVkaXJlY3QnKSAmJiBpZC5oYXNPd25Qcm9wZXJ0eSgndXJsJykpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBpZC51cmxcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnI2xpZ25lXycgKyBpZCkuY2xvc2VzdCgndHInKS5yZW1vdmUoKVxuICAgICAgICAgICAgYWRkQ2FsbG91dCgnU3VwcHJlc3Npb24gZWZmZWN0dcOpZSBhdmVjIHN1Y2PDqHMnLCAnc3VjY2VzcycpXG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICB0aXRsZTogJ1N1cHByaW3DqSEnLFxuICAgICAgICAgICAgICB0ZXh0OiAnTFxcJ2VucmVnaXN0cmVtZW50IGEgw6l0w6kgc3VwcHJpbcOpLicsXG4gICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBhamF4T3B0aW9ucywgdGhyb3duRXJyb3IpIHtcbiAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgdGl0bGU6ICdFcnJldXIgbG9ycyBkZSBsYSBzdXBwcmVzc2lvbiEnLFxuICAgICAgICAgICAgdGV4dDogJ01lcmNpIGRlIHJlbm91dmVsZXIgbFxcJ29ww6lyYXRpb24nLFxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgICAgIH0pXG4gICAgICAgICAgYWRkQ2FsbG91dCgnRXJyZXVyIGxvcnMgZGUgbGEgdGVudGF0aXZlIGRlIHN1cHByZXNzaW9uJywgJ2RhbmdlcicpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICB9IGVsc2UgaWYgKFxuICAgICAgLy8gUmVhZCBtb3JlIGFib3V0IGhhbmRsaW5nIGRpc21pc3NhbHNcbiAgICAgIHJlc3VsdC5kaXNtaXNzID09PSAnY2FuY2VsJ1xuICAgICkge1xuICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgdGl0bGU6ICdDYW5jZWxsZWQnLFxuICAgICAgICB0ZXh0OiAnT0shIFRvdXQgZXN0IGNvbW1lIGF2YW50ICEnLFxuICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgfSxcbiAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICB9KVxuICAgIH1cbiAgfSlcbn0pXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDYWxsb3V0IChtZXNzYWdlLCBsYWJlbCkge1xuICBjb25zb2xlLmxvZygnY2FsbG91dCcpXG4gIHZhciB0cmFuc2xhdGUgPSBuZXcgQXJyYXkoKVxuICB0cmFuc2xhdGVbJ3N1Y2Nlc3MnXSA9ICdTdWNjw6hzJ1xuICB0cmFuc2xhdGVbJ2RhbmdlciddID0gJ0VycmV1cidcbiAgdHJhbnNsYXRlWyd3YXJuaW5nJ10gPSAnQXR0ZW50aW9uJ1xuXG4gIGNvbnN0IGh0bWwgPSAnPGRpdiBjbGFzcz1cImNhbGxvdXQgY2FsbG91dC0nICsgbGFiZWwgKyAnXCIgcm9sZT1cImFsZXJ0XCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cImNhbGxvdXRcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JnRpbWVzOzwvc3Bhbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8aDU+JyArIHRyYW5zbGF0ZVtsYWJlbF0gKyAnPC9oNT5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8cD4nICsgbWVzc2FnZSArICc8L3A+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICA8L2Rpdj4nXG5cbiAgJCgnI21haW5Db250ZW50JykucHJlcGVuZChodG1sKS5zbGlkZURvd24oJ3Nsb3cnKVxuICAkKCcuY2FsbG91dCcpLmRlbGF5KDUwMDApLnNsaWRlVXAoJ3Nsb3cnKVxufVxuXG4vL0VkaXRhYmxlXG5sZXQgbXlFZGl0SW5pdGlhbENvbnRlbnQgPSAnJ1xuXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubXllZGl0JywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIG15RWRpdEluaXRpYWxDb250ZW50ID0gJCh0aGlzKVxuICBsZXQgaHRtbCA9ICcnXG4gIGlmICgkKHRoaXMpLmRhdGEoJ3R5cGUnKSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAvL3RvZG86IEEgZmluYWxpc2VyXG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ3RvdG8nKVxuICAgIGh0bWwgPSBnZW5lcmVJbnB1dCgkKHRoaXMpKVxuICB9XG4gICQodGhpcykucmVwbGFjZVdpdGgoaHRtbClcbiAgJCgnI215ZWRpdC1pbnB1dCcpLmZvY3VzKClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdrZXl1cCcsICcjbXllZGl0LWlucHV0JywgZnVuY3Rpb24gKGUpIHtcbiAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICB1cGRhdGVEYXRhKClcbiAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XG4gICAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG4gIH1cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbXllZGl0LXZhbGlkZScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICB1cGRhdGVEYXRhKClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbXllZGl0LWFubnVsZScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbn0pXG5cbmZ1bmN0aW9uIHVwZGF0ZURhdGEgKCkge1xuICBsZXQgdmFsID0gJCgnI215ZWRpdC1pbnB1dCcpLnZhbCgpXG4gICQuYWpheCh7XG4gICAgdXJsOiBteUVkaXRJbml0aWFsQ29udGVudC5hdHRyKCdocmVmJyksXG4gICAgZGF0YToge1xuICAgICAgZmllbGQ6IG15RWRpdEluaXRpYWxDb250ZW50LmRhdGEoJ2ZpZWxkJyksXG4gICAgICB2YWx1ZTogdmFsXG4gICAgfSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICBteUVkaXRJbml0aWFsQ29udGVudC5odG1sKHZhbClcbiAgICAgICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gZ2VuZXJlSW5wdXQgKCRvYmopIHtcbiAgbGV0ICRodG1sID0gJzxkaXYgaWQ9XCJteUVkaXQtem9uZVwiPjxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPVwiJyArICRvYmouaHRtbCgpLnRyaW0oKSArICdcIiBpZD1cIm15ZWRpdC1pbnB1dFwiIC8+J1xuICAkaHRtbCA9ICRodG1sICsgJzxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNxdWFyZSBidG4tc20gYnRuLXN1Y2Nlc3MgYnRuLW91dGxpbmVcIiBpZD1cIm15ZWRpdC12YWxpZGVcIj48aSBjbGFzcz1cImZhcyBmYS1jaGVja1wiPjwvaT48L2J1dHRvbj4nXG4gICRodG1sID0gJGh0bWwgKyAnPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3F1YXJlIGJ0bi1zbSBidG4tZGFuZ2VyIGJ0bi1vdXRsaW5lXCIgaWQ9XCJteWVkaXQtYW5udWxlXCI+PGkgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+PC9idXR0b24+PC9kaXY+J1xuICByZXR1cm4gJGh0bWxcbn1cblxualF1ZXJ5LmZuLmRhdGFBdHRyID0gZnVuY3Rpb24gKG5hbWUsIGRlZikge1xuICByZXR1cm4gJCh0aGlzKVswXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtJyArIG5hbWUpIHx8IGRlZlxufVxuXG5qUXVlcnkuZm4uaGFzRGF0YUF0dHIgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gJCh0aGlzKVswXS5oYXNBdHRyaWJ1dGUoJ2RhdGEtJyArIG5hbWUpXG59XG5cbmZ1bmN0aW9uIGRhdGFUb09wdGlvbiAobmFtZSkge1xuICByZXR1cm4gbmFtZS5yZXBsYWNlKC8tKFthLXpdKS9nLCBmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiB4WzFdLnRvVXBwZXJDYXNlKClcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGFPcHRpb25zIChlbCwgY2FzdExpc3QpIHtcbiAgdmFyIG9wdGlvbnMgPSB7fVxuICAkLmVhY2goJChlbCkuZGF0YSgpLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuXG4gICAga2V5ID0gZGF0YVRvT3B0aW9uKGtleSlcblxuICAgIC8vIEVzY2FwZSBkYXRhLXByb3ZpZGVcbiAgICBpZiAoa2V5ID09ICdwcm92aWRlJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGNhc3RMaXN0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHR5cGUgPSBjYXN0TGlzdFtrZXldXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYm9vbCc6XG4gICAgICAgICAgdmFsdWUgPSBCb29sZWFuKHZhbHVlKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAnbnVtJzpcbiAgICAgICAgICB2YWx1ZSA9IE51bWJlcih2YWx1ZSlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnNwbGl0KCcsJylcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGRlZmF1bHQ6XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBvcHRpb25zW2tleV0gPSB2YWx1ZVxuICB9KVxuXG4gIHJldHVybiBvcHRpb25zXG59XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHRyaW0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0nKS50cmltO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciAkcGFyc2VJbnQgPSBnbG9iYWwucGFyc2VJbnQ7XG52YXIgaGV4ID0gL15bKy1dPzBbWHhdLztcbnZhciBGT1JDRUQgPSAkcGFyc2VJbnQod2hpdGVzcGFjZXMgKyAnMDgnKSAhPT0gOCB8fCAkcGFyc2VJbnQod2hpdGVzcGFjZXMgKyAnMHgxNicpICE9PSAyMjtcblxuLy8gYHBhcnNlSW50YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXBhcnNlaW50LXN0cmluZy1yYWRpeFxubW9kdWxlLmV4cG9ydHMgPSBGT1JDRUQgPyBmdW5jdGlvbiBwYXJzZUludChzdHJpbmcsIHJhZGl4KSB7XG4gIHZhciBTID0gdHJpbShTdHJpbmcoc3RyaW5nKSk7XG4gIHJldHVybiAkcGFyc2VJbnQoUywgKHJhZGl4ID4+PiAwKSB8fCAoaGV4LnRlc3QoUykgPyAxNiA6IDEwKSk7XG59IDogJHBhcnNlSW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyJyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUucmVwZWF0YCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUucmVwZWF0XG5tb2R1bGUuZXhwb3J0cyA9ICcnLnJlcGVhdCB8fCBmdW5jdGlvbiByZXBlYXQoY291bnQpIHtcbiAgdmFyIHN0ciA9IFN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpKTtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuICB2YXIgbiA9IHRvSW50ZWdlcihjb3VudCk7XG4gIGlmIChuIDwgMCB8fCBuID09IEluZmluaXR5KSB0aHJvdyBSYW5nZUVycm9yKCdXcm9uZyBudW1iZXIgb2YgcmVwZXRpdGlvbnMnKTtcbiAgZm9yICg7biA+IDA7IChuID4+Pj0gMSkgJiYgKHN0ciArPSBzdHIpKSBpZiAobiAmIDEpIHJlc3VsdCArPSBzdHI7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxuLy8gYHRoaXNOdW1iZXJWYWx1ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10aGlzbnVtYmVydmFsdWVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ251bWJlcicgJiYgY2xhc3NvZih2YWx1ZSkgIT0gJ051bWJlcicpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ0luY29ycmVjdCBpbnZvY2F0aW9uJyk7XG4gIH1cbiAgcmV0dXJuICt2YWx1ZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlcicpO1xudmFyIHRoaXNOdW1iZXJWYWx1ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90aGlzLW51bWJlci12YWx1ZScpO1xudmFyIHJlcGVhdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctcmVwZWF0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxudmFyIG5hdGl2ZVRvRml4ZWQgPSAxLjAudG9GaXhlZDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5cbnZhciBwb3cgPSBmdW5jdGlvbiAoeCwgbiwgYWNjKSB7XG4gIHJldHVybiBuID09PSAwID8gYWNjIDogbiAlIDIgPT09IDEgPyBwb3coeCwgbiAtIDEsIGFjYyAqIHgpIDogcG93KHggKiB4LCBuIC8gMiwgYWNjKTtcbn07XG5cbnZhciBsb2cgPSBmdW5jdGlvbiAoeCkge1xuICB2YXIgbiA9IDA7XG4gIHZhciB4MiA9IHg7XG4gIHdoaWxlICh4MiA+PSA0MDk2KSB7XG4gICAgbiArPSAxMjtcbiAgICB4MiAvPSA0MDk2O1xuICB9XG4gIHdoaWxlICh4MiA+PSAyKSB7XG4gICAgbiArPSAxO1xuICAgIHgyIC89IDI7XG4gIH0gcmV0dXJuIG47XG59O1xuXG52YXIgRk9SQ0VEID0gbmF0aXZlVG9GaXhlZCAmJiAoXG4gIDAuMDAwMDgudG9GaXhlZCgzKSAhPT0gJzAuMDAwJyB8fFxuICAwLjkudG9GaXhlZCgwKSAhPT0gJzEnIHx8XG4gIDEuMjU1LnRvRml4ZWQoMikgIT09ICcxLjI1JyB8fFxuICAxMDAwMDAwMDAwMDAwMDAwMTI4LjAudG9GaXhlZCgwKSAhPT0gJzEwMDAwMDAwMDAwMDAwMDAxMjgnXG4pIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIFY4IH4gQW5kcm9pZCA0LjMtXG4gIG5hdGl2ZVRvRml4ZWQuY2FsbCh7fSk7XG59KTtcblxuLy8gYE51bWJlci5wcm90b3R5cGUudG9GaXhlZGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1udW1iZXIucHJvdG90eXBlLnRvZml4ZWRcbiQoeyB0YXJnZXQ6ICdOdW1iZXInLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LXN0YXRlbWVudHNcbiAgdG9GaXhlZDogZnVuY3Rpb24gdG9GaXhlZChmcmFjdGlvbkRpZ2l0cykge1xuICAgIHZhciBudW1iZXIgPSB0aGlzTnVtYmVyVmFsdWUodGhpcyk7XG4gICAgdmFyIGZyYWN0RGlnaXRzID0gdG9JbnRlZ2VyKGZyYWN0aW9uRGlnaXRzKTtcbiAgICB2YXIgZGF0YSA9IFswLCAwLCAwLCAwLCAwLCAwXTtcbiAgICB2YXIgc2lnbiA9ICcnO1xuICAgIHZhciByZXN1bHQgPSAnMCc7XG4gICAgdmFyIGUsIHosIGosIGs7XG5cbiAgICB2YXIgbXVsdGlwbHkgPSBmdW5jdGlvbiAobiwgYykge1xuICAgICAgdmFyIGluZGV4ID0gLTE7XG4gICAgICB2YXIgYzIgPSBjO1xuICAgICAgd2hpbGUgKCsraW5kZXggPCA2KSB7XG4gICAgICAgIGMyICs9IG4gKiBkYXRhW2luZGV4XTtcbiAgICAgICAgZGF0YVtpbmRleF0gPSBjMiAlIDFlNztcbiAgICAgICAgYzIgPSBmbG9vcihjMiAvIDFlNyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBkaXZpZGUgPSBmdW5jdGlvbiAobikge1xuICAgICAgdmFyIGluZGV4ID0gNjtcbiAgICAgIHZhciBjID0gMDtcbiAgICAgIHdoaWxlICgtLWluZGV4ID49IDApIHtcbiAgICAgICAgYyArPSBkYXRhW2luZGV4XTtcbiAgICAgICAgZGF0YVtpbmRleF0gPSBmbG9vcihjIC8gbik7XG4gICAgICAgIGMgPSAoYyAlIG4pICogMWU3O1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgZGF0YVRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGluZGV4ID0gNjtcbiAgICAgIHZhciBzID0gJyc7XG4gICAgICB3aGlsZSAoLS1pbmRleCA+PSAwKSB7XG4gICAgICAgIGlmIChzICE9PSAnJyB8fCBpbmRleCA9PT0gMCB8fCBkYXRhW2luZGV4XSAhPT0gMCkge1xuICAgICAgICAgIHZhciB0ID0gU3RyaW5nKGRhdGFbaW5kZXhdKTtcbiAgICAgICAgICBzID0gcyA9PT0gJycgPyB0IDogcyArIHJlcGVhdC5jYWxsKCcwJywgNyAtIHQubGVuZ3RoKSArIHQ7XG4gICAgICAgIH1cbiAgICAgIH0gcmV0dXJuIHM7XG4gICAgfTtcblxuICAgIGlmIChmcmFjdERpZ2l0cyA8IDAgfHwgZnJhY3REaWdpdHMgPiAyMCkgdGhyb3cgUmFuZ2VFcnJvcignSW5jb3JyZWN0IGZyYWN0aW9uIGRpZ2l0cycpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAobnVtYmVyICE9IG51bWJlcikgcmV0dXJuICdOYU4nO1xuICAgIGlmIChudW1iZXIgPD0gLTFlMjEgfHwgbnVtYmVyID49IDFlMjEpIHJldHVybiBTdHJpbmcobnVtYmVyKTtcbiAgICBpZiAobnVtYmVyIDwgMCkge1xuICAgICAgc2lnbiA9ICctJztcbiAgICAgIG51bWJlciA9IC1udW1iZXI7XG4gICAgfVxuICAgIGlmIChudW1iZXIgPiAxZS0yMSkge1xuICAgICAgZSA9IGxvZyhudW1iZXIgKiBwb3coMiwgNjksIDEpKSAtIDY5O1xuICAgICAgeiA9IGUgPCAwID8gbnVtYmVyICogcG93KDIsIC1lLCAxKSA6IG51bWJlciAvIHBvdygyLCBlLCAxKTtcbiAgICAgIHogKj0gMHgxMDAwMDAwMDAwMDAwMDtcbiAgICAgIGUgPSA1MiAtIGU7XG4gICAgICBpZiAoZSA+IDApIHtcbiAgICAgICAgbXVsdGlwbHkoMCwgeik7XG4gICAgICAgIGogPSBmcmFjdERpZ2l0cztcbiAgICAgICAgd2hpbGUgKGogPj0gNykge1xuICAgICAgICAgIG11bHRpcGx5KDFlNywgMCk7XG4gICAgICAgICAgaiAtPSA3O1xuICAgICAgICB9XG4gICAgICAgIG11bHRpcGx5KHBvdygxMCwgaiwgMSksIDApO1xuICAgICAgICBqID0gZSAtIDE7XG4gICAgICAgIHdoaWxlIChqID49IDIzKSB7XG4gICAgICAgICAgZGl2aWRlKDEgPDwgMjMpO1xuICAgICAgICAgIGogLT0gMjM7XG4gICAgICAgIH1cbiAgICAgICAgZGl2aWRlKDEgPDwgaik7XG4gICAgICAgIG11bHRpcGx5KDEsIDEpO1xuICAgICAgICBkaXZpZGUoMik7XG4gICAgICAgIHJlc3VsdCA9IGRhdGFUb1N0cmluZygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbXVsdGlwbHkoMCwgeik7XG4gICAgICAgIG11bHRpcGx5KDEgPDwgLWUsIDApO1xuICAgICAgICByZXN1bHQgPSBkYXRhVG9TdHJpbmcoKSArIHJlcGVhdC5jYWxsKCcwJywgZnJhY3REaWdpdHMpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZnJhY3REaWdpdHMgPiAwKSB7XG4gICAgICBrID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgIHJlc3VsdCA9IHNpZ24gKyAoayA8PSBmcmFjdERpZ2l0c1xuICAgICAgICA/ICcwLicgKyByZXBlYXQuY2FsbCgnMCcsIGZyYWN0RGlnaXRzIC0gaykgKyByZXN1bHRcbiAgICAgICAgOiByZXN1bHQuc2xpY2UoMCwgayAtIGZyYWN0RGlnaXRzKSArICcuJyArIHJlc3VsdC5zbGljZShrIC0gZnJhY3REaWdpdHMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gc2lnbiArIHJlc3VsdDtcbiAgICB9IHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgcGFyc2VJbnRJbXBsZW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9udW1iZXItcGFyc2UtaW50Jyk7XG5cbi8vIGBwYXJzZUludGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1wYXJzZWludC1zdHJpbmctcmFkaXhcbiQoeyBnbG9iYWw6IHRydWUsIGZvcmNlZDogcGFyc2VJbnQgIT0gcGFyc2VJbnRJbXBsZW1lbnRhdGlvbiB9LCB7XG4gIHBhcnNlSW50OiBwYXJzZUludEltcGxlbWVudGF0aW9uXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=